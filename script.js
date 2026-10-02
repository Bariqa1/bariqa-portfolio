/* ==========================================================================
   Bariqa Aljarallah — Apple-Grade Portfolio Logic & Bilingual Engine
   Pristine Interactions, Micro-Audio Haptics, Simulation & Language Switching
   ========================================================================== */


// --- 1. Synthesized Apple Tactile Sound (Web Audio API) ---
class AppleHaptics {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  tick(freq = 900, duration = 0.02, volume = 0.03) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx || this.ctx.state === 'suspended') {
        this.ctx?.resume();
      }
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.6, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay gracefully handled
    }
  }

  success() {
    if (!this.enabled) return;
    this.tick(1200, 0.025, 0.04);
    setTimeout(() => this.tick(1500, 0.035, 0.04), 45);
  }
}

const haptics = new AppleHaptics();

// --- 2. Bilingual Dictionary (Natural Saudi Arabic & English) ---
const translations = {
  ar: {
    'lang-btn': 'English',
    'nav-name': 'بارقة الجارالله',
    'nav-role': 'مهندسة ذكاء اصطناعي & Full-Stack',
    'nav-projects': 'المشاريع',
    'nav-experience': 'الخبرات والتعليم',
    'nav-credentials': 'الشهادات',
    'nav-contact': 'تواصل معي',
    'mob-projects': 'المشاريع',
    'mob-experience': 'الخبرات والتعليم',
    'mob-credentials': 'الشهادات والاعتمادات',
    'mob-copy': 'نسخ البريد الإلكتروني',
    'mob-meta-exp': 'مرتبة الشرف',
    'mob-meta-proj': '4 مشاريع',
    'mob-meta-cred': '10 معتمدة',
    'hero-badge': 'حديثة تخرج · خريجة علوم حاسب بمرتبة الشرف · المملكة العربية السعودية',
    'hero-title-1': 'تطوير أنظمة الذكاء الاصطناعي،',
    'hero-title-2': 'وتطبيقات الرؤية الحاسوبية.',
    'hero-title': 'تطوير أنظمة الذكاء الاصطناعي، <br class="desktop-br"><span class="text-gradient">وتطبيقات الرؤية الحاسوبية</span>.',
    'hero-sub': 'مهندسة ذكاء اصطناعي ومطوّرة Full-Stack، متخصصة في بناء أنظمة الوكلاء (Multi-Agent Systems) وتطبيقات الرؤية الحاسوبية. أركز على تحويل النماذج إلى حلول عملية وسريعة تعمل بكفاءة على أرض الواقع.',
    'spec1-title': 'زمن الاستجابة',
    'spec1-sub': 'استنتاج نموذج EfficientNet-B0',
    'spec2-title': 'معالجة الفيديو المباشر',
    'spec2-sub': '3 تدفقات متزامنة عبر YOLOv11',
    'spec3-title': 'دقة الفحص الطبي',
    'spec3-sub': 'فحص وتصنيف الأمراض الجلدية',
    'spec4-title': 'توفير استهلاك الرموز',
    'spec4-sub': 'تخزين مؤقت وتحديد سياق الاستعلام',
    'cta-explore': 'استعراض الخبرات والمشاريع',
    'cta-copy': 'نسخ البريد الإلكتروني',
    'sec-systems': 'المشاريع',
    'sec-systems-sub': 'مشاريع عملية طورتها بالتركيز على دقة النماذج وسرعة التنفيذ وجودة الكود.',
    'filter-all': 'كافة المشاريع',
    'filter-agentic': 'أنظمة الوكلاء',
    'filter-vision': 'الرؤية الحاسوبية',
    'filter-fullstack': 'تطبيقات متكاملة',
    'tag-mhrsd': 'معايير السلامة الصناعية (MHRSD 3337)',
    'tag-langgraph': 'LangGraph & YOLOv11',
    'aurax-title': 'AuraX — نظام مراقبة السلامة الصناعية',
    'aurax-desc': 'نظام لمراقبة السلامة في المنشآت يربط بين نماذج الرؤية الحاسوبية (YOLOv11) لرصد المخاطر مثل غياب خوذات الأمان أو حالات السقوط، مع وكلاء أذكياء مبنيين بـ LangGraph لإرسال التنبيهات وإدارة الصلاحيات لحظياً.',
    'aurax-h1': 'معالجة 3 كاميرات متزامنة بزمن 26.7ms',
    'aurax-h2': 'رصد حوادث السقوط واكتشاف الخوذات',
    'aurax-h3': 'اجتياز اختبارات الفحص الآلية (Pytest)',
    'tag-socratic': 'توجيه تفاعلي بالأسئلة',
    'tag-privacy': 'معالجة محلية لخصوصية البيانات',
    'attocus-title': 'Attocus — مساعد دراسي تفاعلي ذكي',
    'attocus-desc': 'مساعد تعليمي ينظم 4 وكلاء محادثة لتوجيه الطلاب ومساعدتهم على استنتاج الحلول عبر الأسئلة والنقاش، مع متابعة مستوى التركيز محلياً على الجهاز عبر الكاميرا دون حفظ أو إرسال أي صور لضمان الخصوصية.',
    'attocus-h1': 'اجتياز اختبارات جودة الإجابات (DeepEval)',
    'attocus-h2': 'معالجة الفيديو محلياً دون تخزين للصور',
    'attocus-h3': 'وكلاء متخصصون لإدارة الحوار والتوجيه',
    'tag-clinical': 'دقة تشخيص سريرية',
    'tag-9class': 'فحص 9 أمراض جلدية',
    'derma-title': 'DermaSense — نظام فحص وتشخيص الأمراض الجلدية',
    'derma-desc': 'نموذج تعلم عميق لتشخيص 9 أمراض جلدية وتحديد درجات شدة حب الشباب عبر مرحلتين، باستخدام EfficientNet-B0 ودالة الخسارة Focal Loss، مع تحقيق سرعة استنتاج عالية ودقة تصنيف دقيقة.',
    'derma-h1': 'زمن الاستنتاج السريع (Inference Latency)',
    'derma-h2': 'دقة رصد الميلانوما (Melanoma Precision)',
    'derma-h3': 'دقة تحديد شدة حب الشباب (±1 Grade)',
    'tag-recsys': 'توصية هجينة TFRS',
    'tag-flutter': 'Flutter & Gemini',
    'uniclubs-title': 'UniClubs — تطبيق فعاليات الأندية الجامعية',
    'uniclubs-desc': 'تطبيق هاتف مبني بـ Flutter و Dart يساعد الطلاب على استكشاف الأنشطة والفعاليات الجامعية، مدعوم بنظام توصية يقترح الفعاليات بناءً على الاهتمامات، ونموذج للتنبؤ بأعداد الحضور، وتحليل مشاعر آراء الطلاب عبر Gemini.',
    'uniclubs-h1': 'دقة ترتيب الفعاليات المقترحة (NDCG@10)',
    'uniclubs-h2': 'تقليل نسبة الخطأ في توقع أعداد الحضور (MAE 1.8)',
    'uniclubs-h3': 'تصنيف دقيق لمشاعر وتقييمات الطلاب عبر Gemini',
    'link-code': 'الكود',
    'aurax-hud-fps': '<span class="hud-dot"></span> مباشر 37.5 FPS',
    'aurax-hud-cam': 'كاميرا 03 // المنطقة 4',
    'aurax-hud-rbac': 'الصلاحيات: نشطة',
    'aurax-hud-person': 'شخص [98.2%]',
    'aurax-hud-helmet': 'خوذة الأمان: مرصودة',
    'aurax-hud-breach': 'تجاوز منطقة [محظورة]',
    'aurax-hud-level': 'مستوى الصلاحية: 3',
    'derma-hud-melanoma': 'دقة فحص الميلانوما: 95.5%',
    'derma-hud-stage1': 'المرحلة 1: تصنيف 9 أمراض',
    'derma-hud-stage2': 'المرحلة 2: شدة حب الشباب (99.55%)',
    'attocus-dialogue-q': '"كيف أبدأ في حل مسألة البرمجة الديناميكية هذه؟"',
    'attocus-dialogue-role': 'الموجّه الذكي',
    'attocus-dialogue-a': '"فكّر في الحالة الأساسية (Base Case) أولاً: ما هي أصغر مدخلة يمكننا حلها مباشرة دون تكرار؟"',
    'attocus-hud-focus': '● تتبع التركيز: منتبه (100%)',
    'attocus-hud-privacy': 'خصوصية تامة: لا يتم حفظ البيانات',
    'attocus-num2': '0 تسريب',
    'attocus-num3': '4 وكلاء',
    'uniclubs-hud-badge': 'ترشيح ذكي (0.8477 NDCG)',
    'uniclubs-hud-title': 'معسكر الذكاء الاصطناعي السحابي',
    'uniclubs-hud-meta': 'حضور متوقع: 94% (LightGBM MAE 1.8)',
    'uniclubs-num2': '86% خفض',
    'exp-title': 'الخبرات والتعليم',
    'exp1-date': 'أغسطس 2026 – أكتوبر 2026',
    'badge-champion': '🏆 بطل الأسبوع (Champion of the Week)',
    'exp1-org': 'الأكاديمية السعودية الرقمية (SDA) بالتعاون مع WeCloudData',
    'exp1-role': 'معسكر الذكاء الاصطناعي للوكلاء (Agentic AI) — 280 ساعة',
    'exp1-desc': 'تدريب مكثف ركز على بناء أنظمة الوكلاء الذاتية وتطبيقات RAG واختبار جودة النماذج اللغوية باستخدام LangGraph و DeepEval. حصلت فيه على تقدير Champion of the Week عن تصميم معمارية الوكلاء.',
    'exp2-date': 'يونيو 2025 – أغسطس 2025',
    'badge-intern': 'تدريب مهني',
    'exp2-org': 'الأساليب الذكية (Smart Methods)',
    'exp2-role': 'متدربة في هندسة الذكاء الاصطناعي (420 ساعة)',
    'exp2-desc': 'تدريب عملي على تطبيقات الرؤية الحاسوبية وتتبع العناصر باستخدام OpenCV و YOLO، وتطوير روبوت محادثة تفاعلي بالأوامر الصوتية بالاعتماد على مكتبة Vosk ونموذج Cohere.',
    'exp3-date': 'يوليو 2021 – يونيو 2026',
    'badge-gpa': 'معدل ممتاز مع مرتبة الشرف',
    'exp3-org': 'جامعة القصيم',
    'exp3-degree': 'بكالوريوس علوم الحاسب',
    'exp3-desc': 'دراسة متخصصة في علوم الحاسب بتقدير ممتاز، شملت الخوارزميات، والذكاء الاصطناعي، وهندسة البرمجيات، وقواعد البيانات.',
    'cred-title': 'الشهادات والاعتمادات',
    'cred-sub': 'شهادات مهنية ودورات متقدمة في مجالات الذكاء الاصطناعي وتطوير البرمجيات والحوسبة السحابية.',
    'cert-verify': 'توثيق',
    'cert1-badge': '🏆 بطل الأسبوع',
    'cert1-issuer': 'الأكاديمية السعودية الرقمية (SDA) بالتعاون مع WeCloudData',
    'cert1-name': 'معسكر الذكاء الاصطناعي للوكلاء (Agentic AI) — 280 ساعة',
    'cert1-date': 'أكتوبر 2026',
    'cert2-issuer': 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
    'cert2-name': 'ممارس معتمد في تعلم الآلة (ML Practitioner)',
    'cert2-date': 'ديسمبر 2023',
    'cert3-issuer': 'جامعة القصيم',
    'cert3-name': 'الذكاء الاصطناعي التوليدي (Generative AI)',
    'cert3-date': 'فبراير 2026',
    'cert4-issuer': 'أكاديمية طويق',
    'cert4-name': 'تطوير البرمجيات باستخدام Django & Full-Stack',
    'cert4-date': 'مارس 2026',
    'cert5-issuer': 'قوقل (Google)',
    'cert5-name': 'شهادة تحليل البيانات الاحترافية (Google Data Analytics)',
    'cert5-date': 'مارس 2024',
    'cert6-issuer': 'أمازون ويب سيرفيسز (AWS)',
    'cert6-name': 'خريجة أكاديمية AWS — أساسيات تعلم الآلة (ML Foundations)',
    'cert6-date': 'أغسطس 2026',
    'cert7-issuer': 'جامعة القصيم',
    'cert7-name': 'برنامج الابتكار الصيفي — مسار وكلاء الذكاء الاصطناعي (AI Agents Track)',
    'cert7-date': 'يوليو 2026',
    'cert8-issuer': 'جامعة الملك عبدالله للعلوم والتقنية (KAUST) / GDG',
    'cert8-name': 'معسكر الرؤية الحاسوبية والتعلم العميق (Computer Vision)',
    'cert8-date': 'نوفمبر 2025',
    'cert9-issuer': 'أكاديمية طويق',
    'cert9-name': 'شهادة اختبار اختراق تطبيقات الويب (eWPT)',
    'cert9-date': 'مايو 2024',
    'cert10-issuer': 'أمازون ويب سيرفيسز (AWS) / الأكاديمية الرقمية',
    'cert10-name': 'ممارس سحابي معتمد (AWS Cloud Practitioner)',
    'cert10-date': 'فبراير 2024',
    'contact-status': 'متاحة للفرص الوظيفية والمشاريع',
    'contact-h2': 'يسعدني التواصل والتعاون',
    'contact-desc': 'إذا كان لديك فرصة وظيفية، أو مشروع في مجالات الذكاء الاصطناعي وتطبيقات الرؤية الحاسوبية، أو حاب تناقش فكرة تقنية، يسعدني تواصلك معي عبر البريد أو LinkedIn.',
    'cta-copy-email': 'نسخ البريد الإلكتروني',
    'cta-open-mail': 'إرسال رسالة مباشرة',
    'location-text': '📍 المملكة العربية السعودية',
    'footer-cr': '© 2026 بارقة الجارالله',
    'footer-note': 'حديثة تخرج · خريجة علوم حاسب بمرتبة الشرف · المملكة العربية السعودية'
  },
  en: {
    'lang-btn': 'العربية',
    'nav-name': 'Bariqa Aljarallah',
    'nav-role': 'AI & Full-Stack Engineer',
    'nav-projects': 'Projects',
    'nav-experience': 'Experience',
    'nav-credentials': 'Certifications',
    'nav-contact': 'Contact',
    'mob-projects': 'Projects',
    'mob-experience': 'Experience & Education',
    'mob-credentials': 'Certifications',
    'mob-copy': 'Copy Email',
    'mob-meta-exp': 'Honors',
    'mob-meta-proj': '4 Projects',
    'mob-meta-cred': '10 Certs',
    'hero-badge': 'Fresh Graduate · Honors Computer Science Graduate · Saudi Arabia',
    'hero-title-1': 'Building practical AI systems,',
    'hero-title-2': 'and computer vision applications.',
    'hero-title': 'Building practical AI systems, <br class="desktop-br"><span class="text-gradient">and computer vision applications</span>.',
    'hero-sub': 'AI & Full-Stack Engineer specializing in multi-agent systems and computer vision. I focus on turning machine learning models into fast, reliable applications that work effectively in real-world environments.',
    'spec1-title': 'Inference Latency',
    'spec1-sub': 'EfficientNet-B0 inference',
    'spec2-title': 'Live Video Processing',
    'spec2-sub': '3 concurrent streams via YOLOv11',
    'spec3-title': 'Medical Screening',
    'spec3-sub': 'Dermatology classification & grading',
    'spec4-title': 'Token Cost Reduction',
    'spec4-sub': 'Prompt caching & context scoping',
    'cta-explore': 'Explore Experience & Projects',
    'cta-copy': 'Copy Email',
    'sec-systems': 'Projects',
    'sec-systems-sub': 'Practical systems I built with a focus on model accuracy, fast execution, and clean code.',
    'filter-all': 'All Projects',
    'filter-agentic': 'Agent Systems',
    'filter-vision': 'Computer Vision',
    'filter-fullstack': 'Full Stack',
    'tag-mhrsd': 'Industrial Safety (MHRSD 3337)',
    'tag-langgraph': 'LangGraph & YOLOv11',
    'aurax-title': 'AuraX — Industrial Safety Monitoring System',
    'aurax-desc': 'An industrial safety monitoring platform that connects YOLOv11 vision models for hazard detection (such as missing hard hats or worker falls) with LangGraph agents to automate alerts and zone access in real time.',
    'aurax-h1': '3 concurrent camera streams at 26.7ms',
    'aurax-h2': 'Accurate detection of falls & safety gear',
    'aurax-h3': 'Automated test suite passing (Pytest)',
    'tag-socratic': 'Interactive Guided Learning',
    'tag-privacy': 'Private On-Device Processing',
    'attocus-title': 'Attocus — Interactive AI Study Assistant',
    'attocus-desc': 'An educational assistant orchestrating 4 conversational agents that guide students through problem-solving step by step. Tracks focus locally in-browser without storing or transmitting photos to protect privacy.',
    'attocus-h1': 'DeepEval evaluation benchmark passed',
    'attocus-h2': 'Local in-memory video processing',
    'attocus-h3': 'Specialized agents for guidance & dialogue',
    'tag-clinical': 'Clinical Accuracy',
    'tag-9class': '9 Skin Conditions',
    'derma-title': 'DermaSense — Skin Condition Screening System',
    'derma-desc': 'A two-stage deep learning pipeline using EfficientNet-B0 and Focal Loss to screen 9 dermatological conditions and accurately grade acne severity with fast inference times.',
    'derma-h1': 'Fast inference latency (TTA)',
    'derma-h2': 'Melanoma detection precision',
    'derma-h3': 'Acne severity grading accuracy (±1 Grade)',
    'tag-recsys': 'Hybrid RecSys (TFRS)',
    'tag-flutter': 'Flutter & Gemini',
    'uniclubs-title': 'UniClubs — Student Event Discovery App',
    'uniclubs-desc': 'A Flutter and Dart mobile app helping students discover campus events. Features an interest-based recommendation system, an attendance forecasting model, and review sentiment analysis powered by Gemini.',
    'uniclubs-h1': 'Ranking accuracy score (NDCG@10)',
    'uniclubs-h2': 'Reduced attendance forecasting error (MAE 1.8)',
    'uniclubs-h3': 'Sentiment analysis score via Gemini',
    'link-code': 'Code',
    'aurax-hud-fps': '<span class="hud-dot"></span> LIVE 37.5 FPS',
    'aurax-hud-cam': 'CAM-03 // ZONE 4',
    'aurax-hud-rbac': 'RBAC ACTIVE',
    'aurax-hud-person': 'PERSON [98.2%]',
    'aurax-hud-helmet': 'HARD HAT: DETECTED',
    'aurax-hud-breach': 'ZONE BREACH [RESTRICTED]',
    'aurax-hud-level': 'RBAC: LEVEL 3',
    'derma-hud-melanoma': 'MELANOMA PRECISION: 95.5%',
    'derma-hud-stage1': 'STAGE 1: 9-CLASS CNN',
    'derma-hud-stage2': 'STAGE 2: ACNE GAGS ±1 (99.55%)',
    'attocus-dialogue-q': '"How do I begin solving this dynamic programming problem?"',
    'attocus-dialogue-role': 'AI TUTOR',
    'attocus-dialogue-a': '"Consider the base case first: what is the simplest subproblem you can solve directly without recursion?"',
    'attocus-hud-focus': '● Gaze: In-Focus (100%)',
    'attocus-hud-privacy': 'Zero Data Retention',
    'attocus-num2': '0ms Leak',
    'attocus-num3': '4 Agents',
    'uniclubs-hud-badge': 'AI RECOMMENDED (0.8477 NDCG)',
    'uniclubs-hud-title': 'Cloud AI Bootcamp',
    'uniclubs-hud-meta': 'Predicted Attendance: 94% (LightGBM MAE 1.8)',
    'uniclubs-num2': '86% REDUCTION',
    'exp-title': 'Experience & Education',
    'exp1-date': 'August 2026 – October 2026',
    'badge-champion': '🏆 Champion of the Week',
    'exp1-org': 'Saudi Digital Academy (SDA) / WeCloudData',
    'exp1-role': 'Agentic AI Bootcamp — 280 Hours',
    'exp1-desc': 'Intensive training focused on building multi-agent systems, RAG pipelines, and model evaluation using LangGraph and DeepEval. Awarded Champion of the Week for system architecture design.',
    'exp2-date': 'June 2025 – August 2025',
    'badge-intern': 'Internship',
    'exp2-org': 'Smart Methods',
    'exp2-role': 'AI Engineering Intern (420 Hours)',
    'exp2-desc': 'Hands-on internship developing computer vision workflows with OpenCV and YOLO, and building a voice-enabled conversational assistant using Vosk and Cohere.',
    'exp3-date': 'July 2021 – June 2026',
    'badge-gpa': 'Excellent with Honors',
    'exp3-org': 'Qassim University',
    'exp3-degree': "Bachelor's Degree in Computer Science",
    'exp3-desc': 'Graduated with honors and an Excellent rating, focusing on algorithms, artificial intelligence, software engineering, and database systems.',
    'cred-title': 'Certifications',
    'cred-sub': 'Professional certifications and advanced courses in AI, software development, and cloud computing.',
    'cert-verify': 'Verify',
    'cert1-badge': '🏆 Champion of the Week',
    'cert1-issuer': 'Saudi Digital Academy (SDA) / WeCloudData',
    'cert1-name': 'Agentic AI Bootcamp — 280 Hours',
    'cert1-date': 'October 2026',
    'cert2-issuer': 'Saudi Data & AI Authority (SDAIA)',
    'cert2-name': 'Certified Machine Learning Practitioner',
    'cert2-date': 'December 2023',
    'cert3-issuer': 'Qassim University',
    'cert3-name': 'Generative AI',
    'cert3-date': 'February 2026',
    'cert4-issuer': 'Tuwaiq Academy',
    'cert4-name': 'Full-Stack Web Development using Django',
    'cert4-date': 'March 2026',
    'cert5-issuer': 'Google',
    'cert5-name': 'Google Data Analytics Professional Certificate',
    'cert5-date': 'March 2024',
    'cert6-issuer': 'Amazon Web Services (AWS)',
    'cert6-name': 'AWS Academy Graduate — Machine Learning Foundations',
    'cert6-date': 'August 2026',
    'cert7-issuer': 'Qassim University',
    'cert7-name': 'Innovation Summer Program — AI Agents Track',
    'cert7-date': 'July 2026',
    'cert8-issuer': 'King Abdullah University of Science & Technology (KAUST) / GDG',
    'cert8-name': 'Computer Vision Bootcamp by KAUST',
    'cert8-date': 'November 2025',
    'cert9-issuer': 'Tuwaiq Academy',
    'cert9-name': 'eWPT — Certified Web Application Penetration Tester',
    'cert9-date': 'May 2024',
    'cert10-issuer': 'Amazon Web Services (AWS) / SDA',
    'cert10-name': 'AWS Certified Cloud Practitioner',
    'cert10-date': 'February 2024',
    'contact-status': 'Available for roles and new projects',
    'contact-h2': "Let's connect",
    'contact-desc': 'Whether you have an open role, an AI project in mind, or just want to discuss tech, feel free to reach out via email or LinkedIn.',
    'cta-copy-email': 'Copy Email',
    'cta-open-mail': 'Send an Email',
    'location-text': '📍 Saudi Arabia',
    'footer-cr': '© 2026 Bariqa Aljarallah',
    'footer-note': 'Fresh Graduate · Honors Computer Science Graduate · Saudi Arabia'
  }
};

