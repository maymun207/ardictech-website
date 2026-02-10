export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ARDICTECH",
    url: "https://ardictech.com.tr",
    logo: "https://ardictech.com.tr/logo.png",
    description:
      "AI-powered digital transformation platform for manufacturing excellence.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    sameAs: [
      "https://linkedin.com/company/ardictech",
      "https://twitter.com/ardictech",
      "https://youtube.com/@ardictech",
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ARDICTECH",
    url: "https://ardictech.com.tr",
    telephone: "+90-212-000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0082,
      longitude: 28.9784,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$$$",
  };
}
