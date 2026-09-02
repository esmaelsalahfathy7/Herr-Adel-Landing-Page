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
    items: Array<{
      name: string;
      role: string;
      image: string;
      quote: string;
      rating: number;
      tag: string;
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
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      goalLabel: string;
      goalOptions: {
        study: string;
        job: string;
        ausbildung: string;
        scholarship: string;
        other: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successMsg: string;
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
      secondaryCta: "E-Mail Anfrage senden",
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
      badge: "Erfahrungsberichte",
      title: "Das sagen unsere erfolgreichen Schüler",
      subtitle: "Echtes Feedback von Teilnehmern, die mit Herr Adel ihr B2-Zertifikat bestanden und ihre Träume verwirklicht haben.",
      items: [
        {
          name: "Sarah Ahmed",
          role: "Medizinstudentin in Berlin",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
          quote: "Herr Adel erklärt die B2 Grammatik unglaublich anschaulich! Dank des Kurses habe ich das Goethe B2 Zertifikat beim ersten Versuch bestanden.",
          rating: 5,
          tag: "Goethe B2 Bestanden",
        },
        {
          name: "Mahmoud Hassan",
          role: "Ausbildung im IT-Bereich (München)",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
          quote: "Das Training mit Redewendungen B2 hat mein Selbstvertrauen beim Sprechen extrem gesteigert. Die Vorbereitung auf das Vorstellungsgespräch war perfekt!",
          rating: 5,
          tag: "Ausbildung Zusage",
        },
        {
          name: "Omar El-Sayed",
          role: "Vodafone Deutschland Senior Specialist",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
          quote: "Herr Adels Praxiserfahrung bei Vodafone hat den Unterschied gemacht. Die Simulationen von Kunden-Gesprächen gaben mir den entscheidenden Vorteil.",
          rating: 5,
          tag: "Job in Deutschland",
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
      badge: "Kontakt & Anmeldung",
      title: "Starten Sie Ihre B2-Reise mit Herr Adel",
      subtitle: "Haben Sie Fragen oder möchten Sie Ihren Platz im nächsten Zoom-Kurs reservieren? Kontaktieren Sie uns direkt.",
      form: {
        nameLabel: "Vollständiger Name",
        namePlaceholder: "z.B. Max Mustermann",
        emailLabel: "E-Mail-Adresse",
        emailPlaceholder: "name@beispiel.de",
        phoneLabel: "Telefon / WhatsApp-Nummer",
        phonePlaceholder: "+49 152 31428204",
        goalLabel: "Ihr Hauptziel",
        goalOptions: {
          study: "Studium an deutscher Hochschule",
          job: "Arbeit / Job in Deutschland oder Ägypten",
          ausbildung: "Berufsausbildung (Ausbildung)",
          scholarship: "Stipendium (DAAD / IPS)",
          other: "Sonstiges",
        },
        messageLabel: "Ihre Nachricht oder Frage",
        messagePlaceholder: "Schreiben Sie uns Ihre Fragen zum B2-Kurs...",
        submitBtn: "Anfrage per E-Mail absenden",
        successMsg: "Vielen Dank! Ihre Anfrage wurde direkt an Adel@example.com gesendet. Wir melden uns in Kürze!",
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
      secondaryCta: "أرسل استفساراً بالبريد",
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
      badge: "آراء الطلاب",
      title: "ماذا يقول طلابنا عن أستاذ عادل؟",
      subtitle: "تجارب حقيقية لطلاب حققوا شهادات B2 وسافروا أو عملوا في المجال الألماني.",
      items: [
        {
          name: "سارة أحمد",
          role: "طالبة طب في برلين",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
          quote: "شرح أستاذ عادل لقواعد B2 أزال كل التعقيدات! بفضله نجحت في امتحان Goethe B2 من أول محاولة.",
          rating: 5,
          tag: "نجاح Goethe B2",
        },
        {
          name: "محمود حسن",
          role: "متدرب أوسبيلدونج IT في ميونخ",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
          quote: "التدريب على Redewendungen جعلني أتحدث بثقة كبيرة في مقابلة الأوسبيلدونج وتم قبولي فوراً.",
          rating: 5,
          tag: "قبول أوسبيلدونج",
        },
        {
          name: "عمر السيد",
          role: "أخصائي في Vodafone Deutschland",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
          quote: "خبرة أستاذ عادل في العمل بفودافون جعلت الكورس عملياً للغاية ومناسباً لمتطلبات السوق الحقيقية.",
          rating: 5,
          tag: "وظيفة براتب ممتاز",
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
      badge: "تواصل معنا والتسجيل",
      title: "ابدأ رحلتك لإتقان B2 مع أستاذ عادل",
      subtitle: "هل لديك استفسار أو ترغب في الانضمام للدورة القادمة عبر زوم؟ تواصل معنا مباشرة.",
      form: {
        nameLabel: "الاسم الكامل",
        namePlaceholder: "مثال: أحمد محمد",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "name@example.com",
        phoneLabel: "رقم الهاتف / الواتساب",
        phonePlaceholder: "+49 152 31428204",
        goalLabel: "هدفك الأساسي",
        goalOptions: {
          study: "الدراسة الجامعية في ألمانيا",
          job: "العمل في ألمانيا أو كول سنتر بمصر",
          ausbildung: "التدريب المهني (Ausbildung)",
          scholarship: "التقديم على منحة (DAAD / البرلمان)",
          other: "هدف آخر",
        },
        messageLabel: "رسالتك أو استفسارك",
        messagePlaceholder: "اكتب استفساراتك حول المواعيد أو تفاصيل كورس B2...",
        submitBtn: "إرسال الاستفسار بالبريد",
        successMsg: "تم إرسال استفسارك بنجاح إلى البريد الإلكتروني Adel@example.com وسنتواصل معك قريباً جداً!",
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
      secondaryCta: "Send Email Inquiry",
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
      badge: "Student Reviews",
      title: "What Our Students Say About Herr Adel",
      subtitle: "Genuine feedback from learners who passed B2 exams and accomplished their ambitions in Germany.",
      items: [
        {
          name: "Sarah Ahmed",
          role: "Medical Student in Berlin",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
          quote: "Herr Adel makes B2 grammar so simple and clear! Thanks to his guidance, I passed Goethe B2 on my first attempt.",
          rating: 5,
          tag: "Goethe B2 Passed",
        },
        {
          name: "Mahmoud Hassan",
          role: "IT Ausbildung Trainee in Munich",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
          quote: "The Redewendungen B2 practice boosted my spoken confidence immensely. I aced my Ausbildung interview!",
          rating: 5,
          tag: "Ausbildung Accepted",
        },
        {
          name: "Omar El-Sayed",
          role: "Senior Specialist at Vodafone DE",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
          quote: "Herr Adel's practical experience at Vodafone was invaluable. The customer dialogue simulations gave me the edge.",
          rating: 5,
          tag: "German Corporate Job",
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
      badge: "Contact & Enrollment",
      title: "Start Your B2 Journey with Herr Adel Ghandy",
      subtitle: "Have questions or ready to reserve your seat for the upcoming Zoom cohort? Reach out to us today.",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "e.g. John Doe",
        emailLabel: "Email Address",
        emailPlaceholder: "name@example.com",
        phoneLabel: "Phone / WhatsApp Number",
        phonePlaceholder: "+49 152 31428204",
        goalLabel: "Primary Goal",
        goalOptions: {
          study: "University Study in Germany",
          job: "Job in Germany or Call Center",
          ausbildung: "Vocational Training (Ausbildung)",
          scholarship: "Scholarships (DAAD / IPS)",
          other: "Other Goal",
        },
        messageLabel: "Message / Question",
        messagePlaceholder: "Write your questions regarding the B2 course...",
        submitBtn: "Send Email Inquiry",
        successMsg: "Thank you! Your message has been sent directly to Adel@example.com. We will get back to you shortly!",
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
