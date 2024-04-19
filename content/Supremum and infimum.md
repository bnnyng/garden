---
aliases:
  - lower bound
  - upper bound
  - least upper bound
  - supremum
  - greatest lower bound
  - infimum
  - bounded above
  - bounded below
  - bounded
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
publish: "true"
date: 2024-03-28 10:43
lastmod: 2024-03-31T18:05:59-07:00
---
Let $(X, <)$ be an [[Ordered sets and fields|ordered set]] with [[Axioms of set theory|subset]] $S \subset X$. We have the following definitions in $X$:

>[!example] Definition: Upper and lower bounds
>An **upper bound** for $S$ is an element $x \in X$ where for all $s \in S$, we have $s \leq x$. A **lower bound** for $S$ is an element where we have $x \leq s$.

>[!example] Definition: Bounded above and below
>$S$ is **bounded above** if there *exists* an **upper bound** for $S$, and similarly **bounded below** if there exists a **lower bound**.

>[!example] Definition: Least upper bound (supremum) and greatest lower bound (infimum)
>If one *exists*, the **least upper bound** or **supremum** of $S$ is an **upper bound** $x \in X$ for $X$ so that for *any other* upper bound $x^\prime \in X$ for $S$, we have $x \leq x^\prime$. This is written as $\text{lub}(S)$ or $\text{sup}(S)$.
>
>The **greatest lower bound** or **infimum** is written as $\text{glb}(S)$ or $\text{inf}(S)$.

- *(Lemma)* If $(X,<)$ is an ordered set and $S \subset X$ is a subset with both $x, x^\prime$ as its least upper bounds, then we have $x = x^\prime$.

---
# Review

- Explain why a set that has a **least upper bound** must be *non-empty*. ⭐
- Consider the set $X = \mathbb Q$ with subset $S = \{x \in \mathbb Q \mid x^2 < 2\}$. Prove that $S$ would have a **least upper bound** would have $\text{lub}(S)^2 = 2$. Since $\sqrt{2} \notin S$, the subset $S$ does not have a **least upper bound** in $\mathbb Q$. ⭐