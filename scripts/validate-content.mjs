import { readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";

const DOCS_DIR = "src/content/docs";

const REQUIRED_CONCEPT_KEYS = [
  "id",
  "title",
  "description",
  "kind",
  "status",
  "level",
  "estimated_minutes",
  "prerequisites",
  "tags",
  "learning_objectives",
];

const REQUIRED_SECTIONS = [
  "Why this matters",
  "What you should already know",
  "The central intuition",
  "The mechanism",
  "The smallest useful formal model",
  "Think before continuing",
  "Reveal the reasoning",
  "Why not the obvious alternative?",
  "Common misconception",
  "Tiny experiment",
  "Build or investigation challenge",
  "What this unlocks",
];

export function parseFrontmatter(source) {
  if (!source.startsWith("---\n")) {
    return { data: {}, body: source };
  }

  const end = source.indexOf("\n---", 4);
  if (end === -1) {
    throw new Error("Frontmatter is opened but not closed.");
  }

  const yaml = source.slice(4, end).split("\n");
  const body = source.slice(end + 4).replace(/^\n/, "");
  const data = {};
  let currentListKey = null;

  for (const rawLine of yaml) {
    const line = rawLine.replace(/\r$/, "");
    if (!line.trim()) continue;

    const listMatch = line.match(/^\s+-\s+(.*)$/);
    if (listMatch && currentListKey) {
      data[currentListKey].push(parseScalar(listMatch[1]));
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!keyMatch) {
      throw new Error(`Unsupported frontmatter line: ${line}`);
    }

    const [, key, value = ""] = keyMatch;
    if (value === "") {
      data[key] = [];
      currentListKey = key;
      continue;
    }

    data[key] = parseScalar(value);
    currentListKey = null;
  }

  return { data, body };
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === "[]") return [];
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function collectMarkdownFiles(rootDir = DOCS_DIR) {
  const files = [];

  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if ([".md", ".mdx"].includes(extname(entry.name))) {
        files.push(fullPath);
      }
    }
  }

  walk(rootDir);
  return files.sort();
}

export function routeForFile(file, rootDir = DOCS_DIR) {
  const withoutExt = relative(rootDir, file).replace(/\.(md|mdx)$/u, "");
  const route =
    withoutExt === "index"
      ? "/"
      : withoutExt.endsWith(`${sep}index`)
        ? `/${withoutExt.slice(0, -6).split(sep).join("/")}/`
        : `/${withoutExt.split(sep).join("/")}/`;
  return route.replaceAll("//", "/");
}

export function validateDocs(files, options = {}) {
  const rootDir = options.rootDir ?? DOCS_DIR;
  const errors = [];
  const warnings = [];
  const concepts = [];
  const routes = new Set(["/"]);
  const titles = new Map();
  const descriptions = new Map();

  for (const file of files) {
    routes.add(routeForFile(file, rootDir));
  }

  for (const file of files) {
    let parsed;
    const source = readFileSync(file, "utf8");

    try {
      parsed = parseFrontmatter(source);
    } catch (error) {
      errors.push({ file, message: error.message });
      continue;
    }

    const { data, body } = parsed;
    const route = routeForFile(file, rootDir);
    const kind = data.kind ?? "guide";

    if (!data.title) {
      errors.push({ file, message: "Missing title." });
    } else {
      addUniqueValue(titles, data.title, file, errors, "Duplicate title");
    }

    if (!data.description) {
      errors.push({ file, message: "Missing description." });
    } else {
      addUniqueValue(
        descriptions,
        data.description,
        file,
        errors,
        "Duplicate description",
      );
    }

    validateLinks(file, body, routes, errors);

    if (kind !== "concept") continue;

    for (const key of REQUIRED_CONCEPT_KEYS) {
      if (!(key in data)) {
        errors.push({ file, message: `Missing required concept key: ${key}.` });
      }
    }

    for (const key of ["prerequisites", "tags", "learning_objectives"]) {
      if (!Array.isArray(data[key])) {
        errors.push({ file, message: `${key} must be a list.` });
      }
    }

    const objectives = data.learning_objectives ?? [];
    const uniqueObjectives = new Set(objectives);
    if (uniqueObjectives.size !== objectives.length) {
      errors.push({ file, message: "Duplicate learning objective." });
    }

    for (const section of REQUIRED_SECTIONS) {
      if (!body.includes(`## ${section}`)) {
        errors.push({ file, message: `Missing lesson section: ${section}.` });
      }
    }

    if (!body.includes("<details>")) {
      errors.push({ file, message: "Missing collapsible reasoning details." });
    }

    concepts.push({
      id: data.id,
      title: data.title,
      file,
      route,
      prerequisites: data.prerequisites ?? [],
      tags: data.tags ?? [],
      learning_objectives: objectives,
    });
  }

  validateGraph(concepts, errors, warnings);

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    concepts,
    stats: {
      files: files.length,
      concepts: concepts.length,
      routes: routes.size,
    },
  };
}

