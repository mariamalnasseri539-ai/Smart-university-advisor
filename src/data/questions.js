export const questions = [
  {
    id: 1,
    category: "المواد المدرسية المفضلة",
    categoryEn: "Favorite School Subjects",
    badge: "المدرسة والحصص",
    badgeEn: "School Classes",
    question: "وش أكثر مادة دراسية كنت تحبها وتستمتع بها في المدرسة؟",
    questionEn: "Which school subject did you enjoy and understand most during high school?",
    description: "اختر المادة اللي كنت تفتح درسها بحماس وبدون ما تحس بثقل.",
    descriptionEn: "Select the class you looked forward to studying effortlessly.",
    options: [
      {
        id: "q1_a",
        title: "الرياضيات أو الحاسب الآلي",
        titleEn: "Mathematics or Computer Studies",
        description: "أحب الأرقام، حل المعادلات، وتجربة البرامج وتفكيك المسائل.",
        descriptionEn: "Loved numbers, logic puzzles, coding, and breaking down complex math problems.",
        categoryTag: "engineering_tech",
        icon: "Calculator"
      },
      {
        id: "q1_b",
        title: "الأحياء أو الكيمياء",
        description: "يستهويني فهم جسم الإنسان، الكائنات الحية، والتجارب المعملية.",
        descriptionEn: "Fascinated by human biology, living organisms, and chemistry lab experiments.",
        categoryTag: "medical_health",
        icon: "Dna"
      },
      {
        id: "q1_c",
        title: "التربية الفنية، التعبير، أو الإعلام",
        description: "أحب الرسم، التنسيق البصري، صياغة المواضيع، والأفكار الفنية.",
        descriptionEn: "Enjoyed creative drawing, visual formatting, writing essays, and art projects.",
        categoryTag: "design_art_media",
        icon: "Palette"
      },
      {
        id: "q1_d",
        title: "التاريخ، لغتي، أو الدراسات الاجتماعية",
        description: "أحب قصص التاريخ، قواعد اللغة، النقاشات، وفهم القوانين والشعوب.",
        categoryTag: "law_social",
        icon: "Scale"
      },
      {
        id: "q1_e",
        title: "الإدارة، الإحصاء، أو الاقتصاد",
        description: "أهتم بحساب التكاليف والأرباح، التجارة، وفهم حركة الأسواق والمشاريع.",
        descriptionEn: "Interested in trade, business calculations, profit margins, and economic markets.",
        categoryTag: "business_finance",
        icon: "TrendingUp"
      }
    ]
  },
  {
    id: 2,
    category: "حلم الطفولة والوظيفة",
    categoryEn: "Childhood Dream Career",
    badge: "الطموح العفوي",
    badgeEn: "Early Instinct",
    question: "من وأنت صغير، وش الوظيفة اللي كنت دايم تقول لأهلك إنك تبي تصيرها لما تكبر؟",
    questionEn: "As a kid, what job did you always tell your family you wanted to become?",
    description: "تذكر أول رغبة بديهية كانت تخطر على بالك عفويًا.",
    descriptionEn: "Recall your first natural childhood dream profession.",
    options: [
      {
        id: "q2_a",
        title: "محامي، مستشار، أو معلم",
        titleEn: "Lawyer, Advisor, or Teacher",
        description: "كنت تحب التحدث، الإقناع، الدفاع عن الحقوق، وشرح المعلومات للناس.",
        descriptionEn: "Loved speaking up, advocating for rights, arguing logically, and teaching others.",
        categoryTag: "law_social",
        icon: "MessageSquare"
      },
      {
        id: "q2_b",
        title: "مهندس، مبرمج، أو مخترع أجهزة",
        titleEn: "Engineer, Software Developer, or Tech Inventor",
        description: "كنت تتخيل نفسك تبني أجهزة، تكتشف تقنيات، أو تبرمج ألعاب وبرامج.",
        descriptionEn: "Pictured yourself building machines, programming games, or designing tech gadgets.",
        categoryTag: "engineering_tech",
        icon: "Cpu"
      },
      {
        id: "q2_c",
        title: "طبيب، صيدلي، أو أخصائي علاج",
        titleEn: "Doctor, Pharmacist, or Healthcare Specialist",
        description: "كنت تحب تعالج المرضى، ترتدي البالطو الأبيض، وتساعد الناس في صحتها.",
        descriptionEn: "Wanted to wear the white coat, heal sick people, and care for human health.",
        categoryTag: "medical_health",
        icon: "Stethoscope"
      },
      {
        id: "q2_d",
        title: "رجل أعمال، مدير شركات، أو تاجر",
        titleEn: "Entrepreneur, Business Executive, or Merchant",
        description: "كنت تحلم بتأسيس مشروعك الخاص، إدارة الأموال، وقيادة فريق عمل.",
        descriptionEn: "Dreamed of founding your own company, managing money, and leading teams.",
        categoryTag: "business_finance",
        icon: "Crown"
      },
      {
        id: "q2_e",
        title: "رسام، مصمم، أو مخرج وفنان",
        titleEn: "Artist, Graphic Designer, or Filmmaker",
        description: "كنت تحب الإبداع، التصوير، الرسم، وإخراج أعمال بصرية مذهلة.",
        descriptionEn: "Passionate about sketching, photography, creating media, and visual aesthetics.",
        categoryTag: "design_art_media",
        icon: "Sparkles"
      }
    ]
  },
  {
    id: 3,
    category: "الأنشطة المدرسية",
    categoryEn: "School Activities & Clubs",
    badge: "المشاركات والنوادي",
    badgeEn: "Extracurriculars",
    question: "وش الأنشطة المدرسية اللي كنت تحب تشارك فيها أو تحضرها في المدرسة؟",
    questionEn: "Which school activity or club did you enjoy participating in the most?",
    description: "النشاط اللي كنت تختار تنضم له في المدرسة بكل حماس.",
    descriptionEn: "The extracurricular activity you eagerly joined at school.",
    options: [
      {
        id: "q3_a",
        title: "تنظيم الفعاليات، المقصف، أو تنظيم الرحلات",
        titleEn: "Event Planning, Canteen, or Trip Organizing",
        description: "إدارة الميزانية، ترتيب الحضور، وتنسيق الفعالية وتوزيع المهام.",
        descriptionEn: "Managing budgets, logistics, scheduling, and coordinating group events.",
        categoryTag: "business_finance",
        icon: "Briefcase"
      },
      {
        id: "q3_b",
        title: "جماعة الصحة المدرسية والإسعافات الأولية",
        titleEn: "School Health Club & First Aid Unit",
        description: "التوعية الصحية، مساعدة زملائك المصابين، والاهتمام بالنظافة والسلامة.",
        descriptionEn: "Health awareness campaigns, assisting injured peers, and medical safety.",
        categoryTag: "medical_health",
        icon: "Heart"
      },
      {
        id: "q3_c",
        title: "النادي الفني، مسابقات الرسم والتصميم",
        titleEn: "Art Club & Design Competitions",
        description: "تنسيق معرض المدرسة، تجهيز الديكور واللوحات البصرية الجذابة.",
        descriptionEn: "Formatting school exhibitions, setting up posters, and visual decorations.",
        categoryTag: "design_art_media",
        icon: "Camera"
      },
      {
        id: "q3_d",
        title: "الإذاعة المدرسية، الإلقاء، والمناظرات",
        titleEn: "School Broadcasting, Speech & Debate Club",
        description: "الوقوف أمام الميكروفون، قراءة الكلمات، وإثارة النقاشات الهادفة.",
        descriptionEn: "Public speaking at the morning mic, debating ideas, and hosting events.",
        categoryTag: "law_social",
        icon: "Mic"
      },
      {
        id: "q3_e",
        title: "النادي التقني، البرمجة، أو المعرض العلمي",
        titleEn: "Tech Club, Coding & Robotics Lab",
        description: "تركيب الأجهزة، برمجة روبوتات بسيطة، أو تجربة الحلول التقنية.",
        descriptionEn: "Assembling computers, building simple robots, and experimenting with tech.",
        categoryTag: "engineering_tech",
        icon: "Laptop"
      }
    ]
  },
  {
    id: 4,
    category: "المساعدة بين الزملاء",
    categoryEn: "Peer Help & Classmates",
    badge: "نقاط قوتك مع أصدقائك",
    badgeEn: "Strengths with Friends",
    question: "وش الشي اللي دايم زملائك في الفصل يطلبون منك تساعدهم فيه؟",
    questionEn: "What is the primary thing your classmates frequently asked your help with?",
    description: "الخدمة التلقائية اللي يلجأ لك أصدقاؤك فيها لأنك شاطر فيها.",
    descriptionEn: "The natural task your friends trusted you to help them solve.",
    options: [
      {
        id: "q4_a",
        title: "حل مسائل الرياضيات والتكود وفهم الحاسب",
        titleEn: "Solving Math Problems & Troubleshooting Computer Issues",
        description: "يفهمون منك شرح المسائل الحسابية أو تصليح مشكلة في الكمبيوتر والبرامج.",
        descriptionEn: "Explaining algebra equations or fixing software and PC glitches.",
        categoryTag: "engineering_tech",
        icon: "Binary"
      },
      {
        id: "q4_b",
        title: "كتابة وتعديل التعبير وتنسيق الكلام وحل النزاعات",
        titleEn: "Proofreading Essays, Public Speaking & Resolving Disputes",
        description: "يطلبون منك تراجع لهم الكلام المكتوب أو تساعدهم يقنعون أحد أو يحلون مشكلة.",
        descriptionEn: "Editing written paragraphs, convincing others, and mediating arguments.",
        categoryTag: "law_social",
        icon: "FileText"
      },
      {
        id: "q4_c",
        title: "شرح دروس الأحياء والتجارب الكيميائية والمعلومات الصحية",
        titleEn: "Explaining Biology Lessons, Lab Experiments & Health Tips",
        description: "يستفسرون منك عن المصطلحات العلمية والمعلومات الدقيقة في منهج العلوم.",
        descriptionEn: "Clarifying scientific definitions, lab steps, and biology concepts.",
        categoryTag: "medical_health",
        icon: "Microscope"
      },
      {
        id: "q4_d",
        title: "جمع المبالغ وتنظيم قطية المشاريع والمواعيد",
        titleEn: "Managing Group Pool Money & Project Schedules",
        description: "يثقون في أمانتك وتنظيمك للميزانية وحساب مصاريف الفريق.",
        descriptionEn: "Handling shared group budgets, tracking costs, and setting deadlines.",
        categoryTag: "business_finance",
        icon: "DollarSign"
      },
      {
        id: "q4_e",
        title: "تصميم البوسترات وتنسيق ألوان المشاريع والعروض",
        titleEn: "Designing Presentation Slides, Posters & Visual Layouts",
        description: "يلجؤون لك عشان تعدل لهم شكل البرزنتيشن أو ترسم وتصمم غلاف البحث.",
        descriptionEn: "Beautifying presentation slides, picking colors, and designing cover pages.",
        categoryTag: "design_art_media",
        icon: "PenTool"
      }
    ]
  },
  {
    id: 5,
    category: "قضاء وقت الفسحة والأوقات الحرة",
    categoryEn: "School Breaks & Free Time",
    badge: "الهوايات العفوية",
    badgeEn: "Spontaneous Habits",
    question: "كيف كنت تفضل تقضي وقت الفسحة أو أوقات الفراغ في المدرسة؟",
    questionEn: "How did you prefer to spend your recess or free time during school?",
    description: "المكان أو النشاط اللي ترتاح فيه عفويًا أثناء اليوم المدرسي.",
    descriptionEn: "The place or activity you felt most comfortable with naturally.",
    options: [
      {
        id: "q5_a",
        title: "في العيادة المدرسية أو قراءة مجلات الصحة والعلم",
        titleEn: "In the School Health Clinic or Reading Medical Articles",
        description: "الاهتمام بالسلامة الصحية والاطلاع على أحدث معلومات الطب والجسم.",
        descriptionEn: "Focusing on medical safety and reading health & biology magazines.",
        categoryTag: "medical_health",
        icon: "HeartHandshake"
      },
      {
        id: "q5_b",
        title: "في المرسم أو الاستوديو الفني للرسم والتصميم",
        titleEn: "In the Art Studio Drawing or Designing Visuals",
        description: "تنسيق الألوان، الرسم الحر، أو متابعة الأعمال البصرية الإبداعية.",
        descriptionEn: "Sketching freely, experimenting with colors, and appreciating visual art.",
        categoryTag: "design_art_media",
        icon: "Palette"
      },
      {
        id: "q5_c",
        title: "في مقصف المدرسة أو التفكير في أفكار تجارية بسيطة",
        titleEn: "At the School Canteen or Brainstorming Business Ideas",
        description: "التواصل مع الزملاء، حساب المشتريات، وتخيل بيع وشراء المنتجات.",
        descriptionEn: "Interacting with peers, calculating sales, and thinking of trade ideas.",
        categoryTag: "business_finance",
        icon: "LineChart"
      },
      {
        id: "q5_d",
        title: "في معامل الحاسب واللعب بالأجهزة والألغاز البرمجية",
        titleEn: "In the Computer Lab Playing with Software & Puzzles",
        description: "استكشاف البرامج، تجربة ألعاب التفكير الخوارزمي، والأجهزة الإلكترونية.",
        descriptionEn: "Exploring PC software, logic games, coding tools, and tech hardware.",
        categoryTag: "engineering_tech",
        icon: "Code"
      },
      {
        id: "q5_e",
        title: "في النقاش والسوالف مع الأصدقاء وحل الخلافات بين الطلاب",
        titleEn: "Debating with Friends & Resolving Student Arguments",
        description: "الاستماع للناس، النقاش في قضايا اليوم، ومساعدة الأصدقاء بحكمة.",
        descriptionEn: "Listening to friends, discussing social topics, and giving wise counsel.",
        categoryTag: "law_social",
        icon: "Users"
      }
    ]
  },
  {
    id: 6,
    category: "الرحلات المدرسية المفضلة",
    categoryEn: "School Field Trips",
    badge: "الاستكشاف الميداني",
    badgeEn: "Field Trips",
    question: "لو المدرسة نظمت رحلة ميدانية، وش المكان اللي كان بيعجبك أكثر شي؟",
    questionEn: "If your school organized a field trip, which destination would excite you most?",
    description: "المكان الميداني اللي يثير فضولك واهتمامك فوراً.",
    descriptionEn: "The real-world destination that sparks your curiosity instantly.",
    options: [
      {
        id: "q6_a",
        title: "زيارة المحكمة، الجمعيات الاجتماعية، أو المراكز الثقافية",
        titleEn: "Visiting Law Courts, Social Organizations, or Cultural Centers",
        description: "الاطلاع على كيفية تطبيق الأنظمة وم مساعدة المجتمع والخدمات العامة.",
        descriptionEn: "Learning about legal enforcement, civic duty, and community service.",
        categoryTag: "law_social",
        icon: "Building"
      },
      {
        id: "q6_b",
        title: "زيارة معارض الفنون، استوديوهات التصوير، والمتاحف البصرية",
        titleEn: "Visiting Art Galleries, Photography Studios & Visual Museums",
        description: "الاستمتاع بالتغذية البصرية، الإخراج، والفنون الجميلة المعروضة.",
        descriptionEn: "Soaking in visual aesthetics, photography, media, and fine art displays.",
        categoryTag: "design_art_media",
        icon: "Compass"
      },
      {
        id: "q6_c",
        title: "زيارة مدينة الملك عبدالعزيز للعلوم والتقنية أو مركز حاسب وأبحاث",
        titleEn: "Visiting Science & Technology Centers or Computer Research Labs",
        description: "رؤية السيرفرات، الروبوتات، والأجهزة البرمجية المتطورة عن قرب.",
        descriptionEn: "Seeing servers, robotics, AI systems, and tech infrastructure up close.",
        categoryTag: "engineering_tech",
        icon: "Activity"
      },
      {
        id: "q6_d",
        title: "زيارة هيئة سوق المال، البنوك، أو مقرات الشركات الكبرى",
        titleEn: "Visiting Stock Exchange Centers, Banks, or Corporate HQs",
        description: "فهم كيف تدار الشركات التجارية الكبرى وحركة الاستثمار والأموال.",
        descriptionEn: "Understanding corporate management, financial investment, and trading.",
        categoryTag: "business_finance",
        icon: "Building2"
      },
      {
        id: "q6_e",
        title: "زيارة مستشفى حديث، كليات الطب، أو مختبر أبحاث صحية",
        titleEn: "Visiting Modern Hospitals, Medical Colleges & Research Labs",
        description: "رؤية غرف الأطباء، الأجهزة التشخيصية، وعالم الرعاية الصحية المباشرة.",
        descriptionEn: "Observing clinical doctor setups, diagnostic equipment, and patient care.",
        categoryTag: "medical_health",
        icon: "Stethoscope"
      }
    ]
  },
  {
    id: 7,
    category: "نوع المشاريع المدرسية",
    categoryEn: "School Project Types",
    badge: "الإنجاز والتطبيق",
    badgeEn: "Project Excel",
    question: "وش نوع المشاريع المدرسية اللي لما يطلبها المدرس تحس إنك تبدع فيها وتجيب فيها درجة كاملة؟",
    questionEn: "Which type of school assignment do you excel at and score top grades effortlessly?",
    description: "نوع المشروع اللي تحس إنه يلعب على نقطة قوتك.",
    descriptionEn: "The project format that leverages your greatest strength.",
    options: [
      {
        id: "q7_a",
        title: "مشروع يطلب تصميم بوستر، فيديو مونتاج، أو مجسم فني",
        titleEn: "Assignments Requiring Poster Design, Video Editing, or Art Models",
        description: "الإخراج البصري الجذّاب والألوان والتصميم البصري هو ملعبي.",
        descriptionEn: "Creative visual output, color palettes, and video production is my court.",
        categoryTag: "design_art_media",
        icon: "Layers"
      },
      {
        id: "q7_b",
        title: "مشروع يطلب بناء موقع، تطبيق، أو تجربة هندسية برمجية",
        titleEn: "Projects Requiring Website Building, App Prototype, or Tech Demo",
        description: "التركيز على البرمجة، الأكواد، وتجربة الأنظمة الذكية بالكمبيوتر.",
        descriptionEn: "Focusing on coding, algorithms, hardware kits, and software systems.",
        categoryTag: "engineering_tech",
        icon: "Laptop"
      },
      {
        id: "q7_c",
        title: "مشروع يطلب كتابة تقرير متميز، بحث لغوي، أو تقديم عرض شفهي",
        titleEn: "Assignments Requiring Detailed Reports, Research Papers & Speeches",
        description: "الكتابة الفصيحة، تلخيص المعلومات، والإلقاء بثقة أمام الفصل.",
        descriptionEn: "Fluent essay writing, summarizing references, and confident speeches.",
        categoryTag: "law_social",
        icon: "BookOpen"
      },
      {
        id: "q7_d",
        title: "مشروع يطلب تشريح، تجربة مختبرية، أو بحث صحي وعلمي",
        titleEn: "Projects Requiring Dissection, Biology Experiments, or Health Reports",
        description: "الدقة العلمية، الفحص المعملي، وجمع الحقائق عن جسم الإنسان الطبيعية.",
        descriptionEn: "Scientific accuracy, lab dissections, and human health investigations.",
        categoryTag: "medical_health",
        icon: "Microscope"
      },
      {
        id: "q7_e",
        title: "مشروع يطلب حساب تكاليف، خطة تسويق، أو دراسة فكرة مشروع تجاري",
        titleEn: "Projects Requiring Cost Calculations, Marketing Plans & Business Feasibility",
        description: "حساب الأرقام، دراسة الجدوى، واستراتيجيات التسويق والأرباح.",
        descriptionEn: "Cost analysis, sales strategy, revenue projections, and business plans.",
        categoryTag: "business_finance",
        icon: "PieChart"
      }
    ]
  },
  {
    id: 8,
    category: "مديح المعلمين والمعلمات",
    categoryEn: "Teacher Compliments",
    badge: "ملاحظات المعلمين",
    badgeEn: "Feedback",
    question: "وش الإطراء أو الصفة اللي مدرسينك في المدرسة كانوا يلاحظونها ويمدحونها فيك؟",
    questionEn: "What praise or trait did your high school teachers frequently notice and compliment you for?",
    description: "التقييم المستمر اللي كنت تسمعه من معلميك في المدرسة.",
    descriptionEn: "The consistent positive feedback you received from educators.",
    options: [
      {
        id: "q8_a",
        title: "'عقليتك تجارية وتنظيمية وتعرف تدير الأمور وتنسق الفريق'",
        titleEn: "'You have a sharp business mindset, great organization, and leadership skills'",
        description: "لاحظوا فيك الحس الإداري والقيادي وحسن إدارة الوقت والموارد.",
        descriptionEn: "Noticed your executive management, team leadership, and resource organization.",
        categoryTag: "business_finance",
        icon: "BarChart3"
      },
      {
        id: "q8_b",
        title: "'أسلوبك لبق وتعرف تتحدث وتستمع وتصلح بين الناس بالحكمة'",
        titleEn: "'You are eloquent, diplomatic, a good listener, and mediate disputes wisely'",
        description: "لاحظوا فيك طلاقة اللسان، التفكير العادل، والقدرة على الفهم الاجتماعي.",
        descriptionEn: "Recognized your verbal eloquence, fair-mindedness, and social intelligence.",
        categoryTag: "law_social",
        icon: "ShieldAlert"
      },
      {
        id: "q8_c",
        title: "'ما شاء الله عليك ذكي في الأرقام والحاسب والتفكير المنطقي'",
        titleEn: "'You are brilliant with math, logical reasoning, and computer tech'",
        description: "لاحظوا سرعة استيعابك للمسائل الرياضية والتقنية والحلول البرمجية.",
        descriptionEn: "Praised your quick grasp of math logic, algorithms, and software tools.",
        categoryTag: "engineering_tech",
        icon: "Zap"
      },
      {
        id: "q8_d",
        title: "'عندك حس فني وذوق إبداعي رائع في كل عمل تقدمه'",
        titleEn: "'You possess an artistic eye and wonderful creative taste in all your work'",
        description: "لاحظوا لمستك الجمالية في التصاميم والعروض والأفكار المبتكرة.",
        descriptionEn: "Noticed your aesthetic taste in visual presentations, art, and creative ideas.",
        categoryTag: "design_art_media",
        icon: "Feather"
      },
      {
        id: "q8_e",
        title: "'دقيق وملاحظ وتصلح تعتني بالآخرين وتدرس علوم وصحة'",
        titleEn: "'You are observant, caring, meticulous, and suited for medical science'",
        description: "لاحظوا اهتمامك بالتفاصيل العلمية الدقيقة والرعاية الإنسانية الهادئة.",
        descriptionEn: "Commended your scientific attention to detail and compassionate care.",
        categoryTag: "medical_health",
        icon: "Heart"
      }
    ]
  },
  {
    id: 9,
    category: "المقالات والأخبار على الجوال",
    categoryEn: "Mobile Content & Reading",
    badge: "الفضول الرقمي",
    badgeEn: "Digital Curiosity",
    question: "لما تتصفح جوالك وتشوف مقالات أو مقاطع فيديو، وش المقطع اللي يشدك تفتحه وتشوفه؟",
    questionEn: "When scrolling your phone, which type of video or article catches your attention immediately?",
    description: "نوع المحتوى اللي يثير فضولك التلقائي على منصات التواصل.",
    descriptionEn: "The topic that sparks your spontaneous digital curiosity.",
    options: [
      {
        id: "q9_a",
        title: "مقاطع نصائح الصحة، اكتشافات الطب، وغرائب جسم الإنسان",
        titleEn: "Videos About Medical Discoveries, Health Tips & Human Biology Wonders",
        description: "تحب تعرف كيف تعمل أعضاء الجسم وتطور الدواء والطب الجراحي.",
        descriptionEn: "Fascinated by how organs work, pharmaceutical advances, and surgical medical care.",
        categoryTag: "medical_health",
        icon: "Stethoscope"
      },
      {
        id: "q9_b",
        title: "مقاطع أحدث التقنيات، الذكاء الاصطناعي، وتطبيقات الموبايل",
        titleEn: "Videos About Latest Tech Innovations, AI Gadgets & Software Apps",
        description: "تشدك اخبار التكنولوجيا، الجوالات، البرمجة، والابتكارات الهندسية.",
        descriptionEn: "Hooked by AI news, smartphones, coding breakthroughs, and tech inventions.",
        categoryTag: "engineering_tech",
        icon: "Cpu"
      },
      {
        id: "q9_c",
        title: "مقاطع دروس الرسم، التعديل البصري، والمونتاج والفنون",
        titleEn: "Videos Tutorials on Drawing, Photoshop Editing & Video Production",
        description: "تتابع المبدعين في التصاميم والهوية البصرية وفنون صناعة الفيديو.",
        descriptionEn: "Following graphic designers, video editors, visual storytelling, and artists.",
        categoryTag: "design_art_media",
        icon: "Camera"
      },
      {
        id: "q9_d",
        title: "مقاطع تحليل الشخصيات النفسية، القوانين، وثقافة الشعوب",
        titleEn: "Videos Analyzing Psychology, Law Cases & Cultural History",
        description: "يستهويك تحليل السلوك الإنساني وقضايا المجتمع والقوانين العامة.",
        descriptionEn: "Intrigued by human behavioral psychology, legal cases, and civic history.",
        categoryTag: "law_social",
        icon: "BookOpen"
      },
      {
        id: "q9_e",
        title: "مقاطع قصص تجار ونشاط الشركات والتجارة الرقمية وأسعار الأسواق",
        titleEn: "Videos Stories of Successful Entrepreneurs, Business Brands & Stock Markets",
        description: "تحب تتابع أسرار نجاح المشاريع والربح والتخطيط المالي والشركات.",
        descriptionEn: "Interested in business case studies, startup success, and financial markets.",
        categoryTag: "business_finance",
        icon: "TrendingUp"
      }
    ]
  },
  {
    id: 10,
    category: "التمثيل في المسابقات المدرسية",
    categoryEn: "School Competitions",
    badge: "التميز المدرسي",
    badgeEn: "Representing School",
    question: "لو المدرسة طلبت منك تمثلها في مسابقة على مستوى المنطقة، وش المجال اللي تختار تشارك فيه؟",
    questionEn: "If your school asked you to represent them in a regional competition, which field would you choose?",
    description: "المجال اللي تحس إنك واثق تقدم فيه أفضل أداء وتفوز.",
    descriptionEn: "The domain where you feel most confident to compete and win.",
    options: [
      {
        id: "q10_a",
        title: "مسابقة التقاليد الأدبية، المناظرات، والإلقاء الخطابي",
        titleEn: "Public Speaking, Speech & Regional Debate Tournament",
        description: "إثبات الحجة، طلاقة اللسان، والتحدث بثقة أمام جمهور الحكام.",
        descriptionEn: "Proving logical arguments, public speaking, and persuading judges.",
        categoryTag: "law_social",
        icon: "Mic"
      },
      {
        id: "q10_b",
        title: "مسابقة الابتكارات التقنية، البرمجة، والروبوت",
        titleEn: "Tech Innovation Olympiad, Coding Hackathon & Robotics",
        description: "عرض حل برمجي أو نظام تقني ذكي مبتكر لحل مشكلة محددة.",
        descriptionEn: "Presenting a software solution, smart app prototype, or robotics demo.",
        categoryTag: "engineering_tech",
        icon: "Rocket"
      },
      {
        id: "q10_c",
        title: "مسابقة الرسم، التصوير الفوتوغرافي، أو المونتاج الفني",
        titleEn: "Fine Arts, Photography, or Video Editing Exhibition",
        description: "تقديم عمل براهين بصري مبهر ينال إعجاب لجنة التحكيم الفنية.",
        descriptionEn: "Submitting a stunning visual art piece or film to impress art jury panels.",
        categoryTag: "design_art_media",
        icon: "Palette"
      },
      {
        id: "q10_d",
        title: "مسابقة الأولمبياد الوطني للعلوم والأبحاث الصحية",
        titleEn: "National Science & Medical Research Olympiad",
        description: "تقديم بحث علمي دقيق في الأحياء أو الصحة يخدم البشرية.",
        descriptionEn: "Conducting a meticulous scientific research report in biology or healthcare.",
        categoryTag: "medical_health",
        icon: "Dna"
      },
      {
        id: "q10_e",
        title: "مسابقة التاجر الصغير أو ريادة الأعمال الشابة",
        titleEn: "Young Entrepreneurs & Business Plan Challenge",
        description: "تقديم فكرة مشروع تجاري مربح مع دراسة جدوى استثمارية متميزة.",
        descriptionEn: "Pitching a profitable business startup idea with financial feasibility studies.",
        categoryTag: "business_finance",
        icon: "Coins"
      }
    ]
  },
  {
    id: 11,
    category: "أسلوب المذاكرة السريع",
    categoryEn: "Exam Study Techniques",
    badge: "طريقة فهمك",
    badgeEn: "Study Style",
    question: "قبل الاختبارات، وش أسهل طريقة تنجزك وتخليك تفهم الدرس بسرعة بدون تعقد؟",
    questionEn: "Before final exams, what study method helps you understand lessons fastest?",
    description: "الأسلوب اللي يخلي المعلومات تثبت في مخك على طول.",
    descriptionEn: "The learning technique that locks information into your memory.",
    options: [
      {
        id: "q11_a",
        title: "رسم المخططات البصرية والخرائط الذهنية بالألوان",
        titleEn: "Drawing Visual Mind Maps & Color-Coded Diagrams",
        description: "التنظيم البصري والرسومات الملونة يساعدك في التذكر السريع.",
        descriptionEn: "Visual organization and color diagrams trigger fast recall.",
        categoryTag: "design_art_media",
        icon: "Eye"
      },
      {
        id: "q11_b",
        title: "حل المسائل الحسابية والتطبيقات والأكواد باليد",
        titleEn: "Solving Math Equations & Hands-on Logic Exercises",
        description: "تطبيق خطوات المسائل الرياضية أو الخوارزميات بالورقة والقلم.",
        descriptionEn: "Practicing step-by-step logic equations and algorithms on paper.",
        categoryTag: "engineering_tech",
        icon: "Binary"
      },
      {
        id: "q11_c",
        title: "تلخيص الدروس في أوراق وقراءتها بصوت عالي أو شرحها لغيرك",
        titleEn: "Summarizing Text into Bullet Points & Explaining Out Loud",
        description: "صياغة الأفكار بأسلوبك والتحدث بها وترتيب النقاط اللغوية.",
        descriptionEn: "Phrasing concepts in your own words, writing notes, and teaching peers.",
        categoryTag: "law_social",
        icon: "FileText"
      },
      {
        id: "q11_d",
        title: "حفظ المفاهيم والروابط والخطوات الدقيقة والتجارب العلمية",
        titleEn: "Memorizing Exact Scientific Terms, Biology Steps & Definitions",
        description: "التركيز على التفاصيل الدقيقة وحفظ المصطلحات والخطوات العلمية.",
        descriptionEn: "Focusing on precise definitions, scientific terms, and biology steps.",
        categoryTag: "medical_health",
        icon: "BookMarked"
      },
      {
        id: "q11_e",
        title: "فهم الفكرة العامة والتركيز على أسباب ونتائج النقاط الأساسية",
        titleEn: "Grasping the Big Picture & Core Strategic Concepts",
        description: "فهم الصورة الكبيرة والاستراتيجيات بدون الغرق في شكليات التفاصيل.",
        descriptionEn: "Understanding high-level strategic summaries without getting lost in details.",
        categoryTag: "business_finance",
        icon: "PieChart"
      }
    ]
  },
  {
    id: 12,
    category: "الشعور العفوي الحالي",
    categoryEn: "Present Instinct",
    badge: "حدسك البسيط",
    badgeEn: "Inner Instinct",
    question: "وبشكل بديهي وسريع، وش المجال اللي تحس قلبك يميل له أكثر الحين لجامعتك؟",
    questionEn: "Intuitively and right now, which general domain does your heart lean towards for college?",
    description: "استمع إلى صوتك الداخلي العفوي والبسيط.",
    descriptionEn: "Listen to your simple inner instinct.",
    options: [
      {
        id: "q12_a",
        title: "مجال التكنولوجيا، البرمجة، والهندسة",
        titleEn: "Technology, Computer Science & Engineering",
        description: "عالم الحواسيب، الأنظمة الذكية، والحلول الهندسية التكنولوجية.",
        descriptionEn: "The world of software engineering, computers, AI, and hardware.",
        categoryTag: "engineering_tech",
        icon: "Globe"
      },
      {
        id: "q12_b",
        title: "مجال الطب، الصحة، والدواء",
        titleEn: "Medicine, Health Sciences & Pharmacy",
        description: "عالم الرعاية الصحية، خدمة المرضى، والعلوم الطبية المعملية.",
        descriptionEn: "The world of clinical healthcare, patient treatment, and medical research.",
        categoryTag: "medical_health",
        icon: "ShieldCheck"
      },
      {
        id: "q12_c",
        title: "مجال التجارة، الإدارة، والتسويق",
        titleEn: "Business Administration, Finance & Marketing",
        description: "عالم الشركات، القيادة، إدارة الأموال، والمشاريع التجارية.",
        descriptionEn: "The world of corporate leadership, financial trading, and commerce.",
        categoryTag: "business_finance",
        icon: "TrendingUp"
      },
      {
        id: "q12_d",
        title: "مجال التصميم، الفنون، والإعلام",
        titleEn: "Visual Design, Fine Arts & Digital Media",
        description: "عالم الإبداع البصري، الهوية البصرية، وصناعة الوسائط والإخراج.",
        descriptionEn: "The world of graphic arts, UI/UX, video production, and aesthetic design.",
        categoryTag: "design_art_media",
        icon: "Palette"
      },
      {
        id: "q12_e",
        title: "مجال القانون، التدريس، والعلوم الاجتماعية",
        titleEn: "Law, Education & Social Sciences",
        description: "عالم الحقوق، التواصل الإنساني، والخدمة الاجتماعية العامة.",
        descriptionEn: "The world of legal systems, human relations, advocacy, and social impact.",
        categoryTag: "law_social",
        icon: "Scale"
      }
    ]
  }
];