let currentLang = 'en';

function setLanguage(lang, playHaptic = false) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.title = lang === 'ar' 
    ? 'بارقة الجارالله' 
    : 'Bariqa Aljarallah';

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update segmented control buttons state
  document.querySelectorAll('.lang-segment, .lang-segment-mob').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem('bariqa-lang-choice', lang);
  } catch (e) {}

  // Update simulator placeholder text
  const terminalCode = document.getElementById('terminal-code');
  if (terminalCode) {
    if (lang === 'ar') {
      terminalCode.textContent = `[SYSTEM READY] Listening on telemetry event stream...\nاضغط على أي سيناريو أعلاه لتنفيذ دورة التنسيق بين الوكلاء في الوقت الفعلي.`;
    } else {
      terminalCode.textContent = `[SYSTEM READY] Listening on telemetry event stream...\nClick any simulated event above to execute real-time multi-agent arbitration.`;
    }
  }

  if (playHaptic) {
    haptics.tick(1000, 0.02, 0.03);
  }
}

// --- 3. Apple Stacked Toast Notification System ---
const toastContainer = document.getElementById('toast-container');

function showToast(message, icon = '✓') {
  haptics.success();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,0.2);font-size:11px;">${icon}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 3000);
}

// --- 4. Copy Email Handlers ---
function setupCopyEmail() {
  const emailButtons = [
    document.getElementById('copy-email-nav'),
    document.getElementById('copy-email-hero'),
    document.getElementById('copy-email-footer'),
    document.getElementById('mobile-copy-email')
  ];

  emailButtons.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.dataset.email || 'bariqa00@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(currentLang === 'ar' ? `تم نسخ البريد (${email}) إلى الحافظة!` : `Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

// --- 5. Project Filtering & Fluid Apple Transitions ---
function setupProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterTabs.length || !projectCards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;
      haptics.tick(1000, 0.02, 0.035);

      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.dataset.filter;

      // Gracefully fade and scale down current cards
      projectCards.forEach(card => {
        card.style.transition = 'opacity 180ms cubic-bezier(0.16, 1, 0.3, 1), transform 180ms cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.96) translateY(8px)';
      });

      // Flow in filtered cards with staggered spring cascade
      setTimeout(() => {
        let visibleCount = 0;
        projectCards.forEach(card => {
          const categories = (card.dataset.category || '').split(' ');
          const matches = (filter === 'all' || categories.includes(filter));

          if (matches) {
            card.style.display = 'flex';
            const staggerDelay = visibleCount * 45;
            visibleCount++;
            setTimeout(() => {
              card.style.transition = 'opacity 340ms cubic-bezier(0.16, 1, 0.3, 1), transform 340ms cubic-bezier(0.16, 1, 0.3, 1), border-color 200ms ease, box-shadow 200ms ease';
              card.style.opacity = '1';
              card.style.transform = 'scale(1) translateY(0)';
            }, staggerDelay);
          } else {
            card.style.display = 'none';
          }
        });
      }, 190);
    });
  });
}

