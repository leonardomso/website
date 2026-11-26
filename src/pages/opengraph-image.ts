function svgEscape(value: string): string {
  return value
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;")
    .replace(/"/gu, "&quot;")
    .replace(/'/gu, "&#39;");
}

export function GET() {
  const title = "Leonardo Maldonado";
  const subtitle = "Senior full-stack engineer in Valencia. Building SetLuca.";

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <text x="80" y="160" fill="#8f8f8f" font-family="Inter, system-ui, sans-serif" font-size="22">leonardomso.com</text>
  <text x="80" y="280" fill="#ededed" font-family="Inter, system-ui, sans-serif" font-size="76" font-weight="500">${svgEscape(title)}</text>
  <text x="80" y="360" fill="#8f8f8f" font-family="Inter, system-ui, sans-serif" font-size="28">${svgEscape(subtitle)}</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
