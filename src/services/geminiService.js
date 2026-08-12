import { questions } from "../data/questions";

// System Prompt for Gemini AI Guidance Counselor analyzing Text Responses
const SYSTEM_PROMPT = `
أنت خبير إرشاد أكاديمي ونفسي ومستشار في التخطيط المهني وسوق العمل للتعليم الجامعي، وتتمتع ببديهة عالية ومعرفة عميقة بتخصصات المستقبل ومتطلبات سوق العمل.

سيتم تزويدك بإجابات طالب ثانوية في استبيان بالنص الحر المباشر مكون من 12 سؤالاً يغطي المواد المدرسية، حلم الطفولة، الأنشطة المدرسية، طريقة المذاكرة، الفضول الرقمي، الشغف، والتطلعات.

مهمتك:
قم بتحليل النصوص والكلمات والتعبير الخاص بالطالب بدقة واستخراج النمط السلوكي والذهني والأكاديمي، ثم تقديم تقرير إرشادي جامعي مخصص وعميق بتنسيق JSON حصراً بنفس الهيكل التالي بالضبط وبدون أي نصوص خارجية أو markdown wrappers غير الـ JSON الصريح:

تنبيه هام جداً في قسم "whyMatch": 
يجب أن ترتكز أسباب الاختيار المذكورة في "whyMatch" على الكلمات والعبارات التي كتبها الطالب بالفعل في إجاباته، وتجنب افتراض أي كلام لم يذكره الطالب!

{
  "personalitySummary": "ملخص شامل لطبيعة تفكير الطالب وشغفه الأكاديمي والمهني بناءً على تحليلات كلماته الفعليه (3-4 أسطر).",
  "primaryMajor": {
    "name": "اسم التخصص الرئيسي باللغة العربية (مثال: علوم الحاسب وهندسة البرمجيات)",
    "englishName": "اسم التخصص بالإنجليزية",
    "category": "هندسة وتقنية / طب وصحة / إدارة واقتصاد / تصميم وإعلام / قانون وعلوم اجتماعية",
    "compatibilityScore": 96,
    "overview": "شرح مفصل ومحفز للتخصص وأهميته في المستقبل.",
    "whyMatch": [
      "سبب أول ينبع مباشرة من الكلمات أو الأفكار التي ذكرها الطالب في إجاباته بالفعل",
      "سبب ثاني مرتبط بنمط تفكيره التحليلي أو الإبداعي من النص",
      "سبب ثالث يتعلق بالشغف والأنشطة المدرسية المذكورة",
      "سبب رابع يرتبط برؤيته وتطلعاته المستقبلية"
    ],
    "coreSubjects": [
      "مادة أساسية 1",
      "مادة أساسية 2",
      "مادة أساسية 3",
      "مادة أساسية 4"
    ],
    "keySkills": [
      "مهارة تقنية أو علمية 1",
      "مهارة ذاتية أو تواصل 2",
      "مهارة تحليلية 3",
      "مهارة مستقبلية 4"
    ],
    "careerOutlook": {
      "demand": "مرتفع جداً / ممتاز",
      "medianSalary": "رواتب تنافسية مرتفعة (مثال: 14,000 - 28,000 ريال شهرياً)",
      "topRoles": [
        "مسمى وظيفي 1",
        "مسمى وظيفي 2",
        "مسمى وظيفي 3"
      ],
      "futureTrends": "تأثير الذكاء الاصطناعي والتحول الرقمي على هذا التخصص في العشر سنوات القادمة."
    },
    "actionPlan": [
      "خطوة 1: الدورات والمهارات التي يجب البدء بها فوراً خلال هذه الفترة",
      "خطوة 2: المشاريع العملية والتطبيقات الذاتية للتفوق قبل الجامعة",
      "خطوة 3: الشهادات المهنية واللغات المطلوب إتقانها",
      "خطوة 4: الانضمام للمجتمعات والأندية الأكاديمية والمهنية ذات الصلة"
    ]
  },
  "alternateMajors": [
    {
      "name": "التخصص البديل الأول",
      "englishName": "First Alternate Major Name",
      "category": "تصنيف التخصص",
      "compatibilityScore": 89,
      "overview": "نبذة مختصرة عن هذا التخصص وليماذا يعد خياراً ممتازاً كبديل.",
      "whyMatch": [
        "سبب توافق التخصص البديل 1",
        "سبب توافق التخصص البديل 2"
      ],
      "topRoles": ["وظيفة 1", "وظيفة 2"]
    },
    {
      "name": "التخصص البديل الثاني",
      "englishName": "Second Alternate Major Name",
      "category": "تصنيف التخصص",
      "compatibilityScore": 84,
      "overview": "نبذة مختصرة عن هذا التخصص الفرعي البديل.",
      "whyMatch": [
        "سبب توافق التخصص البديل الثاني 1",
        "سبب توافق التخصص البديل الثاني 2"
      ],
      "topRoles": ["وظيفة 1", "وظيفة 2"]
    }
  ]
}

تنبيه هام جداً: اجعل الإجابة دائماً باللغة العربية الفصيحة، محفزة، علمية، ومنظمة داخل كائن JSON فقط.
`;

