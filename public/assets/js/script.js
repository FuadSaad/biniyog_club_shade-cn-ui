// Safe ready helper for both HTML and React/Next.js
function onReady(fn) {
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      setTimeout(fn, 20);
    }
  }
}
/* ========================================================
   Biniog Club - Interactive Engine & 3D Hero Showcase (V3.5)
   Fully Responsive & Bilingual Translation Engine
   ======================================================== */

// Helper to determine current active language (Defaults to English 'en')
function getCurrentLanguage() {
  try {
    const sessionLang = sessionStorage.getItem('biniyog_lang');
    if (sessionLang === 'bn' || sessionLang === 'en') return sessionLang;
    const localLang = localStorage.getItem('biniyog_lang_v2');
    if (localLang === 'bn' || localLang === 'en') return localLang;
  } catch (e) {}
  return 'en'; // Initial language is English by default
}

function biniyogInit() {
  initLanguageSwitcher();
  initHeroSlider();
  initProjectFilters();
  initModals();
  initMobileMenu();
  initContactForm();
  initBannerLightbox();
  initStatsCounter();
  initCardCounters();
}
window.biniyogInit = biniyogInit;
onReady(() => {
  biniyogInit();
});

/* ========================================================
   0. BILINGUAL LANGUAGE SWITCHER (বাং / ENG) - 1-CLICK TOGGLE
   ======================================================== */
function toggleLanguage() {
  const currentLang = document.documentElement.lang || getCurrentLanguage();
  const nextLang = currentLang === 'bn' ? 'en' : 'bn';
  setLanguage(nextLang, true);
}

function initLanguageSwitcher() {
  if (window.__langSwitcherInitialized) return;
  window.__langSwitcherInitialized = true;

  const currentLang = getCurrentLanguage();
  setLanguage(currentLang, false);

  // Direct click on specific language buttons
  document.querySelectorAll('.lang-btn, [data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang === 'bn' || targetLang === 'en') {
        setLanguage(targetLang, true);
      }
    });
  });

  // 1-Click Toggle for the pill background itself
  document.querySelectorAll('.lang-switcher-pill').forEach(pill => {
    pill.setAttribute('role', 'button');
    pill.setAttribute('tabindex', '0');

    pill.addEventListener('click', (e) => {
      if (e.target.closest('.lang-btn')) return; // let button handler manage it
      e.preventDefault();
      toggleLanguage();
    });

    pill.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleLanguage();
      }
    });
  });
}

