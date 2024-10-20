---
aliases:
  - bounded set
  - bounded
  - boundedness
  - bounded function
  - lower bound
  - upper bound
  - least upper bound
  - supremum
  - greatest lower bound
  - infimum
  - bounded above
  - bounded below
  - diameter
  - limit superior
  - limit inferior
  - escapes to infinity
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
  - MATH-UN1208
  - MATH-GU4061
publish: "true"
date: 2024-03-28 10:43
lastmod: 2024-10-15T18:45:23-04:00
status: 🔴🔨
---

- Boundedness is a property of metric, not a property of the general topological space

>[!question]
>- How is sequence escaping to infinity different from diverging to infinity?
>- Negative $-\infty$ case of limit superior?

---
# Supremum and infimum

Let $(X, <)$ be an [[Order relations on sets and fields|ordered set]] with [[Axioms of set theory|subset]] $S \subset X$. We have the following definitions in $X$:

>[!example] Definition: Upper and lower bounds
>An **upper bound** for $S$ is an element $x \in X$ where for all $s \in S$, we have $s \leq x$. A **lower bound** for $S$ is an element where we have $x \leq s$.

>[!example] Definition: Bounded above and below
>$S$ is **bounded above** if there *exists* an **upper bound** for $S$, and similarly **bounded below** if there exists a **lower bound**.

>[!example] Definition: Least upper bound (supremum) and greatest lower bound (infimum)
>If one *exists*, the **least upper bound** or **supremum** of $S$ is an **upper bound** $x \in X$ for $X$ so that for *any other* upper bound $x^\prime \in X$ for $S$, we have $x \leq x^\prime$. This is written as $\text{lub}(S)$ or $\text{sup}(S)$.
>
>The **greatest lower bound** or **infimum** is written as $\text{glb}(S)$ or $\text{inf}(S)$.

- *(Lemma)* If $(X,<)$ is an ordered set and $S \subset X$ is a subset with both $x, x^\prime$ as its least upper bounds, then we have $x = x^\prime$.

![[(Theorem) Elements in a subset of the reals can be arbitrarily close to the least upper bound#^438b35]]

---
# In metric spaces

## Bounded sets and diameters

>[!example] Definition: Bounded sets in metric spaces
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] with a subset $A \subset X$. Then $A$ is **bounded** if there exists a point $x \in X$ and some $r > 0$ such that $A$ is contained in the $r$-ball about $x$ given by 
>$$
>B(x, r) = \{y \in X \ | \ d(x,y) < r \}.
>$$ 

^8bd60c

>[!example] Definition: Diameter of a bounded set in a metric space
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] and $A \subseteq X$ be bounded. Then the **diameter** of $A$ is defined by 
>$$
>\text{diam} (A) = \text{sup} \{ d(x, y) \ | \ x,y \in A\}. 
>$$
>Note that $A$ is **bounded** if and only if the diameter is finite.

^437db8

![[Closed sets, closures, and dense subsets#^161a01]]


## Bounded sequences, limit superior and inferior

>[!example] Definition: Bounded sequences in metric spaces
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]]. We say a [[Sequences|sequence]] $(x_n)_{n \in \mathbb N}$ in $X$ is **bounded** if there exist $x \in X$ and $r > 0$ such that for all $n \in \mathbb N$, we have $d(x_n, x) < r$. 

^9253f7

>[!example] Definition: Sequence escaping to infinity in $\mathbb R$
>We say a sequence $(x_n)_{n \in \mathbb N}$ in $\mathbb R$ **escapes to infinity** if for every $C \in \mathbb N$, there exists $N \in \mathbb N$ such that $x_n \geq C$ for all $n \geq N$. 
>

^53990e

>[!example] Definition: Limit superior of a sequence in $\mathbb R$
>Let $(x_n)_{n \in \mathbb N}$ be a sequence $\mathbb R$, and let $A$ be the set of all **sub-sequential limits** of $(x_n)_{n \in \mathbb N}$. Then the **limit superior**, denoted $\lim \sup x_n$, is the value given by:
>- $\sup A$, if $A$ is bounded and not empty;
>- $\infty$, if there exists a *sub-sequence* of $(x_n)_{n \in \mathbb N}$ that [[Bounded sets and functions|escapes to infinity]];
>- $-\infty$, if the entire sequence $(x_n)_{n \in \mathbb N}$ escapes to $-\infty$.

^496c53



---
# Review

- Explain why a set that has a **least upper bound** must be *non-empty*. ⭐
- Consider the set $X = \mathbb Q$ with subset $S = \{x \in \mathbb Q \mid x^2 < 2\}$. Prove that $S$ would have a **least upper bound** would have $\text{lub}(S)^2 = 2$. Since $\sqrt{2} \notin S$, the subset $S$ does not have a **least upper bound** in $\mathbb Q$. ⭐

---
