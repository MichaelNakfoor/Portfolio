import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { publicPages, renderMetadata, siteOrigin } from './src/siteMetadata.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'portfolio-route-metadata',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace(/<!-- portfolio-metadata:start -->[\s\S]*?<!-- portfolio-metadata:end -->/, `<!-- portfolio-metadata:start -->\n    ${renderMetadata('/')}\n    <!-- portfolio-metadata:end -->`),
    },
    // Emit crawler-readable heads while keeping React responsible for page content.
    writeBundle(output) {
      const root = resolve(output.dir ?? 'dist')
      const template = readFileSync(resolve(root, 'index.html'), 'utf8')
      const htmlFor = (path: string) => template.replace(/<!-- portfolio-metadata:start -->[\s\S]*?<!-- portfolio-metadata:end -->/, `<!-- portfolio-metadata:start -->\n    ${renderMetadata(path)}\n    <!-- portfolio-metadata:end -->`)
      for (const path of Object.keys(publicPages)) {
        if (path === '/') continue
        const directory = resolve(root, path.slice(1))
        mkdirSync(directory, { recursive: true })
        writeFileSync(resolve(directory, 'index.html'), htmlFor(path))
      }
      writeFileSync(resolve(root, '404.html'), htmlFor('/404'))
      writeFileSync(resolve(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`)
      writeFileSync(resolve(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(publicPages).map(path => `  <url><loc>${siteOrigin}${path}</loc></url>`).join('\n')}\n</urlset>\n`)
    },
  }],
})
