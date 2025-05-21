---
aliases:
  - complex conjugation
  - complex conjugate
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-05-07T11:36:15-04:00
date: 2025-04-22T20:01:03-04:00
---
# Overview and definition

>[!definition] Complex conjugation
>Given a complex number $z = (a, b) \in \mathbb C$, we define **complex conjugation** by 
>$$
>\overline z = \overline{(a, b)} := (a, -b),
>$$
>or negating the *imaginary part* of $z$. 

>[!definition] Absolute value of a complex number
>The **absolute value** of a complex number is defined by
>$$
>|z| := \sqrt{z \cdot \overline z},
>$$
>and has the following properties:
>- (i) **Positive-definiteness.** For all $z \in \mathbb C$, we have $|z| \geq 0$ and $|z|=0 \iff z = 0$. 
>- (ii) **Multiplicativity.** For all $z, w \in \mathbb C$, we have $|z \cdot w| = |z| \cdot |w|$.
>- (iii) **Triangle inequality.** For all $z, w \in \mathbb C$, we have $|z + w| \leq |z| + |w|$, with $|z + w| = |z| + |w|$ if and only if one of $z, w=0$ or $z/w$ is a positive real number.
>- (iv) **Reverse triangle inequality.** For all $z, w \in \mathbb C$, we have $||z|-|w|| \leq |z-w|$.

---

# In ring theory

- [[Galois groups]]: Complex conjugation $\sigma : \mathbb C \to \mathbb C$ is an **automorphism**, and in particular an element of the **Galois group** $\text{Gal}(\mathbb C / \mathbb R)$, which is the set of automorphisms that fix $\mathbb R$. In fact, we have $\text{Gal}(\mathbb C / \mathbb R) = \{ \text{id}, \sigma\}$.
