import type { Translation, LanguageCode } from './translations';
import { translations } from './translations';

// Helper: build a full Translation by overriding UI strings and reusing Hindi scheme/scan/whatsNew data
function buildTranslation(uiOverrides: Partial<Translation>, langName: string): Translation {
  const hi = translations.hi;
  const base: Translation = JSON.parse(JSON.stringify(hi));
  const result = { ...base, ...uiOverrides };
  // Set langConfirm with the language name
  if (!uiOverrides.common) {
    result.common = { ...base.common };
  }
  result.common = { ...result.common, langConfirm: result.common.langConfirm.replace('{lang}', langName) };
  return result;
}

const mr: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: {
    home: 'मुख्यपृष्ठ', ask: 'साथीला विचारा', yojana: 'योजना तपासक',
    scan: 'स्कॅन करा आणि समजून घ्या', fee: 'सरकारी फी की घूस?', rule: 'हा नियम खरा आहे का?',
    whatsNew: 'नावीन्य काय?', safety: 'सुरक्षा आणि विश्वास',
  },
  home: {
    tagline: 'तुमचा आवाज. तुमची भाषा. तुमचे अधिकार.',
    description: 'सरकारी माहिती तुमच्या भाषेत समजून घ्या.',
    askButton: 'साथीला विचारा', micLabel: 'बोलून विचारा',
    selectLanguage: 'भाषा निवडा',
    featuresTitle: 'साथी तुमची कशी मदत करतो',
    featuresSubtitle: 'प्रत्येकाला आपले अधिकार आणि सरकारी सेवांची माहिती मिळायला हवी',
    trustNote: 'साथी हा एक प्रोटोटाइप आहे. महत्त्वाची माहिती अधिकृत सरकारी स्रोतांकडून सत्यापित करा.',
    heroGreeting: 'नमस्कार! मी साथी आहे. मी तुमची कशी मदत करू शकतो?',
    welcomeMessage: 'नमस्कार! मी साथी आहे. आज मी तुमची कशी मदत करू शकतो?',
  },
  features: {
    askSaathi: 'साथीला विचारा', askSaathiDesc: 'आवाजाने प्रश्न विचारा, साथी उत्तर देईल',
    yojana: 'तुमच्यासाठी योजना शोधा', yojanaDesc: 'तुमच्या गरजेनुसार सरकारी योजना शोधा',
    scan: 'स्कॅन करा आणि समजून घ्या', scanDesc: 'सरकारी दस्तावेज किंवा नोटीसचा फोटो अपलोड करा',
    fee: 'सरकारी फी की घूस?', feeDesc: 'वसूल केलेले पैसे सरकारी फी आहे का ते तपासा',
    rule: 'हा नियम खरा आहे का?', ruleDesc: 'ऐकलेल्या गोष्टी अधिकृत माहितीसह तपासा',
    localLang: 'तुमच्या भाषेत बोला', localLangDesc: 'मराठी, हिंदी, भोजपुरी — जी भाषा तुम्ही बोलता त्यात उत्तर मिळवा',
    whatsNew: 'नावीन्य काय?', whatsNewDesc: 'सरकारी योजना आणि नियमांचे नवीन अपडेट जाणून घ्या',
  },
  voice: {
    title: 'साथीला विचारा', subtitle: 'बोलून प्रश्न विचारा — साथी तुमच्या भाषेत उत्तर देईल',
    tapAndSpeak: 'दाबा आणि बोला', listening: 'साथी ऐकत आहे…',
    thinking: 'साथी अधिकृत माहिती तपासत आहे…', speaking: 'साथी बोलत आहे…',
    typeAlternative: 'किंवा टाईप करून विचारा', typePlaceholder: 'तुमचा प्रश्न येथे लिहा…',
    sendButton: 'पाठवा', permissionDenied: 'मायक्रोफोन परवानगी नाकारली',
    permissionDeniedDesc: 'कृपया ब्राउझर सेटिंग्जमध्ये मायक्रोफोन परवानगी द्या जेणेकरून साथी तुम्हाला ऐकू शकेल.',
    micNotSupported: 'तुमचा ब्राउझर व्हॉइस रिकग्निशन सपोर्ट करत नाही. कृपया क्रोम किंवा एज ब्राउझर वापरा.',
    stopListening: 'थांबवा',
    conversationStart: 'नमस्कार! मी साथी आहे. आज मी तुमची कशी मदत करू शकतो? बोलण्यासाठी मायक्रोफोन बटण दाबा.',
    trySaying: 'किंवा हे उदाहरण वापरून पाहा:',
    exampleQuestions: ['माझ्यासाठी कोणती सरकारी योजना आहे?', 'पत्त्यासाठी किती फी लागते?', 'आधार कार्ड सक्तीचे आहे हे खरे आहे का?', 'शेतकऱ्यांसाठी कोणती योजना आहे?'],
  },
  yojana: {
    ...JSON.parse(JSON.stringify(translations.hi.yojana)),
    title: 'तुमच्यासाठी योजना शोधा', subtitle: 'काही सोप्या प्रश्नांची उत्तरे द्या आणि योगना शोधा',
    selectState: 'तुमचे राज्य कोणते?', isFarmer: 'तुम्ही शेतकरी आहात का?',
    yes: 'होय', no: 'नाही', selectAge: 'तुमचे वय किती?', selectAgePlaceholder: 'वय निवडा',
    whatHelp: 'तुम्हाला कोणत्या प्रकारची मदत हवी आहे?', findSchemes: 'योजना शोधा',
    findingSchemes: 'तुमच्यासाठी योजना शोधत आहे…', resultsFound: 'योजना सापडल्या',
    noResults: 'तुमच्या माहितीनुसार कोणतीही योजना सापडली नाही. वेगळे पर्याय निवडून प्रयत्न करा.',
  },
  scan: {
    ...JSON.parse(JSON.stringify(translations.hi.scan)),
    title: 'स्कॅन करा आणि समजून घ्या', subtitle: 'सरकारी दस्तावेज किंवा नोटीसचा फोटो अपलोड करा — साथी सोप्या भाषेत समजावून सांगेल',
    uploadDoc: 'दस्तावेज अपलोड करा', takePhoto: 'फोटो घ्या', scanNotice: 'नोटीस स्कॅन करा',
    analyzing: 'दस्तावेज विश्लेषण होत आहे…',
    simpleExplanation: 'सोपी समज', importantDates: 'महत्त्वाच्या तारखा', whatToDo: 'तुम्हाला काय करावे लागेल',
    documentsRequired: 'आवश्यक दस्तावेज', listenExplanation: 'स्पष्टीकरण ऐका',
    dragDrop: 'फोटो येथे खेचा आणि सोडा', or: 'किंवा',
  },
  fee: {
    ...JSON.parse(JSON.stringify(translations.hi.fee)),
    title: 'सरकारी फी की घूस?', subtitle: 'वसूल केलेले पैसे सरकारी फी आहेत का ते तपासा',
    serviceName: 'सरकारी सेवेचे नाव', department: 'विभाग', amount: 'मागणी केलेली रक्कम (₹)',
    reason: 'पेमेंटचे कारण', receiptOffered: 'तुम्हाला अधिकृत पावती देण्यात आली का?',
    receiptYes: 'होय, पावती मिळाली', receiptNo: 'नाही, पावती मिळाली नाही',
    checkButton: 'तपासा', checking: 'तपासत आहे…', findOfficialHelp: 'अधिकृत मदत शोधा',
  },
  rule: {
    ...JSON.parse(JSON.stringify(translations.hi.rule)),
    title: 'हा नियम खरा आहे का?', subtitle: 'ऐकलेली गोष्ट अधिकृत माहितीसह तपासा',
    placeholder: 'तुम्ही ऐकलेले येथे लिहा…', checkButton: 'तपासा', checking: 'तपासत आहे…',
    claim: 'दावा', officialInfo: 'उपलब्ध अधिकृत माहिती', verificationStatus: 'सत्यापन स्थिती',
    source: 'स्रोत', lastChecked: 'शेवटी तपासले', verified: 'सत्यापित',
    needsVerification: 'तपासणी आवश्यक', doesntMatch: 'उपलब्ध अधिकृत माहितीशी जुळत नाही',
  },
  localLang: {
    ...JSON.parse(JSON.stringify(translations.hi.localLang)),
    title: 'तुमच्या भाषेत बोला', subtitle: 'साथी फक्त भाषांतर करत नाही — माहिती सोप्या भाषेत समजावून सांगतो',
    notJustTranslation: 'फक्त भाषांतर नाही — खरी समज', notJustTranslationDesc: 'साथी कठीण सरकारी भाषा सोप्या शब्दांत बदलतो जेणेकरून प्रत्येकाला समजेल.',
  },
  whatsNew: {
    ...JSON.parse(JSON.stringify(translations.hi.whatsNew)),
    title: 'नावीन्य काय?', subtitle: 'सरकारी योजना आणि नियमांचे नवीन अपडेट', listenUpdates: 'अपडेट ऐका',
  },
  safety: {
    ...JSON.parse(JSON.stringify(translations.hi.safety)),
    title: 'सत्यापित माहिती. सोपी भाषा.', subtitle: 'साथी तुमच्या विश्वासासाठी बनला आहे',
    footerLine: 'विश्वास ठेवण्यापूर्वी, साथीला विचारा.',
  },
  common: {
    ...JSON.parse(JSON.stringify(translations.hi.common)),
    back: 'मागे', close: 'बंद करा', retry: 'पुन्हा प्रयत्न', loading: 'लोड होत आहे…',
    saathiSays: 'साथी म्हणतो', youSaid: 'तुम्ही म्हणालात', listen: 'ऐका',
    officialSource: 'अधिकृत स्रोत', verifyNote: 'महत्त्वाचे: ही माहिती अधिकृत सरकारी स्रोतांकडून सत्यापित करा.',
    voiceFallback: 'आवाज सपोर्ट तुमच्या डिवाइसवर बदलू शकतो. तुम्ही टेक्स्ट मोडमध्ये सुरु ठेवू शकता.',
    langConfirm: 'साथी आता मराठी मध्ये बोलेल.',
  },
};

