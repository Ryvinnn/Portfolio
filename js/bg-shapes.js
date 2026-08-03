/**
 * bg-shapes.js — Background Decoration Shapes
 *
 * Injects decorative SVG squiggle shapes into sections.
 * Shapes use CSS variable --shape-color for theme-adaptive coloring.
 *
 * Usage (declarative via HTML):
 *   Add data attributes to any section:
 *   <section data-bg-shape="squiggle-1" data-shape-pos="tr" data-shape-size="lg" data-shape-rotate="45">
 *
 * Usage (programmatic):
 *   BgShapes.inject(element, { shape: 'squiggle-1', position: 'br', size: 'xl', rotate: 135 });
 *
 * Available shapes: squiggle-1, squiggle-2, squiggle-3, asterisk, sparkle
 * Positions: tl, tr, bl, br, cl, cr
 * Sizes: sm, md, lg, xl
 * Rotations: 45, 90, 135, 180, 225, 270
 */

const BgShapes = (() => {

  // ─── SVG Shape Library ─────────────────────────────────────────────
  // All shapes are flat, no gradient/shadow/outline — solid fill only.
  // The fill color comes from CSS: var(--shape-color, currentColor)

  const shapes = {

    /* Flowing squiggle — organic S-curve ribbon */
    'squiggle-1': `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,200 C20,120 80,60 140,80 C200,100 180,180 240,200 C300,220 360,160 380,100 C400,40 360,300 300,320 C240,340 200,280 140,300 C80,320 60,380 20,360 C-20,340 20,280 20,200Z" fill-rule="evenodd"/>
    </svg>`,

    /* Wider squiggle — horizontal wave */
    'squiggle-2': `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,150 C40,50 80,50 120,150 C160,250 200,250 240,150 C280,50 320,50 360,150 C400,250 440,250 500,150 L500,180 C440,280 400,280 360,180 C320,80 280,80 240,180 C200,280 160,280 120,180 C80,80 40,80 0,180Z"/>
    </svg>`,

    /* Compact swirl squiggle */
    'squiggle-3': `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <path d="M200,40 C280,40 340,100 340,180 C340,240 300,280 240,280 C180,280 160,240 160,200 C160,160 180,140 210,140 C240,140 260,160 260,190 C260,200 255,210 245,210 C235,210 230,200 230,190 C230,175 220,165 210,165 C195,165 185,180 185,200 C185,230 200,255 240,255 C290,255 315,220 315,180 C315,110 260,65 200,65 C130,65 65,130 65,200 C65,290 130,360 200,360 C260,360 320,320 350,260" stroke-width="28" stroke-linecap="round" fill="none" stroke="var(--shape-color, currentColor)"/>
    </svg>`,

    /* Six-point asterisk / sparkle burst */
    'asterisk': `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <path d="M200,20 L215,160 L340,60 L230,175 L380,200 L230,225 L340,340 L215,240 L200,380 L185,240 L60,340 L170,225 L20,200 L170,175 L60,60 L185,160Z"/>
    </svg>`,

    /* Four-point sparkle / diamond star */
    'sparkle': `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <path d="M200,10 C210,120 215,160 200,200 C215,240 210,280 200,390 C190,280 185,240 200,200 C185,160 190,120 200,10Z M10,200 C120,190 160,185 200,200 C240,185 280,190 390,200 C280,210 240,215 200,200 C160,215 120,210 10,200Z"/>
    </svg>`
  };

  // ─── Shape Injector ────────────────────────────────────────────────

  function createShapeElement(options = {}) {
    const {
      shape = 'squiggle-1',
      position = 'tr',
      size = 'lg',
      rotate = null,
      opacity = null
    } = options;

    const wrapper = document.createElement('div');

    // Build class list
    const classes = ['bg-shape', `bg-shape--${size}`, `bg-shape--${position}`];
    if (rotate) classes.push(`bg-shape--rotate-${rotate}`);
    if (opacity) classes.push(`bg-shape--${opacity}`);
    wrapper.className = classes.join(' ');

    // For squiggle-3 which uses stroke instead of fill, the SVG handles color via CSS var
    wrapper.innerHTML = shapes[shape] || shapes['squiggle-1'];

    return wrapper;
  }

  function inject(element, options = {}) {
    const shapeEl = createShapeElement(options);
    element.insertBefore(shapeEl, element.firstChild);
    return shapeEl;
  }

  // ─── Auto-init from data attributes ────────────────────────────────
  // Scans all [data-bg-shape] elements and injects shapes.

  function autoInit() {
    document.querySelectorAll('[data-bg-shape]').forEach(el => {
      const shape = el.getAttribute('data-bg-shape') || 'squiggle-1';
      const position = el.getAttribute('data-shape-pos') || 'tr';
      const size = el.getAttribute('data-shape-size') || 'lg';
      const rotate = el.getAttribute('data-shape-rotate') || null;
      const opacity = el.getAttribute('data-shape-opacity') || null;

      inject(el, { shape, position, size, rotate, opacity });
    });
  }

  // Run auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }

  // ─── Public API ────────────────────────────────────────────────────
  return { inject, createShapeElement, shapes };

})();
