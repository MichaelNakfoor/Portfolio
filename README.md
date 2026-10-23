# Michael Nakfoor — Portfolio

A professional portfolio presenting software engineering, application design, and UI development work. The site is implemented with React, TypeScript, and Vite.

## Portfolio areas

- **EA Sports:** interface design and development for released game franchises.
- **Maestro Label Designer:** browser editing tools, application workflows, and print production.
- **Workshop:** personal applications built with C#, Blazor, .NET, and SQL Server.

This repository contains the portfolio website and approved illustrative assets. It does not contain the source code of the applications or games presented in the case studies.

## Local development

Use a current Node.js LTS release supported by Vite, with npm installed.

```sh
npm ci
npm run dev
```

## Validation and production build

```sh
npm run lint
npm run build
npm run preview
```

The build includes TypeScript checking and writes the production site to `dist/`. Configure static hosting to serve `index.html` for client-side routes. Hosting under a subdirectory requires matching asset and router base configuration.

## Snapshot inventory

`PUBLICATION-MANIFEST.json` lists the publication source files, required assets, and their SHA-256 hashes. Dependencies, generated build output, private originals, and development history are excluded from the publication inventory.
