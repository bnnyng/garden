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
lastmod: 2024-10-19T14:53:15-04:00
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
>(a,b) + (c,d) := (a + c, b + d) \quad \quad (a, b) \times (c, d) := (ac-bd, ad+bc)
>$$
>$$
>(a+bi) + (c+di) := (a+c) + (b+d)i \quad \quad (a + bi) \times (c + di) := (ac-bd) + (ad+bc)i.
>$$
>The additive and multiplicative identities on $\mathbb C$ are given by $(0, 0)$ and $(1, 0)$, respectively. Further, given any $(a, b) \in \mathbb C$, the additive and multiplicative inverses are given by 
>$$
>-(a,b) := (-a, -b) \quad \quad (a,b)^{-1} = \left ( \frac{a}{a^2 + b^2}, \frac{-b}{a^2 + b^2} \right ).
>$$

^d9f858

Related: [[The real numbers]]

---
# Complex conjugation and absolute value

>[!example] Definition: Complex conjugation and absolute value on $\mathbb C$
>Given a complex number $z = (a, b) \in \mathbb C$, we define **complex conjugation** by 
>$$
>\overline z = \overline{(a, b)} := (a, -b),
>$$
>or negating the *imaginary part* of $z$. The **absolute value** of a complex number is defined by
>$$
>|z| := \sqrt{z \cdot \overline z},
>$$
>and has the following properties:
>- (i) **Positive-definiteness.** For all $z \in \mathbb C$, we have $|z| \geq 0$ and $|z|=0 \iff z = 0$. 
>- (ii) **Multiplicativity.** For all $z, w \in \mathbb C$, we have $|z \cdot w| = |z| \cdot |w|$.
>- (iii) **Triangle inequality.** For all $z, w \in \mathbb C$, we have $|z + w| \leq |z| + |w|$, with $|z + w| = |z| + |w|$ if and only if one of $z, w=0$ or $z/w$ is a positive real number.
>- (iv) **Reverse triangle inequality.** For all $z, w \in \mathbb C$, we have $||z|-|w|| \leq |z-w|$.


---
# Operations with complex numbers

The complex conjugate shares the following properties with the complex numbers in general:
- $\overline{z+w} = \overline{z} + \overline{w}$;
- $\overline{z} = z \iff z = x + i0$ ; that is, if $z$ is a real number;
- $\overline{z} = -z \iff z = 0 + iy$ ; that is, if $z$ is a purely imaginary number;
- $z \overline{z} = (x + iy)(x-iy) = x^2 + y^2 + i(yx - xy) = |z|^2$, a non-negative real number;
- $z \overline{z} = 0 \iff z = 0$.


Given any complex numbers $z, w \in \mathbb C$, division is equivalent to
$$
\frac{z}{w} = \frac{z}w\cdot \frac{\overline w}{ \overline w} = \frac{z \overline w}{|w|^2}
$$
 
---
# Review


- Show that the two ways of denoting complex numbers are equivalent.
- Verify the properties of the complex conjugate using computation.
