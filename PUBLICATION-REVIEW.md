# Publication snapshot review

Synchronized with the approved current website, including the portrait committed in 4624c45. The development repository was not modified. No Git directory or inherited history exists in this snapshot. Nothing was committed, pushed, or deployed.

## Synchronization

- Updated src/components/About.tsx and added its demonstrably referenced public/portrait.png (572 × 688), copied byte-for-byte from the current committed asset. Removed only the superseded, unreferenced public/portrait.jpg. No image folders or historical assets were bulk-copied.
- Compared tracked website source, public assets, configuration, and relevant documentation. No other website source/configuration changes required synchronization. Public README/.gitignore, public GitHub destinations, and metadata-cleaned assets were intentionally preserved.
- General GitHub links remain https://github.com/MichaelNakfoor. The footer source link remains https://github.com/MichaelNakfoor/Portfolio. Other contact information is unchanged.
- The new portrait has no EXIF/XMP/text chunks; its ICC profile and PNG image content are preserved.

## Responsive fixes and portrait

The hero collage used fixed horizontal offsets on narrow single-column layouts. Its smaller-screen offsets now scale with its container. The footer is flex-based, but its previous smaller-screen rule only changed grid-template-columns; its flex columns consequently stayed side by side. It now explicitly stacks them, and long contact text can wrap within its card. No global overflow masking was added.

The About portrait now uses width: 100%, height: auto, and a 360px maximum container width. It retains its natural 572:688 ratio without cropping or distortion and is centered in the single-column layout. Browser measurements: 1440px viewport → 280.00 × 336.78px; 768px viewport → 360.00 × 433.00px; 390px viewport → 330.19 × 397.14px; 320px viewport → 260.19 × 312.94px. Desktop and mobile screenshots were visually inspected.

## Validation

- npm ci: passed using the updated lockfile. Only Vite and source-map-js dependency versions changed; no unrelated upgrades or force fixes.
- npm run build, including TypeScript checking: passed.
- npm run lint: passed with zero errors and zero warnings. RouteScroll.tsx now captures the positions map when its effect runs and uses the same map for lookup and cleanup, preserving intended scroll/navigation behavior.
- All 14 routes were checked at 1440, 768, 390, and 320px (56 route checks). No broken images, JavaScript exceptions, or horizontal page overflow were found. All 264 screenshot-enlargement checks passed. SPA route changes reset to the top; Back restored Workshop to 600px, Forward restored Resume to 400px, and the Work hash anchor aligned within one pixel.
- Eight technology badges load the intended nine SVGs. General profile and footer-source links were verified on all routes.
- Publication inventory: 148 source/documentation files, including 101 public assets. The build contains exactly 104 files: the 101 approved assets, index.html, and two generated bundles. Dependencies/build artifacts are ignored and excluded from the source manifest.
- Final source scan: no confirmed credentials, private paths/endpoints, unexpected contact details, withheld Workshop originals, caches, backups, private documents, or inherited Git objects. All preserved public assets match their earlier approved hashes.
- The two corrected browser-chrome images remain unchanged. Fictional Maestro accounts and Gilligan's Island demonstration records are approved content.

## Dependency security patches

The original advisories affecting Vite 8.3.1 and source-map-js 1.2.1 were reconfirmed through npm before patching. Vite is now pinned to 8.3.3 in package.json, and its lockfile entry is 8.3.3. The transitive source-map-js lockfile entry is 1.2.2. No other dependency version changed.

- npm ci: passed.
- npm run build (including TypeScript checks): passed.
- npm run lint: zero errors and zero warnings.
- npm audit: zero vulnerabilities.
- npm audit --omit=dev: zero vulnerabilities.
- Exact installed versions: vite 8.3.3, source-map-js 1.2.2, react 19.3.0, react-dom 19.3.0, typescript 6.0.3.

## Scroll and browser regression checks

A layout-effect-local reference to the positions map replaces reads of positions.current during cleanup. No lint rules were disabled and no scroll/navigation logic was otherwise changed.

All 14 routes passed at 1440, 768, 390, and 320px (56 route checks). There were no broken images, JavaScript exceptions, or horizontal page overflow. All 264 enlargement checks passed, along with GitHub destinations, technology badges, and natural-ratio About portrait checks. The existing portrait and all public assets remain unchanged.

Focused history checks: navigating from Workshop at 600px to Resume reset scroll to 0; after scrolling Resume to 400px, Back restored Workshop to 600px and Forward restored Resume to 400px. The Work link navigated to /#work and aligned the anchor within one pixel.

## Remaining review

- The project owner reviewed the QR payload and confirmed it sanitized. It is approved; no decoding or modification was performed during this work.
- No remaining dependency advisories or lint warnings were found. The snapshot is ready for a clean initial commit after final owner review. No Git initialization has been performed. Before hosting, configure SPA fallback and, if applicable, the hosting subdirectory base.

PUBLICATION-MANIFEST.json is the exact intended source inventory with SHA-256 hashes; its own self-hash is omitted.

## Files changed in this security pass

- package.json
- package-lock.json
- src/components/RouteScroll.tsx
- PUBLICATION-MANIFEST.json
- PUBLICATION-REVIEW.md

Work was confined to this clean snapshot and temporary QA helpers. The development repository was not accessed or modified. Git was not initialized; no commits, pushes, deployments, or remote changes occurred.
