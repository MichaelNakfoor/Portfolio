import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Run after npm run build: inspect emitted HTML without executing the React app.
const read = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), 'utf8');
const origin = 'https://michaelnakfoor.com';
const routes = [
  '/', '/about/', '/resume/', '/work/ea/', '/work/ea/madden-nfl/',
  '/work/ea/central-ui/', '/work/ea/ncaa-football/', '/work/ea/tiger-woods-pga-tour/',
  '/work/maestro/', '/work/maestro/browsing/', '/work/maestro/tools/',
  '/work/maestro/generators/', '/work/maestro/printing/', '/work/workshop/',
];
const jsonLdScripts = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
const homepage = read('index.html');
const scripts = jsonLdScripts(homepage);
assert.equal(scripts.length, 1, 'Homepage must contain one JSON-LD graph');
assert.ok(homepage.indexOf(scripts[0][0]) < homepage.indexOf('</head>'));
const graph = JSON.parse(scripts[0][1]);
assert.equal(graph['@context'], 'https://schema.org');
assert.equal(graph['@graph'].length, 2);
const person = graph['@graph'].find(entity => entity['@type'] === 'Person');
const website = graph['@graph'].find(entity => entity['@type'] === 'WebSite');
assert.deepEqual(person, {
  '@type': 'Person', '@id': `${origin}/#person`, name: 'Michael Nakfoor',
  alternateName: ['Mike Nakfoor', 'Michael A. Nakfoor'], url: `${origin}/`,
  jobTitle: 'Software Engineer and UI Designer',
  sameAs: ['https://www.linkedin.com/in/mike-nakfoor-b204691'],
});
assert.deepEqual(website, {
  '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`,
  name: 'Michael A Nakfoor',
  alternateName: ['Michael Nakfoor', 'Mike Nakfoor', 'Michael A. Nakfoor'],
  author: { '@id': person['@id'] }, about: { '@id': person['@id'] },
});
assert.equal(new Set(graph['@graph'].map(entity => entity['@id'])).size, 2);
const sitemap = read('sitemap.xml');
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(locations.sort(), routes.map(route => origin + route).sort());
for (const route of routes) {
  const html = read(`${route.slice(1)}index.html`);
  assert.ok(html.includes(`<link rel="canonical" href="${origin}${route}" />`));
  if (route !== '/') assert.equal(jsonLdScripts(html).length, 0, route);
}
assert.equal(jsonLdScripts(read('404.html')).length, 0);
assert.equal(read('robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
console.log('Passed: static homepage JSON-LD, Person/WebSite fields and references, 14 routes, sitemap, robots.txt, and 404.');
