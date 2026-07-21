/* ============================================================
   مُجيب — Bilingual (AR ⇄ EN) engine
   Arabic is the default in the DOM; English strings live here.
   Original Arabic content is cached on first run, so toggling
   back to Arabic restores it exactly.
   ============================================================ */
(function () {
  const EN = {
    // Nav
    'nav.services': 'Services', 'nav.demo': 'Live Demo', 'nav.why': 'Why Us',
    'nav.process': 'How It Works', 'nav.pricing': 'Pricing', 'nav.contact': 'Contact',
    'cta.start': 'Get Started',

    // Hero
    'hero.badge': 'AI for the Arabic Market',
    'hero.t1': 'Automation that turns', 'hero.t2': 'your business', 'hero.t3': 'into a growth engine',
    'hero.sub': 'We build custom AI solutions for Arabic businesses —<br />chatbots, automated workflows, and smart integration with your existing systems.',
    'hero.cta1': 'Book your free consultation', 'hero.cta2': 'See how it works',
    'hero.trusted': 'Trusted by',
    'hero.trust1': 'Startups', 'hero.trust2': 'Retail & Commerce', 'hero.trust3': 'Healthcare', 'hero.trust4': 'Financial Services',
    'hero.dash': 'Mujeeb Dashboard',
    'hero.m1': 'Chats today', 'hero.m2': 'Response rate', 'hero.m3': 'Leads converted', 'hero.m4': 'Avg. reply',
    'hero.reply': '1.2s',
    'hero.activity': 'Chat activity — last 7 days',
    'hero.d1': 'Sun', 'hero.d2': 'Mon', 'hero.d3': 'Tue', 'hero.d4': 'Wed', 'hero.d5': 'Thu', 'hero.d6': 'Fri', 'hero.d7': 'Sat',
    'hero.scroll': 'Scroll down',

    // CTA banner
    'cta.title': "Don't leave a customer waiting",
    'cta.sub': 'Start today with Mujeeb — it replies, books, and collects your leads while you focus on your business.',
    'cta.whatsapp': 'WhatsApp', 'cta.demo': 'Book a free demo',

    // Clients
    'clients.label': 'Trusted by leading brands across the region',
    'clients.c1': 'Anaqa Store', 'clients.c2': 'TechSouq', 'clients.c3': 'Elite Clinics',
    'clients.c4': 'Bayt Al Qahwa', 'clients.c5': 'Logistic Pro', 'clients.c6': 'Dar Fashion',

    // Stats
    'stats.s1': 'Projects delivered', 'stats.s2': 'Client satisfaction',
    'stats.s3': 'Avg. sales growth', 'stats.s4': 'Support cost saved',

    // Services
    'services.tag': 'What we offer',
    'services.title': 'Our core <span class="gradient-text">services</span>',
    'services.sub': 'We build every solution from scratch to fit your business, your language, and your customers.',
    'services.s1.t': 'Smart AI Chatbots',
    'services.s1.p': 'Custom bots that speak formal Arabic and local dialects, understand context, and turn visitors into customers around the clock.',
    'services.s2.t': 'Workflow Automation',
    'services.s2.p': 'We eliminate repetitive manual tasks entirely — from processing orders and sending invoices to updating databases automatically, with no human intervention.',
    'services.s3.t': 'Smart System Integration',
    'services.s3.p': 'We connect AI to your entire tech stack — ERP, CRM, e-commerce — so data flows seamlessly without interruption.',
    'svc.f1': 'WhatsApp, Instagram & Website support', 'svc.f2': 'CRM & payment gateway integration',
    'svc.f3': 'Continuous learning from conversations', 'svc.f4': 'Connect 1000+ apps (Make, Zapier)',
    'svc.f5': 'Workflows tailored to your industry', 'svc.f6': 'Live monitoring dashboard',
    'svc.f7': 'SAP, Odoo, Salesforce integration', 'svc.f8': 'Custom, secure APIs', 'svc.f9': '24/7 ongoing technical support',
    'services.s1.link': 'Build your bot', 'services.s2.link': 'Automate your work', 'services.s3.link': 'Explore possibilities',
    'services.badge': 'Most popular',

    // Demo
    'demo.tag': 'Live Demo',
    'demo.title': 'See the bot <span class="gradient-text">in action</span>',
    'demo.sub': 'This is a real sales bot built for an e-commerce store. The bot understands, replies, and converts — around the clock.',
    'demo.st1v': '1.2s', 'demo.st1': 'Avg. reply time', 'demo.st2': 'Never stops',
    'demo.st3v': 'Arabic', 'demo.st3': 'Formal & dialects',
    'demo.try': 'Try a scenario:', 'demo.sales': 'Sales', 'demo.support': 'Support', 'demo.booking': 'Booking',
    'demo.waname': 'Mujeeb — Store Assistant', 'demo.online': 'Online now', 'demo.today': 'Today', 'demo.type': 'Type a message...',

    // Why us
    'why.tag': 'Our edge',
    'why.title': 'Why <span class="gradient-text">Mujeeb</span>?',
    'why.sub': "We're not just a service provider — we're a growth partner that understands the Arabic market.",
    'why.w1.t': 'Understands your dialect', 'why.w1.p': 'Authentic Arabic that understands Gulf and Levantine dialects — no cold machine translation.',
    'why.w2.t': 'Instant replies', 'why.w2.p': 'Replies anytime — within a second — so no customer is left waiting.',
    'why.w3.t': 'Easy setup', 'why.w3.p': 'Ready in days. We train it fully on your business and handle the rest.',
    'why.w4.t': 'Never sleeps', 'why.w4.p': 'Works 24/7 with no holidays or downtime — even while you sleep.',

    // Process
    'process.tag': 'How It Works',
    'process.title': 'From idea to <span class="gradient-text">result</span>',
    'process.sub': 'Four clear steps, no complexity, no surprises.',
    'process.p1.t': 'Discovery session', 'process.p1.p': 'We sit with you for a full hour to understand your business, challenges, and goals. The session is free with no commitment.', 'process.p1.d': 'One day',
    'process.p2.t': 'Design & planning', 'process.p2.p': 'We build the full solution map — conversation flows, integration points, and agreed success metrics.', 'process.p2.d': '3 days',
    'process.p3.t': 'Build & test', 'process.p3.p': 'We build the solution and test it with real questions from your market. We refine until it works at 98%+ accuracy before delivery.', 'process.p3.d': '7-10 days',
    'process.p4.t': 'Launch & optimize', 'process.p4.p': 'A controlled launch, then continuous improvement based on real conversation data.', 'process.p4.d': 'Ongoing',

    // Problem
    'problem.tag': 'The Problem',
    'problem.title': "Customers don't wait. A late reply = <span class=\"gradient-text\">a lost deal</span>.",
    'problem.sub': "Most customers expect a reply within minutes. When you're late, they go straight to your competitor — messages after hours, repeated questions, and unanswered bookings; opportunities leak every day.",
    'problem.hl': '5 <span>minutes</span>',
    'problem.hlp': 'Your window to reply before you lose the customer',
    'problem.v3': '5 minutes',
    'problem.p1': 'Messages never stop, even after the store closes.',
    'problem.p2': 'of customers deal with whoever replies first.',
    'problem.p3': 'after which the chance of converting the customer drops sharply.',

    // Pricing
    'pricing.tag': 'Pricing',
    'pricing.title': 'Invest in <span class="gradient-text">growth</span>',
    'pricing.sub': 'Clear packages with no hidden fees — pay for results, not for hours.',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly <span class="save-badge">Save 20%</span>',
    'pricing.tag1': 'For startups', 'pricing.tag2': 'For scaling businesses', 'pricing.tag3': 'For enterprises & large teams',
    'pricing.mo': '/mo',
    'pricing.d1': 'Perfect for a first real experience with automation.',
    'pricing.d2': 'The complete package for automating sales and support together.',
    'pricing.d3': 'A solution built from scratch for your needs, with no limits.',
    'pricing.custom': 'Custom pricing', 'pricing.popular': 'Most chosen',
    'pf.0': 'One chatbot', 'pf.1': 'Up to 1,000 chats / month', 'pf.2': 'WhatsApp or Website integration',
    'pf.3': 'Basic analytics dashboard', 'pf.4': 'Support during business hours',
    'pf.5': 'Workflow automation', 'pf.6': 'CRM / ERP integration',
    'pf.7': 'Up to 3 chatbots', 'pf.8': 'Up to 10,000 chats / month', 'pf.9': 'WhatsApp + Instagram + Website integration',
    'pf.10': '3 custom workflow automations', 'pf.11': 'Basic CRM integration', 'pf.12': 'Advanced analytics dashboard', 'pf.13': '24/7 support via WhatsApp',
    'pf.14': 'Unlimited chatbots', 'pf.15': 'Unlimited chats', 'pf.16': 'Full ERP / SAP / Odoo integration',
    'pf.17': 'Unlimited workflow automation', 'pf.18': 'Your own private AI models', 'pf.19': 'Guaranteed 99.9% SLA', 'pf.20': 'Dedicated account manager',
    'pricing.cta1': 'Start free for a week', 'pricing.cta2': 'Book a demo', 'pricing.cta3': 'Talk to our team',
    'pricing.guarantee': "<strong>14-day</strong> money-back guarantee — if you don't like the solution, we refund everything, no questions asked.",

    // Contact
    'contact.title': 'Ready to transform <span class="gradient-text">your business</span>?',
    'contact.sub': "Book your free session today. In 30 minutes you'll know exactly how Mujeeb can double your team's efficiency.",
    'contact.k1': 'A free, no-commitment consultation', 'contact.k2': 'A solution map tailored to your business',
    'contact.k3': 'A reply within 24 business hours', 'contact.k4': 'No sales pressure — just real solutions',
    'form.name': 'Full name *', 'form.company': 'Company name', 'form.phone': 'Phone number *',
    'form.email': 'Email *', 'form.service': 'Service needed', 'form.msg': 'Tell us about your biggest challenge',
    'form.namePh': 'John Smith', 'form.companyPh': 'Your company', 'form.msgPh': 'What problem do you want to solve?',
    'form.opt0': 'Choose a service...', 'form.opt1': 'Chatbot', 'form.opt2': 'Workflow automation',
    'form.opt3': 'System integration', 'form.opt4': 'End-to-end solution',
    'form.submit': 'Book your free session',
    'form.note': 'By submitting this form you agree to be contacted via WhatsApp or email.',
    'form.successT': 'Your request was sent successfully!',
    'form.successP': 'Our team will contact you within 24 business hours to schedule the session.',

    // Footer
    'footer.brand': 'We empower Arabic businesses to automate their operations with custom AI.',
    'footer.services': 'Services', 'footer.l1': 'Chatbots', 'footer.l2': 'Workflow automation', 'footer.l3': 'System integration',
    'footer.company': 'Company', 'footer.about': 'About us', 'footer.whym': 'Why Mujeeb',
    'footer.direct': 'Direct contact', 'footer.wa': 'Chat with us on WhatsApp', 'footer.region': 'Serving the entire Arab market',
    'footer.rights': '© 2026 Mujeeb AI. All rights reserved.',
    'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms & Conditions',

    // Marquee
    'mq1': 'Smart AI Chatbots', 'mq2': 'Workflow Automation', 'mq3': 'WhatsApp Integration', 'mq4': 'Full Arabic Support',
    'mq5': 'Advanced Analytics', 'mq6': 'Two-week Delivery', 'mq7': 'Money-back Guarantee', 'mq8': 'AI Automation',

    // Document
    'meta.title': 'Mujeeb — AI Business Automation',

    // Runtime (used by main.js)
    'form.sending': 'Sending...'
  };

  const AR_TITLE = document.title;
  const STORAGE_KEY = 'mujeeb_lang';
  const listeners = [];

  function apply(lang) {
    const en = lang === 'en';
    const root = document.documentElement;
    root.lang = lang;
    root.dir = en ? 'ltr' : 'rtl';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (el._ar == null) el._ar = el.textContent;
      el.textContent = en && EN[k] != null ? EN[k] : el._ar;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (el._arHtml == null) el._arHtml = el.innerHTML;
      el.innerHTML = en && EN[k] != null ? EN[k] : el._arHtml;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const k = el.getAttribute('data-i18n-ph');
      if (el._arPh == null) el._arPh = el.getAttribute('placeholder') || '';
      el.setAttribute('placeholder', en && EN[k] != null ? EN[k] : el._arPh);
    });

    document.title = en ? EN['meta.title'] : AR_TITLE;

    // Toggle button shows the language you can switch TO
    document.querySelectorAll('.lang-toggle-text').forEach(t => {
      t.textContent = en ? 'العربية' : 'EN';
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    listeners.forEach(fn => { try { fn(lang); } catch (e) {} });
  }

  function current() {
    try { return localStorage.getItem(STORAGE_KEY) || 'ar'; } catch (e) { return 'ar'; }
  }

  // Public API for other scripts (e.g. the WhatsApp demo in main.js)
  window.MujeebLang = {
    get current() { return document.documentElement.lang === 'en' ? 'en' : 'ar'; },
    t: function (key) { return this.current === 'en' && EN[key] != null ? EN[key] : null; },
    onChange: function (fn) { if (typeof fn === 'function') listeners.push(fn); },
    set: function (lang) { apply(lang); }
  };

  function init() {
    apply(current());
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        apply(document.documentElement.lang === 'en' ? 'ar' : 'en');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
