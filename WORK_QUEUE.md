# Work Queue

Only one primary task should normally be `in-progress`.

## P2CSE-001: Bootstrap Documentation Workspace

Priority: high
Status: done
Dependencies: none

Acceptance criteria:

- Astro Starlight configuration exists.
- Repository docs include README, roadmap, contributor guide, code of conduct, project spec, and GitHub templates.
- Initial connected lessons exist under `src/content/docs/`.
- Graph validation and tests run locally.
- CI runs install, validation, tests, formatting, and build.

Relevant paths:

- `astro.config.mjs`
- `src/content.config.ts`
- `src/content/docs/`
- `scripts/`
- `tests/`
- `.github/`

Validation commands:

- `npm run validate`
- `npm test`
- `npm run check`
- `npm run build`

Notes:

- Completed with passing validation, tests, type check, formatting, and static build.

## P2CSE-002: Select Project License

Priority: high
Status: done
Dependencies: none

Acceptance criteria:

- Owner selects content and code licensing approach.
- License files are added.
- README and contributing guide describe reuse terms.

Relevant paths:

- `README.md`
- `CONTRIBUTING.md`
- license files

Validation commands:

- `npm run validate:attribution`

Notes:

- Owner approved using an open-source license on 2026-08-01.
- Code and tooling use MIT.
- Educational content uses CC BY 4.0.

## P2CSE-004: Document Default GitHub Pages Hosting

Priority: high
Status: done
Dependencies: none

Acceptance criteria:

- README explains the default hosting approach.
- Roadmap no longer treats a missing custom domain as a blocker.

Relevant paths:

- `README.md`
- `ROADMAP.md`

Validation commands:

- `npm run validate`

Notes:

- No custom domain exists yet. Use GitHub Pages' default project URL until one is chosen later.

## P2CSE-003: Add First Interactive Artifact

Priority: medium
Status: ready
Dependencies: P2CSE-001

Acceptance criteria:

- A reusable units and measurement explorer exists.
- Static fallback is useful without JavaScript.
- Keyboard operation and accessible labels are present.
- Core calculation logic has tests.
- The relevant lesson remains understandable as Markdown.

Relevant paths:

- `src/components/simulations/`
- `src/content/docs/foundations/measurement-models-units.md`
- `tests/`

Validation commands:

- `npm test`
- `npm run build`
- `npm run validate`
