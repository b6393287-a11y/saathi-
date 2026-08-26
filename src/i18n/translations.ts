export type LanguageCode = 'hi' | 'en' | 'bho' | 'awd' | 'mr' | 'gu' | 'bn' | 'pa' | 'ta' | 'te' | 'kn' | 'ml' | 'or' | 'as' | 'ne';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', flag: '🇮🇳' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'bho', label: 'Bhojpuri', nativeLabel: 'भोजपुरी', flag: '🇮🇳' },
  { code: 'awd', label: 'Awadhi', nativeLabel: 'अवधी', flag: '🇮🇳' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: '🇮🇳' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা', flag: '🇮🇳' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'pa', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు', flag: '🇮🇳' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ml', label: 'Malayalam', nativeLabel: 'മലയാളം', flag: '🇮🇳' },
  { code: 'or', label: 'Odia', nativeLabel: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'as', label: 'Assamese', nativeLabel: 'অসমীয়া', flag: '🇮🇳' },
  { code: 'ne', label: 'Nepali', nativeLabel: 'नेपाली', flag: '🇳🇵' },
];

export interface Translation {
  nav: {
    home: string;
    ask: string;
    yojana: string;
    scan: string;
    fee: string;
    rule: string;
    whatsNew: string;
    safety: string;
  };
  home: {
    tagline: string;
    description: string;
    askButton: string;
    micLabel: string;
    selectLanguage: string;
    featuresTitle: string;
    featuresSubtitle: string;
    trustNote: string;
    heroGreeting: string;
    welcomeMessage: string;
  };
  features: {
    askSaathi: string;
    askSaathiDesc: string;
    yojana: string;
    yojanaDesc: string;
    scan: string;
    scanDesc: string;
    fee: string;
    feeDesc: string;
    rule: string;
    ruleDesc: string;
    localLang: string;
    localLangDesc: string;
    whatsNew: string;
    whatsNewDesc: string;
  };
  voice: {
    title: string;
    subtitle: string;
    tapAndSpeak: string;
    listening: string;
    thinking: string;
    speaking: string;
    typeAlternative: string;
    typePlaceholder: string;
    sendButton: string;
    permissionDenied: string;
    permissionDeniedDesc: string;
    micNotSupported: string;
    stopListening: string;
    conversationStart: string;
    trySaying: string;
    exampleQuestions: string[];
  };
  yojana: {
    title: string;
    subtitle: string;
    selectState: string;
    isFarmer: string;
    yes: string;
    no: string;
    selectAge: string;
    selectAgePlaceholder: string;
    whatHelp: string;
    findSchemes: string;
    findingSchemes: string;
    resultsFound: string;
    noResults: string;
    categories: { [key: string]: string };
    schemeName: string;
    simpleExplanation: string;
    whoCanApply: string;
    benefits: string;
    documentsRequired: string;
    deadline: string;
    officialInfo: string;
    officiallyVerified: string;
    needsVerification: string;
    doesntMatch: string;
    lastChecked: string;
    schemes: Array<{
      name: string;
      category: string;
      explanation: string;
      whoCanApply: string;
      benefits: string;
      documents: string[];
      deadline: string;
      verified: 'green' | 'yellow' | 'red';
    }>;
  };
  scan: {
    title: string;
    subtitle: string;
    uploadDoc: string;
    takePhoto: string;
    scanNotice: string;
    analyzing: string;
    analyzingSteps: string[];
    simpleExplanation: string;
    explanationText: string;
    importantDates: string;
    lastDate: string;
    whatToDo: string;
    steps: string[];
    documentsRequired: string;
    docList: string[];
    listenExplanation: string;
    dragDrop: string;
    or: string;
    sampleDocNote: string;
  };
  fee: {
    title: string;
    subtitle: string;
    serviceName: string;
    serviceNamePlaceholder: string;
    department: string;
    departmentPlaceholder: string;
    amount: string;
    amountPlaceholder: string;
    reason: string;
    reasonPlaceholder: string;
    receiptOffered: string;
    receiptYes: string;
    receiptNo: string;
    checkButton: string;
    checking: string;
    exampleTitle: string;
    exampleText: string;
    resultOfficial: string;
    resultOfficialDesc: string;
    resultVerification: string;
    resultVerificationDesc: string;
    resultMismatch: string;
    resultMismatchDesc: string;
    findOfficialHelp: string;
    officialFeeInfo: string;
  };
  rule: {
    title: string;
    subtitle: string;
    placeholder: string;
    checkButton: string;
    checking: string;
    exampleTitle: string;
    exampleClaim: string;
    claim: string;
    officialInfo: string;
    verificationStatus: string;
    source: string;
    lastChecked: string;
    verified: string;
    needsVerification: string;
    doesntMatch: string;
    sampleClaims: Array<{
      claim: string;
      info: string;
      status: 'green' | 'yellow' | 'red';
      source: string;
    }>;
  };
  localLang: {
    title: string;
    subtitle: string;
    exampleTitle: string;
    userSays: string;
    userSaysText: string;
    saathiUnderstands: string;
    saathiResponse: string;
    notJustTranslation: string;
    notJustTranslationDesc: string;
  };
  whatsNew: {
    title: string;
    subtitle: string;
    listenUpdates: string;
    newScheme: string;
    deadlineApproaching: string;
    ruleUpdated: string;
    eligibilityChanged: string;
    cards: Array<{
      type: string;
      title: string;
      description: string;
      date: string;
    }>;
  };
  safety: {
    title: string;
    subtitle: string;
    points: string[];
    disclaimer: string;
    footerLine: string;
  };
  common: {
    back: string;
    close: string;
    retry: string;
    loading: string;
    saathiSays: string;
    youSaid: string;
    listen: string;
    officialSource: string;
    verifyNote: string;
    voiceFallback: string;
    langConfirm: string;
  };
}