const bn: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: {
    home: 'হোম', ask: 'সাথীকে জিজ্ঞাসা করুন', yojana: 'যোজনা যাচাইকারী',
    scan: 'স্ক্যান করুন এবং বুঝুন', fee: 'সরকারি ফি না ঘুষ?', rule: 'এই নিয়ম কি সত্যি?',
    whatsNew: 'কী নতুন?', safety: 'নিরাপত্তা ও বিশ্বাস',
  },
  home: {
    tagline: 'আপনার কণ্ঠ. আপনার ভাষা. আপনার অধিকার.',
    description: 'যে ভাষায় আপনি কথা বলেন সেই ভাষায় সরকারি তথ্য বুঝুন।',
    askButton: 'সাথীকে জিজ্ঞাসা করুন', micLabel: 'বলে জিজ্ঞাসা করুন',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    featuresTitle: 'সাথী আপনাকে কীভাবে সাহায্য করে',
    featuresSubtitle: 'প্রত্যেকেরই তার অধিকার এবং সরকারি পরিষেবা সম্পর্কে জানার অধিকার রয়েছে',
    trustNote: 'সাথী একটি প্রোটোটাইপ। গুরুত্বপূর্ণ তথ্য অফিসিয়াল সরকারি উৎস থেকে যাচাই করুন।',
    heroGreeting: 'নমস্কার! আমি সাথী। আমি কীভাবে আপনাকে সাহায্য করতে পারি?',
    welcomeMessage: 'নমস্কার! আমি সাথী। আজ আমি কীভাবে আপনাকে সাহায্য করতে পারি?',
  },
  features: {
    askSaathi: 'সাথীকে জিজ্ঞাসা করুন', askSaathiDesc: 'কণ্ঠে প্রশ্ন করুন, সাথী উত্তর দেবে',
    yojana: 'আপনার জন্য যোজনা খুঁজুন', yojanaDesc: 'আপনার প্রয়োজন অনুযায়ী সরকারি যোজনা খুঁজুন',
    scan: 'স্ক্যান করুন এবং বুঝুন', scanDesc: 'সরকারি নথি বা নোটিশের ছবি আপলোড করুন',
    fee: 'সরকারি ফি না ঘুষ?', feeDesc: 'আদায়কৃত টাকা সরকারি ফি কিনা তা যাচাই করুন',
    rule: 'এই নিয়ম কি সত্যি?', ruleDesc: 'শোনা কথা অফিসিয়াল তথ্যের সাথে যাচাই করুন',
    localLang: 'আপনার ভাষায় কথা বলুন', localLangDesc: 'বাংলা, হিন্দি, ভোজপুরি — যে ভাষায় কথা বলেন সেই ভাষায় উত্তর পান',
    whatsNew: 'কী নতুন?', whatsNewDesc: 'সরকারি যোজনা এবং নিয়মের নতুন আপডেট জানুন',
  },
  voice: {
    title: 'সাথীকে জিজ্ঞাসা করুন', subtitle: 'বলে প্রশ্ন করুন — সাথী আপনার ভাষায় উত্তর দেবে',
    tapAndSpeak: 'চেপে ধরুন এবং বলুন', listening: 'সাথী শুনছে…',
    thinking: 'সাথী অফিসিয়াল তথ্য যাচাই করছে…', speaking: 'সাথী বলছে…',
    typeAlternative: 'অথবা টাইপ করে জিজ্ঞাসা করুন', typePlaceholder: 'আপনার প্রশ্ন এখানে লিখুন…',
    sendButton: 'পাঠান', permissionDenied: 'মাইক্রোফোন অনুমতি অস্বীকৃত',
    permissionDeniedDesc: 'ব্রাউজার সেটিংসে মাইক্রোফোন অনুমতি দিন যাতে সাথী আপনাকে শুনতে পারে।',
    micNotSupported: 'আপনার ব্রাউজার ভয়েস রিকগনিশন সমর্থন করে না। ক্রোম বা এজ ব্রাউজার ব্যবহার করুন।',
    stopListening: 'থামুন',
    conversationStart: 'নমস্কার! আমি সাথী। আজ আমি কীভাবে আপনাকে সাহায্য করতে পারি? বলতে মাইক্রোফোন বোতাম চাপুন।',
    trySaying: 'অথবা এই উদাহরণগুলি চেষ্টা করুন:',
    exampleQuestions: ['আমার জন্য কোন সরকারি যোজনা আছে?', 'লিজ ফি কত?', 'আধার বাধ্যতামূলক এটা কি সত্যি?', 'কৃষকদের জন্য কোন যোজনা আছে?'],
  },
  yojana: {
    ...JSON.parse(JSON.stringify(translations.hi.yojana)),
    title: 'আপনার জন্য যোজনা খুঁজুন', subtitle: 'কিছু সহজ প্রশ্নের উত্তর দিন এবং যোজনা খুঁজুন',
    selectState: 'আপনার রাজ্য কী?', isFarmer: 'আপনি কি কৃষক?',
    yes: 'হ্যাঁ', no: 'না', selectAge: 'আপনার বয়স কত?', selectAgePlaceholder: 'বয়স নির্বাচন',
    whatHelp: 'আপনার কী ধরনের সাহায্য দরকার?', findSchemes: 'যোজনা খুঁজুন',
    findingSchemes: 'আপনার জন্য যোজনা খুঁজছি…', resultsFound: 'যোজনা পাওয়া গেছে',
    noResults: 'আপনার তথ্য অনুযায়ী কোনো যোজনা পাওয়া যায়নি। অন্য বিকল্প বেছে নিয়ে চেষ্টা করুন।',
  },
  scan: {
    ...JSON.parse(JSON.stringify(translations.hi.scan)),
    title: 'স্ক্যান করুন এবং বুঝুন', subtitle: 'সরকারি নথি বা নোটিশের ছবি আপলোড করুন — সাথী সহজ ভাষায় ব্যাখ্যা করবে',
    uploadDoc: 'নথি আপলোড করুন', takePhoto: 'ছবি নিন', scanNotice: 'নোটিশ স্ক্যান করুন',
    analyzing: 'নথি বিশ্লেষণ হচ্ছে…',
    simpleExplanation: 'সহজ ব্যাখ্যা', importantDates: 'গুরুত্বপূর্ণ তারিখ', whatToDo: 'আপনার যা করা উচিত',
    documentsRequired: 'প্রয়োজনীয় নথি', listenExplanation: 'ব্যাখ্যা শুনুন',
    dragDrop: 'ছবি এখানে টেনে আনুন', or: 'অথবা',
  },
  fee: {
    ...JSON.parse(JSON.stringify(translations.hi.fee)),
    title: 'সরকারি ফি না ঘুষ?', subtitle: 'আদায়কৃত টাকা সরকারি ফি কিনা তা যাচাই করুন',
    serviceName: 'সরকারি পরিষেবার নাম', department: 'বিভাগ', amount: 'অনুরোধকৃত পরিমাণ (₹)',
    reason: 'পেমেন্টের কারণ', receiptOffered: 'আপনাকে কি অফিসিয়াল রসিদ দেওয়া হয়েছে?',
    receiptYes: 'হ্যাঁ, রসিদ পেয়েছি', receiptNo: 'না, রসিদ পাইনি',
    checkButton: 'যাচাই করুন', checking: 'যাচাই হচ্ছে…', findOfficialHelp: 'অফিসিয়াল সাহায্য খুঁজুন',
  },
  rule: {
    ...JSON.parse(JSON.stringify(translations.hi.rule)),
    title: 'এই নিয়ম কি সত্যি?', subtitle: 'শোনা কথা অফিসিয়াল তথ্যের সাথে যাচাই করুন',
    placeholder: 'আপনি যা শুনেছেন তা এখানে লিখুন…', checkButton: 'যাচাই করুন', checking: 'যাচাই হচ্ছে…',
    claim: 'দাবি', officialInfo: 'উপলব্ধ অফিসিয়াল তথ্য', verificationStatus: 'যাচাই অবস্থা',
    source: 'উৎস', lastChecked: 'শেষ যাচাই', verified: 'যাচাইকৃত',
    needsVerification: 'যাচাই প্রয়োজন', doesntMatch: 'উপলব্ধ অফিসিয়াল তথ্যের সাথে মেলে না',
  },
  localLang: {
    ...JSON.parse(JSON.stringify(translations.hi.localLang)),
    title: 'আপনার ভাষায় কথা বলুন', subtitle: 'সাথী শুধু অনুবাদ করে না — তথ্য সহজ ভাষায় ব্যাখ্যা করে',
    notJustTranslation: 'শুধু অনুবাদ নয় — আসল বোঝাপড়া', notJustTranslationDesc: 'সাথী কঠিন সরকারি ভাষাকে সহজ শব্দে রূপান্তর করে যাতে সবাই বুঝতে পারে।',
  },
  whatsNew: {
    ...JSON.parse(JSON.stringify(translations.hi.whatsNew)),
    title: 'কী নতুন?', subtitle: 'সরকারি যোজনা এবং নিয়মের নতুন আপডেট', listenUpdates: 'আপডেট শুনুন',
  },
  safety: {
    ...JSON.parse(JSON.stringify(translations.hi.safety)),
    title: 'যাচাইকৃত তথ্য. সহজ ভাষা.', subtitle: 'সাথী আপনার বিশ্বাসের জন্য তৈরি',
    footerLine: 'বিশ্বাস করার আগে, সাথীকে জিজ্ঞাসা করুন।',
  },
  common: {
    ...JSON.parse(JSON.stringify(translations.hi.common)),
    back: 'পিছনে', close: 'বন্ধ করুন', retry: 'আবার চেষ্টা', loading: 'লোড হচ্ছে…',
    saathiSays: 'সাথী বলছে', youSaid: 'আপনি বলেছেন', listen: 'শুনুন',
    officialSource: 'অফিসিয়াল উৎস', verifyNote: 'গুরুত্বপূর্ণ: এই তথ্য অফিসিয়াল সরকারি উৎস থেকে যাচাই করুন।',
    voiceFallback: 'আপনার ডিভাইসে ভয়েস সাপোর্ট ভিন্ন হতে পারে। আপনি টেক্সট মোডে চালিয়ে যেতে পারেন।',
    langConfirm: 'সাথী এখন বাংলায় কথা বলবে।',
  },
};

const gu: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: {
    home: 'હોમ', ask: 'સાથીને પૂછો', yojana: 'યોજના ચકાસણી',
    scan: 'સ્કેન કરો અને સમજો', fee: 'સરકારી ફી કે રિશ્વત?', rule: 'શું આ નિયમ સાચો છે?',
    whatsNew: 'નવું શું છે?', safety: 'સુરક્ષા અને વિશ્વાસ',
  },
  home: {
    tagline: 'તમારો અવાજ. તમારી ભાષા. તમારા અધિકાર.',
    description: 'જે ભાષામાં તમે બોલો તે ભાષામાં સરકારી માહિતી સમજો.',
    askButton: 'સાથીને પૂછો', micLabel: 'બોલીને પૂછો',
    selectLanguage: 'ભાષા પસંદ કરો',
    featuresTitle: 'સાથી તમારી કેવી રીતે મદદ કરે છે',
    featuresSubtitle: 'દરેક વ્યક્તિને પોતાના અધિકારો અને સરકારી સેવાઓની માહિતી મળવી જોઈએ',
    trustNote: 'સાથી એક પ્રોટોટાઇપ છે. મહત્વની માહિતી અધિકૃત સરકારી સ્ત્રોતમાંથી ચકાસો.',
    heroGreeting: 'નમસ્તે! હું સાથી છું. હું તમારી કેવી રીતે મદદ કરી શકું?',
    welcomeMessage: 'નમસ્તે! હું સાથી છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?',
  },
  features: {
    askSaathi: 'સાથીને પૂછો', askSaathiDesc: 'અવાજથી પ્રશ્ન પૂછો, સાથી જવાબ આપશે',
    yojana: 'તમારા માટે યોજનાઓ શોધો', yojanaDesc: 'તમારી જરૂરિયાત મુજબ સરકારી યોજનાઓ શોધો',
    scan: 'સ્કેન કરો અને સમજો', scanDesc: 'સરકારી દસ્તાવેજ કે નોટિસનો ફોટો અપલોડ કરો',
    fee: 'સરકારી ફી કે રિશ્વત?', feeDesc: 'વસૂલાયેલા પૈસા સરકારી ફી છે કે નહીં તે ચકાસો',
    rule: 'શું આ નિયમ સાચો છે?', ruleDesc: 'સાંભળેલી વાત અધિકૃત માહિતી સાથે ચકાસો',
    localLang: 'તમારી ભાષામાં વાત કરો', localLangDesc: 'ગુજરાતી, હિન્દી, ભોજપુરી — જે ભાષા બોલો તેમાં જવાબ મેળવો',
    whatsNew: 'નવું શું છે?', whatsNewDesc: 'સરકારી યોજનાઓ અને નિયમોના નવા અપડેટ જાણો',
  },
  voice: {
    title: 'સાથીને પૂછો', subtitle: 'બોલીને પ્રશ્ન પૂછો — સાથી તમારી ભાષામાં જવાબ આપશે',
    tapAndSpeak: 'દબાવો અને બોલો', listening: 'સાથી સાંભળી રહ્યું છે…',
    thinking: 'સાથી અધિકૃત માહિતી ચકાસી રહ્યું છે…', speaking: 'સાથી બોલી રહ્યું છે…',
    typeAlternative: 'અથવા ટાઇપ કરીને પૂછો', typePlaceholder: 'તમારો પ્રશ્ન અહીં લખો…',
    sendButton: 'મોકલો', permissionDenied: 'માઇક્રોફોન પરવાનગી નકારી',
    permissionDeniedDesc: 'બ્રાઉઝર સેટિંગ્સમાં માઇક્રોફોન પરવાનગી આપો જેથી સાથી તમને સાંભળી શકે.',
    micNotSupported: 'તમારું બ્રાઉઝર વૉઇસ રિકગ્નિશન સપોર્ટ કરતું નથી. ક્રોમ અથવા એજ બ્રાઉઝર વાપરો.',
    stopListening: 'રોકો',
    conversationStart: 'નમસ્તે! હું સાથી છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું? બોલવા માટે માઇક્રોફોન બટન દબાવો.',
    trySaying: 'અથવા આ ઉદાહરણો અજમાવો:',
    exampleQuestions: ['મારા માટે કઈ સરકારી યોજના છે?', 'લીઝ માટે કેટલી ફી છે?', 'આધાર કાર્ડ ફરજિયાત છે એ સાચું છે?', 'ખેડૂતો માટે કઈ યોજના છે?'],
  },
  yojana: {
    ...JSON.parse(JSON.stringify(translations.hi.yojana)),
    title: 'તમારા માટે યોજનાઓ શોધો', subtitle: 'કેટલાક સરળ પ્રશ્નોના જવાબ આપો અને યોજનાઓ શોધો',
    selectState: 'તમારું રાજ્ય કયું છે?', isFarmer: 'શું તમે ખેડૂત છો?',
    yes: 'હા', no: 'ના', selectAge: 'તમારી ઉંમર કેટલી છે?', selectAgePlaceholder: 'ઉંમર પસંદ કરો',
    whatHelp: 'તમને કેવા પ્રકારની મદદ જોઈએ છે?', findSchemes: 'યોજનાઓ શોધો',
    findingSchemes: 'તમારા માટે યોજનાઓ શોધી રહ્યા છીએ…', resultsFound: 'યોજનાઓ મળી',
    noResults: 'તમારી માહિતી મુજબ કોઈ યોજના મળી નથી. અલગ વિકલ્પ પસંદ કરીને પ્રયાસ કરો.',
  },
  scan: {
    ...JSON.parse(JSON.stringify(translations.hi.scan)),
    title: 'સ્કેન કરો અને સમજો', uploadDoc: 'દસ્તાવેજ અપલોડ કરો', takePhoto: 'ફોટો લો', scanNotice: 'નોટિસ સ્કેન કરો',
    analyzing: 'દસ્તાવેજ વિશ્લેષણ થાય છે…', simpleExplanation: 'સરળ સમજૂતી',
    importantDates: 'મહત્વની તારીખો', whatToDo: 'તમારે શું કરવાનું છે',
    documentsRequired: 'જરૂરી દસ્તાવેજ', listenExplanation: 'સમજૂતી સાંભળો',
    dragDrop: 'ફોટો અહીં ખેંચો અને મૂકો', or: 'અથવા',
  },
  fee: {
    ...JSON.parse(JSON.stringify(translations.hi.fee)),
    title: 'સરકારી ફી કે રિશ્વત?', serviceName: 'સરકારી સેવાનું નામ', department: 'વિભાગ',
    amount: 'માંગવામાં આવેલી રકમ (₹)', reason: 'ચુકવણીનું કારણ',
    receiptOffered: 'શું તમને અધિકૃત રસીદ આપવામાં આવી?', receiptYes: 'હા, રસીદ મળી', receiptNo: 'ના, રસીદ નથી મળી',
    checkButton: 'ચકાસો', checking: 'ચકાસી રહ્યા છીએ…', findOfficialHelp: 'અધિકૃત મદદ શોધો',
  },
  rule: {
    ...JSON.parse(JSON.stringify(translations.hi.rule)),
    title: 'શું આ નિયમ સાચો છે?', placeholder: 'તમે જે સાંભળ્યું છે તે અહીં લખો…',
    checkButton: 'ચકાસો', checking: 'ચકાસી રહ્યા છીએ…', claim: 'દાવો',
    officialInfo: 'ઉપલબ્ધ અધિકૃત માહિતી', verificationStatus: 'ચકાસણી સ્થિતિ',
    source: 'સ્ત્રોત', lastChecked: 'છેલ્લી ચકાસણી', verified: 'ચકાસાયેલ',
    needsVerification: 'ચકાસણી જરૂરી', doesntMatch: 'ઉપલબ્ધ અધિકૃત માહિતી સાથે બંધબેસતું નથી',
  },
  localLang: {
    ...JSON.parse(JSON.stringify(translations.hi.localLang)),
    title: 'તમારી ભાષામાં વાત કરો', subtitle: 'સાથી માત્ર અનુવાદ કરતું નથી — માહિતીને સરળ ભાષામાં સમજાવે છે',
    notJustTranslation: 'માત્ર અનુવાદ નહીં — સાચી સમજ', notJustTranslationDesc: 'સાથી કઠિન સરકારી ભાષાને સરળ શબ્દોમાં ફેરવે છે જેથી દરેક સમજી શકે.',
  },
  whatsNew: {
    ...JSON.parse(JSON.stringify(translations.hi.whatsNew)),
    title: 'નવું શું છે?', listenUpdates: 'અપડેટ સાંભળો',
  },
  safety: {
    ...JSON.parse(JSON.stringify(translations.hi.safety)),
    title: 'ચકાસાયેલ માહિતી. સરળ ભાષા.', footerLine: 'માનવાના પહેલા, સાથીને પૂછો.',
  },
  common: {
    ...JSON.parse(JSON.stringify(translations.hi.common)),
    back: 'પાછળ', close: 'બંધ કરો', retry: 'ફરી પ્રયાસ', loading: 'લોડ થાય છે…',
    saathiSays: 'સાથી કહે છે', youSaid: 'તમે કહ્યું', listen: 'સાંભળો',
    officialSource: 'અધિકૃત સ્ત્રોત', verifyNote: 'મહત્વની: આ માહિતી અધિકૃત સરકારી સ્ત્રોતમાંથી ચકાસો.',
    voiceFallback: 'તમારા ડિવાઇસ પર વૉઇસ સપોર્ટ અલગ હોઈ શકે છે. તમે ટેક્સ્ટ મોડમાં ચાલુ રાખી શકો છો.',
    langConfirm: 'સાથી હવે ગુજરાતીમાં બોલશે.',
  },
};

