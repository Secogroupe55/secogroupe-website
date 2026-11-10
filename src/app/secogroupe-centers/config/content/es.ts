import { SiteContent } from '../../models/content.model';

export const es: SiteContent = {

  chatbotIcon: 'seco-centers/chatbot-icon.webp',

  languageName: 'Español',

  nav: [
    { label: 'Inicio', url: '/'},
    { label: 'Nosotros', url: '/about'},
    { label: 'Preguntas frecuentes', url: '/faq'},
    // { label: 'Servicios', url: '/'}

  ],

  header: {
    skipToContent: 'Saltar al contenido principal',
    mainNav: 'Navegación principal',
    homeAria: 'SECO GROUPE Centers — inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    actions: {
      register: { label: 'Registrarse', url: '/signup' },
      login: { label: 'Iniciar sesión', url: '/signin' },
    },
  },

  footer: {
    tagline: 'Una red de centros al servicio de nuestros equipos y nuestros clientes.',
    rights: 'Todos los derechos reservados.',
    contact: 'Contáctenos',
  },

  signin:{
    seo:{
      title: 'Iniciar sesión | SECO Response',
      description: 'Inicie sesión en su cuenta de SECO Response.'
    },
    title: 'Iniciar sesión',
    email: { label: 'Correo electrónico', placeholder: 'Su correo electrónico' },
    password: { label: 'Contraseña', placeholder: 'Su contraseña' },
    forgotPassword: '¿Olvidó su contraseña?',
    keepSignedIn: 'Mantener la sesión iniciada',
    submit: 'Iniciar sesión',
    or: 'o',
    google: 'Iniciar sesión con Google',
  },

  form: {
    steps: ['Información básica', 'Idiomas', 'Experiencia', 'Disponibilidad'],
    back: 'Atrás',
    continue: 'Continuar',
    optional: '(opcional)',
    yes: 'Sí',
    no: 'No',

    step1: {
      title: 'Información básica',
      desc: 'Paso 1 de 4. El número de teléfono es opcional. Adjunte su currículum y completaremos lo que podamos a continuación - aún podrá editar todo.',
      resume: 'Currículum',
      firstName: { label: 'Nombre', placeholder: 'Su nombre', required: 'El nombre es obligatorio.' },
      lastName: { label: 'Apellido', placeholder: 'Su apellido', required: 'El apellido es obligatorio.' },
      email: { label: 'Correo electrónico', placeholder: 'Su correo electrónico', required: 'El correo electrónico es obligatorio.' },
      phone: { label: 'Teléfono', placeholder: 'Su número de teléfono' },
      country: { label: 'País de residencia', placeholder: 'Empiece a escribir o haga clic para buscar', required: 'El país de residencia es obligatorio.' },
    },

    step2: {
      title: 'Idiomas',
      desc: 'Paso 2 de 4. Seleccione todos los idiomas que habla. Marque uno o más como principales - los idiomas principales no requieren indicar el nivel.',
      searchLabel: 'Buscar idiomas',
      searchPlaceholder: 'Escriba para filtrar, p. ej. "Inglés"',
      proficiencyPlaceholder: 'Nivel',
      proficiencyLevels: [
        { value: 'basic', label: 'Básico' },
        { value: 'conversational', label: 'Conversacional' },
        { value: 'professional', label: 'Profesional' },
        { value: 'fluent', label: 'Fluido' },
        { value: 'native', label: 'Nativo / Bilingüe' },
      ],
      primary: 'Principal',
      languageNames: { en: 'Inglés', fr: 'Francés', es: 'Español' },
      error: 'Seleccione al menos un idioma.',
    },

    step3: {
      title: 'Experiencia',
      desc: 'Paso 3 de 4.',
      supportQuestion: '¿Tiene experiencia en atención al cliente o soporte?',
      supportOptions: [
        { value: 'yes', label: 'Sí' },
        { value: 'no', label: 'No' },
        { value: 'gaining', label: 'Adquiriendo experiencia actualmente' },
      ],
      workQuestion: '¿Qué tipos de trabajo le interesan?',
      workHint: 'Seleccione todas las categorías que correspondan.',
      categories: [
        {
          title: 'Soporte técnico',
          options: [
            { value: 'Account/password support', label: 'Soporte de cuentas / contraseñas' },
            { value: 'Connectivity troubleshooting', label: 'Resolución de problemas de conectividad' },
            { value: 'Hardware troubleshooting', label: 'Resolución de problemas de hardware' },
            { value: 'Help-desk', label: 'Mesa de ayuda' },
            { value: 'Mobile-device support', label: 'Soporte de dispositivos móviles' },
            { value: 'Product support', label: 'Soporte de productos' },
            { value: 'Remote assistance', label: 'Asistencia remota' },
            { value: 'Software troubleshooting', label: 'Resolución de problemas de software' },
            { value: 'Ticket management', label: 'Gestión de tickets' },
            { value: 'Tier 1 support', label: 'Soporte de nivel 1' },
            { value: 'Tier 2 support', label: 'Soporte de nivel 2' },
          ],
        },
        {
          title: 'Asistencia virtual',
          options: [
            { value: 'Administrative assistance', label: 'Asistencia administrativa' },
            { value: 'Appointment management', label: 'Gestión de citas' },
            { value: 'Calendar management', label: 'Gestión de agenda' },
            { value: 'CRM management', label: 'Gestión de CRM' },
            { value: 'Data entry', label: 'Captura de datos' },
            { value: 'Document preparation', label: 'Preparación de documentos' },
            { value: 'Email management', label: 'Gestión de correo electrónico' },
            { value: 'Executive assistance', label: 'Asistencia ejecutiva' },
            { value: 'Follow-up', label: 'Seguimiento' },
            { value: 'General assistance', label: 'Asistencia general' },
            { value: 'Project coordination', label: 'Coordinación de proyectos' },
            { value: 'Reports', label: 'Informes' },
            { value: 'Research', label: 'Investigación' },
            { value: 'Travel management', label: 'Gestión de viajes' },
          ],
        },
        {
          title: 'Comercio electrónico',
          options: [
            { value: 'Amazon support', label: 'Soporte de Amazon' },
            { value: 'Buyer support', label: 'Soporte a compradores' },
            { value: 'Inventory support', label: 'Soporte de inventario' },
            { value: 'Marketplace support', label: 'Soporte de marketplace' },
            { value: 'Order tracking', label: 'Seguimiento de pedidos' },
            { value: 'Payment support', label: 'Soporte de pagos' },
            { value: 'Product listing', label: 'Publicación de productos' },
            { value: 'Product-information support', label: 'Soporte de información de productos' },
            { value: 'Returns/refunds', label: 'Devoluciones / reembolsos' },
            { value: 'Seller support', label: 'Soporte a vendedores' },
            { value: 'Shipping support', label: 'Soporte de envíos' },
            { value: 'Shopify support', label: 'Soporte de Shopify' },
          ],
        },
        {
          title: 'Back office',
          options: [
            { value: 'Application processing', label: 'Procesamiento de solicitudes' },
            { value: 'Claims processing', label: 'Procesamiento de reclamaciones' },
            { value: 'Content moderation', label: 'Moderación de contenido' },
            { value: 'Data entry/verification', label: 'Captura / verificación de datos' },
            { value: 'Document processing', label: 'Procesamiento de documentos' },
            { value: 'Email processing', label: 'Procesamiento de correos electrónicos' },
            { value: 'Form review', label: 'Revisión de formularios' },
            { value: 'Internet research', label: 'Investigación en Internet' },
            { value: 'Order processing', label: 'Procesamiento de pedidos' },
            { value: 'Quality assurance', label: 'Control de calidad' },
            { value: 'Records/database management', label: 'Gestión de registros / bases de datos' },
          ],
        },
        {
          title: 'Atención al cliente',
          options: [
            { value: 'Appointment scheduling', label: 'Programación de citas' },
            { value: 'Billing support', label: 'Soporte de facturación' },
            { value: 'Complaint resolution', label: 'Resolución de quejas' },
            { value: 'Customer success', label: 'Éxito del cliente' },
            { value: 'Email support', label: 'Soporte por correo electrónico' },
            { value: 'Escalation', label: 'Escalamiento' },
            { value: 'Inbound customer service', label: 'Atención al cliente entrante' },
            { value: 'Live-chat support', label: 'Soporte por chat en vivo' },
            { value: 'Order support', label: 'Soporte de pedidos' },
            { value: 'Outbound customer service', label: 'Atención al cliente saliente' },
            { value: 'Phone support', label: 'Soporte telefónico' },
            { value: 'Refund and return support', label: 'Soporte de devoluciones y reembolsos' },
            { value: 'Retention', label: 'Retención' },
            { value: 'Social-media support', label: 'Soporte en redes sociales' },
          ],
        },
        {
          title: 'Ventas y prospección',
          options: [
            { value: 'Appointment setting', label: 'Concertación de citas' },
            { value: 'Cold calling', label: 'Llamadas en frío' },
            { value: 'Collections', label: 'Cobranza' },
            { value: 'Fundraising', label: 'Recaudación de fondos' },
            { value: 'Inbound sales', label: 'Ventas entrantes' },
            { value: 'Lead generation', label: 'Generación de clientes potenciales' },
            { value: 'Outbound sales', label: 'Ventas salientes' },
            { value: 'Real-estate lead calling', label: 'Prospección inmobiliaria' },
            { value: 'Retention sales', label: 'Ventas de retención' },
            { value: 'Sales development', label: 'Desarrollo de ventas' },
            { value: 'Surveys', label: 'Encuestas' },
            { value: 'Telesales', label: 'Televentas' },
            { value: 'Upselling/cross-selling', label: 'Venta adicional / cruzada' },
          ],
        },
        {
          title: 'Soporte por industria',
          options: [
            { value: 'Banking/financial services', label: 'Banca / servicios financieros' },
            { value: 'Education', label: 'Educación' },
            { value: 'Government', label: 'Gobierno' },
            { value: 'Healthcare', label: 'Salud' },
            { value: 'Insurance', label: 'Seguros' },
            { value: 'Legal intake', label: 'Recepción legal' },
            { value: 'Logistics', label: 'Logística' },
            { value: 'Property management', label: 'Administración de propiedades' },
            { value: 'Real estate', label: 'Bienes raíces' },
            { value: 'Retail', label: 'Comercio minorista' },
            { value: 'Telecommunications', label: 'Telecomunicaciones' },
            { value: 'Travel/hospitality', label: 'Viajes / hotelería' },
            { value: 'Utilities', label: 'Servicios públicos' },
          ],
        },
        {
          title: 'Servicios lingüísticos',
          options: [
            { value: 'Community interpretation', label: 'Interpretación comunitaria' },
            { value: 'Consecutive interpretation', label: 'Interpretación consecutiva' },
            { value: 'Document translation', label: 'Traducción de documentos' },
            { value: 'Legal interpretation', label: 'Interpretación legal' },
            { value: 'Localization', label: 'Localización' },
            { value: 'Medical interpretation', label: 'Interpretación médica' },
            { value: 'Over-the-phone interpretation', label: 'Interpretación telefónica' },
            { value: 'Proofreading', label: 'Corrección de textos' },
            { value: 'Subtitling', label: 'Subtitulado' },
            { value: 'Transcription', label: 'Transcripción' },
            { value: 'Video interpretation', label: 'Interpretación por video' },
            { value: 'Website translation', label: 'Traducción de sitios web' },
            { value: 'Written translation', label: 'Traducción escrita' },
          ],
        },
      ],
      otherLabel: 'Otro - describa el trabajo que busca',
      otherPlaceholder: 'Describa el tipo de trabajo que busca...',
      error: 'Seleccione al menos un tipo de trabajo.',
    },

    step4: {
      title: 'Disponibilidad',
      desc: 'Paso 4 de 4. Último paso.',
      remoteQuestion: '¿Le interesa el trabajo remoto?',
      selectPlaceholder: 'Seleccione una opción',
      scheduleLabel: 'Preferencia de horario',
      scheduleOptions: [
        { value: 'full-time', label: 'Tiempo completo' },
        { value: 'part-time', label: 'Medio tiempo' },
        { value: 'weekends', label: 'Fines de semana' },
        { value: 'flexible', label: 'Flexible' },
      ],
      shiftLabel: 'Preferencia de turno',
      shiftOptions: [
        { value: 'morning', label: 'Mañana' },
        { value: 'afternoon', label: 'Tarde' },
        { value: 'evening', label: 'Noche (temprano)' },
        { value: 'night', label: 'Madrugada' },
        { value: 'any', label: 'Cualquier turno' },
      ],
      startDate: { label: '¿Cuándo puede empezar?', placeholder: 'p. ej. De inmediato, con 2 semanas de preaviso' },
      certificationsLabel: 'Certificaciones',
      agreeToContact: 'Acepto que Seco Response me contacte sobre mi solicitud y conserve mi información para evaluarla en oportunidades actuales y futuras.',
      emailAlerts: 'Envíenme también alertas por correo electrónico sobre nuevas oportunidades que coincidan con mi perfil',
      emailAlertsNote: '(opcional, puede darse de baja en cualquier momento).',
      notice: 'Unirse a la Red de Talento no garantiza una entrevista, una colocación ni un empleo. Si surge un proyecto adecuado, le pediremos su autorización antes de remitir su perfil a una agencia asociada.',
      error: 'Complete todos los campos obligatorios antes de enviar.',
      submit: 'Enviar solicitud',
    },
  },



  home: {
    seo: {
      title: 'SECO Response',
      description: 'Centros SECO GROUPE: registro, acompañamiento y servicios.',
    },
    eyebrow: '',
    title: 'Bienvenido a SECO Response',
    lead: 'Nuestra tecnología innovadora le permite organizar su trabajo en torno a su vida, y no al revés. Si busca opciones, flexibilidad y libertad, regístrese con nosotros hoy mismo.',
    primaryCta: { label: 'Comenzar', url: '/register-now' },
    secondaryCta: { label: 'Encuentre su lugar ideal', url: '/login' },
    heroEndBar:[
      {
        icon: 'ri-headphone-fill',
        title: 'Equipo profesional',
        desc: 'Agentes capacitados y comprometidos en sitio.'
      },
      {
        icon: 'ri-headphone-fill',
        title: 'Soluciones escalables',
        desc: 'Un soporte que crece con su empresa.'
      },
      {
        icon: 'ri-shield-user-fill',
        title: 'Calidad y seguridad',
        desc: 'Confiable, seguro y conforme a las normas.'
      },
      {
        icon: 'ri-focus-2-line',
        title: 'Enfoque en el cliente',
        desc: 'Personas reales que logran resultados reales.'
      },
    ],
    section2:{
      title: 'Soluciones de externalización de atención al cliente que ofrecemos',
      cards: [
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-1.webp',
          title: 'Atención al cliente',
          desc: 'Llamadas entrantes y salientes, chat, correo electrónico, escalamiento y retención en todos los canales.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-2.webp',
          title: 'Soporte técnico',
          desc: 'Resolución de problemas de nivel 1 y 2, mesa de ayuda y asistencia remota.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-3.webp',
          title: 'Servicios bilingües y lingüísticos',
          desc: 'Interpretación, traducción y soporte multilingüe.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-4.webp',
          title: 'Ventas y prospección',
          desc: 'Televentas, generación de clientes potenciales, programación de citas y ventas de retención.'
        },
      ]
    }
  },

  about: {
    seo: {
      title: 'Nosotros | SECO Response',
      description: 'SECO Response, proveedor de servicios de centro de llamadas.',
    },
    heroSection: {
      title: 'Su socio para un soporte empresarial confiable y soluciones para sus clientes',
      description: 'Seco Response ayuda a las organizaciones a simplificar sus operaciones, fortalecer las relaciones con sus clientes y acceder a un soporte profesional confiable.',
      heroImages: [
        '/seco-centers/about/about-1_500.webp',
        '/seco-centers/about/about-2_500.webp',
        '/seco-centers/about/about-3_500.webp']
    },
    section2: {
      p1: 'Ofrecemos soluciones empresariales flexibles diseñadas para responder a las necesidades cambiantes de empresas, organizaciones y emprendedores. Nuestros servicios abarcan atención al cliente, asistencia virtual, servicios administrativos, comunicación multilingüe, soporte técnico, externalización de procesos de negocio y asistencia operativa especializada. Al combinar profesionales calificados con procesos eficientes y tecnología moderna, ayudamos a nuestros clientes a ahorrar tiempo, mejorar su productividad y ofrecer mejores experiencias.',
      p2: 'Trabajamos con empresas y organizaciones de todos los sectores, incluidos salud, servicios financieros, gobierno, legal, comercio minorista, educación, comercio electrónico y servicios profesionales.',
      p3: 'En Seco Response no nos limitamos a completar tareas. Buscamos convertirnos en una extensión confiable de su equipo. Nuestro compromiso con la calidad, el profesionalismo, la confidencialidad, la capacidad de respuesta y la responsabilidad permite a nuestros clientes concentrarse en lo que mejor saben hacer mientras nosotros gestionamos el soporte tras bastidores.'
    },
    section3: {
      title: '¿Por qué Seco Response?',
      cards: [
        {
          icon: 'check',
          title: 'Soporte confiable',
          desc: 'Equipos profesionales con los que puede contar.'
        },
        {
          icon: 'check',
          title:'Soluciones flexibles',
          desc: 'Servicios que se adaptan al crecimiento de su organización.'
        },
        {
          icon: 'check',
          title: 'Personas y tecnología',
          desc: 'La combinación adecuada de experiencia humana y herramientas modernas.'
        },
        {
          icon: 'check',
          title: 'Calidad y responsabilidad',
          desc: 'Un servicio constante con un fuerte enfoque en la satisfacción del cliente.'
        },
        {
          icon: 'check',
          title: 'Enfoque empresarial',
          desc: 'Soluciones prácticas diseñadas para mejorar la eficiencia e impulsar el crecimiento.'
        }
      ]
    },
    section4: {
      title: 'Nuestra misión',
      desc1: 'Brindar soluciones de soporte empresarial confiables, innovadoras y accesibles que ayuden a las organizaciones a operar con mayor eficiencia, atender mejor a sus clientes y lograr un crecimiento sostenible.',
      desc2: 'Seco Response crea una reserva reutilizable y consultable de talento en centros de llamadas y soporte empresarial, y remite candidatos calificados que han dado su consentimiento a agencias asociadas cuando surgen proyectos. No somos el empleador oficial de los candidatos remitidos: nuestras agencias asociadas realizan las entrevistas y toman todas las decisiones de contratación, oferta y remuneración.',
      cta: {
        content: 'Únase a nuestra red',
        link: ''
      },
      desc3: 'Seco Response - Apoyando su negocio. Impulsando su crecimiento.'
    }
  },

  faq: {
    seo: {
      title: 'Preguntas frecuentes | SECO Response',
      description: 'Respuestas a las preguntas más frecuentes sobre cómo unirse a la Red de Talento de SECO Response.',
    },
    title: 'Preguntas frecuentes',
    lead: 'Todo lo que necesita saber sobre cómo unirse a nuestra Red de Talento, los pasos siguientes y cómo tratamos su información.',
    categories: [
      {
        title: 'Unirse a la Red de Talento',
        items: [
          {
            question: '¿Unirme a la Red de Talento me garantiza un empleo?',
            answer: 'No. Al unirse se crea su perfil para que podamos tenerle en cuenta en futuros proyectos. Las decisiones de contratación las toman nuestras agencias asociadas, y no podemos garantizar una entrevista, una colocación, un empleo ni una respuesta en un plazo determinado.',
          },
          {
            question: '¿Tengo que pagar para postularme o unirme?',
            answer: 'No. Postularse y unirse a la Red de Talento es gratuito para los candidatos, en todas las etapas del proceso.',
          },
          {
            question: '¿Es obligatorio el currículum?',
            answer: 'No. Adjuntar un currículum es opcional en el formulario de registro. Algunas oportunidades específicas pueden solicitarlo, y siempre se indicará claramente.',
          },
        ],
      },
      {
        title: 'Después de postularse',
        items: [
          {
            question: '¿Qué pasa cuando mi perfil se remite a un socio?',
            answer: 'La agencia asociada se pone en contacto con usted directamente y lleva a cabo su propio proceso de entrevistas. SECO Response no participa en las entrevistas ni en la decisión de contratación.',
          },
          {
            question: '¿Puedo actualizar mi información después de postularme?',
            answer: 'Sí. Contáctenos por correo electrónico en cualquier momento y nuestro equipo actualizará su perfil.',
          },
        ],
      },
      {
        title: 'Su información',
        items: [
          {
            question: '¿Qué información recopilan?',
            answer: 'Su nombre y datos de contacto (el teléfono es opcional), su país de residencia, los idiomas que habla, su experiencia y los tipos de trabajo que le interesan, y su disponibilidad. En esta etapa nunca solicitamos número de seguro social, datos bancarios, fecha de nacimiento ni información médica.',
          },
          {
            question: '¿Mi perfil se comparte automáticamente con las agencias asociadas?',
            answer: 'No. Su perfil solo se comparte después de que usted confirme su interés en una oportunidad concreta y dé su consentimiento.',
          },
          {
            question: '¿Cómo dejo de recibir sus correos electrónicos?',
            answer: 'Las alertas por correo electrónico sobre nuevas oportunidades son opcionales e independientes de los mensajes sobre su solicitud. Puede darse de baja de las alertas en cualquier momento.',
          },
        ],
      },
    ],
    cta: {
      title: '¿No encuentra su pregunta?',
      desc: 'Nuestro equipo está aquí para ayudarle. Únase a la red hoy mismo o contáctenos directamente.',
      primary: { label: 'Únase a nuestra red', url: '/signup' },
      contact: 'Contáctenos',
    },
  },

  notFound: {
    seo: {
      title: 'Página no encontrada — SECO GROUPE Centers',
      description: 'Esta página no existe o ha sido movida.',
    },
    code: '404',
    title: 'Página no encontrada',
    lead: 'La página que busca no existe o ha sido movida.',
    back: 'Volver al inicio',
  },
};
