import type { Handler } from "@netlify/functions";

const PROJECT_ID = "jegl25bs";
const DATASET = "production";

const handler: Handler = async () => {
  try {
    const query = encodeURIComponent(`
      *[
        _type == "post" &&
        defined(slug.current) &&
        defined(publishedAt)
      ] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt
      }
    `);

    const response = await fetch(
      `https://${PROJECT_ID}.api.sanity.io/v2025-05-01/data/query/${DATASET}?query=${query}`
    );

    if (!response.ok) {
      throw new Error(`Sanity request failed: ${response.status}`);
    }

    const data = await response.json();

    const staticPages = [
      {
        loc: "https://techwithzainabacademy.com/",
        changefreq: "daily",
        priority: "1.0",
      },
      {
        loc: "https://techwithzainabacademy.com/about",
        changefreq: "monthly",
        priority: "0.8",
      },
      {
        loc: "https://techwithzainabacademy.com/blog",
        changefreq: "daily",
        priority: "0.9",
      },
      {
        loc: "https://techwithzainabacademy.com/remote-jobs",
        changefreq: "weekly",
        priority: "0.8",
      },
      {
        loc: "https://techwithzainabacademy.com/faq",
        changefreq: "monthly",
        priority: "0.7",
      },
      {
        loc: "https://techwithzainabacademy.com/contact",
        changefreq: "monthly",
        priority: "0.7",
      },
      {
        loc: "https://techwithzainabacademy.com/privacy-policy",
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: "https://techwithzainabacademy.com/terms",
        changefreq: "yearly",
        priority: "0.3",
      },
      {
        loc: "https://techwithzainabacademy.com/disclaimer",
        changefreq: "yearly",
        priority: "0.3",
      },
    ];

    const staticUrls = staticPages
      .map(
        (page) => `
    <url>
      <loc>${page.loc}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
      )
      .join("");

    const blogUrls = data.result
      .map(
        (post: { slug: string; publishedAt: string }) => `
    <url>
      <loc>https://techwithzainabacademy.com/blog/${post.slug}</loc>
      <lastmod>${new Date(post.publishedAt).toISOString().split("T")[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>`
      )
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml; charset=UTF-8",
        "Cache-Control": "public, max-age=3600",
      },
      body: sitemap,
    };
  } catch (error) {
    console.error("Sitemap generation error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/xml; charset=UTF-8",
        "Cache-Control": "public, max-age=3600",
      },
      body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`,
    };
  }
};

export { handler };