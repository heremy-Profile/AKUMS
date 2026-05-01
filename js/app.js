/* ═══════════════════════════════════════════════
   AIN AL KHALEEJ UNIVERSITY — ULTIMATE APP.JS
   ═══════════════════════════════════════════════ */

'use strict';

/* ─── TRANSLATIONS ─── */
const translations = {
  en: {
    nav_about:'About', nav_academics:'Academics', nav_admissions:'Admissions', nav_research:'Research', nav_campus:'Campus Life', nav_news:'News',
    hero_eyebrow:'Advanced Education • Innovative Research • Global Impact',
    hero_title:'<span>Redefining the Future</span><br>of Health Sciences',
    hero_subtitle:'REDEFINING THE FUTURE OF HEALTH SCIENCES',
    hero_desc:'Advanced education, innovative research, and global partnerships to prepare a new generation of healthcare leaders in a modern and inspiring academic environment.',
    apply_now:'Apply Now <small>APPLY NOW</small>', explore_programs:'Explore Programs <small>EXPLORE PROGRAMS</small>', apply_now_arrow:'Apply Now →',
    pillar_education_ar:'Advanced Education', pillar_education_en:'ADVANCED EDUCATION',
    pillar_research_ar:'Research Excellence', pillar_research_en:'RESEARCH EXCELLENCE',
    pillar_partners_ar:'Global Partnerships', pillar_partners_en:'GLOBAL PARTNERSHIPS',
    pillar_innovation_ar:'Innovation', pillar_innovation_en:'INNOVATION',
    pillar_career_ar:'Career Impact', pillar_career_en:'CAREER IMPACT',
    stat_programs:'Academic<br>Programs', stat_colleges:'Colleges', stat_faculty:'Faculty<br>Members', stat_students:'Students', stat_partners:'Global<br>Partners',
    feature_title:'Learn by doing.<br>Innovate every day.', feature_subtitle:'LEARN BY DOING. INNOVATE EVERY DAY.',
    popular_title:'Popular Programs<br><span>POPULAR PROGRAMS</span>',
    program_medicine:'Medicine & Surgery', program_pharmacy:'Pharmacy & Pharmaceutical Sciences', program_nursing:'Nursing & Midwifery', program_lab:'Medical Laboratory Sciences',
    view_all_programs:'View All Programs →',
    why_title:'Why Ain Al Khaleej?<br><span>WHY AIN AL KHALEEJ?</span>',
    why_env:'World-Class Environment', why_env_en:'WORLD-CLASS ENVIRONMENT',
    why_curriculum:'Future-Ready Curriculum', why_curriculum_en:'FUTURE-READY CURRICULUM',
    why_research:'Research That Transforms', why_research_en:'RESEARCH THAT TRANSFORMS',
    why_career:'Career Support', why_career_en:'CAREER SUPPORT',
    why_location:'Strategic Location', why_location_en:'STRATEGIC LOCATION',
    campus_title:'Campus Life<br><span>CAMPUS LIFE</span>', discover_more:'Discover More',
    cta_title:'Be part of the future of healthcare', cta_subtitle:'BE PART OF THE FUTURE OF HEALTHCARE',
    news_title:'News & Events<br><span>NEWS & EVENTS</span>', view_all_news:'View All News',
    official_seal:'Official Seal', accredited:'Accredited & Recognized'
  },
  ar: {
    nav_about:'عن الجامعة', nav_academics:'البرامج الأكاديمية', nav_admissions:'القبول والتسجيل', nav_research:'البحث والابتكار', nav_campus:'الحياة الجامعية', nav_news:'أخبار وفعاليات',
    hero_eyebrow:'تعليم متقدم • بحث مبتكر • تأثير عالمي',
    hero_title:'<span>نبتكر مستقبل</span><br>التعليم الصحي',
    hero_subtitle:'إعادة تعريف مستقبل العلوم الصحية',
    hero_desc:'تعليم متقدم، بحث مبتكر، وشراكات عالمية لصناعة جيل جديد من قادة الرعاية الصحية في بيئة أكاديمية متطورة ومُلهمة.',
    apply_now:'تقدم الآن <small>APPLY NOW</small>', explore_programs:'استكشف البرامج <small>EXPLORE PROGRAMS</small>', apply_now_arrow:'تقدم الآن →',
    pillar_education_ar:'تعليم متقدم', pillar_education_en:'ADVANCED EDUCATION',
    pillar_research_ar:'بحث وتميز', pillar_research_en:'RESEARCH EXCELLENCE',
    pillar_partners_ar:'شراكات عالمية', pillar_partners_en:'GLOBAL PARTNERSHIPS',
    pillar_innovation_ar:'ابتكار وتنمية', pillar_innovation_en:'INNOVATION',
    pillar_career_ar:'تأثير مهني', pillar_career_en:'CAREER IMPACT',
    stat_programs:'برامج أكاديمية<br>ACADEMIC PROGRAMS', stat_colleges:'كليات متخصصة<br>COLLEGES', stat_faculty:'عضو هيئة تدريس<br>FACULTY MEMBERS', stat_students:'طالب وطالبة<br>STUDENTS', stat_partners:'شريك عالمي<br>GLOBAL PARTNERS',
    feature_title:'تعلم بالممارسة.<br>ابتكر في كل تجربة.', feature_subtitle:'LEARN BY DOING. INNOVATE EVERY DAY.',
    popular_title:'برامجنا الأكثر طلباً<br><span>POPULAR PROGRAMS</span>',
    program_medicine:'الطب والجراحة', program_pharmacy:'الصيدلة والعلوم الصيدلانية', program_nursing:'التمريض والقبالة', program_lab:'علوم المختبرات الطبية',
    view_all_programs:'عرض جميع البرامج →',
    why_title:'لماذا عين الخليج؟<br><span>WHY AIN AL KHALEEJ?</span>',
    why_env:'بيئة تعليمية راقية', why_env_en:'WORLD-CLASS ENVIRONMENT',
    why_curriculum:'منهج مستعد للمستقبل', why_curriculum_en:'FUTURE-READY CURRICULUM',
    why_research:'بحث يغير الحياة', why_research_en:'RESEARCH THAT TRANSFORMS',
    why_career:'دعم مهني متكامل', why_career_en:'CAREER SUPPORT',
    why_location:'موقع استراتيجي', why_location_en:'STRATEGIC LOCATION',
    campus_title:'حياة جامعية ملهمة<br><span>CAMPUS LIFE</span>', discover_more:'اكتشف المزيد',
    cta_title:'كن جزءاً من مستقبل الرعاية الصحية', cta_subtitle:'BE PART OF THE FUTURE OF HEALTHCARE',
    news_title:'أخبار وفعاليات<br><span>NEWS & EVENTS</span>', view_all_news:'عرض جميع الأخبار',
    official_seal:'الختم الرسمي', accredited:'معتمد ومعترف به'
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('auhs-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});
setLanguage(localStorage.getItem('auhs-lang') || 'en');

/* ─── LOADER ─── */
const loader = document.getElementById('loader');
const loaderFill = document.getElementById('loader-fill');
const loaderText = document.getElementById('loader-text');
let loadProgress = 0;
const loadMessages = ['Initializing…', 'Loading assets…', 'Almost ready…', 'Welcome!'];
function advanceLoader() {
  loadProgress = Math.min(loadProgress + Math.random() * 30 + 10, 100);
  if (loaderFill) loaderFill.style.width = loadProgress + '%';
  const msgIdx = Math.floor(loadProgress / 25);
  if (loaderText) loaderText.textContent = loadMessages[Math.min(msgIdx, loadMessages.length - 1)];
  if (loadProgress < 100) {
    setTimeout(advanceLoader, 180 + Math.random() * 200);
  } else {
    setTimeout(() => {
      if (loader) loader.classList.add('done');
    }, 400);
  }
}
window.addEventListener('DOMContentLoaded', advanceLoader);

/* ─── PARTICLES ─── */
(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  const particles = [];
  const COUNT = 55;

  function rand(min, max) { return min + Math.random() * (max - min); }

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: rand(0, W), y: rand(0, H),
      r: rand(1, 3.5),
      vx: rand(-.25, .25), vy: rand(-.35, -.08),
      alpha: rand(.15, .55),
      color: Math.random() > .5 ? '93,47,151' : '212,168,67'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.y < -10) { p.y = H + 10; p.x = rand(0, W); }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
    });
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }, { passive: true });
})();

