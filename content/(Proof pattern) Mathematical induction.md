---
aliases:
  - induction
  - proof by induction
tags:
  - permanent-note
  - topic-logic-mathematics
lastmod: 2025-04-10T12:44:11-04:00
date: 2024-11-26T08:37:26-05:00
---
# Basic definition

>[!theorem] Mathematical induction
>If $P(n)$ is a family of statements where $n \in \mathbb N$, and you can prove
>1. **Base case:** $P(0)$ is true;
>2. **Inductive step:** For all natural numbers, the statement $[ P(n) \implies P(n+1)]$ is true;
>
>then $P(n)$ is true for all natural numbers $n$:
>$$
>[P(0) \wedge [\forall_n [P(n) \implies P(n+1)]]] \implies \forall_n P(n).
>$$

---
# In the philosophy of mathematics

- [[@1994putnam]], p. 505: “Yet as Quine points out, we can recognize that \[the principle of mathematical induction] has a special status—that **it would take something virtually unimaginable to cause us to revise it** (such as discovering a contradiction in the first-order theory of natural numbers?)—without conceding that the status is the status Wittgenstein calls being a “rule of description” (that is, being *analytic*, though Wittgenstein doesn’t use the term).”