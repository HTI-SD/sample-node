// =====================================================
// FarmSeva — Global App JS
// Cart system + Full Hindi/English bilingual engine
// =====================================================

// ─── TRANSLATIONS ────────────────────────────────────
const T = {
  // Nav
  'nav-equipment':       { en:'Equipment',      hi:'उपकरण' },
  'nav-labour':          { en:'Labour',          hi:'मजदूर' },
  'nav-experts':         { en:'Experts',         hi:'विशेषज्ञ' },
  'nav-disease':         { en:'Disease AI',      hi:'रोग AI' },
  'nav-weather':         { en:'Weather',         hi:'मौसम' },
  'nav-group':           { en:'Group',           hi:'समूह' },
  'nav-book-now':        { en:'Book Now',        hi:'अभी बुक करें' },
  'nav-my-bookings':     { en:'My Bookings',     hi:'मेरी बुकिंग' },
  'nav-become-provider': { en:'Earn with Us',    hi:'हमारे साथ कमाएं' },
  'mobile-equipment':    { en:'Equipment Rental',hi:'उपकरण किराया' },
  'mobile-labour':       { en:'Labour Booking',  hi:'मजदूर बुकिंग' },
  'mobile-experts':      { en:'Expert Consult',  hi:'विशेषज्ञ परामर्श' },
  'mobile-disease':      { en:'Disease AI',      hi:'रोग AI' },
  'mobile-weather':      { en:'Weather',         hi:'मौसम' },
  'mobile-group':        { en:'Group Booking',   hi:'समूह बुकिंग' },
  'mobile-bookings':     { en:'My Bookings',     hi:'मेरी बुकिंग' },
  'mobile-provider':     { en:'Earn with Us',    hi:'हमारे साथ कमाएं' },

  // Hero
  'hero-subtitle':  { en:"India's first on-demand platform for farmers — rent equipment, book skilled workers, consult experts, and detect crop diseases with AI. No middlemen. Fair prices.", hi:'भारत का पहला किसान प्लेटफॉर्म — उपकरण किराए पर लें, मजदूर बुक करें, विशेषज्ञों से सलाह लें और AI से रोग पहचानें। कोई बिचौलिया नहीं। उचित दाम।' },
  'hero-cta-1':     { en:'🚜 Book a Service',     hi:'🚜 सेवा बुक करें' },
  'hero-cta-2':     { en:'🔬 Detect Disease',     hi:'🔬 रोग पहचानें' },
  'hero-voice':     { en:'🎙 Voice: Hindi, Gujarati, Marathi', hi:'🎙 आवाज: हिंदी, गुजराती, मराठी' },
  'hero-offline':   { en:'📵 Works Offline',      hi:'📵 ऑफलाइन काम करता है' },

  // Stats
  'stat-farmers':      { en:'Farmers Served',    hi:'किसान सेवित' },
  'stat-providers':    { en:'Service Providers', hi:'सेवा प्रदाता' },
  'stat-states':       { en:'States Covered',    hi:'राज्य शामिल' },
  'stat-satisfaction': { en:'% Satisfaction',    hi:'% संतुष्टि' },

  // Services section
  'services-label': { en:'What We Offer',    hi:'हम क्या देते हैं' },
  'services-title': { en:'All Services at One Place', hi:'सभी सेवाएं एक जगह' },
  'services-desc':  { en:'Everything a farmer needs — from equipment to experts — available on-demand, right from your phone.', hi:'किसान की हर जरूरत — उपकरण से विशेषज्ञ तक — आपके फोन से तुरंत उपलब्ध।' },

  // How it works
  'how-label': { en:'Simple Process',  hi:'सरल प्रक्रिया' },
  'how-title': { en:'How Does It Work?', hi:'कैसे काम करता है?' },
  'how-desc':  { en:'Book any service in under 2 minutes — even with basic internet or SMS.', hi:'2 मिनट में कोई भी सेवा बुक करें — SMS से भी।' },

  // Why FarmSeva
  'why-label':    { en:'Why Us',                     hi:'हम क्यों?' },
  'why-title':    { en:'Victory for Poor Farmers',   hi:'गरीब किसान की जीत' },

  // Testimonials
  'testi-label': { en:'Farmer Stories', hi:'किसानों की बात' },
  'testi-title': { en:"What Farmers Say", hi:'किसानों की राय' },

  // CTA
  'cta-title': { en:'Ready to transform your farm?', hi:'अपना खेत बदलने के लिए तैयार हैं?' },
  'cta-desc':  { en:'Join 5,200+ farmers already using FarmSeva. Book your first service today.', hi:'5,200+ किसान पहले से FarmSeva का उपयोग कर रहे हैं।' },
  'cta-btn1':  { en:'🚜 Book Equipment Now',     hi:'🚜 उपकरण अभी बुक करें' },
  'cta-btn2':  { en:'🔬 Try Disease AI Free',    hi:'🔬 रोग AI मुफ्त आज़माएं' },

  // Equipment page
  'equip-title': { en:'Equipment Rental', hi:'उपकरण किराया' },
  'equip-desc':  { en:'Rent top-quality farm machinery by the day. No deposit. Cash payment accepted.', hi:'उच्च गुणवत्ता की कृषि मशीनरी दिन के हिसाब से किराए पर लें। कोई जमानत नहीं। नकद भुगतान स्वीकार।' },
  'book-now-btn':       { en:'Book Now',           hi:'बुक करें' },
  'confirm-booking-btn':{ en:'✅ Confirm Booking', hi:'✅ बुकिंग पक्की करें' },
  'available-today':    { en:'✓ Available Today',  hi:'✓ आज उपलब्ध' },
  'from-tomorrow':      { en:'⏳ From Tomorrow',   hi:'⏳ कल से' },
  'no-advance-pay':     { en:'No advance payment needed. Pay on arrival.', hi:'कोई अग्रिम भुगतान नहीं। आने पर भुगतान करें।' },
  'filter-title':       { en:'🔍 Filters',         hi:'🔍 फ़िल्टर' },
  'clear-all':          { en:'Clear all',           hi:'सब साफ' },
  'location-label':     { en:'📍 Location',         hi:'📍 स्थान' },
  'category-label':     { en:'🗂 Category',          hi:'🗂 श्रेणी' },
  'price-label':        { en:'💰 Max Price/Day',     hi:'💰 अधिकतम मूल्य/दिन' },
  'avail-label':        { en:'📅 Availability',      hi:'📅 उपलब्धता' },

  // Labour page
  'labour-title': { en:'Skilled Labour Booking', hi:'कुशल मजदूर बुकिंग' },
  'labour-desc':  { en:'Book verified, background-checked daily workers. Fair wages. No middlemen.', hi:'सत्यापित दैनिक मजदूर बुक करें। उचित वेतन। बिचौलिए नहीं।' },
  'all-workers':  { en:'All Workers',  hi:'सभी मजदूर' },

  // Consultation page
  'consult-title':  { en:'Expert Consultation', hi:'विशेषज्ञ परामर्श' },
  'consult-desc':   { en:'Connect with certified agricultural experts. First session free!', hi:'प्रमाणित कृषि विशेषज्ञों से जुड़ें। पहला सत्र मुफ्त!' },
  'first-free':     { en:'First session FREE', hi:'पहला सत्र मुफ्त' },
  'book-call':      { en:'Book Call',           hi:'कॉल बुक करें' },
  'schedule-btn':   { en:'✅ Schedule Consultation', hi:'✅ परामर्श शेड्यूल करें' },

  // Disease page
  'disease-title':  { en:'AI Disease Detection', hi:'AI रोग पहचान' },
  'disease-desc':   { en:'Upload a photo of your sick crop. Our AI identifies the disease instantly.', hi:'बीमार फसल की फोटो अपलोड करें। AI तुरंत रोग पहचानेगा।' },
  'upload-label':   { en:'📸 Upload Crop Photo',  hi:'📸 फसल की फोटो अपलोड करें' },
  'drop-photo':     { en:'Drop photo here or click to upload', hi:'यहाँ फोटो डालें या क्लिक करें' },
  'choose-photo':   { en:'Choose Photo',           hi:'फोटो चुनें' },
  'crop-type-label':{ en:'🌾 Select Crop Type',    hi:'🌾 फसल का प्रकार चुनें' },
  'analyze-btn':    { en:'Analyze with AI',         hi:'AI से जांच करें' },
  'try-sample':     { en:'Try with sample images:', hi:'नमूना छवियों से आज़माएं:' },
  'treatment-label':{ en:'💊 Recommended Treatment', hi:'💊 अनुशंसित उपचार' },
  'prevention-label':{ en:'🛡 Prevention for Next Season', hi:'🛡 अगले सीज़न के लिए बचाव' },
  'talk-expert':    { en:'Talk to Crop Expert (Free)', hi:'फसल विशेषज्ञ से बात करें (मुफ्त)' },
  'analyze-another':{ en:'🔄 Analyze Another Photo', hi:'🔄 दूसरी फोटो जांचें' },
  'ai-ready':       { en:'AI Ready',                hi:'AI तैयार' },
  'ai-analyzing':   { en:'Analyzing your crop...', hi:'आपकी फसल का विश्लेषण हो रहा है...' },
  'confidence-label':{ en:'Confidence',             hi:'विश्वास' },

  // Weather page
  'weather-title':   { en:'Weather & Crop Advisory', hi:'मौसम और फसल सलाह' },
  'weather-desc':    { en:'Real-time weather + AI-powered crop recommendations for your farm.', hi:'आपके खेत के लिए वास्तविक समय का मौसम और AI सिफारिशें।' },
  'your-location':   { en:'📍 Your Location:',       hi:'📍 आपका स्थान:' },
  'update-btn':      { en:'Update',                  hi:'अपडेट' },
  'forecast-title':  { en:'📅 7-Day Forecast',       hi:'📅 7 दिन का पूर्वानुमान' },
  'cal-title':       { en:'🗓 Crop Activity Calendar',hi:'🗓 फसल गतिविधि कैलेंडर' },
  'farm-advisory':   { en:"Today's Farming Advisory", hi:'आज की खेती सलाह' },
  'crop-impact':     { en:'Weather Impact on Your Crops', hi:'आपकी फसलों पर मौसम का प्रभाव' },

  // Group Booking page
  'group-title':    { en:'Group Booking',       hi:'समूह बुकिंग' },
  'group-desc':     { en:'Join other farmers, share equipment cost, and everyone saves together!', hi:'अन्य किसानों के साथ जुड़ें, उपकरण की लागत साझा करें!' },
  'active-groups':  { en:'🔥 Active Groups Near You', hi:'🔥 आपके पास सक्रिय समूह' },
  'create-group-title':{ en:'➕ Start a New Group', hi:'➕ नया समूह शुरू करें' },
  'join-group-btn': { en:'Join Group',           hi:'समूह में जुड़ें' },
  'confirm-join':   { en:'✅ Confirm & Join Group', hi:'✅ पक्की करें और जुड़ें' },
  'create-now-btn': { en:'🤝 Create Group Now',  hi:'🤝 अभी समूह बनाएं' },
  'spots-left':     { en:'Spots Left',           hi:'जगह बची' },
  'full-badge':     { en:'Full',                 hi:'भरा हुआ' },
  'savings-label':  { en:'💰 Estimated Savings Per Person', hi:'💰 प्रति व्यक्ति अनुमानित बचत' },

  // Provider page
  'provider-badge':    { en:'340+ Providers Already Earning', hi:'340+ प्रदाता पहले से कमा रहे हैं' },
  'provider-hero-line1':{ en:'List Your Equipment', hi:'अपना उपकरण लिस्ट करें' },
  'provider-hero-line2':{ en:'& Start Earning Today', hi:'और आज से कमाएं' },
  'provider-hero-desc':{ en:'Turn your idle tractor, tools, or skills into a steady income. Join FarmSeva as a provider and start earning from day 1.', hi:'अपना खाली ट्रैक्टर, औजार या कौशल से नियमित आय करें। FarmSeva प्रदाता बनें और पहले दिन से कमाएं।' },
  'step1-title':    { en:'What will you offer?',   hi:'आप क्या प्रदान करेंगे?' },
  'step1-desc':     { en:'Select all that apply. You can add more later.', hi:'सभी लागू विकल्प चुनें। बाद में और जोड़ सकते हैं।' },
  'step2-title':    { en:'Create your account',    hi:'अपना खाता बनाएं' },
  'step2-desc':     { en:"Choose how you'd like to sign up", hi:'साइन अप का तरीका चुनें' },
  'google-signup':  { en:'Continue with Google',   hi:'Google से जारी रखें' },
  'or-divider':     { en:'or',                      hi:'या' },
  'mobile-label':   { en:'Mobile Number',           hi:'मोबाइल नंबर' },
  'send-otp-btn':   { en:'Send OTP via SMS',        hi:'SMS से OTP भेजें' },
  'otp-title':      { en:'Enter OTP',               hi:'OTP दर्ज करें' },
  'verify-btn':     { en:'Verify OTP',              hi:'OTP सत्यापित करें' },
  'no-otp':         { en:"Didn't receive? ",        hi:'नहीं मिला? ' },
  'resend-otp':     { en:'Resend OTP',              hi:'OTP फिर भेजें' },
  'step4-title':    { en:'Complete your profile',   hi:'अपनी प्रोफ़ाइल पूरी करें' },
  'step4-desc':     { en:'This helps farmers find and trust you.', hi:'यह किसानों को आपको खोजने और भरोसा करने में मदद करता है।' },
  'name-label':     { en:'Full Name',               hi:'पूरा नाम' },
  'village-label':  { en:'Village / City',          hi:'गांव / शहर' },
  'experience-label':{ en:'Years of Experience',    hi:'अनुभव के वर्ष' },
  'lang-label':     { en:'Languages Spoken',        hi:'बोली जाने वाली भाषाएं' },
  'aadhar-label':   { en:'Aadhaar / ID Number (Optional)', hi:'आधार / ID नंबर (वैकल्पिक)' },
  'submit-profile-btn':{ en:'🎉 Start Earning!',   hi:'🎉 कमाना शुरू करें!' },
  'success-title':  { en:'Welcome to FarmSeva!',    hi:'FarmSeva में आपका स्वागत है!' },
  'success-desc':   { en:"Your provider profile is under review. We'll activate it within 24 hours.", hi:'आपकी प्रदाता प्रोफ़ाइल समीक्षाधीन है। हम इसे 24 घंटे में सक्रिय करेंगे।' },
  'go-home-btn':    { en:'Go to Home',              hi:'होम पर जाएं' },
  'next-btn':       { en:'Continue →',              hi:'आगे बढ़ें →' },
  'back-btn':       { en:'← Back',                  hi:'← वापस' },
  'benefits-label': { en:'Why Join Us',             hi:'हमसे क्यों जुड़ें' },
  'benefits-title': { en:'Benefits of Becoming a Provider', hi:'प्रदाता बनने के फायदे' },

  // My Bookings page
  'page-my-bookings':      { en:'My Bookings',              hi:'मेरी बुकिंग' },
  'page-my-bookings-desc': { en:'Track all your service bookings and orders in one place.', hi:'अपनी सभी बुकिंग और ऑर्डर एक जगह ट्रैक करें।' },
  'active-label':          { en:'Active',                   hi:'सक्रिय' },
  'cart-label':            { en:'In Cart',                  hi:'कार्ट में' },
  'completed-label':       { en:'Completed',                hi:'पूरे हुए' },
  'cart-section-title':    { en:'Cart — Pending Confirmation', hi:'कार्ट — पुष्टि बाकी' },
  'pay-on-arrival':        { en:'Cash on arrival',          hi:'आने पर नकद' },
  'remove-btn':            { en:'Remove',                   hi:'हटाएं' },
  'confirm-btn':           { en:'Confirm Booking',          hi:'बुकिंग पक्की करें' },
  'empty-cart':            { en:'Your cart is empty',       hi:'कार्ट खाली है' },
  'browse-services':       { en:'Browse Services →',        hi:'सेवाएं देखें →' },
  'active-section-title':  { en:'Active Bookings',          hi:'सक्रिय बुकिंग' },
  'past-section-title':    { en:'Past Bookings',            hi:'पिछली बुकिंग' },
  'status-on-way':         { en:'🚗 On the Way',            hi:'🚗 रास्ते में' },
  'status-confirmed':      { en:'✅ Confirmed',             hi:'✅ पुष्टि हुई' },
  'status-completed':      { en:'✅ Completed',             hi:'✅ पूरा हुआ' },
  'track-booked':          { en:'Booked',                   hi:'बुक किया' },
  'track-confirmed':       { en:'Confirmed',                hi:'पुष्टि' },
  'track-on-way':          { en:'On the Way',               hi:'रास्ते में' },
  'track-arrived':         { en:'Arrived',                  hi:'पहुंचा' },
  'track-done':            { en:'Done',                     hi:'पूरा' },
  'provider-on-way':       { en:'🚗 Provider is on the way to your farm!', hi:'🚗 प्रदाता आपके खेत की ओर रास्ते में है!' },
  'eta-label':             { en:'ETA:',                     hi:'अनुमानित समय:' },
  'contact-provider':      { en:'Contact',                  hi:'संपर्क' },
  'track-live':            { en:'Track Live',               hi:'लाइव ट्रैक करें' },
  'live-map-coming':       { en:'Live map coming soon',     hi:'लाइव मैप जल्द आ रहा है' },
  'cancel-booking':        { en:'Cancel Booking',           hi:'बुकिंग रद्द करें' },
  'confirmed-arrival-msg': { en:'Kailash Patel will arrive at your farm on April 12 at 7:00 AM.', hi:'कैलाश पटेल 12 अप्रैल को सुबह 7:00 बजे आपके खेत पर पहुंचेंगे।' },
  'contact-worker':        { en:'Contact Worker',           hi:'मजदूर से संपर्क' },
  'completed-badge':       { en:'Completed',                hi:'पूरा हुआ' },
  'rate-btn':              { en:'Rate Service',             hi:'रेटिंग दें' },
  'book-again-btn':        { en:'Book Again',               hi:'फिर बुक करें' },
  'no-bookings':           { en:'No bookings yet',          hi:'अभी तक कोई बुकिंग नहीं' },
  'no-bookings-desc':      { en:'Book your first service and it will appear here.', hi:'अपनी पहली सेवा बुक करें, यह यहां दिखेगी।' },
  'browse-now':            { en:'Browse Services Now',      hi:'अभी सेवाएं देखें' },
  'provider-stories-title':{ en:'Stories from our Providers', hi:'हमारे प्रदाताओं की कहानियां' },

  // Footer
  'footer-services': { en:'Our Services',       hi:'हमारी सेवाएं' },
  'footer-support':  { en:'Support',            hi:'सहायता' },
  'footer-contact':  { en:'Contact & Languages',hi:'संपर्क और भाषाएं' },
  'footer-tollfree': { en:'Toll-Free • 24/7',   hi:'टोल-फ्री • 24/7' },
};