// Detailed Major Knowledge Base
const BASE_MAJORS = {
  engineering_tech: {
    primary: {
      name: "علوم الحاسب وهندسة البرمجيات",
      englishName: "Computer Science & Software Engineering",
      category: "هندسة وتقنية",
      compatibilityScore: 97,
      overview: "تخصص محوري في كلية الحاسبات والمعلومات يدمج بين البرمجة، خوارزميات التفكير الذكي، وتطوير الأنظمة والتطبيقات والذكاء الاصطناعي.",
      coreSubjects: ["هياكل البيانات والتمثيل الخوارزمي", "برمجة الحاسب والأنظمة", "تعلم الآلة والذكاء الاصطناعي", "الأمن السيبراني وقواعد البيانات"],
      keySkills: ["البرمجة بلغة Python & C++", "التفكير الخوارزمي والتجريدي", "حل المشكلات وحساب الألغاز", "إدارة وتطوير المشاريع الرقمية"],
      careerOutlook: {
        demand: "مرتفع جداً في سوق العمل المحلي والعالمي",
        medianSalary: "رواتب تبدأ من 14,000 إلى 32,000 ريال شهرياً",
        topRoles: ["مهندس برمجيات (Software Engineer)", "مطور تطبيقات ومواقع (Full-Stack Developer)", "مهندس ذكاء اصطناعي (AI Engineer)"],
        futureTrends: "كلية الحاسبات تقود العالم اليوم، وسيزداد الطلب عالمياً على مهندسي ومطوري الأنظمة والذكاء الاصطناعي."
      },
      actionPlan: [
        "تعلم أساسيات البرمجة بلغة Python وتطبيق مشاريع بسيطة على GitHub.",
        "حل المسائل الخوارزمية والألغاز في منصات مثل LeetCode أو HackerRank.",
        "إتقان مصطلحات الحاسب باللغة الإنجليزية لتسهيل الدراسة الجامعية.",
        "الانضمام للمجتمعات والأندية البرمجية الطلابية لبناء خبرة عملية."
      ]
    },
    alternates: [
      {
        name: "الأمن السيبراني وشبكات الحاسب",
        englishName: "Cybersecurity & Computer Networks",
        category: "هندسة وتقنية",
        compatibilityScore: 92,
        overview: "تخصص حماية الأنظمة الرقمية والشبكات والمعلومات من التهديدات والاختراقات في المؤسسات والشركات.",
        topRoles: ["محلل أمن معلومات", "مهندس اختبار اختراق", "مستشار أمن شبكات"]
      },
      {
        name: "الذكاء الاصطناعي وعلم البيانات",
        englishName: "Artificial Intelligence & Data Science",
        category: "هندسة وتقنية",
        compatibilityScore: 88,
        overview: "تخصص بناء الخوارزميات الذكية ونماذج التنبؤ وتحليل البيانات الضخمة لاتخاذ القرارات.",
        topRoles: ["محلل بيانات ضخمة", "مهندس تعلم آلة", "عالم ذكاء اصطناعي"]
      }
    ]
  },
  medical_health: {
    primary: {
      name: "الطب البشري والعلوم الصحية",
      englishName: "Human Medicine & Healthcare",
      category: "طب وصحة",
      compatibilityScore: 96,
      overview: "دراسة وظائف أعضاء الجسم البشري، تقديم التشخيص والعلاج، وتقديم الرعاية الصحية والإنسانية الشاملة للمرضى.",
      coreSubjects: ["علم التشريح والأنسجة (Anatomy)", "علم الأدوية والعلاجيات (Pharmacology)", "علم أمراض الأعضاء (Pathology)", "الجراحة والتشخيص السريري"],
      keySkills: ["التشخيص السريري الدقيق", "التواصل الإنساني والتعاطف", "العمل تحت الضغوط الحرجة", "التفكير النقدي واستقراء الأعراض"],
      careerOutlook: {
        demand: "مطلوب بشكل دائم ومستمر عالمياً ومحلياً",
        medianSalary: "رواتب تبدأ من 16,000 إلى 45,000 ريال شهرياً",
        topRoles: ["طبيب بشري متخصص (Specialist Physician)", "طبيب جراح (Surgeon)", "باحث في العلوم الطبية والدواء"],
        futureTrends: "دمج التقنية والذكاء الاصطناعي يعزز من قوة الطبيب في التشخيص والعلاج والجراحة."
      },
      actionPlan: [
        "التركيز على التفوق في مواد الكيمياء والأحياء واللغة الإنجليزية.",
        "المشاركة في الأنشطة والتطوع الصحي في الجمعيات الطبية.",
        "التدريب على مهارات إدارة الوقت والضغط النفسي لتأهيل قدراتك."
      ]
    },
    alternates: [
      {
        name: "دكتور صيدلة (PharmD)",
        englishName: "Doctor of Pharmacy",
        category: "طب وصحة",
        compatibilityScore: 90,
        overview: "علم اكتشاف وتركيب ومراقبة الأدوية والتأكد من السلامة العلاجية للمرضى.",
        topRoles: ["صيدلي سريري", "باحث أدوية", "مستشار سلامة دوائية"]
      },
      {
        name: "هندسة المعدات الطبية الحيوية",
        englishName: "Biomedical Engineering",
        category: "طب وصحة",
        compatibilityScore: 85,
        overview: "الربط بين التكنولوجيا والهندسة والعلوم الطبية لتطوير الأجهزة والأطراف الصناعية.",
        topRoles: ["مهندس أجهزة طبية", "مصمم أطراف صناعية", "مطور تقنيات تصوير صحي"]
      }
    ]
  },
  business_finance: {
    primary: {
      name: "إدارة الأعمال وتحليل البيانات المالية",
      englishName: "Business Administration & Financial Analytics",
      category: "إدارة واقتصاد",
      compatibilityScore: 95,
      overview: "تخصص يركز على صياغة الاستراتيجيات التجاربة، التخطيط المالي، ريادة الأعمال، وإدارة الشركات والمؤسسات.",
      coreSubjects: ["التحليل المالي والاستثمار", "التسويق الرقمي وسلوك المستهلك", "إدارة العمليات وسلاسل الإمداد", "القيادة والاستراتيجية"],
      keySkills: ["التفكير الاستراتيجي وإدارة المشاريع", "تحليل البيانات المالية", "التفاوض والقيادة", "إدارة المخاطر والتسويق"],
      careerOutlook: {
        demand: "مرتفع ومستمر في كافة القطاعات والشركات الناشئة",
        medianSalary: "رواتب تبدأ من 12,000 إلى 35,000+ ريال شهرياً",
        topRoles: ["محلل مالي واستثماري", "مدير مشاريع تنفيذي", "رائد أعمال ومؤسس شركات"],
        futureTrends: "التحول نحو الأتمتة المالية يعزز من قيمة المحللين الاستراتيجيين وقادة الأعمال الرقمية."
      },
      actionPlan: [
        "قراءة كتب أساسيات إدارة الأعمال والاستثمار والتخطيط المالي.",
        "تعلم مهارات تحليل البيانات باستخدام برنامج Excel المتقدم و PowerBI.",
        "متابعة الأخبار الاقتصادية وحركة الشركات والأسواق المالية."
      ]
    },
    alternates: [
      {
        name: "التسويق الرقمي وتحليل سلوك المستهلك",
        englishName: "Digital Marketing & Analytics",
        category: "إدارة واقتصاد",
        compatibilityScore: 89,
        overview: "بناء العلامات التجارية وتنسيق الحملات التسويقية الموجهة بالبيانات وتحليل منصات التواصل.",
        topRoles: ["مدير تسويق رقمي", "محلل سلوك مستهلك", "استراتيجي نمو للمتاجر"]
      },
      {
        name: "إدارة سلاسل الإمداد واللوجستيات",
        englishName: "Supply Chain & Logistics Management",
        category: "إدارة واقتصاد",
        compatibilityScore: 84,
        overview: "إدارة حركة المنتجات والخدمات عالمياً بأعلى كفاءة وأقل تكلفة زمنية ومالية.",
        topRoles: ["مدير سلاسل إمداد", "مخطط عمليات لوجستية", "استشاري كفاءة التشغيل"]
      }
    ]
  },
  design_art_media: {
    primary: {
      name: "التصميم البصري والوسائط المتعددة (UI/UX & Media)",
      englishName: "Visual Communication & UI/UX Design",
      category: "تصميم وإعلام",
      compatibilityScore: 96,
      overview: "تخصص يجمع بين فنون التصميم الجرافيكي، تصميم واجهات وتجارب المستخدم للتطبيقات، والإنتاج البصري الرقمي.",
      coreSubjects: ["تصميم واجهات المستخدم (UI Design)", "بحث تجربة المستخدم (UX Research)", "الوسائط التفاعلية والمونتاج", "الهوية البصرية والعلامات التجارية"],
      keySkills: ["إتقان برامج التصميم (Figma, Illustrator)", "التفكير التصميمي", "فهم علم النفس البصري", "صناعة القصة البصرية"],
      careerOutlook: {
        demand: "طلب عالي متزايد مع طفرة التطبيقات والمتاجر الرقمية",
        medianSalary: "رواتب تبدأ من 10,000 إلى 26,000 ريال شهرياً",
        topRoles: ["مصمم واجهات وتجربة مستخدم (UI/UX)", "مدير فني إبداعي", "مصمم هوية بصري وباحث تصميم"],
        futureTrends: "مع توسع الذكاء الاصطناعي التوليدي، يزداد الطلب على المصممين ذوي التفكير الاستراتيجي والإنساني."
      },
      actionPlan: [
        "تعلم أداة Figma لبناء واجهات التطبيقات وتصفح منصات مثل Behance.",
        "بناء معرض أعمال (Portfolio) يحتوي على 3 مشاريع تصميمية مبتكرة.",
        "قراءة كتب تجربة المستخدم لفهم سلوك المستهلك."
      ]
    },
    alternates: [
      {
        name: "صناعة الإعلام الرقمي وإنتاج الفيديوهات",
        englishName: "Digital Media Production & Filmmaking",
        category: "تصميم وإعلام",
        compatibilityScore: 89,
        overview: "فنون الإخراج، التصوير، السرد القصصي، وإنتاج المحتوى الرقمي التفاعلي للمنصات.",
        topRoles: ["صانع محتوى وفيديو", "مخرج وسائط رقمية", "مختص مونتاج ومؤثرات"]
      },
      {
        name: "التصميم الداخلي والمشاهد البصرية",
        englishName: "Interior & Spatial Design",
        category: "تصميم وإعلام",
        compatibilityScore: 83,
        overview: "ابتكار المساحات المعمارية والداخلية وتنسيق الأثاث والإضاءة لخلق تجارب سكنية وتجارية.",
        topRoles: ["مصمم داخلي", "مخطط مساحات تجارية", "مصمم بيئات افتراضية 3D"]
      }
    ]
  },
  law_social: {
    primary: {
      name: "القانون التجاري والتشريعات الرقمية",
      englishName: "Corporate Law & Digital Regulations",
      category: "قانون وعلوم اجتماعية",
      compatibilityScore: 95,
      overview: "دراسة الأنظمة القانونية، صياغة العقود التجارية، وحماية الملكية الفكرية والدفاع عن الحقوق في العالم الواقعي والرقمي.",
      coreSubjects: ["القانون التجاري والشركات", "التشريعات الرقمية والذكاء الاصطناعي", "القانون الدولي", "صياغة العقود والتفاوض"],
      keySkills: ["التحليل النصي والحجة القانونية", "التفاوض والوساطة في النزاعات", "إتقان الصياغة واللغة القانونية", "البحث والتدقيق في القضايا"],
      careerOutlook: {
        demand: "طلب مرتفع ومستمر في مكاتب المحاماة والشركات الكبرى",
        medianSalary: "رواتب تبدأ من 13,000 إلى 35,000+ ريال شهرياً",
        topRoles: ["محامٍ ومستشار قانوني", "خبير عقود وتأسيس شركات", "مختص امتثال وتشريعات تقنية"],
        futureTrends: "بروز القضايا المتعلقة بالأمن السيبراني، الذكاء الاصطناعي، والملكية الفكرية يصنع جيلاً جديداً من المحامين."
      },
      actionPlan: [
        "قراءة اللوائح والأنظمة التجارية وقوانين وحماية الملكية الفكرية.",
        "متابعة المناظرات القانونية والجلسات التدريبية لتنمية مهارات التحدث.",
        "تنمية مهارات الكاتبة والتحليل باللغتين العربية والإنجليزية."
      ]
    },
    alternates: [
      {
        name: "علم النفس الإرشادي والتحليل السلوكي",
        englishName: "Counseling Psychology & Behavioral Analysis",
        category: "قانون وعلوم اجتماعية",
        compatibilityScore: 89,
        overview: "فهم الأعماق البشرية، تحليل الدوافع والسلوكيات، وتقديم الاستشارات التطويرية.",
        topRoles: ["أخصائي نفسي إرشادي", "مستشار سلوك وظيفي", "باحث سلوكي"]
      },
      {
        name: "العلاقات العامة والتواصل المؤسسي",
        englishName: "Public Relations & Communication",
        category: "قانون وعلوم اجتماعية",
        compatibilityScore: 84,
        overview: "صياغة صورة المؤسسات، إدارة السمعة والرسائل الإعلامية، والتعامل مع الأزمات.",
        topRoles: ["مدير علاقات عامة", "متحدث رسمي للمؤسسة", "مستشار إدارة أزمات"]
      }
    ]
  }
};

