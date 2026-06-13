const robotsTxt = `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://www.anpi-watch.app/sitemap.xml
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
