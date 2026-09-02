export type Language = 'de' | 'ar' | 'en';

export interface Translation {
  nav: {
    brandName: string;
    brandSubtitle: string;
    about: string;
    courses: string;
    testimonials: string;
    faq: string;
    contact: string;
    whatsappCta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      expLabel: string;
      expValue: string;
      certLabel: string;
      certValue: string;
      scholarshipLabel: string;
      scholarshipValue: string;
      studentsLabel: string;
      studentsValue: string;
    };
  };
  qualifications: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      exp: { title: string; text: string };
      levels: { title: string; text: string };
      dll: { title: string; text: string };
      daad: { title: string; text: string };
      ips: { title: string; text: string };
      vodafone: { title: string; text: string };
    };
  };
  curriculum: {
    badge: string;
    title: string;
    subtitle: string;
    booksTitle: string;
    books: {
      aspekte: { name: string; tag: string; desc: string };
      redewendungen: { name: string; tag: string; desc: string };
      sicher: { name: string; tag: string; desc: string };
    };
    goalsTitle: string;
    goals: {
      scholarships: { title: string; desc: string };
      university: { title: string; desc: string };
      ausbildung: { title: string; desc: string };
      jobs: { title: string; desc: string };
    };
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    zoomHint: string;
    items: Array<{
      id: string;
      studentName: string;
      achievement: string;
      tag: string;
      rating: number;
      image: string;
      caption: string;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    whatsappCard: {
      title: string;
      desc: string;
      btnText: string;
      phone: string;
    };
    gmailCard: {
      title: string;
      desc: string;
      btnText: string;
      email: string;
    };
    direct: {
      whatsappTitle: string;
      whatsappValue: string;
      emailTitle: string;
      emailValue: string;
      locationTitle: string;
      locationValue: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
    credit: string;
  };
}

export const translations: Record<Language, Translation> = {
  de: {
    nav: {
      brandName: "Herr Adel Ghandy",
      brandSubtitle: "Deutschlehrer & Dozent",
      about: "Über Dozent",
      courses: "Lehrplan & Ziele",
      testimonials: "Bewertungen",
      faq: "FAQ",
      contact: "Kontakt",
      whatsappCta: "WhatsApp Kontakt",
    },
    hero: {
      badge: "Zoom Online-Kurs mit 10% Rabatt 🔥",
      headline: "Deutsch B2 Perfektionieren für Beruf & Studium",
      subheadline: "Meistern Sie die deutsche Sprache auf B2-Niveau mit Dozent Adel Ghandy. Interaktiver Zoom-Unterricht, gezielte Prüfungsvorbereitung und echte Karrierechancen in Deutschland.",
      primaryCta: "Jetzt per WhatsApp buchen",
      secondaryCta: "Per E-Mail / Gmail anfragen",
      metrics: {
        expLabel: "Jahre Erfahrung",
        expValue: "5+",
        certLabel: "Zertifiziert",
        certValue: "C1 / C2 Student",
        scholarshipLabel: "Stipendien",
        scholarshipValue: "DAAD & IPS",
        studentsLabel: "Absolventen",
        studentsValue: "500+",
      },
    },
    qualifications: {
      badge: "Qualifikationen & Erfahrung",
      title: "Warum Deutsch lernen mit Herr Adel Ghandy?",
      subtitle: "Erstklassige akademische Ausbildung, Stipendien des Deutschen Bundestages und jahrelange Unterrichtspraxis.",
      items: {
        exp: {
          title: "5+ Jahre Unterrichtserfahrung",
          text: "Langjährige Erfahrung in der erfolgreichen Vermittlung der deutschen Sprache von Grundlagen bis zum Niveau B2/C1.",
        },
        levels: {
          title: "C1 Zertifiziert & C2 Student",
          text: "Höchste Sprachkompetenz nach dem Gemeinsamen Europäischen Referenzrahmen (GER) mit laufendem C2-Masterstudium.",
        },
        dll: {
          title: "DLL Zertifiziert (Deutsches Sprachdiplom)",
          text: "Methodisch-didaktisch zertifiziert nach den Qualitätsstandards des Goethe-Instituts für moderner Deutschunterricht.",
        },
        daad: {
          title: "DAAD 2022 Stipendiat",
          text: "Ausgezeichnet mit dem begehrten Stipendium des Deutschen Akademischen Austauschdienstes (DAAD).",
        },
        ips: {
          title: "IPS 2026 Stipendiat (Deutscher Bundestag)",
          text: "Stipendiat des Internationalen Parlaments-Stipendiums (IPS) des Deutschen Bundestages (البرلمان الألماني).",
        },
        vodafone: {
          title: "Praktische Konzernerfahrung",
          text: "Praktische Arbeitserfahrung in führenden deutschsprachigen Call-Centern und Konzernen wie Vodafone Deutschland.",
        },
      },
    },
    curriculum: {
      badge: "Lehrplan & Zielwege",
      title: "Umfassender B2-Lehrplan & Ihre Zielwege",
      subtitle: "Mit anerkannten Standardlehrwerken bereiten wir Sie präzise auf Studium, Ausbildung oder Beruf vor.",
      booksTitle: "Offizielle Lehrbücher & Unterrichtsmaterialien",
      books: {
        aspekte: {
          name: "Aspekte neu B2",
          tag: "Hauptlehrwerk",
          desc: "Strukturierte Modulstruktur zur Entwicklung von fortgeschrittenem Leseverstehen, Hörverstehen und argumentativem Schreiben.",
        },
        redewendungen: {
          name: "Redewendungen B2 / C1 / C2",
          tag: "Sprechtraining",
          desc: "Gezieltes Training von deutschen Redewendungen, Idiomen und authentischen Ausdrücken für natürliches Sprechen.",
        },
        sicher: {
          name: "Sicher! B2 / C1",
          tag: "Grammatik & Prüfung",
          desc: "Vertiefung komplexer Grammatikstrukturen und optimale Vorbereitung auf Goethe-Zertifikat B2, telc B2 & TestDaF.",
        },
      },
      goalsTitle: "Ihre Zielwege nach dem B2-Kurs",
      goals: {
        scholarships: {
          title: "Stipendien (DAAD & IPS)",
          desc: "Individuelle Beratung und Motivationsschreiben-Vorbelegung für DAAD, IPS Bundestag und Forschung stipendien.",
        },
        university: {
          title: "Universitätsstudium in Deutschland",
          desc: "Vorbereitung auf akademische Sprache, Hochschulprüfungen und Zulassung an deutschen Universitäten.",
        },
        ausbildung: {
          title: "Berufsausbildung (Ausbildung)",
          desc: "Gezieltes Wortschatz- und Bewerbungstraining für Pflege, IT, Handwerk und kaufmännische Berufe.",
        },
        jobs: {
          title: "Karriere & Call Center (DE & EG)",
          desc: "Vorbereitung auf hochbezahlte Jobs in Kundenservice, Call-Centern und internationalen Firmen in Deutschland und Ägypten.",
        },
      },
    },
    testimonials: {
      badge: "Echte WhatsApp-Erfolge",
      title: "Studenten-Ergebnisse & Feedback Screenshots",
      subtitle: "Echte Screenshots von Nachrichten unserer Schüler über bestandene Goethe-Prüfungen, Ausbildung-Zusagen und Job-Angebote.",
      zoomHint: "Klicken Sie auf den Screenshot zum Vergrößern",
      items: [
        {
          id: "goethe",
          studentName: "Sara Ahmed",
          achievement: "Goethe-Zertifikat B2 Bestanden",
          tag: "Goethe B2 Note 1.3",
          rating: 5,
          image: "/src/assets/review_goethe.jpg",
          caption: "Echter Screenshot einer Schüler-Nachricht nach dem Bestehen der Goethe B2 Prüfung.",
        },
        {
          id: "ausbildung",
          studentName: "Lukas Weber / Mahmoud",
          achievement: "Ausbildung-Zulassung in München",
          tag: "IT Ausbildung Zusage",
          rating: 5,
          image: "/src/assets/review_ausbildung.jpg",
          caption: "Freudige Nachricht über die Zusage für eine IT-Berufsausbildung in München.",
        },
        {
          id: "job",
          studentName: "Anna Mueller / Omar",
          achievement: "Jobangebot Vodafone Deutschland",
          tag: "Karriere in Deutschland",
          rating: 5,
          image: "/src/assets/review_job.jpg",
          caption: "Screenshot einer Schülerin nach Erhalt ihres Arbeitsvertrages bei Vodafone Deutschland.",
        },
      ],
    },
    faq: {
      badge: "Häufige Fragen",
      title: "Häufig gestellte Fragen (FAQ)",
      subtitle: "Hier finden Sie Antworten zu Unterrichtszeiten, Kursmaterialien und der Online-Plattform.",
      items: [
        {
          question: "Wie läuft der Online-Unterricht ab?",
          answer: "Der Unterricht findet live über Zoom statt. Alle Einheiten werden interaktiv gestaltet, mit Gruppenübungen, Präsentationen und Aufzeichnungen zum Nacharbeiten.",
        },
        {
          question: "Welche Voraussetzungen brauche ich für den B2-Kurs?",
          answer: "Sie sollten ein B1-Niveau abgeschlossen haben. Ein Einstufungstest steht vor Kursbeginn kostenlos zur Verfügung.",
        },
        {
          question: "Sind die Buchmaterialien (Aspekte neu B2) im Preis enthalten?",
          answer: "Ja, alle digitalen PDF-Materialien, Arbeitsblätter und Hördateien werden Ihnen in der eigenen Lernplattform kostenlos bereitgestellt.",
        },
        {
          question: "Gibt es flexible Zahlungsoptionen oder Rabatte?",
          answer: "Ja! Aktuell bieten wir 10% Rabatt auf den B2-Intensivkurs. Ratenzahlung nach Absprache ist ebenfalls möglich.",
        },
        {
          question: "Bereitet der Kurs auf Goethe- oder telc-Prüfungen vor?",
          answer: "Ja, der Kurs enthält gezielte Prüfungssimulationen für Goethe B2, telc B2 und ÖSD B2 inklusive Prüfungstipps für Hören, Lesen, Schreiben und Sprechen.",
        },
      ],
    },
    contact: {
      badge: "Direkter Kontakt",
      title: "Kontaktieren Sie Herr Adel Ghandy",
      subtitle: "Keine Formulare nötig! Schreiben Sie direkt per WhatsApp oder senden Sie eine E-Mail über Gmail.",
      whatsappCard: {
        title: "Über WhatsApp buchen & anfragen",
        desc: "Direkter Chat mit Herr Adel Ghandy. Erhalten Sie sofortige Antworten zu Kursstart und freien Plätzen.",
        btnText: "WhatsApp Chat Öffnen",
        phone: "+49 152 31428204",
      },
      gmailCard: {
        title: "Per E-Mail / Gmail schreiben",
        desc: "Öffnet direkt Ihren Gmail-Client zur schnellen Kontaktaufnahme per E-Mail.",
        btnText: "E-Mail in Gmail verfassen",
        email: "Adel@example.com",
      },
      direct: {
        whatsappTitle: "Direkter WhatsApp-Kontakt",
        whatsappValue: "+49 152 31428204",
        emailTitle: "Offizielle E-Mail",
        emailValue: "Adel@example.com",
        locationTitle: "Unterrichtsformat",
        locationValue: "Interaktiver Live Zoom-Unterricht (Deutschland & Ägypten)",
      },
    },
    footer: {
      tagline: "Qualitätsunterricht für die deutsche Sprache – Niveau B2 mastery & Prüfungsvorbereitung.",
      copyright: "© 2026 Herr Adel Ghandy. Alle Rechte vorbehalten.",
      credit: "Created by Esmael Salah",
    },
  },
  ar: {
    nav: {
      brandName: "أستاذ عادل غاندي",
      brandSubtitle: "محاضر اللغة الألمانية",
      about: "عن المحاضر",
      courses: "المنهج والأهداف",
      testimonials: "آراء الطلاب",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      whatsappCta: "تواصل عبر واتساب",
    },
    hero: {
      badge: "دورة زوم أونلاين بخصم 10% لفترة محدودة 🔥",
      headline: "إتقان اللغة الألمانية لمستوى B2 للعمل والدراسة",
      subheadline: "احترف قواعد ومحادثة اللغة الألمانية B2 مع المحاضر المعتمد أستاذ عادل غاندي. حصص زوم تفاعلية، تحضير معتمد للامتحانات وتأهيل كامل للسفر والعمل والمنح في ألمانيا.",
      primaryCta: "احجز الآن عبر واتساب",
      secondaryCta: "تواصل عبر البريد / Gmail",
      metrics: {
        expLabel: "سنوات خبرة تعليمية",
        expValue: "+5",
        certLabel: "الشهادات",
        certValue: "C1 & C2 Student",
        scholarshipLabel: "المنح الحاصل عليها",
        scholarshipValue: "DAAD & IPS البرلمان",
        studentsLabel: "طلاب ناجحون",
        studentsValue: "+500",
      },
    },
    qualifications: {
      badge: "المؤهلات والخبرات",
      title: "لماذا تتعلم الألمانية مع أستاذ عادل غاندي؟",
      subtitle: "مزيج فريد من التميز الأكاديمي، الحصول على منح البرلمان الألماني، والخبرة العملية في كبرى الشركات.",
      items: {
        exp: {
          title: "+5 سنوات خبرة في تدريس الألمانية",
          text: "خبرة واسعة في توجيه مئات الطلاب من المستويات الأولى وحتى الاحتراف في B2 و C1.",
        },
        levels: {
          title: "حاصل على C1 ويدرس C2",
          text: "حاصل على أعلى الشهادات المعتمدة في اللغة الألمانية مع استكمال دراسات المستوى C2 المتقدم.",
        },
        dll: {
          title: "شهادة DLL (Deutsches Sprachdiplom)",
          text: "معتمد رسمياً في أساليب وطرق تدريس اللغة الألمانية الحديثة وفق أحدث معايير معهد غوته.",
        },
        daad: {
          title: "حاصل على منحة DAAD لعام 2022",
          text: "حاصل على المنحة التنافسية المرموقة من الهيئة الألمانية للتبادل العلمي (DAAD).",
        },
        ips: {
          title: "حاصل على منحة البرلمان الألماني IPS 2026",
          text: "تم اختياره لمنحة البرلمان الألماني الدولي (IPS - Deutscher Bundestag) لعام 2026.",
        },
        vodafone: {
          title: "خبرة عملية في كبرى الشركات العالمية",
          text: "خبرة عمل فعلية في بيئات عمل ألمانية مثل شركة Vodafone Deutschland وكبرى كول سنتر الألمانية.",
        },
      },
    },
    curriculum: {
      badge: "المنهج والأهداف",
      title: "منهج B2 الشامل والمسارات المستهدفة",
      subtitle: "نستخدم أفضل الكتب الرسمية المعتمدة لتحقيق هدفك في الدراسة أو العمل أو الأوسبيلدونج في ألمانيا.",
      booksTitle: "الكتب والمناهج الدراسية المعتمدة",
      books: {
        aspekte: {
          name: "Aspekte neu B2",
          tag: "الكتاب الرئيسي",
          desc: "منهج متكامل لتطوير مهارات الاستماع والمحادثة المتقدمة والقراءة وتحليل النصوص المعقدة.",
        },
        redewendungen: {
          name: "Redewendungen B2 / C1 / C2",
          tag: "تطوير المحادثة",
          desc: "التدريب المكثف على التعبيرات اللغوية الألمانية والمصطلحات الشائعة والتحدث بسلاسة التحدث الأصلي.",
        },
        sicher: {
          name: "Sicher! B2 / C1",
          tag: "القواعد والامتحانات",
          desc: "التركيز على القواعد المعقدة والتدريب العملي على امتحانات Goethe B2 و telc B2 و TestDaF.",
        },
      },
      goalsTitle: "المسارات والأهداف المتاحة لك بعد الكورس",
      goals: {
        scholarships: {
          title: "المنح الدراسية (DAAD & IPS)",
          desc: "إرشاد وتوجيه مخصص لإعداد خطابات الدافع والتقديم لمنح DAAD والبرلمان الألماني والمؤسسات البحثية.",
        },
        university: {
          title: "الدراسة الجامعية في ألمانيا (Studium)",
          desc: "التأهيل اللغوي الأكاديمي واجتياز اختبارات القبول الجامعي والدراسة في الجامعات الألمانية.",
        },
        ausbildung: {
          title: "التدريب المهني (Ausbildung)",
          desc: "إعداد السيرة الذاتية واجتياز المقابلات الشخصية لمهن التمريض، البرمجة، الهندسة والخدمات.",
        },
        jobs: {
          title: "فرص العمل والكول سنتر (مصر وألمانيا)",
          desc: "تأهيل كامل للعمل في شركات الكول سنتر الألمانية ذات الراتب المرتفع والشركات الدولية.",
        },
      },
    },
    testimonials: {
      badge: "نتائج حقيقية عبر الواتساب",
      title: "آراء الطلاب وسكرين شوتس النجاح",
      subtitle: "صور وسكرين شوتس حقيقية لمحادثات الطلاب بعد اجتياز امتحان Goethe B2 والحصول على قبول الأوسبيلدونج ووظائف ألمانيا.",
      zoomHint: "اضغط على الصورة للتكبير واستعراض النتيجة",
      items: [
        {
          id: "goethe",
          studentName: "سارة أحمد",
          achievement: "اجتياز امتحان Goethe-Zertifikat B2",
          tag: "درجات ممتازة غوته",
          rating: 5,
          image: "/src/assets/review_goethe.jpg",
          caption: "سكرين شوت محادثة الواتساب لنتيجة امتحان غوته B2 والاحتفال بالنجاح.",
        },
        {
          id: "ausbildung",
          studentName: "محمود حسن",
          achievement: "قبول أوسبيلدونج IT في ميونخ",
          tag: "عقد أوسبيلدونج رسمياً",
          rating: 5,
          image: "/src/assets/review_ausbildung.jpg",
          caption: "رسالة قبول الأوسبيلدونج في ميونخ بعد التدريب على المقابلات في الكورس.",
        },
        {
          id: "job",
          studentName: "عمر السيد",
          achievement: "عرض عمل في Vodafone Deutschland",
          tag: "وظيفة براتب متميز",
          rating: 5,
          image: "/src/assets/review_job.jpg",
          caption: "محادثة استلام عقد العمل بشركة فودافون ألمانيا بعد كورس المحادثات.",
        },
      ],
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "الأسئلة الشائعة وإجاباتها",
      subtitle: "إجابات شاملة عن مواعيد الكورس، المنهج، ونظام التدريس أونلاين.",
      items: [
        {
          question: "كيف يتم تقديم الحصص الدراسية أونلاين؟",
          answer: "يتم تقديم جميع الحصص مباشرة عبر تطبيق Zoom، مع تسجيل الحصص وإتاحتها للطلاب للمراجعة في أي وقت.",
        },
        {
          question: "ما هي المتطلبات الأساسية للانضمام لدورة B2؟",
          answer: "يُفضل أن يكون الطالب قد أنهى مستوى B1. يتوفر اختبار تحديد مستوى مجاني قبل بدء الدورة.",
        },
        {
          question: "هل الكتب والمواد الدراسية مشمولة في الدورة؟",
          answer: "نعم، يتم توفير جميع الكتب بصيغة PDF الرقمية وملفات الصوت والتدريبات مجاناً لجميع المشتركين.",
        },
        {
          question: "هل توجد طرق دفع مرنة أو خصومات؟",
          answer: "نعم! يوجد خصم حالي بنسبة 10% على دورة B2 المكثفة عبر زوم، مع إمكانية التقسيط حسب الاتفاق.",
        },
        {
          question: "هل يؤهل الكورس لامتحانات Goethe أو telc الرسمية؟",
          answer: "نعم، يتضمن الكورس نماذج امتحانات فعلية وتدريب مكثف على أقسام الاستماع، القراءة، الكتابة والمحادثة.",
        },
      ],
    },
    contact: {
      badge: "تواصل مباشر وبسيط",
      title: "تواصل فوراً مع أستاذ عادل غاندي",
      subtitle: "بدون نماذج معقدة! اضغط للتواصل المباشر عبر الواتساب أو فتح Gmail مباشرة.",
      whatsappCard: {
        title: "التواصل والحجز عبر الواتساب",
        desc: "محادثة مباشرة مع أستاذ عادل غاندي للاستفسار فوراً عن مواعيد الكورس والأماكن المتاحة.",
        btnText: "فتح محادثة الواتساب الآن",
        phone: "+49 152 31428204",
      },
      gmailCard: {
        title: "التواصل عبر البريد الإلكتروني (Gmail)",
        desc: "يفتح تطبيق Gmail مباشرة لإرسال رسالتك واستفسارك دون الحاجة لملء أي نماذج.",
        btnText: "كتابة رسالة عبر Gmail",
        email: "Adel@example.com",
      },
      direct: {
        whatsappTitle: "واتساب مباشر",
        whatsappValue: "+49 152 31428204",
        emailTitle: "البريد الإلكتروني الرسمي",
        emailValue: "Adel@example.com",
        locationTitle: "نظام التدريس",
        locationValue: "حصص تفاعلية مباشرة عبر زوم (ألمانيا ومصر)",
      },
    },
    footer: {
      tagline: "التميز في تدريس اللغة الألمانية والتحضير المعتمد لمستوى B2 و امتحانات القبول.",
      copyright: "© 2026 أستاذ عادل غاندي. جميع الحقوق محفوظة.",
      credit: "Created by Esmael Salah",
    },
  },
  en: {
    nav: {
      brandName: "Herr Adel Ghandy",
      brandSubtitle: "German Language Instructor",
      about: "About Instructor",
      courses: "Curriculum & Goals",
      testimonials: "Reviews",
      faq: "FAQ",
      contact: "Contact Us",
      whatsappCta: "WhatsApp Us",
    },
    hero: {
      badge: "Zoom Online Course with 10% Discount 🔥",
      headline: "German B2 Mastery for Work and Study",
      subheadline: "Master advanced German grammar and conversational fluency with certified instructor Adel Ghandy. Interactive Zoom live classes, exam preparation, and career avenues in Germany.",
      primaryCta: "Book Now via WhatsApp",
      secondaryCta: "Contact via Gmail",
      metrics: {
        expLabel: "Years Teaching Exp.",
        expValue: "5+",
        certLabel: "Qualifications",
        certValue: "C1 & C2 Scholar",
        scholarshipLabel: "Scholarships",
        scholarshipValue: "DAAD & IPS Fellow",
        studentsLabel: "Graduated Students",
        studentsValue: "500+",
      },
    },
    qualifications: {
      badge: "Qualifications & Track Record",
      title: "Why Learn German with Herr Adel Ghandy?",
      subtitle: "A proven blend of academic distinction, German Parliament scholarship honors, and practical corporate experience.",
      items: {
        exp: {
          title: "5+ Years Teaching Experience",
          text: "Extensive background guiding hundreds of learners from foundational basics to B2/C1 fluency.",
        },
        levels: {
          title: "C1 Certified & C2 Scholar",
          text: "Achieved high-level GER language certification with ongoing C2 mastery studies.",
        },
        dll: {
          title: "DLL Certified (Deutsches Sprachdiplom)",
          text: "Officially certified in modern German pedagogical methodology by Goethe Institut standards.",
        },
        daad: {
          title: "DAAD 2022 Scholarship Holder",
          text: "Awarded the competitive German Academic Exchange Service (DAAD) scholarship in 2022.",
        },
        ips: {
          title: "IPS 2026 Scholarship Holder (German Parliament)",
          text: "Selected for the prestigious International Parliamentary Scholarship (IPS) by the German Bundestag (البرلمان الألماني).",
        },
        vodafone: {
          title: "Corporate Experience (Vodafone DE)",
          text: "Hands-on work experience in top multinational German-speaking corporate environments like Vodafone Deutschland.",
        },
      },
    },
    curriculum: {
      badge: "Curriculum & Pathways",
      title: "Comprehensive B2 Curriculum & Career Pathways",
      subtitle: "Using accredited German textbooks tailored to prepare you for study, Ausbildung, or job opportunities.",
      booksTitle: "Official Textbooks & Course Materials",
      books: {
        aspekte: {
          name: "Aspekte neu B2",
          tag: "Core Text",
          desc: "Modular structure for developing advanced reading, listening comprehension, and structured writing skills.",
        },
        redewendungen: {
          name: "Redewendungen B2 / C1 / C2",
          tag: "Fluency Practice",
          desc: "Mastering authentic German expressions, idioms, and natural conversational phrasing.",
        },
        sicher: {
          name: "Sicher! B2 / C1",
          tag: "Grammar & Exams",
          desc: "In-depth grammar precision and targeted preparation for Goethe-Zertifikat B2, telc B2, and TestDaF.",
        },
      },
      goalsTitle: "Target Career & Study Goals",
      goals: {
        scholarships: {
          title: "Scholarships (DAAD & IPS)",
          desc: "Personalized advice and motivational statement prep for DAAD and IPS German Parliament scholarships.",
        },
        university: {
          title: "University Study in Germany (Studium)",
          desc: "Academic German preparation and guidance for admissions at German universities.",
        },
        ausbildung: {
          title: "Vocational Training (Ausbildung)",
          desc: "Targeted vocabulary and interview training for nursing, IT, engineering, and commerce Ausbildungs.",
        },
        jobs: {
          title: "Work & Call Center Roles (DE & EG)",
          desc: "Direct readiness for high-paying German call center positions and multinational corporate jobs.",
        },
      },
    },
    testimonials: {
      badge: "Authentic Student Proof",
      title: "Student Review Screenshots",
      subtitle: "Real chat screenshots from students celebrating Goethe B2 exam success, Ausbildung acceptances, and corporate job offers.",
      zoomHint: "Click on any screenshot to expand and view in full size",
      items: [
        {
          id: "goethe",
          studentName: "Sarah Ahmed",
          achievement: "Passed Goethe-Zertifikat B2",
          tag: "Goethe B2 Top Score",
          rating: 5,
          image: "/src/assets/review_goethe.jpg",
          caption: "Authentic WhatsApp screenshot of Goethe B2 result celebration.",
        },
        {
          id: "ausbildung",
          studentName: "Lukas Weber / Mahmoud",
          achievement: "IT Ausbildung Acceptance in Munich",
          tag: "Official Ausbildung Contract",
          rating: 5,
          image: "/src/assets/review_ausbildung.jpg",
          caption: "Student chat confirming IT Ausbildung admission in Munich.",
        },
        {
          id: "job",
          studentName: "Anna Mueller / Omar",
          achievement: "Vodafone Deutschland Job Offer",
          tag: "Germany Corporate Job",
          rating: 5,
          image: "/src/assets/review_job.jpg",
          caption: "Job offer notification chat after completing conversation module.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Find answers regarding class schedules, course materials, and the Zoom online platform.",
      items: [
        {
          question: "How are the live online classes conducted?",
          answer: "Classes are held live on Zoom with active student participation, group discussions, and recordings for recap.",
        },
        {
          question: "What are the prerequisites for the B2 course?",
          answer: "Completion of B1 level is recommended. A free placement test is offered before enrollment.",
        },
        {
          question: "Are digital course materials included?",
          answer: "Yes, all digital PDFs, audio files, and practice worksheets are provided free of charge.",
        },
        {
          question: "Are there discount options available?",
          answer: "Yes! A 10% discount is currently available for the B2 Zoom batch. Installment options can also be arranged.",
        },
        {
          question: "Does the course prepare for Goethe and telc exams?",
          answer: "Yes, the course includes full exam simulations for Goethe B2, telc B2, and TestDaF.",
        },
      ],
    },
    contact: {
      badge: "Direct Contact",
      title: "Connect Instantly with Herr Adel Ghandy",
      subtitle: "No forms required! Chat directly on WhatsApp or compose an email in Gmail with one click.",
      whatsappCard: {
        title: "WhatsApp Direct Chat & Booking",
        desc: "Chat directly with Herr Adel Ghandy to reserve your seat and get instant details on upcoming batch schedules.",
        btnText: "Open WhatsApp Chat Now",
        phone: "+49 152 31428204",
      },
      gmailCard: {
        title: "Send Direct Email in Gmail",
        desc: "Opens your Gmail application immediately to send an inquiry without filling out web forms.",
        btnText: "Compose Email in Gmail",
        email: "Adel@example.com",
      },
      direct: {
        whatsappTitle: "Direct WhatsApp",
        whatsappValue: "+49 152 31428204",
        emailTitle: "Official Email",
        emailValue: "Adel@example.com",
        locationTitle: "Teaching Format",
        locationValue: "Interactive Live Zoom Classes (Germany & Egypt)",
      },
    },
    footer: {
      tagline: "Excellence in German Language Instruction B2 & Exam Preparation.",
      copyright: "© 2026 Herr Adel Ghandy. All rights reserved.",
      credit: "Created by Esmael Salah",
    },
  },
};
