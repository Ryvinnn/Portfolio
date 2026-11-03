/* ========================================
   PROJECT DETAIL MODAL — INTERACTIVE LOGIC
   Click handler, gallery, lightbox, animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Project Data ----------
  const projectsData = {
    'suru-workspace': {
      name: 'Suru Workspace',
      url: 'https://suruwp.vercel.app/',
      type: 'Web Application / Productivity SaaS',
      client: 'Personal Project',
      projectType: 'Web Application / Productivity SaaS',
      surfaceArea: 'Personal Productivity Workspace',
      location: 'Cloud / Vercel',
      tags: ['Web Application', 'Productivity SaaS', 'React 19', 'Vite', 'Supabase', 'Tailwind CSS'],
      image: 'assets/suru.webp',
      gallery: [
        { full: 'assets/suru.webp', thumb: 'assets/suru-thumb.webp', alt: 'Suru Workspace — Showcase' },
        { full: 'assets/suru-projects.webp', thumb: 'assets/suru-projects-thumb.webp', alt: 'Suru Workspace — Projects' },
        { full: 'assets/suru-goals.webp', thumb: 'assets/suru-goals-thumb.webp', alt: 'Suru Workspace — Goals' },
        { full: 'assets/suru-tasks.webp', thumb: 'assets/suru-tasks-thumb.webp', alt: 'Suru Workspace — Tasks' }
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
        </ul>
      `
    },
    'tabinote': {
      name: 'Tabinote',
      url: 'https://tabinotee.vercel.app/',
      type: 'Japan Travel Guide / Travel & Tourism Website',
      client: 'Editorial Travel Publication',
      projectType: 'Japan Travel Guide / Travel & Tourism Website',
      surfaceArea: 'Japan Travel Guide Platform',
      location: 'Cloud / Vercel',
      tags: ['Web Design', 'Travel Guide', 'Japanese Editorial', 'Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      image: 'assets/tabi.webp',
      gallery: [
        { full: 'assets/tabi.webp', thumb: 'assets/tabi-thumb.webp', alt: 'Tabinote — Showcase' },
        { full: 'assets/tabinote-destinations.webp', thumb: 'assets/tabinote-destinations-thumb.webp', alt: 'Tabinote — Destinations' },
        { full: 'assets/tabinote-seasons.webp', thumb: 'assets/tabinote-seasons-thumb.webp', alt: 'Tabinote — Seasons' },
        { full: 'assets/tabinote-journal.webp', thumb: 'assets/tabinote-journal-thumb.webp', alt: 'Tabinote — Journal' }
      ],
      description: `
        <p>Tabinote adalah website panduan perjalanan Jepang yang mengajak pengguna menjelajahi keindahan, budaya, dan destinasi Jepang melalui pengalaman visual yang estetik dan informatif.</p>
        <p>Mengusung pendekatan Japanese Editorial dan cinematic visual storytelling, Tabinote menyajikan inspirasi destinasi berdasarkan wilayah dan musim, serta jurnal perjalanan yang membantu pengguna mengenal sisi Jepang yang lebih autentik.</p>
        <p>Website ini dirancang untuk menghadirkan pengalaman eksplorasi yang nyaman dengan fotografi destinasi, tipografi editorial, dan tata letak yang terinspirasi oleh keindahan serta ketenangan Jepang.</p>
        <h4>Fitur utama:</h4>
        <ul>
          <li><strong>Visual storytelling & editorial landing hero:</strong> Tampilan beranda sinematik yang mengangkat tema slow travel dengan fotografi lanskap Jepang resolusi tinggi dan tipografi editorial.</li>
          <li><strong>Warta pilihan destinasi:</strong> Kurasi destinasi autentik seperti Shirakawa-go di Gifu, Lembah Alpin Kamikochi di Nagano, Kampung Nelayan Ine no Funaya di Kyoto, dan pesisir Otaru & Yoichi di Hokkaido.</li>
          <li><strong>Panduan 72 musim mikro (七十二候):</strong> Eksplorasi keindahan Jepang berdasarkan siklus empat musim (Haru, Natsu, Aki, Fuyu) yang menyajikan nuansa lanskap dan aktivitas khas setiap musim.</li>
          <li><strong>Jurnal slow travel & catatan lapangan editor:</strong> Artikel dan esai perjalanan mendalam mengenai jalur kereta lokal, kehidupan pedesaan, suaka pesisir San'in, dan kekayaan budaya tersembunyi.</li>
          <li><strong>Tipografi editorial Jepang & aksen kanji:</strong> Perpaduan harmonis antara tipografi serif editorial, aksen kanji tradisional, dan tata letak wabi-sabi yang tenang dan anggun.</li>
          <li><strong>Desain responsif & navigasi terintegrasi:</strong> Navigasi modern dengan efek backdrop blur, transisi halus, dan tata letak adaptif yang optimal di desktop maupun perangkat mobile.</li>
        </ul>
        <h4>Teknologi:</h4>
        <ul>
          <li><strong>Next.js (App Router):</strong> Framework full-stack React modern dengan performa tinggi dan rendering halaman yang cepat.</li>
          <li><strong>React:</strong> Library antarmuka berbasis komponen untuk pengalaman penjelajahan yang interaktif dan dinamis.</li>
          <li><strong>Tailwind CSS:</strong> Framework utilitas styling modern untuk tata letak editorial responsif dan palet warna wabi-sabi.</li>
          <li><strong>Material Symbols:</strong> Sistem ikonografi Google yang bersih dan konsisten untuk navigasi antarmuka.</li>
          <li><strong>Editorial Web Fonts:</strong> Tipografi kurasi elegan untuk kenyamanan membaca esai dan panduan perjalanan.</li>
        </ul>
      `
    },
    'lumiere': {
      name: 'LUMIÈRE',
      url: 'https://lumierebyac.vercel.app/',
      type: 'Editorial Rail Travel Publication / Slow Travel Platform',
      client: 'Editorial Travel Publication',
      projectType: 'Editorial Rail Travel Publication / Slow Travel Platform',
      surfaceArea: 'Slow Rail Travel Journal Platform',
      location: 'Cloud / Vercel',
      tags: ['Web Design', 'Editorial Journal', 'Slow Travel', 'Rail Journeys', 'Glassmorphism', 'Vanilla JS', 'Modern CSS', 'Vercel'],
      image: 'assets/lumi.webp',
      gallery: [
        { full: 'assets/lumi.webp', thumb: 'assets/lumi-thumb.webp', alt: 'LUMIÈRE — Showcase' },
        { full: 'assets/lumiere-destinations.webp', thumb: 'assets/lumiere-destinations-thumb.webp', alt: 'LUMIÈRE — Curated Destinations' },
        { full: 'assets/lumiere-journal.webp', thumb: 'assets/lumiere-journal-thumb.webp', alt: 'LUMIÈRE — Field Notes & Stories' },
        { full: 'assets/lumiere-philosophy.webp', thumb: 'assets/lumiere-philosophy-thumb.webp', alt: 'LUMIÈRE — Manifesto & Philosophy of Slow Travel' }
      ],
      description: `
        <p>LUMIÈRE adalah website publikasi editorial dan jurnal perjalanan kereta api (rail travel journal) yang mengusung filosofi slow travel. Website ini dirancang untuk merayakan pengalaman menjelajahi dunia melalui lanskap rel kereta yang memukau, stasiun-stasiun sunyi, dan rute perjalanan legendaris di seluruh Eropa.</p>
        <p>Menghadirkan estetika visual cinematic glassmorphism dengan tipografi editorial Playfair Display dan Inter, LUMIÈRE memadukan fotografi lanskap resolusi tinggi dengan narasi perjalanan mendalam. Website ini mengajak pembaca melambat, menikmati setiap detik perjalanan dari balik jendela gerbong, serta menemukan keindahan di rute-rute yang jarang dilalui.</p>
        <p>Pengunjung dapat menjelajahi kurasi destinasi terpilih, membaca catatan lapangan (field notes), serta berlangganan buletin berkala untuk mendapatkan warta perjalanan musiman langsung ke kotak masuk.</p>
        <h4>Fitur utama:</h4>
        <ul>
          <li><strong>Cinematic Hero Viewport & Atmosphere:</strong> Pengalaman beranda sinematik interaktif berbingkai jendela kompartemen kereta vintage dengan pencahayaan dinamis, sunbeam rays, dan efek soft fog mist.</li>
          <li><strong>Frosted Liquid-Glass Navigation:</strong> Navigasi pill mengambang dengan efek backdrop blur mutakhir dan transisi interaktif yang halus di seluruh halaman.</li>
          <li><strong>Warta & Ekspedisi Destinasi Terpilih:</strong> Kurasi rute perjalanan kereta eksklusif melintasi Pegunungan Alpen Swiss, perbukitan Tuscany di Italia, dan lanskap dramatis Scottish Highlands.</li>
          <li><strong>Jurnal & Catatan Lapangan (Field Notes):</strong> Kumpulan esai dan cerita naratif seputar kenyamanan kereta malam (overnight trains), pagi hening di pegunungan, serta filosofi slow travel.</li>
          <li><strong>Postal & Digital Dispatch Waitlist:</strong> Sistem formulir berlangganan buletin berkala interaktif dengan umpan balik visual instan untuk dispatch musiman.</li>
          <li><strong>Tipografi Editorial & Tata Letak Responsif:</strong> Harmonisasi tipografi serif klasik dan sans modern yang dioptimalkan untuk kenyamanan membaca di desktop, tablet, maupun smartphone.</li>
        </ul>
        <h4>Teknologi:</h4>
        <ul>
          <li><strong>Semantic HTML5:</strong> Struktur dokumen modern dengan markup semantik, aksesibilitas tinggi, dan integrasi metadata SEO.</li>
          <li><strong>Modern CSS3:</strong> Glassmorphism (backdrop-filter blur), CSS Grid, Flexbox, custom properties, dan efek transisi sinematik.</li>
          <li><strong>Vanilla JavaScript (ES6+):</strong> Logika interaktif nav toggle, scroll reveal animations, dan penanganan formulir interaktif tanpa framework berat.</li>
          <li><strong>Google Fonts (Playfair Display & Inter):</strong> Paduan tipografi serif editorial premium dan sans modern berketerbacaan optimal.</li>
          <li><strong>High-Performance WebP Assets:</strong> Optimasi gambar adaptif multi-resolusi untuk waktu muat cepat dan performa prima.</li>
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
    heroTitle.textContent = data.name;
    if (data.url) {
      heroSubtitle.innerHTML = `<a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.url}</a>`;
    } else {
      heroSubtitle.textContent = '';
    }

    // Populate main image
    mainImage.src = data.image;
    mainImage.alt = data.name;

    // Populate thumbnails
    thumbsContainer.innerHTML = '';
    const rawGallery = data.gallery || [data.image, data.image, data.image, data.image];
    const galleryList = rawGallery.map((item, idx) => {
      if (typeof item === 'string') {
        return { full: item, thumb: item, alt: `${data.name} - View ${idx + 1}` };
      }
      return item;
    });

    galleryList.forEach((item, i) => {
      const thumb = document.createElement('div');
      thumb.className = `project-gallery-thumb${i === 0 ? ' active' : ''}`;
      thumb.innerHTML = `<img src="${item.thumb}" alt="${item.alt || data.name + ' - View ' + (i + 1)}" loading="lazy" width="280" height="280">`;
      thumb.addEventListener('click', () => {
        // Switch active thumb
        thumbsContainer.querySelectorAll('.project-gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        // Animate main image
        mainImage.style.opacity = '0';
        mainImage.style.transform = 'scale(0.98)';
        setTimeout(() => {
          mainImage.src = item.full;
          mainImage.style.opacity = '1';
          mainImage.style.transform = 'scale(1)';
        }, 150);
      });
      thumbsContainer.appendChild(thumb);
    });

    // Idle-preload other gallery full-res images so switching is 100% instant
    const preloadOtherImages = () => {
      galleryList.slice(1).forEach(item => {
        const img = new Image();
        img.src = item.full;
      });
    };
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadOtherImages);
    } else {
      setTimeout(preloadOtherImages, 300);
    }

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
      if (tag.toLowerCase().includes('unfinished')) {
        span.classList.add('tag-unfinished');
      }
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