// --- 6. Project Simulator Modals ---
function setupProjectModals() {
  const modal = document.getElementById('demo-modal');
  if (!modal) return;
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body-content');
  const closeBtn = document.getElementById('modal-close-btn');

  const modalData = {
    aurax: {
      ar: {
        tag: 'تيليميتري لحظي — AuraX',
        title: 'خط معالجة الرؤية الحاسوبية على الحافة',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span style="font-size:12.5px;font-weight:700;">اختبار أداء المعالجة اللحظية</span>
                <span style="font-size:12px;color:#34c759;font-weight:700;font-family:'JetBrains Mono',monospace;">● 37.5 FPS ثابت</span>
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:center;">
                <div style="background:#ffffff;padding:12px 8px;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
                  <div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;">8.4ms</div>
                  <div style="font-size:11px;color:#86868b;margin-top:2px;">YOLOv11 Pre-process</div>
                </div>
                <div style="background:#ffffff;padding:12px 8px;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
                  <div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;">14.1ms</div>
                  <div style="font-size:11px;color:#86868b;margin-top:2px;">TensorRT Engine</div>
                </div>
                <div style="background:#ffffff;padding:12px 8px;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
                  <div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;">4.2ms</div>
                  <div style="font-size:11px;color:#86868b;margin-top:2px;">Visual RBAC NMS</div>
                </div>
              </div>
            </div>
            <p style="font-size:14px;color:#6e6e73;line-height:1.65;">
              يعمل AuraX على معالجة 3 كاميرات متزامنة على الحافة دون أي زمن تأخير سحابي. يتم تصنيف أدوار العمال بصرياً (أحمر: منطقة محظورة، أصفر: مقاول، أبيض: مشرف موقع).
            </p>
            <a href="https://github.com/Bariqa1/AuraX" target="_blank" class="btn-apple-primary" style="align-self:flex-start;">
              <span>فتح مستودع AuraX على GitHub</span>
            </a>
          </div>
        `
      },
      en: {
        tag: 'AuraX Live Telemetry',
        title: 'Edge Computer Vision Pipeline Benchmark',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                <span style="font-size:12.5px;font-weight:700;">STREAM INFERENCE BENCHMARK</span>
                <span style="font-size:12px;color:#34c759;font-weight:700;font-family:'JetBrains Mono',monospace;">● 37.5 FPS STEADY</span>
              </div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:center;">
                <div style="background:#ffffff;padding:12px 8px;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
                  <div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;">8.4ms</div>
                  <div style="font-size:11px;color:#86868b;margin-top:2px;">YOLOv11 Pre-process</div>
                </div>
                <div style="background:#ffffff;padding:12px 8px;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
                  <div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;">14.1ms</div>
                  <div style="font-size:11px;color:#86868b;margin-top:2px;">TensorRT Engine</div>
                </div>
                <div style="background:#ffffff;padding:12px 8px;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
                  <div style="font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;">4.2ms</div>
                  <div style="font-size:11px;color:#86868b;margin-top:2px;">Visual RBAC NMS</div>
                </div>
              </div>
            </div>
            <p style="font-size:14px;color:#6e6e73;line-height:1.65;">
              AuraX processes 3 concurrent edge streams with zero cloud dependency. Mapped to Visual RBAC for instantaneous restricted zone prevention.
            </p>
            <a href="https://github.com/Bariqa1/AuraX" target="_blank" class="btn-apple-primary" style="align-self:flex-start;">
              <span>Explore AuraX on GitHub</span>
            </a>
          </div>
        `
      }
    },
    attocus: {
      ar: {
        tag: 'معمارية Attocus',
        title: 'التوجيه التفاعلي وتتبع التركيز المحلي',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="font-size:13px;font-weight:700;margin-bottom:8px;">4 وكلاء ذكاء اصطناعي متكاملين</div>
              <ul style="font-size:13.5px;color:#6e6e73;display:flex;flex-direction:column;gap:8px;padding-right:16px;">
                <li><strong>وكيل التوجيه التفاعلي:</strong> يوجّه الطالب نحو استنتاج الحلول بالأسئلة بدلاً من تقديم إجابات جاهزة.</li>
                <li><strong>وكيل التركيز وتتبع الوجه:</strong> تقنية MediaPipe FaceMesh تعمل محلياً بالكامل عبر الذاكرة.</li>
                <li><strong>محرك الحماية:</strong> فحص المدخلات بـ Pydantic و Guardrails لمنع كسر السياق.</li>
                <li><strong>وكيل القياس والتقييم:</strong> اختبارات مستمرة باستخدام 78 سيناريو تقييم DeepEval.</li>
              </ul>
            </div>
            <a href="https://github.com/Bariqa1/Attocus" target="_blank" class="btn-apple-primary" style="align-self:flex-start;">
              <span>فتح مستودع Attocus على GitHub</span>
            </a>
          </div>
        `
      },
      en: {
        tag: 'Attocus Architecture',
        title: 'Interactive AI Tutoring & Edge FaceMesh',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="font-size:13px;font-weight:700;margin-bottom:8px;">4 Orchestrated Sub-Agents</div>
              <ul style="font-size:13.5px;color:#6e6e73;display:flex;flex-direction:column;gap:8px;padding-left:16px;">
                <li><strong>Interactive Tutor Agent:</strong> Guides students through inquiry and guided problem-solving.</li>
                <li><strong>Focus & Gaze Agent:</strong> MediaPipe FaceMesh runs strictly in memory over WebSockets.</li>
                <li><strong>Security Engine:</strong> Pydantic validation + Guardrails against prompt injection.</li>
                <li><strong>Evaluation Agent:</strong> Benchmarked across 78 autonomous DeepEval test cases.</li>
              </ul>
            </div>
            <a href="https://github.com/Bariqa1/Attocus" target="_blank" class="btn-apple-primary" style="align-self:flex-start;">
              <span>View Attocus on GitHub</span>
            </a>
          </div>
        `
      }
    },
    dermasense: {
      ar: {
        tag: 'المؤشرات السريرية — DermaSense',
        title: 'نتائج التدريب والتقييم السريري الدقيق',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div>
                  <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
                    <span>دقة رصد الميلانوما (Melanoma Precision)</span>
                    <span style="font-family:'JetBrains Mono',monospace;color:#d70015;">95.5%</span>
                  </div>
                  <div style="height:6px;background:#e8e8ed;border-radius:980px;overflow:hidden;">
                    <div style="width:95.5%;height:100%;background:#d70015;border-radius:980px;"></div>
                  </div>
                </div>
                <div>
                  <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
                    <span>الدقة المتجاورة لشدة حب الشباب (±1 Grade)</span>
                    <span style="font-family:'JetBrains Mono',monospace;color:#248a3d;">99.55%</span>
                  </div>
                  <div style="height:6px;background:#e8e8ed;border-radius:980px;overflow:hidden;">
                    <div style="width:99.55%;height:100%;background:#248a3d;border-radius:980px;"></div>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://github.com/Bariqa1/DermaSense" target="_blank" class="btn-apple-primary" style="align-self:flex-start;">
              <span>فتح مستودع DermaSense على GitHub</span>
            </a>
          </div>
        `
      },
      en: {
        tag: 'DermaSense Clinical Metrics',
        title: 'Hierarchical Deep Learning Precision & Severity',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="display:flex;flex-direction:column;gap:12px;">
                <div>
                  <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
                    <span>Melanoma Precision</span>
                    <span style="font-family:'JetBrains Mono',monospace;color:#d70015;">95.5%</span>
                  </div>
                  <div style="height:6px;background:#e8e8ed;border-radius:980px;overflow:hidden;">
                    <div style="width:95.5%;height:100%;background:#d70015;border-radius:980px;"></div>
                  </div>
                </div>
                <div>
                  <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:4px;">
                    <span>Acne Severity Adjacent Accuracy (±1 Grade)</span>
                    <span style="font-family:'JetBrains Mono',monospace;color:#248a3d;">99.55%</span>
                  </div>
                  <div style="height:6px;background:#e8e8ed;border-radius:980px;overflow:hidden;">
                    <div style="width:99.55%;height:100%;background:#248a3d;border-radius:980px;"></div>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://github.com/Bariqa1/DermaSense" target="_blank" class="btn-apple-primary" style="align-self:flex-start;">
              <span>View DermaSense Source</span>
            </a>
          </div>
        `
      }
    }
  };

  document.querySelectorAll('.demo-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const demoKey = btn.dataset.demo;
      const dataGroup = modalData[demoKey];
      if (!dataGroup) return;

      const data = dataGroup[currentLang] || dataGroup.ar;
      modalTag.textContent = data.tag;
      modalTitle.textContent = data.title;
      modalBody.innerHTML = data.html;

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      haptics.tick(900, 0.03, 0.04);
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    haptics.tick(650, 0.02, 0.02);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

// --- 8. Mobile Navigation Handler ---
function setupMobileNav() {
  const trigger = document.getElementById('mobile-menu-trigger');
  const menu = document.getElementById('mobile-nav-menu');
  const links = document.querySelectorAll('.mobile-nav-link');
  const copyBtn = document.getElementById('mobile-copy-email');

  if (!trigger || !menu) return;

  function toggleMenu() {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      haptics.tick(700, 0.02, 0.02);
    } else {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
      haptics.tick(1050, 0.02, 0.03);
    }
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    });
  }

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !trigger.contains(e.target) && menu.classList.contains('open')) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    }
  });
}

