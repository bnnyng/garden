---
aliases:
  - simple function on a set of finite measure
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
status: 
publish: 
date: 2024-04-24 15:56
lastmod: 2024-05-06T13:08:12-07:00
---
# Simple functions on sets of finite measure

>[!example] Definition: Lebesgue integral for simple functions on sets of finite measure
>If $phi: E \to \mathbb R$ is a [[Simple functions|simple function]], meaning $\phi$ takes finitely many values $a_1, …, a_n$, and $E$ is a set of finite [[Lebesgue measure|measure]], the **Lebesgue integral** of $\phi$ over $E$ is defined as
>$$
>\int_E \phi = \sum_{k=1}^n a_k \cdot m(E_k).
>$$

The integral has the following key properties:
- **The values of the simple function need not be distinct.** Let $\{ E_k\}_{k=1}^n$ be a finite disjoint collection of measure subsets for a set of finite measure $E$ (linearity makes this restriction unnecessary), and let $a_k$ be a real number for $1 \leq k \leq n$. If $\phi$ is a function defined on $E$, then
$$
\phi = \sum_{k=1}^n a_k \cdot \chi_{E_k} \ \implies \ \int_E \phi = \sum_{k=1}^n a_k \cdot m(E_k).
$$
- **Linearity.** If $\phi, \psi$ are simple functions defined on a set of finite measure $E$, then for any $\alpha, \beta$, we have
$$
\int_E (\alpha \phi + \beta \psi) = \alpha \int_E \phi + \beta \int_E \psi.
$$
- **Monotonicity.** If $\phi \leq \psi$ on $E$, then $\int_E \phi \leq \int_E \psi$.

---
# Bounded real-valued functions on sets of finite measure

>[!example] Definition: Lower and upper Lebesgue integral
>Let $f: E \to \mathbb R$ be a [[Bounded sets and functions|bounded]] function and $E$ be a set of finite measure. The **lower and upper Lebesgue integrals** of $f$ over $E$ are defined, respectively, by
>$$
> \text{sup}\left\{ \int_E \phi \ | \ \phi \text{ simple and } \phi \leq f \text{ on E} \right \} 
> \quad \text{and} \quad
> \text{inf}\left\{ \int_E \psi \ | \ \psi \text{ simple and } f \leq \psi \text{ on E} \right \}. 
>$$

>[!example] Definition: Lebesgue integral for bounded functions on sets of finite measure
>A bounded function $f$ on a domain of finite measure $E$ is **Lebesgue integrable** over $E$ if its upper and lower Lebesgue integrals over $E$ are equal. In this case, we call this value the **Lebesbue integral** $\int_E f.$




>[!abstract] Theorem:

>[!example] Definition: 
>