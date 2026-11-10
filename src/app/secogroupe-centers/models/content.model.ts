import { LinkItem } from './link-item.model';

/**
 * Formes de contenu partagées par toutes les pages du site.
 * Une locale = un fichier dans `config/content/` qui implémente `SiteContent`.
 *
 * Les URLs sont écrites sans préfixe de langue ni base (`/`, `/register-now`) :
 * `LanguageService.localize()` les convertit en adresses réelles.
 */

export interface NavItem {
  label: string;
  url?: string;
  children?: LinkItem[];
}

export interface Seo {
  title: string;
  description: string;
}

/** Option d'une liste (select, radio, case à cocher) : `value` est stable, `label` est traduit. */
export interface FormOption {
  value: string;
  label: string;
}

export interface FormField {
  label: string;
  placeholder: string;
  required?: string;
}

/** Textes du formulaire d'inscription en 4 étapes (`MultiStepForm`). */
export interface MultiStepFormContent {
  steps: string[];
  back: string;
  continue: string;
  optional: string;
  yes: string;
  no: string;

  step1: {
    title: string;
    desc: string;
    resume: string;
    firstName: FormField;
    lastName: FormField;
    email: FormField;
    phone: FormField;
    country: FormField;
  };

  step2: {
    title: string;
    desc: string;
    searchLabel: string;
    searchPlaceholder: string;
    proficiencyPlaceholder: string;
    proficiencyLevels: FormOption[];
    primary: string;
    /** Nom affiché de chaque langue proposée, par code. */
    languageNames: Record<string, string>;
    error: string;
  };

  step3: {
    title: string;
    desc: string;
    supportQuestion: string;
    supportOptions: FormOption[];
    workQuestion: string;
    workHint: string;
    categories: { title: string; options: FormOption[] }[];
    otherLabel: string;
    otherPlaceholder: string;
    error: string;
  };

  step4: {
    title: string;
    desc: string;
    remoteQuestion: string;
    selectPlaceholder: string;
    scheduleLabel: string;
    scheduleOptions: FormOption[];
    shiftLabel: string;
    shiftOptions: FormOption[];
    startDate: FormField;
    certificationsLabel: string;
    agreeToContact: string;
    emailAlerts: string;
    emailAlertsNote: string;
    notice: string;
    error: string;
    submit: string;
  };
}

/** Pages qui ont leur propre bloc `seo` (clé `data.seo` des routes). */
export type SeoPage = 'home' | 'about' | 'faq' | 'signin' | 'notFound';

export interface SiteContent {
  /** Nom affiché de la langue, utilisé par le sélecteur (« Français », « English »). */
  languageName: string;

  chatbotIcon: string;

  nav: NavItem[];

  header: {
    skipToContent: string;
    mainNav: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    /** Libellé accessible du sélecteur de langue : « Langue ». */
    language: string;
    actions: {
      register: LinkItem;
      login: LinkItem;
    };
  };

  footer: {
    tagline: string;
    rights: string;
    contact: string;
  };

  signin: {
    seo: Seo;
    title: string;
    email: FormField;
    password: FormField;
    forgotPassword: string;
    keepSignedIn: string;
    submit: string;
    or: string;
    google: string;
  }

  form: MultiStepFormContent;

  home: {
    seo: Seo;
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    heroEndBar:{icon: string, title: string, desc: string}[]
    section2:{
      title: string,
      cards: {
        icon: string;
        cover: string;
        title: string;
        desc: string;
      }[]
    }
  };


  about:{
    seo: Seo;
    heroSection:{
      title: string;
      description: string;
      heroImages: string[]
    }
    section2: {
      p1: string
      p2: string
      p3: string
    }

    section3:{
      title: string
      cards: {
        icon: string
        title: string
        desc: string
      }[]
    }

    section4: {
      title: string
      desc1: string
      desc2: string
      cta:{
        content: string
        link: string
      }

      desc3: string
    }
  };

  faq: {
    seo: Seo;
    title: string;
    lead: string;
    categories: {
      title: string;
      items: { question: string; answer: string }[];
    }[];
    cta: {
      title: string;
      desc: string;
      primary: LinkItem;
      /** Libellé du lien e-mail (adresse lue dans `CompanyService`). */
      contact: string;
    };
  };

  notFound: {
    seo: Seo;
    code: string;
    title: string;
    lead: string;
    back: string;
  };
}