/* ─── SCROLL REVEAL ─── */
const revealItems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach(el => io.observe(el));

/* ─── NAV SCROLL EFFECT ─── */
const mainNav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  if (mainNav) mainNav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── HERO SLIDESHOW ─── */
const heroImages = [...document.querySelectorAll('.hero-img')];
const heroDots = [...document.querySelectorAll('.hero-dot')];
const progressFill = document.getElementById('hero-progress-fill');
let activeSlide = 0;
let slideInterval;

function goToSlide(idx) {
  heroImages[activeSlide].classList.remove('active');
  heroDots[activeSlide]?.classList.remove('active');
  activeSlide = (idx + heroImages.length) % heroImages.length;
  heroImages[activeSlide].classList.add('active');
  heroDots[activeSlide]?.classList.add('active');
  if (progressFill) {
    progressFill.style.animation = 'none';
    void progressFill.offsetWidth;
    progressFill.style.animation = '';
  }
}

function startSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => goToSlide(activeSlide + 1), 4200);
}

heroDots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(Number(dot.dataset.slide));
    startSlideshow();
  });
});

startSlideshow();

/* ─── COUNTER ANIMATION ─── */
function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const suffix = counter.dataset.suffix || '';
  const duration = 1400;
  const token = String(Date.now() + Math.random());
  counter.dataset.animToken = token;
  const start = performance.now();
  function tick(now) {
    if (counter.dataset.animToken !== token) return;
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    counter.textContent = Math.floor(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else counter.textContent = target + suffix;
  }
  counter.textContent = '0' + suffix;
  requestAnimationFrame(tick);
}

