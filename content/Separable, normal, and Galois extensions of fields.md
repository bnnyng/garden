---
aliases:
  - normal extension
  - separable extension
  - Galois extension
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-06T18:48:47-04:00
date: 2025-04-23T12:25:42-04:00
---
# Overview

- Normal extension relates spliting field to constructing utomorphisms

**Relevant theorems:**
- [[(Theorem) Every finite separable extension is a simple extension]]

**Related notes:**
- [[Splitting fields]]

---

# Separable extensions

>[!definition] Separable extension
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$. Then $E$ is a **separable extension** of $F$ if for every extension field $K$ of $F$, there exists an extension field $L$ of $K$ such that there are exactly $[E: F]$ homomorphisms $\varphi : E \to L$ with $\varphi(a) = a$ for all $a \in F$.

>[!remark]
>- If $F$ has [[Characteristics of rings|characteristic]] zero, or is finite or [[Perfect fields|perfect]], then *every* finite extension of $F$ is separable.
>- If $E$ is a finite extension of $F$, then $E$ is separable iff for all $\alpha \in E$, the polynomial $\text{irr}(\alpha, F)$ does not have [[Polynomial roots|multiple roots]].

#wip why?

---

# Normal extensions

>[!lemma] The image of a finite extension under a homomorphism is a finite extension of the image
>Let $L$ be an [[Extension fields|extension field]] of a field $F$ and let $\alpha_1, \ldots, \alpha_n \in L$. If $\varphi : F (\alpha_1, \ldots, \alpha_n) \to L$ is a homomorphism, then 
>$$
>\varphi (F (\alpha_1, \ldots, \alpha_n)) = \varphi(F)(\varphi(\alpha_1), \ldots, \varphi(\alpha_n)).
>$$



>[!theorem] Relation between splitting fields and constructing automorphisms
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$. Then the following are equivalent:
>- (i) There exists a [[Polynomial rings|polynomial]] $f \in F[x]$ with $\deg f \geq 1$ such that $E$ is a [[Splitting fields|splitting field]] of $f$ over $F$.
>- (ii) For every [[Extension fields|extension field]] $L$ of $E$, if $\varphi : E \to L$ is a homomorphism that fixes $F$, then $\varphi(E) = E$ and hence $\varphi$ is an automorphism of $E$. Further, $\varphi \in \text{Gal}(E / F)$.
>- (iii) For every [[Irreducible polynomials|irreducible]] polynomial $p \in F[x]$, if there is a root of $p$ in $E$, then $p$ factors into a product of linear factors in $E[x]$.
>
>We say that $E$ is a **normal extension** of $F$ if either of these conditions are satisfied.

*Proof from [[MATH-GU4042|Modern Algebra II]].*

- **(i) $\implies$ (ii):** By the assumption that $E$ is a splitting field of $F$, there exist $\alpha_1, \ldots, \alpha_n \in E$ such that we can split $f = c \prod_{i=1}^n(x - \alpha_i)$ in $E[x]$ and $E = F(\alpha_1, \ldots, \alpha_n)$. In particular, *every* root of $f$ in $L$ is already contained in $E$. If $\varphi : E \to L$ is a homomorphism that fixes $F$, then $\varphi$ specifically fixes the coefficients of $f \in F[x]$ and we have $\varphi(f) = f$. Then by a result from [[Automorphisms and polynomial roots]], we know that $\alpha_i$ is a root of $f$ if and only if $\varphi(\alpha_i)$ is a root of $\varphi(f) = f$, i.e., $\varphi(\alpha_i) = \alpha_j$ for some other root $\alpha_j$, and hence $$ \varphi \{ \alpha_1, \ldots, \alpha_n \} \subseteq \{ \alpha_1, \ldots, \alpha_n \}. $$ Since $\{ \alpha_1, \ldots, \alpha_n \}$ is finite and $\varphi$ is injective, it must be bijective, and hence a permutation of the roots of $f$. Together with the lemma above, this means $$ \varphi(E) = \varphi(F)(\varphi(\alpha_1), \ldots, \varphi(\alpha_n)) = F(\alpha_1, \ldots, \alpha_n) = E, $$ showing that $\varphi$ is an automorphism of $E$.
- **(ii) $\implies$ (iii):** 

```
\alpha_1, \ldots, \alpha_n
```

---

# Galois extensions

>[!corollary] 
>Let $E$ be a [[Finite extension fields|finite extension]] of a field $F$. Then the following are equivalent:
>- (i) $E$ is a separable extension of $F$ (automatic if $F$ has [[Characteristics of rings|characteristic]] $0$, or if $F$ is finite or more generally [[Perfect fields|perfect]]) and $E$ is a normal extension of $F$.
>- (ii) $\#(\text{Gal}(E/F) = [E:F]$.
>
>We say that $E$ is a **Galois extension** of $F$ if either of these conditions are satisfied.

