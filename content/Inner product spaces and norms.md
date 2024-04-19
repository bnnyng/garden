---
aliases:
  - inner product
  - dot product
  - real dot product
  - complex dot product
  - standard inner product
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
publish: "true"
date: 2024-04-10 17:44
lastmod: 2024-04-10T18:33:46-07:00
---
# Overview

An **inner product** is a function that takes two input vectors and outputs a scalar; this function must be positive, definite, linear on the first input, and have [[Complex numbers and conjugates|conjugate]] symmetry. The most important examples of inner products are the standard dot products on $\mathbb R^n$ and $\mathbb C^n$.

An inner product space is a [[Vector space and subspace axioms|vector space]] together with an inner product on it. 

Related: [[Metrics and metric spaces]]

---
# Real and complex dot products

The **real dot product** of $x,y \in \mathbb R^n$ satisfies the following properties:
- **Bilinear**, or linear on inputs $x,y$ separately;
- **Symmetric**, or outputs the same value no matter the order of inputs;
- Has $x \cdot x = ||x||^2$, the **length-squared** of $x$;
- Has $x \cdot x = 0 \iff x = \vec 0$.

>[!example] Definition: Complex dot product
>The **complex dot product**, or **standard inner product on $\mathbb C^n$**, of $z,w \in \mathbb C^n$ is defined by
>$$ 
>\begin{pmatrix} z_1 \\ \cdots \\ z_n \end{pmatrix} \cdot \begin{pmatrix} w_1 \\ \cdots \\ w_n \end{pmatrix} = z_1\overline{w_1} + \cdots + z_n\overline{w_n}.
>$$

The **complex dot product** has the following properties:
- $z \cdot z = |z_1|^2 + \cdots + |z_n|^2$, with $z \cdot z = 0 \iff z = \vec 0$;
- Additive in both coordinates: $(z + z^\prime) \cdot w = z \cdot w + z^\prime \cdot w$;
- Respects scaling in first coordinate only: $(cz) \cdot w = c(z \cdot w)$;
- Scaling the second coordinate is equal to scaling the dot product by the complex conjugate of that scalar: $z \cdot (cw) = \overline{c}(z \cdot w)$;
- Swapping the terms changes the dot product by a [[Complex numbers and conjugates|complex conjugation]]: $z \cdot w = \overline{w \cdot z}$.

---
# Inner product spaces

>[!example] Definition: Inner product space
>An **inner product space** consists of two pieces of data:
>- (D1) A vector space $V$ over the field $\mathbb F$, which is either $\mathbb R$ or $\mathbb C$;
>- (D2) A function $\langle - , -\rangle : V \times V \to \mathbb F$ which takes two input vectors and returns an element of the underlying field.
>
>This data must satisfy four axioms:
>- (I1) **Positive.** The quantity $\langle v, v \rangle$, called the **norm-squared**, is a *non-negative real number*.
>- (I2) **Definite.** $\langle v,v \rangle = 0 \iff v = \vec 0$.
>- (I3) **Linearity on the first input.** For any $a,b \in \mathbb F$ and any $v,w,u \in V$, we have $\langle av + bw, u \rangle = a \langle v, u \rangle + b \langle w, u \rangle$.
>- (I4) **Conjugate symmetry.** For any $v,w \in V$, we have $\langle w, v \rangle = \overline{\langle v, w \rangle}$.
>- (I3 + I4) **Conjugate-linear, or antilinear, on the second input.** $\langle v, aw + bu \rangle = \overline{a} \langle v, w \rangle + \overline{b} \langle v, u \rangle$.

Note that subspaces of inner product spaces also have the properties of inner product spaces.

---
# Norms

>[!example] Definition: Norm on an inner product space
>If $V$ is an inner product space, the **norm**, or **magnitude**, is a function $\| \cdot \| : V \to [0, \infty)$ defined by $\sqrt{\langle v, v \rangle} \in [0, \infty)$.

>[!abstract] [[MATH-UN1207]], Lemma 102
>The **norm** on an **inner product space** satisfies the following properties:
>- (N1) $\| v \| \geq 0$, and $\|v\| = 0 \iff v = \vec 0$.
>- (N2) $\|cv\| = |c| \|v\|$
>- (N3) $\|v + w \|^2 = \|v\|^2 + \|w\|^2 + 2\text{Re} \langle v,w \rangle$. In particular, $\|v + w \|^2 = \|v\|^2 + \|w\|^2$ if and only if $\langle v, w \rangle$ has no real part. 

---
# Review

- What are the five key properties of the real dot product? How do they differ from the complex dot product?