// ─── LANGUAGE ENGINE ─────────────────────────────────
let currentLang = localStorage.getItem('farmseva_lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('farmseva_lang', lang);

  // Translate all [data-translate] elements
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (T[key] && T[key][lang]) el.textContent = T[key][lang];
  });

  // Translate button text nodes that use data-translate-attr (buttons with onclick)
  document.querySelectorAll('[data-translate-attr]').forEach(el => {
    const key = el.getAttribute('data-translate-attr');
    if (T[key] && T[key][lang]) el.textContent = T[key][lang];
  });

  // Update html lang attribute
  document.getElementById('html-root') && (document.getElementById('html-root').lang = lang === 'hi' ? 'hi' : 'en');

  // Update desktop toggle button label
  const flag = document.getElementById('lang-flag');
  const text = document.getElementById('lang-text');
  if (flag && text) {
    flag.textContent = '🇮🇳';
    text.textContent = lang === 'hi' ? 'EN' : 'हिंदी';
  }

  // Sync mobile app-bar language button
  const mTopFlag = document.getElementById('mobile-top-lang-flag');
  const mTopText = document.getElementById('mobile-top-lang-text');
  if (mTopFlag && mTopText) {
    mTopFlag.textContent = '🇮🇳';
    mTopText.textContent = lang === 'hi' ? 'EN' : 'हिंदी';
  }
}

