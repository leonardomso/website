interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Maldonado",
  jobTitle: "Software Engineer",
  description:
    "Software engineer with 6+ years of experience. Built Spaceship's domain search platform at Namecheap. Creator of 33 JavaScript Concepts (63k+ stars).",
  url: "https://leonardomso.com",
  image: "https://leonardomso.com/opengraph-image",
  email: "leonardomso11@gmail.com",
  nationality: { "@type": "Country", name: "Brazil" },
  homeLocation: {
    "@type": "Place",
    name: "Valencia, Spain",
  },
  sameAs: [
    "https://github.com/leonardomso",
    "https://x.com/leonardomso",
    "https://www.linkedin.com/in/leonardomso/",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Zustand",
    "TanStack Query",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "React Native",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Leonardo Maldonado",
  url: "https://leonardomso.com",
  author: {
    "@type": "Person",
    name: "Leonardo Maldonado",
  },
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Leonardo Maldonado",
    url: "https://leonardomso.com",
    jobTitle: "Software Engineer",
    description:
      "Software engineer based in Valencia, Spain. Built Spaceship's domain search platform at Namecheap. Creator of 33 JavaScript Concepts.",
  },
  url: "https://leonardomso.com/about",
  name: "About Leonardo Maldonado",
};

export function blogPostSchema(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://leonardomso.com/blog/${post.slug}`,
    image: `https://leonardomso.com/blog/${post.slug}/opengraph-image`,
    author: {
      "@type": "Person",
      name: "Leonardo Maldonado",
      url: "https://leonardomso.com",
    },
    publisher: {
      "@type": "Person",
      name: "Leonardo Maldonado",
    },
  };
}
