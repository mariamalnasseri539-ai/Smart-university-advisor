import { questions } from "../data/questions";

// System Prompt for Gemini AI Guidance Counselor
const SYSTEM_PROMPT = `
أنت خبير إرشاد أكاديمي ونفسي ومستشار في التخطيط المهني وسوق العمل للتعليم الجامعي، وتتمتع ببديهة عالية ومعرفة عميقة بتخصصات المستقبل ومتطلبات سوق العمل المحلي والعالمي.

سيتم تزويدك بإجابات طالب في استبيان مكون من 12 سؤالاً يغطي الميول العلمية، نمط التفكير، بيئة العمل المفضلة، حل المشكلات، الشغف، والهدف الوظيفي.

مهمتك:
أنت مطالب بتحليل الإجابات بدقة ودراسة التوافق النفسي والأكاديمي للطالب، ثم تقديم تقرير إرشادي جامعي متكامل وعميق بتنسيق JSON حصراً بنفس الهيكل التالي بالضبط وبدون أي نصوص خارجية أو markdown wrappers غير الـ JSON الصريح:

{
  "personalitySummary": "ملخص شامل لطبيعة تفكير الطالب وشغفه الأكاديمي والمهني (3-4 أسطر).",
  "primaryMajor": {
    "name": "اسم التخصص الرئيسي باللغة العربية (مثال: هندسة الذكاء الاصطناعي والدعم الخوارزمي)",
    "englishName": "اسم التخصص بالإنجليزية",
    "category": "هندسة وتقنية / طب وصحة / إدارة واقتصاد / تصميم وإعلام / قانون وعلوم اجتماعية",
    "compatibilityScore": 96,
    "overview": "شرح مفصل ومحفز للتخصص وأهميته في المستقبل.",
    "whyMatch": [
      "سبب أول ينبع مباشرة من اختيار الطالب في الاستبيان",
      "سبب ثاني مرتبط بنمط تفكيره التحليلي أو الإبداعي",
      "سبب ثالث يتعلق ببيئة العمل والشغف المهني",
      "سبب رابع يرتبط بتطلعاته المالية والمستقبلية"
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
      "medianSalary": "رواتب تنافسية مرتفعة (مثال: 12,000 - 25,000 ريال شهرياً / حسب المنطقة)",
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

تنبيه هام جداً: اجعل الإجابة دائماً باللغة العربية الفصيحة، محفزة، علمية، ومنظمة داخل كائن JSON فقط بدون أي مقدمات أو خاتمة خوارزمية.
`;

