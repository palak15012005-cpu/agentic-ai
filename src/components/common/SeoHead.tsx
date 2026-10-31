import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'course';
  jsonLd?: Record<string, any>;
}

export function SeoHead({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  jsonLd
}: SeoProps) {
  const domain = 'https://mindwash.ai';
  const fullUrl = `${domain}${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`;
  const fullTitle = title.includes('Agentic AI Academy') ? title : `${title} | Agentic AI Academy`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or create meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', fullUrl, true);
    setMeta('og:type', type, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    // 3. Update Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullUrl);

    // 4. Update JSON-LD structured data
    let scriptTag = document.querySelector('script[data-seo="json-ld"]') as HTMLScriptElement;
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('data-seo', 'json-ld');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, description, fullUrl, type, jsonLd]);

  return null;
}
