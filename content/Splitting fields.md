---
aliases:
  - splitting field
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-05T16:55:36-04:00
date: 2025-04-23T12:15:32-04:00
---
# Overview and definition

>[!definition] Splitting field
>Let $F$ be a [[Algebraic fields|field]] and $f \in F[x]$ be a [[Polynomial rings|polynomial]] of degree at least $1$. An [[Extension fields|extension field]] $E$ of $F$ is a **splitting field** for $f$ over $F$ if the following two conditions hold:
>- (i) There is a factorization $f = c \prod_{i=1}^n (x - \alpha_i)$ in $E[x]$, i.e., $f$ factors into a product of linear factors in $E[x]$.
>- (ii) $E$ is generated as an extension field of $F$ by the [[Polynomial roots|roots]] of $f$, i.e., $E = F(\alpha_1, \ldots, \alpha_n)$ in the notation of (i).

**Related theorems:**
- [[(Theorem) Isomorphism extension theorem for finite extensions of fields]]

**Related notes:**
- [[Separable, normal, and Galois extensions of fields]]

---
# Splitting fields and the Galois group

>[!theorem] Transitive action of the Galois group of a splitting field
>Let $E$ be a [[Splitting fields|splitting field]] of the polynomial $f \in F[x]$, where $f$ is [[Irreducible polynomials|irreducible]] in $F[x]$. Then $\text{Gal}(E/F)$ acts transitively on the roots of $f$.



---
# Examples

#### Basic examples of splitting fields

| Polynomial                                                                                  | Field splitting over | Splitting field                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $f \in F[x]$ [[Irreducible polynomials\|irreducible]] of degree $2$, where $F$ is any field | $\mathbb Q$          | $E = F(\alpha)$, where $\alpha$ is a root of $f$. This is because in $E[x]$, we have $f = (x - \alpha)g$ for some $g$ of degree $1$ (hence linear) and $E$ is clearly generated over $F$ by roots of $f$.                                                                                                                  |
| $x^2 - 2$                                                                                   | $\mathbb Q$          | $\mathbb Q(\sqrt 2, - \sqrt 2) = \mathbb Q(\sqrt 2)$                                                                                                                                                                                                                                                                       |
| $x^3 - 2$                                                                                   | $\mathbb Q$          | $\mathbb Q(\sqrt[3]{2}, \omega \sqrt[3]{2}, \omega^2 \sqrt[3]{2}) = \mathbb Q ( \sqrt[3]{2}, \omega)$, where $\omega = (1/2)(-1 + \sqrt -3)$. Note that $\mathbb Q (\sqrt[3]{2})$ is not a splitting field of $x^3 - 2$ over $\mathbb Q$ sine $x^3 - 2$ is not a product of linear factors in $\mathbb Q(\sqrt[3]{2})[x]$. |
|                                                                                             |                      |                                                                                                                                                                                                                                                                                                                            |