const pa: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: {
    home: 'ਹੋਮ', ask: 'ਸਾਥੀ ਨੂੰ ਪੁੱਛੋ', yojana: 'ਯੋਜਨਾ ਜਾਂਚਕ',
    scan: 'ਸਕੈਨ ਕਰੋ ਅਤੇ ਸਮਝੋ', fee: 'ਸਰਕਾਰੀ ਫੀਸ ਜਾਂ ਰਿਸ਼ਵਤ?', rule: 'ਕੀ ਇਹ ਨਿਯਮ ਸੱਚ ਹੈ?',
    whatsNew: 'ਕੀ ਨਵਾਂ ਹੈ?', safety: 'ਸੁਰੱਖਿਆ ਅਤੇ ਭਰੋਸਾ',
  },
  home: {
    tagline: 'ਤੁਹਾਡੀ ਆਵਾਜ਼. ਤੁਹਾਡੀ ਭਾਸ਼ਾ. ਤੁਹਾਡੇ ਹੱਕ.',
    description: 'ਜਿਸ ਭਾਸ਼ਾ ਵਿੱਚ ਤੁਸੀਂ ਬੋਲਦੇ ਹੋ ਉਸ ਵਿੱਚ ਸਰਕਾਰੀ ਜਾਣਕਾਰੀ ਸਮਝੋ।',
    askButton: 'ਸਾਥੀ ਨੂੰ ਪੁੱਛੋ', micLabel: 'ਬੋਲ ਕੇ ਪੁੱਛੋ',
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    featuresTitle: 'ਸਾਥੀ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰਦਾ ਹੈ',
    featuresSubtitle: 'ਹਰ ਵਿਅਕਤੀ ਨੂੰ ਆਪਣੇ ਹੱਕਾਂ ਅਤੇ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਮਿਲਣੀ ਚਾਹੀਦੀ ਹੈ',
    trustNote: 'ਸਾਥੀ ਇੱਕ ਪ੍ਰੋਟੋਟਾਈਪ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਸਰੋਤਾਂ ਤੋਂ ਜਾਂਚੋ।',
    heroGreeting: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਸਾਥੀ ਹਾਂ। ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    welcomeMessage: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਸਾਥੀ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
  },
  features: {
    askSaathi: 'ਸਾਥੀ ਨੂੰ ਪੁੱਛੋ', askSaathiDesc: 'ਆਵਾਜ਼ ਨਾਲ ਸਵਾਲ ਪੁੱਛੋ, ਸਾਥੀ ਜਵਾਬ ਦੇਵੇਗਾ',
    yojana: 'ਤੁਹਾਡੇ ਲਈ ਯੋਜਨਾਵਾਂ ਲੱਭੋ', yojanaDesc: 'ਤੁਹਾਡੀ ਲੋੜ ਮੁਤਾਬਕ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਲੱਭੋ',
    scan: 'ਸਕੈਨ ਕਰੋ ਅਤੇ ਸਮਝੋ', scanDesc: 'ਸਰਕਾਰੀ ਦਸਤਾਵੇਜ਼ ਜਾਂ ਨੋਟਿਸ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ',
    fee: 'ਸਰਕਾਰੀ ਫੀਸ ਜਾਂ ਰਿਸ਼ਵਤ?', feeDesc: 'ਵਸੂਲੇ ਪੈਸੇ ਸਰਕਾਰੀ ਫੀਸ ਹਨ ਜਾਂ ਨਹੀਂ ਜਾਂਚੋ',
    rule: 'ਕੀ ਇਹ ਨਿਯਮ ਸੱਚ ਹੈ?', ruleDesc: 'ਸੁਣੀ ਗੱਲ ਨੂੰ ਅਧਿਕਾਰਤ ਜਾਣਕਾਰੀ ਨਾਲ ਜਾਂਚੋ',
    localLang: 'ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਗੱਲ ਕਰੋ', localLangDesc: 'ਪੰਜਾਬੀ, ਹਿੰਦੀ, ਭੋਜਪੁਰੀ — ਜਿਸ ਵਿੱਚ ਬੋਲਦੇ ਹੋ ਉਸ ਵਿੱਚ ਜਵਾਬ ਪਾਓ',
    whatsNew: 'ਕੀ ਨਵਾਂ ਹੈ?', whatsNewDesc: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਅਤੇ ਨਿਯਮਾਂ ਦੇ ਨਵੇਂ ਅਪਡੇਟ ਜਾਣੋ',
  },
  voice: {
    title: 'ਸਾਥੀ ਨੂੰ ਪੁੱਛੋ', subtitle: 'ਬੋਲ ਕੇ ਸਵਾਲ ਪੁੱਛੋ — ਸਾਥੀ ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਵਿੱਚ ਜਵਾਬ ਦੇਵੇਗਾ',
    tapAndSpeak: 'ਦਬਾਓ ਅਤੇ ਬੋਲੋ', listening: 'ਸਾਥੀ ਸੁਣ ਰਿਹਾ ਹੈ…',
    thinking: 'ਸਾਥੀ ਅਧਿਕਾਰਤ ਜਾਣਕਾਰੀ ਜਾਂਚ ਰਿਹਾ ਹੈ…', speaking: 'ਸਾਥੀ ਬੋਲ ਰਿਹਾ ਹੈ…',
    typeAlternative: 'ਜਾਂ ਟਾਈਪ ਕਰਕੇ ਪੁੱਛੋ', typePlaceholder: 'ਆਪਣਾ ਸਵਾਲ ਇੱਥੇ ਲਿਖੋ…',
    sendButton: 'ਭੇਜੋ', permissionDenied: 'ਮਾਈਕ੍ਰੋਫੋਨ ਇਜਾਜ਼ਤ ਨਹੀਂ ਮਿਲੀ',
    permissionDeniedDesc: 'ਬ੍ਰਾਊਜ਼ਰ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਮਾਈਕ੍ਰੋਫੋਨ ਇਜਾਜ਼ਤ ਦਿਓ ਤਾਂ ਜੋ ਸਾਥੀ ਤੁਹਾਨੂੰ ਸੁਣ ਸਕੇ।',
    micNotSupported: 'ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਵਾਇਸ ਰਿਕਗਨਿਸ਼ਨ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ। ਕ੍ਰੋਮ ਜਾਂ ਐਜ ਬ੍ਰਾਊਜ਼ਰ ਵਰਤੋ।',
    stopListening: 'ਰੋਕੋ',
    conversationStart: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਸਾਥੀ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ? ਬੋਲਣ ਲਈ ਮਾਈਕ੍ਰੋਫੋਨ ਬਟਨ ਦਬਾਓ।',
    trySaying: 'ਜਾਂ ਇਹ ਉਦਾਹਰਣ ਅਜ਼ਮਾਓ:',
    exampleQuestions: ['ਮੇਰੇ ਲਈ ਕਿਹੜੀ ਸਰਕਾਰੀ ਯੋਜਨਾ ਹੈ?', 'ਲੀਜ਼ ਲਈ ਕਿੰਨੀ ਫੀਸ ਲੱਗਦੀ ਹੈ?', 'ਆਧਾਰ ਕਾਰਡ ਲਾਜ਼ਮੀ ਹੈ ਇਹ ਸੱਚ ਹੈ?', 'ਕਿਸਾਨਾਂ ਲਈ ਕਿਹੜੀ ਯੋਜਨਾ ਹੈ?'],
  },
  yojana: {
    ...JSON.parse(JSON.stringify(translations.hi.yojana)),
    title: 'ਤੁਹਾਡੇ ਲਈ ਯੋਜਨਾਵਾਂ ਲੱਭੋ', selectState: 'ਤੁਹਾਡਾ ਰਾਜ ਕਿਹੜਾ ਹੈ?', isFarmer: 'ਕੀ ਤੁਸੀਂ ਕਿਸਾਨ ਹੋ?',
    yes: 'ਹਾਂ', no: 'ਨਹੀਂ', selectAge: 'ਤੁਹਾਡੀ ਉਮਰ ਕਿੰਨੀ ਹੈ?', whatHelp: 'ਤੁਹਾਨੂੰ ਕਿਸ ਤਰ੍ਹਾਂ ਦੀ ਮਦਦ ਚਾਹੀਦੀ ਹੈ?',
    findSchemes: 'ਯੋਜਨਾਵਾਂ ਲੱਭੋ', findingSchemes: 'ਤੁਹਾਡੇ ਲਈ ਯੋਜਨਾਵਾਂ ਲੱਭ ਰਹੇ ਹਾਂ…', resultsFound: 'ਯੋਜਨਾਵਾਂ ਮਿਲੀਆਂ',
  },
  scan: {
    ...JSON.parse(JSON.stringify(translations.hi.scan)),
    title: 'ਸਕੈਨ ਕਰੋ ਅਤੇ ਸਮਝੋ', uploadDoc: 'ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ', takePhoto: 'ਫੋਟੋ ਲਓ', scanNotice: 'ਨੋਟਿਸ ਸਕੈਨ ਕਰੋ',
    analyzing: 'ਦਸਤਾਵੇਜ਼ ਵਿਸ਼ਲੇਸ਼ਣ ਹੋ ਰਿਹਾ ਹੈ…', listenExplanation: 'ਵਿਆਖਿਆ ਸੁਣੋ',
  },
  fee: {
    ...JSON.parse(JSON.stringify(translations.hi.fee)),
    title: 'ਸਰਕਾਰੀ ਫੀਸ ਜਾਂ ਰਿਸ਼ਵਤ?', checkButton: 'ਜਾਂਚੋ', checking: 'ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ…',
  },
  rule: {
    ...JSON.parse(JSON.stringify(translations.hi.rule)),
    title: 'ਕੀ ਇਹ ਨਿਯਮ ਸੱਚ ਹੈ?', checkButton: 'ਜਾਂਚੋ', checking: 'ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ…',
  },
  localLang: {
    ...JSON.parse(JSON.stringify(translations.hi.localLang)),
    title: 'ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਗੱਲ ਕਰੋ', notJustTranslation: 'ਸਿਰਫ਼ ਅਨੁਵਾਦ ਨਹੀਂ — ਅਸਲ ਸਮਝ',
  },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'ਕੀ ਨਵਾਂ ਹੈ?', listenUpdates: 'ਅਪਡੇਟ ਸੁਣੋ' },
  safety: {
    ...JSON.parse(JSON.stringify(translations.hi.safety)),
    title: 'ਜਾਂਚੀ ਗਈ ਜਾਣਕਾਰੀ. ਸਰਲ ਭਾਸ਼ਾ.', footerLine: 'ਮੰਨਣ ਤੋਂ ਪਹਿਲਾਂ, ਸਾਥੀ ਨੂੰ ਪੁੱਛੋ।',
  },
  common: {
    ...JSON.parse(JSON.stringify(translations.hi.common)),
    back: 'ਪਿੱਛੇ', close: 'ਬੰਦ ਕਰੋ', retry: 'ਮੁੜ ਕੋਸ਼ਿਸ਼', loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…',
    saathiSays: 'ਸਾਥੀ ਆਖਦਾ ਹੈ', youSaid: 'ਤੁਸੀਂ ਆਖਿਆ', listen: 'ਸੁਣੋ',
    officialSource: 'ਅਧਿਕਾਰਤ ਸਰੋਤ', verifyNote: 'ਮਹੱਤਵਪੂਰਨ: ਇਹ ਜਾਣਕਾਰੀ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਸਰੋਤਾਂ ਤੋਂ ਜਾਂਚੋ।',
    voiceFallback: 'ਤੁਹਾਡੇ ਡਿਵਾਈਸ ਤੇ ਵਾਇਸ ਸਪੋਰਟ ਵੱਖਰਾ ਹੋ ਸਕਦਾ ਹੈ। ਤੁਸੀਂ ਟੈਕਸਟ ਮੋਡ ਵਿੱਚ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹੋ।',
    langConfirm: 'ਸਾਥੀ ਹੁਣ ਪੰਜਾਬੀ ਵਿੱਚ ਗੱਲ ਕਰੇਗਾ।',
  },
};