/**
 * Intelligent Keyword NLP Rule-Based Analyzer with DYNAMIC EXCERPT MATCHING
 */
export function analyzeQuizAnswersFallback(userAnswers) {
  const scores = {
    engineering_tech: 0,
    medical_health: 0,
    business_finance: 0,
    design_art_media: 0,
    law_social: 0
  };

  const matchedUserExcerpts = [];

  const keywords = {
    engineering_tech: [
      "حاسب", "برمجة", "كمبيوتر", "رياضيات", "أرقام", "أجهزة", "روبوت", "تقنية", "كود", "تكود", 
      "خوارزميات", "هندسة", "تطبيقات", "موقع", "برمجيات", "تطوير", "ذكاء اصطناعي", "حاسبات", "مبرمج",
      "computer", "math", "coding", "software", "tech", "algorithm", "engineering", "app", "python", "ai"
    ],
    medical_health: [
      "أحياء", "كيمياء", "طب", "صحة", "دواء", "صيدلية", "مستشفى", "علاج", "مرضى", "تشريح", "عيادة", 
      "مختبر", "علوم صحية", "إسعافات", "طبيب", "سريري", "أطباء", "بيولوجيا",
      "biology", "chemistry", "doctor", "medicine", "health", "pharmacy", "hospital", "patient", "clinic"
    ],
    business_finance: [
      "تجارة", "إحصاء", "أسواق", "شركات", "أرباح", "ميزانية", "تسويق", "إدارة", "استثمار", "فلوس", 
      "أموال", "ريادة", "مشروع", "تاجر", "صفقات", "شركة", "بنوك",
      "business", "finance", "money", "trading", "marketing", "sales", "profit", "canteen", "stock"
    ],
    design_art_media: [
      "رسم", "فنية", "تصميم", "إعلام", "تصوير", "مونتاج", "فوتوشوب", "ألوان", "بوسترات", "فن", 
      "إخراج", "صور", "معرض", "مجسم", "هوية بصري", "ديزاين", "رسام",
      "art", "design", "media", "drawing", "photo", "video", "aesthetic", "creative", "poster"
    ],
    law_social: [
      "تاريخ", "لغتي", "قانون", "محاماة", "مجتمع", "إذاعة", "إلقاء", "مناظرة", "تعبير", "مقالات", 
      "علم نفس", "تدريس", "حقوق", "دفاع", "مستشار", "محكمة", "نظام",
      "law", "history", "speech", "debate", "advocacy", "teaching", "social", "essay"
    ]
  };

  // Extract student text lines
  const userTextLines = [];
  Object.values(userAnswers).forEach((text) => {
    if (text && typeof text === "string" && text.trim().length > 0) {
      userTextLines.push(text.trim());
      const lower = text.toLowerCase();

      Object.keys(keywords).forEach((cat) => {
        keywords[cat].forEach((kw) => {
          if (lower.includes(kw)) {
            // Extra heavy weight for computer science & tech terms when typed
            if (cat === "engineering_tech" && (kw === "حاسب" || kw === "برمجة" || kw === "كمبيوتر" || kw === "حاسبات" || kw === "كود")) {
              scores[cat] += 3;
            } else {
              scores[cat] += 1;
            }
            if (!matchedUserExcerpts.includes(text.trim()) && text.trim().length < 80) {
              matchedUserExcerpts.push(text.trim());
            }
          }
        });
      });
    }
  });

  // Sort categories by highest score
  const sortedCategories = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const primaryCat = sortedCategories[0] || "engineering_tech";
  const categoryData = BASE_MAJORS[primaryCat] || BASE_MAJORS.engineering_tech;

  // Build DYNAMIC reasons based on actual user text snippets!
  const dynamicWhyMatch = [];
  
  if (userTextLines.length > 0) {
    dynamicWhyMatch.push(`ذكرك الصريح والواضح في إجاباتك: "${userTextLines[0]}"`);
  }
  if (userTextLines.length > 1) {
    dynamicWhyMatch.push(`تأكيدك في الاستبيان على: "${userTextLines[1]}"`);
  } else {
    dynamicWhyMatch.push(`التوافق المباشر بين كلماتك وتطلعات التخصص الأكاديمي.`);
  }

  if (primaryCat === "engineering_tech") {
    dynamicWhyMatch.push("عشقك الملاحظ للتفكير الخوارزمي، حل الألغاز، والتعامل مع برمجيات وحواسيب المستقبل.");
    dynamicWhyMatch.push("توافق قدراتك التحليلية مع متطلبات كلية الحاسبات وهندسة البرمجيات والذكاء الاصطناعي.");
  } else if (primaryCat === "medical_health") {
    dynamicWhyMatch.push("اهتمامك الواضح بالعلوم الصحية، الأحياء، ومساعدة المرضى والرعاية الطبية.");
    dynamicWhyMatch.push("توافق شغفك العلمي مع متطلبات الطب البشري والعلوم الصحية والدواء.");
  } else if (primaryCat === "business_finance") {
    dynamicWhyMatch.push("عقليتك التنظيمية والتجارية واهتمامك بريادة الأعمال والتخطيط المالي للشركات.");
    dynamicWhyMatch.push("توافق نمط تفكيرك مع علوم إدارة الأعمال والتسويق وتحليل الأسواق.");
  } else if (primaryCat === "design_art_media") {
    dynamicWhyMatch.push("حسك الفني البصري وشغفك بعالم التصميم والابتكار الجمالي وإنتاج الوسائط.");
    dynamicWhyMatch.push("توافق خيالك الإبداعي مع تخصصات التصميم البصري، UI/UX، والإعلام الرقمي.");
  } else {
    dynamicWhyMatch.push("مهاراتك اللغوية والحوارية واهتمامك بالأنظمة والقضايا الاجتماعية والحقوق.");
    dynamicWhyMatch.push("توافق أسلوبك البق والمعرفي مع تخصصات القانون والإرشاد والعلوم الاجتماعية.");
  }

  const sampleExcerpt = userTextLines.length > 0 ? userTextLines.join(" ، ") : "إجاباتك في الاستبيان";

  const resultPayload = {
    personalitySummary: `بناءً على تحليلاتنا النصية لكلماتك الفعليّة التي كتبتها بنفسك: (${sampleExcerpt.slice(0, 150)}...)، يتبين أن نمط تفكيرك وشغفك الأكاديمي ينتمي بقوة إلى مجال (${categoryData.primary.category}). تظهر إجاباتك توازناً ممتازاً بين التفكير العلمي/الفني، القدرة على حل التحديات، والدافع القوي للتميز المهني.`,
    primaryMajor: {
      ...categoryData.primary,
      whyMatch: dynamicWhyMatch
    },
    alternateMajors: categoryData.alternates.map((alt) => ({
      ...alt,
      whyMatch: [
        `خيار بديل يتوافق مع اهتمامك الملاحظ في الاستبيان.`,
        `يتيح لك خيارات عمل متسعة ومطلوبة في سوق العمل.`
      ]
    }))
  };

  return resultPayload;
}

