# Maestro feature-page assets

Local implementation, October 21, 2026. No deployment or remote push performed.

## Provenance and handling

The source package is extracted at `../maestro-assets/`. Only the 24 PNG captures in the first four categories' `originals_private` folders were copied to `public/images/maestro/feature-pages/`. The five images in `demo_generated_review` are generated reconstructions and are not used. Historical images and the overview were left unchanged.

The public feature-page copies are byte-identical to their source captures. Filenames were normalized for descriptive URLs; pixels were not edited. There are no demo-data substitutions, redactions, or generated replacement images in this implementation. The latest user instruction authorizes using the originals as-is for local development and supersedes the package's suggested sanitization workflow. Private source folders, package README/manifest, and this handoff are outside Vite's public build input.

The feature-page originals intentionally appear in local `dist/images/maestro/feature-pages/` when built, including their embedded account information and records. This build is not a sanitized public-release artifact. The source archive remains outside the project public directory. No new screenshot assets were included in the Git checkpoint.

## Review before public launch

- All 21 application UI captures: inspect the account email and activation details in the top-right header. `pdf-print-sheet.png`, `mail-merge-output-sheet.png`, and `shopping-cart.png` are the three non-editor views; inspect these separately as well.
- `mail-merge-output-sheet.png`: names and postal addresses in the generated labels require review. No records have been changed or excluded from the local page.
- `qr-code-generator.png`: contact fields and the machine-readable QR payload require review, not just visible text.
- `saved-designs.png`: review saved artwork, design names, and folder names. Other browsing captures include artwork and template names.
- `blank-templates-rolls.png`: review browser chrome and any account/bookmark information.
- `curved-text.png`, `svg-design-canvas.png`, `pdf-print-sheet.png`, `professional-print-options.png`, `professional-print-review.png`, and `shopping-cart.png`: review product artwork, order information, and historical prices before launch.

## Screenshot use

| Route | Public screenshot filenames | Workflow |
| --- | --- | --- |
| browsing | saved-designs.png | Saved designs, folders, search, sorting |
| browsing | blank-templates-filtered-sheets.png, blank-templates-rolls.png, blank-templates-ovals.png, blank-template-editor.png | Blank stock and transition to editor |
| browsing | predesigned-gallery.png, predesigned-choose-product.png, predesigned-editor.png | Artwork discovery, compatible product, editable result |
| tools | svg-shapes-selection.png | SVG objects, selection, properties, object list |
| tools | color-palette.png, gradient-editor.png | Solid and gradient color controls |
| tools | advanced-text-color.png, curved-text.png | Typography and curved text |
| tools | inline-rich-text-editor.png | Selection and mixed inline formatting |
| generators | mail-merge-combined-fields.png, mail-merge-output-sheet.png | Combined source fields and distinct outputs |
| generators | variable-barcode-fields.png | Variable barcode configuration |
| generators | nutrition-label-generator.png | Nutrition inputs and preview |
| generators | qr-code-generator.png | Structured contact information and QR preview |
| printing | svg-design-canvas.png, pdf-print-sheet.png | Browser artwork and PDF sheet |
| printing | professional-print-options.png | Sheet/roll format, stock, finish, quantity, pricing |
| printing | professional-print-review.png | Production preview, orientation, proof access, approval |
| printing | shopping-cart.png | Generated thumbnail and configured cart item |

Native dimensions are recorded in `src/maestroScreenshotSizes.ts`. The accompanying inventory records source paths and SHA-256 hashes for comparison with the unchanged local copies.

## Missing dedicated captures

- Image adjustments and cropping UI.
- Google Fonts discovery/selection and installed-font handling.
- Initial Excel/CSV upload/import and source-column mapping step (the combined-field configuration is available).
- An isolated layer-reordering or canvas/list synchronization sequence (the object list and locking controls are visible in the supplied editor captures).
- A professional sheet configuration expanded separately from the supplied roll configuration (the sheet/roll selector and home-print PDF sheet are available).

These capabilities are described from the user's firsthand narrative. Available related screenshots are captioned only for what they show; no replacement screenshots were invented. The QR anecdote makes no adoption or business-result claim. No claim of perfect RGB/CMYK equivalence is made.

## Checkpoint

`d667cb1` preserves the reviewed tracked state before feature implementation. Tracked text was scanned for common credential patterns, existing Maestro overview captures were inspected, and intended public contact information was identified. Existing screenshot account/contact information was noted. The checkpoint contains three already-modified tracked source files and no new screenshot assets. It is local only.

## Validation

- `npm.cmd run build` and `npm.cmd run lint` passed.
- All 24 public copies and their built counterparts match the source SHA-256 hashes in the inventory.
- Headless Edge loaded all four feature routes directly at viewport widths 1440, 768, 390, and 320 pixels. All feature screenshots decoded successfully; no runtime exceptions occurred.
- Feature content stayed within the viewport. Desktop galleries used matching image containers and aligned caption starts; mobile galleries stacked at natural image proportions. Representative desktop and mobile renders were visually inspected.
- On each route, Enter opened the first screenshot dialog, the image rendered at native width, and the original-image link matched its source. Escape closed the dialog and returned focus to its trigger.
- No technical filenames or internal privacy/migration notes appeared in the feature captions.
- No private source directories, package manifests, or generated reconstructions were found in `dist/`. Original screenshot pixels, including personal information, intentionally remain in the local feature assets and build per the revised brief.
- The existing shared contact footer has horizontal overflow on narrow screens, previously identified during overview work. It was not changed as part of these feature pages.
- Changes after the checkpoint are confined to the Maestro feature page, its new supporting code/styles/assets, and this internal documentation. No overview, EA Sports, Workshop, or route definitions were changed. No deployment, push, or feature-image commit was performed.