const ta: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: {
    home: 'முகப்பு', ask: 'சாத்தியிடம் கேளுங்கள்', yojana: 'திட்டம் சரிபார்ப்பு',
    scan: 'ஸ்கேன் செய்து புரிந்துகொள்ளுங்கள்', fee: 'அரசு கட்டணமா லஞ்சமா?', rule: 'இந்த விதி உண்மையா?',
    whatsNew: 'புதிதாக என்ன?', safety: 'பாதுகாப்பு மற்றும் நம்பிக்கை',
  },
  home: {
    tagline: 'உங்கள் குரல். உங்கள் மொழி. உங்கள் உரிமைகள்.',
    description: 'நீங்கள் பேசும் மொழியில் அரசு தகவல்களைப் புரிந்துகொள்ளுங்கள்.',
    askButton: 'சாத்தியிடம் கேளுங்கள்', micLabel: 'பேசி கேளுங்கள்',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    featuresTitle: 'சாத்தி உங்களுக்கு எப்படி உதவுகிறது',
    featuresSubtitle: 'ஒவ்வொருவருக்கும் தங்கள் உரிமைகள் மற்றும் அரசு சேவைகள் பற்றிய தகவல் கிடைக்க வேண்டும்',
    trustNote: 'சாத்தி ஒரு மாதிரி முன்னோட்டம். முக்கிய தகவல்களை அதிகாரப்பூர்வ அரசு ஆதாரங்களிலிருந்து சரிபார்க்கவும்.',
    heroGreeting: 'வணக்கம்! நான் சாத்தி. நான் உங்களுக்கு எப்படி உதவலாம்?',
    welcomeMessage: 'வணக்கம்! நான் சாத்தி. இன்று நான் உங்களுக்கு எப்படி உதவலாம்?',
  },
  features: {
    askSaathi: 'சாத்தியிடம் கேளுங்கள்', askSaathiDesc: 'குரலால் கேள்வி கேளுங்கள், சாத்தி பதிலளிக்கும்',
    yojana: 'உங்களுக்கான திட்டங்களைக் கண்டறியுங்கள்', yojanaDesc: 'உங்கள் தேவைக்கேற்ப அரசு திட்டங்களைக் கண்டறியுங்கள்',
    scan: 'ஸ்கேன் செய்து புரிந்துகொள்ளுங்கள்', scanDesc: 'அரசு ஆவணம் அல்லது அறிவிப்பின் புகைப்படத்தைப் பதிவேற்றவும்',
    fee: 'அரசு கட்டணமா லஞ்சமா?', feeDesc: 'வசூலிக்கப்படும் பணம் அரசு கட்டணமா என்பதை சரிபார்க்கவும்',
    rule: 'இந்த விதி உண்மையா?', ruleDesc: 'கேட்ட விஷயத்தை அதிகாரப்பூர்வ தகவலுடன் சரிபார்க்கவும்',
    localLang: 'உங்கள் மொழியில் பேசுங்கள்', localLangDesc: 'தமிழ், ஹிந்தி, போஜ்புரி — நீங்கள் பேசும் மொழியிலேயே பதில் பெறுங்கள்',
    whatsNew: 'புதிதாக என்ன?', whatsNewDesc: 'அரசு திட்டங்கள் மற்றும் விதிகளின் புதிய புதுப்பிப்புகளை அறியவும்',
  },
  voice: {
    title: 'சாத்தியிடம் கேளுங்கள்', subtitle: 'பேசி கேள்வி கேளுங்கள் — சாத்தி உங்கள் மொழியில் பதிலளிக்கும்',
    tapAndSpeak: 'அழுத்தி பேசுங்கள்', listening: 'சாத்தி கேட்கிறது…',
    thinking: 'சாத்தி அதிகாரப்பூர்வ தகவலை சரிபார்க்கிறது…', speaking: 'சாத்தி பேசுகிறது…',
    typeAlternative: 'அல்லது தட்டச்சு செய்து கேளுங்கள்', typePlaceholder: 'உங்கள் கேள்வியை இங்கே எழுதவும்…',
    sendButton: 'அனுப்பு', permissionDenied: 'மைக்ரோஃபோன் அனுமதி மறுக்கப்பட்டது',
    permissionDeniedDesc: 'உங்கள் உலாவி அமைப்புகளில் மைக்ரோஃபோன் அனுமதி வழங்கவும்.',
    micNotSupported: 'உங்கள் உலாவி குரல் அங்கீகாரத்தை ஆதரிக்கவில்லை. க்ரோம் அல்லது எட்ஜ் உலாவியைப் பயன்படுத்தவும்.',
    stopListening: 'நிறுத்து',
    conversationStart: 'வணக்கம்! நான் சாத்தி. இன்று நான் உங்களுக்கு எப்படி உதவலாம்? பேச மைக்ரோஃபோன் பட்டனை அழுத்தவும்.',
    trySaying: 'அல்லது இந்த எடுத்துக்காட்டுகளை முயற்சிக்கவும்:',
    exampleQuestions: ['எனக்கு எந்த அரசு திட்டம் உள்ளது?', 'லீஸ் கட்டணம் எவ்வளவு?', 'ஆதார் கட்டாயமா இது உண்மையா?', 'விவசாயிகளுக்கு எந்த திட்டம் உள்ளது?'],
  },
  yojana: {
    ...JSON.parse(JSON.stringify(translations.hi.yojana)),
    title: 'உங்களுக்கான திட்டங்களைக் கண்டறியுங்கள்', selectState: 'உங்கள் மாநிலம் எது?',
    isFarmer: 'நீங்கள் விவசாயியா?', yes: 'ஆம்', no: 'இல்லை', selectAge: 'உங்கள் வயது என்ன?',
    whatHelp: 'உங்களுக்கு என்ன உதவி தேவை?', findSchemes: 'திட்டங்களைக் கண்டறியுங்கள்',
    findingSchemes: 'உங்களுக்கான திட்டங்களைத் தேடுகிறோம்…', resultsFound: 'திட்டங்கள் கிடைத்தன',
  },
  scan: {
    ...JSON.parse(JSON.stringify(translations.hi.scan)),
    title: 'ஸ்கேன் செய்து புரிந்துகொள்ளுங்கள்', uploadDoc: 'ஆவணத்தைப் பதிவேற்றவும்',
    takePhoto: 'புகைப்படம் எடுக்கவும்', scanNotice: 'அறிவிப்பை ஸ்கேன் செய்யவும்',
    analyzing: 'ஆவணம் பகுப்பாய்வு செய்யப்படுகிறது…', listenExplanation: 'விளக்கத்தைக் கேளுங்கள்',
  },
  fee: { ...JSON.parse(JSON.stringify(translations.hi.fee)), title: 'அரசு கட்டணமா லஞ்சமா?', checkButton: 'சரிபார்க்கவும்', checking: 'சரிபார்க்கிறது…' },
  rule: { ...JSON.parse(JSON.stringify(translations.hi.rule)), title: 'இந்த விதி உண்மையா?', checkButton: 'சரிபார்க்கவும்', checking: 'சரிபார்க்கிறது…' },
  localLang: { ...JSON.parse(JSON.stringify(translations.hi.localLang)), title: 'உங்கள் மொழியில் பேசுங்கள்', notJustTranslation: 'மொழிபெயர்ப்பு மட்டும் அல்ல — உண்மையான புரிதல்' },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'புதிதாக என்ன?', listenUpdates: 'புதுப்பிப்புகளைக் கேளுங்கள்' },
  safety: { ...JSON.parse(JSON.stringify(translations.hi.safety)), title: 'சரிபார்க்கப்பட்ட தகவல். எளிய மொழி.', footerLine: 'நம்புவதற்கு முன், சாத்தியிடம் கேளுங்கள்.' },
  common: {
    ...JSON.parse(JSON.stringify(translations.hi.common)),
    back: 'பின்செல்', close: 'மூடு', retry: 'மீண்டும் முயற்சி', loading: 'ஏற்றுகிறது…',
    saathiSays: 'சாத்தி கூறுகிறது', youSaid: 'நீங்கள் கூறினீர்கள்', listen: 'கேளுங்கள்',
    officialSource: 'அதிகாரப்பூர்வ ஆதாரம்', verifyNote: 'முக்கியம்: இந்த தகவலை அதிகாரப்பூர்வ அரசு ஆதாரங்களிலிருந்து சரிபார்க்கவும்.',
    voiceFallback: 'உங்கள் சாதனத்தில் குரல் ஆதரவு வேறுபடலாம். நீங்கள் உரை பயன்முறையில் தொடரலாம்.',
    langConfirm: 'சாத்தி இப்போது தமிழில் பேசும்.',
  },
};

