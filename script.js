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

// --- 2. Bilingual Dictionary (Saudi Arabic & English) ---
const translations = {
  ar: {
    'lang-btn': 'English',
    'nav-name': 'بارقة الجارالله',
    'nav-role': 'مهندسة ذكاء اصطناعي',
    'nav-projects': 'الأنظمة',
    'nav-lab': 'المختبر التفاعلي',
    'nav-orchestration': 'معمارية الوكلاء',
    'nav-experience': 'المسيرة',
    'nav-credentials': 'الاعتمادات',
    'nav-contact': 'تواصل معي',
    'mob-projects': 'الأنظمة والمشاريع',
    'mob-lab': 'المختبر التفاعلي (محاكاة)',
    'mob-orchestration': 'معمارية الوكلاء (Live Sim)',
    'mob-experience': 'المسيرة والتعليم',
    'mob-credentials': 'الاعتمادات المهنية',
    'mob-copy': 'نسخ البريد الإلكتروني',
    'hero-badge': 'خريجة علوم حاسب بمرتبة الشرف · المملكة العربية السعودية',
    'hero-title-1': 'هندسة أنظمة الذكاء الاصطناعي الذاتية،',
    'hero-title-2': 'والرؤية الحاسوبية اللحظية.',
    'hero-title': 'هندسة أنظمة الذكاء الاصطناعي الذاتية، <br class="desktop-br"><span class="text-gradient">والرؤية الحاسوبية فائقة السرعة</span>.',
    'hero-sub': 'أصمم وأبتكر معمارية الوكلاء متعددي المهام (Multi-Agent Orchestration)، وأبني خطوط المعالجة البصرية على الحافة بزمن استجابة فائق يبدأ من 12.5ms. برمجيات ذاتية، آمنة ومصممة لبيئات العمل الفعلية.',
    'spec1-title': 'زمن الاستجابة على الحافة',
    'spec1-sub': 'EfficientNet-B0 مهيأ سريرياً',
    'spec2-title': 'معالجة الفيديو اللحظية',
    'spec2-sub': '3 نماذج متزامنة عبر YOLOv11',
    'spec3-title': 'الدقة السريرية المتجاورة',
    'spec3-sub': 'تصنيف هرمي دقيق للأمراض',
    'spec4-title': 'خفض استهلاك الرموز',
    'spec4-sub': 'تخزين مؤقت ونطاق جغرافي ذكي',
    'cta-explore': 'استعراض الأنظمة التقنية',
    'cta-copy': 'نسخ البريد الإلكتروني',
    'sec-systems': 'الأنظمة والمشاريع الرئيسية.',
    'sec-systems-sub': 'أربعة حلول برمجية نوعية، صُممت وبُنيت وفق أعلى معايير الجاهزية والاعتمادية.',
    'filter-all': 'كافة الأنظمة',
    'filter-agentic': 'الوكلاء الذاتية',
    'filter-vision': 'الرؤية الحاسوبية',
    'filter-fullstack': 'تطبيقات متكاملة',
    'tag-mhrsd': 'وزارة الموارد البشرية 3337 & ISO 7243',
    'tag-langgraph': 'LangGraph & YOLOv11',
    'btn-sim': 'المحاكاة اللحظية',
    'aurax-title': 'AuraX — منصة السلامة الصناعية وإدارة المخاطر بالوكلاء الذاتية',
    'aurax-desc': 'منصة صناعية متكاملة توظف 5 وكلاء ذكاء اصطناعي (الرؤية، الامتثال، البيئة، التنبؤ، المساعد) للرصد الاستباقي لمخاطر المصانع، وإدارة الدخول البصري الذكي (Visual RBAC) ومنع الحوادث لحظياً.',
    'aurax-h1': 'معالجة 3 كاميرات متزامنة بزمن 26.7ms',
    'aurax-h2': 'دقة رصد حوادث السقوط واكتشاف الخوذات',
    'aurax-h3': 'اجتياز كامل لاختبارات Pytest الآلية',
    'tag-socratic': 'المنهج السقراطي',
    'tag-privacy': 'خصوصية كاملة على الجهاز',
    'btn-arch': 'المعمارية',
    'attocus-title': 'Attocus — مرافق دراسي ذاتي بوكلاء متعددي المهام',
    'attocus-desc': 'بيئة تعليمية ذكية تنظم 4 وكلاء معرفيين يعتمدون الأسلوب السقراطي لتحفيز التفكير. مزود بخط رؤية حاسوبية محلي (YOLO11n + MediaPipe FaceMesh) لتتبع التركيز عبر WebSockets دون مغادرة أي بيانات لجهاز الطالب.',
    'attocus-h1': 'اختبار تقييم DeepEval مجتاز بنجاح',
    'attocus-h2': 'معالجة الفيديو في الذاكرة بدون حفظ',
    'attocus-h3': 'توجيه ودعم إدراكي ذاتي ذكي',
    'tag-clinical': 'معايير دقة سريرية',
    'tag-9class': 'تشخيص 9 أمراض جلدية',
    'btn-benchmark': 'المؤشرات السريرية',
    'derma-title': 'DermaSense — نظام فحص جلدي هرمي بالتعلم العميق',
    'derma-desc': 'خط تشخيص طبي على مرحلتين يعتمد نموذج EfficientNet-B0 ودالة الخسارة الطبية MedicalFocalLoss لتشخيص تفريقي لـ 9 أمراض جلدية شائعة وخطيرة مع قياس دقيق لدرجات شدة حب الشباب (GAGS).',
    'derma-h1': 'زمن الاستنتاج عبر TTA',
    'derma-h2': 'دقة رصد الميلانوما (Melanoma Precision)',
    'derma-h3': 'دقة تقييم الشدة المتجاورة (±1 Grade)',
    'tag-recsys': 'توصية هجينة TFRS',
    'tag-flutter': 'Flutter & Gemini',
    'uniclubs-title': 'UniClubs — تطبيق استكشاف الفعاليات والتنبؤ بالحضور',
    'uniclubs-desc': 'تطبيق موبايل إنتاجي مبني بـ Flutter و Dart، مدعوم بمحرك ترشيح هجين (TensorFlow Recommenders) ونموذج LightGBM للتنبؤ بحجم الحضور، وتكامل ذكي مع Google Gemini لتصنيف المشاعر.',
    'uniclubs-h1': 'مقياس ترتيب التوصيات NDCG@10',
    'uniclubs-h2': 'تقليل هامش خطأ التنبؤ بالحضور (MAE 1.8)',
    'uniclubs-h3': 'تصنيف مشاعر دقيق عبر نموذج Gemini',
    'orch-title': 'معمارية وهندسة الوكلاء الذاتية.',
    'orch-sub': 'تجربة محاكاة تفاعلية فورية لمحرك تنسيق الوكلاء (AuraX StateGraph) المبني على LangGraph.',
    'sim-active': 'نشط وجاهز',
    'sim-prompt': 'اختر سيناريو بيئي لاختبار استجابة الوكلاء التلقائية:',
    'ev-heat': '🔥 إجهاد حراري شديد (معيار ISO 7243)',
    'ev-ppe': '⚠️ غياب خوذة السلامة (التحكم البصري RBAC)',
    'ev-fall': '🚨 رصد حالة سقوط حرجة (YOLOv11)',
    'ag-vision': 'وكيل الرؤية',
    'ag-compliance': 'وكيل الامتثال',
    'metric-mhrsd': 'قرار 3337',
    'ag-env': 'وكيل البيئة',
    'ag-mitigation': 'وكيل الاستجابة',
    'metric-dispatch': 'تدخل فوري',
    'exp-title': 'المسيرة المهنية والتعليم.',
    'badge-champion': '🏆 بطل الأسبوع (Champion of the Week)',
    'exp1-org': 'الأكاديمية السعودية الرقمية (SDA) بالتعاون مع WeCloudData',
    'exp1-role': 'معسكر الذكاء الاصطناعي الذاتي (Agentic AI Bootcamp) — 280 ساعة مكثفة',
    'exp1-desc': 'تطوير أنظمة الوكلاء المتعددين التوليدية، وبناء خطط المهام الإدراكية، وأطر تقييم RAG الإنتاجية باستخدام DeepEval و LangGraph. التتويج بلقب بطل الأسبوع لجودة المعمارية البرمجية المنفذة.',
    'badge-intern': 'تدريب مهني',
    'exp2-org': 'الأساليب الذكية (Smart Methods)',
    'exp2-role': 'متدربة في هندسة الذكاء الاصطناعي والأنظمة المتكاملة (420 ساعة)',
    'exp2-desc': 'هندسة خطوط معالجة الرؤية الحاسوبية على الحافة باستخدام YOLO و OpenCV، وتطوير شات بوت ذكاء اصطناعي تفاعلي بالصوت يعتمد تقنيات Vosk ونموذج Cohere اللغوي.',
    'badge-gpa': 'معدل 4.62 / 5.00 · ممتاز',
    'exp3-org': 'جامعة القصيم',
    'exp3-degree': 'بكالوريوس علوم الحاسب (مرتبة الشرف الثانية)',
    'exp3-desc': 'تأسيس أكاديمي عميق في الخوارزميات، والأنظمة الموزعة، والتعلم العميق، وهندسة قواعد البيانات والشبكات.',
    'cred-title': 'الاعتمادات والشهادات المهنية.',
    'cred-sub': 'شهادات معتمدة صادرة من أعلى الهيئات والمؤسسات التقنية الوطنية والعالمية.',
    'cert1-issuer': 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
    'cert1-name': 'ممارس معتمد في تعلم الآلة (ML Practitioner)',
    'cert2-issuer': 'أمازون ويب سيرفيسز (AWS) / الأكاديمية الرقمية',
    'cert2-name': 'AWS Certified Cloud Practitioner',
    'cert3-issuer': 'جامعة الملك عبدالله للعلوم والتقنية (KAUST) / GDG',
    'cert3-name': 'معسكر الرؤية الحاسوبية المتقدمة',
    'cert4-issuer': 'أكاديمية طويق',
    'cert4-name': 'تطوير البرمجيات المتكاملة (Django & Full Stack)',
    'contact-status': 'متاحة للانضمام للفرص النوعية وهندسة الذكاء الاصطناعي',
    'contact-h2': 'لنبتكر معاً معايير استثنائية.',
    'contact-desc': 'تسخير معمارية الوكلاء الذاتية ونماذج الرؤية الحاسوبية الفائقة لصناعة برمجيات ذكية تترك أثراً واقعياً. مرحباً بالتواصل لمناقشة الفرص الاستراتيجية والمشاريع النوعية.',
    'cta-copy-email': 'نسخ البريد الإلكتروني',
    'cta-open-mail': 'إرسال رسالة مباشرة',
    'location-text': '📍 المملكة العربية السعودية',
    'footer-cr': '© 2026 بارقة الجارالله · جميع الحقوق محفوظة',
    'footer-note': 'المملكة العربية السعودية'
  },
  en: {
    'lang-btn': 'العربية',
    'nav-name': 'Bariqa Aljarallah',
    'nav-role': 'AI / ML Engineer',
    'nav-projects': 'Key Systems',
    'nav-lab': 'Interactive Lab',
    'nav-orchestration': 'Orchestration',
    'nav-experience': 'Trajectory',
    'nav-credentials': 'Credentials',
    'nav-contact': 'Get in Touch',
    'mob-projects': 'Featured Systems',
    'mob-lab': 'Interactive Lab (Sim)',
    'mob-orchestration': 'Agentic Orchestration (Live Sim)',
    'mob-experience': 'Experience & Education',
    'mob-credentials': 'Verified Credentials',
    'mob-copy': 'Copy Email Address',
    'hero-badge': 'Honors Computer Science Graduate · Saudi Arabia',
    'hero-title-1': 'Engineering autonomous AI architectures,',
    'hero-title-2': 'and real-time computer vision.',
    'hero-title': 'Engineering autonomous AI agents, <br class="desktop-br"><span class="text-gradient">and low-latency edge computer vision</span>.',
    'hero-sub': 'I architect end-to-end multi-agent orchestration platforms, high-speed edge vision inference pipelines, and production-grade software with latencies starting at 12.5ms. Built for real-world enterprise deployment.',
    'spec1-title': 'Edge Inference Latency',
    'spec1-sub': 'Fine-tuned EfficientNet-B0',
    'spec2-title': 'Real-Time Edge Stream',
    'spec2-sub': '3 Concurrent Models (YOLOv11)',
    'spec3-title': 'Clinical Adjacent Accuracy',
    'spec3-sub': 'Hierarchical Medical Diagnosis',
    'spec4-title': 'Token Cost Reduction',
    'spec4-sub': 'Smart Geofencing & Caching',
    'cta-explore': 'Explore Technical Systems',
    'cta-copy': 'Copy Email Address',
    'sec-systems': 'Key Technical Systems.',
    'sec-systems-sub': 'Four flagship engineering solutions designed and built to enterprise production standards.',
    'filter-all': 'All Systems',
    'filter-agentic': 'Agentic AI',
    'filter-vision': 'Computer Vision',
    'filter-fullstack': 'Full-Stack',
    'tag-mhrsd': 'MHRSD 3337 & ISO 7243',
    'tag-langgraph': 'LangGraph & YOLOv11',
    'btn-sim': 'Simulate Runtime',
    'aurax-title': 'AuraX — Autonomous Industrial Safety & Hazard Intelligence',
    'aurax-desc': 'Enterprise multi-agent safety platform orchestrating 5 specialized agents (Vision, Compliance, Environment, Prediction, Assistant) for real-time hazard mitigation, Physical RBAC, and automated incident prevention.',
    'aurax-h1': '3 concurrent YOLO models at 26.7ms latency',
    'aurax-h2': '100% recall in fall and hard-hat detection',
    'aurax-h3': '100% pass rate across 83 automated Pytest cases',
    'tag-socratic': 'Socratic Pedagogy',
    'tag-privacy': 'Zero Data Leakage (Edge)',
    'btn-arch': 'Architecture',
    'attocus-title': 'Attocus — Autonomous Multi-Agent Study Co-Pilot',
    'attocus-desc': 'Intelligent study ecosystem orchestrating 4 specialized cognitive agents utilizing Socratic pedagogy. Features private edge vision with YOLO11n and MediaPipe FaceMesh via in-memory WebSockets with zero data retention.',
    'attocus-h1': '78 / 78 DeepEval test scenarios passed',
    'attocus-h2': 'In-memory WebSocket stream processing',
    'attocus-h3': 'Autonomous cognitive & focus intervention',
    'tag-clinical': 'Clinical Grade',
    'tag-9class': '9-Class Dermatology',
    'btn-benchmark': 'Clinical Metrics',
    'derma-title': 'DermaSense — Hierarchical Clinical Screening Pipeline',
    'derma-desc': 'Two-stage clinical deep learning pipeline using fine-tuned EfficientNet-B0 and MedicalFocalLoss. Delivers differential diagnosis across 9 skin conditions and granular acne severity grading (GAGS).',
    'derma-h1': 'Edge inference latency via TTA',
    'derma-h2': 'Melanoma detection precision metric',
    'derma-h3': 'Adjacent severity grading accuracy (±1 Grade)',
    'tag-recsys': 'Hybrid RecSys (TFRS)',
    'tag-flutter': 'Flutter & Gemini',
    'uniclubs-title': 'UniClubs — AI Event Discovery & Attendance Forecasting',
    'uniclubs-desc': 'Production Flutter and Dart mobile application backed by TensorFlow Recommenders (TFRS) for hybrid ranking and a LightGBM model for accurate event attendance forecasting with Gemini sentiment classification.',
    'uniclubs-h1': 'TFRS ranking NDCG@10 evaluation metric',
    'uniclubs-h2': 'Baseline attendance error reduction (MAE 1.8)',
    'uniclubs-h3': 'Zero-shot sentiment classification (1.00 F1)',
    'orch-title': 'Autonomous Multi-Agent Architecture.',
    'orch-sub': 'Live interactive simulation of the AuraX StateGraph engine powered by LangGraph and Python 3.12.',
    'sim-active': 'Active & Ready',
    'sim-prompt': 'Select an environmental trigger to inspect autonomous multi-agent arbitration:',
    'ev-heat': '🔥 Extreme Heat Stress (ISO 7243 Standard)',
    'ev-ppe': '⚠️ Missing Hard Hat (Visual RBAC Gate)',
    'ev-fall': '🚨 Critical Fall Detected (YOLOv11 Optical Flow)',
    'ag-vision': 'Vision Agent',
    'ag-compliance': 'Compliance Agent',
    'metric-mhrsd': 'MHRSD 3337',
    'ag-env': 'Environment Agent',
    'ag-mitigation': 'Mitigation Agent',
    'metric-dispatch': 'Instant Action',
    'exp-title': 'Trajectory & Education.',
    'badge-champion': '🏆 Champion of the Week',
    'exp1-org': 'Saudi Digital Academy (SDA) / WeCloudData',
    'exp1-role': 'Agentic AI Bootcamp (280 Intensive Hours)',
    'exp1-desc': 'Engineered scalable multi-agent systems, autonomous cognitive task planners, and production RAG evaluation frameworks with DeepEval and LangGraph. Awarded Champion of the Week for superior system architecture.',
    'badge-intern': 'Engineering Internship',
    'exp2-org': 'Smart Methods',
    'exp2-role': 'AI & Full-Stack Engineering Intern (420 Hours)',
    'exp2-desc': 'Engineered real-time computer vision pipelines utilizing YOLO and OpenCV for edge object detection, and built an interactive voice AI chatbot using Vosk speech synthesis and Cohere LLM.',
    'badge-gpa': 'GPA 4.62 / 5.00 · Honors',
    'exp3-org': 'Qassim University',
    'exp3-degree': "Bachelor's Degree in Computer Science (Second Class Honors)",
    'exp3-desc': 'Foundational rigor across Algorithms, Distributed Systems, Deep Learning, and Database Architecture. Graduated with an Excellent rating with Second Class Honors.',
    'cred-title': 'Verified Credentials.',
    'cred-sub': 'Official certifications issued by premier national and global technology authorities.',
    'cert1-issuer': 'Saudi Data & AI Authority (SDAIA)',
    'cert1-name': 'Machine Learning Practitioner',
    'cert2-issuer': 'Amazon Web Services (AWS) / SDA',
    'cert2-name': 'AWS Certified Cloud Practitioner',
    'cert3-issuer': 'King Abdullah University of Science & Technology (KAUST) / GDG',
    'cert3-name': 'Computer Vision Bootcamp',
    'cert4-issuer': 'Tuwaiq Academy',
    'cert4-name': 'Full Stack Web Development (Django)',
    'contact-status': 'Available for High-Impact AI Roles & Engineering Initiatives',
    'contact-h2': "Let's architect something exceptional together.",
    'contact-desc': 'Architecting autonomous multi-agent intelligence and low-latency computer vision into robust production systems. Open to high-impact engineering initiatives and strategic collaborations.',
    'cta-copy-email': 'Copy Email Address',
    'cta-open-mail': 'Open Email Client',
    'location-text': '📍 Saudi Arabia',
    'footer-cr': '© 2026 Bariqa Aljarallah · All rights reserved',
    'footer-note': 'Kingdom of Saudi Arabia'
  }
};

