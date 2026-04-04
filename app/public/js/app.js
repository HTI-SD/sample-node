// ===== FarmSeva Global App JS =====

// ===== HINDI / ENGLISH LANGUAGE SYSTEM =====
const translations = {
  // Navigation
  'nav-equipment': { en: '🚜 Equipment', hi: '🚜 उपकरण' },
  'nav-labour': { en: '👨‍🌾 Labour', hi: '👨‍🌾 मजदूर' },
  'nav-experts': { en: '👨‍💼 Experts', hi: '👨‍💼 विशेषज्ञ' },
  'nav-disease': { en: '🔬 Disease AI', hi: '🔬 रोग AI' },
  'nav-weather': { en: '🌤 Weather', hi: '🌤 मौसम' },
  'nav-group': { en: '👥 Group', hi: '👥 समूह' },
  'nav-book-now': { en: 'Book Now', hi: 'अभी बुक करें' },

  // Landing page hero
  'hero-tagline': { en: 'Farming Made Easy', hi: 'खेती को आसान बनाएं' },
  'hero-subtitle': { en: "India's first on-demand platform for farmers — rent equipment, book workers, consult experts, and detect diseases with AI.", hi: 'भारत का पहला किसान प्लेटफॉर्म — उपकरण किराए पर लें, मजदूर बुक करें, विशेषज्ञों से सलाह लें।' },
  'hero-cta-1': { en: '🚜 Book a Service', hi: '🚜 सेवा बुक करें' },
  'hero-cta-2': { en: '🔬 Detect Disease', hi: '🔬 रोग पहचानें' },
  'hero-voice': { en: '🎙 Voice Support: Hindi, Gujarati, Marathi', hi: '🎙 आवाज समर्थन: हिंदी, गुजराती, मराठी' },
  'hero-offline': { en: '📵 Works Offline', hi: '📵 ऑफलाइन काम करता है' },

  // Stats
  'stat-farmers': { en: 'Farmers Served', hi: 'किसान सेवित' },
  'stat-providers': { en: 'Service Providers', hi: 'सेवा प्रदाता' },
  'stat-states': { en: 'States Covered', hi: 'राज्य शामिल' },
  'stat-satisfaction': { en: '% Satisfaction', hi: '% संतुष्टि' },

  // Services section
  'services-label': { en: 'What We Offer', hi: 'हम क्या देते हैं' },
  'services-title': { en: 'All Services at One Place', hi: 'सभी सेवाएं एक जगह' },
  'services-desc': { en: 'Everything a farmer needs — available on-demand, right from your phone.', hi: 'किसान की हर जरूरत — आपके फोन से, तुरंत उपलब्ध।' },

  // Service card titles
  'service-equipment-title': { en: 'Equipment Rental', hi: 'उपकरण किराया' },
  'service-equipment-desc': { en: 'Rent tractors, harvesters, drones, and small tools by the day. No ownership needed.', hi: 'ट्रैक्टर, हार्वेस्टर, ड्रोन दिन के हिसाब से किराए पर लें। खरीदने की जरूरत नहीं।' },
  'service-labour-title': { en: 'Skilled Labour', hi: 'कुशल मजदूर' },
  'service-labour-desc': { en: 'Book verified daily workers for sowing, harvesting, irrigation setup and more.', hi: 'बुवाई, कटाई, सिंचाई के लिए सत्यापित दैनिक मजदूर बुक करें।' },
  'service-consult-title': { en: 'Expert Consultation', hi: 'विशेषज्ञ सलाह' },
  'service-consult-desc': { en: 'Get advice from soil scientists, crop experts, and organic farming specialists.', hi: 'मिट्टी वैज्ञानिकों, फसल विशेषज्ञों से सलाह पाएं।' },
  'service-disease-title': { en: 'Disease Detection', hi: 'रोग पहचान' },
  'service-disease-desc': { en: 'Upload a photo of your crop and get instant AI disease diagnosis + treatment plan.', hi: 'फसल की फोटो अपलोड करें, AI तुरंत रोग पहचानेगा।' },
  'service-repair-title': { en: 'Repair & Maintenance', hi: 'मरम्मत और रखरखाव' },
  'service-repair-desc': { en: 'Emergency repair for pumps, tractors, drip irrigation. Fast response.', hi: 'पंप, ट्रैक्टर, ड्रिप की आपातकालीन मरम्मत। तेज प्रतिक्रिया।' },
  'service-group-title': { en: 'Group Booking', hi: 'समूह बुकिंग' },
  'service-group-desc': { en: 'Join 4 other farmers to share one tractor. Split costs. Everyone saves more.', hi: '4 अन्य किसानों के साथ मिलकर ट्रैक्टर साझा करें। सबकी बचत।' },

  // How it works
  'how-label': { en: 'Simple Process', hi: 'सरल प्रक्रिया' },
  'how-title': { en: 'How Does It Work?', hi: 'कैसे काम करता है?' },
  'how-desc': { en: 'Book any service in under 2 minutes — even with basic internet or SMS.', hi: '2 मिनट में कोई भी सेवा बुक करें — SMS से भी।' },
  'how-step1': { en: 'Choose Service', hi: 'सेवा चुनें' },
  'how-step2': { en: 'Pick Date & Time', hi: 'तारीख और समय चुनें' },
  'how-step3': { en: 'Pay Your Way', hi: 'अपनी तरह से भुगतान करें' },
  'how-step4': { en: 'Service at Farm', hi: 'खेत पर सेवा' },

  // Why Farmseva
  'why-label': { en: 'Why Us', hi: 'हम क्यों?' },
  'why-title': { en: 'Victory for Poor Farmers', hi: 'गरीब किसान की जीत' },
  'why-no-invest': { en: 'No Big Investment', hi: 'बड़ा निवेश नहीं' },
  'why-save-time': { en: 'Save Hours Daily', hi: 'रोज घंटे बचाएं' },
  'why-fair': { en: 'Fair & Transparent', hi: 'उचित और पारदर्शी' },
  'why-harvest': { en: 'Better Harvest', hi: 'बेहतर फसल' },

  // Testimonials
  'testi-label': { en: 'Farmer Stories', hi: 'किसानों की बात' },
  'testi-title': { en: "What Farmers Say", hi: 'किसानों की राय' },

  // CTA
  'cta-title': { en: 'Ready to transform your farm?', hi: 'अपना खेत बदलने के लिए तैयार हैं?' },
  'cta-desc': { en: 'Join 5,200+ farmers already using FarmSeva. Book your first service today.', hi: '5,200+ किसान पहले से FarmSeva का उपयोग कर रहे हैं।' },
  'cta-btn1': { en: '🚜 Book Equipment Now', hi: '🚜 उपकरण अभी बुक करें' },
  'cta-btn2': { en: '🔬 Try Disease AI Free', hi: '🔬 रोग AI मुफ्त आज़माएं' },

  // Footer
  'footer-brand-desc': { en: '"Digital companion for every farmer"', hi: '"हर किसान के लिए डिजिटल साथी"' },
  'footer-services': { en: 'Our Services', hi: 'हमारी सेवाएं' },
  'footer-support': { en: 'Support', hi: 'सहायता' },
  'footer-contact': { en: 'Contact & Languages', hi: 'संपर्क और भाषाएं' },
  'footer-tollfree': { en: 'Toll-Free • 24/7', hi: 'टोल-फ्री • 24/7' },

  // Equipment page
  'equip-title': { en: '🚜 Equipment Rental', hi: '🚜 उपकरण किराया' },
  'equip-desc': { en: 'Rent top-quality farm machinery by the day. No deposit. Cash payment accepted.', hi: 'उच्च गुणवत्ता की कृषि मशीनरी दिन के हिसाब से किराए पर लें।' },
  'filter-location-label': { en: '📍 Location', hi: '📍 स्थान' },
  'filter-category-label': { en: '🗂 Category', hi: '🗂 श्रेणी' },
  'filter-price-label': { en: '💰 Max Price/Day', hi: '💰 अधिकतम मूल्य/दिन' },
  'book-btn-text': { en: 'Book Now', hi: 'बुक करें' },
  'available-today': { en: '✓ Available Today', hi: '✓ आज उपलब्ध' },
  'confirm-booking': { en: '✅ Confirm Booking', hi: '✅ बुकिंग पक्की करें' },
  'no-advance': { en: 'No advance payment needed. Pay on arrival.', hi: 'कोई अग्रिम भुगतान नहीं। आने पर भुगतान करें।' },

  // Labour page
  'labour-title': { en: '👨‍🌾 Skilled Labour Booking', hi: '👨‍🌾 कुशल मजदूर बुकिंग' },
  'labour-desc': { en: 'Book verified, background-checked daily workers. Fair wages. No middlemen.', hi: 'सत्यापित दैनिक मजदूर बुक करें। उचित वेतन। बिचौलिए नहीं।' },
  'all-workers': { en: 'All Workers', hi: 'सभी मजदूर' },

  // Consultation page
  'consult-title': { en: '👨‍💼 Expert Consultation', hi: '👨‍💼 विशेषज्ञ परामर्श' },
  'consult-desc': { en: 'Connect with certified agricultural experts. First session free!', hi: 'प्रमाणित कृषि विशेषज्ञों से जुड़ें। पहला सत्र मुफ्त!' },
  'first-free': { en: 'First session FREE', hi: 'पहला सत्र मुफ्त' },
  'book-call': { en: 'Book Call', hi: 'कॉल बुक करें' },

  // Disease page
  'disease-title': { en: '🔬 AI Disease Detection', hi: '🔬 AI रोग पहचान' },
  'disease-desc': { en: 'Upload a photo of your sick crop. Our AI identifies the disease instantly.', hi: 'बीमार फसल की फोटो अपलोड करें। AI तुरंत रोग पहचानेगा।' },
  'upload-label': { en: '📸 Upload Crop Photo', hi: '📸 फसल की फोटो अपलोड करें' },
  'analyze-btn': { en: 'Analyze with AI', hi: 'AI से जांच करें' },
  'try-sample': { en: 'Try with sample images:', hi: 'नमूना छवियों से आज़माएं:' },

  // Weather page
  'weather-title': { en: '🌤 Weather & Crop Advisory', hi: '🌤 मौसम और फसल सलाह' },
  'weather-desc': { en: 'Real-time weather + AI-powered crop recommendations for your farm.', hi: 'आपके खेत के लिए वास्तविक समय का मौसम और AI सिफारिशें।' },
  'forecast-title': { en: '📅 7-Day Forecast', hi: '📅 7 दिन का पूर्वानुमान' },
  'crop-calendar-title': { en: '🗓 Crop Activity Calendar', hi: '🗓 फसल गतिविधि कैलेंडर' },

  // Group booking page
  'group-title': { en: '👥 Group Booking', hi: '👥 समूह बुकिंग' },
  'group-desc': { en: 'Join other farmers, share equipment cost, and everyone saves together!', hi: 'अन्य किसानों के साथ जुड़ें, उपकरण की लागत साझा करें!' },
  'active-groups': { en: '🔥 Active Groups Near You', hi: '🔥 आपके पास सक्रिय समूह' },
  'create-group-title': { en: '➕ Start a New Group', hi: '➕ नया समूह शुरू करें' },
  'join-group-btn': { en: 'Join Group', hi: 'समूह में जुड़ें' },
  'confirm-join': { en: '✅ Confirm & Join Group', hi: '✅ पक्की करें और समूह में जुड़ें' },
};

let currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // Update page title hint
  const langFlag = document.getElementById('lang-flag');
  const langText = document.getElementById('lang-text');
  if (langFlag && langText) {
    if (lang === 'hi') {
      langFlag.textContent = '🇮🇳';
      langText.textContent = 'EN';
    } else {
      langFlag.textContent = '🇮🇳';
      langText.textContent = 'हिंदी';
    }
  }
}

// Override the language toggle from footer.ejs
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    // Remove old listener and add new one
    const newBtn = langToggle.cloneNode(true);
    langToggle.parentNode.replaceChild(newBtn, langToggle);
    newBtn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'hi' : 'en';
      switchLanguage(newLang);
    });
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled-nav');
  } else {
    navbar.classList.remove('scrolled-nav');
  }
});

// ===== HIGHLIGHT ACTIVE NAV LINK =====
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('nav-active');
  }
});

console.log('🌱 FarmSeva app.js loaded. Language: ' + currentLang);
