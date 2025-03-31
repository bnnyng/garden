---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-10-31 18:25
lastmod: 2024-10-31T19:07:35-04:00
---
# Overview

**Peano’s space-filling curve** is a *continuous* surjective function from the interval $I = [0,1]$ to the square $I^2$.


---
# Preliminaries

Recall the following facts:
- A metric space is [[Completeness|complete]] if every Cauchy sequence converges.
- [[(Theorem) Every compact metric space is complete]]
- [[(Theorem) A closed subspace of a complete metric space is complete]]

>[!abstract] Theorem: The set of continuous functions is closed with respect to the uniform topology
>Let $(Y, d)$ be a complete metric space, and write 
>$$
>Y^J = \{ J \to Y\} = \prod_{\alpha \in J} Y
>$$
>for function space on $Y$. Then:
>- (i) $Y^J$ is complete in the [[Metrics, metric spaces, and the metric topology|uniform metric]];
>- (ii) If $X$ is a [[Topological spaces and open sets|topological space]], the space of continuous functions $\mathcal C(X, Y) = \{ X \to Y \text{ continuous}\} \subseteq Y^J$ is closed with respect to the uniform topology.
>
>As a corollary, if $(Y, d)$ is complete and the function space $Y^X$ is complete in the uniform metric, then $\mathcal C (X, Y)$ is complete by [[(Theorem) A closed subspace of a complete metric space is complete]].

*Proof of (ii) from [[MATH-GU4051|Topology]].*

If $(f_n)$ is a sequence of functions in $\mathcal C (X, Y)$ that [[Convergent sequences of functions|converges]] to $f \in Y^X$, then it converges uniformly (see HW 4.5 #wip ). Then $f$ is also continuous by [[(Theorem) The limit of a uniformly convergent sequence of continuous functions is continuous]]. 

---

>[!abstract] Claim: The sequence of “basic operations” $(f_n)$ is Cauchy

- In $\mathcal (I, I^2)$ with the square metric

*Proof from [[MATH-GU4051|Topology]].*

For all $t \in I$, we know $f_n(t)$ and $f_{n+1}(t)$ are contained in a “sub-square” of side length $\frac{1}{2^n}$. Then 
$$
d(f_n(t), f_{n+1}(t)) \leq \frac{1}{2^n} \implies \overline \rho (f_n, f_{n+1}) \leq \frac{1}{2^n}.
$$

Since $\mathcal C (I, I^2)$ is complete, $f_n \to f$ is continuous.

>[!abstract] Claim: $f$ is surjective.

Goal is to show that $f(\overline I) = I^2$.