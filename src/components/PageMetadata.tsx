import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { metadataForPath, serializeStructuredData, sharingImage, sharingImageAlt, structuredDataScriptId } from "../siteMetadata";

export default function PageMetadata() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const page = metadataForPath(pathname);
    const structuredData = serializeStructuredData(pathname);
    let script = document.head.querySelector<HTMLScriptElement>(`#${structuredDataScriptId}`);
    if (structuredData) {
      if (!script) {
        script = document.createElement("script");
        script.id = structuredDataScriptId;
        script.type = "application/ld+json";
        document.head.append(script);
      }
      script.textContent = structuredData;
    } else {
      script?.remove();
    }
    document.title = page.title;
    const setMeta = (key: string, value: string | undefined, property = false) => {
      const attribute = property ? "property" : "name";
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (value === undefined) { element?.remove(); return; }
      if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, key); document.head.append(element); }
      element.content = value;
    };
    setMeta("description", page.description);
    setMeta("robots", page.robots);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Michael A Nakfoor", true);
    setMeta("og:title", page.title, true);
    setMeta("og:description", page.description, true);
    setMeta("og:url", page.canonical, true);
    setMeta("og:image", sharingImage, true);
    setMeta("og:image:alt", sharingImageAlt, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", page.title);
    setMeta("twitter:description", page.description);
    setMeta("twitter:image", sharingImage);
    setMeta("twitter:image:alt", sharingImageAlt);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!page.canonical) { canonical?.remove(); return; }
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.append(canonical); }
    canonical.href = page.canonical;
  }, [pathname]);
  return null;
}