/**
 * Gemini API Live Integration Service for Text Responses
 */
export async function analyzeQuizAnswersWithGemini(userAnswers, apiKey) {
  if (!apiKey || apiKey.trim() === "") {
    console.log("No Gemini API key provided. Executing Dynamic Text NLP Fallback Engine...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return analyzeQuizAnswersFallback(userAnswers);
  }

  // Format open text answers cleanly for Gemini prompt
  const formattedAnswers = questions.map((q) => {
    const textAnswer = userAnswers[q.id] || "لم يقدم الطالب إجابة";
    return `السؤال ${q.id} (${q.category} - ${q.question}):
  إجابة الطالب النصية الحقيقية: "${textAnswer}"`;
  }).join("\n\n");

  const promptText = `
إجابات طالب الثانوية النصية الحقيقية والمدخلة في الاستبيان:
${formattedAnswers}

يرجى تحليل الكلمات والعبارات التي كتبها الطالب بالفعل في هذه الإجابات وبناء تقرير التوجيه الجامعي المكتمل بتنسيق JSON حصراً بنفس الهيكل المطلوب مع الالتزام التام بذكره في "whyMatch" عبارات ترتكز على إجاباته الفعيلة.
`;

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey.trim()}`;
    
    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }, { text: promptText }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        responseMimeType: "application/json"
      }
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.warn("Gemini API Error Response:", errData);
      throw new Error(errData?.error?.message || `Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error("لم يتم استلام رد نصي من نموذج Gemini.");
    }

    let cleanedJsonString = rawText.trim();
    if (cleanedJsonString.startsWith("```json")) {
      cleanedJsonString = cleanedJsonString.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    } else if (cleanedJsonString.startsWith("```")) {
      cleanedJsonString = cleanedJsonString.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }

    const parsedResult = JSON.parse(cleanedJsonString);
    return parsedResult;

  } catch (error) {
    console.error("Failed to connect to Gemini API. Falling back to local NLP smart analyzer:", error);
    return analyzeQuizAnswersFallback(userAnswers);
  }
}