// Detailed Fallback Major Knowledge Base
const FALLBACK_MAJORS_DATABASE = {
  engineering_tech: {
    primary: {
      name: "هندسة البرمجيات والذكاء الاصطناعي",
      englishName: "Software Engineering & Artificial Intelligence",
      category: "هندسة وتقنية",
      compatibilityScore: 97,
      overview: "تخصص محوري يدمج بين منطق الخوارزميات، تطوير الأنظمة الذكية، وبناء الحلول البرمجية الشاملة التي تقود التحول الرقمي العالمي.",
      whyMatch: [
        "تفوقك في حل المشكلات البرمجية والتفكير المنطقي المتسلسل.",
        "شغفك بالرياضيات والمعادلات الحسابية والتقنيات الرقمية الحديثة.",
        "تفضيلك لبيئات العمل التكنولوجية المرنة وفرص العمل العالمية.",
        "رغبتك في بناء منتجات ذات أثر ملموس ورواتب تنافسية عالية."
      ],
      coreSubjects: ["هياكل البيانات والتمثيل الخوارزمي", "تعلم الآلة والذكاء الاصطناعي", "هندسة البرمجيات وتصميم الأنظمة", "الأمن السيبراني وقواعد البيانات"],
      keySkills: ["البرمجة بلغة Python & C++", "التفكير الخوارزمي والتجريدي", "إدارة المشاريع البرمجية Agile", "تفكير التصميم وحل المشكلات المعقدة"],
      careerOutlook: {
        demand: "مرتفع جداً وفي نمو قياسي متواصل",
        medianSalary: "رواتب تبدأ من 14,000 إلى 30,000 ريال شهرياً",
        topRoles: ["مهندس ذكاء اصطناعي (AI Engineer)", "مطور أنظمة خوارزمية (Software Architect)", "مهندس بيانات ضخمة (Data Engineer)"],
        futureTrends: "الذكاء الاصطناعي سيزيد من أتمتة المهام الروتينية بينما سينمي الحاجة لمهندسي البرمجيات المبتكرين للأنظمة المتقدمة."
      },
      actionPlan: [
        "تعلم أساسيات البرمجة بلغة Python وتطبيق أفكار مشاريع صغيرة على GitHub.",
        "حل المسائل الخوارزمية والألغاز في منصات مثل LeetCode أو HackerRank.",
        "إتقان اللغة الإنجليزية التقنية لمتابعة التحديثات والأبحاث في الذكاء الاصطناعي.",
        "المشاركة في الهاكاثونات والأنشطة التقنية الطلابية لبناء شبكة علاقات ممتازة."
      ]
    },
    alternates: [
      {
        name: "الأمن السيبراني وجرائم المعلومات",
        englishName: "Cybersecurity & Digital Forensics",
        category: "هندسة وتقنية",
        compatibilityScore: 91,
        overview: "تخصص الاستجابة السريعة وحماية البنيات التحتية الرقمية للمؤسسات والشركات من الاختراقات والتهديدات الأمنية.",
        whyMatch: ["رغبتك العالية في حماية البيانات وحل الألغاز المعقدة.", "تفضيلك للتخصصات التقنية ذات الأمان الوظيفي العالي."],
        topRoles: ["محلل أمن معلومات", "مهندس اختبار اختراق (Penetration Tester)", "استشاري حماية سحابية"]
      },
      {
        name: "هندسة الروبوتات والأنظمة المدمجة",
        englishName: "Robotics & Embedded Systems Engineering",
        category: "هندسة وتقنية",
        compatibilityScore: 86,
        overview: "الربط الهندسي المباشر بين البرمجة الذكية والمعدات الميكانيكية والشرائح الإلكترونية المتقدمة.",
        whyMatch: ["حبك لتفكيك وتركيب الأجهزة والتطبيقات الفيزيائية.", "تطلعك للمستقبل الصناعي والأتمتة الذكية."],
        topRoles: ["مهندس روبوتات", "مهندس أنظمة مدمجة", "مطور أجهزة الإنترنت الذكية (IoT)"]
      }
    ]
  },
  medical_health: {
    primary: {
      name: "الطب البشري والتقنيات الطبية الحديثة",
      englishName: "Human Medicine & Medical Technologies",
      category: "طب وصحة",
      compatibilityScore: 96,
      overview: "المهنة الإنسانية الأسمى التي تجمع بين البحث العلمي الدقيق في وظائف الجسم البشري وتقديم التشخيص والعلاج والرعاية الصحية الفائقة.",
      whyMatch: [
        "شغفك العميق بعلم الأحياء والفيزيولوجيا وظواهر جسم الإنسان.",
        "دافعك الإنساني الكبير لمساعدة الآخرين والتخفيف من آلامهم.",
        "قدرتك العالية على التحمل والتركيز والتفاصيل الطبية الدقيقة.",
        "تطلعك لمكانة اجتماعية واعدة وأمان وظيفي طويل الأمد."
      ],
      coreSubjects: ["علم التشريح وعلم الأنسجة (Anatomy)", "علم الأدوية والعلاجيات (Pharmacology)", "علم أمراض الأعضاء (Pathology)", "التقنيات التشخيصية والجراحة"],
      keySkills: ["التشخيص السريري الدقيق", "التواصل الإنساني والتعاطف مع المرضى", "العمل تحت الضغوط الحرجة", "التفكير النقدي واستقراء الأعراض"],
      careerOutlook: {
        demand: "مطلوب بشكل دائم ومستمر عالمياً ومحلياً",
        medianSalary: "رواتب تبدأ من 16,000 إلى 45,000 ريال شهرياً بعد الاختصاص",
        topRoles: ["طبيب بشري متخصص (Specialist Physician)", "طبيب جراح (Surgeon)", "باحث في الأدوية والعلوم الطبية"],
        futureTrends: "دمج الذكاء الاصطناعي في التشخيص المبكر والأطباء يزدادون قوة بالاستعانة بالتقنيات الدقيقة والجراحة الروبوتية."
      },
      actionPlan: [
        "التركيز على تحصيل درجات متميزة في الكيمياء والأحياء واللغة الإنجليزية.",
        "المشاركة في الأنشطة التطوعية في الجمعيات الصحية أو المستشفيات لإدراك طبيعة البيئة الطبية.",
        "متابعة المنشورات والمجلات الطبية الموثوقة لتوسيع حصيلتك المصطلحية.",
        "التدريب على مهارات إدارة الوقت والضغط النفسي لتأهيل قدراتك للسنوات الجامعية الطويلة."
      ]
    },
    alternates: [
      {
        name: "دكتور صيدلة والعلوم الدوائية (PharmD)",
        englishName: "Doctor of Pharmacy & Pharmaceutical Sciences",
        category: "طب وصحة",
        compatibilityScore: 90,
        overview: "علم اكتشاف وتركيب ومراقبة الأدوية والتأكد من الأمان العلاجي للمرضى والمشاركة في الأبحاث السريرية.",
        whyMatch: ["عشقك للكيمياء والتفاعلات الجزيئية.", "تفضيلك للعمل في بيئة أبحاث أو رعاية صحية منتظمة."],
        topRoles: ["صيدلي سريري (Clinical Pharmacist)", "باحث تطوير أدوية", "مستشار سلامة دوائية"]
      },
      {
        name: "هندسة المعدات الطبية الحيوية",
        englishName: "Biomedical Engineering",
        category: "طب وصحة",
        compatibilityScore: 85,
        overview: "الجسر الرائع الذي يجمع بين التكنولوجيا والهندسة والعلوم الطبية لتطوير الأجهزة والأطراف الصناعية.",
        whyMatch: ["دمجك اللطيف بين الحب للطب والاهتمام بالتقنية والمعدات.", "تفضيلك للابتكار في المعدات العلاجية."],
        topRoles: ["مهندس أجهزة طبية", "مصمم أطراف صناعية ذكية", "مطور تقنيات تصوير صحي"]
      }
    ]
  },
  business_finance: {
    primary: {
      name: "إدارة الأعمال وتحليل البيانات المالية",
      englishName: "Business Administration & Financial Analytics",
      category: "إدارة واقتصاد",
      compatibilityScore: 95,
      overview: "تخصص ديناميكي يركز على صياغة الاستراتيجيات التجارية، التخطيط المالي، ريادة الأعمال، وإدارة المؤسسات في عصر الاقتصادات الرقمية.",
      whyMatch: [
        "عقليتك القيادية والاستراتيجية وقدرتك على تقييم المخاطر والتكاليف.",
        "شغفك بريادة الأعمال وفهم حركة الأسواق والمشاريع الاستثمارية.",
        "مهاراتك في إدارة فرق العمل والمفاوضات واتخاذ القرارات الحاسمة.",
        "تطلعك لفرص نمو مالي سريع وتأسيس أعمالك الخاصة."
      ],
      coreSubjects: ["التحليل المالي والاستثمار", "التسويق الرقمي وسلوك المستهلك", "إدارة سلاسل الإمداد والعمليات", "القيادة والاستراتيجية المؤسسية"],
      keySkills: ["التفكير الاستراتيجي وإدارة المشاريع", "تحليل البيانات المالية (Financial Modeling)", "التفاوض والإقناع القيادي", "مرونة التكيف مع متغيرات السوق"],
      careerOutlook: {
        demand: "مرتفع ومستمر في كافة القطاعات والشركات الناشئة",
        medianSalary: "رواتب تبدأ من 12,000 إلى 35,000+ ريال شهرياً وتزيد بالمكافآت",
        topRoles: ["محلل مالي واستثماري (Financial Analyst)", "مدير مشاريع تنفيذي (Project Manager)", "رائد أعمال ومؤسس شركات"],
        futureTrends: "تحول الشركات نحو الأتمتة المالية يعزز من قيمة المحللين الاستراتيجيين وقادة الأعمال الرقمية."
      },
      actionPlan: [
        "قراءة كتب أساسيات إدارة الأعمال والاستثمار مثل كتاب 'الأب الغني والأب الفقير' و'تفكير ريادي'.",
        "تعلم مهارات تحليل البيانات باستخدام برنامج Excel المتقدم و PowerBI.",
        "متابعة الأخبار الاقتصادية وحركة الشركات والأسواق المال العالمية والمحلية.",
        "بدء مشروع تجاري مصغر أو متجر إلكتروني بسيط لاكتساب خبرة تطبيقية فورية."
      ]
    },
    alternates: [
      {
        name: "التسويق الرقمي وتحليل سلوك المستهلك",
        englishName: "Digital Marketing & Consumer Analytics",
        category: "إدارة واقتصاد",
        compatibilityScore: 89,
        overview: "فنون وبحوث بناء العلامات التجارية وصياغة الحملات التسويقية الموجهة بالبيانات وتحليل منصات التواصل.",
        whyMatch: ["مزجك المتوازن بين العقلية التجاري واللمسة الإبداعية.", "تفضيلك للعمل في قطاع صناعة المحتوى والإعلان."],
        topRoles: ["مدير تسويق رقمي", "محلل سلوك مستهلك", "استراتيجي نمو للمتاجر (Growth Hacker)"]
      },
      {
        name: "إدارة سلاسل الإمداد والخدمات اللوجستية",
        englishName: "Supply Chain & Logistics Management",
        category: "إدارة واقتصاد",
        compatibilityScore: 84,
        overview: "إدارة حركة المنتجات والخدمات عالمياً من المصدر إلى المستهلك بأعلى كفاءة وأقل تكلفة زمنية ومالية.",
        whyMatch: ["حبك للتنظيم الدقيق وإدارة العمليات الميدانية والتجارية.", "مطلوب بقوة في قطاع اللوجستيات المتنامي."],
        topRoles: ["مدير سلاسل إمداد", "مخطط عمليات لوجستية", "استشاري كفاءة التشغيل"]
      }
    ]
  },
  design_art_media: {
    primary: {
      name: "التصميم البصري والوسائط المتعددة (UI/UX & Media Design)",
      englishName: "Visual Communication & UI/UX Design",
      category: "تصميم وإعلام",
      compatibilityScore: 96,
      overview: "عالم إبداعي رائع يجمع بين فنون التصميم الجرافيكي، تصميم واجهات وتجارب المستخدم للتطبيقات، والإنتاج البصري الرقمي.",
      whyMatch: [
        "حسك الفني البصري وشغفك بعالم الألوان والتصاميم المبتكرة.",
        "تفكيرك الإبداعي خارج الصندوق ورغبتك في تجنب الروتين الوظيفي القاتل.",
        "قدرتك على تجسيد الأفكار المعقدة في صور وتجارب مرئية ساحرة.",
        "تفضيلك لبيئات العمل الإبداعية الملهمة وإمكانية العمل الحر (Freelancing)."
      ],
      coreSubjects: ["تصميم واجهات المستخدم (UI Design)", "بحث هندسة تجربة المستخدم (UX Research)", "الوسائط التفاعلية والمونتاج", "الهوية البصرية والعلامات التجارية"],
      keySkills: ["إتقان برامج التصميم (Figma, Illustrator, Photoshop)", "التفكير التصميمي (Design Thinking)", "فهم علم النفس البصري وسلوك المستخدم", "صناعة القصة البصرية (Storytelling)"],
      careerOutlook: {
        demand: "طلب عالي متزايد مع طفرة التطبيقات والمتاجر الرقمية",
        medianSalary: "رواتب تبدأ من 10,000 إلى 26,000 ريال شهرياً مع دخل إضافي حر",
        topRoles: ["مصمم تجربة وواجهة مستخدم (UI/UX Designer)", "مدير فني إبداعي (Art Director)", "مصمم هوية بصري وباحث تصميم"],
        futureTrends: "مع توسع تطبيقات الذكاء الاصطناعي التوليدي، يزداد الطلب على المصممين ذوي التفكير الإستراتيجي والإنساني."
      },
      actionPlan: [
        "تعلم أداة Figma لبناء واجهات التطبيقات والمواقع وتصفح منصات مثل Dribbble و Behance.",
        "بناء بورتفوليو (معرض أعمال) يحتوي على 3 مشاريع تصميمية مبتكرة.",
        "قراءة كتب تجربة المستخدم مثل 'Don't Make Me Think' لفهم سلوك الزوار.",
        "متابعة المصممين المحترفين على منصات التواصل واكتساب مهارات تقديم العروض البصرية."
      ]
    },
    alternates: [
      {
        name: "صناعة الإعلام الرقمي وإنتاج الفيديوهات",
        englishName: "Digital Media Production & Filmmaking",
        category: "تصميم وإعلام",
        compatibilityScore: 89,
        overview: "فنون الإخراج، التصوير، السرد القصصي، وإنتاج الأفلام والمحتوى الرقمي التفاعلي للمنصات العالمية.",
        whyMatch: ["عشقك لسرد القصص وصناعة الفيديوهات والتعبير عن الأفكار.", "تفضيلك للحرية الإبداعية والميدانية."],
        topRoles: ["صانع محتوى وفيديو", "مخرج وسائط رقمية", "مختص مونتاج ومؤثرات بصري"],
      },
      {
        name: "التصميم الداخلي والمشاهد البصرية",
        englishName: "Interior & Spatial Design",
        category: "تصميم وإعلام",
        compatibilityScore: 83,
        overview: "ابتكار المساحات المعمارية والداخلية وتنسيق الأثاث والإضاءة لخلق تجارب سكنية وتجارية مذهلة.",
        whyMatch: ["حسك البصري في تنسيق الأبعاد والألوان للمساحات الواقعية.", "شغفك بالجمال المعماري."],
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
      overview: "تخصص حيوي يتناول دراسة الأنظمة القانونية، صياغة العقود التجارية، وحماية الملكية الفكرية والدفاع عن الحقوق في العالم الواقعي والرقمي.",
      whyMatch: [
        "مهاراتك العالية في الحوار، صياغة الحجج والبراهين، والتحليل اللغوي.",
        "دافعك القوي لنصرة العدالة وتطبيق الأخلاقيات والأنظمة.",
        "قدرتك على التفكير المنطقي واستقراء النصوص القانونية المعقدة.",
        "تطلعك لدور قيادي واستشاري مرموق في المجتمع والمؤسسات."
      ],
      coreSubjects: ["القانون التجاري والشركات", "التشريعات الرقمية والذكاء الاصطناعي", "القانون الدولي والمحكمات", "صياغة العقود والتفاوض Legal Drafting"],
      keySkills: ["التحليل النصي والحجة القانونية", "التفاوض والوساطة في النزاعات", "إتقان الصياغة واللغة القانونية", "البحث والتدقيق في القضايا"],
      careerOutlook: {
        demand: "طلب مرتفع ومستمر في مكاتب المحاماة والشركات الكبرى",
        medianSalary: "رواتب تبدأ من 13,000 إلى 35,000+ ريال شهرياً وتزيد بالاستشارات",
        topRoles: ["محامٍ ومستشار قانوني (Legal Advisor)", "خبير عقود وتأسيس شركات", "مختص امتثال وتشريعات تقنية"],
        futureTrends: "بروز القضايا المتعلقة بالأمن السيبراني، الذكاء الاصطناعي، والملكية الفكرية يصنع جيلاً جديداً من المحامين التقنيين."
      },
      actionPlan: [
        "قراءة اللوائح والأنظمة التجارية وقوانين وحماية الملكية الفكرية المعمول بها.",
        "متابعة المناظرات القانونية والجلسات الاستشارية التدريبية لتنمية مهارات التحدث والخطابة.",
        "تنمية مهارات الكاتبة والتحليل باللغتين العربية والإنجليزية بطلاقة.",
        "المشاركة في نموذج المحاكاة (Model UN) أو المحاكم التدريبية الجامعية."
      ]
    },
    alternates: [
      {
        name: "علم النفس الإرشادي والتحليل السلوكي",
        englishName: "Counseling Psychology & Behavioral Analysis",
        category: "قانون وعلوم اجتماعية",
        compatibilityScore: 89,
        overview: "فهم أعماق النفس البشرية، تحليل الدوافع والسلوكيات، وتقديم الاستشارات الدقيقة للتطوير الشخصي والمؤسسي.",
        whyMatch: ["قدرتك العالية على الاستماع الفعال والاهتمام بالسلوك البشري.", "دافعك المخلص للمساعدة النفسية."],
        topRoles: ["أخصائي نفسي إرشادي", "مستشار سلوك وظيفي في HR", "باحث سلوكي في سلوك المستهلك"]
      },
      {
        name: "العلاقات العامة والتواصل المؤسسي",
        englishName: "Public Relations & Corporate Communication",
        category: "قانون وعلوم اجتماعية",
        compatibilityScore: 84,
        overview: "صياغة صورة المؤسسات، إدارة السمعة والرسائل الإعلامية، والتعامل مع الأزمات والتواصل الجماهيري.",
        whyMatch: ["طلاقتك في التواصل وربط العلاقات العامة والاستشارات الاجتماعية.", "تفضيلك للتمثيل المؤسسي."],
        topRoles: ["مدير علاقات عامة", "متحدث رسمي للمؤسسة", "مستشار إدارة أزمات إعلامية"]
      }
    ]
  }
};

/**
 * Intelligent Rule-Based Analyzer for fallback offline mode
 */
export function analyzeQuizAnswersFallback(userAnswers) {
  const scores = {
    engineering_tech: 0,
    medical_health: 0,
    business_finance: 0,
    design_art_media: 0,
    law_social: 0
  };

  // Process answers and sum points based on chosen category tags
  questions.forEach((q) => {
    const chosenOptionId = userAnswers[q.id];
    if (chosenOptionId) {
      const optionObj = q.options.find((opt) => opt.id === chosenOptionId);
      if (optionObj && optionObj.categoryTag && scores[optionObj.categoryTag] !== undefined) {
        scores[optionObj.categoryTag] += 1;
      }
    }
  });

  // Sort categories by highest score
  const sortedCategories = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const primaryCat = sortedCategories[0] || "engineering_tech";
  
  const categoryData = FALLBACK_MAJORS_DATABASE[primaryCat] || FALLBACK_MAJORS_DATABASE.engineering_tech;

  const resultPayload = {
    personalitySummary: `بناءً على تحليلاتنا المعمقة لإجاباتك الـ 12، تبين أنك تمتلك نمط تفكير ينتمي بقوة إلى مجال (${categoryData.primary.category}). تظهر شخصيتك توازناً ممتازا بين الشغف العلمي/الفني، القدرة على حل التحديات المعقدة، والدافع القوي للتميز المهني وصناعة مستقبل واعد.`,
    primaryMajor: categoryData.primary,
    alternateMajors: categoryData.alternates
  };

  return resultPayload;
}

/**
 * Gemini API Live Integration Service
 */
export async function analyzeQuizAnswersWithGemini(userAnswers, apiKey) {
  // If no API Key is provided, seamlessly fallback to intelligent offline rule-based analyzer
  if (!apiKey || apiKey.trim() === "") {
    console.log("No Gemini API key provided. Executing Smart Fallback Engine...");
    // Simulate realistic processing delay for smooth UI feedback
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return analyzeQuizAnswersFallback(userAnswers);
  }

  // Format student responses cleanly for prompt insertion
  const formattedAnswers = questions.map((q) => {
    const chosenOptionId = userAnswers[q.id];
    const chosenOpt = q.options.find((opt) => opt.id === chosenOptionId);
    return `السؤال ${q.id} (${q.category} - ${q.question}):
  الإجابة المحددة: ${chosenOpt ? chosenOpt.title + " - " + chosenOpt.description : "لم يحدد"}`;
  }).join("\n\n");

  const promptText = `
المحتوى المحدد من الطالب في الاستبيان:
${formattedAnswers}

يرجى تحليل هذه البيانات وتقديم تقرير التوجيه الجامعي المكتمل بتنسيق JSON حصراً كما تفرض تعليمات نظامك.
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

    // Clean JSON response string (remove potential markdown wrappers)
    let cleanedJsonString = rawText.trim();
    if (cleanedJsonString.startsWith("```json")) {
      cleanedJsonString = cleanedJsonString.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    } else if (cleanedJsonString.startsWith("```")) {
      cleanedJsonString = cleanedJsonString.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }

    const parsedResult = JSON.parse(cleanedJsonString);
    return parsedResult;

  } catch (error) {
    console.error("Failed to connect to Gemini API. Falling back to local smart analyzer:", error);
    // Fallback gracefully on API errors (rate-limit, invalid key, offline, etc.)
    return analyzeQuizAnswersFallback(userAnswers);
  }
}
