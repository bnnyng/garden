---
aliases:
  - induction
  - proof by induction
tags:
  - permanent-note
  - topic-logic-mathematics
---
## Mathematical induction

If $P(n)$ is a family of statements where $n \in \mathbb N$, and you can prove
1. **Base case:** $P(0)$ is true
2. **Inductive step:** For all natural numbers, the statement $[ P(n) \implies P(n+1)]$ is true

Then $P(n)$ is true for all natural numbers $n$.

3. $[P(0) \wedge [\forall_n [P(n) \implies P(n+1)]]] \implies \forall_n P(n)$