---
aliases:
  - proof by contradiction
  - contradiction
  - contrapositive
tags:
  - permanent-note
  - topic-logic-mathematics
---
# Overview

## Proof strategies with logical equivalences

#wip Consolidate with [[Propositional logic]]?

The most common statement to prove is $P \implies Q$, where $P,Q$ are [[Propositional logic|propositions]]. In an implication, we are allowed to assume the hypothesis $P$ is true, and use this knowledge to prove $Q$. These types of statements can be manipulated to make them more "provable."

---
# Notes

## Contrapositives
- If $P$ and $Q$ are logical statements, the local statements $P \implies Q$ (an **implication**) and $\neg Q \implies \neg P$ (the **contrapositive** of the implication) are logically equivalent
- $P \iff Q \equiv (P \implies Q) \wedge (\neg P \implies \neg Q)$ 

## Proving with $\vee$ and $\wedge$

^b35313

1. $P \implies (Q \wedge R) \equiv (P \implies Q) \wedge (P \implies R)$
Case 1: Hypothesis P; goal Q
Case 2: Hypothesis P; goal R

2. $(P \vee Q) \implies R \equiv (P \implies R) \wedge (Q \implies R)$
Case 1: Hypothesis P; goal R
Case 2: Hypothesis Q; goal R

3. $(P \wedge Q) \implies R \equiv (P \wedge \neg R) \implies \neg Q \equiv (Q \wedge \neg R) \implies \neg P$

4. $P \implies (Q \vee R) \equiv (P \wedge \neg Q) \implies R \equiv (P \wedge \neg R) \implies Q$
Case 1: If Q is true, then the statement must be true
Case 2: If Q is not true, need to prove R

## Proof by contradiction
- $P \implies Q \equiv P \wedge \neg Q \implies F$
- Assuming "towards a contradiction" that the hypothesis is true and the goal is false
- Mathmeticians prefer writing **direct proofs**