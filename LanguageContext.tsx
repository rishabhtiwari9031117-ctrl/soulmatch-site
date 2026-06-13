import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Header & Navigation
    'nav.home': 'Home',
    'nav.search': 'Match Finder',
    'nav.dashboard': 'Dashboard',
    'nav.chat': 'Messages',
    'nav.howItWorks': 'How SoulMatch Works',
    'nav.about': 'About Us',
    'nav.stories': 'Success Stories',
    'nav.pricing': 'Pricing Plans',
    'nav.contact': 'Contact Us',
    'nav.hotline': 'Hotline',
    'nav.login': 'Login',
    'nav.register': 'Register Free',
    'nav.logout': 'Logout',
    'nav.yourAccount': 'Your Account',
    'nav.platinumPlan': 'Platinum Plan',
    'nav.supportHelpline': 'Support Helpline',
    'nav.verifyIdentity': 'Verify Identity',
    'nav.directContact': 'Direct Contact',
    'nav.supportTitle': 'SoulMatch Support',
    'nav.call': 'Call',
    'nav.whatsapp': 'WhatsApp',
    
    // Global Preloader
    'loader.branding': 'Astro-AI Matrimonial Network',
    'loader.aadhaar': 'Aadhaar Secured',
    'loader.antiscam': 'Anti-Scam Safe',
    'loader.computing': 'Computing astrologic matchmaking locks...',

    // Hero Section
    'hero.badge': '★ Royal Matchmaking For High-Standard Indian Families',
    'hero.title1': 'Legacy Matrimony',
    'hero.title2': 'For Elite Families',
    'hero.subtitle': 'Bypassing brokers cleanly. Direct, verified, class-aligned matches for conscious traditional values with modern perspectives.',
    'hero.formTitle': 'Quick Registration',
    'hero.formLooking': 'I am looking for a',
    'hero.formMale': 'Male',
    'hero.formFemale': 'Female',
    'hero.formAge': 'Age Range',
    'hero.formReligion': 'Religion',
    'hero.formCaste': 'Caste / Community',
    'hero.formMotherTongue': 'Mother Tongue',
    'hero.btnSearch': 'Search Verified Matches',
    'hero.trustAadhaar': 'Aadhaar Verified',
    'hero.trustMobile': 'Mobile Verified',
    'hero.trustScamBlock': 'AI Scam Block',
    'hero.trustEncrypted': 'E2E Encrypted',

    // Stats Section
    'stats.active': 'Active Members',
    'stats.matches': 'Matches Made',
    'stats.marriages': 'Marriages',
    'stats.verified': 'Verified Profiles',

    // AI Calculator Section
    'ai.title': 'Simulate AI Compatibility Percentage',
    'ai.subtitle': 'Traditional Kundali meets Modern Astro-AI compatibility check',
    'ai.malePlaceholder': 'Male Name (e.g. Rahul Sharma)',
    'ai.femalePlaceholder': 'Female Name (e.g. Priya Iyer)',
    'ai.casteMismatch': 'Allow Caste Mismatch',
    'ai.horoscopeMismatch': 'Ignore Guna (Nadi/Bhakoot) DOSHA warnings',
    'ai.runScan': 'Launch Compatibility Radar Scan',
    'ai.scanning': 'Scanning astral data matches...',

    // Pricing Section
    'pricing.title': 'Elite Membership Subscriptions',
    'pricing.subtitle': 'Invest in a lifetime of alignment. Safe database, full control, absolute safety.',
    'pricing.lifetime': 'Lifetime Premium Access',
    'pricing.silver': 'Silver Registry',
    'pricing.gold': 'Royal Gold',
    'pricing.platinum': 'Emperor Platinum',
  },
  hi: {
    // Header & Navigation
    'nav.home': 'होम',
    'nav.search': 'मैच खोजें',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.chat': 'संदेश',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.about': 'हमारे बारे में',
    'nav.stories': 'सफलता की कहानियां',
    'nav.pricing': 'सदस्यता योजनाएं',
    'nav.contact': 'संपर्क करें',
    'nav.hotline': 'हेल्पलाइन',
    'nav.login': 'लॉगिन',
    'nav.register': 'निःशुल्क पंजीकरण',
    'nav.logout': 'लॉगआउट',
    'nav.yourAccount': 'आपका खाता',
    'nav.platinumPlan': 'प्लैटिनम सदस्यता',
    'nav.supportHelpline': 'सहायता हेल्पलाइन',
    'nav.verifyIdentity': 'पहचान सत्यापित करें',
    'nav.directContact': 'सीधा संपर्क',
    'nav.supportTitle': 'सोलमैच सहायता',
    'nav.call': 'कॉल करें',
    'nav.whatsapp': 'व्हाट्सएप',
    
    // Global Preloader
    'loader.branding': 'एस्ट्रो-एआई वैवाहिक नेटवर्क',
    'loader.aadhaar': 'आधार सुरक्षित',
    'loader.antiscam': 'धोखाधड़ी निषेध',
    'loader.computing': 'ज्योतिषीय कुंडली मिलान की गणना की जा रही है...',

    // Hero Section
    'hero.badge': '★ उच्च स्तरीय भारतीय परिवारों के लिए शाही मिलान सेवा',
    'hero.title1': 'प्रतिष्ठित विवाह सेवा',
    'hero.title2': 'कुलीन परिवारों के लिए',
    'hero.subtitle': 'दलालों को पूरी तरह से बायपास करें। जागरूक पारंपरिक मूल्यों और आधुनिक दृष्टिकोणों के लिए सीधे, सत्यापित, और सामाजिक मानदंडों के अनुकूल रिश्ते।',
    'hero.formTitle': 'त्वरित पंजीकरण',
    'hero.formLooking': 'मैं तलाश कर रहा हूँ',
    'hero.formMale': 'पुरुष',
    'hero.formFemale': 'महिला',
    'hero.formAge': 'आयु सीमा',
    'hero.formReligion': 'धर्म',
    'hero.formCaste': 'जाति / समुदाय',
    'hero.formMotherTongue': 'मातृभाषा',
    'hero.btnSearch': 'सत्यापित रिश्ते खोजें',
    'hero.trustAadhaar': 'आधार सत्यापित',
    'hero.trustMobile': 'मोबाइल सत्यापित',
    'hero.trustScamBlock': 'एआई फ्रॉड ब्लॉक',
    'hero.trustEncrypted': 'पूर्ण एन्क्रिप्टेड',

    // Stats Section
    'stats.active': 'सक्रिय सदस्य',
    'stats.matches': 'सफल मिलान',
    'stats.marriages': 'शुभ विवाह',
    'stats.verified': 'सत्यापित प्रोफाइल्य',

    // AI Calculator Section
    'ai.title': 'एआई अनुकूलता प्रतिशत जांचें',
    'ai.subtitle': 'पारंपरिक कुंडली मिलान और आधुनिक एस्ट्रो-एआई अनुकूलता जांच',
    'ai.malePlaceholder': 'वर का नाम (उदा. राहुल शर्मा)',
    'ai.femalePlaceholder': 'वधू का नाम (उदा. प्रिया अय्यर)',
    'ai.casteMismatch': 'जाति बंधन मुक्त रखें',
    'ai.horoscopeMismatch': 'गुण (नाड़ी/भकूट) दोष चेतावनियों को अनदेखा करें',
    'ai.runScan': 'अनुकूलता रडार स्कैन शुरू करें',
    'ai.scanning': 'ज्योतिषीय डेटा का मिलान किया जा रहा है...',

    // Pricing Section
    'pricing.title': 'शाही सदस्यता योजनाएं',
    'pricing.subtitle': 'उम्र भर के रिश्ते में निवेश करें। सुरक्षित डेटाबेस, पूर्ण नियंत्रण, पूर्ण सुरक्षा।',
    'pricing.lifetime': 'आजीवन प्रीमियम पहुंच',
    'pricing.silver': 'सिल्वर रजिस्ट्री',
    'pricing.gold': 'रॉयल गोल्ड',
    'pricing.platinum': 'एम्परर प्लैटिनम',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to restore from localStorage if possible
    try {
      const saved = localStorage.getItem('soulmatch_lang');
      if (saved === 'en' || saved === 'hi') return saved;
    } catch (_) {}
    return 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('soulmatch_lang', lang);
    } catch (_) {}
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language][key] || TRANSLATIONS['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
