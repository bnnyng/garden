---
aliases:
  - group of units
  - invertible residues
  - integers modulo
  - primitive root
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4041
  - MATH-GU4042
status: 
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-04-22T12:08:06-04:00
---
# In group theory

- [[Euler totient function]]: If $\varphi : \mathbb N \to \mathbb N$ is **Euler’s totient function**, where $\varphi(n)$ counts the number of $m < n$ which are **coprime** to $n$, then the group of units in $\mathbb Z / n \mathbb Z$ has cardinality $|U(n)| = \varphi(n)$.

---
# In ring theory

- [[Algebraic rings]]: For all positive integers $n \geq 1$, the set $\mathbb Z / n \mathbb Z$ is a **finite commutative ring**. The **group of units** is the multiplicative group denoted $(\mathbb Z / n \mathbb Z)^*$, which is *not* a subring of $\mathbb Z / n \mathbb Z$. 
- [[Algebraic fields]]: The ring $\mathbb Z / n \mathbb Z$ is a **field** *iff* $n$ is a prime number. This is often denoted $\mathbb F_p = \mathbb Z / p \mathbb Z$. In particular, this is one of the first examples of *finite* fields.
- [[Characteristics of rings]]: The **characteristic** of $\mathbb F_p$ is $p$, hence the characteristic of the [[Polynomial rings|polynomial ring]] $\mathbb F_p[x]$ is also $p$ since it contains $\mathbb F_p$ as a [[Algebraic rings|subring]]. Thus, $\mathbb F_p[x]$ is an example of an ***infinite* [[Cancellation laws and integral domains|integral domain]]** with nonzero characteristic $p \neq 0$, and is not itself a **field**.
- [[Field of quotients of an integral domain]]: The **[[Field of rational functions]]** $\mathbb F_p$ (that is, the set of functions of the form $f/g$ where $f, g$ are [[Polynomial rings|polynomials]] with coefficients in $\mathbb F_p$) is an example of an *infinite* field with nonzero characteristic $p > 0$. (This is because it contains a subring isomorphic to the polynomial ring $\mathbb F_p[x]$, which is infinite by the previous point).
- [[Prime (sub)fields]]: Every field of [[Characteristics of rings|characteristic]] $p$ prime has a unique smallest subfield isomorphic to $\mathbb F_p = \mathbb Z / p \mathbb Z$, as a consequence of the induced homomorphism on its [[Field of quotients of an integral domain|field of quotients]]. $\mathbb F_p$ itself is called a **prime field** since it contains no proper subfield.
- [[Ring homomorphisms and isomorphisms]]: The homomorphism $\varphi : \mathbb Z \to \mathbb Z / n \mathbb Z$ is called **reduction mod $n$**.
- [[Prime and maximal ideals]]: Analogy between the quotient ring $F[x]/(f)$ and $\mathbb Z/n\mathbb Z$.

---
# In algebraic topology

[[2025-04-22]]
- A nice choice for coefficients

---
# Code snippets

```
\mathbb Z / n \mathbb Z
```

```
\mathbb F_p
```