let currentLang = 'ar';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.title = lang === 'ar' 
    ? 'بارقة الجارالله — مهندسة ذكاء اصطناعي' 
    : 'Bariqa Aljarallah — AI/ML Engineer';

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
    localStorage.setItem('bariqa-lang', lang);
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

  haptics.tick(1000, 0.02, 0.03);
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

// --- 6. Multi-Agent Orchestration Simulator ---
function setupAgentSimulator() {
  const triggers = document.querySelectorAll('.sim-trigger');
  const terminalCode = document.getElementById('terminal-code');
  const terminalLatency = document.getElementById('terminal-latency');

  const nodes = {
    vision: document.getElementById('agent-vision'),
    compliance: document.getElementById('agent-compliance'),
    environment: document.getElementById('agent-environment'),
    orchestrator: document.getElementById('agent-orchestrator')
  };

  const scenarios = {
    'heat-stress': {
      latency: '22.4ms',
      steps: [
        { node: 'environment', status: 'WBGT: 32.8°C' },
        { node: 'compliance', status: 'قرار 3337 مفعل' },
        { node: 'vision', status: 'رصد 6 عمال' },
        { node: 'orchestrator', status: 'توجيه آلي للمظلات' }
      ],
      logs: `[TELEMETRY] Sensor Array Zone 4 :: WBGT Index 32.8°C (Threshold > 30°C)
[ENVIRONMENT AGENT] Flagged critical heat stress risk complying with ISO 7243.
[COMPLIANCE AGENT] Triggering Saudi MHRSD Ministerial Decision 3337 mandatory midday rest rules.
[VISION AGENT] YOLOv11 stream at 37.5 FPS confirms 6 personnel in direct sunlight (Zone 4).
[MITIGATION AGENT] Automated safety dispatch initiated: Automated hydration alarm sounding, dynamic shaded route sent to worker mobile devices. Latency: 22.4ms.`
    },
    'hazard-ppe': {
      latency: '18.6ms',
      steps: [
        { node: 'vision', status: 'خوذة مفقودة (98.2%)' },
        { node: 'compliance', status: 'مخالفة نطاق B' },
        { node: 'environment', status: 'البيئة آمنة' },
        { node: 'orchestrator', status: 'إغلاق البوابة الذكية' }
      ],
      logs: `[VISION AGENT] Edge stream Camera #03: Worker detected at turnstile entrance.
[VISION AGENT] Hard Hat classification: MISSING (Confidence 98.2%). Visual RBAC check initiated.
[COMPLIANCE AGENT] Access violation: Hard hat mandatory for high-bay manufacturing area.
[MITIGATION AGENT] Turnstile interlock engaged. Physical RBAC rejection notice delivered via localized audio beacon. Latency: 18.6ms.`
    },
    'fall-event': {
      latency: '26.7ms',
      steps: [
        { node: 'vision', status: 'حالة سقوط (100%)' },
        { node: 'environment', status: 'سقالة مرتفعة' },
        { node: 'compliance', status: 'طوارئ قصوى' },
        { node: 'orchestrator', status: 'استدعاء المسعف فوراً' }
      ],
      logs: `[VISION AGENT] High-speed optical flow anomaly detected on Scaffold Camera #07 (37.5 FPS).
[VISION AGENT] Pose estimation & bounding box trajectory confirm rapid ground impact (Fall Event, 100% recall).
[COMPLIANCE AGENT] Immediate Severity Level 1 Incident declared. Scaffold power cutoff engaged.
[MITIGATION AGENT] Site emergency siren triggered. On-duty medic dispatched with exact GPS coordinates (Scaffold B, Section 2). Latency: 26.7ms.`
    }
  };

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      haptics.tick(950, 0.03, 0.04);
      triggers.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      const eventKey = btn.dataset.event;
      const data = scenarios[eventKey];
      if (!data) return;

      Object.values(nodes).forEach(n => {
        if (!n) return;
        n.classList.remove('firing');
        const statusSpan = n.querySelector('.node-status');
        if (statusSpan) statusSpan.textContent = 'Standby';
      });

      terminalCode.textContent = currentLang === 'ar' 
        ? `[تنفيذ معمارية الوكلاء] الحدث: ${eventKey.toUpperCase()}...\nجاري التنسيق بين الوكلاء بدون وسيط سحابي...`
        : `[EXECUTING STATE GRAPH] Event: ${eventKey.toUpperCase()}...\nResolving agent dependencies asynchronously...`;
      terminalLatency.textContent = data.latency;

      data.steps.forEach((step, idx) => {
        setTimeout(() => {
          haptics.tick(1100 + idx * 100, 0.02, 0.03);
          const targetNode = nodes[step.node];
          if (targetNode) {
            targetNode.classList.add('firing');
            const statusSpan = targetNode.querySelector('.node-status');
            if (statusSpan) statusSpan.textContent = step.status;
          }
        }, idx * 160);
      });

      setTimeout(() => {
        terminalCode.textContent = data.logs;
        haptics.success();
      }, data.steps.length * 160 + 100);
    });
  });
}