function setLanguage(lang, animate = true) {
  if (typeof translations === 'undefined' || !translations[lang]) return;

  try {
    sessionStorage.setItem('biniyog_lang', lang);
    localStorage.setItem('biniyog_lang', lang);
    localStorage.setItem('biniyog_lang_v2', lang);
  } catch (e) {}

  document.documentElement.lang = lang;

  // Toggle active class on all language buttons
  const bnButtons = document.querySelectorAll('.lang-btn-bn, [data-lang="bn"]');
  const enButtons = document.querySelectorAll('.lang-btn-en, [data-lang="en"]');

  bnButtons.forEach(b => {
    if (lang === 'bn') b.classList.add('active');
    else b.classList.remove('active');
  });

  enButtons.forEach(b => {
    if (lang === 'en') b.classList.add('active');
    else b.classList.remove('active');
  });

  // Update switcher pills tooltip/label
  const switcherPills = document.querySelectorAll('.lang-switcher-pill');
  switcherPills.forEach(pill => {
    pill.setAttribute('title', lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন');
    pill.setAttribute('aria-label', lang === 'bn' ? 'Switch to English' : 'বাংলা ভাষা নির্বাচন করুন');
  });

  // Update document title if present
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const tKey = titleEl.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][tKey]) {
      document.title = translations[lang][tKey];
    }
  }

  // Apply translations to [data-i18n]
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach(el => {
    if (el.tagName.toLowerCase() === 'title') return;
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      if (animate) {
        el.style.opacity = '0.35';
        setTimeout(() => {
          el.innerHTML = translations[lang][key];
          el.style.opacity = '1';
        }, 100);
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Apply placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update slider counter text
  const dockCounterText = document.getElementById('dockCounterText');
  const slides = document.querySelectorAll('.slide-item');
  if (dockCounterText && slides.length) {
    const activeSlide = document.querySelector('.slide-item.active');
    let idx = 0;
    if (activeSlide) {
      idx = parseInt(activeSlide.getAttribute('data-index') || '0', 10);
    }
    const banglaNums = ['০১', '০২', '০৩', '০৪', '০৫', '০৬', '০৭'];
    if (lang === 'en') {
      const curEn = String(idx + 1).padStart(2, '0');
      const totEn = String(slides.length).padStart(2, '0');
      dockCounterText.textContent = `Slide ${curEn} / ${totEn}`;
    } else {
      const curBn = banglaNums[idx] || String(idx + 1);
      const totBn = banglaNums[slides.length - 1] || String(slides.length);
      dockCounterText.textContent = `স্লাইড ${curBn} / ${totBn}`;
    }
  }

  // Update play/pause status text
  const playStateText = document.getElementById('playStateText');
  const playIcon = document.getElementById('playIcon');
  if (playStateText) {
    const isPaused = playIcon && !playIcon.classList.contains('hidden');
    playStateText.textContent = isPaused ? 
      (lang === 'en' ? 'Paused' : 'পজ করা আছে') : 
      (lang === 'en' ? 'Auto-play Running' : 'অটো-প্লে চলছে');
  }
}

// Immediately apply initial language synchronously as soon as script is parsed
(function() {
  if (typeof translations !== 'undefined') {
    const initialLang = getCurrentLanguage();
    setLanguage(initialLang, false);
  }
  // Reveal body after translation is applied (prevents flash of wrong language)
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.08s ease';
})();

/* ========================================================
   1. HERO BANNER SHOWCASE SLIDER (2s Auto-Slide & Responsive Tabs)
   ======================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide-item');
  const tabCards = document.querySelectorAll('.hero-tab-card');
  const tabsGrid = document.querySelector('.hero-tabs-grid');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const togglePlayBtn = document.getElementById('sliderTogglePlay');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const playStateText = document.getElementById('playStateText');
  const dockCounterText = document.getElementById('dockCounterText');
  const stagePodium = document.getElementById('heroStagePodium');
  const dockContainer = document.getElementById('heroDockContainer');

  if (!slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  const slideDuration = 2000;
  let autoSlideTimer = null;
  let isPlaying = true;
  let progressInterval = null;
  let progressPercent = 0;

  const banglaNums = ['০১', '০২', '০৩', '০৪', '০৫', '০৬', '০৭'];

  function updateSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    currentIndex = index;

    // 1. Update Slides with smooth crossfade
    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // 2. Update Showcase Tabs & Auto-Scroll active tab on mobile/tablet
    tabCards.forEach((card, idx) => {
      const progressLine = card.querySelector('.tab-progress-line');
      if (idx === currentIndex) {
        card.classList.add('active');
        if (progressLine) progressLine.style.width = '0%';
        
        if (tabsGrid && window.innerWidth <= 900) {
          card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      } else {
        card.classList.remove('active');
        if (progressLine) progressLine.style.width = '0%';
      }
    });

    // 3. Update Status Counter Text (Bilingual aware)
    if (dockCounterText) {
      const isEnglish = (document.documentElement.lang !== 'bn');
      if (isEnglish) {
        const curEn = String(currentIndex + 1).padStart(2, '0');
        const totEn = String(totalSlides).padStart(2, '0');
        dockCounterText.textContent = `Slide ${curEn} / ${totEn}`;
      } else {
        const curBn = banglaNums[currentIndex] || String(currentIndex + 1);
        const totBn = banglaNums[totalSlides - 1] || String(totalSlides);
        dockCounterText.textContent = `স্লাইড ${curBn} / ${totBn}`;
      }
    }

    resetTimer();
  }

  function nextSlide() {
    updateSlide(currentIndex + 1);
  }

  function prevSlide() {
    updateSlide(currentIndex - 1);
  }

  function startTimer() {
    if (!isPlaying) return;
    clearInterval(autoSlideTimer);
    clearInterval(progressInterval);
    progressPercent = 0;

    const activeCard = tabCards[currentIndex];
    const progressLine = activeCard ? activeCard.querySelector('.tab-progress-line') : null;

    const stepMs = 40;
    const increment = (stepMs / slideDuration) * 100;

    progressInterval = setInterval(() => {
      if (!isPlaying) return;
      progressPercent += increment;
      if (progressLine) {
        progressLine.style.width = `${Math.min(progressPercent, 100)}%`;
      }
      if (progressPercent >= 100) {
        clearInterval(progressInterval);
      }
    }, stepMs);

    autoSlideTimer = setTimeout(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, slideDuration);
  }

  function resetTimer() {
    clearInterval(autoSlideTimer);
    clearInterval(progressInterval);
    if (isPlaying) {
      startTimer();
    }
  }

  

  // Navigation listeners
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });

  tabCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      updateSlide(idx);
    });
  });

  

  

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Touch Swipe for mobile with directional discrimination
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  if (stagePodium) {
    stagePodium.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    stagePodium.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;

      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }, { passive: true });
  }

  updateSlide(0);
}

/* ========================================================
   2. 3D TILT EFFECT
   ======================================================== */
function initTilt3D() { /* Disabled */ }

/* ========================================================
   3. BANNER LIGHTBOX ZOOM MODAL
   ======================================================== */
function initBannerLightbox() {
  const btnZoom = document.getElementById('btnZoomBanner');
  const lightboxModal = document.getElementById('bannerLightboxModal');
  const lightboxImg = document.getElementById('lightboxBannerImg');

  if (!lightboxModal || !lightboxImg) return;

  function openLightbox() {
    const activeSlide = document.querySelector('.slide-item.active img');
    if (activeSlide) {
      lightboxImg.src = activeSlide.src;
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  if (btnZoom) btnZoom.addEventListener('click', openLightbox);

  const viewport = document.getElementById('heroSliderViewport');
  if (viewport) {
    viewport.addEventListener('click', (e) => {
      if (e.target.closest('.slider-nav-btn')) return;
      openLightbox();
    });
  }
}

/* ========================================================
   4. FEATURED PROJECT FILTERS
   ======================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card-3d');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterButtons.forEach(b => {
        b.classList.remove('bg-emerald-800', 'text-white', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-600', 'border');
      });

      btn.classList.remove('bg-white', 'text-slate-600', 'border');
      btn.classList.add('bg-emerald-800', 'text-white', 'shadow-md');

      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ========================================================
   5. MODALS (Login, Signup, Project Detail, Video, Lightbox)
   ======================================================== */
function initModals() {
  const openLoginBtns = document.querySelectorAll('.open-login-btn');
  const openSignupBtns = document.querySelectorAll('.open-signup-btn');
  const openVideoBtns = document.querySelectorAll('.open-video-btn');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');
  
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const videoModal = document.getElementById('videoModal');
  const projectModal = document.getElementById('projectModal');
  const lightboxModal = document.getElementById('bannerLightboxModal');
  const reelFrame = document.getElementById('facebookReelFrame');
  const reelEmbedUrl = "https://www.facebook.com/plugins/video.php?height=520&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1883124942599076%2F&show_text=false&width=320&t=0&autoplay=true";

  const allModals = [loginModal, signupModal, videoModal, projectModal, lightboxModal];
  const closeBtns = document.querySelectorAll('.modal-close-btn, .modal-close-btn-inline');

  function openModal(modal) {
    if (!modal) return;
    allModals.forEach(m => m && m.classList.remove('active'));
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    allModals.forEach(m => m && m.classList.remove('active'));
    document.body.style.overflow = '';
    // Pause / unload video iframe on modal close
    if (reelFrame && reelFrame.src && reelFrame.src !== 'about:blank') {
      reelFrame.src = 'about:blank';
    }
  }

  openLoginBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(loginModal);
  }));

  openSignupBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(signupModal);
  }));

  openVideoBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (reelFrame) {
      reelFrame.src = reelEmbedUrl;
    }
    openModal(videoModal);
  }));

  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');
  if (switchToSignup) switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(signupModal);
  });
  if (switchToLogin) switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(loginModal);
  });

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.project-card-3d');
      if (card && projectModal) {
        const title = card.querySelector('h3')?.innerText || 'প্রকল্প বিবরণী';
        const category = card.querySelector('.project-badge-cat')?.innerText || 'Sector';
        const location = card.querySelector('.project-location')?.innerText || 'বাংলাদেশ';
        const target = card.querySelector('.project-target-val')?.innerText || 'BDT 500M';
        const progress = card.querySelector('.project-progress-val')?.innerText || '50%';
        const imgSrc = card.querySelector('img')?.getAttribute('src') || '1..png';

        document.getElementById('modalProjectTitle').textContent = title;
        document.getElementById('modalProjectCategory').textContent = category;
        document.getElementById('modalProjectLocation').textContent = location;
        document.getElementById('modalProjectTarget').textContent = target;
        document.getElementById('modalProjectProgress').textContent = progress;
        document.getElementById('modalProjectImg').setAttribute('src', imgSrc);

        openModal(projectModal);
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  allModals.forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ========================================================
   6. MOBILE MENU WITH BACKDROP
   ======================================================== */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileCloseBtn = document.getElementById('mobileMenuCloseBtn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn || !mobileMenuDrawer) return;

  function openMenu() {
    mobileMenuDrawer.classList.remove('hidden');
    // slight delay to allow display:block to apply before transition
    setTimeout(() => {
    mobileMenuDrawer.classList.remove('translate-x-full');
    }, 10);
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenuBackdrop.classList.add('opacity-100', 'pointer-events-auto');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenuDrawer.classList.add('translate-x-full');
    setTimeout(() => {
      mobileMenuDrawer.classList.add('hidden');
    }, 300); // Wait for transition to finish
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenuBackdrop.classList.add('opacity-0', 'pointer-events-none');
    }
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ========================================================
   7. CONTACT FORM SUBMISSION
   ======================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.disabled = true;
    const isEnglish = (localStorage.getItem('biniyog_lang') === 'en');
    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${isEnglish ? 'Sending...' : 'পাঠানো হচ্ছে...'}`;

    setTimeout(() => {
      const msg = isEnglish ? 
        'Thank you! Your message has been sent successfully. Our team will contact you shortly.' : 
        'ধন্যবাদ! আপনার বার্তাটি সফলভাবে পৌঁছানো হয়েছে। খুব শীঘ্রই আমাদের টিম আপনার সাথে যোগাযোগ করবে।';
      showToast(msg);
      form.reset();
      btn.disabled = false;
      btn.innerHTML = originalText;
    }, 1200);
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-emerald-900 text-white px-5 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-500/30 transform translate-y-12 opacity-0 transition-all duration-300 font-medium text-xs sm:text-sm max-w-[90vw]';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-base sm:text-lg shrink-0"></i> <span>${message}</span>`;
  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 4000);
}

