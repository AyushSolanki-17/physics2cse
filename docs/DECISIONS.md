# Decisions

## 2026-08-01: Use Starlight With Content-Layer Configuration

Decision: Use Astro Starlight as the only documentation framework and keep lessons in `src/content/docs/`.

Reasoning: Starlight provides documentation navigation, search, themes, syntax highlighting, and content collection validation while still allowing portable Markdown lessons and custom Astro components.

Consequences:

- Ordinary lessons stay in Markdown.
- MDX is reserved for pages that import reusable educational components.
- Knowledge-graph validation remains independent of Starlight.

## 2026-08-01: Defer Final License Selection

Decision: Do not add a final license during bootstrap.

Reasoning: Licensing is an owner decision affecting reuse, contributions, and redistribution.

Consequences:

- README and roadmap state that licensing is unresolved.
- `WORK_QUEUE.md` keeps license selection blocked until owner direction is available.

Superseded by the 2026-08-01 dual-license decision below.

## 2026-08-01: Use Environment-Driven Canonical Site URL

Decision: Configure the site URL from `SITE_URL`, with a local development fallback.

Reasoning: the final domain has not been selected, and GitHub Pages repository settings may vary by owner.

Consequences:

- CI can provide a GitHub Pages URL during deployment.
- A final domain can be added later without changing content.

## 2026-08-01: Use Dual Licensing

Decision: License code and tooling under MIT, and educational content under Creative Commons Attribution 4.0 International.

Reasoning: The project contains both executable software and reusable educational writing. MIT keeps the software permissive and familiar for contributors. CC BY 4.0 keeps lessons broadly reusable while preserving attribution.

Consequences:

- `LICENSE.md` describes the split.
- `LICENSE-CODE.md` contains the MIT license.
- `LICENSE-CONTENT.md` points to the CC BY 4.0 canonical license.
- `package.json` declares MIT for the package code.

## 2026-08-01: Use Default GitHub Pages URL Until a Domain Exists

Decision: Do not block release work on a custom domain. Use the default GitHub Pages project URL until a custom domain is selected later.

Reasoning: The repository already supports static GitHub Pages deployment, and curriculum content should not depend on domain ownership.

Consequences:

- No custom-domain files are added.
- Canonical URL configuration remains environment-driven.
- A custom domain can be added later with GitHub Pages settings and a small config update.
