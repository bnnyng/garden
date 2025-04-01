---
aliases:
  - rationalizing the denominator
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🔴 🔨 ❓
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-01T10:15:45-04:00
---
# Overview and basic definition

Variants include any square-free integers and extension fields of rationals

>[!example] Definition: Gaussian integers
>The **Gaussian integers $\mathbb Z[i] \leq \mathbb C$** is the commutative [[Algebraic rings|ring with unity]] with elements
>$$
>\mathbb Z [i] = \{ a+ bi \ : \ a,b \in \mathbb Z \};
>$$ 
>that is; $\mathbb Z[i]$ is the set of complex numbers where both real and imaginary parts are integers. Addition and multiplication on the ring $\mathbb Z[i]$ are induced by the usual operations on [[Complex numbers, conjugates, and absolute value|complex numbers]]. 

^704b4e

>[!abstract] Claim: Group of units for the Gaussian integers
>The Gaussian integers $\mathbb Z[i]$ are *not* a field, and the set of elements with inverses are
>$$
>(\mathbb Z[i])^* = \{ \pm 1, \pm i \} = \langle i \rangle,
>$$
>a [[Cyclic groups|cyclic]] group of order 4.



---
# Properties

- [[Euclidean domains]]: The Gaussian integers are a **Euclidean domain** (see section below), hence a [[Unique factorization domains|principal ideal domain]] and a [[Unique factorization domains|unique factorization domain]].

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
# Irreducible elements in $\mathbb Z[i]$






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