/* ========================================================
   8. STATS METRICS COUNT-UP ANIMATION (0 to Target)
   ======================================================== */
function initStatsCounter() {
  const counterSection = document.getElementById('impact-metrics-section');
  if (!counterSection) return;

  const counterEls = counterSection.querySelectorAll('.stat-counter-val');
  if (!counterEls.length) return;

  let hasAnimated = false;

  function toBengaliNumerals(str) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(str).replace(/[0-9]/g, d => bnDigits[d]);
  }

  function runCounterAnimation() {
    const isBengali = (document.documentElement.lang === 'bn');
    const duration = 2000; // 2 seconds smooth duration
    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function updateCounters(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      counterEls.forEach(el => {
        const i18nKey = el.getAttribute('data-i18n');

        if (progress >= 1) {
          if (typeof translations !== 'undefined' && translations[isBengali ? 'bn' : 'en']?.[i18nKey]) {
            el.textContent = translations[isBengali ? 'bn' : 'en'][i18nKey];
          }
          el.classList.add('counted');
          return;
        }

        if (i18nKey === 'metric_1_val') {
          // 0 -> 120+
          const val = Math.floor(0 + (120 - 0) * easedProgress);
          el.textContent = isBengali ? `${toBengaliNumerals(val)}+` : `${val}+`;
        } else if (i18nKey === 'metric_2_val') {
          // Bengali: 0 -> 100 কোটি+ টাকা
          // English: BDT 0.0B+ -> BDT 1B+
          if (isBengali) {
            const val = Math.floor(0 + (100 - 0) * easedProgress);
            el.textContent = `${toBengaliNumerals(val)} কোটি+ টাকা`;
          } else {
            const val = (0 + (1.0 - 0) * easedProgress).toFixed(1);
            el.textContent = (val >= 1.0) ? 'BDT 1B+' : `BDT ${val}B+`;
          }
        } else if (i18nKey === 'metric_3_val') {
          // 0% / ০%
          el.textContent = isBengali ? '০%' : '0%';
        } else if (i18nKey === 'metric_4_val') {
          // 0 -> 5,200+
          const val = Math.floor(0 + (5200 - 0) * easedProgress);
          const formatted = val.toLocaleString('en-US');
          el.textContent = isBengali ? `${toBengaliNumerals(formatted)}+` : `${formatted}+`;
        }
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    }

    // Set initial 0 values immediately before starting animation frame
    counterEls.forEach(el => {
      el.classList.remove('counted');
      const i18nKey = el.getAttribute('data-i18n');
      if (i18nKey === 'metric_1_val') el.textContent = isBengali ? '০+' : '0+';
      else if (i18nKey === 'metric_2_val') el.textContent = isBengali ? '০ কোটি+ টাকা' : 'BDT 0B+';
      else if (i18nKey === 'metric_3_val') el.textContent = isBengali ? '০%' : '0%';
      else if (i18nKey === 'metric_4_val') el.textContent = isBengali ? '০+' : '0+';
    });

    requestAnimationFrame(updateCounters);
  }

  // Trigger when scrolled into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          obs.unobserve(entry.target);
          runCounterAnimation();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(counterSection);
  } else {
    runCounterAnimation();
  }
}



