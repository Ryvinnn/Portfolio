/* ========================================
   PROJECT DETAIL MODAL — INTERACTIVE LOGIC
   Click handler, gallery, lightbox, animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Project Data ----------
  const projectsData = {
    'travelmalang': {
      name: 'travelmalang.id',
      type: 'Travel & Tour',
      client: 'Rina Santika',
      projectType: 'Travel & Tour Website',
      surfaceArea: 'Multi-page Web App',
      location: 'Malang, Indonesia',
      tags: ['Travel & Tour', 'Booking System', 'Web App'],
      image: 'assets/portfolio-travelmalang.png',
      gallery: [
        'assets/travelmalang/travelmalang-1.png',
        'assets/travelmalang/travelmalang-2.png',
        'assets/travelmalang/travelmalang-3.png',
        'assets/travelmalang/travelmalang-4.png'
      ],
      description: `
        <p>travelmalang.id adalah platform layanan travel dan tur wisata yang dirancang untuk memberikan kemudahan bagi wisatawan dalam memesan paket liburan, sewa armada, dan perjalanan di area Malang & Bromo. Dengan antarmuka yang modern, bersih, dan intuitif, pengguna dapat dengan mudah memilih paket perjalanan yang diinginkan.</p>
        <p>Website ini dilengkapi dengan katalog paket wisata interaktif, pilihan destinasi populer, sistem informasi armada, serta integrasi pemesanan cepat via WhatsApp & form booking. Didesain dengan fokus pada kemudahan navigasi dan pengalaman pengguna (UX) yang prima di berbagai perangkat mobile maupun desktop.</p>
        <p>Hasilnya adalah sebuah platform travel digital yang elegan dan responsif — membantu meningkatkan visibilitas usaha dan mempermudah calon wisatawan merencanakan perjalanan mereka ke Malang.</p>
      `
    },
    'tokoroti': {
      name: 'tokoroti.id',
      type: 'Bakery & Toko Roti',
      client: 'Andi Pratama',
      projectType: 'Bakery Website',
      surfaceArea: 'Landing Page + Catalog',
      location: 'Surabaya, Indonesia',
      tags: ['Bakery', 'WordPress', 'Catalog'],
      image: 'assets/portfolio-tokoroti.png',
      gallery: [
        'assets/tokoroti/tokoroti-1.png',
        'assets/tokoroti/tokoroti-2.png',
        'assets/tokoroti/tokoroti-3.png',
        'assets/tokoroti/tokoroti-4.png'
      ],
      description: `
        <p>tokoroti.id adalah platform toko roti digital modern yang dirancang untuk memamerkan berbagai varian roti dan kue berkualitas tinggi serta mempermudah pemesanan online bagi pelanggan.</p>
        <p>Dibangun di atas WordPress untuk kemudahan pengelolaan katalog produk, website ini dilengkapi dengan tampilan visual menu yang menggugah selera, sistem pemesanan langsung via WhatsApp, serta integrasi lokasi toko.</p>
        <p>Hasilnya adalah sebuah platform bakery online yang menarik, mudah digunakan, dan efektif dalam meningkatkan penjualan serta jangkauan pelanggan.</p>
      `
    },
    'pt-maju-bersama': {
      name: 'PT Maju Bersama',
      type: 'Company Profile',
      client: 'Dewi Wulandari',
      projectType: 'Company Profile',
      surfaceArea: 'Multi-page (5 halaman)',
      location: 'Bandung, Indonesia',
      tags: ['Company Profile', 'Next.js'],
      image: 'assets/portfolio-corporate.png',
      description: `
        <p>PT Maju Bersama memerlukan website company profile yang profesional namun tetap modern dan tidak kaku. Website ini dirancang untuk membangun kredibilitas perusahaan dan menarik calon klien serta partner bisnis.</p>
        <p>Menggunakan Next.js untuk performa optimal dan SEO yang superior, website ini terdiri dari 5 halaman utama: Beranda, Tentang Kami, Layanan, Portfolio, dan Kontak. Setiap halaman dirancang dengan animasi scroll yang halus dan layout yang informatif.</p>
        <p>Desain mengutamakan kesan profesional dengan warna-warna corporate yang elegan, typography yang bersih, dan penggunaan whitespace yang tepat. Hasilnya adalah sebuah digital presence yang benar-benar merepresentasikan visi dan misi perusahaan.</p>
      `
    },
    'edulearn': {
      name: 'EduLearn Academy',
      type: 'Web Application',
      client: 'EduLearn Team',
      projectType: 'Platform Edukasi',
      surfaceArea: 'Full Web Application',
      location: 'Yogyakarta, Indonesia',
      tags: ['Edukasi', 'Web App', 'React'],
      image: 'assets/portfolio-education.png',
      description: `
        <p>EduLearn Academy adalah platform belajar online yang comprehensive, dirancang untuk memudahkan proses pembelajaran jarak jauh. Platform ini menghubungkan guru dan siswa melalui interface yang intuitif dan fitur-fitur interaktif.</p>
        <p>Dibangun dengan React, platform ini menyediakan fitur video learning, quiz interaktif, progress tracking, sertifikat digital, dan forum diskusi. Dashboard yang informatif membantu baik pengajar maupun siswa untuk memantau perkembangan belajar.</p>
        <p>UI/UX dirancang agar ramah pengguna dengan berbagai usia, menggunakan warna-warna cerah dan ikon-ikon yang ekspresif. Sistem gamifikasi juga diterapkan untuk meningkatkan motivasi belajar.</p>
      `
    },
    'studio-kreatif': {
      name: 'Studio Kreatif',
      type: 'Portfolio Website',
      client: 'Studio Kreatif Team',
      projectType: 'Creative Agency Portfolio',
      surfaceArea: 'Single Page Interactive',
      location: 'Bali, Indonesia',
      tags: ['Portfolio', 'GSAP', 'Three.js'],
      image: 'assets/portfolio-creative.png',
      description: `
        <p>Studio Kreatif membutuhkan portfolio website yang mencerminkan kreativitas dan keahlian mereka sebagai creative agency. Kami merancang website yang bold, dinamis, dan penuh dengan animasi interaktif yang memukau.</p>
        <p>Website ini menggunakan GSAP untuk animasi scroll yang smooth dan Three.js untuk elemen 3D yang immersive. Setiap section dirancang sebagai sebuah "experience" yang membawa pengunjung melalui portfolio pekerjaan mereka dengan cara yang engaging.</p>
        <p>Hasilnya adalah sebuah website yang tidak hanya menampilkan karya Studio Kreatif, tetapi juga menjadi karya seni digital itu sendiri — memenangkan beberapa penghargaan desain web dan menarik perhatian klien-klien besar.</p>
      `
    },
    'sehatplus': {
      name: 'SehatPlus',
      type: 'Healthcare App',
      client: 'SehatPlus Health',
      projectType: 'Healthcare Dashboard',
      surfaceArea: 'Dashboard Web App',
      location: 'Semarang, Indonesia',
      tags: ['Healthcare', 'Dashboard', 'Vue.js'],
      image: 'assets/portfolio-health.png',
      description: `
        <p>SehatPlus adalah aplikasi dashboard kesehatan yang membantu pengguna memantau kondisi kesehatan mereka secara komprehensif. Dari tracking aktivitas harian hingga riwayat medis, semuanya terintegrasi dalam satu platform yang mudah digunakan.</p>
        <p>Dibangun dengan Vue.js, dashboard ini menyajikan data kesehatan melalui visualisasi chart dan grafik yang informatif. Fitur utama meliputi monitoring vital signs, jadwal obat, appointment booking dengan dokter, dan health tips yang dipersonalisasi.</p>
        <p>Desain mengutamakan kejelasan informasi dengan color coding yang intuitif, layout yang clean, dan akses cepat ke fitur-fitur penting. Aksesibilitas juga menjadi prioritas agar dapat digunakan oleh berbagai kalangan pengguna.</p>
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
    document.body.style.overflow = 'hidden';

    // Scroll modal to top
    modal.scrollTop = 0;

    // Update URL hash
    history.pushState(null, '', `#project-${projectKey}`);
  }

  // ---------- Close Modal ----------
  function closeModal() {
    modal.classList.remove('active');
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