const statsSection = document.querySelector('.stats');
let countersDone = false;
if (statsSection) {
  new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting) && !countersDone) {
      countersDone = true;
      statsSection.querySelectorAll('.counter').forEach(animateCounter);
    }
  }, { threshold: 0.35 }).observe(statsSection);
  statsSection.querySelectorAll('div').forEach(card => {
    const c = card.querySelector('.counter');
    if (c) card.addEventListener('mouseenter', () => animateCounter(c));
  });
}

/* ─── LOGO CURSOR FOLLOWER ─── */
const logoFollower = document.querySelector('.logo-cursor-follow');
const hotSelectors = 'a,button,.stats div,.pillars article,.programs a,.why-cards article,.mosaic img,.news article,.cinema-card,.hero-chip';
if (logoFollower) {
  window.addEventListener('pointermove', e => {
    logoFollower.style.left = e.clientX + 'px';
    logoFollower.style.top = e.clientY + 'px';
  }, { passive: true });
  document.querySelectorAll(hotSelectors).forEach(el => {
    el.addEventListener('pointerenter', () => logoFollower.classList.add('hot'));
    el.addEventListener('pointerleave', () => logoFollower.classList.remove('hot'));
  });
}

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── BACK TO TOP ─── */
const backTop = document.getElementById('back-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── MOBILE DRAWER ─── */
const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('mobile-drawer');
const drawerClose = document.getElementById('drawer-close');
const drawerOverlay = document.getElementById('drawer-overlay');

function openDrawer() {
  drawer?.classList.add('open');
  drawerOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  menuBtn?.setAttribute('aria-expanded', 'true');
}
function closeDrawer() {
  drawer?.classList.remove('open');
  drawerOverlay?.classList.remove('open');
  document.body.style.overflow = '';
  menuBtn?.setAttribute('aria-expanded', 'false');
}
menuBtn?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', closeDrawer);
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

/* ─── SEARCH ─── */
const searchOpenBtn = document.getElementById('search-open-btn');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const searchData = [
  { icon: '🩺', text: 'Medicine & Surgery', href: '#academics' },
  { icon: '💊', text: 'Pharmacy & Pharmaceutical Sciences', href: '#academics' },
  { icon: '🏥', text: 'Nursing & Midwifery', href: '#academics' },
  { icon: '🔬', text: 'Medical Laboratory Sciences', href: '#academics' },
  { icon: '🎓', text: 'Admissions & Applications', href: '#admissions' },
  { icon: '🏛️', text: 'Campus Life & Facilities', href: '#campus' },
  { icon: '📰', text: 'News & Events', href: '#news' },
  { icon: '🌍', text: 'Global Partnerships', href: '#about' },
  { icon: '📊', text: 'Research & Innovation', href: '#research' },
  { icon: '🏆', text: 'Accreditation & Rankings', href: '#about' },
  { icon: '💡', text: 'Undergraduate Programs', href: '#academics' },
  { icon: '📚', text: 'Postgraduate Studies', href: '#academics' },
  { icon: '👥', text: 'Faculty & Staff', href: '#about' },
  { icon: '📍', text: 'Location & Contact', href: '#admissions' },
  { icon: '🌟', text: 'Scholarships & Financial Aid', href: '#admissions' },
];

function openSearch() {
  searchOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput?.focus(), 150);
  renderSearchResults('');
}
function closeSearch() {
  searchOverlay?.classList.remove('open');
  document.body.style.overflow = '';
  if (searchInput) searchInput.value = '';
}

function renderSearchResults(query) {
  if (!searchResults) return;
  const q = query.toLowerCase().trim();
  const filtered = q
    ? searchData.filter(d => d.text.toLowerCase().includes(q))
    : searchData;
  if (!filtered.length) {
    searchResults.innerHTML = '<p class="search-no-results">No results found. Try another search term.</p>';
    return;
  }
  searchResults.innerHTML = filtered.map(d =>
    `<a class="search-result-item" href="${d.href}">
      <span style="font-size:18px">${d.icon}</span>
      <span>${d.text}</span>
    </a>`
  ).join('');
  searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', closeSearch);
  });
}

