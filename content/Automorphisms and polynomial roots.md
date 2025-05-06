---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-04-27T14:56:34-04:00
date: 2025-04-20T17:54:07-04:00
---

# Overview

**Relevant theorems:**
- [[(Theorem) Isomorphism extension theorem for finite extensions of fields]]

---

# Preliminaries: Extensions of homomorphisms

>[!definition] Extension, restriction of a homomorphism
>Let $E, E'$ be an [[Extension fields|extension fields]] of the [[Algebraic fields|fields]] $F, F'$ respectively, and suppose $\sigma: F \to F’$ is a [[Ring homomorphisms and isomorphisms|homomorphism]]. An **extension** of $\sigma$ is a homomorphism $\sigma’: E \to E’$ such that $\sigma’(a) = \sigma(a)$ for all $a \in F$. Equivalently, the **restriction** of $\sigma’$ to $F$ is $\sigma$, written $\sigma’|_F = \sigma$.

---

# The existence of a root under a homomorphism

>[!lemma] A root of a polynomial over a field is a root of its composition with an automorphism that fixes the field
>Let $E$ be an [[Extension fields|extension field]] of a [[Algebraic fields|field]] $F$ and let $f \in F[x]$. Suppose $\alpha = 0$ and $f(\alpha) = 0$. Then for every automorphism $\sigma \in \text{Gal}(E / F)$, where $\text{Gal}(E / F)$ is the [[Galois groups|Galois group]], we have $f(\sigma(\alpha)) = 0$ as well.

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ This follows from the general properties of applying [[Ring homomorphisms and isomorphisms|homomorphisms]] to polynomials: if $f = \sum_{i=0}^n a_ix^i$ with $a_i \in F$ for all $i$, then
$$
0 = \sigma(0) =\sigma(f(\alpha)) = \sigma\left ( \sum_{i=0}^n a_i\alpha^i \right) = \sum_{i=0}^n a_i \sigma(\alpha)^i = f(\sigma(\alpha)),
$$

hence $\sigma(\alpha)$ is a root of $f$ as well. $\ \square$

>[!lemma] An element is the root of a polynomial iff its image under a homomorphism is a root of the image of the polynomial
>Let $E$ be an [[Extension fields|extension field]] of a [[Algebraic fields|field]] $F$, $K$ be any other field, and $\varphi : E \to K$ be a [[Ring homomorphisms and isomorphisms|homomorphism]] (automatically injective). Denote $F’ = \varphi (F)$ and let $\sigma : F \to F’$ be the isomorphism obtained by restricting $\varphi$ onto its image. For a [[Polynomial rings|polynomial]] $f = \sum_{i=0}^n a_i x^i \in F[x]$, let $\sigma(f) \in F’[x]$ be the polynomial obtained by applying $\sigma$ to the coefficients of $f$:
>$$
>\sigma(f) = \sum_{i=0}^n \sigma(a_i)x^i.
>$$
>Then $\alpha \in E$ is a root of $f \in F[x]$ if and only if $\varphi(\alpha) \in K$ is a root of $\sigma(f) \in F’[x]$. 

- Converse is called the [[(Theorem) Isomorphism extension theorem for finite extensions of fields|isomorphism extension theorem]]

---

# Permutations and the Galois group

>[!corollary] The Galois group of a finite extension is identified with a subgroup of the permutation group
>Let $E$ be an [[Extension fields|extension field]] of a [[Algebraic fields|field]] $F$ and let $f \in F[x]$. Suppose $\alpha_1, \ldots, \alpha_n$ are the distinct roots of $f$ in $E$, i.e., $f(\alpha_i) = 0$ for all $\alpha_i$ and whenever $i \neq j$, we have $\alpha_i \neq \alpha_j$. Then $\text{Gal}(E / F)$ defines a [[Group actions and orbits|group action]] on the set $\{ \alpha_1 \ldots, \alpha_n \}$ and hence there is a homomorphism
>$$
>\rho : \text{Gal}(E / F) \to S_n, \quad \quad \sigma(\alpha_i) = \alpha_{\rho(\sigma)(i)}
>$$
>where $\text{Gal} (E / F)$ is the [[Galois groups|Galois group]] and $S_n$ is the [[Permutation groups|symmetric group]] on $n$ letters. Moreover, if $E = F(\alpha_1 \ldots, \alpha_n)$,
>then $\rho$ is injective and identifies $\text{Gal} (E / F)$ with a [[Algebraic groups|subgroup]] of $S_n$, and we have 
>$$
>\# (\text{Gal} (E / F)) \leq n!.
>$$

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\quad$ Denote $Y = \{ \alpha_1, \ldots, \alpha_n \}$ for the set of roots of $f$. It follows from the first lemma above that if $\alpha_i$ is a root of $f$, then so is $\sigma(\alpha_i)$ for all $\sigma \in \text{Gal} (E / F)$. Thus $\text{Gal} (E / F) \times Y \to Y$ defines a [[Group actions and orbits|group action]] 
$$
\sigma \cdot \alpha_i \mapsto \sigma(\alpha_i),
$$

which we can check satisfies the composition axiom as follows: for $\sigma, \sigma’ \in \text{Gal} (E / F)$, we have

$$
\sigma \cdot (\sigma' \cdot \alpha_i) = \sigma \cdot (\sigma'(\alpha_i)) = \sigma(\sigma'(\alpha_i)) = (\sigma\circ\sigma')(\alpha_i) = (\sigma\sigma') \cdot (\alpha_i).
$$

Now define $\rho$ as in the statement. To see that $\rho$ is injective when $E = F(\alpha_1 \ldots, \alpha_n)$, it suffices to show that if $\sigma \in \text{Gal} (E / F)$ satisfies $\sigma(\alpha_i) = \alpha_i$ for all $i$, then $\sigma = \text{id}$. To see this, consider the [[Galois groups|fixed field]]

$$
E^\sigma = \{ \alpha \in E \ : \ \sigma(\alpha) = \alpha \} \leq E,
$$

and note that $F \leq E ^\sigma$ by definition of the Galois group $\text{Gal} (E / F)$. If in addition $\sigma(\alpha_i) = \alpha_i$ for all $i$, then $E^\sigma$ contains both $F$ and all $\alpha_i$, so

$$
E = F(\alpha_1 \ldots, \alpha_n) \leq E^\sigma \leq E
$$

 and we conclude that $E = E^\sigma$, which means precisely $\sigma(\alpha) = \alpha$ for all $\alpha \in E$. $\quad \square$

>[!corollary]
>Let $E$ be a [[Finite extension fields|finite extension]] of $F$. Then $\text{Gal} (E / F)$ is finite.