const te: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: {
    home: 'హోమ్', ask: 'సాథీని అడగండి', yojana: 'పథకం తనిఖీ',
    scan: 'స్కాన్ చేయండి మరియు అర్థం చేసుకోండి', fee: 'ప్రభుత్వ ఫీజునా లంచమా?', rule: 'ఈ నియమం నిజమా?',
    whatsNew: 'కొత్తగా ఏమిటి?', safety: 'భద్రత మరియు నమ్మకం',
  },
  home: {
    tagline: 'మీ గొంతు. మీ భాష. మీ హక్కులు.',
    description: 'మీరు మాట్లాడే భాషలో ప్రభుత్వ సమాచారాన్ని అర్థం చేసుకోండి.',
    askButton: 'సాథీని అడగండి', micLabel: 'మాట్లాడుతూ అడగండి',
    selectLanguage: 'భాషను ఎంచుకోండి',
    featuresTitle: 'సాథీ మీకు ఎలా సహాయం చేస్తుంది',
    featuresSubtitle: 'ప్రతి ఒక్కరికి వారి హక్కులు మరియు ప్రభుత్వ సేవల గురించి సమాచారం ఉండాలి',
    trustNote: 'సాథీ ఒక ప్రోటోటైప్. ముఖ్యమైన సమాచారాన్ని అధికారిక ప్రభుత్వ మూలాల నుండి నిర్ధారించుకోండి.',
    heroGreeting: 'నమస్కారం! నేను సాథీ. నేను మీకు ఎలా సహాయం చేయగలను?',
    welcomeMessage: 'నమస్కారం! నేను సాథీ. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?',
  },
  features: {
    askSaathi: 'సాథీని అడగండి', askSaathiDesc: 'గొంతుతో ప్రశ్నలు అడగండి, సాథీ సమాధానం ఇస్తుంది',
    yojana: 'మీ కోసం పథకాలు వెతకండి', yojanaDesc: 'మీ అవసరానికి అనుగుణంగా ప్రభుత్వ పథకాలు వెతకండి',
    scan: 'స్కాన్ చేయండి మరియు అర్థం చేసుకోండి', scanDesc: 'ప్రభుత్వ పత్రం లేదా నోటీసు ఫోటో అప్‌లోడ్ చేయండి',
    fee: 'ప్రభుత్వ ఫీజునా లంచమా?', feeDesc: 'వసూలు చేసిన డబ్బు ప్రభుత్వ ఫీజునా అని తనిఖీ చేయండి',
    rule: 'ఈ నియమం నిజమా?', ruleDesc: 'విన్న విషయాన్ని అధికారిక సమాచారంతో తనిఖీ చేయండి',
    localLang: 'మీ భాషలో మాట్లాడండి', localLangDesc: 'తెలుగు, హిందీ, భోజ్‌పురి — మీరు మాట్లాడే భాషలోనే సమాధానం పొందండి',
    whatsNew: 'కొత్తగా ఏమిటి?', whatsNewDesc: 'ప్రభుత్వ పథకాలు మరియు నియమాల యొక్క కొత్త నవీకరణలు తెలుసుకోండి',
  },
  voice: {
    title: 'సాథీని అడగండి', subtitle: 'మాట్లాడుతూ ప్రశ్నలు అడగండి — సాథీ మీ భాషలో సమాధానం ఇస్తుంది',
    tapAndSpeak: 'నొక్కండి మరియు మాట్లాడండి', listening: 'సాథీ వింటోంది…',
    thinking: 'సాథీ అధికారిక సమాచారం తనిఖీ చేస్తోంది…', speaking: 'సాథీ మాట్లాడుతోంది…',
    typeAlternative: 'లేదా టైప్ చేసి అడగండి', typePlaceholder: 'మీ ప్రశ్నను ఇక్కడ రాయండి…',
    sendButton: 'పంపండి', permissionDenied: 'మైక్రోఫోన్ అనుమతి తిరస్కరించబడింది',
    permissionDeniedDesc: 'బ్రౌజర్ సెట్టింగ్‌లలో మైక్రోఫోన్ అనుమతి ఇవ్వండి.',
    micNotSupported: 'మీ బ్రౌజర్ వాయిస్ రికగ్నిషన్‌ను సపోర్ట్ చేయదు. క్రోమ్ లేదా ఎడ్జ్ ఉపయోగించండి.',
    stopListening: 'ఆపండి',
    conversationStart: 'నమస్కారం! నేను సాథీ. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను? మాట్లాడటానికి మైక్రోఫోన్ బటన్ నొక్కండి.',
    trySaying: 'లేదా ఈ ఉదాహరణలు ప్రయత్నించండి:',
    exampleQuestions: ['నా కోసం ఏ ప్రభుత్వ పథకం ఉంది?', 'లీజు ఫీజు ఎంత?', 'ఆధార్ తప్పనిసరి అని నిజమా?', 'రైతుల కోసం ఏ పథకం ఉంది?'],
  },
  yojana: {
    ...JSON.parse(JSON.stringify(translations.hi.yojana)),
    title: 'మీ కోసం పథకాలు వెతకండి', selectState: 'మీ రాష్ట్రం ఏమిటి?', isFarmer: 'మీరు రైతునా?',
    yes: 'అవును', no: 'కాదు', selectAge: 'మీ వయసు ఎంత?', whatHelp: 'మీకు ఏ రకమైన సహాయం కావాలి?',
    findSchemes: 'పథకాలు వెతకండి', findingSchemes: 'మీ కోసం పథకాలు వెతుకుతున్నాము…', resultsFound: 'పథకాలు దొరికాయి',
  },
  scan: {
    ...JSON.parse(JSON.stringify(translations.hi.scan)),
    title: 'స్కాన్ చేయండి మరియు అర్థం చేసుకోండి', uploadDoc: 'పత్రాన్ని అప్‌లోడ్ చేయండి',
    takePhoto: 'ఫోటో తీయండి', scanNotice: 'నోటీసు స్కాన్ చేయండి', analyzing: 'పత్రం విశ్లేషణ అవుతోంది…',
    listenExplanation: 'వివరణ వినండి',
  },
  fee: { ...JSON.parse(JSON.stringify(translations.hi.fee)), title: 'ప్రభుత్వ ఫీజునా లంచమా?', checkButton: 'తనిఖీ చేయండి', checking: 'తనిఖీ అవుతోంది…' },
  rule: { ...JSON.parse(JSON.stringify(translations.hi.rule)), title: 'ఈ నియమం నిజమా?', checkButton: 'తనిఖీ చేయండి', checking: 'తనిఖీ అవుతోంది…' },
  localLang: { ...JSON.parse(JSON.stringify(translations.hi.localLang)), title: 'మీ భాషలో మాట్లాడండి', notJustTranslation: 'అనువాదం మాత్రమే కాదు — నిజమైన అర్థం' },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'కొత్తగా ఏమిటి?', listenUpdates: 'నవీకరణలు వినండి' },
  safety: { ...JSON.parse(JSON.stringify(translations.hi.safety)), title: 'నిర్ధారించబడిన సమాచారం. సులభమైన భాష.', footerLine: 'నమ్మడానికి ముందు, సాథీని అడగండి.' },
  common: {
    ...JSON.parse(JSON.stringify(translations.hi.common)),
    back: 'వెనుకకు', close: 'మూయి', retry: 'మళ్లీ ప్రయత్నించు', loading: 'లోడ్ అవుతోంది…',
    saathiSays: 'సాథీ చెబుతోంది', youSaid: 'మీరు అన్నారు', listen: 'వినండి',
    officialSource: 'అధికారిక మూలం', verifyNote: 'ముఖ్యం: ఈ సమాచారాన్ని అధికారిక ప్రభుత్వ మూలాల నుండి నిర్ధారించుకోండి.',
    voiceFallback: 'మీ పరికరంలో వాయిస్ మద్దతు మారవచ్చు. మీరు టెక్స్ట్ మోడ్‌లో కొనసాగవచ్చు.',
    langConfirm: 'సాథీ ఇప్పుడు తెలుగులో మాట్లాడుతుంది.',
  },
};