// ─── CART SYSTEM ─────────────────────────────────────
function getCart() {
  try { return JSON.parse(localStorage.getItem('farmseva_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('farmseva_cart', JSON.stringify(cart));
  renderCartBadge();
}
function renderCartBadge() {
  const count = getCart().length;
  ['cart-badge', 'mobile-top-cart-badge', 'bottom-tab-cart-badge'].forEach(id => {
    const badge = document.getElementById(id);
    if (!badge) return;
    badge.textContent = count;
    if (count > 0) { badge.classList.remove('hidden'); badge.classList.add('flex'); }
    else           { badge.classList.add('hidden');    badge.classList.remove('flex'); }
  });
}

// Called from booking modals on confirm
function addToCartAndConfirm(name, price, icon) {
  const cart = getCart();
  cart.push({ name, price: parseInt(price), icon: icon || '🚜', date: new Date().toISOString(), id: Date.now() });
  saveCart(cart);
  showToast(
    currentLang === 'hi' ? 'बुकिंग पक्की हुई! 🎉' : 'Booking Confirmed! 🎉',
    currentLang === 'hi' ? 'मेरी बुकिंग में देखें।' : 'View it in My Bookings.',
    '✅'
  );
}

// ─── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  applyLanguage(currentLang);

  // Wire all language toggles: desktop, mobile dropdown header, mobile app top bar
  ['lang-toggle', 'mobile-lang-toggle', 'mobile-top-lang-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    // Replace to remove any old listeners
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener('click', () => applyLanguage(currentLang === 'en' ? 'hi' : 'en'));
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu    = document.getElementById('mobile-menu');
  const menuIcon      = document.getElementById('menu-icon');
  const closeIcon     = document.getElementById('close-icon');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }

  // Cart badge on load
  renderCartBadge();

  // Highlight the correct mobile bottom nav tab based on current URL
  const currentPath = window.location.pathname;
  document.querySelectorAll('[data-nav-path]').forEach(link => {
    const navPath = link.getAttribute('data-nav-path');
    const matches = navPath === '/' ? currentPath === '/' : currentPath.startsWith(navPath);
    if (matches) link.classList.add('active-bottom-tab');
  });

  // Navbar shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('shadow-lg', window.scrollY > 8);
  });
});

// ─── TOAST ───────────────────────────────────────────
function showToast(title, msg, icon) {
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-msg').textContent   = msg;
  document.getElementById('toast-icon').textContent  = icon || '✅';
  t.classList.remove('translate-y-20','opacity-0');
  t.classList.add('translate-y-0','opacity-100');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(hideToast, 4000);
}
function hideToast() {
  const t = document.getElementById('toast');
  if (!t) return;
  t.classList.add('translate-y-20','opacity-0');
  t.classList.remove('translate-y-0','opacity-100');
}
