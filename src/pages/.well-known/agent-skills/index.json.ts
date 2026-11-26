const SITE_URL = "https://www.leonardomso.com";

const index = {
  $schema: "https://agentskills.io/schemas/agent-skills-discovery-v0.2.0.json",
  skills: [
    {
      name: "llms-txt",
      type: "content",
      description:
        "Index of Leonardo Maldonado's site for language models: a short bio, current projects, and links to a Markdown version of every page.",
      url: `${SITE_URL}/llms.txt`,
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
