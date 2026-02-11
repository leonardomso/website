const content = `/* TEAM */
Developer: Leonardo Maldonado
Site: https://leonardomso.com
X/Twitter: @leonardomso
GitHub: leonardomso
Location: Valencia, Spain

/* SITE */
Standards: HTML5, CSS3
Framework: Next.js 16
Language: TypeScript
Styling: Tailwind CSS v4
Fonts: Geist Sans, Geist Mono
Tooling: Biome, Ultracite
Hosting: Vercel
Analytics: Simple Analytics
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
