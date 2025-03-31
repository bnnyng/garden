---
aliases:
  - simple function
  - canonical representation
  - simple approximation
  - step function
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
status: 🟥
publish: "true"
date: 2024-05-01 12:17
lastmod: 2024-05-06T12:57:23-07:00
---
>[!example] Definition: Simple function, canonical representation of simple functions
>A real-valued function $\phi: E \to \mathbb R$ is **simple** if it is [[Measurable functions|measurable]] and takes a finite number of values.
>A simple function $\phi$ that takes the distinct values $c_1, …, c_n$ has the **canonical representation** 
>$$
>\phi = \sum_{k=1}^n c_k \cdot \chi_{E_k} \text{ on $E$, where } E_k = \{ x \in E \ | \ \phi(x) = c_k \},
>$$
>a linear combination of characteristic functions for each set $E_k$. In particular, this requires the $E_k$s to be disjoint and $c_k$s to be distinct.

>[!abstract] Lemma: Approximation by simple functions
>Let $f: E \to \mathbb R$ be [[Measurable functions|measurable]] and bounded, meaning there exists some $M > 0$ such that $|f(x)| \leq M$ on $E$. Then for all $\epsilon > 0$, there exist simple functions $\phi_\epsilon, \psi_\epsilon: E \to \mathbb R$  such that 
>$$
>\phi_\epsilon \leq f \leq \psi_\epsilon \quad \text{and} \quad 0 \leq \psi_\epsilon - \phi_\epsilon < \epsilon.
>$$

---
# Examples

- **Step functions**, which take finite values, and each interval is measurable