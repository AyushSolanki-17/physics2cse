import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { validateDocs } from "../scripts/validate-content.mjs";

function makeFixture(files) {
  const root = mkdtempSync(join(tmpdir(), "p2cse-"));
  const docs = join(root, "docs");
  mkdirSync(docs, { recursive: true });

  const paths = [];
  for (const [name, source] of Object.entries(files)) {
    const file = join(docs, name);
    mkdirSync(join(file, ".."), { recursive: true });
    writeFileSync(file, source);
    paths.push(file);
  }

  return { docs, paths };
}

function conceptFrontmatter(overrides = "") {
  return `---
id: sample.root
title: Root Concept
description: A distinct description for the root concept.
kind: concept
status: draft
level: 0
estimated_minutes: 10
prerequisites: []
tags:
  - sample
learning_objectives:
  - Explain the root idea.
${overrides}---

# Root Concept

## Why this matters
Text.

## What you should already know
Text.

## The central intuition
Text.

## The mechanism
Text.

## The smallest useful formal model
Text.

## Think before continuing
Text.

## Reveal the reasoning
<details>
<summary>Show reasoning</summary>
Text.
</details>

## Why not the obvious alternative?
Text.

## Common misconception
Text.

## Tiny experiment
Text.

## Build or investigation challenge
Text.

## What this unlocks
Text.
`;
}

test("validates a connected concept pair", () => {
  const { docs, paths } = makeFixture({
    "root.md": conceptFrontmatter(),
    "child.md": conceptFrontmatter(
      `id: sample.child
title: Child Concept
description: A distinct description for the child concept.
prerequisites:
  - sample.root
`,
    ),
  });

  const result = validateDocs(paths, { rootDir: docs });
  assert.equal(result.ok, true);
  assert.equal(result.stats.concepts, 2);
});

test("reports missing prerequisites", () => {
  const { docs, paths } = makeFixture({
    "child.md": conceptFrontmatter(
      `id: sample.child
title: Child Concept
description: A distinct description for the child concept.
prerequisites:
  - sample.missing
`,
    ),
  });

  const result = validateDocs(paths, { rootDir: docs });
  assert.equal(result.ok, false);
  assert.match(
    result.errors.map((error) => error.message).join("\n"),
    /Missing prerequisite/,
  );
});

test("reports prerequisite cycles", () => {
  const { docs, paths } = makeFixture({
    "a.md": conceptFrontmatter(
      `id: sample.a
title: Concept A
description: A distinct description for concept A.
prerequisites:
  - sample.b
`,
    ),
    "b.md": conceptFrontmatter(
      `id: sample.b
title: Concept B
description: A distinct description for concept B.
prerequisites:
  - sample.a
`,
    ),
  });

  const result = validateDocs(paths, { rootDir: docs });
  assert.equal(result.ok, false);
  assert.match(
    result.errors.map((error) => error.message).join("\n"),
    /Prerequisite cycle/,
  );
});

test("reports duplicate concept ids", () => {
  const { docs, paths } = makeFixture({
    "a.md": conceptFrontmatter(),
    "b.md": conceptFrontmatter(
      `title: Second Root
description: A distinct description for another concept.
`,
    ),
  });

  const result = validateDocs(paths, { rootDir: docs });
  assert.equal(result.ok, false);
  assert.match(
    result.errors.map((error) => error.message).join("\n"),
    /Duplicate concept id/,
  );
});
