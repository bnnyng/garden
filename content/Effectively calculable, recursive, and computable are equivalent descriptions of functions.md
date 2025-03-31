---
aliases:
  - formal system
  - consistent
  - effective procedure
  - effective process
  - decidable
  - recursive
  - mechanizable
  - mechanical
tags:
  - permanent-note
  - topic-logic-mathematics
publish: 
date: 2025-02-17T18:19:57-05:00
lastmod: 2025-03-03T03:21:23-05:00
---
# Overview

According to Gödel, the essence of a **formal system** is that “reasoning is completely replaced by mechanical operations on formulas.” In a formal system, every sequence of symbols in the system’s alphabet has an (human) **effective procedure** for checking whether it is a term, formula, axiom, or proof. A statement is **decidable** if there is an effective procedure for determining its truth value in the system.

**Related notes:** [[Undecidability and incompleteness theorems]]

---
# Equivalent characterizations of formal statements

The following are equivalent ways to interpret the statements made in a **formal system**:

- **Effective (decidable) functions:** An intuitive notion, used in the context of [[Undecidability and incompleteness theorems|Godel’s theorems]]. The set of formulas that are **effectively enumerable**, meaning that there exists a **mechanical procedure**—an **algorithm**—for producing the entire set. Such formulas are called **provable formulas**.
- **Recursive functions:** “The intersection of **partial functions** that includes some ‘initial functions’ and is closed under additional operations.”
- **Computable functions:** The set of functions that can be computed by a [[Turing machines|Turing machine]], a mathematical precisification of the concept “human effectively computable” by means of an “apparatus” with a reader, an infinite tape, and a simple set of instructions.

---
# Reading notes

Kleene (1981), quoted in [[@2022kennedyAxis]]:

> Turing’s computability is intrinsically persuasive but $\lambda$-definability is not intrinsically persuasive and general recursiveness scarcely so (its author Gödel being at the time not at all persuaded).

Godel’s (1963) postscript, again quoted in [[@2022kennedyAxis]]:

>In consequence of later advances, in particular of the fact that due to A. M. Turing’s work a precise and unquestionably adequate definition of the general notion of formal system70 can now be given, a completely general version of Theorems VI and XI is now possible. That is, it can be proved rigorously that in every consistent formal system that contains a certain amount of finitary number theory there exist undecidable arithmetic propositions and that, moreover, the consistency of any such system cannot be proved in the system.
>
>Footnote 70: In my opinion the term “formal system” or “formalism” should never be used for anything but this notion.