searchOpenBtn?.addEventListener('click', openSearch);
searchClose?.addEventListener('click', closeSearch);
searchInput?.addEventListener('input', e => renderSearchResults(e.target.value));
searchOverlay?.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSearch(); closeDrawer(); closeLightbox(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});

/* ─── LIGHTBOX ─── */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.mosaic img').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
  img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(img.src, img.alt); });
});
lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

/* ─── PARALLAX TILT on hero cards ─── */
document.querySelectorAll('.hero-chip').forEach(chip => {
  chip.addEventListener('mousemove', e => {
    const rect = chip.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = (e.clientY - rect.top - rect.height / 2) / 12;
    chip.style.transform = `perspective(400px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.06)`;
  });
  chip.addEventListener('mouseleave', () => {
    chip.style.transform = '';
  });
});

/* ─── PROGRAMS CARD TILT ─── */
document.querySelectorAll('.programs a,.why-cards article,.news article').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    card.style.transform = card.classList.contains('why-cards article') || card.closest('.why-cards')
      ? `skewX(-6deg) translateY(-8px) rotateX(${-y}deg) rotateY(${x}deg)`
      : `perspective(600px) rotateX(${-y * 0.5}deg) rotateY(${x * 0.5}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ─── MOUSE PARALLAX (subtle) ─── */
window.addEventListener('pointermove', e => {
  document.documentElement.style.setProperty('--mx', e.clientX + 'px');
  document.documentElement.style.setProperty('--my', e.clientY + 'px');
  const xFrac = (e.clientX / window.innerWidth - 0.5) * 2;
  const yFrac = (e.clientY / window.innerHeight - 0.5) * 2;
  const holoRing = document.querySelector('.holo-ring');
  const holoRing2 = document.querySelector('.holo-ring-2');
  if (holoRing) holoRing.style.transform = `rotate(${Date.now() / 45}deg) translate(${xFrac * 10}px,${yFrac * 10}px)`;
  if (holoRing2) holoRing2.style.transform = `rotate(${-(Date.now() / 70)}deg) translate(${xFrac * 6}px,${yFrac * 6}px)`;
}, { passive: true });

/* ─── HOT CURSOR HOVER ─── */
document.querySelectorAll(hotSelectors).forEach(el => {
  el.addEventListener('pointerenter', () => el.classList.add('is-hot'));
  el.addEventListener('pointerleave', () => el.classList.remove('is-hot'));
});

/* ─── PILLAR RIPPLE ─── */
document.querySelectorAll('.pillars article').forEach(article => {
  article.addEventListener('click', e => {
    const ripple = document.createElement('span');
    const rect = article.getBoundingClientRect();
    ripple.style.cssText = `
      position:absolute;border-radius:50%;
      width:6px;height:6px;
      background:rgba(93,47,151,.35);
      transform:scale(0);
      left:${e.clientX - rect.left - 3}px;
      top:${e.clientY - rect.top - 3}px;
      animation:ripple .6s ease forwards;
      pointer-events:none;
    `;
    if (!document.getElementById('ripple-style')) {
      const s = document.createElement('style');
      s.id = 'ripple-style';
      s.textContent = '@keyframes ripple{to{transform:scale(60);opacity:0}}';
      document.head.appendChild(s);
    }
    article.style.position = 'relative';
    article.style.overflow = 'hidden';
    article.appendChild(ripple);
    setTimeout(() => ripple.remove(), 620);
  });
});

/* ─── PRELOAD HERO IMAGES ─── */
['assets/img/img01.png', 'assets/img/img02.png', 'assets/img/img21.png'].forEach(src => {
  const img = new Image();
  img.src = src;
});

/* ─── KEYBOARD SHORTCUT HINTS (Ctrl+K) ─── */
const kbHint = document.createElement('div');
kbHint.style.cssText = 'position:fixed;bottom:100px;right:32px;background:rgba(93,47,151,.9);color:#fff;padding:8px 16px;border-radius:99px;font-size:12px;font-weight:700;letter-spacing:.05em;opacity:0;transition:opacity .5s;pointer-events:none;z-index:400;backdrop-filter:blur(12px)';
kbHint.textContent = '⌨️ Ctrl+K to search';
document.body.appendChild(kbHint);
setTimeout(() => { kbHint.style.opacity = '1'; }, 3500);
setTimeout(() => { kbHint.style.opacity = '0'; }, 7000);
setTimeout(() => { kbHint.remove(); }, 8000);

console.log('%c🏥 Ain Al Khaleej University', 'font-size:20px;font-weight:900;color:#5d2f97');
console.log('%cUltimate Edition — All systems operational.', 'color:#888;font-size:13px');