/* ========================================================
   9. PROJECT CARD VALUE COUNT-UP ANIMATION (0 to Target)
   ======================================================== */
function initCardCounters() {
  const countEls = document.querySelectorAll('.card-count-val');
  if (!countEls.length) return;

  // Set all to 0 immediately so they are ready before scrolling
  countEls.forEach(el => {
    const suffix = el.getAttribute('data-suffix') || '';
    el.textContent = '0' + suffix;
  });

  const animated = new Set();

  function animateValue(el) {
    if (animated.has(el)) return;
    animated.add(el);

    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500;
    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = Math.floor(target * easedProgress);
      el.textContent = currentVal.toLocaleString('en-US') + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString('en-US') + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const els = entry.target.querySelectorAll('.card-count-val');
          els.forEach(el => animateValue(el));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card-3d').forEach(card => {
      observer.observe(card);
    });
  } else {
    countEls.forEach(el => animateValue(el));
  }
}


// Bottom Nav Logic
onReady(() => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.bottom-nav-link').forEach(link => {
    if (link.getAttribute('data-path') === currentPath) {
      link.classList.remove('text-slate-400');
      link.classList.add('text-emerald-600');
    }
  });

  if (['sectors.html', 'how-it-works.html'].includes(currentPath)) {
    const btn = document.querySelector('[data-target="sectorsPopup"]');
    if (btn) { btn.classList.remove('text-slate-400'); btn.classList.add('text-emerald-600'); }
  }
  if (['about.html', 'contact.html'].includes(currentPath)) {
    const btn = document.querySelector('[data-target="aboutPopup"]');
    if (btn) { btn.classList.remove('text-slate-400'); btn.classList.add('text-emerald-600'); }
  }

  const dropdownBtns = document.querySelectorAll('.bottom-nav-dropdown-btn');
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      const targetPopup = document.getElementById(targetId);
      
      document.querySelectorAll('.bottom-nav-dropdown-btn > div').forEach(popup => {
        if (popup.id !== targetId) popup.classList.add('hidden');
      });

      targetPopup.classList.toggle('hidden');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.bottom-nav-dropdown-btn > div').forEach(popup => {
      popup.classList.add('hidden');
    });
  });
});

