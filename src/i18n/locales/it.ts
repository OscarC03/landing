const it = {
  // Navbar
  'nav.about': 'Chi sono',
  'nav.skills': 'Skills',
  'nav.experience': 'Esperienza',
  'nav.bc': 'BC',
  'nav.projects': 'Progetti',
  'nav.hobbies': 'Hobby',
  'nav.contact': 'Contatti',
  'nav.cta': 'Contattami',

  // Hero
  'hero.badge': 'Disponibile per nuovi progetti',
  'hero.greeting': 'Ciao, sono',
  'hero.role': 'Software Engineer · ERP & Full-Stack Development',
  'hero.location': 'Piemonte, Italia',
  'hero.description':
    "Sviluppo software enterprise presso EOS Solutions Group, lavorando su So Smart — un ERP cloud basato su Microsoft Dynamics 365 Business Central. Mi occupo anche di API REST, integrazioni e applicazioni web con React, TypeScript, Next.js e Node.js.",
  'hero.cta_projects': 'Vedi i miei progetti',
  'hero.cta_contact': 'Contattami',
  'hero.scroll': 'Scorri',

  // About
  'about.tag': 'Chi sono',
  'about.title': 'Software Engineer enterprise, con base in Piemonte',
  'about.p1':
    "Sono Oscar Cristaudo, Software Engineer presso EOS Solutions Group a Sant'Albano Stura (CN). Lavoro su So Smart, un ERP cloud basato su Microsoft Dynamics 365 Business Central.",
  'about.p2':
    "Il mio lavoro quotidiano comprende sviluppo AL, personalizzazione di Business Central, progettazione di API REST, integrazioni con sistemi esterni e ottimizzazione delle performance.",
  'about.p3':
    "Fuori dall'ambito ERP, sviluppo applicazioni web full-stack con React, TypeScript, Next.js e Node.js.",
  'about.cta': 'Parliamo',
  'about.stat_exp': '8+',
  'about.stat_exp_label': 'Anni di codice',
  'about.stat_location': 'CN · TO',
  'about.stat_location_label': 'Piemonte',
  'about.stat_role': 'Full Stack',
  'about.stat_role_label': 'Developer',
  'about.location_name': "Garessio · Sant'Albano Stura, CN",
  'about.location_sub': 'Piemonte, Italia · Nato a Carmagnola (TO)',
  'about.company': 'EOS Solutions Group · Microsoft Partner',
  'about.company_sub': 'So Smart ERP · Dynamics 365 Business Central',
  'about.education': 'IIS G. Vallauri · Fossano (CN)',
  'about.education_sub': 'Diploma Tecnico Informatico · 2017 – 2022',

  // Experience
  'exp.tag': 'Carriera',
  'exp.title': 'Esperienza & Formazione',
  'exp.present': 'Presente',
  'exp.job1.role': 'Software Engineer',
  'exp.job1.company': 'EOS Solutions Group',
  'exp.job1.period': '2023 – Presente',
  'exp.job1.location': "Sant'Albano Stura, CN",
  'exp.job1.desc':
    "Lavoro su So Smart, un ERP cloud basato su Microsoft Dynamics 365 Business Central. Quotidianamente scrivo estensioni AL — table e page extension, codeunit, event subscriber — e progetto API REST e endpoint OData per collegare Business Central a sistemi esterni. Profilo e risolvo codice AL lento e query SQL, scrivo documentazione tecnica e sviluppo applicazioni web full-stack per i clienti con React, TypeScript e Node.js.",
  'exp.job2.role': 'Developer',
  'exp.job2.company': 'EOS Online SPA',
  'exp.job2.period': '2022 – 2023',
  'exp.job2.location': 'Cuneo, CN',
  'exp.job2.desc':
    "Sviluppo di soluzioni software per clienti aziendali nel Gruppo EOS Solutions. Primo impiego professionale dopo il diploma.",
  'exp.edu.role': 'Diploma Tecnico Informatico',
  'exp.edu.company': 'IIS G. Vallauri',
  'exp.edu.period': '2017 – 2022',
  'exp.edu.location': 'Fossano, CN',
  'exp.edu.desc':
    "Percorso quinquennale in informatica e telecomunicazioni. Programmazione, reti, sistemi e sviluppo software.",

  // Skills
  'skills.tag': 'Competenze',
  'skills.title': 'Stack tecnologico',
  'skills.erp': 'ERP & Business Central',
  'skills.frontend': 'Frontend',
  'skills.backend': 'Backend',
  'skills.databases': 'Database',
  'skills.devops': 'DevOps & Cloud',
  'skills.tools': 'Strumenti',

  // Business Central
  'bc.tag': 'Microsoft Dynamics 365',
  'bc.title': 'Business Central',
  'bc.intro': "Lavoro quotidiano su un ERP cloud in produzione usato da clienti enterprise.",
  'bc.al.title': 'Sviluppo AL',
  'bc.al.desc': "Scrittura di estensioni AL per Business Central — table e page extension, codeunit, layout di report ed event subscriber per logiche di business complesse.",
  'bc.api.title': 'API & OData',
  'bc.api.desc': "Progettazione di API page personalizzate, bound e unbound action, e consumo di web service OData per connettere Business Central con sistemi esterni.",
  'bc.ext.title': 'Estensioni',
  'bc.ext.desc': "Sviluppo di estensioni Business Central seguendo il modello Microsoft — convenzioni di naming, gestione delle dipendenze e separazione netta dagli oggetti base.",
  'bc.int.title': 'Integrazioni',
  'bc.int.desc': "Integrazione di Business Central con servizi di terze parti, database esterni e applicazioni web personalizzate.",
  'bc.perf.title': 'Ottimizzazione Performance',
  'bc.perf.desc': "Profilazione e ottimizzazione di codice AL lento, query SQL, esecuzione di report e pipeline di elaborazione dati.",
  'bc.report.title': 'Report',
  'bc.report.desc': "Creazione e personalizzazione di report Business Central con layout RDLC e Word per requisiti specifici dei clienti.",

  // Projects
  'projects.tag': 'Lavori',
  'projects.title': 'Progetti selezionati',
  'projects.open': 'Apri',
  'projects.featured': 'In evidenza',
  'projects.type_web': 'web app',
  'projects.type_mobile': 'app mobile',
  'projects.p1.title': 'Portfolio personale',
  'projects.p1.desc':
    "Questo sito. React, TypeScript e Tailwind CSS. Deploy su GitHub Pages tramite workflow CI/CD con GitHub Actions. Supporto italiano e inglese con react-i18next.",
  'projects.p1.stat': 'questo sito',
  'projects.p2.title': 'rsa-schedule',
  'projects.p2.desc':
    "Strumento di schedulazione turni per una struttura residenziale. La sfida principale è stata modellare template settimanali ricorrenti con override singoli ed eccezioni per festività. Front-end Next.js, API REST PHP, database MySQL.",
  'projects.p2.stat': '72 commit',
  'projects.p3.title': 'DailyLife App',
  'projects.p3.desc':
    "Un progetto personale dei primi tempi — app Android ibrida con Apache Cordova per gestire attività, routine e abitudini. Back-end REST Java, front-end web. Mostra il punto di partenza prima di passare agli stack moderni.",
  'projects.p3.stat': '62 commit',

  // Hobbies
  'hobbies.tag': 'Fuori dal lavoro',
  'hobbies.title': 'Hobby & Interessi',

  'hobbies.anpas.label': 'Volontariato ANPAS',
  'hobbies.anpas.title': 'Croce Bianca Garessio',
  'hobbies.anpas.subtitle': 'Soccorritore · Istruttore IVS 118',
  'hobbies.anpas.desc':
    "Soccorritore volontario alla Croce Bianca di Garessio, affiliata ANPAS. Istruttore IVS 118 certificato: formo nuovi volontari sui protocolli di emergenza e rappresento la squadra nelle gare interregionali di soccorso.",
  'hobbies.anpas.ivs': 'Istruttore IVS 118',
  'hobbies.anpas.ivs_desc': 'Certificazione ANPAS per la formazione di nuovi soccorritori volontari nel sistema 118',
  'hobbies.anpas.award': 'Miglior Team Leader',
  'hobbies.anpas.award_event': 'Asti Rescue Game 2025',
  'hobbies.anpas.results_title': 'Risultati in gara',
  'hobbies.anpas.r1': '3° posto — Asti Rescue Game 2025',
  'hobbies.anpas.r2': '3° posto — AVSD Day Dogliani 2025',
  'hobbies.anpas.r3': '3° posto — Asti Rescue Game 2026',
  'hobbies.anpas.r4': '3° posto — AVSD Day Dogliani 2026',

  'hobbies.photo.label': 'Creatività',
  'hobbies.photo.title': 'Fotografia & Video',
  'hobbies.photo.desc': 'Paesaggi, ritratti e momenti quotidiani nelle valli cuneesi e non solo.',

  'hobbies.travel.label': 'Esplorazione',
  'hobbies.travel.title': 'Viaggi',
  'hobbies.travel.desc': "Scoprire nuovi posti e culture. Il Piemonte è un buon punto di partenza per l'Italia e l'Europa.",

  // Contact
  'contact.tag': 'Contatti',
  'contact.title': 'Parliamo',
  'contact.description': 'Disponibile per richieste di progetto, collaborazioni e nuove opportunità. Scegli un canale qui sotto.',

  // Footer
  'footer.location': 'Garessio, Cuneo',
  'footer.rights': 'Oscar Cristaudo',
} as const

export default it
