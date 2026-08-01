---
id: electronics.circuits.first-model
title: A First Circuit Model
description: Build the first complete circuit model using a source, a load, and a closed path.
kind: concept
status: draft
level: 0
estimated_minutes: 18
prerequisites:
  - electronics.circuits.voltage-current-resistance
tags:
  - electronics
  - circuits
learning_objectives:
  - Explain why a simple circuit needs a closed path.
  - Identify source, path, and load in a circuit model.
  - Calculate current and power in a one-resistor circuit.
---

## Why this matters

A computer is built from circuits, but a circuit is not just a collection of parts. It is an arranged path for charge and energy transfer. The first useful circuit model shows why arrangement matters.

## What you should already know

You should know how voltage, current, and resistance relate from [Voltage, Current, and Resistance](/electronics/voltage-current-resistance/).

## The central intuition

A simple circuit needs a source, a conducting path, and a load. The source maintains a voltage difference. The path allows charge to move. The load is where electrical energy is transferred into another form.

If the path is open, the simple steady current model no longer applies.

## The mechanism

Consider a battery connected to one resistor by wires. The battery separates charge chemically, maintaining a voltage difference across its terminals. The wires connect the terminals through the resistor. The resistor limits current and transfers electrical energy, usually as heat.

The closed loop matters because charge cannot pile up forever in an ordinary wire. A steady current requires a continuous path.

## The smallest useful formal model

For a one-resistor circuit:

```text
I = V / R
P = V x I
```

If a `9 V` battery is connected to a `300 ohm` resistor:

```text
I = 9 / 300 = 0.03 A
P = 9 x 0.03 = 0.27 W
```

The resistor must be able to handle about `0.27 W` in this model.

## Think before continuing

If the wire is disconnected at one point, what happens to the steady current in this simple model? What happens to the battery's voltage difference?

## Reveal the reasoning

<details>
<summary>Show reasoning</summary>

The steady current becomes `0 A` because the path is open. The battery can still maintain a voltage difference between its terminals, but without a closed path there is no continuous charge flow around the loop.

</details>

## Why not the obvious alternative?

It is tempting to treat a circuit like a pipeline where the battery simply pours charge into one end. That picture fails because charge is already present throughout the conductor. The battery helps organize energy transfer around a closed path.

## Common misconception

A battery does not create the electrons that move through the whole circuit. Conductive material already contains movable charges. The battery maintains conditions that drive charge motion and energy transfer.

## Tiny experiment

Calculate the current and power for a `5 V` source and a `1000 ohm` resistor. Then repeat for `500 ohms`. Which case transfers more power?

## Build or investigation challenge

Draw a one-resistor circuit with a switch. Label source, path, load, and open or closed state. Explain what changes when the switch opens.

## What this unlocks

This model prepares the next planned step: signals and switching. That lesson will explain how circuits can represent changing states rather than only steady energy transfer.