// Login Tabs Logic
window.switchLoginTab = function(type) {
  const tabUser = document.getElementById('tabUserLogin');
  const tabAdmin = document.getElementById('tabAdminLogin');
  const title = document.getElementById('loginModalTitle');
  const sub = document.getElementById('loginModalSub');

  if (!tabUser || !tabAdmin) return;

  if (type === 'user') {
    tabUser.className = "flex-1 py-2 text-sm font-bold rounded-lg bg-white shadow-sm text-emerald-700 transition";
    tabAdmin.className = "flex-1 py-2 text-sm font-bold rounded-lg text-slate-500 hover:text-slate-700 transition";
    
    title.setAttribute('data-i18n', 'modal_login_title');
    sub.setAttribute('data-i18n', 'modal_login_sub');
  } else {
    tabAdmin.className = "flex-1 py-2 text-sm font-bold rounded-lg bg-white shadow-sm text-emerald-700 transition";
    tabUser.className = "flex-1 py-2 text-sm font-bold rounded-lg text-slate-500 hover:text-slate-700 transition";
    
    title.setAttribute('data-i18n', 'modal_admin_title');
    sub.setAttribute('data-i18n', 'modal_admin_sub');
  }
  
  if (typeof updateContent === 'function') {
    updateContent(currentLang);
  }
};

