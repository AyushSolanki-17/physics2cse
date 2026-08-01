---
id: electronics.circuits.voltage-current-resistance
title: Voltage, Current, and Resistance
description: Connect voltage, current, and resistance as the first useful model of controlled electrical flow.
kind: concept
status: draft
level: 0
estimated_minutes: 20
prerequisites:
  - physics.electricity.fields-potential
tags:
  - electronics
  - circuits
learning_objectives:
  - Interpret current as charge flow per unit time.
  - Interpret resistance as opposition to current.
  - Use Ohm's law for a simple resistor calculation.
---

## Why this matters

Digital logic eventually depends on circuits that make predictable high and low electrical states. Before switching, we need a model for how charge moves through a material when a voltage difference is applied.

## What you should already know

You should know that voltage is energy per unit charge from [Electric Fields and Potential](../../physics/electric-fields-potential/).

## The central intuition

Voltage is the electrical difference that can drive motion. Current is the rate of charge flow. Resistance is how strongly a path opposes that flow.

The useful picture is not "voltage flows." Charge flows. Voltage helps explain why it flows.

## The mechanism

In a conductor, some electrons can move through the material. A voltage difference across the conductor creates conditions that push charges into a collective drift. Collisions and material structure resist that drift, so the current is limited.

A resistor is a component designed to provide a predictable resistance.

## The smallest useful formal model

Current is charge per time:

```text
I = Q / t
```

For many simple resistors, Ohm's law is a useful model:

```text
V = I x R
```

If `V = 5 V` and `R = 100 ohms`, then:

```text
I = V / R = 5 / 100 = 0.05 A
```

That is `50 mA`.

## Think before continuing

With the same `5 V` source, what happens to the current if resistance increases from `100 ohms` to `1000 ohms`?

## Reveal the reasoning

<details>
<summary>Show reasoning</summary>

Using `I = V / R`, the current becomes `5 / 1000 = 0.005 A`, or `5 mA`. Increasing resistance reduced current by a factor of 10.

</details>

## Why not the obvious alternative?

The obvious alternative is to say "more voltage means more electricity." That phrase hides the measurable relationship. A high voltage across a huge resistance can produce a tiny current. A lower voltage across a tiny resistance can produce a dangerous current.

## Common misconception

Current is not used up by a resistor. In a simple single-loop circuit, the same current enters and leaves the resistor. Energy is transferred in the resistor, often becoming heat.

## Tiny experiment

Calculate the current for three resistors connected to `3 V`: `100 ohms`, `300 ohms`, and `1000 ohms`. Which one allows the most current? Which one limits current most strongly?

## Build or investigation challenge

Find an LED circuit diagram that includes a resistor. Identify which part provides voltage, which part emits light, and which part limits current.

## What this unlocks

Next, [A First Circuit Model](../first-circuit-model/) combines voltage, current, and resistance into a complete loop that can transfer energy predictably.
