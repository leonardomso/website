const SITE_URL = "https://leonardomso.com";

const index = {
  $schema: "https://agentskills.io/schemas/agent-skills-discovery-v0.2.0.json",
  skills: [
    {
      name: "llms-txt",
      type: "content",
      description:
        "Machine-readable profile of Leonardo Maldonado: bio, links, projects, skills, and experience.",
      url: `${SITE_URL}/llms.txt`,
    },
    {
      name: "rss-feed",
      type: "content",
      description: "RSS 2.0 feed of blog posts by Leonardo Maldonado.",
      url: `${SITE_URL}/feed.xml`,
    },
    {
      name: "humans-txt",
      type: "content",
      description: "Team and technology information for leonardomso.com.",
      url: `${SITE_URL}/humans.txt`,
    },
  ],
};

export function GET() {
  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
