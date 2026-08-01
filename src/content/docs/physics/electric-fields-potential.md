---
id: physics.electricity.fields-potential
title: Electric Fields and Potential
description: Learn how charge creates fields and how electric potential measures energy per unit charge.
kind: concept
status: draft
level: 0
estimated_minutes: 20
prerequisites:
  - physics.matter.charge
tags:
  - physics
  - electricity
learning_objectives:
  - Explain why fields are useful for describing electrical influence.
  - Distinguish electric field from electric potential.
  - Interpret potential as energy per unit charge.
---

## Why this matters

Circuits work because electrical influence can exist across space. A battery can create a difference between two terminals before a wire connects them. To explain that, we need fields and potential.

## What you should already know

You should know that matter can carry positive or negative charge from [Matter and Electric Charge](../matter-electric-charge/).

## The central intuition

An electric field describes the push a positive test charge would feel at a location. Electric potential describes how much energy each unit of charge would have at that location.

Field is about force per charge. Potential is about energy per charge.

## The mechanism

A separated charge arrangement changes the space around it. Instead of saying every charge directly "knows" about every other charge, we describe a field that exists at each point. A charge placed in that field responds to the local field.

Potential is useful because circuits care about energy changes. If a charge moves between two places with different potential, electrical energy can be transferred.

## The smallest useful formal model

Electric potential is measured in volts:

```text
1 volt = 1 joule per coulomb
```

In symbols:

```text
V = E / Q
```

Here `E` is energy in joules, `Q` is charge in coulombs, and `V` is potential in volts.

## Think before continuing

If `2 C` of charge gains `10 J` of energy moving through a device, what potential difference does that represent?

## Reveal the reasoning

<details>
<summary>Show reasoning</summary>

Potential difference is energy per charge: `10 J / 2 C = 5 J/C = 5 V`.

</details>

## Why not the obvious alternative?

The obvious alternative is to track every charged particle and every force between every pair. That is usually too detailed for engineering. Fields and potential compress the situation into quantities we can measure and use in circuit design.

## Common misconception

Voltage is not a substance stored inside a battery. Voltage is a difference in electric potential between two points. It only becomes useful when a path allows charge and energy transfer.

## Tiny experiment

Draw two points labeled `A` and `B`. Assign `A = 9 V` and `B = 3 V`. The potential difference from `A` to `B` is `6 V`. Now swap the labels. The size is still `6 V`, but the direction of energy change reverses.

## Build or investigation challenge

Find a battery label. Write its voltage and explain it as energy per coulomb. For example, `1.5 V` means `1.5 J` per `1 C` of charge in the idealized model.

## What this unlocks

Next, [Voltage, Current, and Resistance](../../electronics/voltage-current-resistance/) connects potential difference to moving charge and material opposition.