// Login Handler for User/Admin


// Handle API Signup
window.handleSignup = async function(event, form) {
  event.preventDefault();
  const inputs = form.querySelectorAll('input');
  
  let name = '';
  let email = '';
  let pass = '';
  
  if (inputs.length >= 3) {
    name = inputs[0].value.trim();
    email = inputs[1].value.trim();
    pass = inputs[2].value.trim();
  }
  
  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password: pass })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      window.location.href = '/dashboard/dashboard.html';
    } else {
      alert("Signup Failed: " + (data.error || "Unknown error"));
    }
  } catch (err) {
    console.error("Signup Error", err);
    alert("Server error. Please try again later.");
  }
};

// Handle API Login
window.handleLogin = async function(event, form) {
  event.preventDefault();
  const inputs = form.querySelectorAll('input');
  
  let email = '';
  let pass = '';
  
  if (inputs.length >= 2) {
    email = inputs[0].value.trim();
    pass = inputs[1].value.trim();
  }
  
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass })
    });
    
    const data = await res.json();
    
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      
      if (data.role === 'admin') {
        window.location.href = '/admin/admin-dashboard.html';
      } else {
        window.location.href = '/dashboard/dashboard.html';
      }
    } else {
      alert("Login Failed: " + (data.error || "Invalid credentials"));
    }
  } catch (err) {
    console.error("Login Error", err);
    alert("Server error. Please try again later.");
  }
};






