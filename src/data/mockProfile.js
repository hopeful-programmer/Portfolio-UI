/**
 * Mock profile data matching the ProfileDto schema from the C# API.
 * Used as fallback when the API is unavailable.
 * Keep this in sync with PortfolioDbSeeder.cs.
 */
// Default fallback avatar — exported so App.jsx can use it too
export const defaultAvatar = "/images/luai_personal_image.png";

const mockProfile = {
  fullName: "Luai Alsakkaf",
  jobTitle: "Full-Stack .NET Developer",
  profileImageUrl: "/images/luai_personal_image.png",
  summary:
    "Full-Stack .NET Developer and final-year CS student (GPA: 3.95/4.00) with hands-on experience building production-grade web applications using ASP.NET Core 10, C#, Entity Framework Core, and SQL Server. Currently delivering a live enterprise course registration system at the Yanbu Chamber of Commerce, applying clean architecture, Domain-Driven Design, and a security-first approach across the full stack. Strong fundamentals in OOP, REST API design, SOLID Principles, and JWT authentication.",
  summaryAr:
    "مطور Full-Stack بـ .NET وطالب في سنتي الأخيرة بتخصص علوم الحاسب (بمعدل 3.95/4.00)، أمتلك خبرة عملية في بناء تطبيقات ويب إنتاجية باستخدام ASP.NET Core 10 و C# و Entity Framework Core و SQL Server. أعمل حالياً على تسليم نظام تسجيل دورات مؤسسي نشط في الغرفة التجارية بينبع، مطبقاً Clean Architecture و Domain-Driven Design ونهجاً أمنياً محكماً عبر كامل المشروع. أمتلك أسساً قوية في OOP وتصميم REST API ومبادئ SOLID ومصادقة JWT.",
  email: "louialsakaf@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1dgSZOLk-pky0wqHAGJIl1amDrOkl4iF0/view?usp=sharing",
  socialLinks: [
    {
      platformName: "LinkedIn",
      url: "https://www.linkedin.com/in/luai-alsakkaf/",
      iconClass: "fa-brands fa-linkedin",
    },
    {
      platformName: "GitHub",
      url: "https://github.com/hopeful-programmer",
      iconClass: "fa-brands fa-github",
    },
  ],
  experiences: [
    {
      organization: "Yanbu Chamber of Commerce",
      role: "Co-op Trainee · IT & Software Development",
      roleAr: "متدرب تعاوني · قسم تقنية المعلومات وتطوير البرمجيات",
      location: "Yanbu, Saudi Arabia",
      startDate: "2026-01-25",
      endDate: null,
      description:
        "Architecting and developing a backend course registration API using ASP.NET Core 10, designed to serve a React SPA frontend, replacing manual enrollment workflows with a centralized, role-based system serving Admins and Trainees. Built a responsive React SPA with component-based architecture, Axios HTTP client integration, and role-based UI rendering for Admin and Trainee dashboards. Designed a clean layered architecture (Controllers → Services → Repositories → EF Core) following SOLID principles, with interface-based dependency injection, immutable record-based DTOs, and a global exception handling middleware returning structured ProblemDetails responses. Built a comprehensive JWT-based authentication system covering the full identity lifecycle — token management, email confirmation, password recovery, and automatic session invalidation — following OWASP security guidelines. Applied a defense-in-depth security strategy across the application, transport, and authentication layers, aligned with OWASP Top 10 threat categories. Implemented Domain-Driven Design with rich domain models enforcing complex business invariants through a state-machine lifecycle, ensuring data consistency at the domain layer.",
      descriptionAr:
        "تصميم وتطوير API تسجيل دورات خلفية باستخدام ASP.NET Core 10، مصمم لخدمة واجهة React SPA أمامية، يستبدل سير العمل اليدوي بنظام مركزي يعتمد على الأدوار ويخدم المسؤولين والمتدربين. بناء React SPA متجاوب بمعمارية مكونات، وتكامل Axios مع الـ API، وعرض واجهة مستخدم مبنية على الأدوار للوحات تحكم المسؤول والمتدرب. تصميم معمارية طبقية نظيفة (Controllers → Services → Repositories → EF Core) وفق مبادئ SOLID، مع حقن تبعيات قائم على الواجهات، وDTOs غير قابلة للتعديل مبنية على Records، ومعالج استثناءات شامل يُعيد استجابات ProblemDetails منظمة. بناء نظام مصادقة JWT شامل يغطي دورة حياة الهوية الكاملة — إدارة الرموز، تأكيد البريد الإلكتروني، استعادة كلمة المرور، وإلغاء الجلسة التلقائي — وفق إرشادات OWASP الأمنية. تطبيق استراتيجية أمان دفاع متعمق عبر طبقات التطبيق والنقل والمصادقة، متوافقة مع فئات تهديد OWASP Top 10. تطبيق Domain-Driven Design مع نماذج نطاق غنية تفرض ثوابت الأعمال المعقدة من خلال دورة حياة state-machine، مما يضمن اتساق البيانات في طبقة النطاق.",
    },
  ],
  projects: [
    {
      title: "Learning Management System (LMS)",
      summary:
        "A full-featured educational platform with an AI course assistant, bilingual RTL/LTR support, and accessibility-first design.",
      summaryAr:
        "منصة تعليمية متكاملة المزايا، تحتوي على مساعد ذكي للمقررات (AI)، وتدعم اللغتين العربية والإنجليزية بتبديل سلس لاتجاه النصوص (RTL/LTR)، مع تصميم يضع إمكانية الوصول في المقام الأول.",
      description:
        "Built a multi-role educational platform using Laravel's MVC architecture, with a RESTful API secured by Laravel Sanctum and a normalized MySQL schema via Eloquent ORM. Designed for inclusivity — supporting English and Arabic with seamless RTL switching, a dyslexia-friendly reading mode, and dark/light themes. Integrated the Gemini API for an AI-powered course assistant and n8n for event-driven email automation.",
      descriptionAr:
        "قمت ببناء منصة تعليمية تدعم تعدد المستخدمين والصلاحيات باستخدام معمارية MVC في Laravel، وتضمنت واجهة برمجية (RESTful API) محمية بواسطة Laravel Sanctum، وقاعدة بيانات MySQL مهيكلة (Normalized) باستخدام Eloquent ORM. صُممت المنصة لتكون شاملة للجميع؛ حيث تدعم اللغتين الإنجليزية والعربية مع انتقال سلس بين اتجاهي الكتابة (RTL و LTR)، وتحتوي على وضع قراءة مخصص لمن يعانون من عسر القراءة (Dyslexia)، فضلاً عن دعم الوضعين الفاتح والداكن. كما قمت بدمج واجهة Gemini API لتوفير مساعد تعليمي ذكي، واستخدمت n8n لأتمتة إشعارات البريد الإلكتروني بناءً على الأحداث (Event-driven).",
      technologies: ["Laravel", "PHP", "TailwindCSS", "MySQL", "n8n"],
      demoUrl: "https://lms-project-laravel.up.railway.app/login",
      demoType: "live",
      features: [
        "AI course assistant powered by the Gemini API, helping users navigate course content and get instant answers.",
        "Bilingual English/Arabic interface with seamless RTL switching, dyslexia-friendly typography, and dark/light theme support.",
        "Automated event-driven email notifications via n8n workflow automation, triggered by enrollment and course lifecycle events.",
        "RESTful API with Laravel Sanctum token authentication and Eloquent ORM for a clean, normalized data layer.",
      ],
      featuresAr: [
        "مساعد تعليمي ذكي مدعوم بـ Gemini API، يساعد المستخدمين على استيعاب المحتوى والحصول على إجابات فورية.",
        "واجهة ثنائية اللغة مع تبديل سلس لاتجاه النص RTL، وخط مريح لذوي عسر القراءة (Dyslexia)، ودعم كامل للوضعين الفاتح والداكن.",
        "إشعارات بريد إلكتروني تلقائية عبر n8n، مرتبطة بأحداث التسجيل ودورة حياة المقرر دون أي تدخل يدوي.",
        "RESTful API محمية بـ Laravel Sanctum، وقاعدة بيانات منظمة وفق معايير التسوية (Normalization) باستخدام Eloquent ORM.",
      ],
    },
    {
      title: "Multi-Factor Biometric Attendance System",
      summary:
        "A Python-powered attendance system combining facial recognition and voice verification to achieve 98%+ authentication accuracy.",
      summaryAr:
        "نظام ذكي لتسجيل الحضور مبرمج بلغة Python، يدمج بين تقنيات التعرف على الوجه والتحقق من بصمة الصوت ليحقق دقة مصادقة تتجاوز 98%.",
      description:
        "Engineered a dual-factor biometric attendance system using Python, combining real-time facial recognition with speaker verification to achieve over 98% authentication accuracy. Attendance records are backed by MySQL with a database-level cooldown trigger to prevent duplicate entries, and the system includes robust fallback handling to ensure continuous operation during hardware or recognition failures.",
      descriptionAr:
        "صممت وطورت نظام حضور حيوي (Biometric) ثنائي العوامل باستخدام Python، يجمع بين التعرف الفوري على الوجوه والتحقق من بصمة الصوت للمتحدث، مما رفع دقة المصادقة إلى أكثر من 98%. تُدار سجلات الحضور عبر قاعدة بيانات MySQL، مع استخدام Trigger لمنع تكرار تسجيل الحضور في فترات متقاربة (Cooldown). كما زودت النظام بآليات تعافي مرنة (Fallback Handling) لضمان استمرار عمله دون توقف في حال حدوث أعطال في الأجهزة أو فشل في التعرف.",
      technologies: ["Python", "OpenCV", "face_recognition", "Picovoice", "MySQL"],
      demoUrl: null,
      demoType: null,
      features: [
        "Real-time facial recognition using OpenCV and the face_recognition library as the primary identity factor.",
        "Voice-based speaker verification via Picovoice SDK as a secondary factor, defeating simple face-spoofing attacks.",
        "MySQL backend with a database-level attendance cooldown trigger to prevent duplicate check-in entries.",
      ],
      featuresAr: [
        "تعرف على الوجه في الوقت الفعلي باستخدام OpenCV ومكتبة face_recognition كعامل مصادقة أساسي.",
        "التحقق من بصمة الصوت عبر Picovoice SDK كعامل ثانوي، يُغلق الباب أمام محاولات انتحال الهوية.",
        "قاعدة بيانات MySQL مع Trigger على مستوى قاعدة البيانات يمنع تسجيل الحضور المكرر خلال فترة الـ Cooldown.",
      ],
    },
  ],

  // Skills grouped by category — mirrors PortfolioDbSeeder.cs exactly
  skills: [
    // Languages
    { name: "C#",          category: "Languages" },
    { name: "SQL",         category: "Languages" },
    { name: "JavaScript",  category: "Languages" },
    { name: "HTML/CSS",    category: "Languages" },
    { name: "Python",      category: "Languages" },

    // Frameworks & Libraries
    { name: "ASP.NET Core 10",       category: "Frameworks & Libraries" },
    { name: "Entity Framework Core", category: "Frameworks & Libraries" },
    { name: "React",                 category: "Frameworks & Libraries" },
    { name: "Laravel",               category: "Frameworks & Libraries" },

    // Databases
    { name: "SQL Server", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "MySQL",      category: "Databases" },
    { name: "SQLite",     category: "Databases" },

    // Tools & Practices
    { name: "Git",                  category: "Tools & Practices" },
    { name: "Visual Studio",        category: "Tools & Practices" },
    { name: "Postman",              category: "Tools & Practices" },
    { name: "Swagger / OpenAPI",    category: "Tools & Practices" },
    { name: "REST API Design",      category: "Tools & Practices" },
    { name: "SOLID Principles",     category: "Tools & Practices" },
    { name: "Dependency Injection", category: "Tools & Practices" },
    { name: "Repository Pattern",   category: "Tools & Practices" },
    { name: "JWT Authentication",   category: "Tools & Practices" },
    { name: "ASP.NET Identity",     category: "Tools & Practices" },
    { name: "Options Pattern",      category: "Tools & Practices" },
    { name: "OWASP Top 10",         category: "Tools & Practices" },
    { name: "Clean Architecture",   category: "Tools & Practices" },
    { name: "Domain-Driven Design", category: "Tools & Practices" },
  ],

  awards: [
    {
      title: "Jaheziyah Badge of Excellence",
      titleAr: "وسام الجاهزية للتميز",
      issuingOrganization: "ETEC (Education & Training Evaluation Commission)",
      year: 2026,
      description:
        "Awarded to top-performing graduates in the national workforce readiness assessment.",
      descriptionAr:
        "وسام حصلت عليه ضمن أفضل الخريجين أداءً في اختبار الجاهزية لسوق العمل (التقييم الوطني للقوى العاملة).",
    },
  ],
  certifications: [
    {
      name: "Microsoft Getting Started with ASP.NET Core Professional Certificate",
      issuingOrganization: "Microsoft (via Coursera)",
      issueDate: "2026-05-01",
      expirationDate: null,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/specialization/PKFKLM8MHUI0",
    },
    {
      name: "Cyber Security Diploma",
      issuingOrganization: "Ibn Rushd College",
      issueDate: "2023-09-01",
      expirationDate: null,
      credentialUrl: "",
    },
  ],

  // Education — mirrors PortfolioDbSeeder.cs Education entry
  educations: [
    {
      institution: "Yanbu Industrial College",
      degree: "B.Sc.",
      fieldOfStudy: "Computer Science",
      gpa: "3.95/4.00",
      honors: "First Class Honours · All Academic Years",
      location: "Yanbu, Saudi Arabia",
      startDate: "2022-09-01",
      endDate: null,
      isExpected: true,
    },
  ],
};

export default mockProfile;
