---
id: foundations.measurement.units
title: Measurement, Models, and Units
description: Learn why engineering starts by turning observations into measured quantities with units and tolerances.
kind: concept
status: draft
level: 0
estimated_minutes: 16
prerequisites: []
tags:
  - foundations
  - measurement
learning_objectives:
  - Explain why a measurement must include a unit.
  - Distinguish a physical object from a simplified model of it.
  - Use tolerance to decide whether a value is close enough for a purpose.
---

## Why this matters

Computers only become understandable when vague observations become quantities. A wire is not just "thin"; it has length, diameter, resistance, temperature, and manufacturing tolerance. A processor is not just "fast"; it completes work in measurable time under measurable constraints.

Measurement lets engineering arguments be checked by someone else.

## What you should already know

You need basic arithmetic: adding, multiplying, dividing, and comparing numbers. No physics or programming background is required.

## The central intuition

A measurement is a comparison against an agreed reference. Saying a desk is `2` is incomplete. Saying it is `2 meters` means its length is twice the meter reference.

A model is a purposeful simplification. It keeps the details that matter for a question and ignores the details that do not.

## The mechanism

Engineering starts by choosing what to measure, choosing a unit, and deciding how accurate the answer must be. The same object can support many models:

- As a mass when asking whether a table can hold it.
- As a shape when asking whether it fits through a door.
- As an electrical conductor when asking whether current can pass through it.

The model is judged by whether it predicts the thing you care about.

## The smallest useful formal model

A measured quantity can be written as:

```text
quantity = number x unit
```

For example:

```text
length = 0.20 m
```

If a measurement has tolerance, `100 ohms +/- 5%` means values from `95 ohms` to `105 ohms` should be treated as expected.

## Think before continuing

Two resistors are labeled `100 ohms +/- 5%`. One measures `96 ohms`, and one measures `108 ohms`. Which one is inside tolerance?

## Reveal the reasoning

<details>
<summary>Show reasoning</summary>

Five percent of `100 ohms` is `5 ohms`, so the accepted range is `95 ohms` through `105 ohms`. The `96 ohm` resistor is inside tolerance. The `108 ohm` resistor is outside tolerance.

</details>

## Why not the obvious alternative?

The obvious alternative is to use everyday words: small, large, hot, heavy, fast. Those words are useful for conversation, but they cannot decide whether a circuit is safe, a timing signal is late, or a memory cell can reliably store a value.

Numbers without units are not enough either. `5` could mean `5 volts`, `5 amperes`, `5 seconds`, or `5 millimeters`.

## Common misconception

A model is not a lie because it ignores details. A model becomes bad when it ignores a detail that controls the result you are trying to predict.

## Tiny experiment

Measure the width of a book using a ruler. Then estimate it by eye. Write both results with units. How far apart are they? Which answer would you trust if you were cutting a shelf?

## Build or investigation challenge

Choose one object near you and describe it with three different models. For each model, write the question it helps answer and one detail it deliberately ignores.

## What this unlocks

Next, [Matter and Electric Charge](/physics/matter-electric-charge/) uses measurement and modeling to describe why electrical behavior can be counted and compared instead of treated as invisible mystery.
