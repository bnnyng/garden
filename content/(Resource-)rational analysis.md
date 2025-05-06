---
aliases:
  - rational analysis
  - resource-rational analysis
  - bounded optimality
  - boundedly rational
tags:
  - permanent-note
  - topic-cognitive-science
publish: "true"
date: 2024-10-13 20:16
lastmod: 2025-05-04T14:12:32-04:00
---

# Overview

$\quad$ **Rational analysis**, developed by [[@1990andersonAdaptive]], is a paradigm for modeling human cognition that assumes that cognition is a [[Rationality in cognitive science|rational]] adaptation to environmental structure and goals pursued within it. **Rational process models** of human behavior can then be derived from assumptions of the environment. This is similar to ecological explanations of animal behavior based on **evolutionary fitness**.

$\quad$ **Resource-rational analysis**, after [[@2020liederResource]], extends this paradigm to account for limited computational resources using the principle of **bounded optimality**, a *normative standard* in which the cognitive process an agent executes performs as well or better than any other process the agent could perform given their constraints.

![[Pasted image 20241107122640.png|300]]

$\quad$ Rational process models help to connect [[Classical levels of cognitive theory|computational and algorithmic]] levels of analysis.

---

# Problems of indiscriminate confirmation

$\quad$ The classical inductive scientific method is epistemically flawed in an immature science like psychology, which lacks an established body of facts: confirmation of a hypothesis by an observation is a logical fallacy, **affirming the consequent** ($(P \implies Q) \wedge Q \implies P$); on the other hand, failure to confirm a hypothesis could be attributed to both the main hypothesis as well as any number of other auxiliary assumptions.

$\quad$ The resource-rational method is deductive: 

$$
\text{environment} \ \wedge \ \text{rationality assumption} \ \wedge \ \text{constraints} \ \implies \text{behavior}.
$$

The environment consists of observables that are true by definition, and the rationality assumption is intended to be trivially true. Thus, in the case that observed behavior does not confirm a hypothesis, we know to modify our model of constraints.

---

# Steps of rational vs. resource-rational analysis

>[!example] Steps of rational analysis ([[@1990andersonAdaptive]]):
>1. Precisely specify what the goals of the cognitive system are.
>2. Develop a formal model of the environment to which the system is adapted.
>3. Make the minimal assumptions about computational limitations.
>4. Derive the optimal behavioral function given (1) to (3).
>5. Examine the empirical literature to see if the predictions of the behavioral function are confirmed.
>6. If predictions are off, iterate.

>[!example] Six steps of resource-rational analysis ([[@2020liederResource]]):
>1. Begin by giving an aspect of cognition with a [[Classical levels of cognitive theory|computational-level]] (i.e., [[Classical theories of mind|functional]]) description in terms of a problem and its solution.
>2. Determine which class of [[Classical levels of cognitive theory|algorithms]] the mind’s computational architecture may be used to solve these this problem in a **satisficing** way, then determine the resource cost of these algorithms and the utility of more accurately approximating the correct solution.
>3. Find the particular algorithm that optimally trades off resource cost and utility.
>4. Evaluate the resulting **rational process model** against empirical data.
>5. Refine computational-level theory from step (1) or assumptions about computational architecture and constraints (2) to make a new resource-rational model, then iterate until model’s predictions are sufficiently realistic.
