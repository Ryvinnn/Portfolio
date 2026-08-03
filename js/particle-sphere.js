/* ========================================
   PARTICLE SPHERE ANIMATION
   3D Sphere with hover dent interaction
   Optimized for high performance & 60fps
   ======================================== */

(function () {
  const canvas = document.getElementById('particleSphere');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Adaptive particle count for ultra-smooth performance on mobile
  const isMobile = window.innerWidth <= 768;
  
  // --- Configuration ---
  const CONFIG = {
    particleCount: isMobile ? 380 : 750,
    dotSize: isMobile ? 1.6 : 1.8,
    rotationSpeedX: 0.003,
    rotationSpeedY: 0.005,
    waveAmplitude: 18,
    waveFrequency: 3,
    waveSpeed: 0.02,
    colors: {
      primary: { r: 74, g: 123, b: 247 },
      secondary: { r: 107, g: 149, b: 255 },
      tertiary: { r: 255, g: 200, b: 87 },
    },
    connectionDistance: isMobile ? 50 : 60,
    connectionOpacity: 0.08,
    glowIntensity: 0.6,
    sphereMorphSpeed: 0.0008,
    sphereMorphIntensity: 0.15,
    // Dent effect
    dentRadius: 0.45,
    dentDepth: 0.28,
    dentSmoothing: 0.12,
  };

  // --- State ---
  let width, height, dpr;
  let angleX = 0, angleY = 0;
  let wavePhase = 0, sphereMorphPhase = 0;
  let animationId = null;
  let isCanvasVisible = true;

  // Mouse state
  let mouseActive = false;
  let mouseInfluence = 0;
  let rawMouseX = 0, rawMouseY = 0;
  let smoothMouseX = 0, smoothMouseY = 0;

  // Particles
  const particles = [];
  let sortedParticles = [];

  // ==========================================
  //   PARTICLE CREATION (Fibonacci sphere)
  // ==========================================

  function createParticles() {
    particles.length = 0;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    for (let i = 0; i < CONFIG.particleCount; i++) {
      const t = i / CONFIG.particleCount;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const x = Math.sin(inclination) * Math.cos(azimuth);
      const y = Math.sin(inclination) * Math.sin(azimuth);
      const z = Math.cos(inclination);

      let colorType;
      const latitude = Math.abs(z);
      if (latitude > 0.7) colorType = 'tertiary';
      else if (latitude > 0.3) colorType = 'primary';
      else colorType = 'secondary';

      particles.push({
        baseX: x, baseY: y, baseZ: z,
        screenX: 0, screenY: 0, depth: 0, scale: 1,
        colorType,
        sizeMultiplier: 0.7 + Math.random() * 0.6,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.5 + Math.random() * 1.5,
      });
    }
    sortedParticles = new Array(particles.length);
  }

  // ==========================================
  //   RESIZE
  // ==========================================

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // ==========================================
  //   MOUSE TRACKING
  // ==========================================

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    rawMouseX = e.clientX - rect.left;
    rawMouseY = e.clientY - rect.top;
    mouseActive = true;
  }, { passive: true });

  canvas.addEventListener('mouseleave', () => {
    mouseActive = false;
  }, { passive: true });

  // ==========================================
  //   3D HELPERS
  // ==========================================

  function rotatePoint(x, y, z, ax, ay) {
    const cosY = Math.cos(ay), sinY = Math.sin(ay);
    const x1 = x * cosY + z * sinY;
    const z1 = -x * sinY + z * cosY;
    const cosX = Math.cos(ax), sinX = Math.sin(ax);
    const y1 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;
    return { x: x1, y: y1, z: z2 };
  }

  // ==========================================
  //   RENDER LOOP
  // ==========================================

  function startAnimation() {
    if (!animationId && isCanvasVisible && !document.hidden) {
      animationId = requestAnimationFrame(render);
    }
  }

  function stopAnimation() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  function render() {
    if (!isCanvasVisible || document.hidden) {
      animationId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // --- Smooth mouse position ---
    smoothMouseX += (rawMouseX - smoothMouseX) * CONFIG.dentSmoothing;
    smoothMouseY += (rawMouseY - smoothMouseY) * CONFIG.dentSmoothing;

    // Smooth influence fade in/out
    if (mouseActive) {
      mouseInfluence = Math.min(1, mouseInfluence + 0.06);
    } else {
      mouseInfluence = Math.max(0, mouseInfluence - 0.03);
    }

    // --- Update rotation ---
    angleX += CONFIG.rotationSpeedX;
    angleY += CONFIG.rotationSpeedY;
    wavePhase += CONFIG.waveSpeed;
    sphereMorphPhase += CONFIG.sphereMorphSpeed;

    const radius = Math.min(width, height) * 0.36;
    const centerX = width / 2;
    const centerY = height / 2;
    const sMorph = Math.sin(sphereMorphPhase) * CONFIG.sphereMorphIntensity;

    // --- Mouse 3D point on sphere surface ---
    const mNormX = (smoothMouseX - centerX) / radius;
    const mNormY = (smoothMouseY - centerY) / radius;
    const mDistSq = mNormX * mNormX + mNormY * mNormY;
    const mouseNearSphere = mDistSq < 2.5;

    let mouse3Dx = 0, mouse3Dy = 0, mouse3Dz = 0;
    if (mouseNearSphere && mouseInfluence > 0.01) {
      mouse3Dx = mNormX * radius;
      mouse3Dy = mNormY * radius;
      const frontZ = Math.max(0, 1 - Math.min(1, Math.sqrt(mDistSq)));
      mouse3Dz = frontZ * radius;
    }

    const dentRadius3D = radius * CONFIG.dentRadius;
    const dentRadius3DSq = dentRadius3D * dentRadius3D;

    // --- Project all particles ---
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Wave distortion
      const waveOffset = Math.sin(p.baseY * CONFIG.waveFrequency + wavePhase)
        * Math.cos(p.baseX * CONFIG.waveFrequency * 0.7 + wavePhase * 0.5);
      const distortion = 1 + (waveOffset * CONFIG.waveAmplitude) / radius;

      // Subtle morph
      const mX = p.baseX * (1 + sMorph * Math.sin(p.baseZ * 3));
      const mY = p.baseY * (1 + sMorph * Math.cos(p.baseX * 3));
      const mZ = p.baseZ * (1 - sMorph * Math.sin(p.baseY * 3));

      const sx = mX * radius * distortion;
      const sy = mY * radius * distortion;
      const sz = mZ * radius * distortion;

      // Rotate
      const rotated = rotatePoint(sx, sy, sz, angleX, angleY);
      let rx = rotated.x;
      let ry = rotated.y;
      let rz = rotated.z;

      // --- Apply dent effect ---
      if (mouseInfluence > 0.01 && mouseNearSphere) {
        const dx = rx - mouse3Dx;
        const dy = ry - mouse3Dy;
        const dz = rz - mouse3Dz;
        const dist3DSq = dx * dx + dy * dy + dz * dz;

        if (dist3DSq < dentRadius3DSq) {
          const dist3D = Math.sqrt(dist3DSq);
          const influence = 1 - (dist3D / dentRadius3D);
          const pushAmount = influence * influence * CONFIG.dentDepth * radius * mouseInfluence;

          const len = Math.sqrt(rx * rx + ry * ry + rz * rz);
          if (len > 0.01) {
            const newLen = Math.max(0, len - pushAmount);
            const scale = newLen / len;
            rx *= scale;
            ry *= scale;
            rz *= scale;
          }
        }
      }

      // Perspective projection
      const perspective = 800;
      const projScale = perspective / (perspective + rz);
      p.screenX = centerX + rx * projScale;
      p.screenY = centerY + ry * projScale;
      p.depth = rz;
      p.scale = projScale;

      sortedParticles[i] = p;
    }

    // --- Sort in-place by depth without creating new arrays ---
    sortedParticles.sort((a, b) => a.depth - b.depth);

    // --- Draw connections ---
    ctx.lineWidth = 0.5;
    const connDist = CONFIG.connectionDistance;
    const connDistSq = connDist * connDist;
    const step = isMobile ? 4 : 3;

    for (let i = 0; i < sortedParticles.length; i += step) {
      const p1 = sortedParticles[i];
      if (p1.depth < -radius * 0.3) continue;

      for (let j = i + step; j < sortedParticles.length; j += step) {
        const p2 = sortedParticles[j];
        const dx = p1.screenX - p2.screenX;
        const dy = p1.screenY - p2.screenY;
        const distSq = dx * dx + dy * dy;

        if (distSq < connDistSq) {
          const alpha = (1 - distSq / connDistSq) * CONFIG.connectionOpacity;
          const depthAlpha = Math.max(0, (p1.depth + radius) / (2 * radius));
          ctx.strokeStyle = `rgba(74, 123, 247, ${alpha * depthAlpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.screenX, p1.screenY);
          ctx.lineTo(p2.screenX, p2.screenY);
          ctx.stroke();
        }
      }
    }

    // --- Draw particles ---
    for (let i = 0; i < sortedParticles.length; i++) {
      const p = sortedParticles[i];
      const color = CONFIG.colors[p.colorType];

      const depthNorm = (p.depth + radius) / (2 * radius);
      const alpha = 0.15 + depthNorm * 0.85;
      const pulse = Math.sin(wavePhase * p.pulseSpeed + p.pulseOffset) * 0.3 + 0.7;
      const dotRadius = CONFIG.dotSize * p.sizeMultiplier * p.scale * pulse;

      // Glow (desktop only for max performance)
      if (!isMobile && depthNorm > 0.65 && dotRadius > 1.6) {
        const glowR = dotRadius * 2.5;
        const gradient = ctx.createRadialGradient(
          p.screenX, p.screenY, 0, p.screenX, p.screenY, glowR
        );
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * CONFIG.glowIntensity * 0.35})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, glowR, 0, Math.PI * 2);
        ctx.fill();
      }

      // Dot
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.screenX, p.screenY, Math.max(0.5, dotRadius), 0, Math.PI * 2);
      ctx.fill();
    }

    animationId = requestAnimationFrame(render);
  }

  // ==========================================
  //   INIT & VIEWPORT OBSERVER
  // ==========================================

  function init() {
    createParticles();
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Pause canvas completely when out of viewport to free up 100% CPU/GPU
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isCanvasVisible = entry.isIntersecting;
          if (isCanvasVisible) {
            startAnimation();
          } else {
            stopAnimation();
          }
        });
      }, { threshold: 0.05 });

      observer.observe(canvas);
    } else {
      startAnimation();
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
