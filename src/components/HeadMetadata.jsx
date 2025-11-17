import { useEffect } from 'react';

const SITE_NAME = 'Ted Dickey Portfolio';
const SITE_URL = 'https://teddickey.com';
const DEFAULT_IMAGE = `${SITE_URL}/favicon-td.svg`;
const SCHEMA_SCRIPT_ID = 'head-metadata-schema';

function ensureMetaTag(attribute, value) {
  if (typeof document === 'undefined') return null;
  let tag = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }
  return tag;
}

function HeadMetadata({
  title,
  description,
  canonical,
  keywords,
  ogImage,
  ogType = 'website',
  schema,
}) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = pageTitle;

    const updateMeta = (selector, content, attr = 'name') => {
      if (!content) return;
      const meta = ensureMetaTag(attr, selector);
      if (meta) meta.setAttribute('content', content);
    };

    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description, 'property');
      updateMeta('twitter:description', description);
    }
    if (keywords) {
      updateMeta('keywords', keywords);
    }

    updateMeta('og:title', pageTitle, 'property');
    updateMeta('twitter:title', pageTitle);
    updateMeta('og:type', ogType, 'property');

    const image = ogImage || DEFAULT_IMAGE;
    updateMeta('og:image', image, 'property');
    updateMeta('twitter:image', image);

    const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
    updateMeta('og:url', url, 'property');

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);

    const existingSchema = document.getElementById(SCHEMA_SCRIPT_ID);
    if (schema) {
      const schemaContent = typeof schema === 'string' ? schema : JSON.stringify(schema, null, 2);
      if (existingSchema) {
        existingSchema.textContent = schemaContent;
      } else {
        const script = document.createElement('script');
        script.setAttribute('id', SCHEMA_SCRIPT_ID);
        script.setAttribute('type', 'application/ld+json');
        script.textContent = schemaContent;
        document.head.appendChild(script);
      }
    } else if (existingSchema) {
      existingSchema.remove();
    }
  }, [title, description, canonical, keywords, ogImage, ogType, schema]);

  return null;
}

export default HeadMetadata;

