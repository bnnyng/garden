---
aliases:
  - complex conjugate
  - conjugate
  - complex number
  - complex conjugation
  - complex numbers
  - absolute value
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
  - MATH-GU4061
publish: 
date: 2024-04-10 17:48
lastmod: 2024-09-23T06:38:21-04:00
status: 🟠
---
# Overview

>[!example] Definition: Complex numbers
>A **complex** number is an ordered pair $(a, b)$ of [[The real numbers|real numbers]] $a, b \in \mathbb R$. A complex number may also be denoted $a + bi$, where $i = \sqrt{-1} = (0, 1)$ and the numbers $a, b$ are the **real** and **imaginary** parts of the number, respectively. 
>
>The [[Field axioms|field]] of **complex numbers** is a tuple $(\mathbb C, +, \cdot, \leq)$ consisting of a set 
>$$
>\mathbb C = \{ (a, b) \ | \ a, b \in \mathbb R \}
>$$
>with addition and multiplication maps $+, \cdot : \mathbb C \times \mathbb C \to \mathbb C$ defined by
>$$
>(a,b) + (c,d) := (a + c, b + d) \quad \quad (a, b) \times (c, d) := (ac-bd, ad+bc).
>$$
>The additive and multiplicative identities on $\mathbb C$ are given by $(0, 0)$ and $(1, 0)$, respectively.

^d9f858

---
# Complex conjugates

>[!example] Definition: Complex conjugate
>A complex number $z = x + iy$ has the **complex conjugate** $\overline{z} = x - iy$, where the imaginary part is negated. 

The complex conjugate shares the following properties with the complex numbers in general:
- $\overline{z+w} = \overline{z} + \overline{w}$;
- $\overline{z} = z \iff z = x + i0$ ; that is, if $z$ is a real number;
- $\overline{z} = -z \iff z = 0 + iy$ ; that is, if $z$ is a purely imaginary number;
- $z \overline{z} = (x + iy)(x-iy) = x^2 + y^2 + i(yx - xy) = |z|^2$, a non-negative real number;
- $z \overline{z} = 0 \iff z = 0$.

---
# Absolute value

>[!example] Definition: Absolute value
>Given a complex number $z$, its **absolute value** $|z|$ is the non-negative square root $\sqrt{z \cdot \overline z}$. 

---
# Review


- Show that the two ways of denoting complex numbers are equivalent.
- Verify the properties of the complex conjugate using computation.