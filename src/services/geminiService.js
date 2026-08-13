import { questions } from "../data/questions";

// System Prompt for Gemini AI Guidance Counselor analyzing Quiz Selections
const SYSTEM_PROMPT = `
أنت خبير إرشاد أكاديمي ونفسي ومستشار في التخطيط المهني وسوق العمل للتعليم الجامعي، وتتمتع ببديهة عالية ومعرفة عميقة بتخصصات المستقبل ومتطلبات سوق العمل المحلي والعالمي.

سيتم تزويدك بإجابات طالب ثانوية في استبيان مكون من 12 سؤالاً يغطي المواد الدراسية المحبوبة، حلم الطفولة، الأنشطة المدرسية، بيئة العمل المفضلة، حل المشكلات، الشغف، والتطلعات.

مهمتك:
قم بتحليل الخيارات المحددة بدقة موازية واختيار التخصص الأكثر توافقاً مع إجابات الطالب من بين عشرات التخصصات الجامعية المتاحة (مثل علوم الحاسب، الطب، الهندسة المعمارية، الصيدلة والعلوم، إدارة الأعمال، التصميم البصري، القانون، إلخ)، ثم تقديم تقرير إرشادي جامعي مخصص وعميق بتنسيق JSON حصراً بنفس الهيكل المطلوب:

{
  "personalitySummary": "ملخص شامل لطبيعة تفكير الطالب وشغفه الأكاديمي والمهني بناءً على خياراته المحددة (3-4 أسطر).",
  "primaryMajor": {
    "name": "اسم التخصص الرئيسي باللغة العربية (مثال: علوم الحاسب وهندسة البرمجيات)",
    "englishName": "اسم التخصص بالإنجليزية",
    "category": "هندسة وتقنية / طب وصحة / عمارة وهندسة / صيدلة وعلوم / إدارة واقتصاد / تصميم وإعلام / قانون وعلوم اجتماعية",
    "compatibilityScore": 96,
    "overview": "شرح مفصل ومحفز للتخصص وأهميته في المستقبل.",
    "whyMatch": [
      "سبب أول ينبع مباشرة من الخيار المختار في الاستبيان",
      "سبب ثاني مرتبط بنمط تفكيره التحليلي أو الإبداعي",
      "سبب ثالث يتعلق بالشغف والأنشطة المدرسية المحددة",
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
      "medianSalary": "رواتب تنافسية مرتفعة (مثال: 14,000 - 30,000 ريال شهرياً)",
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

// Comprehensive Diverse University Majors Database (7 Broad Tracks)
const MAJORS_DATABASE = {
  engineering_tech: {
    primary: {
      name: "علوم الحاسب وهندسة البرمجيات",
      englishName: "Computer Science & Software Engineering",
      category: "هندسة وتقنية",
      compatibilityScore: 97,
      overview: "تخصص محوري في كلية الحاسبات والمعلومات يدمج بين البرمجة، خوارزميات التفكير الذكي، وتطوير الأنظمة والتطبيقات والذكاء الاصطناعي.",
      whyMatch: [
        "اختيارك الصريح للحلول التقنية والرياضيات والبرمجة في أسئلة الاستبيان.",
        "شغفك بالأرقام وتفكيك الألغاز المنطقية والتعامل مع الأجهزة والحواسيب.",
        "تفضيلك لبيئات العمل التكنولوجية المرنة وتطوير التطبيقات والذكاء الاصطناعي.",
        "توافق قدراتك مع متطلبات كلية الحاسبات والطلب العالمي القياسي على مطوري البرمجيات."
      ],
      coreSubjects: ["هياكل البيانات والتمثيل الخوارزمي", "برمجة الحاسب والأنظمة", "تعلم الآلة والذكاء الاصطناعي", "الأمن السيبراني وقواعد البيانات"],
      keySkills: ["البرمجة بلغة Python & C++", "التفكير الخوارزمي والتجريدي", "حل المشكلات وحساب الألغاز", "إدارة وتطوير المشاريع الرقمية"],
      careerOutlook: {
        demand: "مرتفع جداً وفي نمو قياسي متواصل عالمياً ومحلياً",
        medianSalary: "رواتب تبدأ من 14,000 إلى 32,000 ريال شهرياً",
        topRoles: ["مهندس برمجيات (Software Engineer)", "مطور تطبيقات ومواقع (Full-Stack Developer)", "مهندس ذكاء اصطناعي (AI Engineer)"],
        futureTrends: "كلية الحاسبات تقود المستقبل الرقمي، وسيزداد الطلب عالمياً على مهندسي ومطوري الأنظمة والذكاء الاصطناعي."
      },
      actionPlan: [
        "تعلم أساسيات البرمجة بلغة Python وتطبيق مشاريع برمجية بسيطة على GitHub.",
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
        overview: "تخصص حماية البنيات التحتية الرقمية والشبكات للمؤسسات والشركات من الاختراقات والتهديدات الأمنية.",
        whyMatch: ["رغبتك في حماية البيانات وتفكيك الألغاز التقنية المعقدة.", "تفضيلك للتخصصات الحاسوبية ذات الأمان الوظيفي العالي."],
        topRoles: ["محلل أمن معلومات", "مهندس اختبار اختراق (Penetration Tester)", "مستشار أمن سحابي"]
      },
      {
        name: "الذكاء الاصطناعي وعلم البيانات",
        englishName: "Artificial Intelligence & Data Science",
        category: "هندسة وتقنية",
        compatibilityScore: 88,
        overview: "تخصص بناء الخوارزميات الذكية ونماذج التنبؤ وتحليل البيانات الضخمة لاتخاذ القرارات.",
        whyMatch: ["حبك للتفكير المنطقي واستقراء الأرقام والبيانات.", "تطلعك لتقنيات المستقبل الذكية."],
        topRoles: ["محلل بيانات ضخمة (Data Scientist)", "مهندس تعلم آلة (ML Engineer)", "خبير خوارزميات ذكية"]
      }
    ]
  },
  medical_health: {
    primary: {
      name: "الطب البشري والجراحة العامة",
      englishName: "Human Medicine & General Surgery",
      category: "طب وصحة",
      compatibilityScore: 96,
      overview: "المهنة الإنسانية الأسمى التي تجمع بين البحث العلمي الدقيق في وظائف الجسم البشري وتقديم التشخيص والعلاج والرعاية الصحية الفائقة للمرضى.",
      whyMatch: [
        "اختيارك الواضح لمواد الأحياء والعلوم الطبية ورغبتك في مساعدة وعلاج المرضى.",
        "دافعك الإنساني الكبير لتقديم الرعاية الصحية والتخفيف عن آلام البشر.",
        "قدرتك العالية على التحمل والتركيز والتفاصيل الطبية الدقيقة.",
        "تطلعك لمكانة اجتماعية واعدة وأمان وظيفي طويل الأمد في القطاع الصحي."
      ],
      coreSubjects: ["علم التشريح والأنسجة (Anatomy)", "علم الأدوية والعلاجيات (Pharmacology)", "علم أمراض الأعضاء (Pathology)", "الجراحة العامة والتشخيص السريري"],
      keySkills: ["التشخيص السريري الدقيق", "التواصل الإنساني والتعاطف مع المرضى", "العمل تحت الضغوط الحرجة", "التفكير النقدي واستقراء الأعراض"],
      careerOutlook: {
        demand: "مطلوب بشكل دائم ومستمر عالمياً ومحلياً",
        medianSalary: "رواتب تبدأ من 16,000 إلى 45,000 ريال شهرياً بعد التخصص",
        topRoles: ["طبيب بشري متخصص (Specialist Physician)", "طبيب جراح (Surgeon)", "باحث في العلوم الطبية والدواء"],
        futureTrends: "دمج الذكاء الاصطناعي والتقنيات الدقيقة في التشخيص يعزز من قوة الطبيب في الجراحة والعلاج."
      },
      actionPlan: [
        "التركيز على تحصيل درجات متميزة في الكيمياء والأحياء واللغة الإنجليزية.",
        "المشاركة في الأنشطة والتطوع الصحي في الجمعيات والمستشفيات لإدراك البيئة الطبية.",
        "التدريب على مهارات إدارة الوقت والضغط النفسي لتأهيل قدراتك للسنوات الجامعية."
      ]
    },
    alternates: [
      {
        name: "طب وجراحة الأسنان",
        englishName: "Doctor of Dental Surgery (DDS)",
        category: "طب وصحة",
        compatibilityScore: 90,
        overview: "تخصص يجمع بين الدقة الطبية والمهارات اليدوية الدقيقة في معالجة وتجميل الفم والأسنان.",
        whyMatch: ["دقتك اليدوية العالية واهتمامك بالجانب العلاجي والتجميلي الطبي."],
        topRoles: ["طبيب أسنان متخصص", "جراح فم وفكين", "أخصائي تقويم وتجميل أسنان"]
      },
      {
        name: "العلاج الطبيعي والتأهيل الصحي",
        englishName: "Physical Therapy & Rehabilitation",
        category: "طب وصحة",
        compatibilityScore: 85,
        overview: "تأهيل وتدريب المرضى واستعادة الحركة والوظائف الجسدية بعد الإصابات والعمليات الجراحية.",
        whyMatch: ["حبك لمساعدة المرضى حركياً وجسدياً والمتابعة المستمرة."],
        topRoles: ["أخصائي علاج طبيعي", "مستشار تأهيل إصابات رياضية", "معالج وظيفي"]
      }
    ]
  },
  architecture_eng: {
    primary: {
      name: "الهندسة المعمارية والتخطيط الحضري",
      englishName: "Architecture & Urban Planning Engineering",
      category: "عمارة وهندسة",
      compatibilityScore: 95,
      overview: "التخصص الهندسي المبدع الذي يجمع بين التفكير المعماري المنطقي والرسم والتصميم البصري لبناء وتخطيط المدن والمباني الحديثة.",
      whyMatch: [
        "دمجك المتوازن في خياراتك بين التفكير الهندسي والحس الفني والبصري.",
        "حبك لرسم الخرائط المعمارية وتخيل التصاميم والمباني والمساحات.",
        "قدرتك على استخدام الرياضيات والتصميم البصري لخلق منشآت مبهرة.",
        "تطلعك للمشاركة في بناء المشاريع التنموية الكبرى والمدن الذكية."
      ],
      coreSubjects: ["التصميم المعماري وتخطيط المباني", "الهياكل الإنشائية ومواد البناء", "النمذجة ثلاثية الأبعاد (3D Modeling)", "التخطيط الحضري وتنسيق المواقع"],
      keySkills: ["إتقان برامج النمذجة (AutoCAD, Revit)", "التفكير الفراغي والمعماري", "الحس الجمالي والتنفيذي", "إدارة المشاريع الإنشائية والمعمارية"],
      careerOutlook: {
        demand: "مطلوب بقوة في المشاريع الوطنية الكبرى والرؤى التنموية",
        medianSalary: "رواتب تبدأ من 13,000 إلى 30,000 ريال شهرياً",
        topRoles: ["مهندس معماري (Architect)", "مخطط مدن وحضري (Urban Planner)", "مدير مشاريع معمارية وإعادة تأهيل"],
        futureTrends: "المباني الخضراء المستدامة والمدن الذكية تعزز من الحاجة للمعضماريين المبتكرين."
      },
      actionPlan: [
        "تعلم برامج الرسم الهندسي والنمذجة المعمارية فوراً كبداية ممتازة.",
        "تغذية حسك البصري بمتابعة أشهر التصاميم المعمارية العالمية والمحلية.",
        "تقوية مهاراتك في الرياضيات والفيزياء الإنشائية واللغة الإنجليزية."
      ]
    },
    alternates: [
      {
        name: "الهندسة المدنية والإنشائية",
        englishName: "Civil & Structural Engineering",
        category: "عمارة وهندسة",
        compatibilityScore: 89,
        overview: "تصميم وتنفيذ البنيات التحتية الضخمة من جسور وطرق ومطارات ومبانٍ شاهقة بأعلى معايير السلامة.",
        whyMatch: ["حبك للمشاريع الميدانية الضخمة والتطبيق الهندسي الإنشائي."],
        topRoles: ["مهندس مدني ميداني", "استشاري تصميم إنشائي", "مدير بنيات تحتية"]
      },
      {
        name: "الهندسة الميكانيكية والأنظمة الحديثة",
        englishName: "Mechanical Engineering",
        category: "عمارة وهندسة",
        compatibilityScore: 84,
        overview: "علم تصميم وتحليل وتصنيع المحركات، الآلات، ومحطات الطاقة والأنظمة الميكانيكية الذكية.",
        whyMatch: ["حبك لتفكيك وتركيب الآلات وفهم حركة المحركات والأنظمة."],
        topRoles: ["مهندس ميكانيكا", "مهندس أنظمة طاقة وتربينات", "مصمم آلات إلكتروميكانيك"]
      }
    ]
  },
  pharma_science: {
    primary: {
      name: "دكتور صيدلة والعلوم الدوائية (PharmD & Bio-Chemistry)",
      englishName: "Doctor of Pharmacy & Biochemical Sciences",
      category: "صيدلة وعلوم",
      compatibilityScore: 96,
      overview: "علم اكتشاف وتركيب ومراقبة الأدوية والتأكد من السلامة العلاجية للمرضى والمشاركة في الأبحاث البيوكيميائية بالمعامل.",
      whyMatch: [
        "اختيارك الصريح لمواد الكيمياء والتجريب المعماري في الاستبيان.",
        "شغفك باكتشاف تركيب الأدوية وفحص التفاعلات الجزيئية والدواء.",
        "دقتك العلمية العالية ورغبتك في بيئة أبحاث علمية محكمة.",
        "تطلعك للتطوير الدوائي والعمل في كبرى المستشفيات ومراكز الأبحاث."
      ],
      coreSubjects: ["الكيمياء الدوائية (Medicinal Chemistry)", "علم الأدوية والعلاج السريري (Pharmacology)", "الكيمياء الحيوية (Biochemistry)", "الصيدلانيات والتركيبات (Pharmaceutics)"],
      keySkills: ["التحليل المعملي والدقة الكيميائية", "فهم الآليات العلاجية للأدوية", "الأبحاث السريرية واختبار السلامة", "التواصل مع الطاقم الطبي والتوعية الدوائية"],
      careerOutlook: {
        demand: "مطلوب بقوة في كبرى المستشفيات ومصانع الأدوية ومراكز الأبحاث",
        medianSalary: "رواتب تبدأ من 13,000 إلى 28,000 ريال شهرياً",
        topRoles: ["صيدلي سريري (Clinical Pharmacist)", "باحث تطوير أدوية في مصانع الأدوية", "مستشار سلامة دوائية وأبحاث حيوية"],
        futureTrends: "العلاج الجيني والأدوية الشخصية المصممة للجينات تصنع ثورة في عالم الصيدلة والبيوتكنولوجي."
      },
      actionPlan: [
        "التركيز على مادة الكيمياء العضوية والأحياء الدقيقة في الثانوية.",
        "قراءة المقالات العلمية حول اكتشاف الأدوية ومتابعة الهيئات الدوائية.",
        "تطوير المهارات المعملية واللغة الإنجليزية العلمية لتسهيل الدراسة."
      ]
    },
    alternates: [
      {
        name: "الكيمياء الحيوية وتقنية الجينات (Biotechnology)",
        englishName: "Biochemistry & Biotechnology",
        category: "صيدلة وعلوم",
        compatibilityScore: 90,
        overview: "تطبيق تقنيات البيولوجيا والهندسة الوراثية لتطوير حلول صحية وبيئية وزراعية مبتكرة.",
        whyMatch: ["عشقك للأبحاث المعملية المتقدمة وتقنية الجينات والحيوية."],
        topRoles: ["أخصائي تقنية حيوية", "باحث جينات وبيوكيمياء", "محلل مختبرات جزيئية"]
      },
      {
        name: "علوم الأغذية والتغذية السريرية",
        englishName: "Food Science & Clinical Nutrition",
        category: "صيدلة وعلوم",
        compatibilityScore: 85,
        overview: "دراسة مكونات الأغذية، التخطيط العلاجي للتغذية، وسلامة الأغذية والصحة العامة.",
        whyMatch: ["اهتمامك بالصحة العامة والتغذية العلاجية والدراسات الكيميائية."],
        topRoles: ["أخصائي تغذية سريرية", "مفتش سلامة جودة غذائية", "مستشار صحي تغذوي"]
      }
    ]
  },
  business_finance: {
    primary: {
      name: "إدارة الأعمال والتحليل المالي والاستثمار",
      englishName: "Business Administration & Financial Investment",
      category: "إدارة واقتصاد",
      compatibilityScore: 95,
      overview: "تخصص رائد يركز على صياغة الاستراتيجيات التجارية، التخطيط المالي، إدارة الأسواق والاستثمارات، وقيادة الشركات والمؤسسات.",
      whyMatch: [
        "اختيارك الصريح للحسابات المالي والإدارة والتنظيم وتأسيس المشاريع في الاستبيان.",
        "عقليتك القيادية والاستراتيجية وقدرتك على تقييم الأرباح والمشاريع.",
        "شغفك بريادة الأعمال وفهم حركة الأسواق التجارية والمنافسين.",
        "تطلعك لفرص نمو مالي سريع وتأسيس أعمالك التجارية الخاصة."
      ],
      coreSubjects: ["التحليل المالي واستراتيجيات الاستثمار", "التسويق الرقمي وسلوك المستهلك", "إدارة سلاسل الإمداد والعمليات", "القيادة والحوكمة المؤسسية"],
      keySkills: ["التفكير الاستراتيجي وإدارة المشاريع", "تحليل البيانات المالية (Financial Modeling)", "التفاوض والقيادة والتسويق", "مرونة التكيف مع متغيرات السوق"],
      careerOutlook: {
        demand: "مرتفع ومستمر في كافة الشركات والقطاعات الاستثمارية",
        medianSalary: "رواتب تبدأ من 12,000 إلى 35,000+ ريال شهرياً وتزيد بالمكافآت",
        topRoles: ["محلل مالي واستثماري (Financial Analyst)", "مدير مشاريع تنفيذي (Project Manager)", "رائد أعمال ومؤسس شركات"],
        futureTrends: "التحول الرقمي والأتمتة المالية تزوج بين الإدارة الذكية والاستثمار القائم على البيانات."
      },
      actionPlan: [
        "قراءة كتب أساسيات إدارة الأعمال والاستثمار والتخطيط المالي والشركات.",
        "تعلم مهارات تحليل البيانات باستخدام برنامج Excel المتقدم و PowerBI.",
        "متابعة الأخبار الاقتصادية وحركة الشركات والأسواق المالية المحلية والعالمية."
      ]
    },
    alternates: [
      {
        name: "التسويق الرقمي وتحليل سلوك المشترين",
        englishName: "Digital Marketing & Consumer Analytics",
        category: "إدارة واقتصاد",
        compatibilityScore: 89,
        overview: "فنون وبحوث بناء العلامات التجارية وصياغة الحملات التسويقية الموجهة بالبيانات وتحليل منصات التواصل.",
        whyMatch: ["مزجك بين العقلية التجارية واللمسة الإبداعية بالتسويق."],
        topRoles: ["مدير تسويق رقمي", "محلل سلوك مستهلك", "استراتيجي نمو للمتاجر"]
      },
      {
        name: "إدارة سلاسل الإمداد والخدمات اللوجستية",
        englishName: "Supply Chain & Logistics Management",
        category: "إدارة واقتصاد",
        compatibilityScore: 84,
        overview: "إدارة حركة المنتجات والخدمات عالمياً من المصدر إلى المستهلك بأعلى كفاءة وأقل تكلفة زمنية ومالية.",
        whyMatch: ["حبك للتنظيم الدقيق وإدارة العمليات الميدانية والتجارية."],
        topRoles: ["مدير سلاسل إمداد", "مخطط عمليات لوجستية", "استشاري كفاءة التشغيل"]
      }
    ]
  },
  design_art_media: {
    primary: {
      name: "التصميم البصري وتجربة المستخدم (UI/UX & Visual Arts)",
      englishName: "Visual Communication & UI/UX Design",
      category: "تصميم وإعلام",
      compatibilityScore: 96,
      overview: "عالم إبداعي رائع يجمع بين فنون التصميم الجرافيكي، تصميم واجهات وتجارب المستخدم للتطبيقات والمواقع، والإنتاج البصري الرقمي.",
      whyMatch: [
        "اختيارك المباشر للرسم والتنسيق البصري وحسك الإبداعي في خيارات الاستبيان.",
        "تفكيرك الابتكاري خارج الصندوق ورغبتك في تجنب الروتين المكتبي الجاف.",
        "قدرتك على تجسيد الأفكار المعقدة في صور وتجارب مرئية ساحرة.",
        "تفضيلك لبيئات العمل الملهمة وإمكانية العمل الحر (Freelancing)."
      ],
      coreSubjects: ["تصميم واجهات المستخدم (UI Design)", "بحث تجربة المستخدم (UX Research)", "الوسائط التفاعلية والمونتاج", "الهوية البصرية والعلامات التجارية"],
      keySkills: ["إتقان برامج التصميم (Figma, Illustrator, Photoshop)", "التفكير التصميمي (Design Thinking)", "فهم علم النفس البصري وسلوك المستخدم", "صناعة القصة البصرية (Storytelling)"],
      careerOutlook: {
        demand: "طلب عالي متزايد مع طفرة التطبيقات والمتاجر الرقمية",
        medianSalary: "رواتب تبدأ من 10,000 إلى 26,000 ريال شهرياً مع دخل حُر إضافي",
        topRoles: ["مصمم واجهات وتجربة مستخدم (UI/UX Designer)", "مدير فني إبداعي (Art Director)", "مصمم هوية بصري وباحث تصميم"],
        futureTrends: "مع توسع الذكاء الاصطناعي التوليدي، يزداد الطلب على المصممين ذوي التفكير الاستراتيجي والإنساني."
      },
      actionPlan: [
        "تعلم أداة Figma لبناء واجهات التطبيقات والمواقع وتصفح منصات مثل Behance.",
        "بناء بورتفوليو (معرض أعمال) يحتوي على 3 مشاريع تصميمية مبتكرة.",
        "متابعة المصممين المحترفين على منصات التواصل واكتساب مهارات الإخراج."
      ]
    },
    alternates: [
      {
        name: "صناعة الإعلام الرقمي وإنتاج الفيديوهات",
        englishName: "Digital Media Production & Filmmaking",
        category: "تصميم وإعلام",
        compatibilityScore: 89,
        overview: "فنون الإخراج، التصوير، السرد القصصي، وإنتاج الأفلام والمحتوى الرقمي التفاعلي للمنصات العالمية.",
        whyMatch: ["عشقك لسرد القصص وصناعة الفيديوهات والتعبير عن الأفكار."],
        topRoles: ["صانع محتوى وفيديو", "مخرج وسائط رقمية", "مختص مونتاج ومؤثرات بصري"]
      },
      {
        name: "التصميم الداخلي والمساحات المعمارية",
        englishName: "Interior & Spatial Design",
        category: "تصميم وإعلام",
        compatibilityScore: 83,
        overview: "ابتكار المساحات المعمارية والداخلية وتنسيق الأثاث والإضاءة لخلق تجارب سكنية وتجارية مذهلة.",
        whyMatch: ["حسك البصري في تنسيق الأبعاد والألوان للمساحات الواقعية."],
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
        "اختيارك الصريح للحوار والمناظرات وقضايا الحقوق والأنظمة في الاستبيان.",
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
        futureTrends: "بروز القضايا المتعلقة بالأمن السيبراني، الذكاء الاصطناعي، والملكية الفكرية يصنع جيلاً جديداً من المحامين."
      },
      actionPlan: [
        "قراءة اللوائح والأنظمة التجارية وقوانين وحماية الملكية الفكرية المعمول بها.",
        "متابعة المناظرات القانونية والجلسات التدريبية لتنمية مهارات التحدث والخطابة.",
        "تنمية مهارات الكتابة والتحليل باللغتين العربية والإنجليزية بطلاقة."
      ]
    },
    alternates: [
      {
        name: "علم النفس الإرشادي والتحليل السلوكي",
        englishName: "Counseling Psychology & Behavioral Analysis",
        category: "قانون وعلوم اجتماعية",
        compatibilityScore: 89,
        overview: "فهم أعماق النفس البشرية، تحليل الدوافع والسلوكيات، وتقديم الاستشارات الدقيقة للتطوير الشخصي والمؤسسي.",
        whyMatch: ["قدرتك العالية على الاستماع الفعال والاهتمام بالسلوك البشري."],
        topRoles: ["أخصائي نفسي إرشادي", "مستشار سلوك وظيفي في HR", "باحث سلوكي"]
      },
      {
        name: "العلاقات العامة والتواصل المؤسسي",
        englishName: "Public Relations & Corporate Communication",
        category: "قانون وعلوم اجتماعية",
        compatibilityScore: 84,
        overview: "صياغة صورة المؤسسات، إدارة السمعة والرسائل الإعلامية، والتعامل مع الأزمات والتواصل الجماهيري.",
        whyMatch: ["طلاقتك في التواصل وربط العلاقات العامة والاستشارات الاجتماعية."],
        topRoles: ["مدير علاقات عامة", "متحدث رسمي للمؤسسة", "مستشار إدارة أزمات إعلامية"]
      }
    ]
  }
};

/**
 * Algorithmic Score Analyzer supporting 7 Broad University Major Tracks
 */
export function analyzeQuizAnswersFallback(userAnswers) {
  const scores = {
    engineering_tech: 0,
    medical_health: 0,
    architecture_eng: 0,
    pharma_science: 0,
    business_finance: 0,
    design_art_media: 0,
    law_social: 0
  };

  const selectedTitles = [];

  // Iterate over 12 questions and calculate exact selected category scores
  questions.forEach((q) => {
    const selectedOptId = userAnswers[q.id];
    if (selectedOptId) {
      const foundOpt = q.options.find((opt) => opt.id === selectedOptId);
      if (foundOpt) {
        selectedTitles.push(foundOpt.title);
        const tag = foundOpt.categoryTag || "engineering_tech";
        if (scores[tag] !== undefined) {
          scores[tag] += 1;
        } else {
          scores.engineering_tech += 1;
        }
      }
    }
  });

  // Sort categories strictly by highest score
  const sortedCategories = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const primaryCat = sortedCategories[0] || "engineering_tech";
  const categoryData = MAJORS_DATABASE[primaryCat] || MAJORS_DATABASE.engineering_tech;

  // Build custom dynamic reasons referencing selected titles!
  const customWhyMatch = [];
  if (selectedTitles.length > 0) {
    customWhyMatch.push(`اختيارك المباشر لـ "${selectedTitles[0]}" في الاستبيان.`);
  }
  if (selectedTitles.length > 1) {
    customWhyMatch.push(`تأكيد ميولك بتفضيل "${selectedTitles[1]}".`);
  }
  if (categoryData.primary.whyMatch && categoryData.primary.whyMatch.length > 2) {
    customWhyMatch.push(categoryData.primary.whyMatch[2]);
    customWhyMatch.push(categoryData.primary.whyMatch[3]);
  } else {
    customWhyMatch.push("التوافق العالي بين تطلعاتك الشخصية ومتطلبات هذا المسار الأكاديمي.");
    customWhyMatch.push("تكامل قدراتك التحليلية مع آفاق سوق العمل والفرص المستقبلية المتاحة.");
  }

  const resultPayload = {
    personalitySummary: `بناءً على نتائج إجاباتك الـ 12 في الاستبيان، تظهر خياراتك توافقاً رائعاً وعميقاً مع مجال (${categoryData.primary.category}). تظهر نتائجك توازناً ممتازاً بين التفكير العلمي/العملي، حل التحديات الميدانية، والدافع القوي للتميز والنجاح المهني.`,
    primaryMajor: {
      ...categoryData.primary,
      whyMatch: customWhyMatch
    },
    alternateMajors: categoryData.alternates
  };

  return resultPayload;
}

/**
 * Gemini API Live Integration Service for Multiple-Choice Quiz Answers
 */
export async function analyzeQuizAnswersWithGemini(userAnswers, apiKey) {
  if (!apiKey || apiKey.trim() === "") {
    console.log("No Gemini API key provided. Executing Algorithmic Quiz Fallback Engine...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return analyzeQuizAnswersFallback(userAnswers);
  }

  // Format selected options cleanly for Gemini API prompt
  const formattedAnswers = questions.map((q) => {
    const selectedOptId = userAnswers[q.id];
    const foundOpt = q.options.find((opt) => opt.id === selectedOptId);
    return `السؤال ${q.id} (${q.category} - ${q.question}):
  الخيار الذي اختاره الطالب: "${foundOpt ? foundOpt.title + " - " + foundOpt.description : "لم يحدد"}"`;
  }).join("\n\n");

  const promptText = `
خيارات طالب الثانوية المحددة في الاستبيان:
${formattedAnswers}

يرجى تحليل خيارات الطالب بدقة واختيار التخصص الأكثر ملاءمة له من بين عشرات التخصصات الجامعية المتاحة وبناء تقرير التوجيه الجامعي المكتمل بتنسيق JSON حصراً بنفس الهيكل المطلوب.
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
    console.error("Failed to connect to Gemini API. Falling back to local algorithmic analyzer:", error);
    return analyzeQuizAnswersFallback(userAnswers);
  }
}