const kn: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: { home: 'ಮುಖಪುಟ', ask: 'ಸಾಥಿಯನ್ನು ಕೇಳಿ', yojana: 'ಯೋಜನೆ ಪರಿಶೀಲಕ', scan: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ', fee: 'ಸರ್ಕಾರಿ ಶುಲ್ಕವೇ ಲಂಚವೇ?', rule: 'ಈ ನಿಯಮ ಸತ್ಯವೇ?', whatsNew: 'ಹೊಸದೇನಿದೆ?', safety: 'ಸುರಕ್ಷತೆ ಮತ್ತು ನಂಬಿಕೆ' },
  home: { tagline: 'ನಿಮ್ಮ ಧ್ವನಿ. ನಿಮ್ಮ ಭಾಷೆ. ನಿಮ್ಮ ಹಕ್ಕುಗಳು.', description: 'ನೀವು ಮಾತನಾಡುವ ಭಾಷೆಯಲ್ಲಿ ಸರ್ಕಾರಿ ಮಾಹಿತಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.', askButton: 'ಸಾಥಿಯನ್ನು ಕೇಳಿ', micLabel: 'ಮಾತನಾಡಿ ಕೇಳಿ', selectLanguage: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ', featuresTitle: 'ಸಾಥಿ ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ', featuresSubtitle: 'ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಅವರ ಹಕ್ಕುಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಸೇವೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಸಿಗಬೇಕು', trustNote: 'ಸಾಥಿ ಒಂದು ಪ್ರೋಟೋಟೈಪ್. ಮುಖ್ಯ ಮಾಹಿತಿಯನ್ನು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಮೂಲಗಳಿಂದ ಪರಿಶೀಲಿಸಿ.', heroGreeting: 'ನಮಸ್ಕಾರ! ನಾನು ಸಾಥಿ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?', welcomeMessage: 'ನಮಸ್ಕಾರ! ನಾನು ಸಾಥಿ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?' },
  features: { askSaathi: 'ಸಾಥಿಯನ್ನು ಕೇಳಿ', askSaathiDesc: 'ಧ್ವನಿಯಿಂದ ಪ್ರಶ್ನೆ ಕೇಳಿ, ಸಾಥಿ ಉತ್ತರಿಸುತ್ತದೆ', yojana: 'ನಿಮಗಾಗಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ', yojanaDesc: 'ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ', scan: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ', scanDesc: 'ಸರ್ಕಾರಿ ದಾಖಲೆ ಅಥವಾ ಸೂಚನೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ', fee: 'ಸರ್ಕಾರಿ ಶುಲ್ಕವೇ ಲಂಚವೇ?', feeDesc: 'ವಸೂಲಿಸಿದ ಹಣ ಸರ್ಕಾರಿ ಶುಲ್ಕವೇ ಎಂದು ಪರಿಶೀಲಿಸಿ', rule: 'ಈ ನಿಯಮ ಸತ್ಯವೇ?', ruleDesc: 'ಕೇಳಿದ ವಿಷಯವನ್ನು ಅಧಿಕೃತ ಮಾಹಿತಿಯೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ', localLang: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ', localLangDesc: 'ಕನ್ನಡ, ಹಿಂದಿ, ಭೋಜ್‌ಪುರಿ — ನೀವು ಮಾತನಾಡುವ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರ ಪಡೆಯಿರಿ', whatsNew: 'ಹೊಸದೇನಿದೆ?', whatsNewDesc: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ನಿಯಮಗಳ ಹೊಸ ಅಪ್‌ಡೇಟ್‌ಗಳು ತಿಳಿಯಿರಿ' },
  voice: { title: 'ಸಾಥಿಯನ್ನು ಕೇಳಿ', subtitle: 'ಮಾತನಾಡಿ ಪ್ರಶ್ನೆ ಕೇಳಿ — ಸಾಥಿ ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರಿಸುತ್ತದೆ', tapAndSpeak: 'ಒತ್ತಿ ಮಾತನಾಡಿ', listening: 'ಸಾಥಿ ಕೇಳುತ್ತಿದೆ…', thinking: 'ಸಾಥಿ ಅಧಿಕೃತ ಮಾಹಿತಿ ಪರಿಶೀಲಿಸುತ್ತಿದೆ…', speaking: 'ಸಾಥಿ ಮಾತನಾಡುತ್ತಿದೆ…', typeAlternative: 'ಅಥವಾ ಟೈಪ್ ಮಾಡಿ ಕೇಳಿ', typePlaceholder: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಇಲ್ಲಿ ಬರೆಿ…', sendButton: 'ಕಳುಹಿಸಿ', permissionDenied: 'ಮೈಕ್ರೋಫೋನ್ ಅನುಮತಿ ನಿರಾಕರಿಸಲ್ಪಟ್ಟಿದೆ', permissionDeniedDesc: 'ಬ್ರೌಸರ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಮೈಕ್ರೋಫೋನ್ ಅನುಮತಿ ನೀಡಿ.', micNotSupported: 'ನಿಮ್ಮ ಬ್ರೌಸರ್ ವಾಯ್ಸ್ ರೆಕಗ್ನಿಷನ್ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ. ಕ್ರೋಮ್ ಅಥವಾ ಎಡ್ಜ್ ಬಳಸಿ.', stopListening: 'ನಿಲ್ಲಿಸಿ', conversationStart: 'ನಮಸ್ಕಾರ! ನಾನು ಸಾಥಿ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು? ಮಾತನಾಡಲು ಮೈಕ್ರೋಫೋನ್ ಬಟನ್ ಒತ್ತಿ.', trySaying: 'ಅಥವಾ ಈ ಉದಾಹರಣೆಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ:', exampleQuestions: ['ನನಗೆ ಯಾವ ಸರ್ಕಾರಿ ಯೋಜನೆ ಇದೆ?', 'ಲೀಸ್ ಶುಲ್ಕ ಎಷ್ಟು?', 'ಆಧಾರ್ ಕಡ್ಡಾಯವೇ ಇದು ಸತ್ಯವೇ?', 'ರೈತರಿಗೆ ಯಾವ ಯೋಜನೆ ಇದೆ?'] },
  yojana: { ...JSON.parse(JSON.stringify(translations.hi.yojana)), title: 'ನಿಮಗಾಗಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ', selectState: 'ನಿಮ್ಮ ರಾಜ್ಯ ಯಾವುದು?', isFarmer: 'ನೀವು ರೈತರೇ?', yes: 'ಹೌದು', no: 'ಇಲ್ಲ', selectAge: 'ನಿಮ್ಮ ವಯಸ್ಸು ಎಷ್ಟು?', whatHelp: 'ನಿಮಗೆ ಯಾವ ರೀತಿಯ ಸಹಾಯ ಬೇಕು?', findSchemes: 'ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ', findingSchemes: 'ನಿಮಗಾಗಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕುತ್ತಿದೆ…', resultsFound: 'ಯೋಜನೆಗಳು ಸಿಕ್ಕಿವೆ' },
  scan: { ...JSON.parse(JSON.stringify(translations.hi.scan)), title: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ', listenExplanation: 'ವಿವರಣೆ ಕೇಳಿ' },
  fee: { ...JSON.parse(JSON.stringify(translations.hi.fee)), title: 'ಸರ್ಕಾರಿ ಶುಲ್ಕವೇ ಲಂಚವೇ?', checkButton: 'ಪರಿಶೀಲಿಸಿ', checking: 'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…' },
  rule: { ...JSON.parse(JSON.stringify(translations.hi.rule)), title: 'ಈ ನಿಯಮ ಸತ್ಯವೇ?', checkButton: 'ಪರಿಶೀಲಿಸಿ', checking: 'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…' },
  localLang: { ...JSON.parse(JSON.stringify(translations.hi.localLang)), title: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ', notJustTranslation: 'ಅನುವಾದ ಮಾತ್ರವಲ್ಲ — ನಿಜವಾದ ಅರ್ಥ' },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'ಹೊಸದೇನಿದೆ?', listenUpdates: 'ಅಪ್‌ಡೇಟ್‌ಗಳನ್ನು ಕೇಳಿ' },
  safety: { ...JSON.parse(JSON.stringify(translations.hi.safety)), title: 'ಪರಿಶೀಲಿಸಲಾದ ಮಾಹಿತಿ. ಸರಳ ಭಾಷೆ.', footerLine: 'ನಂಬುವ ಮೊದಲು, ಸಾಥಿಯನ್ನು ಕೇಳಿ.' },
  common: { ...JSON.parse(JSON.stringify(translations.hi.common)), back: 'ಹಿಂದೆ', close: 'ಮುಚ್ಚಿ', retry: 'ಮರುಪ್ರಯತ್ನಿಸಿ', loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ…', saathiSays: 'ಸಾಥಿ ಹೇಳುತ್ತದೆ', youSaid: 'ನೀವು ಹೇಳಿದ್ದೀರಿ', listen: 'ಕೇಳಿ', officialSource: 'ಅಧಿಕೃತ ಮೂಲ', verifyNote: 'ಮುಖ್ಯ: ಈ ಮಾಹಿತಿಯನ್ನು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಮೂಲಗಳಿಂದ ಪರಿಶೀಲಿಸಿ.', voiceFallback: 'ನಿಮ್ಮ ಸಾಧನದಲ್ಲಿ ವಾಯ್ಸ್ ಬೆಂಬಲ ಬದಲಾಗಬಹುದು. ನೀವು ಟೆಕ್ಸ್ಟ್ ಮೋಡ್‌ನಲ್ಲಿ ಮುಂದುವರಿಯಬಹುದು.', langConfirm: 'ಸಾಥಿ ಈಗ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡುತ್ತದೆ.' },
};

const ml: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: { home: 'ഹോം', ask: 'സാഥിയോട് ചോദിക്കൂ', yojana: 'പദ്ധതി പരിശോധകൻ', scan: 'സ്കാൻ ചെയ്ത് മനസ്സിലാക്കുക', fee: 'സർക്കാർ ഫീസോ കൈക്കൂലിയോ?', rule: 'ഈ നിയമം ശരിയാണോ?', whatsNew: 'എന്താണ് പുതിയത്?', safety: 'സുരക്ഷയും വിശ്വാസവും' },
  home: { tagline: 'നിങ്ങളുടെ ശബ്ദം. നിങ്ങളുടെ ഭാഷ. നിങ്ങളുടെ അവകാശങ്ങൾ.', description: 'നിങ്ങൾ സംസാരിക്കുന്ന ഭാഷയിൽ സർക്കാർ വിവരങ്ങൾ മനസ്സിലാക്കുക.', askButton: 'സാഥിയോട് ചോദിക്കൂ', micLabel: 'സംസാരിച്ച് ചോദിക്കൂ', selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക', featuresTitle: 'സാഥി നിങ്ങളെ എങ്ങനെ സഹായിക്കുന്നു', featuresSubtitle: 'ഓരുതൊരു വ്യക്തിക്കും അവകാശങ്ങളെയും സർക്കാർ സേവനങ്ങളെയും കുറിച്ച് അറിവ് ലഭിക്കണം', trustNote: 'സാഥി ഒരു പ്രോട്ടോടൈപ്പ് ആണ്. പ്രധാന വിവരങ്ങൾ ഔദ്യോഗിക സർക്കാർ ഉറവിടങ്ങളിൽ നിന്ന് പരിശോധിക്കുക.', heroGreeting: 'നമസ്കാരം! ഞാൻ സാഥിയാണ്. ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?', welcomeMessage: 'നമസ്കാരം! ഞാൻ സാഥിയാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?' },
  features: { askSaathi: 'സാഥിയോട് ചോദിക്കൂ', askSaathiDesc: 'ശബ്ദത്തിൽ ചോദ്യം ചോദിക്കൂ, സാഥി മറുപടി നൽകും', yojana: 'നിങ്ങൾക്കായി പദ്ധതികൾ കണ്ടെത്തുക', yojanaDesc: 'നിങ്ങളുടെ ആവശ്യമനുസരിച്ച് സർക്കാർ പദ്ധതികൾ കണ്ടെത്തുക', scan: 'സ്കാൻ ചെയ്ത് മനസ്സിലാക്കുക', scanDesc: 'സർക്കാർ രേഖയുടെയോ അറിയിപ്പിന്റെയോ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക', fee: 'സർക്കാർ ഫീസോ കൈക്കൂലിയോ?', feeDesc: 'പിരിപ്പിച്ച പണം സർക്കാർ ഫീസ് ആണോ എന്ന് പരിശോധിക്കുക', rule: 'ഈ നിയമം ശരിയാണോ?', ruleDesc: 'കേട്ട കാര്യം ഔദ്യോഗിക വിവരവുമായി പരിശോധിക്കുക', localLang: 'നിങ്ങളുടെ ഭാഷയിൽ സംസാരിക്കൂ', localLangDesc: 'മലയാളം, ഹിന്ദി, ഭോജ്പുരി — നിങ്ങൾ സംസാരിക്കുന്ന ഭാഷയിൽ മറുപടി നേടുക', whatsNew: 'എന്താണ് പുതിയത്?', whatsNewDesc: 'സർക്കാർ പദ്ധതികളുടെയും നിയമങ്ങളുടെയും പുതിയ അപ്‌ഡേറ്റുകൾ അറിയുക' },
  voice: { title: 'സാഥിയോട് ചോദിക്കൂ', subtitle: 'സംസാരിച്ച് ചോദ്യം ചോദിക്കൂ — സാഥി നിങ്ങളുടെ ഭാഷയിൽ മറുപടി നൽകും', tapAndSpeak: 'അമർത്തി സംസാരിക്കൂ', listening: 'സാഥി കേൾക്കുന്നു…', thinking: 'സാഥി ഔദ്യോഗിക വിവരം പരിശോധിക്കുന്നു…', speaking: 'സാഥി സംസാരിക്കുന്നു…', typeAlternative: 'അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്ത് ചോദിക്കൂ', typePlaceholder: 'നിങ്ങളുടെ ചോദ്യം ഇവിടെ എഴുതുക…', sendButton: 'അയയ്ക്കുക', permissionDenied: 'മൈക്രോഫോൺ അനുമതി നിരസിച്ചു', permissionDeniedDesc: 'ബ്രൗസർ ക്രമീകരണങ്ങളിൽ മൈക്രോഫോൺ അനുമതി നൽകുക.', micNotSupported: 'നിങ്ങളുടെ ബ്രൗസർ വോയ്സ് റെക്കഗ്നിഷൻ പിന്തുണയ്ക്കുന്നില്ല. ക്രോം അല്ലെങ്കിൽ എഡ്ജ് ഉപയോഗിക്കുക.', stopListening: 'നിർത്തുക', conversationStart: 'നമസ്കാരം! ഞാൻ സാഥിയാണ്. ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം? സംസാരിക്കാൻ മൈക്രോഫോൺ ബട്ടൺ അമർത്തുക.', trySaying: 'അല്ലെങ്കിൽ ഈ ഉദാഹരണങ്ങൾ ശ്രമിക്കുക:', exampleQuestions: ['എനിക്ക് ഏത് സർക്കാർ പദ്ധതിയാണുള്ളത്?', 'ലീസ് ഫീസ് എത്രയാണ്?', 'ആധാർ നിർബന്ധിതമാണോ ഇത് ശരിയാണോ?', 'കർഷകർക്ക് ഏത് പദ്ധതിയാണുള്ളത്?'] },
  yojana: { ...JSON.parse(JSON.stringify(translations.hi.yojana)), title: 'നിങ്ങൾക്കായി പദ്ധതികൾ കണ്ടെത്തുക', selectState: 'നിങ്ങളുടെ സംസ്ഥാനം ഏതാണ്?', isFarmer: 'നിങ്ങൾ കർഷകനാണോ?', yes: 'അതെ', no: 'അല്ല', selectAge: 'നിങ്ങളുടെ പ്രായം എത്രയാണ്?', whatHelp: 'നിങ്ങൾക്ക് എന്ത് തരത്തിലുള്ള സഹായം വേണം?', findSchemes: 'പദ്ധതികൾ കണ്ടെത്തുക', findingSchemes: 'നിങ്ങൾക്കായി പദ്ധതികൾ തിരയുന്നു…', resultsFound: 'പദ്ധതികൾ ലഭിച്ചു' },
  scan: { ...JSON.parse(JSON.stringify(translations.hi.scan)), title: 'സ്കാൻ ചെയ്ത് മനസ്സിലാക്കുക', listenExplanation: 'വിശദീകരണം കേൾക്കുക' },
  fee: { ...JSON.parse(JSON.stringify(translations.hi.fee)), title: 'സർക്കാർ ഫീസോ കൈക്കൂലിയോ?', checkButton: 'പരിശോധിക്കുക', checking: 'പരിശോധിക്കുന്നു…' },
  rule: { ...JSON.parse(JSON.stringify(translations.hi.rule)), title: 'ഈ നിയമം ശരിയാണോ?', checkButton: 'പരിശോധിക്കുക', checking: 'പരിശോധിക്കുന്നു…' },
  localLang: { ...JSON.parse(JSON.stringify(translations.hi.localLang)), title: 'നിങ്ങളുടെ ഭാഷയിൽ സംസാരിക്കൂ', notJustTranslation: 'വിവർത്തനം മാത്രമല്ല — യഥാർത്ഥ ധാരണ' },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'എന്താണ് പുതിയത്?', listenUpdates: 'അപ്‌ഡേറ്റുകൾ കേൾക്കുക' },
  safety: { ...JSON.parse(JSON.stringify(translations.hi.safety)), title: 'പരിശോധിച്ച വിവരം. ലളിതമായ ഭാഷ.', footerLine: 'വിശ്വസിക്കുന്നതിന് മുൻപ്, സാഥിയോട് ചോദിക്കൂ.' },
  common: { ...JSON.parse(JSON.stringify(translations.hi.common)), back: 'തിരികെ', close: 'അടയ്ക്കുക', retry: 'വീണ്ടും ശ്രമിക്കുക', loading: 'ലോഡ് ചെയ്യുന്നു…', saathiSays: 'സാഥി പറയുന്നു', youSaid: 'നിങ്ങൾ പറഞ്ഞു', listen: 'കേൾക്കുക', officialSource: 'ഔദ്യോഗിക ഉറവിടം', verifyNote: 'പ്രധാനം: ഈ വിവരം ഔദ്യോഗിക സർക്കാർ ഉറവിടങ്ങളിൽ നിന്ന് പരിശോധിക്കുക.', voiceFallback: 'നിങ്ങളുടെ ഉപകരണത്തിൽ വോയ്സ് പിന്തുണ വ്യത്യാസപ്പെട്ടേക്കാം. നിങ്ങൾക്ക് ടെക്സ്റ്റ് മോഡിൽ തുടരാം.', langConfirm: 'സാഥി ഇപ്പോൾ മലയാളത്തിൽ സംസാരിക്കും.' },
};

const or: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: { home: 'ମୂଳପୃଷ୍ଠ', ask: 'ସାଥୀଙ୍କୁ ପଚାର', yojana: 'ଯୋଜନା ଯାଞ୍ଚକାରୀ', scan: 'ସ୍କାନ୍ କରନ୍ତୁ ଏବଂ ବୁଝନ୍ତୁ', fee: 'ସରକାରୀ ଫି କି ଘୁଷ?', rule: 'ଏହି ନିୟମ ସତ କି?', whatsNew: 'ନୂଆ କଣ?', safety: 'ସୁରକ୍ଷା ଏବଂ ବିଶ୍ୱାସ' },
  home: { tagline: 'ଆପଣଙ୍କ ଆବାଜ୍. ଆପଣଙ୍କ ଭାଷା. ଆପଣଙ୍କ ଅଧିକାର.', description: 'ଆପଣ କଥା ହୁଅଥିବା ଭାଷାରେ ସରକାରୀ ସୂଚନା ବୁଝନ୍ତୁ.', askButton: 'ସାଥୀଙ୍କୁ ପଚାର', micLabel: 'କହି ପଚାର', selectLanguage: 'ଭାଷା ବାଛନ୍ତୁ', featuresTitle: 'ସାଥୀ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରେ', featuresSubtitle: 'ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତିଙ୍କୁ ତାଙ୍କ ଅଧିକାର ଏବଂ ସରକାରୀ ସେବା ବିଷୟରେ ସୂଚନା ମିଳିବା ଉଚିତ', trustNote: 'ସାଥୀ ଏକ ପ୍ରୋଟୋଟାଇପ୍. ଗୁରୁତ୍ୱପୂର୍ଣ ସୂଚନା ଅଧିକୃତ ସରକାରୀ ଉତ୍ସରୁ ଯାଞ୍ଚ କରନ୍ତୁ.', heroGreeting: 'ନମସ୍କାର! ମୁଁ ସାଥୀ। ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?', welcomeMessage: 'ନମସ୍କାର! ମୁଁ ସାଥୀ। ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?' },
  features: { askSaathi: 'ସାଥୀଙ୍କୁ ପଚାର', askSaathiDesc: 'ଆବାଜ୍ ରେ ପ୍ରଶ୍ନ ପଚାର, ସାଥୀ ଉତ୍ତର ଦେବ', yojana: 'ଆପଣଙ୍କ ପାଇଁ ଯୋଜନା ଖୋଜନ୍ତୁ', yojanaDesc: 'ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ସରକାରୀ ଯୋଜନା ଖୋଜନ୍ତୁ', scan: 'ସ୍କାନ୍ କରନ୍ତୁ ଏବଂ ବୁଝନ୍ତୁ', scanDesc: 'ସରକାରୀ ଦଲିଲ କିମ୍ବା ନୋଟିସ୍ ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ', fee: 'ସରକାରୀ ଫି କି ଘୁଷ?', feeDesc: 'ଆଦାୟ କରାଯାଇଥିବା ଟଙ୍କା ସରକାରୀ ଫି କି ଯାଞ୍ଚ କରନ୍ତୁ', rule: 'ଏହି ନିୟମ ସତ କି?', ruleDesc: 'ଶୁଣିଥିବା କଥା ଅଧିକୃତ ସୂଚନା ସହ ଯାଞ୍ଚ କରନ୍ତୁ', localLang: 'ଆପଣଙ୍କ ଭାଷାରେ କଥା ହୁଅନ୍ତୁ', localLangDesc: 'ଓଡ଼ିଆ, ହିନ୍ଦି, ଭୋଜପୁରୀ — ଯେଉଁ ଭାଷା କଥା ହୁଅନ୍ତୁ ସେଥିରେ ଉତ୍ତର ପାଆନ୍ତୁ', whatsNew: 'ନୂଆ କଣ?', whatsNewDesc: 'ସରକାରୀ ଯୋଜନା ଏବଂ ନିୟମର ନୂଆ ଅପଡେଟ୍ ଜାଣନ୍ତୁ' },
  voice: { title: 'ସାଥୀଙ୍କୁ ପଚାର', subtitle: 'କହି ପ୍ରଶ୍ନ ପଚାର — ସାଥୀ ଆପଣଙ୍କ ଭାଷାରେ ଉତ୍ତର ଦେବ', tapAndSpeak: 'ଦବାନ୍ତୁ ଏବଂ କହନ୍ତୁ', listening: 'ସାଥୀ ଶୁଣୁଛି…', thinking: 'ସାଥୀ ଅଧିକୃତ ସୂଚନା ଯାଞ୍ଚ କରୁଛି…', speaking: 'ସାଥୀ କହୁଛି…', typeAlternative: 'କିମ୍ବା ଟାଇପ୍ କରି ପଚାର', typePlaceholder: 'ଆପଣଙ୍କ ପ୍ରଶ୍ନ ଏଠାରେ ଲେଖନ୍ତୁ…', sendButton: 'ପଠାନ୍ତୁ', permissionDenied: 'ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ମିଳିଲା ନାହିଁ', permissionDeniedDesc: 'ବ୍ରାଉଜର ସେଟିଂସରେ ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ଦିଅନ୍ତୁ।', micNotSupported: 'ଆପଣଙ୍କ ବ୍ରାଉଜର ଭଏସ୍ ରେକଗ୍ନିସନ୍ ସପୋର୍ଟ କରେ ନାହିଁ। କ୍ରୋମ୍ କିମ୍ବା ଏଜ୍ ବ୍ରାଉଜର ବ୍ୟବହାର କରନ୍ତୁ।', stopListening: 'ବନ୍ଦ କରନ୍ତୁ', conversationStart: 'ନମସ୍କାର! ମୁଁ ସାଥୀ। ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି? କହିବା ପାଇଁ ମାଇକ୍ରୋଫୋନ୍ ବଟନ୍ ଦବାନ୍ତୁ।', trySaying: 'କିମ୍ବା ଏହି ଉଦାହରଣ ଚେଷ୍ଟା କରନ୍ତୁ:', exampleQuestions: ['ମୋ ପାଇଁ କେଉଁ ସରକାରୀ ଯୋଜନା ଅଛି?', 'ଲିଜ୍ ଫି କେତେ?', 'ଆଧାର ବାଧ୍ୟତାମୂଳକ ଏହା ସତ କି?', 'କୃଷକଙ୍କ ପାଇଁ କେଉଁ ଯୋଜନା ଅଛି?'] },
  yojana: { ...JSON.parse(JSON.stringify(translations.hi.yojana)), title: 'ଆପଣଙ୍କ ପାଇଁ ଯୋଜନା ଖୋଜନ୍ତୁ', selectState: 'ଆପଣଙ୍କ ରାଜ୍ୟ କଣ?', isFarmer: 'ଆପଣ କୃଷକ କି?', yes: 'ହଁ', no: 'ନାହିଁ', selectAge: 'ଆପଣଙ୍କ ବୟସ କେତେ?', whatHelp: 'ଆପଣଙ୍କୁ କେଉଁ ପ୍ରକାରର ସାହାଯ୍ୟ ଦରକାର?', findSchemes: 'ଯୋଜନା ଖୋଜନ୍ତୁ', findingSchemes: 'ଆପଣଙ୍କ ପାଇଁ ଯୋଜନା ଖୋଜୁଛୁ…', resultsFound: 'ଯୋଜନା ମିଳିଲା' },
  scan: { ...JSON.parse(JSON.stringify(translations.hi.scan)), title: 'ସ୍କାନ୍ କରନ୍ତୁ ଏବଂ ବୁଝନ୍ତୁ', listenExplanation: 'ବ୍ୟାଖ୍ୟା ଶୁଣନ୍ତୁ' },
  fee: { ...JSON.parse(JSON.stringify(translations.hi.fee)), title: 'ସରକାରୀ ଫି କି ଘୁଷ?', checkButton: 'ଯାଞ୍ଚ କରନ୍ତୁ', checking: 'ଯାଞ୍ଚ ହେଉଛି…' },
  rule: { ...JSON.parse(JSON.stringify(translations.hi.rule)), title: 'ଏହି ନିୟମ ସତ କି?', checkButton: 'ଯାଞ୍ଚ କରନ୍ତୁ', checking: 'ଯାଞ୍ଚ ହେଉଛି…' },
  localLang: { ...JSON.parse(JSON.stringify(translations.hi.localLang)), title: 'ଆପଣଙ୍କ ଭାଷାରେ କଥା ହୁଅନ୍ତୁ', notJustTranslation: 'କେବଳ ଅନୁବାଦ ନୁହେଁ — ପ୍ରକୃତ ବୁଝିବା' },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'ନୂଆ କଣ?', listenUpdates: 'ଅପଡେଟ୍ ଶୁଣନ୍ତୁ' },
  safety: { ...JSON.parse(JSON.stringify(translations.hi.safety)), title: 'ଯାଞ୍ଚ ହୋଇଥିବା ସୂଚନା. ସରଳ ଭାଷା.', footerLine: 'ବିଶ୍ୱାସ କରିବା ପୂର୍ବରୁ, ସାଥୀଙ୍କୁ ପଚାର।' },
  common: { ...JSON.parse(JSON.stringify(translations.hi.common)), back: 'ପଛକୁ', close: 'ବନ୍ଦ କରନ୍ତୁ', retry: 'ପୁଣି ଚେଷ୍ଟା', loading: 'ଲୋଡ୍ ହେଉଛି…', saathiSays: 'ସାଥୀ କହୁଛି', youSaid: 'ଆପଣ କହିଲେ', listen: 'ଶୁଣନ୍ତୁ', officialSource: 'ଅଧିକୃତ ଉତ୍ସ', verifyNote: 'ଗୁରୁତ୍ୱପୂର୍ଣ: ଏହି ସୂଚନା ଅଧିକୃତ ସରକାରୀ ଉତ୍ସରୁ ଯାଞ୍ଚ କରନ୍ତୁ।', voiceFallback: 'ଆପଣଙ୍କ ଡିଭାଇସରେ ଭଏସ୍ ସପୋର୍ଟ ଭିନ୍ନ ହୋଇପାରେ। ଆପଣ ଟେକ୍ସଟ୍ ମୋଡ୍‌ରେ ଜାରି ରଖିପାରିବେ।', langConfirm: 'ସାଥୀ ବର୍ତ୍ତମାନ ଓଡ଼ିଆରେ କଥା ହେବ।' },
};

const as: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: { home: 'ঘৰ', ask: 'সাথীক সুধিব', yojana: 'যোজনা পৰীক্ষক', scan: 'স্কেন কৰক আৰু বুজি লওক', fee: 'চৰকাৰী ফী নে ঘুষ?', rule: 'এই নিয়ম সঁচা নেকি?', whatsNew: 'নতুন কি?', safety: 'সুৰক্ষা আৰু বিশ্বাস' },
  home: { tagline: 'আপোনাৰ কণ্ঠ. আপোনাৰ ভাষা. আপোনাৰ অধিকাৰ.', description: 'আপুনি কোৱা ভাষাত চৰকাৰী তথ্য বুজি লওক।', askButton: 'সাথীক সুধিব', micLabel: 'কৈ সুধিব', selectLanguage: 'ভাষা বাছনি কৰক', featuresTitle: 'সাথীয়ে আপোনাক কেনেকৈ সহায় কৰে', featuresSubtitle: 'প্ৰত্যেকজন ব্যক্তিয়ে নিজৰ অধিকাৰ আৰু চৰকাৰী সেৱাৰ বিষয়ে জনা উচিত', trustNote: 'সাথী এটা প্ৰটটাইপ। গুৰুত্বপূৰ্ণ তথ্য চৰকাৰী উৎসৰ পৰা সত্যাপন কৰক।', heroGreeting: 'নমস্কাৰ! মই সাথী। মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?', welcomeMessage: 'নমস্কাৰ! মই সাথী। আজি মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?' },
  features: { askSaathi: 'সাথীক সুধিব', askSaathiDesc: 'কণ্ঠৰে প্ৰশ্ন সুধিব, সাথীয়ে উত্তৰ দিব', yojana: 'আপোনাৰ বাবে যোজনা বিচাৰক', yojanaDesc: 'আপোনাৰ প্ৰয়োজন অনুযায়ী চৰকাৰী যোজনা বিচাৰক', scan: 'স্কেন কৰক আৰু বুজি লওক', scanDesc: 'চৰকাৰী দস্তাবেজ বা জাননীৰ ফটো আপলোড কৰক', fee: 'চৰকাৰী ফী নে ঘুষ?', feeDesc: 'সংগৃহীত ধন চৰকাৰী ফী নে সত্যাপন কৰক', rule: 'এই নিয়ম সঁচা নেকি?', ruleDesc: 'শুনা কথা চৰকাৰী তথ্যৰ সৈতে সত্যাপন কৰক', localLang: 'আপোনাৰ ভাষাত কোৱা', localLangDesc: 'অসমীয়া, হিন্দী, ভোজপুৰী — যিটো ভাষাত কোৱা সেইটোত উত্তৰ পাওক', whatsNew: 'নতুন কি?', whatsNewDesc: 'চৰকাৰী যোজনা আৰু নিয়মৰ নতুন আপডেট জানক' },
  voice: { title: 'সাথীক সুধিব', subtitle: 'কৈ প্ৰশ্ন সুধিব — সাথীয়ে আপোনাৰ ভাষাত উত্তৰ দিব', tapAndSpeak: 'হেঁচক আৰু কোৱা', listening: 'সাথীয়ে শুনি আছে…', thinking: 'সাথীয়ে চৰকাৰী তথ্য সত্যাপন কৰি আছে…', speaking: 'সাথীয়ে কৈ আছে…', typeAlternative: 'বা টাইপ কৰি সুধিব', typePlaceholder: 'আপোনাৰ প্ৰশ্ন ইয়াত লিখক…', sendButton: 'পঠিয়াওক', permissionDenied: 'মাইক্ৰোফোন অনুমতি নাই', permissionDeniedDesc: 'ব্ৰাউজাৰ ছেটিংছত মাইক্ৰোফোন অনুমতি দিয়ক।', micNotSupported: 'আপোনাৰ ব্ৰাউজাৰে ভইচ ৰিকগনিচন সমৰ্থন নকৰে। ক্ৰোম বা এজ ব্যৱহাৰ কৰক।', stopListening: 'বন্ধ কৰক', conversationStart: 'নমস্কাৰ! মই সাথী। আজি মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ? কবলৈ মাইক্ৰোফোন বুটাম হেঁচক।', trySaying: 'বা এই উদাহৰণবোৰ চেষ্টা কৰক:', exampleQuestions: ['মোৰ বাবে কোনটো চৰকাৰী যোজনা আছে?', 'লিজ ফী কিমান?', 'আধাৰ বাধ্যতামূলক এইটো সঁচা নেকি?', 'কৃষকসকলৰ বাবে কোনটো যোজনা আছে?'] },
  yojana: { ...JSON.parse(JSON.stringify(translations.hi.yojana)), title: 'আপোনাৰ বাবে যোজনা বিচাৰক', selectState: 'আপোনাৰ ৰাজ্য কি?', isFarmer: 'আপুনি কৃষক নেকি?', yes: 'হয়', no: 'নহয়', selectAge: 'আপোনাৰ বয়স কিমান?', whatHelp: 'আপোনাক কেনে সহায় লাগে?', findSchemes: 'যোজনা বিচাৰক', findingSchemes: 'আপোনাৰ বাবে যোজনা বিচাৰি আছোঁ…', resultsFound: 'যোজনা পোৱা গল' },
  scan: { ...JSON.parse(JSON.stringify(translations.hi.scan)), title: 'স্কেন কৰক আৰু বুজি লওক', listenExplanation: 'ব্যাখ্যা শুনক' },
  fee: { ...JSON.parse(JSON.stringify(translations.hi.fee)), title: 'চৰকাৰী ফী নে ঘুষ?', checkButton: 'সত্যাপন কৰক', checking: 'সত্যাপন হৈ আছে…' },
  rule: { ...JSON.parse(JSON.stringify(translations.hi.rule)), title: 'এই নিয়ম সঁচা নেকি?', checkButton: 'সত্যাপন কৰক', checking: 'সত্যাপন হৈ আছে…' },
  localLang: { ...JSON.parse(JSON.stringify(translations.hi.localLang)), title: 'আপোনাৰ ভাষাত কোৱা', notJustTranslation: 'কেৱল অনুবাদ নহয় — প্ৰকৃত বুজ' },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'নতুন কি?', listenUpdates: 'আপডেট শুনক' },
  safety: { ...JSON.parse(JSON.stringify(translations.hi.safety)), title: 'সত্যাপিত তথ্য. সৰল ভাষা.', footerLine: 'বিশ্বাস কৰাৰ আগতে, সাথীক সুধিব।' },
  common: { ...JSON.parse(JSON.stringify(translations.hi.common)), back: 'উভতি যাওক', close: 'বন্ধ কৰক', retry: 'পুনৰ চেষ্টা', loading: 'লোড হৈ আছে…', saathiSays: 'সাথীয়ে কয়', youSaid: 'আপুনি কলে', listen: 'শুনক', officialSource: 'চৰকাৰী উৎস', verifyNote: 'গুৰুত্বপূৰ্ণ: এই তথ্য চৰকাৰী উৎসৰ পৰা সত্যাপন কৰক।', voiceFallback: 'আপোনাৰ ডিভাইচত ভইচ সমৰ্থন ভিন্ন হব পাৰে। আপুনি টেক্সট মোডত আগবাঢ়িব পাৰে।', langConfirm: 'সাথীয়ে এতিয়া অসমীয়াত কোৱা হব।' },
};

const ne: Translation = {
  ...JSON.parse(JSON.stringify(translations.hi)),
  nav: { home: 'गृहपृष्ठ', ask: 'साथीलाई सोध्नुहोस्', yojana: 'योजना जाँचक', scan: 'स्क्यान गर्नुहोस् र बुझ्नुहोस्', fee: 'सरकारी शुल्क कि घुष?', rule: 'के यो नियम सत्य हो?', whatsNew: 'नयाँ के छ?', safety: 'सुरक्षा र विश्वास' },
  home: { tagline: 'तपाईंको आवाज. तपाईंको भाषा. तपाईंको अधिकार.', description: 'तपाईंले बोल्ने भाषामा सरकारी जानकारी बुझ्नुहोस्।', askButton: 'साथीलाई सोध्नुहोस्', micLabel: 'बोलेर सोध्नुहोस्', selectLanguage: 'भाषा छान्नुहोस्', featuresTitle: 'साथीले तपाईंलाई कसरी मद्दत गर्छ', featuresSubtitle: 'हरेक व्यक्तिलाई आफ्नो अधिकार र सरकारी सेवाको बारेमा जानकारी हुनुपर्छ', trustNote: 'साथी एक प्रोटोटाइप हो। महत्वपूर्ण जानकारी आधिकारिक सरकारी स्रोतबाट प्रमाणित गर्नुहोस्।', heroGreeting: 'नमस्ते! म साथी हुँ। म तपाईंलाई कसरी सहयोग गर्न सक्छु?', welcomeMessage: 'नमस्ते! म साथी हुँ। आज म तपाईंलाई कसरी सहयोग गर्न सक्छु?' },
  features: { askSaathi: 'साथीलाई सोध्नुहोस्', askSaathiDesc: 'आवाजले प्रश्न सोध्नुहोस्, साथीले जवाफ दिनेछ', yojana: 'तपाईंको लागि योजना खोज्नुहोस्', yojanaDesc: 'तपाईंको आवश्यकता अनुसार सरकारी योजना खोज्नुहोस्', scan: 'स्क्यान गर्नुहोस् र बुझ्नुहोस्', scanDesc: 'सरकारी कागजात वा सूचनाको फोटो अपलोड गर्नुहोस्', fee: 'सरकारी शुल्क कि घुष?', feeDesc: 'संकलन गरिएको पैसा सरकारी शुल्क हो कि जाँच्नुहोस्', rule: 'के यो नियम सत्य हो?', ruleDesc: 'सुनेको कुरा आधिकारिक जानकारीसँग जाँच्नुहोस्', localLang: 'तपाईंको भाषामा कुरा गर्नुहोस्', localLangDesc: 'नेपाली, हिन्दी, भोजपुरी — जुन भाषा बोल्नुहुन्छ त्यसैमा जवाफ पाउनुहोस्', whatsNew: 'नयाँ के छ?', whatsNewDesc: 'सरकारी योजना र नियमका नयाँ अपडेट जान्नुहोस्' },
  voice: { title: 'साथीलाई सोध्नुहोस्', subtitle: 'बोलेर प्रश्न सोध्नुहोस् — साथीले तपाईंको भाषामा जवाफ दिनेछ', tapAndSpeak: 'थिच्नुहोस् र बोल्नुहोस्', listening: 'साथी सुनिरहेको छ…', thinking: 'साथी आधिकारिक जानकारी जाँचिरहेको छ…', speaking: 'साथी बोलिरहेको छ…', typeAlternative: 'वा टाइप गरेर सोध्नुहोस्', typePlaceholder: 'तपाईंको प्रश्न यहाँ लेख्नुहोस्…', sendButton: 'पठाउनुहोस्', permissionDenied: 'माइक्रोफोन अनुमति अस्वीकृत', permissionDeniedDesc: 'ब्राउजर सेटिङमा माइक्रोफोन अनुमति दिनुहोस्।', micNotSupported: 'तपाईंको ब्राउजरले भoice रिकग्निसन सपोर्ट गर्दैन। क्रोम वा एज प्रयोग गर्नुहोस्।', stopListening: 'रोक्नुहोस्', conversationStart: 'नमस्ते! म साथी हुँ। आज म तपाईंलाई कसरी सहयोग गर्न सक्छु? बोल्न माइक्रोफोन बटन थिच्नुहोस्।', trySaying: 'वा यी उदाहरणहरू प्रयास गर्नुहोस्:', exampleQuestions: ['मेरो लागि कुन सरकारी योजना छ?', 'लिज शुल्क कति छ?', 'आधार अनिवार्य छ यो सत्य हो?', 'किसानहरूको लागि कुन योजना छ?'] },
  yojana: { ...JSON.parse(JSON.stringify(translations.hi.yojana)), title: 'तपाईंको लागि योजना खोज्नुहोस्', selectState: 'तपाईंको राज्य कुन हो?', isFarmer: 'के तपाईं किसान हुनुहुन्छ?', yes: 'हो', no: 'होइन', selectAge: 'तपाईंको उमेर कति छ?', whatHelp: 'तपाईंलाई कस्तो प्रकारको मद्दत चाहिन्छ?', findSchemes: 'योजना खोज्नुहोस्', findingSchemes: 'तपाईंको लागि योजना खोजिरहेको छु…', resultsFound: 'योजना फेला पर्यो' },
  scan: { ...JSON.parse(JSON.stringify(translations.hi.scan)), title: 'स्क्यान गर्नुहोस् र बुझ्नुहोस्', listenExplanation: 'व्याख्या सुन्नुहोस्' },
  fee: { ...JSON.parse(JSON.stringify(translations.hi.fee)), title: 'सरकारी शुल्क कि घुष?', checkButton: 'जाँच्नुहोस्', checking: 'जाँचिँदैछ…' },
  rule: { ...JSON.parse(JSON.stringify(translations.hi.rule)), title: 'के यो नियम सत्य हो?', checkButton: 'जाँच्नुहोस्', checking: 'जाँचिँदैछ…' },
  localLang: { ...JSON.parse(JSON.stringify(translations.hi.localLang)), title: 'तपाईंको भाषामा कुरा गर्नुहोस्', notJustTranslation: 'केवल अनुवाद होइन — वास्तविक बुझाइ' },
  whatsNew: { ...JSON.parse(JSON.stringify(translations.hi.whatsNew)), title: 'नयाँ के छ?', listenUpdates: 'अपडेट सुन्नुहोस्' },
  safety: { ...JSON.parse(JSON.stringify(translations.hi.safety)), title: 'प्रमाणित जानकारी. सरल भाषा.', footerLine: 'विश्वास गर्नुअघि, साथीलाई सोध्नुहोस्।' },
  common: { ...JSON.parse(JSON.stringify(translations.hi.common)), back: 'पछाडि', close: 'बन्द गर्नुहोस्', retry: 'फेरि प्रयास', loading: 'लोड हुँदैछ…', saathiSays: 'साथी भन्छ', youSaid: 'तपाईंले भन्नुभयो', listen: 'सुन्नुहोस्', officialSource: 'आधिकारिक स्रोत', verifyNote: 'महत्वपूर्ण: यो जानकारी आधिकारिक सरकारी स्रोतबाट प्रमाणित गर्नुहोस्।', voiceFallback: 'तपाईंको डिभाइसमा भoice सपोर्ट फरक हुन सक्छ। तपाईं टेक्स्ट मोडमा जारी राख्न सक्नुहुन्छ।', langConfirm: 'साथी अब नेपालीमा कुरा गर्नेछ।' },
};

// Merge new languages into the translations record
(translations as any).mr = mr;
(translations as any).bn = bn;
(translations as any).gu = gu;
(translations as any).pa = pa;
(translations as any).ta = ta;
(translations as any).te = te;
(translations as any).kn = kn;
(translations as any).ml = ml;
(translations as any).or = or;
(translations as any).as = as;
(translations as any).ne = ne;
