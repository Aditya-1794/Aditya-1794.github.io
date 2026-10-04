# Writing articles

Add a `.md` file to `src/articles/` with this metadata at the top:

```markdown
---
title: "Your article title"
date: "2026-10-04"
description: "A short introduction."
---

## Your first heading

Write your article here with **bold**, *italics*, lists, and links.
```

The homepage automatically lists articles newest first. Click a title to open
the independently scrolling reader in a 50–50 split beside the homepage.
Project previews float over the homepage while an article is open.
Close the reader with the Close button or Escape
while focused inside the reader. On narrow screens, it opens over the page.

Markdown supports headings, quotes, fenced code blocks, tables, task lists,
and images. Put images in `public/blog/` and reference them with a URL such as
`![Description](/blog/diagram.png)`. Use unique filenames for articles.
New articles appear during development automatically; rebuild and deploy to
publish them to the live site. A metadata-only article shows “Article coming soon.”

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
