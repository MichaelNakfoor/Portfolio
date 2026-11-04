import { profile } from "./data.ts";

export const siteOrigin = "https://michaelnakfoor.com";
export const siteTitle = "Michael A Nakfoor — Software Engineer · UI Designer";
export const sharingImage = `${siteOrigin}/hero-collage.jpg`;
export const sharingImageAlt = "Portfolio collage featuring EA Sports interfaces and Maestro Label Designer";

export const publicPages: Record<string, { title: string; description: string }> = {
  "/": { title: siteTitle, description: "Michael A Nakfoor's software engineering and UI design portfolio: EA Sports interfaces, Maestro Label Designer, and full-stack applications." },
  "/about": { title: "About — Michael A Nakfoor", description: "Michael A Nakfoor's background in software engineering, UI design, game interfaces, browser-based design tools, and full-stack applications." },
  "/resume": { title: "Professional Experience — Michael A Nakfoor", description: "Software engineering, application design, and UI development leadership experience at Online Labels Group and Electronic Arts." },
  "/work/ea": { title: "EA Sports — Michael A Nakfoor", description: "Interface design and development for Madden NFL, NCAA Football, Tiger Woods PGA Tour, and shared EA Sports UI systems." },
  "/work/ea/madden-nfl": { title: "Madden NFL — Michael A Nakfoor", description: "Designing and programming Madden NFL interfaces across console generations, including reusable controls and controller-specific navigation." },
  "/work/ea/central-ui": { title: "Central UI — Michael A Nakfoor", description: "Shared interface controls, development frameworks, and reusable UI systems supporting multiple EA Sports franchises." },
  "/work/ea/ncaa-football": { title: "NCAA Football — Michael A Nakfoor", description: "Interface design and development for NCAA Football, including team navigation, recruiting workflows, and console layouts." },
  "/work/ea/tiger-woods-pga-tour": { title: "Tiger Woods PGA Tour — Michael A Nakfoor", description: "UI design and development leadership for Tiger Woods PGA Tour, including game interfaces, challenges, and player confidence displays." },
  "/work/maestro": { title: "Maestro Label Designer — Michael A Nakfoor", description: "Maestro Label Designer: a TypeScript SVG editor, .NET backend, SQL Server persistence, and server-side PDF rendering." },
  "/work/maestro/browsing": { title: "Maestro: Browsing & Templates — Michael A Nakfoor", description: "A shared TypeScript browsing framework for saved designs, blank label products, and pre-designed templates in Maestro Label Designer." },
  "/work/maestro/tools": { title: "Maestro: Tools & Properties — Michael A Nakfoor", description: "SVG object editing, contextual property controls, and custom inline rich-text editing in Maestro Label Designer." },
  "/work/maestro/generators": { title: "Maestro: Integrated Generators — Michael A Nakfoor", description: "Barcode, QR code, nutrition-label, and variable-data generation workflows in Maestro Label Designer." },
  "/work/maestro/printing": { title: "Maestro: Printing & Production — Michael A Nakfoor", description: "Connecting SVG designs to PDF rendering, home printing, and commercial ordering workflows in Maestro Label Designer." },
  "/work/workshop": { title: "Mike's Workshop — Michael A Nakfoor", description: "Personal full-stack applications built with C#, Blazor, .NET, and SQL Server for weather, tasks, chicken keeping, and blackjack." },
};

export function metadataForPath(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = Object.hasOwn(publicPages, path) ? publicPages[path] : undefined;
  return {
    title: page?.title ?? "Page not found — Michael A Nakfoor",
    description: page?.description ?? "The requested portfolio page could not be found.",
    canonical: page ? siteOrigin + (path === "/" ? "/" : `${path}/`) : undefined,
    robots: page ? "index, follow" : "noindex, follow",
  };
}

const escapeAttribute = (value: string) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const structuredDataScriptId = "portfolio-structured-data";

export function structuredDataForPath(pathname: string) {
  if ((pathname.replace(/\/+$/, "") || "/") !== "/") return undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteOrigin}/#person`,
        name: profile.shortName,
        alternateName: ["Mike Nakfoor", "Michael A. Nakfoor"],
        url: `${siteOrigin}/`,
        jobTitle: "Software Engineer and UI Designer",
        sameAs: [profile.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${siteOrigin}/#website`,
        url: `${siteOrigin}/`,
        name: profile.name,
        alternateName: [profile.shortName, "Mike Nakfoor", "Michael A. Nakfoor"],
        author: { "@id": `${siteOrigin}/#person` },
        about: { "@id": `${siteOrigin}/#person` },
      },
    ],
  };
}

export function serializeStructuredData(pathname: string) {
  const data = structuredDataForPath(pathname);
  // Escape HTML delimiters so future profile values cannot end the script element.
  return data ? JSON.stringify(data).replaceAll("<", "\\u003c") : undefined;
}

export function renderMetadata(pathname: string) {
  const page = metadataForPath(pathname);
  const structuredData = serializeStructuredData(pathname);
  const tag = (key: string, value: string, property = false) => `<meta ${property ? "property" : "name"}="${key}" content="${escapeAttribute(value)}" />`;
  return [
    `<title>${escapeAttribute(page.title)}</title>`,
    tag("description", page.description), tag("robots", page.robots),
    ...(page.canonical ? [`<link rel="canonical" href="${page.canonical}" />`] : []),
    tag("og:type", "website", true), tag("og:site_name", "Michael A Nakfoor", true),
    tag("og:title", page.title, true), tag("og:description", page.description, true),
    ...(page.canonical ? [tag("og:url", page.canonical, true)] : []),
    tag("og:image", sharingImage, true), tag("og:image:alt", sharingImageAlt, true),
    tag("twitter:card", "summary_large_image"), tag("twitter:title", page.title),
    tag("twitter:description", page.description), tag("twitter:image", sharingImage),
    tag("twitter:image:alt", sharingImageAlt),
    ...(structuredData ? [`<script id="${structuredDataScriptId}" type="application/ld+json">${structuredData}</script>`] : []),
  ].join("\n    ");
}