export const translations: Record<LanguageCode, Translation> = {
  hi: {
    nav: {
      home: 'होम',
      ask: 'साथी से पूछें',
      yojana: 'योजना जाँचक',
      scan: 'स्कैन करें और समझें',
      fee: 'सरकारी फीस या रिश्वत?',
      rule: 'क्या यह नियम सच है?',
      whatsNew: 'क्या नया है?',
      safety: 'सुरक्षा और विश्वास',
    },
    home: {
      tagline: 'आपकी आवाज़। आपकी भाषा। आपके अधिकार।',
      description: 'सरकारी जानकारी को उस भाषा में समझें जो आप बोलते हैं।',
      askButton: 'साथी से पूछें',
      micLabel: 'बोलकर पूछें',
      selectLanguage: 'भाषा चुनें',
      featuresTitle: 'साथी आपकी कैसे मदद करता है',
      featuresSubtitle: 'हर व्यक्ति को अपने अधिकार और सरकारी सेवाओं की जानकारी मिलनी चाहिए',
      trustNote: 'साथी केवल एक प्रोटोटाइप है। महत्वपूर्ण जानकारी को आधिकारिक सरकारी स्रोतों से सत्यापित करें।',
      heroGreeting: 'नमस्ते! मैं साथी हूँ। मैं आपकी कैसे मदद कर सकता हूँ?',
      welcomeMessage: 'नमस्ते! मैं साथी हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?',
    },
    features: {
      askSaathi: 'साथी से पूछें',
      askSaathiDesc: 'अपनी आवाज़ से सवाल पूछें, साथी आपको जवाब देगा',
      yojana: 'आपके लिए योजनाएँ खोजें',
      yojanaDesc: 'अपनी ज़रूरत के अनुसार सरकारी योजनाएँ ढूँढें',
      scan: 'स्कैन करें और समझें',
      scanDesc: 'सरकारी दस्तावेज़ या नोटिस की फोटो अपलोड करें',
      fee: 'सरकारी फीस या रिश्वत?',
      feeDesc: 'जाँचें कि वसूला जा रहा पैसा सरकारी फीस है या नहीं',
      rule: 'क्या यह नियम सच है?',
      ruleDesc: 'सुनी हुई बात को आधिकारिक जानकारी से जाँचें',
      localLang: 'अपनी भाषा में बात करें',
      localLangDesc: 'हिन्दी, भोजपुरी, अवधी — जो आप बोलते हैं उसी में जवाब पाएँ',
      whatsNew: 'क्या नया है?',
      whatsNewDesc: 'सरकारी योजनाओं और नियमों के नए अपडेट जानें',
    },
    voice: {
      title: 'साथी से पूछें',
      subtitle: 'बोलकर सवाल पूछें — साथी आपकी भाषा में जवाब देगा',
      tapAndSpeak: 'दबाएँ और बोलें',
      listening: 'साथी सुन रहा है…',
      thinking: 'साथी आधिकारिक जानकारी जाँच रहा है…',
      speaking: 'साथी बोल रहा है…',
      typeAlternative: 'या टाइप करके पूछें',
      typePlaceholder: 'अपना सवाल यहाँ लिखें…',
      sendButton: 'भेजें',
      permissionDenied: 'माइक्रोफ़ोन की अनुमति नहीं मिली',
      permissionDeniedDesc: 'कृपया ब्राउज़र सेटिंग्स में जाकर माइक्रोफ़ोन की अनुमति दें ताकि साथी आपकी बात सुन सके।',
      micNotSupported: 'आपका ब्राउज़र वॉइस रिकग्निशन सपोर्ट नहीं करता। कृपया क्रोम या एज ब्राउज़र का उपयोग करें।',
      stopListening: 'रोकें',
      conversationStart: 'नमस्ते! मैं साथी हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ? बोलने के लिए माइक्रोफ़ोन बटन दबाएँ।',
      trySaying: 'या ये उदाहरण आज़माएँ:',
      exampleQuestions: [
        'मेरे लिए कौन सी सरकारी योजना है?',
        'पत्ते के लिए कितना फीस लगता है?',
        'क्या यह सच है कि आधार अनिवार्य है?',
        'किसान के लिए कौन सी योजना है?',
      ],
    },
    yojana: {
      title: 'आपके लिए योजनाएँ खोजें',
      subtitle: 'कुछ आसान सवालों के जवाब दें और अपने लिए सही योजनाएँ ढूँढें',
      selectState: 'आपका राज्य क्या है?',
      isFarmer: 'क्या आप किसान हैं?',
      yes: 'हाँ',
      no: 'नहीं',
      selectAge: 'आपकी उम्र कितनी है?',
      selectAgePlaceholder: 'उम्र चुनें',
      whatHelp: 'आपको किस तरह की मदद चाहिए?',
      findSchemes: 'योजनाएँ खोजें',
      findingSchemes: 'आपके लिए योजनाएँ ढूँढ रहे हैं…',
      resultsFound: 'योजनाएँ मिलीं',
      noResults: 'आपकी जानकारी के अनुसार कोई योजना नहीं मिली। कृपया अलग-अलग विकल्प चुनकर प्रयास करें।',
      categories: {
        agriculture: 'कृषि और किसान',
        education: 'शिक्षा और छात्रवृत्ति',
        housing: 'आवास',
        health: 'स्वास्थ्य',
        employment: 'रोज़गार',
        women: 'महिला और बाल कल्याण',
        pension: 'पेंशन',
        business: 'लघु व्यापार',
      },
      schemeName: 'योजना का नाम',
      simpleExplanation: 'आसान समझ',
      whoCanApply: 'कौन आवेदन कर सकता है',
      benefits: 'लाभ',
      documentsRequired: 'ज़रूरी दस्तावेज़',
      deadline: 'अंतिम तिथि',
      officialInfo: 'आधिकारिक जानकारी',
      officiallyVerified: 'आधिकारिक जानकारी से सत्यापित',
      needsVerification: 'जाँच की आवश्यकता है',
      doesntMatch: 'उपलब्ध आधिकारिक जानकारी से मेल नहीं खाता',
      lastChecked: 'अंतिम जाँच',
      schemes: [
        {
          name: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)',
          category: 'agriculture',
          explanation: 'इस योजना के तहत छोटे और सीमांत किसान परिवारों को हर साल ₹6,000 की आर्थिक मदद दी जाती है, जो तीन किस्तों में सीधे बैंक खाते में आती है।',
          whoCanApply: 'वे किसान जिनके पास 2 हेक्टेयर तक की ज़मीन है और जो आयकर नहीं देते।',
          benefits: 'हर साल ₹6,000, तीन किस्तों में — सीधे बैंक खाते में।',
          documents: ['आधार कार्ड', 'बैंक खाता विवरण', 'ज़मीन के कागज़', 'मोबाइल नंबर'],
          deadline: 'निरंतर — किसी भी समय आवेदन करें',
          verified: 'green',
        },
        {
          name: 'आयुष्मान भारत योजना (Ayushman Bharat)',
          category: 'health',
          explanation: 'इस योजना के तहत गरीब परिवारों को हर साल ₹5 लाख तक का मुफ़्त इलाज मिलता है — सरकारी और निजी अस्पतालों में।',
          whoCanApply: 'सेवा कार्ड (SECC) के अनुसार पात्र परिवार। आधार कार्ड ज़रूरी है।',
          benefits: 'हर साल ₹5 लाख तक का मुफ़्त इलाज, कैशलेस और पेपरलेस।',
          documents: ['आधार कार्ड', 'राशन कार्ड', 'पते का प्रमाण', 'फोटो'],
          deadline: 'निरंतर — किसी भी समय पंजीकरण करें',
          verified: 'green',
        },
        {
          name: 'प्रधानमंत्री आवास योजना (PMAY)',
          category: 'housing',
          explanation: 'गरीब परिवारों को पक्का घर बनाने के लिए ₹1.2 लाख तक की मदद दी जाती है। शहर और गाँव दोनों के लिए अलग-अलग योजना है।',
          whoCanApply: 'जिन परिवारों के पास पक्का घर नहीं है और जो आय सीमा में आते हैं।',
          benefits: '₹1.2 लाख तक की आर्थिक मदद या सब्सिडी पर घर लोन।',
          documents: ['आधार कार्ड', 'आय प्रमाण पत्र', 'ज़मीन के कागज़', 'बैंक खाता विवरण'],
          deadline: '31 मार्च 2026',
          verified: 'green',
        },
        {
          name: 'राष्ट्रीय बालिका शिक्षा योजना',
          category: 'education',
          explanation: 'बेटियों की पढ़ाई के लिए छात्रवृत्ति और बैंक खाते में पैसा जमा किया जाता है ताकि वे आगे पढ़ सकें।',
          whoCanApply: '10 से 18 साल की बेटियाँ जो स्कूल में पढ़ रही हैं।',
          benefits: 'कक्षा 10 तक ₹3,000 और कक्षा 12 तक ₹5,000 तक की मदद।',
          documents: ['बेटी का आधार कार्ड', 'जन्म प्रमाण पत्र', 'स्कूल प्रमाण पत्र', 'बैंक खाता विवरण'],
          deadline: '30 सितंबर 2026',
          verified: 'yellow',
        },
        {
          name: 'मुद्रा लोन योजना (PMMY)',
          category: 'business',
          explanation: 'अपना छोटा काम शुरू करने के लिए ₹50,000 से ₹10 लाख तक का लोन, बिना ज़मानत के।',
          whoCanApply: 'कोई भी व्यक्ति जो छोटा व्यापार या उद्यम शुरू करना चाहता है।',
          benefits: '₹50,000 (शिशु) से ₹10 लाख (तरुण) तक का लोन, कम ब्याज पर।',
          documents: ['आधार कार्ड', 'व्यापार योजना', 'बैंक खाता विवरण', 'पता प्रमाण'],
          deadline: 'निरंतर — बैंक में आवेदन करें',
          verified: 'green',
        },
        {
          name: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन',
          category: 'pension',
          explanation: '60 वर्ष से अधिक आयु के गरीब व्यक्तियों को हर महीने ₹200 की पेंशन मिलती है। 80 वर्ष के बाद ₹500।',
          whoCanApply: '60+ वर्ष के व्यक्ति जो बीपीएल श्रेणी में आते हैं।',
          benefits: 'हर महीने ₹200 (60+), ₹500 (80+)।',
          documents: ['आधार कार्ड', 'आय प्रमाण पत्र (BPL)', 'बैंक खाता विवरण', 'उम्र का प्रमाण'],
          deadline: 'निरंतर — किसी भी समय आवेदन करें',
          verified: 'green',
        },
        {
          name: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोज़गार गारंटी (MGNREGA)',
          category: 'employment',
          explanation: 'ग्रामीण इलाकों में हर परिवार को साल में 100 दिन का काम गारंटी के साथ मिलता है।',
          whoCanApply: 'ग्रामीण क्षेत्र का कोई भी वयस्क जो जॉब कार्ड बनवाना चाहता है।',
          benefits: 'साल में 100 दिन का गारंटीड काम, न्यूनतम मज़दूरी पर।',
          documents: ['आधार कार्ड', 'फोटो', 'पते का प्रमाण', 'बैंक खाता विवरण'],
          deadline: 'निरंतर — ग्राम पंचायत में आवेदन करें',
          verified: 'green',
        },
        {
          name: 'मातृ वंदना योजना',
          category: 'women',
          explanation: 'गर्भवती महिलाओं को पहले बच्चे के लिए ₹5,000 और दूसरे बच्चे के लिए भी आर्थिक मदद दी जाती है।',
          whoCanApply: 'गर्भवती और धात्री महिलाएँ जो 19 वर्ष से अधिक आयु की हैं।',
          benefits: '₹5,000 तक की आर्थिक मदद, किस्तों में।',
          documents: ['आधार कार्ड', 'माँ और पति का बैंक खाता', 'जन्म प्रमाण पत्र', 'MCP कार्ड'],
          deadline: 'निरंतर — आंगनवाड़ी केंद्र पर आवेदन करें',
          verified: 'yellow',
        },
      ],
    },
    scan: {
      title: 'स्कैन करें और समझें',
      subtitle: 'सरकारी दस्तावेज़ या नोटिस की फोटो अपलोड करें — साथी आसान भाषा में समझाएगा',
      uploadDoc: 'दस्तावेज़ अपलोड करें',
      takePhoto: 'फोटो लें',
      scanNotice: 'नोटिस स्कैन करें',
      analyzing: 'दस्तावेज़ का विश्लेषण हो रहा है…',
      analyzingSteps: [
        'दस्तावेज़ स्कैन किया जा रहा है…',
        'टेक्स्ट पहचाना जा रहा है…',
        'जानकारी समझी जा रही है…',
        'आसान भाषा में समझाया जा रहा है…',
      ],
      simpleExplanation: 'आसान समझ',
      explanationText: 'यह नोटिस आपके क्षेत्र में बिजली काटने के बारे में है। बिजली विभाग 15 अक्टूबर को सुबह 9 बजे से दोपहर 2 बजे तक रखरखाव का काम करेगा, जिससे इस समय बिजली नहीं रहेगी।',
      importantDates: 'महत्वपूर्ण तिथियाँ',
      lastDate: 'अंतिम तिथि: 15 अक्टूबर 2025',
      whatToDo: 'आपको क्या करना है',
      steps: [
        'अपने ज़रूरी काम (जैसे पानी भरना, मोबाइल चार्ज करना) उससे पहले निपट लें।',
        'इन्वर्टर या जनरेटर हो तो तैयार रखें।',
        'आपातकालीन स्थिति के लिए बिजली विभाग का नंबर (1912) सेव रखें।',
      ],
      documentsRequired: 'ज़रूरी दस्तावेज़',
      docList: ['पहचान पत्र (आधार/वोटर आईडी)', 'पुराना बिजली बिल', 'नोटिस की एक कॉपी'],
      listenExplanation: 'समझाई गई बात सुनें',
      dragDrop: 'फोटो यहाँ खींचें और छोड़ें',
      or: 'या',
      sampleDocNote: 'डेमो के लिए: कोई भी फोटो अपलोड करें या नीचे दिए गए "विश्लेषण शुरू करें" बटन पर क्लिक करें।',
    },
    fee: {
      title: 'सरकारी फीस या रिश्वत?',
      subtitle: 'जाँचें कि वसूला जा रहा पैसा सरकारी फीस है या कुछ संदिग्ध',
      serviceName: 'सरकारी सेवा का नाम',
      serviceNamePlaceholder: 'जैसे: पत्ते का नवीनीकरण',
      department: 'विभाग',
      departmentPlaceholder: 'जैसे: राजस्व विभाग',
      amount: 'माँगी गई राशि (₹)',
      amountPlaceholder: 'जैसे: 500',
      reason: 'भुगतान का कारण',
      reasonPlaceholder: 'जैसे: फाइल पास कराने के लिए',
      receiptOffered: 'क्या आपको आधिकारिक रसीद दी गई?',
      receiptYes: 'हाँ, रसीद मिली',
      receiptNo: 'नहीं, रसीद नहीं मिली',
      checkButton: 'जाँच करें',
      checking: 'जाँच हो रही है…',
      exampleTitle: 'उदाहरण',
      exampleText: 'कोई मुझसे ₹500 माँग रहा है एक सरकारी सेवा के लिए। क्या यह आधिकारिक फीस है?',
      resultOfficial: 'आधिकारिक फीस',
      resultOfficialDesc: 'यह राशि उपलब्ध आधिकारिक फीस जानकारी से मेल खाती है। केवल आधिकारिक भुगतान विधि से भुगतान करें और अपनी रसीद रखें।',
      resultVerification: 'जाँच की आवश्यकता है',
      resultVerificationDesc: 'हम इस भुगतान को उपलब्ध आधिकारिक जानकारी से पुष्टि नहीं कर सके। भुगतान से पहले आधिकारिक विभाग से जाँच करें।',
      resultMismatch: 'उपलब्ध आधिकारिक जानकारी से मेल नहीं खाता',
      resultMismatchDesc: 'यह माँगी गई राशि उपलब्ध आधिकारिक जानकारी से मेल नहीं खाती। जब तक आप इसे आधिकारिक सरकारी चैनल से सत्यापित न करें, भुगतान न करें।',
      findOfficialHelp: 'आधिकारिक मदद ढूँढें',
      officialFeeInfo: 'उपलब्ध आधिकारिक फीस जानकारी',
    },
    rule: {
      title: 'क्या यह नियम सच है?',
      subtitle: 'सुनी हुई बात को आधिकारिक जानकारी से जाँचें',
      placeholder: 'जो आपने सुना है उसे यहाँ लिखें…',
      checkButton: 'जाँच करें',
      checking: 'जाँच हो रही है…',
      exampleTitle: 'उदाहरण',
      exampleClaim: 'किसी ने मुझसे कहा कि यह सरकारी नियम है। क्या यह सच है?',
      claim: 'दावा',
      officialInfo: 'उपलब्ध आधिकारिक जानकारी',
      verificationStatus: 'सत्यापन स्थिति',
      source: 'स्रोत',
      lastChecked: 'अंतिम जाँच',
      verified: 'सत्यापित',
      needsVerification: 'जाँच की आवश्यकता है',
      doesntMatch: 'उपलब्ध आधिकारिक जानकारी से मेल नहीं खाता',
      sampleClaims: [
        {
          claim: 'आधार कार्ड अब सभी जगह अनिवार्य है — बिना आधार के कोई काम नहीं होगा।',
          info: 'आधार कई सरकारी सेवाओं के लिए ज़रूरी है, लेकिन सभी जगह अनिवार्य नहीं है। सुप्रीम कोर्ट ने कहा है कि आधार को कुछ सेवाओं के लिए स्वैच्छिक रखा जा सकता है।',
          status: 'yellow',
          source: 'सुप्रीम कोर्ट फैसले और भारत सरकार अधिसूचनाएँ',
        },
        {
          claim: 'किसानों को बिना किसी शर्त के हर साल ₹6,000 मिलते हैं।',
          info: 'PM-KISAN योजना के तहत पात्र किसान परिवारों को ₹6,000 सालाना मिलते हैं। पात्रता शर्तें हैं — ज़मीन के कागज़ और आय सीमा।',
          status: 'yellow',
          source: 'pmkisan.gov.in',
        },
        {
          claim: 'राशन कार्ड के लिए आधार अनिवार्य है।',
          info: 'कई राज्यों में राशन कार्ड से आधार लिंक करना ज़रूरी है, लेकिन यह राज्य-विशिष्ट है। कुछ राज्यों में अभी भी विकल्प उपलब्ध हैं।',
          status: 'yellow',
          source: 'राज्य सरकार अधिसूचनाएँ',
        },
        {
          claim: 'ऑनलाइन बिजली बिल भरने पर छूट मिलती है।',
          info: 'कुछ राज्यों में ऑनलाइन भुगतान पर 0.5% से 1% तक की छूट मिलती है, लेकिन यह सभी राज्यों में लागू नहीं है।',
          status: 'yellow',
          source: 'राज्य बिजली बोर्ड नियम',
        },
      ],
    },
    localLang: {
      title: 'अपनी भाषा में बात करें',
      subtitle: 'साथी केवल अनुवाद नहीं करता — यह जानकारी को आसान भाषा में समझाता है',
      exampleTitle: 'उदाहरण',
      userSays: 'उपयोगकर्ता बोलता है (भोजपुरी में)',
      userSaysText: 'हमरे खातिर का योजना बा?',
      saathiUnderstands: 'साथी समझता है और जवाब देता है',
      saathiResponse: 'आपके लिए कई सरकारी योजनाएँ हैं। क्या आप किसान हैं? आप किस राज्य में रहते हैं? यह बताएँ तो मैं आपके लिए सही योजनाएँ ढूँढ सकता हूँ।',
      notJustTranslation: 'सिर्फ़ अनुवाद नहीं — समझ है',
      notJustTranslationDesc: 'साथी कठिन सरकारी भाषा को आसान शब्दों में बदलता है ताकि हर कोई समझ सके। यह जानकारी को सरल बनाता है, सिर्फ़ भाषा बदलता नहीं।',
    },
    whatsNew: {
      title: 'क्या नया है?',
      subtitle: 'सरकारी योजनाओं और नियमों के नए अपडेट',
      listenUpdates: 'अपडेट सुनें',
      newScheme: 'नई योजना',
      deadlineApproaching: 'अंतिम तिथि निकट',
      ruleUpdated: 'नियम बदला',
      eligibilityChanged: 'पात्रता बदली',
      cards: [
        {
          type: 'newScheme',
          title: 'नई किसान योजना घोषित',
          description: 'केंद्र सरकार ने नई कृषि आधुनिकीकरण योजना शुरू की है जिसमें किसानों को आधुनिक उपकरणों पर 50% तक की सब्सिडी मिलेगी।',
          date: '20 अगस्त 2025',
        },
        {
          type: 'deadlineApproaching',
          title: 'PMAY अंतिम तिथि 31 मार्च 2026',
          description: 'प्रधानमंत्री आवास योजना के तहत आवेदन की अंतिम तिथि 31 मार्च 2026 है। पात्र परिवार जल्द आवेदन करें।',
          date: '18 अगस्त 2025',
        },
        {
          type: 'ruleUpdated',
          title: 'पासपोर्ट नियमों में बदलाव',
          description: 'अब नए पासपोर्ट आवेदन के लिए आधार और जन्म प्रमाण पत्र के साथ-साथ केवल एक पते का प्रमाण ज़रूरी है — पहले तीन चाहिए थे।',
          date: '15 अगस्त 2025',
        },
        {
          type: 'eligibilityChanged',
          title: 'आयुष्मान भारत पात्रता बदली',
          description: 'अब और अधिक परिवार आयुष्मान भारत योजना के लिए पात्र हैं। नई सूची में 60+ वर्ष के बिना पेंशन वाले परिवार भी शामिल हैं।',
          date: '10 अगस्त 2025',
        },
      ],
    },
    safety: {
      title: 'सत्यापित जानकारी। आसान भाषा।',
      subtitle: 'साथी आपके विश्वास के लिए बना है',
      points: [
        'साथी आधिकारिक सरकारी स्रोतों पर निर्भर करता है।',
        'हर महत्वपूर्ण परिणाम एक स्रोत के साथ दिखाता है।',
        'जानकारी को अंतिम बार कब जाँचा गया — वह स्पष्ट रूप से दिखाया जाता है।',
        'जब जानकारी की पुष्टि नहीं हो सकती, वह स्पष्ट रूप से बताया जाता है।',
        'साथी कानूनी रूप से बाध्यकारी सलाह नहीं देता।',
        'महत्वपूर्ण निर्णयों के लिए आधिकारिक अधिकारियों से जाँच करें।',
      ],
      disclaimer: 'साथी एक प्रस्तुति प्रोटोटाइप है। यह कानूनी रूप से बाध्यकारी सलाह नहीं देता। महत्वपूर्ण जानकारी को आधिकारिक सरकारी स्रोतों से सत्यापित करें।',
      footerLine: 'मानने से पहले, साथी से पूछें।',
    },
    common: {
      back: 'वापस',
      close: 'बंद करें',
      retry: 'पुनः प्रयास',
      loading: 'लोड हो रहा है…',
      saathiSays: 'साथी कहता है',
      youSaid: 'आपने कहा',
      listen: 'सुनें',
      officialSource: 'आधिकारिक स्रोत',
      verifyNote: 'महत्वपूर्ण: यह जानकारी आधिकारिक सरकारी स्रोतों से सत्यापित करें।',
      voiceFallback: 'आवाज़ सपोर्ट आपके डिवाइस पर अलग-अलग हो सकता है। आप टेक्स्ट मोड में जारी रख सकते हैं।',
      langConfirm: 'साथी अब {lang} में बात करेगा।',
    },
  },

  en: {
    nav: {
      home: 'Home',
      ask: 'Ask SAATHI',
      yojana: 'Yojana Checker',
      scan: 'Scan & Explain',
      fee: 'Fee or Bribe?',
      rule: 'Is This Rule True?',
      whatsNew: "What's New?",
      safety: 'Safety & Trust',
    },
    home: {
      tagline: 'Your Voice. Your Language. Your Rights.',
      description: 'Understand government information in the language you speak.',
      askButton: 'Ask SAATHI',
      micLabel: 'Ask by speaking',
      selectLanguage: 'Select Language',
      featuresTitle: 'How SAATHI helps you',
      featuresSubtitle: 'Everyone deserves to know their rights and government services',
      trustNote: 'SAATHI is a prototype. Verify important information from official government sources.',
      heroGreeting: 'Namaste! I am SAATHI. How can I help you?',
      welcomeMessage: 'Namaste! I am SAATHI. How can I help you today?',
    },
    features: {
      askSaathi: 'Ask SAATHI',
      askSaathiDesc: 'Ask questions with your voice, SAATHI answers in your language',
      yojana: 'Find Schemes for You',
      yojanaDesc: 'Find government schemes based on your needs',
      scan: 'Scan and Explain',
      scanDesc: 'Upload a photo of any government document or notice',
      fee: 'Fee or Bribe?',
      feeDesc: 'Check if the money being asked is an official fee or not',
      rule: 'Is This Rule True?',
      ruleDesc: 'Verify what you heard against official information',
      localLang: 'Speak in Your Language',
      localLangDesc: 'Hindi, Bhojpuri, Awadhi — get answers in the language you speak',
      whatsNew: "What's New?",
      whatsNewDesc: 'Get the latest updates on government schemes and rules',
    },
    voice: {
      title: 'Ask SAATHI',
      subtitle: 'Ask by speaking — SAATHI will answer in your language',
      tapAndSpeak: 'Tap and Speak',
      listening: 'SAATHI is listening…',
      thinking: 'SAATHI is checking official information…',
      speaking: 'SAATHI is speaking…',
      typeAlternative: 'Or type your question',
      typePlaceholder: 'Type your question here…',
      sendButton: 'Send',
      permissionDenied: 'Microphone permission denied',
      permissionDeniedDesc: 'Please allow microphone access in your browser settings so SAATHI can hear you.',
      micNotSupported: 'Your browser does not support voice recognition. Please use Chrome or Edge.',
      stopListening: 'Stop',
      conversationStart: 'Namaste! I am SAATHI. How can I help you today? Press the microphone button to speak.',
      trySaying: 'Or try these examples:',
      exampleQuestions: [
        'Which government scheme is there for me?',
        'How much is the fee for a lease renewal?',
        'Is it true that Aadhaar is mandatory?',
        'Which scheme is there for farmers?',
      ],
    },
    yojana: {
      title: 'Find Schemes for You',
      subtitle: 'Answer a few simple questions and find the right schemes for you',
      selectState: 'What is your state?',
      isFarmer: 'Are you a farmer?',
      yes: 'Yes',
      no: 'No',
      selectAge: 'What is your age?',
      selectAgePlaceholder: 'Select age',
      whatHelp: 'What kind of help do you need?',
      findSchemes: 'Find Schemes',
      findingSchemes: 'Finding schemes for you…',
      resultsFound: 'schemes found',
      noResults: 'No schemes found for your criteria. Try different options.',
      categories: {
        agriculture: 'Agriculture & Farmers',
        education: 'Education & Scholarships',
        housing: 'Housing',
        health: 'Health',
        employment: 'Employment',
        women: 'Women & Child Welfare',
        pension: 'Pension',
        business: 'Small Business',
      },
      schemeName: 'Scheme Name',
      simpleExplanation: 'Simple Explanation',
      whoCanApply: 'Who Can Apply',
      benefits: 'Benefits',
      documentsRequired: 'Documents Required',
      deadline: 'Deadline',
      officialInfo: 'Official Information',
      officiallyVerified: 'Officially Verified',
      needsVerification: 'Needs Verification',
      doesntMatch: "Doesn't Match Available Official Information",
      lastChecked: 'Last checked',
      schemes: [
        {
          name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
          category: 'agriculture',
          explanation: 'Under this scheme, small and marginal farmer families receive ₹6,000 per year in financial support, paid in three installments directly to their bank account.',
          whoCanApply: 'Farmers with up to 2 hectares of land who do not pay income tax.',
          benefits: '₹6,000 per year, in three installments — directly to bank account.',
          documents: ['Aadhaar Card', 'Bank Account Details', 'Land Records', 'Mobile Number'],
          deadline: 'Ongoing — apply anytime',
          verified: 'green',
        },
        {
          name: 'Ayushman Bharat (PMJAY)',
          category: 'health',
          explanation: 'Under this scheme, poor families receive up to ₹5 lakh of free treatment per year — in government and private hospitals.',
          whoCanApply: 'Eligible families as per SECC data. Aadhaar card is required.',
          benefits: 'Up to ₹5 lakh free treatment per year, cashless and paperless.',
          documents: ['Aadhaar Card', 'Ration Card', 'Address Proof', 'Photo'],
          deadline: 'Ongoing — register anytime',
          verified: 'green',
        },
        {
          name: 'Pradhan Mantri Awas Yojana (PMAY)',
          category: 'housing',
          explanation: 'Poor families receive up to ₹1.2 lakh to build a pucca house. Separate schemes exist for urban and rural areas.',
          whoCanApply: 'Families without a pucca house who fall within the income limit.',
          benefits: 'Up to ₹1.2 lakh financial assistance or home loan subsidy.',
          documents: ['Aadhaar Card', 'Income Certificate', 'Land Records', 'Bank Account Details'],
          deadline: 'March 31, 2026',
          verified: 'green',
        },
        {
          name: 'National Girl Child Education Scheme',
          category: 'education',
          explanation: 'Scholarships and bank deposits are provided for girls\' education so they can continue studying.',
          whoCanApply: 'Girls aged 10 to 18 who are enrolled in school.',
          benefits: 'Up to ₹3,000 (Class 10) and ₹5,000 (Class 12) in assistance.',
          documents: ["Girl's Aadhaar Card", 'Birth Certificate', 'School Certificate', 'Bank Account Details'],
          deadline: 'September 30, 2026',
          verified: 'yellow',
        },
        {
          name: 'MUDRA Loan Scheme (PMMY)',
          category: 'business',
          explanation: 'Loans from ₹50,000 to ₹10 lakh to start your small business, without collateral.',
          whoCanApply: 'Anyone who wants to start a small business or enterprise.',
          benefits: '₹50,000 (Shishu) to ₹10 lakh (Tarun) loan at low interest.',
          documents: ['Aadhaar Card', 'Business Plan', 'Bank Account Details', 'Address Proof'],
          deadline: 'Ongoing — apply at any bank',
          verified: 'green',
        },
        {
          name: 'Indira Gandhi National Old Age Pension',
          category: 'pension',
          explanation: 'Poor individuals above 60 years receive a monthly pension of ₹200. After 80 years, it becomes ₹500.',
          whoCanApply: 'Individuals aged 60+ who fall in the BPL category.',
          benefits: '₹200/month (60+), ₹500/month (80+).',
          documents: ['Aadhaar Card', 'Income Certificate (BPL)', 'Bank Account Details', 'Age Proof'],
          deadline: 'Ongoing — apply anytime',
          verified: 'green',
        },
        {
          name: 'MGNREGA (Rural Employment Guarantee)',
          category: 'employment',
          explanation: 'In rural areas, every household is guaranteed 100 days of work per year.',
          whoCanApply: 'Any rural adult who wants a job card.',
          benefits: '100 days of guaranteed work per year at minimum wage.',
          documents: ['Aadhaar Card', 'Photo', 'Address Proof', 'Bank Account Details'],
          deadline: 'Ongoing — apply at Gram Panchayat',
          verified: 'green',
        },
        {
          name: 'Matru Vandana Yojana',
          category: 'women',
          explanation: 'Pregnant women receive ₹5,000 for the first child and financial support for the second child as well.',
          whoCanApply: 'Pregnant and lactating women aged 19 and above.',
          benefits: 'Up to ₹5,000 in financial assistance, in installments.',
          documents: ['Aadhaar Card', 'Mother and Husband Bank Account', 'Birth Certificate', 'MCP Card'],
          deadline: 'Ongoing — apply at Anganwadi center',
          verified: 'yellow',
        },
      ],
    },
    scan: {
      title: 'Scan and Explain',
      subtitle: 'Upload a photo of any government document or notice — SAATHI will explain it in simple language',
      uploadDoc: 'Upload Document',
      takePhoto: 'Take Photo',
      scanNotice: 'Scan Notice',
      analyzing: 'Analyzing document…',
      analyzingSteps: [
        'Scanning document…',
        'Recognizing text…',
        'Understanding information…',
        'Explaining in simple language…',
      ],
      simpleExplanation: 'Simple Explanation',
      explanationText: 'This notice is about a planned power cut in your area. The electricity department will conduct maintenance work on October 15 from 9 AM to 2 PM, during which there will be no electricity.',
      importantDates: 'Important Dates',
      lastDate: 'Last date: October 15, 2025',
      whatToDo: 'What You Need To Do',
      steps: [
        'Complete your essential tasks (like filling water, charging mobile) before that time.',
        'Keep your inverter or generator ready if you have one.',
        'Save the electricity department helpline number (1912) for emergencies.',
      ],
      documentsRequired: 'Documents Required',
      docList: ['Identity proof (Aadhaar/Voter ID)', 'Previous electricity bill', 'A copy of the notice'],
      listenExplanation: 'Listen to Explanation',
      dragDrop: 'Drag and drop photo here',
      or: 'or',
      sampleDocNote: 'For demo: upload any photo or click the "Start Analysis" button below.',
    },
    fee: {
      title: 'Is this an Official Fee or Something Suspicious?',
      subtitle: 'Check if the money being asked is an official fee or something to be careful about',
      serviceName: 'Government Service Name',
      serviceNamePlaceholder: 'e.g., Lease Renewal',
      department: 'Department',
      departmentPlaceholder: 'e.g., Revenue Department',
      amount: 'Amount Requested (₹)',
      amountPlaceholder: 'e.g., 500',
      reason: 'Reason for Payment',
      reasonPlaceholder: 'e.g., For file processing',
      receiptOffered: 'Were you offered an official receipt?',
      receiptYes: 'Yes, receipt given',
      receiptNo: 'No, no receipt',
      checkButton: 'Check',
      checking: 'Checking…',
      exampleTitle: 'Example',
      exampleText: 'Someone is asking me for ₹500 for a government service. Is it an official fee?',
      resultOfficial: 'OFFICIAL FEE',
      resultOfficialDesc: 'This amount matches the available official fee information. Pay only through an official payment method and keep your receipt.',
      resultVerification: 'NEEDS VERIFICATION',
      resultVerificationDesc: 'We could not confirm this payment from the available official information. Verify with the official department before paying.',
      resultMismatch: "DOESN'T MATCH AVAILABLE OFFICIAL INFORMATION",
      resultMismatchDesc: 'This requested amount does not match the available official information. Do not make a payment until you verify it through an official government channel.',
      findOfficialHelp: 'Find Official Help',
      officialFeeInfo: 'Available Official Fee Information',
    },
    rule: {
      title: 'Is This Rule True?',
      subtitle: 'Check what you heard against available official information',
      placeholder: 'Write what you heard here…',
      checkButton: 'Check',
      checking: 'Checking…',
      exampleTitle: 'Example',
      exampleClaim: 'Someone told me this is the government rule. Is it true?',
      claim: 'Claim',
      officialInfo: 'Available Official Information',
      verificationStatus: 'Verification Status',
      source: 'Source',
      lastChecked: 'Last checked',
      verified: 'Verified',
      needsVerification: 'Needs Verification',
      doesntMatch: "Doesn't Match Available Official Information",
      sampleClaims: [
        {
          claim: 'Aadhaar card is now mandatory everywhere — nothing can be done without Aadhaar.',
          info: 'Aadhaar is required for many government services, but not mandatory everywhere. The Supreme Court has stated Aadhaar can be voluntary for some services.',
          status: 'yellow',
          source: 'Supreme Court judgments and Government of India notifications',
        },
        {
          claim: 'Farmers get ₹6,000 every year without any conditions.',
          info: 'Under PM-KISAN, eligible farmer families receive ₹6,000 per year. There are eligibility conditions — land records and income limits apply.',
          status: 'yellow',
          source: 'pmkisan.gov.in',
        },
        {
          claim: 'Aadhaar is mandatory for ration cards.',
          info: 'Many states require linking Aadhaar to ration cards, but this is state-specific. Some states still have alternatives available.',
          status: 'yellow',
          source: 'State government notifications',
        },
        {
          claim: 'Online electricity bill payment gives a discount.',
          info: 'Some states offer 0.5% to 1% discount on online payment, but this is not applicable in all states.',
          status: 'yellow',
          source: 'State electricity board rules',
        },
      ],
    },
    localLang: {
      title: 'Speak in Your Language',
      subtitle: 'SAATHI does not just translate — it explains information in simple language',
      exampleTitle: 'Example',
      userSays: 'User speaks (in Bhojpuri)',
      userSaysText: 'हमरे खातिर का योजना बा?',
      saathiUnderstands: 'SAATHI understands and responds',
      saathiResponse: 'There are many government schemes for you. Are you a farmer? Which state do you live in? Tell me and I can find the right schemes for you.',
      notJustTranslation: 'Not just translation — real understanding',
      notJustTranslationDesc: 'SAATHI turns difficult government language into simple words so everyone can understand. It simplifies information, not just changes the language.',
    },
    whatsNew: {
      title: "What's New?",
      subtitle: 'Latest updates on government schemes and rules',
      listenUpdates: 'Listen to Updates',
      newScheme: 'New Scheme',
      deadlineApproaching: 'Deadline Approaching',
      ruleUpdated: 'Rule Updated',
      eligibilityChanged: 'Eligibility Changed',
      cards: [
        {
          type: 'newScheme',
          title: 'New Farmer Scheme Announced',
          description: 'The central government has launched a new agricultural modernization scheme providing up to 50% subsidy on modern equipment for farmers.',
          date: 'August 20, 2025',
        },
        {
          type: 'deadlineApproaching',
          title: 'PMAY Deadline March 31, 2026',
          description: 'The last date to apply under PMAY is March 31, 2026. Eligible families should apply soon.',
          date: 'August 18, 2025',
        },
        {
          type: 'ruleUpdated',
          title: 'Passport Rules Changed',
          description: 'New passport applications now require Aadhaar and birth certificate along with only one address proof — previously three were needed.',
          date: 'August 15, 2025',
        },
        {
          type: 'eligibilityChanged',
          title: 'Ayushman Bharat Eligibility Changed',
          description: 'More families are now eligible for Ayushman Bharat. The new list includes families with 60+ members without pension.',
          date: 'August 10, 2025',
        },
      ],
    },
    safety: {
      title: 'Verified Information. Simple Language.',
      subtitle: 'SAATHI is built for your trust',
      points: [
        'SAATHI relies on official government sources.',
        'Every important result shows a source.',
        'When information was last checked is clearly displayed.',
        'When information cannot be confirmed, it is clearly stated.',
        'SAATHI does not provide legally binding advice.',
        'Verify important decisions with official authorities.',
      ],
      disclaimer: 'SAATHI is a presentation prototype. It does not provide legally binding advice. Verify important information from official government sources.',
      footerLine: 'Before you believe it, ask SAATHI.',
    },
    common: {
      back: 'Back',
      close: 'Close',
      retry: 'Retry',
      loading: 'Loading…',
      saathiSays: 'SAATHI says',
      youSaid: 'You said',
      listen: 'Listen',
      officialSource: 'Official Source',
      verifyNote: 'Important: Verify this information from official government sources.',
      voiceFallback: 'Voice support may vary on your device. You can continue using text mode.',
      langConfirm: 'SAATHI will now speak in {lang}.',
    },
  },

  bho: {
    nav: {
      home: 'घर',
      ask: 'साथी से पूछीं',
      yojana: 'योजना जाँचक',
      scan: 'स्कैन करीं आ समझीं',
      fee: 'सरकारी फीस या रिश्वत?',
      rule: 'ई नियम सच बा का?',
      whatsNew: 'का नया बा?',
      safety: 'सुरक्षा आ भरोसा',
    },
    home: {
      tagline: 'आपक आवाज़। आपक भाषा। आपक अधिकार।',
      description: 'सरकारी जानकारी के ओही भाषा में समझीं जेहि आप बोलत बानी।',
      askButton: 'साथी से पूछीं',
      micLabel: 'बोलके पूछीं',
      selectLanguage: 'भाषा चुनीं',
      featuresTitle: 'साथी आपक कइसने मदद करेला',
      featuresSubtitle: 'हर जन के अपन अधिकार आ सरकारी सेवा क जानकारी मिलल चाहिए',
      trustNote: 'साथी एक्को प्रोटोटाइप बा। जरूरी जानकारी आधिकारिक सरकारी स्रोत से जाँच लीं।',
      heroGreeting: 'नमस्ते! हम साथी बानी। हम आपक कइसने मदद कर सकत बानी?',
      welcomeMessage: 'नमस्ते! हम साथी बानी। आज हम आपक कइसने मदद कर सकत बानी?',
    },
    features: {
      askSaathi: 'साथी से पूछीं',
      askSaathiDesc: 'आपक आवाज़ से सवाल पूछीं, साथी जवाब देगा',
      yojana: 'आपक खातिर योजना खोजीं',
      yojanaDesc: 'आपक जरूरत के हिसाब से सरकारी योजना खोजीं',
      scan: 'स्कैन करीं आ समझीं',
      scanDesc: 'सरकारी दस्तावेज या नोटिस क फोटो अपलोड करीं',
      fee: 'सरकारी फीस या रिश्वत?',
      feeDesc: 'जाँचीं कि माँगल गेल पइसा सरकारी फीस बा कि नाहीं',
      rule: 'ई नियम सच बा का?',
      ruleDesc: 'सुनल बात के आधिकारिक जानकारी से जाँचीं',
      localLang: 'आपक भाषा में बात करीं',
      localLangDesc: 'भोजपुरी, हिन्दी, अवधी — जेहि बोलत बानी ओही में जवाब पाईं',
      whatsNew: 'का नया बा?',
      whatsNewDesc: 'सरकारी योजना आ नियम क नया अपडेट जानीं',
    },
    voice: {
      title: 'साथी से पूछीं',
      subtitle: 'बोलके सवाल पूछीं — साथी आपक भाषा में जवाब देगा',
      tapAndSpeak: 'दबाईं आ बोलीं',
      listening: 'साथी सुनत बा…',
      thinking: 'साथी आधिकारिक जानकारी जाँचत बा…',
      speaking: 'साथी बोलत बा…',
      typeAlternative: 'या टाइप करके पूछीं',
      typePlaceholder: 'अपन सवाल इहाँ लिखीं…',
      sendButton: 'भेजीं',
      permissionDenied: 'माइक्रोफोन क अनुमति नइखे मिलल',
      permissionDeniedDesc: 'कृपया ब्राउज़र सेटिंग में जाके माइक्रोफोन क अनुमति दीं ताकि साथी आपक बात सुन सके।',
      micNotSupported: 'आपक ब्राउज़र वॉइस रिकग्निशन नइखे सपोर्ट करत। कृपया क्रोम या एज ब्राउज़र इस्तेमाल करीं।',
      stopListening: 'रोकीं',
      conversationStart: 'नमस्ते! हम साथी बानी। आज हम आपक कइसने मदद कर सकत बानी? बोले खातिर माइक्रोफोन बटन दबाईं।',
      trySaying: 'या ई उदाहरण आज़माईं:',
      exampleQuestions: [
        'हमरे खातिर का सरकारी योजना बा?',
        'पत्ता खातिर कतना फीस लागत बा?',
        'का ई सच बा कि आधार जरूरी बा?',
        'किसान खातिर का योजना बा?',
      ],
    },
    yojana: {
      title: 'आपक खातिर योजना खोजीं',
      subtitle: 'कुछ आसान सवाल क जवाब दीं आ अपन खातिर सही योजना खोजीं',
      selectState: 'आपक राज्य का बा?',
      isFarmer: 'का आप किसान बानी?',
      yes: 'हाँ',
      no: 'नइखे',
      selectAge: 'आपक उम्र कतना बा?',
      selectAgePlaceholder: 'उम्र चुनीं',
      whatHelp: 'आपके कइसन मदद चाहिए?',
      findSchemes: 'योजना खोजीं',
      findingSchemes: 'आपक खातिर योजना खोजत बानी…',
      resultsFound: 'योजना मिलल',
      noResults: 'आपक जानकारी के हिसाब से कोनो योजना नइखे मिलल। अलग-अलग विकल्प चुनके कोशिश करीं।',
      categories: {
        agriculture: 'खेती आ किसान',
        education: 'पढ़ाई आ छात्रवृत्ति',
        housing: 'घर',
        health: 'सेहत',
        employment: 'रोज़गार',
        women: 'मेहरारू आ बच्चा कल्याण',
        pension: 'पेंशन',
        business: 'छोट कारोबार',
      },
      schemeName: 'योजना क नाम',
      simpleExplanation: 'आसान समझ',
      whoCanApply: 'कौन आवेदन कर सकत बा',
      benefits: 'फायदा',
      documentsRequired: 'जरूरी दस्तावेज',
      deadline: 'अंतिम तिथि',
      officialInfo: 'आधिकारिक जानकारी',
      officiallyVerified: 'आधिकारिक जानकारी से सत्यापित',
      needsVerification: 'जाँच क जरूरत बा',
      doesntMatch: 'उपलब्ध आधिकारिक जानकारी से मेल नइखे खाता',
      lastChecked: 'अंतिम जाँच',
      schemes: [
        {
          name: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)',
          category: 'agriculture',
          explanation: 'ई योजना में छोट आ सीमांत किसान परिवार के ₹6,000 साल आर्थिक मदद मिलत बा, तीन किस्त में सीधे बैंक खाता में।',
          whoCanApply: 'जेकर 2 हेक्टेयर तक जमीन बा आ जे आयकर नइखे देत।',
          benefits: 'साल में ₹6,000, तीन किस्त में — सीधे बैंक खाता में।',
          documents: ['आधार कार्ड', 'बैंक खाता विवरण', 'जमीन क कागज', 'मोबाइल नंबर'],
          deadline: 'लगातार — कबो भी आवेदन करीं',
          verified: 'green',
        },
        {
          name: 'आयुष्मान भारत योजना',
          category: 'health',
          explanation: 'गरीब परिवार के साल में ₹5 लाख तक मुफ्त इलाज मिलत बा — सरकारी आ निजी अस्पताल में।',
          whoCanApply: 'SECC के हिसाब से पात्र परिवार। आधार कार्ड जरूरी बा।',
          benefits: 'साल में ₹5 लाख तक मुफ्त इलाज, कैशलेस आ पेपरलेस।',
          documents: ['आधार कार्ड', 'राशन कार्ड', 'पता प्रमाण', 'फोटो'],
          deadline: 'लगातार — कबो भी पंजीकरण करीं',
          verified: 'green',
        },
        {
          name: 'प्रधानमंत्री आवास योजना (PMAY)',
          category: 'housing',
          explanation: 'गरीब परिवार के पक्का घर बनावे खातिर ₹1.2 लाख तक मदद मिलत बा। शहर आ गाँव दुनो खातिर अलग योजना बा।',
          whoCanApply: 'जेकर परिवार के पक्का घर नइखे आ जे आय सीमा में आवत बा।',
          benefits: '₹1.2 लाख तक आर्थिक मदद या सब्सिडी पर घर लोन।',
          documents: ['आधार कार्ड', 'आय प्रमाण पत्र', 'जमीन क कागज', 'बैंक खाता विवरण'],
          deadline: '31 मार्च 2026',
          verified: 'green',
        },
        {
          name: 'राष्ट्रीय बेटी शिक्षा योजना',
          category: 'education',
          explanation: 'बेटी क पढ़ाई खातिर छात्रवृत्ति आ बैंक खाता में पइसा जमा होला ताकि ऊ आगे पढ़ सके।',
          whoCanApply: '10 से 18 साल क बेटी जे स्कूल में पढ़त बा।',
          benefits: 'कक्षा 10 ले ₹3,000 आ कक्षा 12 ले ₹5,000 तक मदद।',
          documents: ['बेटी क आधार कार्ड', 'जन्म प्रमाण पत्र', 'स्कूल प्रमाण पत्र', 'बैंक खाता विवरण'],
          deadline: '30 सितंबर 2026',
          verified: 'yellow',
        },
        {
          name: 'मुद्रा लोन योजना',
          category: 'business',
          explanation: 'अपन छोट काम शुरू करे खातिर ₹50,000 से ₹10 लाख तक लोन, बिना जमानत के।',
          whoCanApply: 'कोनो भी जन जे छोट कारोबार शुरू करना चाहत बा।',
          benefits: '₹50,000 (शिशु) से ₹10 लाख (तरुण) तक लोन, कम ब्याज पर।',
          documents: ['आधार कार्ड', 'कारोबार योजना', 'बैंक खाता विवरण', 'पता प्रमाण'],
          deadline: 'लगातार — बैंक में आवेदन करीं',
          verified: 'green',
        },
        {
          name: 'इंदिरा गांधी वृद्धावस्था पेंशन',
          category: 'pension',
          explanation: '60 साल से जादा उम्र क गरीब जन के महीना ₹200 पेंशन मिलत बा। 80 साल क बाद ₹500।',
          whoCanApply: '60+ साल क जन जे BPL में आवत बा।',
          benefits: 'महीना ₹200 (60+), ₹500 (80+)।',
          documents: ['आधार कार्ड', 'आय प्रमाण (BPL)', 'बैंक खाता विवरण', 'उम्र प्रमाण'],
          deadline: 'लगातार — कबो भी आवेदन करीं',
          verified: 'green',
        },
        {
          name: 'MGNREGA (ग्रामीण रोज़गार गारंटी)',
          category: 'employment',
          explanation: 'गाँव में हर परिवार के साल में 100 दिन काम गारंटी से मिलत बा।',
          whoCanApply: 'ग्रामीण इलाका क कोनो भी बयस्क जे जॉब कार्ड बनवाना चाहत बा।',
          benefits: 'साल में 100 दिन गारंटीड काम, न्यूनतम मज़दूरी पर।',
          documents: ['आधार कार्ड', 'फोटो', 'पता प्रमाण', 'बैंक खाता विवरण'],
          deadline: 'लगातार — ग्राम पंचायत में आवेदन करीं',
          verified: 'green',
        },
        {
          name: 'मातृ वंदना योजना',
          category: 'women',
          explanation: 'गर्भवती मेहरारू के पहिला बच्चा खातिर ₹5,000 आ दूसरा बच्चा खातिर भी आर्थिक मदद मिलत बा।',
          whoCanApply: 'गर्भवती आ धात्री मेहरारू जे 19 साल से जादा उम्र क बानी।',
          benefits: '₹5,000 तक आर्थिक मदद, किस्त में।',
          documents: ['आधार कार्ड', 'माई आ पति क बैंक खाता', 'जन्म प्रमाण पत्र', 'MCP कार्ड'],
          deadline: 'लगातार — आंगनवाड़ी केंद्र पर आवेदन करीं',
          verified: 'yellow',
        },
      ],
    },
    scan: {
      title: 'स्कैन करीं आ समझीं',
      subtitle: 'सरकारी दस्तावेज या नोटिस क फोटो अपलोड करीं — साथी आसान भाषा में समझाई',
      uploadDoc: 'दस्तावेज अपलोड करीं',
      takePhoto: 'फोटो लीं',
      scanNotice: 'नोटिस स्कैन करीं',
      analyzing: 'दस्तावेज क विश्लेषण होत बा…',
      analyzingSteps: [
        'दस्तावेज स्कैन होत बा…',
        'टेक्स्ट पहचानल जात बा…',
        'जानकारी समझल जात बा…',
        'आसान भाषा में समझाइल जात बा…',
      ],
      simpleExplanation: 'आसान समझ',
      explanationText: 'ई नोटिस आपक इलाका में बिजली काटे क बारे में बा। बिजली विभाग 15 अक्टूबर के सुबह 9 बजे से दोपहर 2 बजे ले रखरखाव काम करी, जेहि समय बिजली नइखे रही।',
      importantDates: 'जरूरी तिथि',
      lastDate: 'अंतिम तिथि: 15 अक्टूबर 2025',
      whatToDo: 'आपके का करे के बा',
      steps: [
        'अपन जरूरी काम (जइसे पानी भरल, मोबाइल चार्ज करल) ओही से पहिले निपट लीं।',
        'इन्वर्टर या जनरेटर हो तो तैयार रखीं।',
        'आपातकालीन स्थिति खातिर बिजली विभाग क नंबर (1912) सेव रखीं।',
      ],
      documentsRequired: 'जरूरी दस्तावेज',
      docList: ['पहचान पत्र (आधार/वोटर आईडी)', 'पुराना बिजली बिल', 'नोटिस क एक कॉपी'],
      listenExplanation: 'समझाइल बात सुनीं',
      dragDrop: 'फोटो इहाँ खींचीं आ छोड़ीं',
      or: 'या',
      sampleDocNote: 'डेमो खातिर: कोनो भी फोटो अपलोड करीं या नीचे दिल "विश्लेषण शुरू करीं" बटन पर क्लिक करीं।',
    },
    fee: {
      title: 'सरकारी फीस या रिश्वत?',
      subtitle: 'जाँचीं कि माँगल गेल पइसा सरकारी फीस बा या कुछ संदिग्ध',
      serviceName: 'सरकारी सेवा क नाम',
      serviceNamePlaceholder: 'जइसे: पत्ता नवीनीकरण',
      department: 'विभाग',
      departmentPlaceholder: 'जइसे: राजस्व विभाग',
      amount: 'माँगल गेल राशि (₹)',
      amountPlaceholder: 'जइसे: 500',
      reason: 'भुगतान क कारण',
      reasonPlaceholder: 'जइसे: फाइल पास करावे खातिर',
      receiptOffered: 'का आपके आधिकारिक रसीद दीन गेल?',
      receiptYes: 'हाँ, रसीद मिलल',
      receiptNo: 'नइखे, रसीद नइखे मिलल',
      checkButton: 'जाँच करीं',
      checking: 'जाँच होत बा…',
      exampleTitle: 'उदाहरण',
      exampleText: 'कोनो हमसे ₹500 माँगत बा एक्को सरकारी सेवा खातिर। का ई आधिकारिक फीस बा?',
      resultOfficial: 'आधिकारिक फीस',
      resultOfficialDesc: 'ई राशि उपलब्ध आधिकारिक फीस जानकारी से मेल खात बा। केवल आधिकारिक भुगतान विधि से भुगतान करीं आ अपन रसीद रखीं।',
      resultVerification: 'जाँच क जरूरत बा',
      resultVerificationDesc: 'हम ई भुगतान के उपलब्ध आधिकारिक जानकारी से पुष्टि नइखे कर सकत। भुगतान से पहिले आधिकारिक विभाग से जाँच करीं।',
      resultMismatch: 'उपलब्ध आधिकारिक जानकारी से मेल नइखे खाता',
      resultMismatchDesc: 'ई माँगल गेल राशि उपलब्ध आधिकारिक जानकारी से मेल नइखे खाता। जब तक आप ई आधिकारिक सरकारी चैनल से सत्यापित नइखे करत, भुगतान नइखे करीं।',
      findOfficialHelp: 'आधिकारिक मदद खोजीं',
      officialFeeInfo: 'उपलब्ध आधिकारिक फीस जानकारी',
    },
    rule: {
      title: 'ई नियम सच बा का?',
      subtitle: 'सुनल बात के आधिकारिक जानकारी से जाँचीं',
      placeholder: 'जे आप सुनल बानी ओकरा इहाँ लिखीं…',
      checkButton: 'जाँच करीं',
      checking: 'जाँच होत बा…',
      exampleTitle: 'उदाहरण',
      exampleClaim: 'कोनो हमसे कहलस कि ई सरकारी नियम बा। का ई सच बा?',
      claim: 'दावा',
      officialInfo: 'उपलब्ध आधिकारिक जानकारी',
      verificationStatus: 'सत्यापन स्थिति',
      source: 'स्रोत',
      lastChecked: 'अंतिम जाँच',
      verified: 'सत्यापित',
      needsVerification: 'जाँच क जरूरत बा',
      doesntMatch: 'उपलब्ध आधिकारिक जानकारी से मेल नइखे खाता',
      sampleClaims: [
        {
          claim: 'आधार कार्ड अब सब जगह जरूरी बा — बिना आधार के कोनो काम नइखे होत।',
          info: 'आधार कई सरकारी सेवा खातिर जरूरी बा, लेकिन सब जगह जरूरी नइखे। सुप्रीम कोर्ट कहलस कि आधार कुछ सेवा खातिर स्वैच्छिक रखल जा सकत बा।',
          status: 'yellow',
          source: 'सुप्रीम कोर्ट फैसला आ भारत सरकार अधिसूचना',
        },
        {
          claim: 'किसान के बिना कोनो शर्त के साल में ₹6,000 मिलत बा।',
          info: 'PM-KISAN योजना में पात्र किसान परिवार के ₹6,000 सालाना मिलत बा। पात्रता शर्त बा — जमीन क कागज आ आय सीमा।',
          status: 'yellow',
          source: 'pmkisan.gov.in',
        },
        {
          claim: 'राशन कार्ड खातिर आधार जरूरी बा।',
          info: 'कई राज्य में राशन कार्ड से आधार लिंक करना जरूरी बा, लेकिन ई राज्य-विशिष्ट बा। कुछ राज्य में अभी भी विकल्प उपलब्ध बा।',
          status: 'yellow',
          source: 'राज्य सरकार अधिसूचना',
        },
        {
          claim: 'ऑनलाइन बिजली बिल भरे पर छूट मिलत बा।',
          info: 'कुछ राज्य में ऑनलाइन भुगतान पर 0.5% से 1% तक छूट मिलत बा, लेकिन ई सब राज्य में लागू नइखे।',
          status: 'yellow',
          source: 'राज्य बिजली बोर्ड नियम',
        },
      ],
    },
    localLang: {
      title: 'आपक भाषा में बात करीं',
      subtitle: 'साथी केवल अनुवाद नइखे करत — ई जानकारी के आसान भाषा में समझावत बा',
      exampleTitle: 'उदाहरण',
      userSays: 'उपयोगकर्ता बोलत बा (भोजपुरी में)',
      userSaysText: 'हमरे खातिर का योजना बा?',
      saathiUnderstands: 'साथी समझत बा आ जवाब देत बा',
      saathiResponse: 'आपक खातिर कई सरकारी योजना बा। का आप किसान बानी? आप कवन राज्य में रहत बानी? ई बताईं त हम आपक खातिर सही योजना खोज सकत बानी।',
      notJustTranslation: 'सिर्फ अनुवाद नइखे — समझ बा',
      notJustTranslationDesc: 'साथी कठिन सरकारी भाषा के आसान शब्द में बदलत बा ताकि हर कोई समझ सके। ई जानकारी के सरल बनावत बा, सिर्फ भाषा नइखे बदलत।',
    },
    whatsNew: {
      title: 'का नया बा?',
      subtitle: 'सरकारी योजना आ नियम क नया अपडेट',
      listenUpdates: 'अपडेट सुनीं',
      newScheme: 'नई योजना',
      deadlineApproaching: 'अंतिम तिथि नज़दीक',
      ruleUpdated: 'नियम बदलल',
      eligibilityChanged: 'पात्रता बदलल',
      cards: [
        {
          type: 'newScheme',
          title: 'नई किसान योजना घोषित',
          description: 'केंद्र सरकार नई कृषि आधुनिकीकरण योजना शुरू कईने बा जेहि में किसान के आधुनिक उपकरण पर 50% तक सब्सिडी मिली।',
          date: '20 अगस्त 2025',
        },
        {
          type: 'deadlineApproaching',
          title: 'PMAY अंतिम तिथि 31 मार्च 2026',
          description: 'PMAY के तहत आवेदन क अंतिम तिथि 31 मार्च 2026 बा। पात्र परिवार जल्द आवेदन करीं।',
          date: '18 अगस्त 2025',
        },
        {
          type: 'ruleUpdated',
          title: 'पासपोर्ट नियम में बदलाव',
          description: 'अब नया पासपोर्ट आवेदन खातिर आधार आ जन्म प्रमाण पत्र के साथ-साथ केवल एक पता प्रमाण जरूरी बा — पहिले तीन चाहिए रहे।',
          date: '15 अगस्त 2025',
        },
        {
          type: 'eligibilityChanged',
          title: 'आयुष्मान भारत पात्रता बदलल',
          description: 'अब आउर जादा परिवार आयुष्मान भारत योजना खातिर पात्र बाड़े। नई सूची में 60+ साल क बिना पेंशन वाला परिवार भी शामिल बा।',
          date: '10 अगस्त 2025',
        },
      ],
    },
    safety: {
      title: 'सत्यापित जानकारी। आसान भाषा।',
      subtitle: 'साथी आपक भरोसा खातिर बनल बा',
      points: [
        'साथी आधिकारिक सरकारी स्रोत पर निर्भर करत बा।',
        'हर जरूरी परिणाम एक्को स्रोत के साथ देखावत बा।',
        'जानकारी के अंतिम बार कब जाँचल गेल — ई स्पष्ट रूप से देखाइल जात बा।',
        'जब जानकारी क पुष्टि नइखे हो सकत, ई स्पष्ट रूप से बताइल जात बा।',
        'साथी कानूनी रूप से बाध्यकारी सलाह नइखे देत।',
        'जरूरी फैसला खातिर आधिकारिक अधिकारी से जाँच करीं।',
      ],
      disclaimer: 'साथी एक्को प्रस्तुति प्रोटोटाइप बा। ई कानूनी रूप से बाध्यकारी सलाह नइखे देत। जरूरी जानकारी आधिकारिक सरकारी स्रोत से सत्यापित करीं।',
      footerLine: 'माने से पहिले, साथी से पूछीं।',
    },
    common: {
      back: 'वापस',
      close: 'बंद करीं',
      retry: 'फिर से कोशिश',
      loading: 'लोड होत बा…',
      saathiSays: 'साथी कहत बा',
      youSaid: 'आप कहलीं',
      listen: 'सुनीं',
      officialSource: 'आधिकारिक स्रोत',
      verifyNote: 'जरूरी: ई जानकारी आधिकारिक सरकारी स्रोत से सत्यापित करीं।',
      voiceFallback: 'आवाज़ सपोर्ट आपक डिवाइस पर अलग-अलग हो सकत बा। आप टेक्स्ट मोड में जारी रख सकत बानी।',
      langConfirm: 'साथी अब {lang} में बात करी।',
    },
  },

  awd: {
    nav: {
      home: 'घर',
      ask: 'साथी से पूछौ',
      yojana: 'योजना जाँचक',
      scan: 'स्कैन करौ औ समझौ',
      fee: 'सरकारी फीस अथवा रिश्वत?',
      rule: 'क्या यह नियम सच है?',
      whatsNew: 'क्या नया है?',
      safety: 'सुरक्षा और भरोसा',
    },
    home: {
      tagline: 'आपकै आवाज़। आपकै भाषा। आपकै अधिकार।',
      description: 'सरकारी जानकारी का उहि भाषा में समझौ जउन में आप बोलत हैं।',
      askButton: 'साथी से पूछौ',
      micLabel: 'बोलकै पूछौ',
      selectLanguage: 'भाषा चुनौ',
      featuresTitle: 'साथी आपकै कइसन मदद करत है',
      featuresSubtitle: 'हर जन का अपन अधिकार औ सरकारी सेवा क जानकारी मिलनी चाहिए',
      trustNote: 'साथी एक प्रोटोटाइप है। जरूरी जानकारी आधिकारिक सरकारी स्रोत से जाँच लौ।',
      heroGreeting: 'नमस्ते! हम साथी हौं। हम आपकै कइसन मदद कर सकत हौं?',
      welcomeMessage: 'नमस्ते! हम साथी हौं। आज हम आपकै कइसन मदद कर सकत हौं?',
    },
    features: {
      askSaathi: 'साथी से पूछौ',
      askSaathiDesc: 'आपकै आवाज़ से सवाल पूछौ, साथी जवाब देगै',
      yojana: 'आपकै खातिर योजना खोजौ',
      yojanaDesc: 'आपकै जरूरत के हिसाब से सरकारी योजना खोजौ',
      scan: 'स्कैन करौ औ समझौ',
      scanDesc: 'सरकारी दस्तावेज अथवा नोटिस क फोटो अपलोड करौ',
      fee: 'सरकारी फीस अथवा रिश्वत?',
      feeDesc: 'जाँचौ कि माँगा गया पइसा सरकारी फीस है या नाहीं',
      rule: 'क्या यह नियम सच है?',
      ruleDesc: 'सुनी बात का आधिकारिक जानकारी से जाँचौ',
      localLang: 'आपकै भाषा में बात करौ',
      localLangDesc: 'अवधी, हिन्दी, भोजपुरी — जउन बोलत हैं उहियै में जवाब पावौ',
      whatsNew: 'क्या नया है?',
      whatsNewDesc: 'सरकारी योजना औ नियम क नया अपडेट जानौ',
    },
    voice: {
      title: 'साथी से पूछौ',
      subtitle: 'बोलकै सवाल पूछौ — साथी आपकै भाषा में जवाब देगै',
      tapAndSpeak: 'दबावौ औ बोलौ',
      listening: 'साथी सुनत है…',
      thinking: 'साथी आधिकारिक जानकारी जाँचत है…',
      speaking: 'साथी बोलत है…',
      typeAlternative: 'अथवा टाइप करकै पूछौ',
      typePlaceholder: 'अपन सवाल इहाँ लिखौ…',
      sendButton: 'भेजौ',
      permissionDenied: 'माइक्रोफोन क अनुमति नाहीं मिली',
      permissionDeniedDesc: 'कृपया ब्राउज़र सेटिंग में जाकै माइक्रोफोन क अनुमति दौ ताकि साथी आपकै बात सुन सकै।',
      micNotSupported: 'आपकै ब्राउज़र वॉइस रिकग्निशन नाहीं सपोर्ट करत। कृपया क्रोम अथवा एज ब्राउज़र इस्तेमाल करौ।',
      stopListening: 'रोकौ',
      conversationStart: 'नमस्ते! हम साथी हौं। आज हम आपकै कइसन मदद कर सकत हौं? बोलै खातिर माइक्रोफोन बटन दबावौ।',
      trySaying: 'अथवा ये उदाहरण आज़मावौ:',
      exampleQuestions: [
        'हमरै खातिर कौन सी सरकारी योजना है?',
        'पत्ता खातिर कतना फीस लागत है?',
        'क्या यह सच है कि आधार जरूरी है?',
        'किसान खातिर कौन सी योजना है?',
      ],
    },
    yojana: {
      title: 'आपकै खातिर योजना खोजौ',
      subtitle: 'कुछ आसान सवाल क जवाब दौ औ अपनै खातिर सही योजना खोजौ',
      selectState: 'आपकै राज्य का है?',
      isFarmer: 'क्या आप किसान हैं?',
      yes: 'हाँ',
      no: 'नाहीं',
      selectAge: 'आपकै उम्र कतना है?',
      selectAgePlaceholder: 'उम्र चुनौ',
      whatHelp: 'आपकै कइसन मदद चाहिए?',
      findSchemes: 'योजना खोजौ',
      findingSchemes: 'आपकै खातिर योजना खोजत हौं…',
      resultsFound: 'योजना मिलीं',
      noResults: 'आपकै जानकारी के हिसाब से कोनो योजना नाहीं मिली। अलग-अलग विकल्प चुनकै कोशिश करौ।',
      categories: {
        agriculture: 'खेती औ किसान',
        education: 'पढ़ाई औ छात्रवृत्ति',
        housing: 'घर',
        health: 'सेहत',
        employment: 'रोज़गार',
        women: 'मेहरारू औ बच्चा कल्याण',
        pension: 'पेंशन',
        business: 'छोट कारोबार',
      },
      schemeName: 'योजना क नाम',
      simpleExplanation: 'आसान समझ',
      whoCanApply: 'कौन आवेदन कर सकत है',
      benefits: 'फायदा',
      documentsRequired: 'जरूरी दस्तावेज',
      deadline: 'अंतिम तिथि',
      officialInfo: 'आधिकारिक जानकारी',
      officiallyVerified: 'आधिकारिक जानकारी से सत्यापित',
      needsVerification: 'जाँच क जरूरत है',
      doesntMatch: 'उपलब्ध आधिकारिक जानकारी से मेल नाहीं खाता',
      lastChecked: 'अंतिम जाँच',
      schemes: [
        {
          name: 'प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)',
          category: 'agriculture',
          explanation: 'इ योजना में छोट औ सीमांत किसान परिवार का ₹6,000 साल आर्थिक मदद मिलत है, तीन किस्त में सीधा बैंक खाता में।',
          whoCanApply: 'जिनकै 2 हेक्टेयर तक जमीन है औ जे आयकर नाहीं देतैं।',
          benefits: 'साल में ₹6,000, तीन किस्त में — सीधा बैंक खाता में।',
          documents: ['आधार कार्ड', 'बैंक खाता विवरण', 'जमीन क कागज', 'मोबाइल नंबर'],
          deadline: 'लगातार — कबौ भी आवेदन करौ',
          verified: 'green',
        },
        {
          name: 'आयुष्मान भारत योजना',
          category: 'health',
          explanation: 'गरीब परिवार का साल में ₹5 लाख तक मुफ्त इलाज मिलत है — सरकारी औ निजी अस्पताल में।',
          whoCanApply: 'SECC के हिसाब से पात्र परिवार। आधार कार्ड जरूरी है।',
          benefits: 'साल में ₹5 लाख तक मुफ्त इलाज, कैशलेस औ पेपरलेस।',
          documents: ['आधार कार्ड', 'राशन कार्ड', 'पता प्रमाण', 'फोटो'],
          deadline: 'लगातार — कबौ भी पंजीकरण करौ',
          verified: 'green',
        },
        {
          name: 'प्रधानमंत्री आवास योजना (PMAY)',
          category: 'housing',
          explanation: 'गरीब परिवार का पक्का घर बनावै खातिर ₹1.2 लाख तक मदद मिलत है। शहर औ गाँव दुनौ खातिर अलग योजना है।',
          whoCanApply: 'जिनकै परिवार कै पक्का घर नाहीं है औ जे आय सीमा में आवत हैं।',
          benefits: '₹1.2 लाख तक आर्थिक मदद अथवा सब्सिडी पर घर लोन।',
          documents: ['आधार कार्ड', 'आय प्रमाण पत्र', 'जमीन क कागज', 'बैंक खाता विवरण'],
          deadline: '31 मार्च 2026',
          verified: 'green',
        },
        {
          name: 'राष्ट्रीय बेटी शिक्षा योजना',
          category: 'education',
          explanation: 'बेटी क पढ़ाई खातिर छात्रवृत्ति औ बैंक खाता में पइसा जमा होत है ताकि ऊ आगे पढ़ सकै।',
          whoCanApply: '10 से 18 साल क बेटी जे स्कूल में पढ़त है।',
          benefits: 'कक्षा 10 ले ₹3,000 औ कक्षा 12 ले ₹5,000 तक मदद।',
          documents: ['बेटी क आधार कार्ड', 'जन्म प्रमाण पत्र', 'स्कूल प्रमाण पत्र', 'बैंक खाता विवरण'],
          deadline: '30 सितंबर 2026',
          verified: 'yellow',
        },
        {
          name: 'मुद्रा लोन योजना',
          category: 'business',
          explanation: 'अपन छोट काम शुरू करै खातिर ₹50,000 से ₹10 लाख तक लोन, बिना जमानत कै।',
          whoCanApply: 'कोनौ भी जन जे छोट कारोबार शुरू करना चाहत है।',
          benefits: '₹50,000 (शिशु) से ₹10 लाख (तरुण) तक लोन, कम ब्याज पर।',
          documents: ['आधार कार्ड', 'कारोबार योजना', 'बैंक खाता विवरण', 'पता प्रमाण'],
          deadline: 'लगातार — बैंक में आवेदन करौ',
          verified: 'green',
        },
        {
          name: 'इंदिरा गांधी वृद्धावस्था पेंशन',
          category: 'pension',
          explanation: '60 साल से जादा उम्र क गरीब जन का महीना ₹200 पेंशन मिलत है। 80 साल क बाद ₹500।',
          whoCanApply: '60+ साल क जन जे BPL में आवत हैं।',
          benefits: 'महीना ₹200 (60+), ₹500 (80+)।',
          documents: ['आधार कार्ड', 'आय प्रमाण (BPL)', 'बैंक खाता विवरण', 'उम्र प्रमाण'],
          deadline: 'लगातार — कबौ भी आवेदन करौ',
          verified: 'green',
        },
        {
          name: 'MGNREGA (ग्रामीण रोज़गार गारंटी)',
          category: 'employment',
          explanation: 'गाँव में हर परिवार का साल में 100 दिन काम गारंटी से मिलत है।',
          whoCanApply: 'ग्रामीण इलाका क कोनौ भी बयस्क जे जॉब कार्ड बनवाना चाहत है।',
          benefits: 'साल में 100 दिन गारंटीड काम, न्यूनतम मज़दूरी पर।',
          documents: ['आधार कार्ड', 'फोटो', 'पता प्रमाण', 'बैंक खाता विवरण'],
          deadline: 'लगातार — ग्राम पंचायत में आवेदन करौ',
          verified: 'green',
        },
        {
          name: 'मातृ वंदना योजना',
          category: 'women',
          explanation: 'गर्भवती मेहरारू का पहिला बच्चा खातिर ₹5,000 औ दूसरा बच्चा खातिर भी आर्थिक मदद मिलत है।',
          whoCanApply: 'गर्भवती औ धात्री मेहरारू जे 19 साल से जादा उम्र क हैं।',
          benefits: '₹5,000 तक आर्थिक मदद, किस्त में।',
          documents: ['आधार कार्ड', 'माई औ पति क बैंक खाता', 'जन्म प्रमाण पत्र', 'MCP कार्ड'],
          deadline: 'लगातार — आंगनवाड़ी केंद्र पर आवेदन करौ',
          verified: 'yellow',
        },
      ],
    },
    scan: {
      title: 'स्कैन करौ औ समझौ',
      subtitle: 'सरकारी दस्तावेज अथवा नोटिस क फोटो अपलोड करौ — साथी आसान भाषा में समझावै',
      uploadDoc: 'दस्तावेज अपलोड करौ',
      takePhoto: 'फोटो लौ',
      scanNotice: 'नोटिस स्कैन करौ',
      analyzing: 'दस्तावेज क विश्लेषण होत है…',
      analyzingSteps: [
        'दस्तावेज स्कैन होत है…',
        'टेक्स्ट पहचाना जात है…',
        'जानकारी समझी जात है…',
        'आसान भाषा में समझाइल जात है…',
      ],
      simpleExplanation: 'आसान समझ',
      explanationText: 'इ नोटिस आपकै इलाका में बिजली काटै क बारे में है। बिजली विभाग 15 अक्टूबर का सुबह 9 बजे से दोपहर 2 बजे ले रखरखाव काम करै, जउन समय बिजली नाहीं रही।',
      importantDates: 'जरूरी तिथि',
      lastDate: 'अंतिम तिथि: 15 अक्टूबर 2025',
      whatToDo: 'आपकै का करना है',
      steps: [
        'अपन जरूरी काम (जइसे पानी भरना, मोबाइल चार्ज करना) उहि से पहिले निपट लौ।',
        'इन्वर्टर अथवा जनरेटर हो तो तैयार रखौ।',
        'आपातकालीन स्थिति खातिर बिजली विभाग क नंबर (1912) सेव रखौ।',
      ],
      documentsRequired: 'जरूरी दस्तावेज',
      docList: ['पहचान पत्र (आधार/वोटर आईडी)', 'पुराना बिजली बिल', 'नोटिस क एक कॉपी'],
      listenExplanation: 'समझाइल बात सुनौ',
      dragDrop: 'फोटो इहाँ खींचौ औ छोड़ौ',
      or: 'अथवा',
      sampleDocNote: 'डेमो खातिर: कोनौ भी फोटो अपलोड करौ अथवा नीचे दिल "विश्लेषण शुरू करौ" बटन पर क्लिक करौ।',
    },
    fee: {
      title: 'सरकारी फीस अथवा रिश्वत?',
      subtitle: 'जाँचौ कि माँगा गया पइसा सरकारी फीस है अथवा कुछ संदिग्ध',
      serviceName: 'सरकारी सेवा क नाम',
      serviceNamePlaceholder: 'जइसे: पत्ता नवीनीकरण',
      department: 'विभाग',
      departmentPlaceholder: 'जइसे: राजस्व विभाग',
      amount: 'माँगा गया राशि (₹)',
      amountPlaceholder: 'जइसे: 500',
      reason: 'भुगतान क कारण',
      reasonPlaceholder: 'जइसे: फाइल पास करावै खातिर',
      receiptOffered: 'क्या आपकै आधिकारिक रसीद दी गई?',
      receiptYes: 'हाँ, रसीद मिली',
      receiptNo: 'नाहीं, रसीद नाहीं मिली',
      checkButton: 'जाँच करौ',
      checking: 'जाँच होत है…',
      exampleTitle: 'उदाहरण',
      exampleText: 'कोनौ हमसे ₹500 माँगत है एक सरकारी सेवा खातिर। क्या ई आधिकारिक फीस है?',
      resultOfficial: 'आधिकारिक फीस',
      resultOfficialDesc: 'इ राशि उपलब्ध आधिकारिक फीस जानकारी से मेल खात है। केवल आधिकारिक भुगतान विधि से भुगतान करौ औ अपन रसीद रखौ।',
      resultVerification: 'जाँच क जरूरत है',
      resultVerificationDesc: 'हम इ भुगतान का उपलब्ध आधिकारिक जानकारी से पुष्टि नाहीं कर सकैं। भुगतान से पहिले आधिकारिक विभाग से जाँच करौ।',
      resultMismatch: 'उपलब्ध आधिकारिक जानकारी से मेल नाहीं खाता',
      resultMismatchDesc: 'इ माँगा गया राशि उपलब्ध आधिकारिक जानकारी से मेल नाहीं खाता। जब तक आप इकै आधिकारिक सरकारी चैनल से सत्यापित नाहीं करतैं, भुगतान नाहीं करौ।',
      findOfficialHelp: 'आधिकारिक मदद खोजौ',
      officialFeeInfo: 'उपलब्ध आधिकारिक फीस जानकारी',
    },
    rule: {
      title: 'क्या यह नियम सच है?',
      subtitle: 'सुनी बात का आधिकारिक जानकारी से जाँचौ',
      placeholder: 'जउन आप सुना है उकरा इहाँ लिखौ…',
      checkButton: 'जाँच करौ',
      checking: 'जाँच होत है…',
      exampleTitle: 'उदाहरण',
      exampleClaim: 'कोनौ हमसे कहलस कि ई सरकारी नियम है। क्या ई सच है?',
      claim: 'दावा',
      officialInfo: 'उपलब्ध आधिकारिक जानकारी',
      verificationStatus: 'सत्यापन स्थिति',
      source: 'स्रोत',
      lastChecked: 'अंतिम जाँच',
      verified: 'सत्यापित',
      needsVerification: 'जाँच क जरूरत है',
      doesntMatch: 'उपलब्ध आधिकारिक जानकारी से मेल नाहीं खाता',
      sampleClaims: [
        {
          claim: 'आधार कार्ड अब सब जगह जरूरी है — बिना आधार कै कोनौ काम नाहीं होगै।',
          info: 'आधार कई सरकारी सेवा खातिर जरूरी है, लेकिन सब जगह जरूरी नाहीं है। सुप्रीम कोर्ट कहलस कि आधार कुछ सेवा खातिर स्वैच्छिक रखा जा सकत है।',
          status: 'yellow',
          source: 'सुप्रीम कोर्ट फैसला औ भारत सरकार अधिसूचना',
        },
        {
          claim: 'किसान का बिना कोनौ शर्त कै साल में ₹6,000 मिलत है।',
          info: 'PM-KISAN योजना में पात्र किसान परिवार का ₹6,000 सालाना मिलत है। पात्रता शर्त है — जमीन क कागज औ आय सीमा।',
          status: 'yellow',
          source: 'pmkisan.gov.in',
        },
        {
          claim: 'राशन कार्ड खातिर आधार जरूरी है।',
          info: 'कई राज्य में राशन कार्ड से आधार लिंक करना जरूरी है, लेकिन ई राज्य-विशिष्ट है। कुछ राज्य में अभी भी विकल्प उपलब्ध हैं।',
          status: 'yellow',
          source: 'राज्य सरकार अधिसूचना',
        },
        {
          claim: 'ऑनलाइन बिजली बिल भरै पर छूट मिलत है।',
          info: 'कुछ राज्य में ऑनलाइन भुगतान पर 0.5% से 1% तक छूट मिलत है, लेकिन ई सब राज्य में लागू नाहीं है।',
          status: 'yellow',
          source: 'राज्य बिजली बोर्ड नियम',
        },
      ],
    },
    localLang: {
      title: 'आपकै भाषा में बात करौ',
      subtitle: 'साथी केवल अनुवाद नाहीं करत — ई जानकारी का आसान भाषा में समझावत है',
      exampleTitle: 'उदाहरण',
      userSays: 'उपयोगकर्ता बोलत है (अवधी में)',
      userSaysText: 'हमरै खातिर का योजना है?',
      saathiUnderstands: 'साथी समझत है औ जवाब देत है',
      saathiResponse: 'आपकै खातिर कई सरकारी योजना हैं। क्या आप किसान हैं? आप कवन राज्य में रहत हैं? ई बतावौ त हम आपकै खातिर सही योजना खोज सकत हौं।',
      notJustTranslation: 'सिर्फ अनुवाद नाहीं — समझ है',
      notJustTranslationDesc: 'साथी कठिन सरकारी भाषा का आसान शब्द में बदलत है ताकि हर कोई समझ सकै। ई जानकारी का सरल बनावत है, सिर्फ भाषा नाहीं बदलत।',
    },
    whatsNew: {
      title: 'क्या नया है?',
      subtitle: 'सरकारी योजना औ नियम क नया अपडेट',
      listenUpdates: 'अपडेट सुनौ',
      newScheme: 'नई योजना',
      deadlineApproaching: 'अंतिम तिथि नज़दीक',
      ruleUpdated: 'नियम बदला',
      eligibilityChanged: 'पात्रता बदली',
      cards: [
        {
          type: 'newScheme',
          title: 'नई किसान योजना घोषित',
          description: 'केंद्र सरकार नई कृषि आधुनिकीकरण योजना शुरू कईने है जउन में किसान का आधुनिक उपकरण पर 50% तक सब्सिडी मिली।',
          date: '20 अगस्त 2025',
        },
        {
          type: 'deadlineApproaching',
          title: 'PMAY अंतिम तिथि 31 मार्च 2026',
          description: 'PMAY के तहत आवेदन क अंतिम तिथि 31 मार्च 2026 है। पात्र परिवार जल्द आवेदन करौ।',
          date: '18 अगस्त 2025',
        },
        {
          type: 'ruleUpdated',
          title: 'पासपोर्ट नियम में बदलाव',
          description: 'अब नया पासपोर्ट आवेदन खातिर आधार औ जन्म प्रमाण पत्र के साथ-साथ केवल एक पता प्रमाण जरूरी है — पहिले तीन चाहिए रहे।',
          date: '15 अगस्त 2025',
        },
        {
          type: 'eligibilityChanged',
          title: 'आयुष्मान भारत पात्रता बदली',
          description: 'अब औ जादा परिवार आयुष्मान भारत योजना खातिर पात्र हैं। नई सूची में 60+ साल क बिना पेंशन वाला परिवार भी शामिल हैं।',
          date: '10 अगस्त 2025',
        },
      ],
    },
    safety: {
      title: 'सत्यापित जानकारी। आसान भाषा।',
      subtitle: 'साथी आपकै भरोसा खातिर बनल है',
      points: [
        'साथी आधिकारिक सरकारी स्रोत पर निर्भर करत है।',
        'हर जरूरी परिणाम एक स्रोत के साथ देखावत है।',
        'जानकारी का अंतिम बार कब जाँचा गया — ई स्पष्ट रूप से देखाइल जात है।',
        'जब जानकारी क पुष्टि नाहीं हो सकत, ई स्पष्ट रूप से बताइल जात है।',
        'साथी कानूनी रूप से बाध्यकारी सलाह नाहीं देत।',
        'जरूरी फैसला खातिर आधिकारिक अधिकारी से जाँच करौ।',
      ],
      disclaimer: 'साथी एक प्रस्तुति प्रोटोटाइप है। ई कानूनी रूप से बाध्यकारी सलाह नाहीं देत। जरूरी जानकारी आधिकारिक सरकारी स्रोत से सत्यापित करौ।',
      footerLine: 'मानै से पहिले, साथी से पूछौ।',
    },
    common: {
      back: 'वापस',
      close: 'बंद करौ',
      retry: 'फिर से कोशिश',
      loading: 'लोड होत है…',
      saathiSays: 'साथी कहत है',
      youSaid: 'आप कहलैं',
      listen: 'सुनौ',
      officialSource: 'आधिकारिक स्रोत',
      verifyNote: 'जरूरी: इ जानकारी आधिकारिक सरकारी स्रोत से सत्यापित करौ।',
      voiceFallback: 'आवाज़ सपोर्ट आपकै डिवाइस पर अलग-अलग हो सकत है। आप टेक्स्ट मोड में जारी रख सकत हैं।',
      langConfirm: 'साथी अब {lang} में बात करी।',
    },
  },
};
