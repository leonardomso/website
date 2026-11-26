interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}

const SITE_URL = "https://www.leonardomso.com";
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Leonardo Maldonado",
  givenName: "Leonardo",
  familyName: "Maldonado",
  jobTitle: "Senior Full-Stack Engineer",
  description:
    "Senior full-stack engineer in Valencia, Spain, with 8+ years of remote experience, mostly in TypeScript. Previously the only frontend engineer on Spaceship's domain search at Namecheap (3M+ domains sold). Creator of 33 JavaScript Concepts (66K GitHub stars). Building SetLuca, a DM sales platform for creators and coaches.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  email: "mailto:leonardomso11@gmail.com",
  telephone: "+34674271313",
  nationality: { "@type": "Country", name: "Brazil" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valencia",
    addressCountry: "ES",
  },
  homeLocation: {
    "@type": "Place",
    name: "Valencia, Spain",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Universidade de Franca",
    },
    {
      "@type": "EducationalOrganization",
      name: "Centro Universitário Senac",
    },
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Portuguese", alternateName: "pt" },
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Spanish", alternateName: "es" },
  ],
  sameAs: [
    "https://github.com/leonardomso",
    "https://x.com/leonardomso",
    "https://www.linkedin.com/in/leonardomso/",
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "Go",
    "Rust",
    "React",
    "Next.js",
    "TanStack Start",
    "TanStack Query",
    "React Native",
    "Node.js",
    "Bun",
    "GraphQL",
    "PostgreSQL",
    "Drizzle",
    "Hono",
    "Cloudflare Workers",
    "Inngest",
    "Redis",
    "WebSocket",
    "AI Agents",
    "MCP (Model Context Protocol)",
    "LLM Integration",
    "Open Source",
    "Full-Stack Development",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Leonardo Maldonado",
  url: SITE_URL,
  inLanguage: "en",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${SITE_URL}/about`,
  name: "About Leonardo Maldonado",
  inLanguage: "en",
  mainEntity: { "@id": PERSON_ID },
};

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function softwareApplicationSchema(app: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  programmingLanguage?: string | string[];
  /** Set only for open-source projects; implies a free offer. */
  license?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.description,
    url: app.url,
    applicationCategory: app.applicationCategory,
    operatingSystem: app.operatingSystem ?? "Cross-platform",
    ...(app.programmingLanguage
      ? { programmingLanguage: app.programmingLanguage }
      : {}),
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    ...(app.license
      ? {
          license: app.license,
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }
      : {}),
  };
}
