/* ========================================
   PROJECT DETAIL MODAL — INTERACTIVE LOGIC
   Click handler, gallery, lightbox, animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Project Data ----------
  const projectsData = {
    'suru-workspace': {
      name: 'Suru Workspace',
      type: 'Web Application / Productivity SaaS',
      client: 'Personal Project',
      projectType: 'Web Application / Productivity SaaS',
      surfaceArea: 'Personal Productivity Workspace',
      location: 'Cloud / Vercel',
      tags: ['Web Application', 'Productivity SaaS', 'React 19', 'Vite', 'Supabase', 'Tailwind CSS'],
      image: 'assets/suru-dashboard.png',
      gallery: [
        'assets/suru-dashboard.png',
        'assets/suru-projects.png',
        'assets/suru-goals.png',
        'assets/suru-tasks.png'
      ],
      description: `
        <p>Suru Workspace adalah aplikasi produktivitas berbasis web yang dirancang untuk membantu pengguna mengelola project, menetapkan goals, menyusun tugas harian, dan memantau progres pekerjaan dalam satu workspace terpadu.</p>
        <p>Aplikasi ini menyediakan dashboard terpusat, pengelolaan project, tracking goals, manajemen tasks, serta penyimpanan data pengguna. Antarmukanya dirancang agar aktivitas dan perkembangan setiap project dapat dipantau dengan lebih terstruktur.</p>
        <h4>Fitur utama:</h4>
        <ul>
          <li><strong>Dashboard produktivitas:</strong> Menampilkan ringkasan metrik kinerja, streak aktif, daftar deadline kritis, dan pemantauan tugas secara terpusat.</li>
          <li><strong>Manajemen project dan tracking progres:</strong> Memantau tahapan deliverable, siklus pengembangan, milestone, dan progres penyelesaian inisiatif.</li>
          <li><strong>Pengelolaan goals dan target:</strong> Membantu menetapkan sasaran strategis jangka panjang dengan breakdown milestone terukur dan tracking persentase keberhasilan.</li>
          <li><strong>Manajemen tasks dan perencanaan aktivitas:</strong> Merencanakan alur kerja harian, filter tiket prioritas, estimasi durasi, dan checklist pekerjaan.</li>
          <li><strong>Autentikasi pengguna dan penyimpanan data berdasarkan akun:</strong> Mendukung sinkronisasi data cloud real-time via Supabase dan persistensi mode tamu lokal.</li>
          <li><strong>Tampilan responsif untuk desktop dan perangkat mobile:</strong> Desain antarmuka fleksibel yang nyaman diakses melalui berbagai resolusi perangkat.</li>
        </ul>
        <h4>Teknologi:</h4>
        <ul>
          <li><strong>React 19 & React Router 7:</strong> Framework aplikasi modern berbasis komponen dan navigasi SPA.</li>
          <li><strong>Vite:</strong> Build tool dan frontend bundler berkinerja tinggi.</li>
          <li><strong>Tailwind CSS:</strong> Utilitas styling responsif dengan Stitch design tokens.</li>
          <li><strong>Supabase:</strong> Backend cloud database PostgreSQL, sinkronisasi data, dan autentikasi pengguna.</li>
          <li><strong>Material Symbols:</strong> Google modern typography dan sistem ikonografi.</li>
          <li><strong>Vercel:</strong> Deployment cloud platform (<a href="https://suruwp.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">https://suruwp.vercel.app/</a>).</li>
        </ul>
      `
    },
    'travelmalang': {
      name: 'Suru Workspace',
      type: 'Web Application / Productivity SaaS',
      client: 'Suru Workspace',
      projectType: 'Web Application / Productivity SaaS',
      surfaceArea: 'Personal Productivity Workspace',
      location: 'Cloud / Vercel',
      tags: ['Web Application', 'Productivity SaaS', 'React 19', 'Vite', 'Supabase', 'Tailwind CSS'],
      image: 'assets/suru-dashboard.png',
      gallery: [
        'assets/suru-dashboard.png',
        'assets/suru-projects.png',
        'assets/suru-goals.png',
        'assets/suru-tasks.png'
      ],
      description: `
        <p>Suru Workspace adalah aplikasi produktivitas berbasis web yang dirancang untuk membantu pengguna mengelola project, menetapkan goals, menyusun tugas harian, dan memantau progres pekerjaan dalam satu workspace terpadu.</p>
        <p>Aplikasi ini menyediakan dashboard terpusat, pengelolaan project, tracking goals, manajemen tasks, serta penyimpanan data pengguna. Antarmukanya dirancang agar aktivitas dan perkembangan setiap project dapat dipantau dengan lebih terstruktur.</p>
        <h4>Fitur utama:</h4>
        <ul>
          <li><strong>Dashboard produktivitas:</strong> Menampilkan ringkasan metrik kinerja, streak aktif, daftar deadline kritis, dan pemantauan tugas secara terpusat.</li>
          <li><strong>Manajemen project dan tracking progres:</strong> Memantau tahapan deliverable, siklus pengembangan, milestone, dan progres penyelesaian inisiatif.</li>
          <li><strong>Pengelolaan goals dan target:</strong> Membantu menetapkan sasaran strategis jangka panjang dengan breakdown milestone terukur dan tracking persentase keberhasilan.</li>
          <li><strong>Manajemen tasks dan perencanaan aktivitas:</strong> Merencanakan alur kerja harian, filter tiket prioritas, estimasi durasi, dan checklist pekerjaan.</li>
          <li><strong>Autentikasi pengguna dan penyimpanan data berdasarkan akun:</strong> Mendukung sinkronisasi data cloud real-time via Supabase dan persistensi mode tamu lokal.</li>
          <li><strong>Tampilan responsif untuk desktop dan perangkat mobile:</strong> Desain antarmuka fleksibel yang nyaman diakses melalui berbagai resolusi perangkat.</li>
        </ul>
        <h4>Teknologi:</h4>
        <ul>
          <li><strong>React 19 & React Router 7:</strong> Framework aplikasi modern berbasis komponen dan navigasi SPA.</li>
          <li><strong>Vite:</strong> Build tool dan frontend bundler berkinerja tinggi.</li>
          <li><strong>Tailwind CSS:</strong> Utilitas styling responsif dengan Stitch design tokens.</li>
          <li><strong>Supabase:</strong> Backend cloud database PostgreSQL, sinkronisasi data, dan autentikasi pengguna.</li>
          <li><strong>Material Symbols:</strong> Google modern typography dan sistem ikonografi.</li>
          <li><strong>Vercel:</strong> Deployment cloud platform (<a href="https://suruwp.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">https://suruwp.vercel.app/</a>).</li>
        </ul>
      `
    },
    'tokoroti': {
      name: 'Suru Workspace',
      type: 'Web Application / Productivity SaaS',
      client: 'Suru Workspace',
      projectType: 'Web Application / Productivity SaaS',
      surfaceArea: 'Personal Productivity Workspace',
      location: 'Cloud / Vercel',
      tags: ['Web Application', 'Productivity SaaS', 'React 19', 'Vite', 'Supabase', 'Tailwind CSS'],
      image: 'assets/suru-dashboard.png',
      gallery: [
        'assets/suru-dashboard.png',
        'assets/suru-projects.png',
        'assets/suru-goals.png',
        'assets/suru-tasks.png'
      ],
      description: `
        <p>Suru Workspace adalah aplikasi produktivitas berbasis web yang dirancang untuk membantu pengguna mengelola project, menetapkan goals, menyusun tugas harian, dan memantau progres pekerjaan dalam satu workspace terpadu.</p>
        <p>Aplikasi ini menyediakan dashboard terpusat, pengelolaan project, tracking goals, manajemen tasks, serta penyimpanan data pengguna. Antarmukanya dirancang agar aktivitas dan perkembangan setiap project dapat dipantau dengan lebih terstruktur.</p>
        <h4>Fitur utama:</h4>
        <ul>
          <li><strong>Dashboard produktivitas:</strong> Menampilkan ringkasan metrik kinerja, streak aktif, daftar deadline kritis, dan pemantauan tugas secara terpusat.</li>
          <li><strong>Manajemen project dan tracking progres:</strong> Memantau tahapan deliverable, siklus pengembangan, milestone, dan progres penyelesaian inisiatif.</li>
          <li><strong>Pengelolaan goals dan target:</strong> Membantu menetapkan sasaran strategis jangka panjang dengan breakdown milestone terukur dan tracking persentase keberhasilan.</li>
          <li><strong>Manajemen tasks dan perencanaan aktivitas:</strong> Merencanakan alur kerja harian, filter tiket prioritas, estimasi durasi, dan checklist pekerjaan.</li>
          <li><strong>Autentikasi pengguna dan penyimpanan data berdasarkan akun:</strong> Mendukung sinkronisasi data cloud real-time via Supabase dan persistensi mode tamu lokal.</li>
          <li><strong>Tampilan responsif untuk desktop dan perangkat mobile:</strong> Desain antarmuka fleksibel yang nyaman diakses melalui berbagai resolusi perangkat.</li>
        </ul>
        <h4>Teknologi:</h4>
        <ul>
          <li><strong>React 19 & React Router 7:</strong> Framework aplikasi modern berbasis komponen dan navigasi SPA.</li>
          <li><strong>Vite:</strong> Build tool dan frontend bundler berkinerja tinggi.</li>
          <li><strong>Tailwind CSS:</strong> Utilitas styling responsif dengan Stitch design tokens.</li>
          <li><strong>Supabase:</strong> Backend cloud database PostgreSQL, sinkronisasi data, dan autentikasi pengguna.</li>
          <li><strong>Material Symbols:</strong> Google modern typography dan sistem ikonografi.</li>
          <li><strong>Vercel:</strong> Deployment cloud platform (<a href="https://suruwp.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">https://suruwp.vercel.app/</a>).</li>
        </ul>
      `
    }
  };

  // ---------- DOM Elements ----------
  const modal = document.getElementById('projectModal');
  const lightbox = document.getElementById('projectLightbox');

  if (!modal) return;

  const modalContent = modal.querySelector('.project-modal-content');
  const closeBtn = modal.querySelector('.project-modal-close');
  const backBtn = modal.querySelector('.project-modal-back');
  const heroTitle = modal.querySelector('.project-hero-title');
  const heroSubtitle = modal.querySelector('.project-hero-subtitle');
  const mainImage = modal.querySelector('#projectMainImage');
  const thumbsContainer = modal.querySelector('.project-gallery-thumbs');
  const infoClient = modal.querySelector('#projectClient');
  const infoType = modal.querySelector('#projectType');
  const infoSurface = modal.querySelector('#projectSurface');
  const infoLocation = modal.querySelector('#projectLocation');
  const descriptionText = modal.querySelector('#projectDescription');
  const tagsContainer = modal.querySelector('#projectTags');
  const lightboxImage = lightbox ? lightbox.querySelector('img') : null;

  const portfolioCards = document.querySelectorAll('.portfolio-card[data-project]');

  // ---------- Open Modal ----------
  function openModal(projectKey) {
    const data = projectsData[projectKey];
    if (!data) return;

    // Populate hero
    heroTitle.textContent = 'PROJECT';
    heroSubtitle.textContent = data.name;

    // Populate main image
    mainImage.src = data.image;
    mainImage.alt = data.name;

    // Populate thumbnails
    thumbsContainer.innerHTML = '';
    const galleryList = data.gallery || [data.image, data.image, data.image, data.image];
    galleryList.forEach((imgSrc, i) => {
      const thumb = document.createElement('div');
      thumb.className = `project-gallery-thumb${i === 0 ? ' active' : ''}`;
      thumb.innerHTML = `<img src="${imgSrc}" alt="${data.name} - View ${i + 1}" loading="lazy">`;
      thumb.addEventListener('click', () => {
        // Switch active thumb
        thumbsContainer.querySelectorAll('.project-gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        // Animate main image
        mainImage.style.opacity = '0';
        mainImage.style.transform = 'scale(0.98)';
        setTimeout(() => {
          mainImage.src = imgSrc;
          mainImage.style.opacity = '1';
          mainImage.style.transform = 'scale(1)';
        }, 200);
      });
      thumbsContainer.appendChild(thumb);
    });

    // Populate info
    infoClient.textContent = data.client;
    infoType.textContent = data.projectType;
    infoSurface.textContent = data.surfaceArea;
    infoLocation.textContent = data.location;

    // Populate description
    descriptionText.innerHTML = data.description;

    // Populate tags
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'project-detail-tag';
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    // Show modal
    modal.classList.add('active');
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Scroll modal to top
    modal.scrollTop = 0;

    // Update URL hash
    history.pushState(null, '', `#project-${projectKey}`);
  }

  // ---------- Close Modal ----------
  function closeModal() {
    modal.classList.remove('active');
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    // Remove hash
    if (window.location.hash.startsWith('#project-')) {
      history.pushState(null, '', window.location.pathname);
    }
  }

  // ---------- Lightbox ----------
  function openLightbox(imageSrc) {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
  }

  // ---------- Event Listeners ----------

  // Portfolio card clicks
  portfolioCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const projectKey = card.getAttribute('data-project');
      openModal(projectKey);
    });
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Back button
  if (backBtn) {
    backBtn.addEventListener('click', closeModal);
  }

  // Click backdrop to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('project-modal-backdrop')) {
      closeModal();
    }
  });

  // Main image click → lightbox
  if (mainImage) {
    mainImage.closest('.project-gallery-main').addEventListener('click', () => {
      openLightbox(mainImage.src);
    });
  }

  // Lightbox close on click
  if (lightbox) {
    lightbox.addEventListener('click', closeLightbox);
  }

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      } else if (modal.classList.contains('active')) {
        closeModal();
      }
    }
  });

  // Handle back/forward navigation
  window.addEventListener('popstate', () => {
    if (!window.location.hash.startsWith('#project-')) {
      closeModal();
    }
  });

  // Check URL hash on load
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const projectKey = hash.replace('#project-', '');
    if (projectsData[projectKey]) {
      // Small delay to ensure page is loaded
      setTimeout(() => openModal(projectKey), 300);
    }
  }

});
