export type Locale = "en" | "tr";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    platform: string;
    caseStudy: string;
    features: string;
    technology: string;
    roi: string;
    contact: string;
    bookDemo: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustIndicators: string[];
  };
  platform: {
    title: string;
    subtitle: string;
    layers: {
      id: string;
      name: string;
      tagline: string;
      description: string;
      benefits: string[];
    }[];
  };
  caseStudy: {
    title: string;
    subtitle: string;
    company: string;
    challenge: string;
    solution: string;
    metrics: {
      value: string;
      label: string;
    }[];
    quote: {
      text: string;
      author: string;
      role: string;
    };
    cta: string;
  };
  roi: {
    title: string;
    subtitle: string;
    inputs: {
      productionLines: string;
      downtimeHours: string;
      hourlyCost: string;
      defectRate: string;
    };
    outputs: {
      totalSavings: string;
      downtimeSavings: string;
      qualitySavings: string;
      roiTimeline: string;
      months: string;
    };
    cta: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  techStack: {
    title: string;
    subtitle: string;
    layers: {
      name: string;
      description: string;
      technologies: string[];
    }[];
    certifications: string[];
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      quote: string;
      name: string;
      role: string;
      company: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      fullName: string;
      email: string;
      company: string;
      jobTitle: string;
      phone: string;
      facilities: string;
      industry: string;
      message: string;
      preferredDate: string;
    };
    facilitiesOptions: string[];
    industryOptions: string[];
    submit: string;
    success: string;
    error: string;
    privacy: string;
    required: string;
    validation: {
      emailInvalid: string;
      required: string;
    };
  };
  footer: {
    tagline: string;
    location: string;
    quickLinks: string;
    resources: string;
    legal: string;
    links: {
      about: string;
      platform: string;
      caseStudies: string;
      blog: string;
      contact: string;
      careers: string;
    };
    legalLinks: {
      privacy: string;
      terms: string;
      cookies: string;
    };
    newsletter: {
      title: string;
      placeholder: string;
      subscribe: string;
      gdpr: string;
    };
    copyright: string;
  };
}
