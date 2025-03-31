---
aliases:
  - pointwise bounded
  - equicontinuous
  - uniformly equicontinuous
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🔨
publish: 
date: 2024-12-03 15:00
lastmod: 2024-12-12T20:24:14-05:00
---
# Overview

Relevant theorems:
- [[(Theorem) Every pointwise bounded sequence of functions has a pointwise convergent subsequence]]
- [[(Theorem) Arzela-Ascoli]]

See also: [[Convergent sequences of functions]]

---
# Bounded sequences of functions

> [!example] Definition: Pointwise, uniformly bounded sequence of functions
> Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] and $f_n : X \to \mathbb R$ be a sequence of functions. We say $f_n$ is:
> - **Pointwise bounded** on $X$ if for all $x \in X$, the sequence of numbers $\{f_n(x)\}$ is bounded;
> - **Uniformly bounded** on $X$ if for all $x \in X$, there exists some $M > 0$ such that for all $n \in \mathbb N$, we have
> $$
> |f_n(x)| < M.
> $$

^64923f

![[(Theorem) Every pointwise bounded sequence of functions has a pointwise convergent subsequence#^dd5982]]


---
# Equicontinuity

>[!example] Definition: Equicontinuous family of functions
>Suppose $(X, d)$ is a [[Metrics, metric spaces, and the metric topology|metric space]] and $E \subseteq X$. A family $\mathcal F = \{ f\}$ of complex functions is **equicontinuous** on $E$ if for all $\epsilon > 0$ and $x \in X$, there exists $\delta(x, \epsilon) > 0$ such that for any other $y \in E$ and $f \in \mathcal F$, we have
>$$
>d(x, y) < \delta \implies |f(x) - f(y)| < \epsilon.
>$$ 
>Note that this implies every $f \in \mathcal F$ is [[Continuous functions|uniformly continuous]].
>
>Further, we say that $\mathcal F$ is **uniformly equicontinuous** if the same $\delta(\epsilon)>0$ shows equicontinuity at each $f$.

^0e076a



