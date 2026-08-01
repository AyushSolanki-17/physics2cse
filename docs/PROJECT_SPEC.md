# Physics2CSE Project Specification

`physics2cse` explains computer science and computer engineering from first principles, beginning with physical measurement and continuing through hardware, software systems, and modern intelligent systems.

## Core Philosophy

Explain computing as a connected chain of engineering decisions, from physical reality to intelligent systems.

Every important concept should answer:

1. Why does this concept exist?
2. What problem does it solve?
3. What physical, mathematical, or engineering limitation motivated it?
4. How does it work?
5. Why was this design chosen over an alternative?
6. What common misconception should the learner avoid?
7. What later concepts depend on it?
8. What can the learner build or test with it?

Content should be concise but deep. The reader should actively predict, calculate, question, and experiment.

## Intended Reader

Assume the learner begins with:

- Basic reading ability
- Basic arithmetic
- Curiosity
- No prior programming knowledge
- No prior electronics knowledge
- No assumed understanding of computer internals

When a prerequisite is required, link to it or provide a clearly marked bridge lesson.

## Documentation Architecture

Use Astro Starlight as the primary documentation framework.

Use:

- Markdown for ordinary lessons
- MDX only when a lesson embeds a custom component
- YAML frontmatter for concept metadata
- LaTeX notation for mathematics
- Astro components for reusable educational artifacts
- Semantic HTML, CSS, and SVG for diagrams
- TypeScript for diagram logic and validation
- Client-side JavaScript only when genuine interaction is required
- GitHub Pages for initial static hosting

Keep educational content separate from framework code where practical:

```text
src/
  content/
    docs/
      foundations/
      physics/
      electronics/
      paths/
  components/
    learning/
    diagrams/
    simulations/
    graph/
  data/
    concept-graph/
  styles/
public/
scripts/
tests/
templates/
graph/
```

## Interactive Artifact Contract

Every interactive educational artifact must define:

1. Learning objective
2. Learner prediction
3. Adjustable inputs
4. Observable outputs
5. Relationship demonstrated
6. Reset mechanism
7. Keyboard operation where applicable
8. Accessible textual explanation
9. Static fallback
10. Tests for core calculation logic

Use this loop:

```text
Predict -> Manipulate -> Observe -> Explain -> Modify
```

Prefer reusable configurable components over one-off lesson blocks.

## Knowledge Graph

Backlinks alone are not the curriculum graph. Generate the graph from concept frontmatter and explicit prerequisite relationships.

Each concept page must include metadata similar to:

```yaml
id: electronics.transistors.mosfet-switch
title: MOSFET as a Digital Switch
kind: concept
status: draft
level: 2
estimated_minutes: 18
prerequisites:
  - physics.electricity.voltage
tags:
  - electronics
  - hardware
learning_objectives:
  - Explain how gate voltage controls conduction
```

Treat `id` as stable identity. File paths may change without changing the concept ID.

Validation must detect duplicate IDs, missing IDs, nonexistent prerequisites, cycles, orphan concepts, duplicate learning objectives, broken internal links, and missing required sections.

## Standard Lesson Contract

Primary concept pages should contain:

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

Thinking questions should require reasoning. Avoid questions whose answers merely repeat the previous sentence.

## Curriculum Areas

The long-term curriculum includes:

- Foundations
- Mathematics
- Physics
- Chemistry and materials
- Electronics
- Digital logic
- Computer architecture
- Programming
- Data structures and algorithms
- Programming languages
- Theory of computation
- Compilers
- Operating systems
- Databases
- Networking
- Distributed systems
- Security
- Graphics
- Numerical computing
- Machine learning
- AI systems
- Software engineering
- Engineering practice

The primary navigation model is concept dependencies and guided learning paths, not university semesters.

## First Guided Path

The first flagship path is **From Charge to Hello World**.

Initial sequence:

1. Measurement and units
2. Matter and electric charge
3. Electric fields and potential
4. Voltage, current, and resistance
5. Basic circuits
6. Signals and switching
7. Conductors, insulators, and semiconductors
8. Diodes
9. Transistors
10. MOSFET switching
11. CMOS inverter
12. Logic gates
13. Boolean algebra
14. Binary representation
15. Combinational circuits
16. State and flip-flops
17. Registers
18. Arithmetic logic unit
19. Memory
20. Instruction sets
21. CPU instruction cycle
22. Assembly language
23. Stack and function calls
24. Minimal compilation
25. Boot process
26. Minimal operating-system interaction
27. Printing "Hello, world"

This is a dependency path, not a claim that every item already exists.

## Bootstrap Checklist

- [x] Provider-neutral contributor instructions
- [x] Starlight documentation configuration
- [x] Initial connected lessons
- [x] Guided path landing page
- [x] Content template
- [x] Knowledge-graph validation script
- [x] Basic validator tests
- [x] GitHub Actions workflow
- [ ] Owner-selected project license
- [ ] First interactive learning artifact
- [ ] Backlink rendering component
- [ ] Local concept graph visualization
