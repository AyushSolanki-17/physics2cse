# Physics2CSE Contributor Instructions

This repository is a public educational project that explains computing as a connected chain of engineering decisions, from physical measurement to modern computing systems.

Use these instructions for all repository work. Keep durable project requirements in `docs/PROJECT_SPEC.md`, near-term tasks in `WORK_QUEUE.md`, and milestone state in `ROADMAP.md`.

## Repository Identity

The repository should read like a normal human-maintained open-source project.

Do not add production-process attribution, promotional signatures, tool signatures, or service-specific names to repository-visible material, Git metadata, issues, pull requests, generated files, comments, or documentation.

Discussion of artificial intelligence, machine learning, neural networks, transformers, or related topics is allowed when it is part of the curriculum.

Use the configured Git author identity. Do not change it and do not impersonate another contributor.

Before every commit, inspect:

- Current branch name
- Staged file list
- Staged diff
- Full commit message, including trailers
- Git author configuration

Do not push directly to `main`.

## Working Loop

At the start of a run, inspect:

1. `AGENTS.md`
2. `docs/PROJECT_SPEC.md`, when present
3. `ROADMAP.md`, when present
4. `WORK_QUEUE.md`, when present
5. Active plans in `docs/plans/active/`, when present
6. `docs/DECISIONS.md`, when present
7. Recent Git history
8. Current Git status
9. Existing build, test, lint, and validation commands

Select work in this order:

1. Resume an active plan.
2. Repair failing validation.
3. Complete an already-started milestone.
4. Pick the highest-priority unblocked work queue item.
5. Pick the next incomplete roadmap milestone.
6. Improve validation, tests, or documentation that unblocks future work.

Keep changes small, coherent, and reviewable. Do not discard unrelated work.

## Content Standards

Primary lessons must explain:

- Why the concept exists
- What problem it solves
- What physical, mathematical, or engineering limitation motivates it
- How it works
- Why the chosen design is useful
- What misconception to avoid
- What later concepts depend on it
- What the learner can calculate, build, or test

Assume the reader begins with basic arithmetic, curiosity, and no prior programming or electronics knowledge.

Avoid unsupported claims, fabricated references, empty motivation, unexplained jargon, long historical introductions, repeated explanations, and shallow definition-only pages.

## Lesson Contract

Primary concept lessons should use Markdown and include:

1. Why this matters
2. What you should already know
3. The central intuition
4. The mechanism
5. The smallest useful formal model
6. Think before continuing
7. Reveal the reasoning
8. Why not the obvious alternative?
9. Common misconception
10. Tiny experiment
11. Build or investigation challenge
12. What this unlocks

Use MDX only when a page needs an imported interactive or visual component. A lesson must remain useful when JavaScript fails or the page is read as plain Markdown.

## Technical Architecture

Use Astro Starlight as the documentation framework.

Keep curriculum content in `src/content/docs/`. Keep reusable educational components under `src/components/`. Keep graph data and validation independent of the rendering framework.

Every concept page must include stable frontmatter metadata:

- `id`
- `title`
- `description`
- `kind`
- `status`
- `level`
- `estimated_minutes`
- `prerequisites`
- `tags`
- `learning_objectives`

Treat `id` as the stable concept identity. File paths may change.

## Validation Expectations

Run relevant checks before marking work complete:

- Site build
- Type checking
- Tests
- Concept metadata validation
- Knowledge-graph validation
- Internal-link validation where practical
- Prohibited attribution-pattern scan

Do not weaken checks to make them pass. Record unrelated pre-existing failures separately.

## Owner Decisions

Do not choose a final license, domain, paid service, secret, account ownership, public release approval, or destructive Git history operation without repository-owner direction.

When an owner decision blocks one task, record the blocker in `WORK_QUEUE.md` and continue with another unblocked task when possible.
