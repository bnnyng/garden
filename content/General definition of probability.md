---
aliases:
  - axioms of probability
  - properties of probability
  - inclusion-exclusion
  - disjoint events
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: 🟠
publish: 
date: 2024-09-14 17:27
lastmod: 2024-09-30T10:47:51-04:00
---
>[!example] Definition: General definition of probability
>A **probability space** consists of a sample space $\mathcal S$ and a **probability function** $P: A \to [0,1]$ for some **event** $A \subseteq \mathcal S$. The function $P$ must satisfy the following axioms:
>1. $P(\varnothing) = 0$ and $P(\mathcal S) = 1$.
>2. If $A_1, A_2, …$ are disjoint, or **mutually exclusive**, events, then
>$$
>P \left(\bigcup_{j=1}^\infty A_j \right) = \sum_{j=1}^\infty P(A_j).
>$$

Note that (2) implies disjointness $A \cap B = \varnothing$ means precisely that $P (A \cap B) = 0$.


>[!abstract] Theorem (Blitzstein and Hwang 1.6.2): Properties of probability
>For any events $A, B$:
>- $P(A^C) = 1 - P(A)$
>- If $A \subseteq B$, then $P(A) \leq P(B)$.
>- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

>[!abstract] Theorem (Blitzstein and Hwang 1.6.3): Inclusion-exclusion
>For any events $A_1, …, A_n$, the probability of their [[Algebra of sets|union]] is given by
>$$
>\begin{align}
>P \left(  \bigcup_{i=1}^n A_i\right) = \sum_i P(A_i) - \sum_{i < j} P(A_i \cap A_j) 
>&+ \sum_{i < j < k}P(A_i \cap A_j \cap A_k) - \cdots \\
>&+ (-1)^{n+1}P(A_1 \cap \cdots \cap A_n).
>\end{align}
>$$

