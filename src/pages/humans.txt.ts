const content = `/* TEAM */
Developer: Leonardo Maldonado
Site: https://www.leonardomso.com
X/Twitter: @leonardomso
GitHub: leonardomso
Location: Valencia, Spain

/* SITE */
Standards: HTML5, CSS3
Framework: Astro 7
Language: TypeScript
Styling: Tailwind CSS v4
Fonts: Inter
Tooling: Biome
Hosting: Cloudflare Workers
Analytics: Simple Analytics
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
