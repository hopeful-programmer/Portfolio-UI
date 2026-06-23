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
    "Final-year CS student (GPA: 3.95/4.00) building production software before graduating. Currently the sole developer on a live enterprise course registration system at the Yanbu Chamber of Commerce — a full-stack platform built with ASP.NET Core 10, React, and SQL Server that replaced entirely manual enrollment workflows. I apply clean architecture, SOLID principles, Domain-Driven Design, and OWASP security guidelines as defaults, not afterthoughts.",
  summaryAr:
    "أنا طالب في سنتي الأخيرة بتخصص علوم الحاسب (بمعدل 3.95/4.00)، وأعمل على بناء برمجيات حقيقية قبل التخرج. أعمل حالياً كمطور وحيد لنظام تسجيل دورات مؤسسي نشط في الغرفة التجارية بينبع؛ وهو منصة Full-Stack متكاملة مبنية باستخدام ASP.NET Core 10 و React و SQL Server، والتي استبدلت الإجراءات اليدوية بالكامل. أعتمد في عملي على تطبيق الـ Clean Architecture، ومبادئ SOLID، و Domain-Driven Design، بالإضافة إلى معايير أمان OWASP كركائز أساسية في مشاريعي.",
  email: "louialsakaf@gmail.com",
  resumeUrl: "http://localhost:5117/documents/Luai_Alsakkaf_NET_Developer.pdf",
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
      role: "Co-op Trainee — IT & Software Development",
      roleAr: "متدرب تعاوني — قسم تقنية المعلومات وتطوير البرمجيات",
      location: "Yanbu, Saudi Arabia",
      startDate: "2026-01-25",
      endDate: null,
      description:
        "Sole developer on a live enterprise course registration platform replacing manual enrollment workflows at the chamber, serving Admin and Trainee roles. Architected a clean layered ASP.NET Core 10 backend (Controllers → Services → Repositories → EF Core) following SOLID principles, with interface-based dependency injection, immutable record-based DTOs, and a global exception handler returning structured ProblemDetails responses. Built the React SPA frontend with Axios API integration and role-based dashboard rendering. Implemented a complete JWT authentication lifecycle — email confirmation, password recovery, and automatic session invalidation — aligned with OWASP Top 10. Applied Domain-Driven Design with a state-machine enrollment lifecycle to enforce business rules at the domain layer.",
      descriptionAr:
        "توليت مسؤولية التطوير بالكامل لمنصة تسجيل دورات مؤسسية نشطة في الغرفة التجارية، مما أنهى الاعتماد على الإجراءات الورقية واليدوية السابقة، مع توفير واجهات مخصصة للمسؤولين والمتدربين. صممت البنية الخلفية بنمط Clean Architecture باستخدام ASP.NET Core 10 وفقاً لمبادئ SOLID. تضمن العمل تطبيق Dependency Injection عبر الواجهات، واستخدام DTOs مبنية على الـ Records غير القابلة للتغيير (Immutable)، ومعالج استثناءات شامل يُعيد الاستجابات بصيغة ProblemDetails القياسية. قمت ببناء الواجهة الأمامية كـ SPA باستخدام React مع الاعتماد على Axios، وتخصيص لوحات التحكم بناءً على صلاحيات المستخدم (Role-based). كما طبقت دورة حياة متكاملة للمصادقة عبر JWT تتوافق مع معايير OWASP Top 10. ولضمان دقة العمليات، طبقت مفاهيم Domain-Driven Design مع State-Machine لإدارة دورة التسجيل وفرض قواعد الأعمال بصرامة في طبقة الـ Domain.",
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
  skills: [
    "C# & .NET",
    "ASP.NET Core 10",
    "Entity Framework Core",
    "React & JavaScript",
    "SQL Server & PostgreSQL",
    "Clean Architecture",
    "Domain-Driven Design",
    "SOLID Principles",
    "JWT & ASP.NET Identity",
    "REST API Design",
    "OWASP Top 10",
    "Laravel & PHP",
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
};

export default mockProfile;
