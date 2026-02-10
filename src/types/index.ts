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
    slides: {
      id: string;
      headline: string;
      subheadline: string;
      description: string;
      image: string;
      ctaPrimary: string;
      ctaSecondary: string;
    }[];
  };
  platform: {
    title: string;
    subtitle: string;
    layers: {
      id: string;
      number: string;
      name: string;
      type: string;
      metaphor: string;
      description: string;
      icon: string;
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
    disclaimer: string;
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
  deploymentModel: {
    title: string;
    subtitle: string;
    existingStack: {
      title: string;
      description: string;
      subtitle: string;
      features: string[];
      idealFor: string;
    };
    cleanState: {
      title: string;
      description: string;
      subtitle: string;
      features: string[];
      idealFor: string;
    };
    ourApproach: {
      title: string;
      items: string[];
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
  valueFirst: {
    title: string;
    subtitle: string;
    cta: string;
    cards: {
      id: string;
      title: string;
      category: string;
      metric: string;
      metricLabel: string;
      description: string;
    }[];
  };
  untappedPotential: {
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    annualLoss: string;
    payback: string;
    roi: string;
    cards: {
      id: string;
      title: string;
      range: string;
      category: string;
      quote: string;
    }[];
  };
  journeyState: {
    question: string;
    title: string;
    states: {
      id: string;
      title: string;
      description: string;
    }[];
    nodes: {
      id: string;
      label: string;
      description: string;
    }[];
    traps: {
      id: string;
      label: string;
      description: string;
    }[];
  };
  operationalEnso: {
    badge: string;
    title: string;
    subtitle: string;
    tagline: string;
    description: string;
    ensoTitle: string;
    ensoSubheader: string;
    ensoSubtitle: string;
    manufacturingExplanation: string;
    definition: string;
    steps: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  gapAnalysis: {
    title: string;
    subtitle: string;
    reality: {
      title: string;
      items: string[];
    };
    good: {
      title: string;
      description: string;
      items: string[];
      footer: string;
    };
  };
  ensoApproach: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    items: string[];
    features: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  architectureDetails: {
    iot: {
      title: string;
      tagline: string;
      description: string;
      features: {
        title: string;
        description: string;
      }[];
    };
    armes: {
      title: string;
      tagline: string;
      description: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    arai: {
      title: string;
      tagline: string;
      description: string;
      points: {
        title: string;
        description: string;
      }[];
    };
    cwf: {
      title: string;
      tagline: string;
      description: string;
      comparison: {
        legacy: {
          label: string;
          value: string;
          steps: string;
        };
        ardictech: {
          label: string;
          value: string;
          steps: string;
        };
      };
      features: string[];
    };
    underTheHood: {
      title: string;
      categories: {
        name: string;
        items: string[];
      }[];
    };
  };
}