function addUniqueValue(map, value, file, errors, label) {
  if (map.has(value)) {
    errors.push({
      file,
      message: `${label}: also used by ${map.get(value)}.`,
    });
    return;
  }
  map.set(value, file);
}

function validateLinks(file, body, routes, errors) {
  const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
  for (const match of body.matchAll(linkRegex)) {
    const href = match[1].trim();
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("#")
    ) {
      continue;
    }

    if (href.startsWith("/")) {
      const route = href.includes("#") ? href.split("#")[0] : href;
      const normalized = route.endsWith("/") ? route : `${route}/`;
      if (!routes.has(normalized)) {
        errors.push({ file, message: `Broken internal link: ${href}.` });
      }
    }
  }
}

export function validateGraph(concepts, errors, warnings) {
  const byId = new Map();
  const incoming = new Map();
  const outgoing = new Map();

  for (const concept of concepts) {
    if (!concept.id) continue;
    if (byId.has(concept.id)) {
      errors.push({
        file: concept.file,
        message: `Duplicate concept id: ${concept.id}.`,
      });
      continue;
    }
    byId.set(concept.id, concept);
    incoming.set(concept.id, 0);
    outgoing.set(concept.id, concept.prerequisites.length);
  }

  for (const concept of concepts) {
    for (const prerequisite of concept.prerequisites) {
      if (!byId.has(prerequisite)) {
        errors.push({
          file: concept.file,
          message: `Missing prerequisite concept: ${prerequisite}.`,
        });
        continue;
      }
      incoming.set(prerequisite, (incoming.get(prerequisite) ?? 0) + 1);
    }
  }

  for (const concept of concepts) {
    if (
      concept.id &&
      (incoming.get(concept.id) ?? 0) === 0 &&
      (outgoing.get(concept.id) ?? 0) === 0
    ) {
      warnings.push({
        file: concept.file,
        message: `Orphan concept: ${concept.id}.`,
      });
    }
  }

  for (const cycle of findCycles(concepts, byId)) {
    errors.push({
      file: byId.get(cycle[0])?.file ?? "",
      message: `Prerequisite cycle: ${cycle.join(" -> ")}.`,
    });
  }
}

function findCycles(concepts, byId) {
  const cycles = [];
  const visiting = new Set();
  const visited = new Set();
  const stack = [];

  function visit(id) {
    if (visiting.has(id)) {
      const start = stack.indexOf(id);
      cycles.push([...stack.slice(start), id]);
      return;
    }
    if (visited.has(id)) return;

    visiting.add(id);
    stack.push(id);
    const concept = byId.get(id);
    for (const prerequisite of concept?.prerequisites ?? []) {
      if (byId.has(prerequisite)) {
        visit(prerequisite);
      }
    }
    stack.pop();
    visiting.delete(id);
    visited.add(id);
  }

  for (const concept of concepts) {
    if (concept.id) visit(concept.id);
  }

  return cycles;
}

function runCli() {
  const json = process.argv.includes("--json");
  const files = collectMarkdownFiles();
  const result = validateDocs(files);

  if (json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    for (const error of result.errors) {
      console.error(`error ${error.file}: ${error.message}`);
    }
    for (const warning of result.warnings) {
      console.warn(`warning ${warning.file}: ${warning.message}`);
    }
    console.log(
      `Validated ${result.stats.files} files and ${result.stats.concepts} concepts.`,
    );
  }

  if (!result.ok) {
    process.exitCode = 1;
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
