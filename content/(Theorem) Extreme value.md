---
aliases:
  - extreme value theorem
  - EVT
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-10-13 13:36
lastmod: 2024-10-15T14:17:00-04:00
---
# On the reals

>[!abstract] Theorem: Extreme value theorem on $\mathbb R$
>If $f: [a, b] \to \mathbb R$ is [[Continuous functions|continuous]], then there exist points $c, d \in [a,b ]$ such that for all $x \in [a, b]$, we have $f(c) \leq f(x) \leq f(d)$.

^2cff4a

*Proof from [[MATH-GU4051|Topology]].*

---
# On metric spaces

>[!abstract] Theorem: Extreme value theorem on a metric space
>Let $(X, d_X)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] and $K \subseteq X$ be a [[Compactness|compact subset]], and suppose $f : X \to \mathbb R$ is a [[Continuous functions|continuous function]]. Then $f$ attains its maximum and minimum within $K$; that is, there exists $x \in K$ such that 
>$$
>f(x_0) = \sup_{x\in X} \{ f(x)\}.
>$$

^fea58b

*Proof from [[MATH-GU4061|Modern Analysis I]].*

- $f(K)$ is compact since it the image of a compact set under a continuous function
- Since $f(K)$ in $\mathbb R$, we can apply the [[(Theorem) Heine-Borel|Heine-Borel theorem]] to conclude that $f(K)$ is closed and [[Bounded sets and functions|bounded]], and hence has a least upper bound and greatest lower bound

---
# Examples

