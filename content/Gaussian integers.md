---
aliases:
  - rationalizing the denominator
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔴 🔨 ❓
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-05-09T12:28:02-04:00
---
# Overview 

Variants include any square-free integers and extension fields of rationals

>[!definition] Gaussian integers
>The **Gaussian integers $\mathbb Z[i] \leq \mathbb C$** is the commutative [[Algebraic rings|ring with unity]] with elements
>$$
>\mathbb Z [i] = \{ a+ bi \ : \ a,b \in \mathbb Z \};
>$$ 
>that is; $\mathbb Z[i]$ is the set of complex numbers where both real and imaginary parts are integers. Addition and multiplication on the ring $\mathbb Z[i]$ are induced by the usual operations on [[Complex numbers|complex numbers]]. 

^704b4e

>[!lemma] Group of units for the Gaussian integers
>The Gaussian integers $\mathbb Z[i]$ are *not* a field, and the set of elements with inverses are
>$$
>(\mathbb Z[i])^* = \{ \pm 1, \pm i \} = \langle i \rangle,
>$$
>a [[Cyclic groups|cyclic]] group of order 4.

**Relevant theorems:**
- [[(Theorem) Irreducible elements in the Gaussian integers]]

**Related notes:**
- [[Finite extensions of the rationals]]

---
# Properties

- [[Algebraic rings]]: The Gaussian integers are *not* a field, and the **group of units** (i.e., set of element with inverses) is 
$$
(\mathbb Z[i])^* = \{ \pm 1, \pm i \} = \langle i \rangle,
$$
a cyclic group of order 4.
- [[Euclidean domains]]: The Gaussian integers are a **Euclidean domain** with **norm** $N : \mathbb Z[i] \backslash \{ 0 \} \to \mathbb Z$ defined by $N(\alpha) = \alpha \overline \alpha$, where $\overline \alpha$ denotes [[Complex conjugation and absolute value|complex conjugation]], i.e., $$ N(a + bi) = a^2 + b^2. $$ This implies that $\mathbb Z[i]$ is also a [[Unique factorization domains|principal ideal domain]] and a [[Unique factorization domains|unique factorization domain]]. 
- [[Euclidean domains]]: There is natural extension of the **norm** $N$ defined above to a norm $N : \mathbb Q (i) \to \mathbb Q$, the [[Finite extensions of the rationals]] obtained by adjoining $i$.

---
# Variants of the ring $\mathbb Z[i]$

#### Complex numbers with rational coefficients

$$
\mathbb Q(i) = \{ a + bi \ : \ a,b \in \mathbb Q \}
$$
- We have $\mathbb Z \leq \mathbb Z [i] \leq \mathbb Q(i) \leq \mathbb C$.
- **Multiplicative inverses:** If at least one of a or b is not $0$, we can find a multiplicative inverse for $a + bi$ by **rationalizing the denominator**: 
$$ 
\frac{1}{a + bi} = \frac{1}{a + bi} \cdot \frac{a-bi}{a - bi} = \frac{a-bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}i.
$$

#### $\sqrt 2$ as the imaginary part

Consider the set with integer coefficients:
$$
\mathbb Z [\sqrt 2] = \{ a + b \sqrt 2 \ : \ a, b \in \mathbb Z \}.
$$
- **Closure under multiplication:** $$(a + b\sqrt 2)(c + d \sqrt 2) = (ac + 2bd) + (ad + bc) \sqrt 2. $$
- **Group of units:** We have $$  $$ #wip 

We can also define the set using rational coefficients:

$$ \mathbb Q(\sqrt 2) = \{ a + b \sqrt 2 \ : \ a, b \in \mathbb Q \}. $$

#### $\sqrt[3] 2$ as the imaginary part



---
# Code snippets

Gaussian integer ring $\mathbb Z [i]$:
```
\mathbb Z [i]
```

Multiplicative inverses $\frac{1}{a + bi}$:
```
\frac{1}{a + bi}
```