// --- 7. Project Simulator Modals ---
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
        title: 'المنهج السقراطي وتتبع الوجه المحلي',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="font-size:13px;font-weight:700;margin-bottom:8px;">4 وكلاء ذكاء اصطناعي متكاملين</div>
              <ul style="font-size:13.5px;color:#6e6e73;display:flex;flex-direction:column;gap:8px;padding-right:16px;">
                <li><strong>وكيل الحوار السقراطي:</strong> يقود الطالب نحو التفكير الذاتي بدلاً من تقديم الإجابة الجاهزة.</li>
                <li><strong>وكيل التركيز وتتبع الوجه:</strong> تقنية MediaPipe FaceMesh تعمل محلياً بالكامل عبر الذاكرة.</li>
                <li><strong>محرك الحماية:</strong> فحص المدخلات بـ Pydantic و Guardrails لمنع كسر السياق.</li>
                <li><strong>وكيل القياس والتقييم:</strong> اختبارات مستمرة باستخدام 78 سيناريو تقييم DeepEval.</li>
              </ul>
            </div>
          </div>
        `
      },
      en: {
        tag: 'Attocus Architecture',
        title: 'Multi-Agent Socratic Pedagogy & Edge FaceMesh',
        html: `
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#f5f5f7;border-radius:14px;padding:18px;">
              <div style="font-size:13px;font-weight:700;margin-bottom:8px;">4 Orchestrated Sub-Agents</div>
              <ul style="font-size:13.5px;color:#6e6e73;display:flex;flex-direction:column;gap:8px;padding-left:16px;">
                <li><strong>Socratic Tutor Agent:</strong> Guides students through inquiry rather than direct answers.</li>
                <li><strong>Focus & Gaze Agent:</strong> MediaPipe FaceMesh runs strictly in memory over WebSockets.</li>
                <li><strong>Security Engine:</strong> Pydantic validation + Guardrails against prompt injection.</li>
                <li><strong>Evaluation Agent:</strong> Benchmarked across 78 autonomous DeepEval test cases.</li>
              </ul>
            </div>
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
        setLanguage(target);
      }
    });
  });

  try {
    const saved = localStorage.getItem('bariqa-lang');
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguage(saved);
    }
  } catch (e) {}
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
  setupAgentSimulator();
  setupProjectModals();
  setupMobileNav();
  setupNeuralCanvas();
  setupCardTilt();
  setupMagneticButtons();
  setupSpotlight();
  setupSoundToggle();
  setupMetricBarAnimation();
});
