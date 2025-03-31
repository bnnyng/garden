---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🟠
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-01-27T14:50:47-05:00
---
# Overview and basic definition

>[!example] Definition: Ring of functions
>Given a non-empty set $X$ and a [[Algebraic rings|ring]] $R$, the set $R^X$ of all functions from $X$ to $R$ is a ring under pointwise addition and multiplication defined, respectively, as follows: for $f, g \in R^X$, we have
>$$
>(f + g)(x) = f(x) + g(x) \quad \quad (fg)(x) = f(x) g(x).
>$$
>If $R$ is a commutative ring, then so is $R^X$. Further, if $R$ is a ring with unity, then so is $R^X$ with multiplicative identity given by the unique *constant function* $1 : X \to R$ defined by $1(x) = 1$ for all $x \in X$. In this case, the units of $R^X$ are
>$$
>(R^X)^* = \{ f \in R^X \ : \ f(x) \in R^* \text{ for all } x \in X \} = (R^*)^X.
>$$

---
# Examples

#### Real-valued functions

```
\mathbb R^{\mathbb R}
```

```
C^0(\mathbb R)
```

Let $\mathbb R^{\mathbb R}$ be the set of real-valued functions $f : \mathbb R \to \mathbb R$. This is a commutative ring with unity because $\mathbb R$ itself is a commutative ring with unity. A unit $f \in (\mathbb R^{\mathbb R})^*$ is a function for which $f(x) \neq 0$ for all $x \in \mathbb R$, and its inverse is denoted $1/f$. Note that this is different from the [[Compositions and invertible linear maps|inverse]] function $f^{-1}$, if it exists at all!

The set of [[Continuous functions|continuous]] real-valued functions, denoted $C^0(\mathbb R)$, is a subring of $\mathbb R^{\mathbb R}$: this is precisely the statement that sums and products of continuous functions are continuous! In fact $C^0(\mathbb R)$ and its subring $C^\infty(\mathbb R) \leq C^0(\mathbb R)$, the set of functions with derivatives of all orders, are commutative rings with unity since the constant function $1$ is both continuous and infinitely [[Derivatives of real functions|differentiable]].