// --- 9. Language Switcher (Segmented Controls) ---
function setupLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-segment, .lang-segment-mob');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.lang;
      if (target && target !== currentLang) {
        setLanguage(target, true);
      }
    });
  });

  try {
    const saved = localStorage.getItem('bariqa-lang-choice');
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguage(saved, false);
    } else {
      setLanguage('en', false);
    }
  } catch (e) {
    setLanguage('en', false);
  }
}

// --- 10. Generative Neural Mesh / Particle Field Canvas ---
function setupNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let animationFrameId;

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 26 : 52;
  const maxDistance = 125;
  const mouse = { x: -9999, y: -9999, radius: 150 };

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  class Particle {
    constructor() {
      this.reset();
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.42;
      this.vy = (Math.random() - 0.5) * 0.42;
      this.radius = Math.random() * 1.4 + 1.2;
      this.alpha = Math.random() * 0.3 + 0.18;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist < mouse.radius && dist > 0) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 1.1;
        this.y -= (dy / dist) * force * 1.1;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 113, 227, ${this.alpha})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Neural mesh connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 113, 227, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Interactive connection to mouse
    if (mouse.x > 0 && mouse.y > 0) {
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const alpha = (1 - dist / mouse.radius) * 0.25;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.strokeStyle = `rgba(0, 113, 227, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('pointerleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });

  init();
  animate();
}

// --- 11. Apple 3D Card Tilt Physics & Specular Glare ---
function setupCardTilt() {
  const cards = document.querySelectorAll('[data-tilt]');
  if (!cards.length) return;

  cards.forEach(card => {
    let bounds;

    function onPointerEnter() {
      bounds = card.getBoundingClientRect();
    }

    function onPointerMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const normX = Math.max(0, Math.min(1, mouseX / bounds.width));
      const normY = Math.max(0, Math.min(1, mouseY / bounds.height));

      const rotateX = (0.5 - normY) * 10;
      const rotateY = (normX - 0.5) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`;
      card.style.setProperty('--glare-x', `${(normX * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-y', `${(normY * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-opacity', '0.65');
    }

    function onPointerLeave() {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.setProperty('--glare-opacity', '0');
      bounds = null;
    }

    card.addEventListener('pointerenter', onPointerEnter);
    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerleave', onPointerLeave);
  });
}

