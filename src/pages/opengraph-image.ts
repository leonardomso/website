function svgEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function GET() {
  const title = "Leonardo Maldonado";
  const subtitle =
    "Sole engineer on Spaceship's domain search at Namecheap, helped sell 3M+ domains.";

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#050505"/>
  <text x="80" y="160" fill="#666" font-family="system-ui, sans-serif" font-size="18" letter-spacing="4">SOFTWARE ENGINEER · VALENCIA, SPAIN</text>
  <text x="80" y="280" fill="#ededed" font-family="system-ui, sans-serif" font-size="76" font-weight="600">${svgEscape(title)}</text>
  <text x="80" y="360" fill="#888" font-family="system-ui, sans-serif" font-size="28">${svgEscape(subtitle)}</text>
  <text x="80" y="570" fill="#666" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="20">www.leonardomso.com</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
