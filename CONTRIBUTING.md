# Contributing

Thanks for helping make `physics2cse` clearer, more correct, and easier to learn from.

## What Good Contributions Look Like

Useful contributions usually do one of these:

- Make a concept more technically correct.
- Make a difficult idea easier to reason about.
- Add a small experiment, calculation, or build challenge.
- Improve validation, accessibility, or site reliability.
- Repair broken prerequisite links or metadata.

Avoid large batches of shallow pages. A small connected lesson that survives review is more valuable than a large unverified outline.

## Lesson Expectations

Primary concept lessons should follow the lesson contract in `AGENTS.md` and use stable concept metadata in frontmatter.

Use Markdown for ordinary lessons. Use MDX only when a lesson imports a reusable component.

## Local Checks

Run these before opening a pull request:

```sh
npm run validate
npm test
npm run check
npm run build
```

## Licensing

By contributing, you agree that your contribution will be licensed under the repository's dual-license structure:

- Code, configuration, scripts, tests, and reusable components are licensed under the MIT License.
- Educational content, lessons, diagrams-as-content, paths, and documentation are licensed under Creative Commons Attribution 4.0 International.

See `LICENSE.md` for details.

## Commit Style

Use clear conventional commit subjects, for example:

- `chore: initialize documentation workspace`
- `docs: explain electric potential`
- `test: cover prerequisite cycle detection`
- `fix: repair broken concept reference`

Do not include production-process attribution or tool signatures in commits, pull requests, documentation, comments, or generated files.
