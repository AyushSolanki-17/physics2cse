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

- Licensing remains blocked on owner decision.
- Completed with passing validation, tests, type check, formatting, and static build.

## P2CSE-002: Select Project License

Priority: high
Status: blocked
Dependencies: owner decision

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

- Do not choose this without owner approval.

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
