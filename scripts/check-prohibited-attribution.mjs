import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";

const skippedPathParts = [
  "node_modules/",
  "dist/",
  ".astro/",
  ".git/",
  "package-lock.json",
];

const patterns = [
  {
    label: "production-process attribution phrase",
    regex: new RegExp(["generated", "by"].join("\\s+"), "iu"),
  },
  {
    label: "production-process attribution phrase",
    regex: new RegExp(["created", "with"].join("\\s+"), "iu"),
  },
  {
    label: "hyphenated generated-content phrase",
    regex: new RegExp(`${["a", "i"].join("")}[-\\s]+generated`, "iu"),
  },
  {
    label: "coauthor trailer",
    regex: new RegExp(["co", "authored", "by"].join("[-\\s]*"), "iu"),
  },
  {
    label: "service-specific name",
    regex: new RegExp(["chat", "gpt"].join(""), "iu"),
  },
  {
    label: "service-specific name",
    regex: new RegExp(["open", "ai"].join(""), "iu"),
  },
  {
    label: "service-specific name",
    regex: new RegExp(["co", "dex"].join(""), "iu"),
  },
  {
    label: "service-specific name",
    regex: new RegExp(["cla", "ude"].join(""), "iu"),
  },
  {
    label: "service-specific name",
    regex: new RegExp(["gem", "ini"].join(""), "iu"),
  },
];

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function listCandidateFiles() {
  const output = git([
    "ls-files",
    "--cached",
    "--others",
    "--exclude-standard",
  ]);
  return output
    .split("\n")
    .filter(Boolean)
    .filter((file) => !skippedPathParts.some((part) => file.includes(part)))
    .filter((file) => existsSync(file) && statSync(file).isFile());
}

function scanText(label, text, failures) {
  for (const pattern of patterns) {
    if (pattern.regex.test(text)) {
      failures.push(`${label}: ${pattern.label}`);
    }
  }
}

function readMaybeText(file) {
  const buffer = readFileSync(file);
  if (buffer.includes(0)) return null;
  return buffer.toString("utf8");
}

const failures = [];

scanText("branch name", git(["branch", "--show-current"]), failures);
scanText("latest commit message", git(["log", "-1", "--pretty=%B"]), failures);

for (const file of listCandidateFiles()) {
  const text = readMaybeText(file);
  if (text === null) continue;
  scanText(file, text, failures);
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`error ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log("No prohibited attribution patterns found.");
}