// --- 12. Apple Magnetic Buttons Physics ---
function setupMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-magnetic');
  buttons.forEach(btn => {
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('pointerleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

// --- 13. Ambient Spotlight Cursor Follower ---
function setupSpotlight() {
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });
}

// --- 14. Sound Toggle Controller ---
function setupSoundToggle() {
  const btn = document.getElementById('sound-toggle');
  const iconOn = document.getElementById('sound-icon-on');
  const iconOff = document.getElementById('sound-icon-off');
  if (!btn || !iconOn || !iconOff) return;

  btn.addEventListener('click', () => {
    const isEnabled = haptics.toggle();
    if (isEnabled) {
      iconOn.style.display = 'block';
      iconOff.style.display = 'none';
      showToast(currentLang === 'ar' ? 'تم تفعيل المؤثرات اللمسية الصوتية' : 'Haptic audio enabled');
      haptics.tick(1200, 0.03, 0.04);
    } else {
      iconOn.style.display = 'none';
      iconOff.style.display = 'block';
      showToast(currentLang === 'ar' ? 'تم كتم المؤثرات الصوتية' : 'Haptic audio muted');
    }
  });
}

// --- 15. Animate Metric Bars On Scroll ---
function setupMetricBarAnimation() {
  const bars = document.querySelectorAll('.metric-bar-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.width || '100%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => observer.observe(bar));
}

// --- Initialize All Components ---
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  setupCopyEmail();
  setupProjectFilters();
  setupProjectModals();
  setupMobileNav();
  setupNeuralCanvas();
  setupCardTilt();
  setupMagneticButtons();
  setupSpotlight();
  setupSoundToggle();
  setupMetricBarAnimation();
});
