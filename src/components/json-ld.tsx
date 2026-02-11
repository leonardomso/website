interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Maldonado",
  jobTitle: "Software Engineer",
  url: "https://leonardomso.com",
  image: "https://leonardomso.com/opengraph-image",
  sameAs: [
    "https://github.com/leonardomso",
    "https://x.com/leonardomso",
    "https://www.linkedin.com/in/leonardomso/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Namecheap",
    url: "https://www.namecheap.com",
  },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
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
