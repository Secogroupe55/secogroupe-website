import { SiteContent } from '../../models/content.model';

export const en: SiteContent = {

  chatbotIcon: 'seco-centers/chatbot-icon.webp',

  languageName: 'English',

  nav: [
    { label: 'Home', url: '/'},
    { label: 'About', url: '/about'},
    { label: 'FAQ', url: '/faq'},
    // { label: 'Services', url: '/'}

  ],

  header: {
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    homeAria: 'SECO GROUPE Centers — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    actions: {
      register: { label: 'Sign up', url: '/signup' },
      login: { label: 'Sign in', url: '/signin' },
    },
  },

  footer: {
    tagline: 'A network of centers serving our teams and our clients.',
    rights: 'All rights reserved.',
    contact: 'Contact us',
  },

  signin:{
    seo:{
      title: 'Sign in | SECO Response',
      description: 'Sign in to your SECO Response account.'
    },
    title: 'Sign in',
    email: { label: 'Email', placeholder: 'Your email' },
    password: { label: 'Password', placeholder: 'Your password' },
    forgotPassword: 'Forgot password?',
    keepSignedIn: 'Keep me signed in',
    submit: 'Sign in',
    or: 'or',
    google: 'Sign in with Google',
  },

  form: {
    steps: ['Basic information', 'Languages', 'Experience', 'Availability'],
    back: 'Back',
    continue: 'Continue',
    optional: '(optional)',
    yes: 'Yes',
    no: 'No',

    step1: {
      title: 'Basic information',
      desc: "Step 1 of 4. Phone number is optional. Attach a resume and we'll fill in what we can below - you can still edit anything.",
      resume: 'Resume',
      firstName: { label: 'First name', placeholder: 'Your first name', required: 'First name is required.' },
      lastName: { label: 'Last name', placeholder: 'Your last name', required: 'Last name is required.' },
      email: { label: 'Email', placeholder: 'Your email', required: 'Email is required.' },
      phone: { label: 'Phone', placeholder: 'Your phone number' },
      country: { label: 'Country of residence', placeholder: 'Start typing or click to browse', required: 'Country of residence is required.' },
    },

    step2: {
      title: 'Languages',
      desc: 'Step 2 of 4. Select every language you speak. Mark one or more as primary - primary languages skip the proficiency question.',
      searchLabel: 'Search languages',
      searchPlaceholder: 'Type to filter, e.g. "Spanish"',
      proficiencyPlaceholder: 'Proficiency',
      proficiencyLevels: [
        { value: 'basic', label: 'Basic' },
        { value: 'conversational', label: 'Conversational' },
        { value: 'professional', label: 'Professional' },
        { value: 'fluent', label: 'Fluent' },
        { value: 'native', label: 'Native / Bilingual' },
      ],
      primary: 'Primary',
      languageNames: { en: 'English', fr: 'French', es: 'Spanish' },
      error: 'Please select at least one language.',
    },

    step3: {
      title: 'Experience',
      desc: 'Step 3 of 4.',
      supportQuestion: 'Do you have customer-service or support experience?',
      supportOptions: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'gaining', label: 'Currently gaining experience' },
      ],
      workQuestion: 'Which kinds of work are you interested in?',
      workHint: 'Select every category that fits.',
      categories: [
        {
          title: 'Technical Support',
          options: [
            { value: 'Account/password support', label: 'Account/password support' },
            { value: 'Connectivity troubleshooting', label: 'Connectivity troubleshooting' },
            { value: 'Hardware troubleshooting', label: 'Hardware troubleshooting' },
            { value: 'Help-desk', label: 'Help-desk' },
            { value: 'Mobile-device support', label: 'Mobile-device support' },
            { value: 'Product support', label: 'Product support' },
            { value: 'Remote assistance', label: 'Remote assistance' },
            { value: 'Software troubleshooting', label: 'Software troubleshooting' },
            { value: 'Ticket management', label: 'Ticket management' },
            { value: 'Tier 1 support', label: 'Tier 1 support' },
            { value: 'Tier 2 support', label: 'Tier 2 support' },
          ],
        },
        {
          title: 'Virtual Assistance',
          options: [
            { value: 'Administrative assistance', label: 'Administrative assistance' },
            { value: 'Appointment management', label: 'Appointment management' },
            { value: 'Calendar management', label: 'Calendar management' },
            { value: 'CRM management', label: 'CRM management' },
            { value: 'Data entry', label: 'Data entry' },
            { value: 'Document preparation', label: 'Document preparation' },
            { value: 'Email management', label: 'Email management' },
            { value: 'Executive assistance', label: 'Executive assistance' },
            { value: 'Follow-up', label: 'Follow-up' },
            { value: 'General assistance', label: 'General assistance' },
            { value: 'Project coordination', label: 'Project coordination' },
            { value: 'Reports', label: 'Reports' },
            { value: 'Research', label: 'Research' },
            { value: 'Travel management', label: 'Travel management' },
          ],
        },
        {
          title: 'E-Commerce',
          options: [
            { value: 'Amazon support', label: 'Amazon support' },
            { value: 'Buyer support', label: 'Buyer support' },
            { value: 'Inventory support', label: 'Inventory support' },
            { value: 'Marketplace support', label: 'Marketplace support' },
            { value: 'Order tracking', label: 'Order tracking' },
            { value: 'Payment support', label: 'Payment support' },
            { value: 'Product listing', label: 'Product listing' },
            { value: 'Product-information support', label: 'Product-information support' },
            { value: 'Returns/refunds', label: 'Returns/refunds' },
            { value: 'Seller support', label: 'Seller support' },
            { value: 'Shipping support', label: 'Shipping support' },
            { value: 'Shopify support', label: 'Shopify support' },
          ],
        },
        {
          title: 'Back Office',
          options: [
            { value: 'Application processing', label: 'Application processing' },
            { value: 'Claims processing', label: 'Claims processing' },
            { value: 'Content moderation', label: 'Content moderation' },
            { value: 'Data entry/verification', label: 'Data entry/verification' },
            { value: 'Document processing', label: 'Document processing' },
            { value: 'Email processing', label: 'Email processing' },
            { value: 'Form review', label: 'Form review' },
            { value: 'Internet research', label: 'Internet research' },
            { value: 'Order processing', label: 'Order processing' },
            { value: 'Quality assurance', label: 'Quality assurance' },
            { value: 'Records/database management', label: 'Records/database management' },
          ],
        },
        {
          title: 'Customer Support',
          options: [
            { value: 'Appointment scheduling', label: 'Appointment scheduling' },
            { value: 'Billing support', label: 'Billing support' },
            { value: 'Complaint resolution', label: 'Complaint resolution' },
            { value: 'Customer success', label: 'Customer success' },
            { value: 'Email support', label: 'Email support' },
            { value: 'Escalation', label: 'Escalation' },
            { value: 'Inbound customer service', label: 'Inbound customer service' },
            { value: 'Live-chat support', label: 'Live-chat support' },
            { value: 'Order support', label: 'Order support' },
            { value: 'Outbound customer service', label: 'Outbound customer service' },
            { value: 'Phone support', label: 'Phone support' },
            { value: 'Refund and return support', label: 'Refund and return support' },
            { value: 'Retention', label: 'Retention' },
            { value: 'Social-media support', label: 'Social-media support' },
          ],
        },
        {
          title: 'Sales & Outreach',
          options: [
            { value: 'Appointment setting', label: 'Appointment setting' },
            { value: 'Cold calling', label: 'Cold calling' },
            { value: 'Collections', label: 'Collections' },
            { value: 'Fundraising', label: 'Fundraising' },
            { value: 'Inbound sales', label: 'Inbound sales' },
            { value: 'Lead generation', label: 'Lead generation' },
            { value: 'Outbound sales', label: 'Outbound sales' },
            { value: 'Real-estate lead calling', label: 'Real-estate lead calling' },
            { value: 'Retention sales', label: 'Retention sales' },
            { value: 'Sales development', label: 'Sales development' },
            { value: 'Surveys', label: 'Surveys' },
            { value: 'Telesales', label: 'Telesales' },
            { value: 'Upselling/cross-selling', label: 'Upselling/cross-selling' },
          ],
        },
        {
          title: 'Industry Support',
          options: [
            { value: 'Banking/financial services', label: 'Banking/financial services' },
            { value: 'Education', label: 'Education' },
            { value: 'Government', label: 'Government' },
            { value: 'Healthcare', label: 'Healthcare' },
            { value: 'Insurance', label: 'Insurance' },
            { value: 'Legal intake', label: 'Legal intake' },
            { value: 'Logistics', label: 'Logistics' },
            { value: 'Property management', label: 'Property management' },
            { value: 'Real estate', label: 'Real estate' },
            { value: 'Retail', label: 'Retail' },
            { value: 'Telecommunications', label: 'Telecommunications' },
            { value: 'Travel/hospitality', label: 'Travel/hospitality' },
            { value: 'Utilities', label: 'Utilities' },
          ],
        },
        {
          title: 'Language Services',
          options: [
            { value: 'Community interpretation', label: 'Community interpretation' },
            { value: 'Consecutive interpretation', label: 'Consecutive interpretation' },
            { value: 'Document translation', label: 'Document translation' },
            { value: 'Legal interpretation', label: 'Legal interpretation' },
            { value: 'Localization', label: 'Localization' },
            { value: 'Medical interpretation', label: 'Medical interpretation' },
            { value: 'Over-the-phone interpretation', label: 'Over-the-phone interpretation' },
            { value: 'Proofreading', label: 'Proofreading' },
            { value: 'Subtitling', label: 'Subtitling' },
            { value: 'Transcription', label: 'Transcription' },
            { value: 'Video interpretation', label: 'Video interpretation' },
            { value: 'Website translation', label: 'Website translation' },
            { value: 'Written translation', label: 'Written translation' },
          ],
        },
      ],
      otherLabel: "Other - describe the work you're looking for",
      otherPlaceholder: "Describe the kind of work you're looking for...",
      error: 'Please select at least one type of work.',
    },

    step4: {
      title: 'Availability',
      desc: 'Step 4 of 4. Last step.',
      remoteQuestion: 'Are you interested in remote work?',
      selectPlaceholder: 'Select an option',
      scheduleLabel: 'Schedule preference',
      scheduleOptions: [
        { value: 'full-time', label: 'Full-time' },
        { value: 'part-time', label: 'Part-time' },
        { value: 'weekends', label: 'Weekends' },
        { value: 'flexible', label: 'Flexible' },
      ],
      shiftLabel: 'Shift preference',
      shiftOptions: [
        { value: 'morning', label: 'Morning' },
        { value: 'afternoon', label: 'Afternoon' },
        { value: 'evening', label: 'Evening' },
        { value: 'night', label: 'Night' },
        { value: 'any', label: 'Any shift' },
      ],
      startDate: { label: 'When can you start?', placeholder: 'e.g. Immediately, 2 weeks notice' },
      certificationsLabel: 'Certifications',
      agreeToContact: 'I agree Seco Response may contact me about my application and store my information to review for current and future opportunities.',
      emailAlerts: 'Also send me email alerts about new matching opportunities',
      emailAlertsNote: '(optional, unsubscribe anytime).',
      notice: 'Joining the Talent Network does not guarantee an interview, placement, or employment. If a project match arises, we will ask separately before referring your profile to a partner agency.',
      error: 'Please complete all required fields before submitting.',
      submit: 'Submit Application',
    },
  },

  

  home: {
    seo: {
      title: 'SECO Response',
      description: 'SECO GROUPE centers: registration, support and services.',
    },
    eyebrow: '',
    title: 'Welcome to SECO Response',
    lead: 'Our innovative technology empowers you to schedule work around your life, not the other way around. If you’re looking for choice, flexibility and freedom, register with us today.',
    primaryCta: { label: 'Get Started', url: '/register-now' },
    secondaryCta: { label: 'Find The Right Fit', url: '/login' },
    heroEndBar:[
      {
        icon: 'ri-headphone-fill',
        title: 'Professional Team',
        desc: 'Trained and dedicated agents on site.'
      },
      {
        icon: 'ri-headphone-fill',
        title: 'Scalable Solutions',
        desc: 'Support that grows with your business.'
      },
      {
        icon: 'ri-shield-user-fill',
        title: 'Quality & Security',
        desc: 'Reliable, secure and compliant.'
      },
      {
        icon: 'ri-focus-2-line',
        title: 'Customer Focused',
        desc: 'Real people delivering real results.'
      },
    ],
    section2:{
      title: 'Customer service outsourcing solutions we offer',
      cards: [
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-1.webp',
          title: 'Customer Support',
          desc: 'Inbound, outbound, chat, email, escalation, and retention roles across every channel'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-2.webp',
          title: 'Technical Support',
          desc: 'Tier 1 and Tier 2 troubleshooting, help desk, and remote assistance.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-3.webp',
          title: 'Bilingual & Language Services',
          desc: 'Interpretation, translation, and multilingual support roles.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-4.webp',
          title: 'Sales & Outreach',
          desc: 'Telesales, lead generation, appointment setting, and retention sales.'
        },
      ]
    }
  },

  about: {
    seo: {
      title: 'About | SECO Response',
      description: 'SECO Response, a call center services provider.',
    },
    heroSection: {
      title: 'Your Partner for Reliable Business Support and Customer Solutions',
      description: 'Seco Response helps organizations simplify operations, strengthen customer relationships, and access reliable professional support.',
      heroImages: [
        '/seco-centers/about/about-1_500.webp', 
        '/seco-centers/about/about-2_500.webp', 
        '/seco-centers/about/about-3_500.webp']
    },
    section2: {
      p1: 'We provide flexible business solutions designed to meet the evolving needs of companies, organizations, and entrepreneurs. Our services span customer support, virtual assistance, administrative services, multilingual communication, technical support, business process outsourcing, and specialized operational assistance. By combining skilled professionals with efficient processes and modern technology, we help our clients save time, improve productivity, and deliver better experiences.',
      p2: 'We work with businesses and organizations across industries, including healthcare, financial services, government, legal, retail, education, e-commerce, and professional services.',
      p3: 'At Seco Response, we focus on more than simply completing tasks. We aim to become a dependable extension of your team. Our commitment to quality, professionalism, confidentiality, responsiveness, and accountability allows our clients to focus on what they do best while we help manage the support behind the scenes.'
    },
    section3: {
      title: 'Why Seco Response ?',
      cards: [
        {
          icon: 'check',
          title: 'Reliable Support',
          desc: 'Professional teams you can depend on.'
        },
        {
          icon: 'check',
          title:'Flexible Solutions',
          desc: 'Services that can adapt as your organization grows.'
        },
        {
          icon: 'check',
          title: 'People & Technology',
          desc: 'The right combination of human expertise and modern tools.'
        },
        {
          icon: 'check',
          title: 'Quality & Accountability',
          desc: 'Consistent service with a strong focus on client satisfaction.'
        },
        {
          icon: 'check',
          title: 'Business-Focused',
          desc: 'Practical solutions designed to improve efficiency and support growth.'
        }
      ]
    },
    section4: {
      title: 'Our Mission',
      desc1: 'To provide dependable, innovative, and accessible business support solutions that help organizations operate more efficiently, serve their customers better, and achieve sustainable growth.',
      desc2: 'Seco Response builds a reusable, searchable pool of call-center and business-support talent, and refers qualified, consenting candidates to partner agencies when projects become available. We are not the employer of record for referred candidates - our partner agencies conduct interviews and make all hiring, offer, and compensation decisions.',
      cta: {
        content: 'Join Our Network',
        link: ''
      },
      desc3: 'Seco Response - Supporting Your Business. Empowering Your Growth.'
    }
  },

  faq: {
    seo: {
      title: 'FAQ | SECO Response',
      description: 'Answers to the most common questions about joining the SECO Response Talent Network.',
    },
    title: 'Frequently Asked Questions',
    lead: 'Everything you need to know about joining our Talent Network, what happens next and how we handle your information.',
    categories: [
      {
        title: 'Joining the Talent Network',
        items: [
          {
            question: 'Does joining the Talent Network guarantee me a job?',
            answer: 'No. Joining creates your profile so we can consider you for future projects. Hiring decisions are made by our partner agencies, and we cannot guarantee an interview, a placement, employment or a reply within a given timeframe.',
          },
          {
            question: 'Do I have to pay to apply or join?',
            answer: 'No. Applying and joining the Talent Network are free for candidates, at every step of the process.',
          },
          {
            question: 'Is a resume required?',
            answer: 'No. Attaching a resume is optional in the sign-up form. Some specific opportunities may ask for one, and this will always be clearly stated.',
          },
        ],
      },
      {
        title: 'After you apply',
        items: [
          {
            question: 'What happens once my profile is referred to a partner?',
            answer: 'The partner agency contacts you directly and runs its own interview process. SECO Response does not take part in interviews or in the hiring decision.',
          },
          {
            question: 'Can I update my information after applying?',
            answer: 'Yes. Contact us by email at any time and our team will update your profile for you.',
          },
        ],
      },
      {
        title: 'Your information',
        items: [
          {
            question: 'What information do you collect?',
            answer: 'Your name and contact details (phone number is optional), your country of residence, the languages you speak, your experience and the kinds of work you are interested in, and your availability. At this stage, we never ask for a social security number, bank details, date of birth or medical information.',
          },
          {
            question: 'Is my profile shared with partner agencies automatically?',
            answer: 'No. Your profile is only shared after you confirm your interest in a specific opportunity and give your consent.',
          },
          {
            question: 'How do I stop receiving emails from you?',
            answer: 'Email alerts about new opportunities are optional and separate from messages about your application. You can unsubscribe from alerts at any time.',
          },
        ],
      },
    ],
    cta: {
      title: 'Question not answered here?',
      desc: 'Our team is here to help. Join the network today or reach out to us directly.',
      primary: { label: 'Join our network', url: '/signup' },
      contact: 'Contact us',
    },
  },

  notFound: {
    seo: {
      title: 'Page not found — SECO GROUPE Centers',
      description: 'This page does not exist or has been moved.',
    },
    code: '404',
    title: 'Page not found',
    lead: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
};