// Fetch User Profile on Dashboard Pages
async function loadUserProfile() {
  const token = localStorage.getItem('token');
  if (!token) return; // Not logged in or on public page

  try {
    const res = await fetch('/api/user/profile', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    
    if (res.ok) {
      const user = await res.json();
      
      // Update global header elements if they exist
      const headerNames = document.querySelectorAll('.header-user-name');
      const headerCodes = document.querySelectorAll('.header-investor-code');
      const headerBalances = document.querySelectorAll('.header-wallet-balance');
      const headerInitials = document.querySelectorAll('.header-user-initials');
      
      if (headerNames) headerNames.forEach(el => el.textContent = user.name);
      if (headerCodes) headerCodes.forEach(el => el.textContent = user.investor_code || 'INVS-XXXXX');
      if (headerBalances) headerBalances.forEach(el => el.textContent = (user.wallet_balance || 0).toLocaleString() + ' BDT');
      
      if (headerInitials && user.name) {
        const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        headerInitials.forEach(el => el.textContent = initials);
      }

      // If we are on dash-wallet.html
      const walletBalanceDisplay = document.getElementById('walletBalanceDisplay');
      if (walletBalanceDisplay) {
        walletBalanceDisplay.innerHTML = (user.wallet_balance || 0).toLocaleString() + ' <span class="text-lg font-normal opacity-80">BDT</span>';
      }

    } else if (res.status === 401 || res.status === 403) {
      // Token expired
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      if (window.location.pathname.includes('/dashboard') || window.location.pathname.includes('/admin')) {
        window.location.href = '/index.html';
      }
    }
  } catch(err) {
    console.error("Profile load error", err);
  }
}

// Ensure loadUserProfile runs on all pages
onReady(loadUserProfile);

window.showToast = function(type, message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-5 right-5 z-[100] flex flex-col gap-3';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-emerald-600' : (type === 'error' ? 'bg-red-600' : 'bg-slate-800');
    const icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-circle-xmark' : 'fa-info-circle');
    
    toast.className = bgColor + " text-white px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300";
    toast.innerHTML = '<i class="fa-solid ' + icon + ' text-lg"></i> <p class="font-bold text-sm">' + message + '</p>';
    
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-10', 'opacity-0'), 10);
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// ============================================================
// DASHBOARD FUNCTIONALITY (Real API)
// ============================================================

onReady(() => {
    const token = localStorage.getItem('token');
    const path = window.location.pathname;

    // --- Deposit Form ---
    const depositForm = document.getElementById('depositForm') || document.querySelector('form[action="dash-deposit.html"]');
    if (depositForm && token) {
        depositForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const amountInput = depositForm.querySelector('input[type="number"]');
            const amount = amountInput ? amountInput.value : 0;
            
            if (!amount || amount < 100) {
                window.showToast('error', 'Minimum deposit is 100 BDT');
                return;
            }

            try {
                const res = await fetch('/api/user/deposit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' },
                    body: JSON.stringify({ amount: Number(amount) })
                });
                const data = await res.json();
                if (res.ok) {
                    window.showToast('success', data.message);
                    depositForm.reset();
                } else {
                    window.showToast('error', data.error || 'Deposit failed');
                }
            } catch (err) {
                window.showToast('error', 'Server error');
            }
        });
    }

    // --- Withdraw Form ---
    const withdrawForm = document.getElementById('withdrawForm') || document.querySelector('form[action="dash-withdraw.html"]');
    if (withdrawForm && token) {
        withdrawForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const amountInput = withdrawForm.querySelector('input[type="number"]');
            const amount = amountInput ? amountInput.value : 0;

            if (!amount || amount < 100) {
                window.showToast('error', 'Minimum withdrawal is 100 BDT');
                return;
            }

            try {
                const res = await fetch('/api/user/withdraw', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' },
                    body: JSON.stringify({ amount: Number(amount) })
                });
                const data = await res.json();
                if (res.ok) {
                    window.showToast('success', data.message);
                    withdrawForm.reset();
                } else {
                    window.showToast('error', data.error || 'Withdrawal failed');
                }
            } catch (err) {
                window.showToast('error', 'Server error');
            }
        });
    }

    // --- Load Transactions ---
    if (path.includes('dash-transactions') || path.includes('dash-wallet')) {
        loadTransactions();
    }

    // --- Load Investments ---
    if (path.includes('dash-investment-history') || path.includes('dash-invested')) {
        loadInvestments();
    }

    // --- Logout Button ---
    const logoutBtns = document.querySelectorAll('.logout-btn, [onclick*="logout"]');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await fetch('/api/logout', { method: 'POST', headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' } });
            } catch(e) {}
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            window.location.href = '/index.html';
        });
    });
});

