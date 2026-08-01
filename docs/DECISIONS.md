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

## 2026-08-01: Use Environment-Driven Canonical Site URL

Decision: Configure the site URL from `SITE_URL`, with a local development fallback.

Reasoning: the final domain has not been selected, and GitHub Pages repository settings may vary by owner.

Consequences:

- CI can provide a GitHub Pages URL during deployment.
- A final domain can be added later without changing content.
