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
lastmod: 2025-08-04T22:41:34-04:00
---

# Overview

$\quad$ **Rational analysis**, developed by [[@1990andersonAdaptive]], is a paradigm for modeling human cognition by explaining behavior in terms of adaptive solutions to the problems they face. Assuming cognition is a [[Rationality in cognitive science|rational]] adaptation to environmental structure and goals pursued within it, [[Rational process models of cognition|rational process models]] of human behavior can then be derived from assumptions on the environment. This is similar to ecological explanations of animal behavior based on **evolutionary fitness** and leads naturally to [[Bayesian models of cognition|Bayesian models of cognition]].

$\quad$ **Resource-rational analysis**, after [[@2020liederResource]], extends this paradigm to account for limited computational resources using the principle of **bounded optimality**, a *normative standard* in which the cognitive process an agent executes performs as well or better than any other process the agent could perform given their constraints.

![[Pasted image 20241107122640.png|300]]


**Related notes:**

- [[(Sequential) decision problems]]
- [[Rational process models of cognition]]

---
# Atomic notes

- [[Cost-theoretic vs. panoramic approaches to resource rationality, after Icard (2025)]]

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
>1. Begin by giving an aspect of cognition with a [[Computational, algorithmic, and implementation level analyses of information-processing systems, after Marr (1982)|computational-level]] (i.e., [[Classical theories of mind|functional]]) description in terms of a problem and its solution.
>2. Determine which class of [[Computational, algorithmic, and implementation level analyses of information-processing systems, after Marr (1982)|algorithms]] the mind’s computational architecture may be used to solve these this problem in a **satisficing** way, then determine the resource cost of these algorithms and the utility of more accurately approximating the correct solution.
>3. Find the particular algorithm that optimally trades off resource cost and utility.
>4. Evaluate the resulting **rational process model** against empirical data.
>5. Refine computational-level theory from step (1) or assumptions about computational architecture and constraints (2) to make a new resource-rational model, then iterate until model’s predictions are sufficiently realistic.


---
# Reading notes

[[@2024griffithsBayesian]]

- “While rational analysis strives to predict human behavior from people’s goals and the structure of the environment alone, resource-rational analysis strives to uncover cognitive mechanisms and representations by taking into account the cognitive architecture that people have available to pursue their goals.” (315)

[[@2025icardResource]]

- “A founding doctrine for the field of cognitive science is that—at an appropriate level of abstraction and idealization—the mind can be understood as solving various informational problems (Newell et al., 1959; Marr and Poggio, 1976; Marr, 1982). This perspective affords a distinctive methodological tool, a potentially powerful way of formulating psychological hypotheses. If we can clarify the problem some cognitive system is solving, then we can use solutions to that problem as guiding hypotheses for the particular way the mind manages to solve them. This is the methodology of rational analysis.” (85)

---
# References

- [[@2015griffithsRational]], “Rational use of cognitive resources”
- [[@2020liederResource]], “Resource-rational analysis”
- [[@2025icardResource]], *Resource Rationality*