async function loadTransactions() {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
        const res = await fetch('/api/user/transactions', {
            headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' }
        });
        if (!res.ok) return;
        const transactions = await res.json();

        const tbody = document.querySelector('tbody');
        if (tbody && transactions.length > 0) {
            tbody.innerHTML = '';
            transactions.forEach(t => {
                const typeClass = t.type === 'Deposit' ? 'text-emerald-600' :
                                 t.type === 'Withdrawal' ? 'text-red-600' :
                                 t.type === 'Investment' ? 'text-blue-600' : 'text-purple-600';
                const statusClass = t.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                                   t.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                   'bg-red-100 text-red-700';
                const date = new Date(t.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

                tbody.innerHTML += `
                    <tr class="border-b border-slate-50 hover:bg-slate-50/50 transition">
                        <td class="py-3.5 text-sm text-slate-500">${date}</td>
                        <td class="py-3.5"><span class="font-bold text-sm ${typeClass}">${t.type}</span></td>
                        <td class="py-3.5 font-bold text-sm">৳${Number(t.amount).toLocaleString()}</td>
                        <td class="py-3.5"><span class="px-2 py-0.5 ${statusClass} text-xs font-bold rounded-md">${t.status}</span></td>
                        <td class="py-3.5 text-sm text-slate-400">${t.reference || '-'}</td>
                    </tr>
                `;
            });
        }
    } catch (err) {
        console.error('Transactions load error', err);
    }
}

async function loadInvestments() {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
        const res = await fetch('/api/user/investments', {
            headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/json' }
        });
        if (!res.ok) return;
        const investments = await res.json();

        const container = document.querySelector('.investment-list') || document.querySelector('.grid');
        if (container && investments.length > 0) {
            container.innerHTML = '';
            investments.forEach(inv => {
                const date = new Date(inv.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
                container.innerHTML += `
                    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition">
                        <div class="flex items-center justify-between mb-3">
                            <h4 class="font-bold text-lg text-slate-800">${inv.project ? inv.project.title : 'Project'}</h4>
                            <span class="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-md">${inv.status}</span>
                        </div>
                        <div class="grid grid-cols-3 gap-3 text-center">
                            <div class="bg-slate-50 rounded-xl p-3">
                                <p class="text-xs text-slate-400 uppercase mb-1">Invested</p>
                                <p class="font-bold text-emerald-700">৳${Number(inv.amount).toLocaleString()}</p>
                            </div>
                            <div class="bg-slate-50 rounded-xl p-3">
                                <p class="text-xs text-slate-400 uppercase mb-1">Shares</p>
                                <p class="font-bold text-slate-800">${inv.shares}</p>
                            </div>
                            <div class="bg-slate-50 rounded-xl p-3">
                                <p class="text-xs text-slate-400 uppercase mb-1">Date</p>
                                <p class="font-bold text-slate-800">${date}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    } catch (err) {
        console.error('Investments load error', err);
    }
}

// Show Blog Modal
window.openBlogModal = function(btn) {
  event.preventDefault();
  const card = btn.closest('.bg-white, .flex-col');
  if (!card) return;
  
  const img = card.querySelector('img');
  const title = card.querySelector('h3, h4');
  const date = card.querySelector('.uppercase');
  const desc = card.querySelector('p');
  
  const modal = document.getElementById('blogDetailsModal');
  if (modal) {
    document.getElementById('blogModalImg').src = img ? img.src : '';
    document.getElementById('blogModalTitle').textContent = title ? title.textContent.trim() : '';
    document.getElementById('blogModalDate').textContent = date ? date.textContent.trim() : 'Today';
    document.getElementById('blogModalDesc').textContent = desc ? desc.textContent.trim() : '';
    
    modal.classList.add('active');
  }
};
