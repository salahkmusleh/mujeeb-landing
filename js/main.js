/* ============================================================
   مُجيب — main.js
   GSAP animations | WhatsApp chat demo | Google Forms submit
   ============================================================ */

/* ---- PAGE LOADER ---- */
(function injectLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-logo">مُجيب<span style="color:#C5A059">.</span></div>
    <div class="loader-bar"><div class="loader-fill"></div></div>
  `;
  document.body.prepend(loader);

  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1500);
    setTimeout(() => loader.remove(), 2100);
  });
})();

/* ---- SCROLL PROGRESS BAR ---- */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = ((window.scrollY / max) * 100).toFixed(2) + '%';
  }, { passive: true });
})();

/* ---- GSAP SETUP ---- */
gsap.registerPlugin(ScrollTrigger, TextPlugin);

/* ---- CANVAS PARTICLE BACKGROUND ---- */
(function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['rgba(27,77,62,', 'rgba(197,160,89,', 'rgba(103,56,49,'];

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x = Math.random() * W;
      this.y = initial ? Math.random() * H : H + 10;
      this.r = Math.random() * 1.5 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.alpha = 0;
      this.maxAlpha = Math.random() * 0.5 + 0.1;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      const progress = this.life / this.maxLife;
      this.alpha = progress < 0.2
        ? (progress / 0.2) * this.maxAlpha
        : progress > 0.8
          ? ((1 - progress) / 0.2) * this.maxAlpha
          : this.maxAlpha;
      if (this.life >= this.maxLife) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);

    // Draw subtle grid
    ctx.strokeStyle = 'rgba(27,77,62,0.04)';
    ctx.lineWidth = 1;
    const gridSize = 80;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(loop);
  }
  loop();
})();

/* ---- CUSTOM CURSOR ---- */
(function initCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animateCursor() {
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .btn, .service-card, .why-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
})();

/* ---- NAVBAR ---- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  toggle?.addEventListener('click', () => {
    menu.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    const isOpen = menu.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity   = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });

  // Close on link click
  menu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
    });
  });
})();

/* ---- HERO ANIMATIONS ---- */
window.addEventListener('load', () => {
  const tl = gsap.timeline({ delay: 1.6 });

  tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
    .from('.hero-title .line', {
      opacity: 0, y: 60, stagger: 0.15, duration: 0.8, ease: 'power4.out'
    }, '-=0.3')
    .from('.hero-sub', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.hero-cta-group .btn', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .from('.hero-trust', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.2')
    .from('.hero-mockup', { opacity: 0, x: -60, duration: 1, ease: 'power3.out' }, '-=0.8')
    .from('.scroll-indicator', { opacity: 0, y: 10, duration: 0.5 }, '-=0.2');
});

/* ---- SCROLL REVEAL ---- */
(function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseFloat(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('visible'), delay * 1000);
      observer.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
})();

/* ---- COUNTER ANIMATION ---- */
(function initCounters() {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el   = entry.target;
      const end  = parseInt(el.dataset.target, 10);
      const dur  = 1800;
      const step = 16;
      const inc  = end / (dur / step);
      let cur = 0;

      const timer = setInterval(() => {
        cur = Math.min(cur + inc, end);
        el.textContent = Math.floor(cur).toLocaleString('ar-EG');
        if (cur >= end) clearInterval(timer);
      }, step);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
})();

/* ---- MAGNETIC BUTTONS ---- */
(function initMagnetic() {
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

/* ---- GSAP SCROLL ANIMATIONS ---- */
(function initGSAPScrollAnimations() {
  // Services section title
  gsap.from('.services-section .section-header', {
    scrollTrigger: { trigger: '.services-section', start: 'top 80%' },
    opacity: 0, y: 40, duration: 0.8, ease: 'power3.out'
  });

  // Floating orbs subtle parallax
  gsap.to('.orb-1', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
    y: -80, x: 30
  });
  gsap.to('.orb-2', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
    y: -120, x: -20
  });

  // Hero mockup bars animate in
  gsap.from('.bar', {
    scrollTrigger: { trigger: '.activity-bar', start: 'top 90%' },
    scaleY: 0, transformOrigin: 'bottom', stagger: 0.08, duration: 0.6, ease: 'power2.out'
  });

  // Process steps line draw
  gsap.from('.process-line', {
    scrollTrigger: { trigger: '.process-steps', start: 'top 70%', end: 'bottom 70%', scrub: true },
    scaleY: 0, transformOrigin: 'top center'
  });

  // Stats section
  gsap.from('.stat-item', {
    scrollTrigger: { trigger: '.stats-section', start: 'top 80%' },
    opacity: 0, y: 30, stagger: 0.1, duration: 0.6, ease: 'power3.out'
  });
})();

/* ============================================================
   WHATSAPP CHAT DEMO
   ============================================================ */
(function initWhatsApp() {
  const messagesEl = document.getElementById('waMessages');
  if (!messagesEl) return;

  const scenarios = {
    sales: [
      { from: 'bot',  text: 'مرحباً! أنا مساعد متجر الأناقة. كيف أقدر أساعدك اليوم؟ 😊', delay: 800 },
      { from: 'user', text: 'في عندكم تشكيلة عبايات جديدة؟', delay: 2000 },
      { from: 'bot',  text: 'بالتأكيد! وصلتنا هذا الأسبوع أكثر من 40 موديل جديد للعبايات 🎉\n\nأي فئة تفضلين؟\n• عبايات كاجوال\n• عبايات سهرة\n• عبايات رسمية', delay: 3500 },
      { from: 'user', text: 'عبايات سهرة', delay: 5500 },
      { from: 'bot',  text: 'ممتاز! لدينا 12 موديل للسهرة بأسعار تبدأ من 89 دينار.\n\nهل تودين رؤية الكتالوج كاملاً أو تحديد مقاسك أولاً لأعرض المتوفر منها؟', delay: 7000 },
    ],
    support: [
      { from: 'bot',  text: 'أهلاً! أنا مساعد الدعم. ما المشكلة التي تواجهها؟', delay: 800 },
      { from: 'user', text: 'طلبيتي ما وصلت وأنا دفعت قبل 5 أيام', delay: 2000 },
      { from: 'bot',  text: 'آسف جداً على هذا التأخير! 🙏\n\nأعطني رقم الطلبية وسأتابعها فوراً معك.', delay: 3200 },
      { from: 'user', text: 'رقم الطلبية: ORD-2024-4872', delay: 5000 },
      { from: 'bot',  text: '✅ وجدت طلبيتك!\n\nالحالة: في طريقها إليك 🚚\nموعد التسليم المتوقع: غداً بين 10 صباحاً - 2 ظهراً\n\nهل تريد إشعاراً فورياً لحظة وصولها؟', delay: 6500 },
    ],
    booking: [
      { from: 'bot',  text: 'أهلاً بك! يسعدني مساعدتك في حجز موعد. 📅\n\nأي خدمة تريد الحجز لها؟', delay: 800 },
      { from: 'user', text: 'استشارة تسويقية', delay: 2200 },
      { from: 'bot',  text: 'ممتاز! استشارات التسويق متاحة مع خبرائنا.\n\nأيام متاحة هذا الأسبوع:\n• الثلاثاء 9 يوليو\n• الأربعاء 10 يوليو\n• الخميس 11 يوليو\n\nأي يوم يناسبك؟', delay: 3800 },
      { from: 'user', text: 'الأربعاء', delay: 5500 },
      { from: 'bot',  text: '✅ تم التأكيد!\n\n📅 الأربعاء 10 يوليو\n🕙 الساعة 10:00 صباحاً\n👤 مع م. سارة الحامد\n\nسيصلك تذكير قبل ساعة من الموعد. هل تريد إضافة للتقويم؟', delay: 7200 },
    ]
  };

  let currentScenario = 'sales';
  let isRunning = false;
  let timeouts = [];

  function clearTimeouts() { timeouts.forEach(clearTimeout); timeouts = []; }

  function now() {
    return new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  }

  function addTypingIndicator() {
    const el = document.createElement('div');
    el.className = 'wa-typing';
    el.id = 'typingIndicator';
    el.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(el);
    scrollToBottom();
    return el;
  }

  function removeTyping() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
  }

  function addMessage(from, text) {
    removeTyping();
    const el = document.createElement('div');
    el.className = `wa-msg ${from}`;
    el.innerHTML = text.replace(/\n/g, '<br>') +
      `<span class="wa-msg-time">${now()}${from === 'user' ? ' ✓✓' : ''}</span>`;
    messagesEl.appendChild(el);
    scrollToBottom();
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function runScenario(key) {
    if (isRunning) return;
    isRunning = true;
    clearTimeouts();

    // Clear messages except date divider
    while (messagesEl.children.length > 1) {
      messagesEl.removeChild(messagesEl.lastChild);
    }

    const msgs = scenarios[key];
    let accDelay = 0;

    msgs.forEach((msg, i) => {
      accDelay += msg.delay - (i === 0 ? 0 : msgs[i - 1].delay);

      if (msg.from === 'bot') {
        const tTyping = setTimeout(() => addTypingIndicator(), accDelay - 900);
        timeouts.push(tTyping);
      }

      const t = setTimeout(() => {
        addMessage(msg.from, msg.text);
        if (i === msgs.length - 1) {
          isRunning = false;
          // Loop after a pause
          timeouts.push(setTimeout(() => runScenario(currentScenario), 4000));
        }
      }, accDelay);
      timeouts.push(t);
    });
  }

  // Scenario button switching
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.scenario === currentScenario && isRunning) return;
      document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentScenario = btn.dataset.scenario;
      isRunning = false;
      clearTimeouts();
      runScenario(currentScenario);
    });
  });

  // Start when in view
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      runScenario(currentScenario);
      observer.disconnect();
    }
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('demo'));
})();

/* ============================================================
   GOOGLE FORMS INTEGRATION
   ============================================================

   HOW TO SET UP YOUR OWN GOOGLE FORM:
   ─────────────────────────────────────
   1. Create a Google Form at forms.google.com
   2. Add fields matching the form below
   3. Open the form → click the 3-dot menu → "Get pre-filled link"
   4. Fill each field and click "Get link" — the URL shows entry.XXXXXXXXX IDs
   5. Replace the GOOGLE_FORM_ACTION_URL and entry IDs below
   6. Replace FIELD_IDS with your actual entry.XXXXXXXXX values

   ============================================================ */

(function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const submitTxt = document.getElementById('submitText');
  const success   = document.getElementById('formSuccess');

  if (!form) return;

  // ── REPLACE THIS URL with your Google Form action URL ──────
  // Example: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'
  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID_HERE/formResponse';

  // ── REPLACE these entry IDs with your actual Google Form field IDs ──
  const FIELD_IDS = {
    fullName: 'entry.000000001',   // Full Name field ID
    company:  'entry.000000002',   // Company field ID
    phone:    'entry.000000003',   // Phone field ID
    email:    'entry.000000004',   // Email field ID
    service:  'entry.000000005',   // Service select field ID
    message:  'entry.000000006',   // Message field ID
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate
    const data = new FormData(form);
    const fullName = data.get('fullName')?.trim();
    const phone    = data.get('phone')?.trim();
    const email    = data.get('email')?.trim();

    if (!fullName || !phone || !email) {
      shakeForm();
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitTxt.textContent = 'جارٍ الإرسال...';
    submitBtn.style.opacity = '0.7';

    // Build form body for Google Forms
    const body = new URLSearchParams();
    body.append(FIELD_IDS.fullName, fullName);
    body.append(FIELD_IDS.company,  data.get('company') || '');
    body.append(FIELD_IDS.phone,    phone);
    body.append(FIELD_IDS.email,    email);
    body.append(FIELD_IDS.service,  data.get('service') || '');
    body.append(FIELD_IDS.message,  data.get('message') || '');

    try {
      // Google Forms doesn't support CORS, so we use no-cors.
      // The request succeeds but returns an opaque response — that's expected.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch (_) {
      // no-cors fetch will throw on network failure only; opaque is fine
    }

    // Show success regardless (Google Forms always accepts valid submissions)
    form.style.display = 'none';
    success.classList.add('visible');

    // GSAP success animation
    gsap.from('.form-success > *', {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.5,
      ease: 'power3.out'
    });
  });

  function shakeForm() {
    gsap.fromTo(form,
      { x: 0 },
      { x: 12, duration: 0.08, repeat: 5, yoyo: true, ease: 'power2.inOut',
        onComplete: () => gsap.set(form, { x: 0 })
      }
    );
    // Highlight empty required fields
    ['fullName', 'phone', 'email'].forEach(name => {
      const el = form.querySelector(`[name="${name}"]`);
      if (!el?.value.trim()) {
        el.style.borderColor = '#e05a4e';
        el.addEventListener('input', () => el.style.borderColor = '', { once: true });
      }
    });
  }
})();

/* ---- SMOOTH ANCHOR SCROLLING ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ---- SERVICE CARD GLOW FOLLOW MOUSE ---- */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(27,77,62,0.08) 0%, rgba(255,255,255,0.03) 50%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

/* ---- WHY CARD TILT ---- */
document.querySelectorAll('.why-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-4px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    card.style.transition = 'transform 0.1s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
  });
});

/* ---- PRICING TOGGLE ---- */
(function initPricingToggle() {
  const toggle      = document.getElementById('billingToggle');
  const monthlyLbl  = document.getElementById('monthlyLabel');
  const yearlyLbl   = document.getElementById('yearlyLabel');
  if (!toggle) return;

  let isYearly = false;

  toggle.addEventListener('click', () => {
    isYearly = !isYearly;
    toggle.classList.toggle('active', isYearly);
    monthlyLbl.classList.toggle('active', !isYearly);
    yearlyLbl.classList.toggle('active', isYearly);

    document.querySelectorAll('.monthly-price').forEach(el => el.classList.toggle('hidden', isYearly));
    document.querySelectorAll('.yearly-price').forEach(el => el.classList.toggle('hidden', !isYearly));

    gsap.from('.amount', { scale: 0.8, opacity: 0, duration: 0.3, ease: 'back.out(1.7)', stagger: 0.05 });
  });
})();

console.log('%c مُجيب AI Automation', 'color:#C5A059;font-size:20px;font-weight:900;font-family:Tajawal,sans-serif');
console.log('%c Built with ❤️ for the Arab market', 'color:#1B4D3E;font-size:13px;');
