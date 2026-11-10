import { SiteContent } from '../../models/content.model';

export const fr: SiteContent = {

  chatbotIcon: 'seco-centers/chatbot-icon.webp',

  languageName: 'Français',

  nav: [
    { label: 'Accueil', url: '/'},
    { label: 'À propos', url: '/about'},
    { label: 'FAQ', url: '/faq'},
    // { label: 'Services', url: '/'}

  ],

  header: {
    skipToContent: 'Aller au contenu principal',
    mainNav: 'Navigation principale',
    homeAria: 'SECO GROUPE Centers — accueil',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    actions: {
      register: { label: "S'inscrire", url: '/signup' },
      login: { label: 'Se connecter', url: '/signin' },
    },
  },

  footer: {
    tagline: 'Un réseau de centres au service de nos équipes et de nos clients.',
    rights: 'Tous droits réservés.',
    contact: 'Nous contacter',
  },

  signin:{
    seo:{
      title: 'Connexion | SECO Response',
      description: 'Connectez-vous à votre compte SECO Response.'
    },
    title: 'Connexion',
    email: { label: 'E-mail', placeholder: 'Votre e-mail' },
    password: { label: 'Mot de passe', placeholder: 'Votre mot de passe' },
    forgotPassword: 'Mot de passe oublié ?',
    keepSignedIn: 'Rester connecté',
    submit: 'Se connecter',
    or: 'ou',
    google: 'Se connecter avec Google',
  },

  form: {
    steps: ['Informations de base', 'Langues', 'Expérience', 'Disponibilité'],
    back: 'Retour',
    continue: 'Continuer',
    optional: '(facultatif)',
    yes: 'Oui',
    no: 'Non',

    step1: {
      title: 'Informations de base',
      desc: 'Étape 1 sur 4. Le numéro de téléphone est facultatif. Joignez votre CV et nous remplirons ce que nous pouvons ci-dessous - vous pourrez toujours tout modifier.',
      resume: 'CV',
      firstName: { label: 'Prénom', placeholder: 'Votre prénom', required: 'Le prénom est obligatoire.' },
      lastName: { label: 'Nom', placeholder: 'Votre nom', required: 'Le nom est obligatoire.' },
      email: { label: 'E-mail', placeholder: 'Votre e-mail', required: "L'e-mail est obligatoire." },
      phone: { label: 'Téléphone', placeholder: 'Votre numéro de téléphone' },
      country: { label: 'Pays de résidence', placeholder: 'Commencez à taper ou cliquez pour parcourir', required: 'Le pays de résidence est obligatoire.' },
    },

    step2: {
      title: 'Langues',
      desc: 'Étape 2 sur 4. Sélectionnez toutes les langues que vous parlez. Marquez-en une ou plusieurs comme principales - les langues principales ne demandent pas de niveau.',
      searchLabel: 'Rechercher une langue',
      searchPlaceholder: 'Tapez pour filtrer, ex. « Espagnol »',
      proficiencyPlaceholder: 'Niveau',
      proficiencyLevels: [
        { value: 'basic', label: 'Notions' },
        { value: 'conversational', label: 'Conversationnel' },
        { value: 'professional', label: 'Professionnel' },
        { value: 'fluent', label: 'Courant' },
        { value: 'native', label: 'Langue maternelle / Bilingue' },
      ],
      primary: 'Principale',
      languageNames: { en: 'Anglais', fr: 'Français', es: 'Espagnol' },
      error: 'Veuillez sélectionner au moins une langue.',
    },

    step3: {
      title: 'Expérience',
      desc: 'Étape 3 sur 4.',
      supportQuestion: 'Avez-vous une expérience en service client ou en support ?',
      supportOptions: [
        { value: 'yes', label: 'Oui' },
        { value: 'no', label: 'Non' },
        { value: 'gaining', label: "En cours d'acquisition" },
      ],
      workQuestion: 'Quels types de travail vous intéressent ?',
      workHint: 'Sélectionnez toutes les catégories qui vous correspondent.',
      categories: [
        {
          title: 'Support technique',
          options: [
            { value: 'Account/password support', label: 'Support compte / mot de passe' },
            { value: 'Connectivity troubleshooting', label: 'Dépannage de connectivité' },
            { value: 'Hardware troubleshooting', label: 'Dépannage matériel' },
            { value: 'Help-desk', label: 'Help desk' },
            { value: 'Mobile-device support', label: 'Support appareils mobiles' },
            { value: 'Product support', label: 'Support produit' },
            { value: 'Remote assistance', label: 'Assistance à distance' },
            { value: 'Software troubleshooting', label: 'Dépannage logiciel' },
            { value: 'Ticket management', label: 'Gestion des tickets' },
            { value: 'Tier 1 support', label: 'Support niveau 1' },
            { value: 'Tier 2 support', label: 'Support niveau 2' },
          ],
        },
        {
          title: 'Assistance virtuelle',
          options: [
            { value: 'Administrative assistance', label: 'Assistance administrative' },
            { value: 'Appointment management', label: 'Gestion des rendez-vous' },
            { value: 'Calendar management', label: "Gestion d'agenda" },
            { value: 'CRM management', label: 'Gestion du CRM' },
            { value: 'Data entry', label: 'Saisie de données' },
            { value: 'Document preparation', label: 'Préparation de documents' },
            { value: 'Email management', label: 'Gestion des e-mails' },
            { value: 'Executive assistance', label: 'Assistance de direction' },
            { value: 'Follow-up', label: 'Suivi' },
            { value: 'General assistance', label: 'Assistance générale' },
            { value: 'Project coordination', label: 'Coordination de projets' },
            { value: 'Reports', label: 'Rapports' },
            { value: 'Research', label: 'Recherche' },
            { value: 'Travel management', label: 'Gestion des déplacements' },
          ],
        },
        {
          title: 'E-commerce',
          options: [
            { value: 'Amazon support', label: 'Support Amazon' },
            { value: 'Buyer support', label: 'Support acheteurs' },
            { value: 'Inventory support', label: 'Gestion des stocks' },
            { value: 'Marketplace support', label: 'Support marketplace' },
            { value: 'Order tracking', label: 'Suivi des commandes' },
            { value: 'Payment support', label: 'Support paiements' },
            { value: 'Product listing', label: 'Mise en ligne de produits' },
            { value: 'Product-information support', label: 'Support informations produit' },
            { value: 'Returns/refunds', label: 'Retours / remboursements' },
            { value: 'Seller support', label: 'Support vendeurs' },
            { value: 'Shipping support', label: 'Support expédition' },
            { value: 'Shopify support', label: 'Support Shopify' },
          ],
        },
        {
          title: 'Back-office',
          options: [
            { value: 'Application processing', label: 'Traitement des candidatures' },
            { value: 'Claims processing', label: 'Traitement des réclamations' },
            { value: 'Content moderation', label: 'Modération de contenu' },
            { value: 'Data entry/verification', label: 'Saisie / vérification de données' },
            { value: 'Document processing', label: 'Traitement de documents' },
            { value: 'Email processing', label: 'Traitement des e-mails' },
            { value: 'Form review', label: 'Vérification de formulaires' },
            { value: 'Internet research', label: 'Recherche sur Internet' },
            { value: 'Order processing', label: 'Traitement des commandes' },
            { value: 'Quality assurance', label: 'Contrôle qualité' },
            { value: 'Records/database management', label: 'Gestion de dossiers / bases de données' },
          ],
        },
        {
          title: 'Service client',
          options: [
            { value: 'Appointment scheduling', label: 'Prise de rendez-vous' },
            { value: 'Billing support', label: 'Support facturation' },
            { value: 'Complaint resolution', label: 'Traitement des plaintes' },
            { value: 'Customer success', label: 'Customer success' },
            { value: 'Email support', label: 'Support par e-mail' },
            { value: 'Escalation', label: 'Escalade' },
            { value: 'Inbound customer service', label: 'Service client entrant' },
            { value: 'Live-chat support', label: 'Support par chat en direct' },
            { value: 'Order support', label: 'Support commandes' },
            { value: 'Outbound customer service', label: 'Service client sortant' },
            { value: 'Phone support', label: 'Support téléphonique' },
            { value: 'Refund and return support', label: 'Support retours et remboursements' },
            { value: 'Retention', label: 'Fidélisation' },
            { value: 'Social-media support', label: 'Support réseaux sociaux' },
          ],
        },
        {
          title: 'Ventes et prospection',
          options: [
            { value: 'Appointment setting', label: 'Prise de rendez-vous commerciaux' },
            { value: 'Cold calling', label: 'Prospection téléphonique' },
            { value: 'Collections', label: 'Recouvrement' },
            { value: 'Fundraising', label: 'Collecte de fonds' },
            { value: 'Inbound sales', label: 'Ventes entrantes' },
            { value: 'Lead generation', label: 'Génération de leads' },
            { value: 'Outbound sales', label: 'Ventes sortantes' },
            { value: 'Real-estate lead calling', label: 'Prospection immobilière' },
            { value: 'Retention sales', label: 'Ventes de fidélisation' },
            { value: 'Sales development', label: 'Développement commercial' },
            { value: 'Surveys', label: 'Enquêtes' },
            { value: 'Telesales', label: 'Télévente' },
            { value: 'Upselling/cross-selling', label: 'Vente additionnelle / croisée' },
          ],
        },
        {
          title: 'Support sectoriel',
          options: [
            { value: 'Banking/financial services', label: 'Banque / services financiers' },
            { value: 'Education', label: 'Éducation' },
            { value: 'Government', label: 'Secteur public' },
            { value: 'Healthcare', label: 'Santé' },
            { value: 'Insurance', label: 'Assurance' },
            { value: 'Legal intake', label: 'Accueil juridique' },
            { value: 'Logistics', label: 'Logistique' },
            { value: 'Property management', label: 'Gestion immobilière' },
            { value: 'Real estate', label: 'Immobilier' },
            { value: 'Retail', label: 'Commerce de détail' },
            { value: 'Telecommunications', label: 'Télécommunications' },
            { value: 'Travel/hospitality', label: 'Voyage / hôtellerie' },
            { value: 'Utilities', label: 'Services publics (énergie, eau)' },
          ],
        },
        {
          title: 'Services linguistiques',
          options: [
            { value: 'Community interpretation', label: 'Interprétariat communautaire' },
            { value: 'Consecutive interpretation', label: 'Interprétation consécutive' },
            { value: 'Document translation', label: 'Traduction de documents' },
            { value: 'Legal interpretation', label: 'Interprétation juridique' },
            { value: 'Localization', label: 'Localisation' },
            { value: 'Medical interpretation', label: 'Interprétation médicale' },
            { value: 'Over-the-phone interpretation', label: 'Interprétation par téléphone' },
            { value: 'Proofreading', label: 'Relecture' },
            { value: 'Subtitling', label: 'Sous-titrage' },
            { value: 'Transcription', label: 'Transcription' },
            { value: 'Video interpretation', label: 'Interprétation vidéo' },
            { value: 'Website translation', label: 'Traduction de sites web' },
            { value: 'Written translation', label: 'Traduction écrite' },
          ],
        },
      ],
      otherLabel: 'Autre - décrivez le travail que vous recherchez',
      otherPlaceholder: 'Décrivez le type de travail que vous recherchez...',
      error: 'Veuillez sélectionner au moins un type de travail.',
    },

    step4: {
      title: 'Disponibilité',
      desc: 'Étape 4 sur 4. Dernière étape.',
      remoteQuestion: 'Le télétravail vous intéresse-t-il ?',
      selectPlaceholder: 'Sélectionnez une option',
      scheduleLabel: 'Horaire souhaité',
      scheduleOptions: [
        { value: 'full-time', label: 'Temps plein' },
        { value: 'part-time', label: 'Temps partiel' },
        { value: 'weekends', label: 'Week-ends' },
        { value: 'flexible', label: 'Flexible' },
      ],
      shiftLabel: 'Créneau souhaité',
      shiftOptions: [
        { value: 'morning', label: 'Matin' },
        { value: 'afternoon', label: 'Après-midi' },
        { value: 'evening', label: 'Soir' },
        { value: 'night', label: 'Nuit' },
        { value: 'any', label: 'Indifférent' },
      ],
      startDate: { label: 'Quand pouvez-vous commencer ?', placeholder: 'ex. Immédiatement, préavis de 2 semaines' },
      certificationsLabel: 'Certifications',
      agreeToContact: "J'accepte que Seco Response me contacte au sujet de ma candidature et conserve mes informations afin de les examiner pour des opportunités actuelles et futures.",
      emailAlerts: "M'envoyer aussi des alertes e-mail sur les nouvelles opportunités correspondant à mon profil",
      emailAlertsNote: '(facultatif, désinscription à tout moment).',
      notice: "Rejoindre le Réseau de talents ne garantit pas un entretien, un placement ou un emploi. Si un projet correspond à votre profil, nous vous demanderons votre accord avant de transmettre votre profil à une agence partenaire.",
      error: 'Veuillez remplir tous les champs obligatoires avant de soumettre.',
      submit: 'Envoyer ma candidature',
    },
  },



  home: {
    seo: {
      title: 'SECO Response',
      description: 'Les centres SECO GROUPE : inscription, accompagnement et services.',
    },
    eyebrow: '',
    title: 'Bienvenue chez SECO Response',
    lead: "Notre technologie innovante vous permet d'organiser votre travail autour de votre vie, et non l'inverse. Si vous recherchez le choix, la flexibilité et la liberté, inscrivez-vous dès aujourd'hui.",
    primaryCta: { label: 'Commencer', url: '/register-now' },
    secondaryCta: { label: 'Trouver le poste idéal', url: '/login' },
    heroEndBar:[
      {
        icon: 'ri-headphone-fill',
        title: 'Équipe professionnelle',
        desc: 'Des agents formés et engagés sur site.'
      },
      {
        icon: 'ri-headphone-fill',
        title: 'Solutions évolutives',
        desc: 'Un accompagnement qui grandit avec votre entreprise.'
      },
      {
        icon: 'ri-shield-user-fill',
        title: 'Qualité et sécurité',
        desc: 'Fiable, sécurisé et conforme.'
      },
      {
        icon: 'ri-focus-2-line',
        title: 'Orienté client',
        desc: 'De vraies personnes, de vrais résultats.'
      },
    ],
    section2:{
      title: "Nos solutions d'externalisation du service client",
      cards: [
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-1.webp',
          title: 'Service client',
          desc: 'Appels entrants et sortants, chat, e-mail, escalade et fidélisation sur tous les canaux.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-2.webp',
          title: 'Support technique',
          desc: 'Dépannage de niveau 1 et 2, help desk et assistance à distance.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-3.webp',
          title: 'Services bilingues et linguistiques',
          desc: 'Interprétation, traduction et support multilingue.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-4.webp',
          title: 'Ventes et prospection',
          desc: 'Télévente, génération de leads, prise de rendez-vous et ventes de fidélisation.'
        },
      ]
    }
  },

  about: {
    seo: {
      title: 'À propos | SECO Response',
      description: 'SECO Response, prestataire de services de centre d’appels.',
    },
    heroSection: {
      title: 'Votre partenaire pour un support d’entreprise fiable et des solutions client',
      description: 'Seco Response aide les organisations à simplifier leurs opérations, renforcer leurs relations clients et accéder à un accompagnement professionnel fiable.',
      heroImages: [
        '/seco-centers/about/about-1_500.webp',
        '/seco-centers/about/about-2_500.webp',
        '/seco-centers/about/about-3_500.webp']
    },
    section2: {
      p1: 'Nous proposons des solutions flexibles conçues pour répondre aux besoins évolutifs des entreprises, des organisations et des entrepreneurs. Nos services couvrent le service client, l’assistance virtuelle, les services administratifs, la communication multilingue, le support technique, l’externalisation des processus métier et l’assistance opérationnelle spécialisée. En associant des professionnels qualifiés à des processus efficaces et à des technologies modernes, nous aidons nos clients à gagner du temps, à améliorer leur productivité et à offrir de meilleures expériences.',
      p2: 'Nous travaillons avec des entreprises et des organisations de tous secteurs, notamment la santé, les services financiers, le secteur public, le juridique, le commerce de détail, l’éducation, le e-commerce et les services professionnels.',
      p3: 'Chez Seco Response, nous ne nous contentons pas d’accomplir des tâches. Nous voulons devenir un prolongement fiable de votre équipe. Notre engagement envers la qualité, le professionnalisme, la confidentialité, la réactivité et la responsabilité permet à nos clients de se concentrer sur leur cœur de métier pendant que nous gérons le support en coulisses.'
    },
    section3: {
      title: 'Pourquoi Seco Response ?',
      cards: [
        {
          icon: 'check',
          title: 'Un support fiable',
          desc: 'Des équipes professionnelles sur lesquelles vous pouvez compter.'
        },
        {
          icon: 'check',
          title:'Des solutions flexibles',
          desc: 'Des services qui s’adaptent à la croissance de votre organisation.'
        },
        {
          icon: 'check',
          title: 'L’humain et la technologie',
          desc: 'Le juste équilibre entre expertise humaine et outils modernes.'
        },
        {
          icon: 'check',
          title: 'Qualité et responsabilité',
          desc: 'Un service constant, centré sur la satisfaction client.'
        },
        {
          icon: 'check',
          title: 'Orienté entreprise',
          desc: 'Des solutions concrètes pour gagner en efficacité et soutenir la croissance.'
        }
      ]
    },
    section4: {
      title: 'Notre mission',
      desc1: 'Fournir des solutions de support aux entreprises fiables, innovantes et accessibles, qui aident les organisations à fonctionner plus efficacement, à mieux servir leurs clients et à atteindre une croissance durable.',
      desc2: 'Seco Response constitue un vivier réutilisable et consultable de talents en centre d’appels et en support aux entreprises, et oriente les candidats qualifiés et consentants vers des agences partenaires lorsque des projets se présentent. Nous ne sommes pas l’employeur officiel des candidats orientés : nos agences partenaires mènent les entretiens et prennent toutes les décisions d’embauche, d’offre et de rémunération.',
      cta: {
        content: 'Rejoindre notre réseau',
        link: ''
      },
      desc3: 'Seco Response - Soutenir votre entreprise. Accélérer votre croissance.'
    }
  },

  faq: {
    seo: {
      title: 'FAQ | SECO Response',
      description: 'Les réponses aux questions les plus fréquentes sur l’inscription au Réseau de talents SECO Response.',
    },
    title: 'Questions fréquentes',
    lead: 'Tout ce que vous devez savoir sur l’inscription à notre Réseau de talents, les étapes suivantes et la gestion de vos informations.',
    categories: [
      {
        title: 'Rejoindre le Réseau de talents',
        items: [
          {
            question: 'L’inscription au Réseau de talents me garantit-elle un emploi ?',
            answer: 'Non. L’inscription crée votre profil afin que nous puissions vous proposer pour de futurs projets. Les décisions d’embauche reviennent à nos agences partenaires, et nous ne pouvons garantir ni entretien, ni placement, ni emploi, ni réponse dans un délai précis.',
          },
          {
            question: 'Dois-je payer pour postuler ou m’inscrire ?',
            answer: 'Non. La candidature et l’inscription au Réseau de talents sont gratuites pour les candidats, à toutes les étapes.',
          },
          {
            question: 'Un CV est-il obligatoire ?',
            answer: 'Non. Joindre un CV est facultatif dans le formulaire d’inscription. Certaines opportunités spécifiques peuvent en demander un, ce qui sera toujours clairement indiqué.',
          },
        ],
      },
      {
        title: 'Après votre inscription',
        items: [
          {
            question: 'Que se passe-t-il une fois mon profil transmis à un partenaire ?',
            answer: 'L’agence partenaire vous contacte directement et mène son propre processus d’entretien. SECO Response ne participe ni aux entretiens ni à la décision d’embauche.',
          },
          {
            question: 'Puis-je modifier mes informations après mon inscription ?',
            answer: 'Oui. Contactez-nous par e-mail à tout moment et notre équipe mettra votre profil à jour.',
          },
        ],
      },
      {
        title: 'Vos informations',
        items: [
          {
            question: 'Quelles informations collectez-vous ?',
            answer: 'Vos nom et coordonnées (le téléphone est facultatif), votre pays de résidence, les langues que vous parlez, votre expérience et les types de travail qui vous intéressent, ainsi que vos disponibilités. À ce stade, nous ne demandons jamais de numéro de sécurité sociale, de coordonnées bancaires, de date de naissance ni d’informations médicales.',
          },
          {
            question: 'Mon profil est-il transmis automatiquement aux agences partenaires ?',
            answer: 'Non. Votre profil n’est transmis qu’après que vous avez confirmé votre intérêt pour une opportunité précise et donné votre accord.',
          },
          {
            question: 'Comment ne plus recevoir vos e-mails ?',
            answer: 'Les alertes e-mail sur les nouvelles opportunités sont facultatives et distinctes des messages concernant votre candidature. Vous pouvez vous désinscrire des alertes à tout moment.',
          },
        ],
      },
    ],
    cta: {
      title: 'Votre question n’est pas listée ?',
      desc: 'Notre équipe est là pour vous aider. Rejoignez le réseau dès aujourd’hui ou contactez-nous directement.',
      primary: { label: 'Rejoindre notre réseau', url: '/signup' },
      contact: 'Nous contacter',
    },
  },

  notFound: {
    seo: {
      title: 'Page introuvable — SECO GROUPE Centers',
      description: "Cette page n'existe pas ou a été déplacée.",
    },
    code: '404',
    title: 'Page introuvable',
    lead: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};
