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
lastmod: 2025-04-30T12:15:46-04:00
date: 2025-04-23T12:25:42-04:00
---
# Overview

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

>[!theorem] Relation between splitting fields and constructing automorphisms
>Let $E$ be a [[Finite extension fields|finite extension]] of a [[Algebraic fields|field]] $F$. Then the following are equivalent:
>- (i) There exists a [[Polynomial rings|polynomial]] $f \in F[x]$ with $\deg f \geq 1$ such that $E$ is a [[Splitting fields|splitting field]] of $f$ over $F$.
>- (ii) For every [[Extension fields|extension field]] $L$ of $E$, if $\varphi : E \to L$ is a homomorphism that fixes $F$, then $\varphi(E) = E$ and hence $\varphi$ is an automorphism of $E$. Further, $\varphi \in \text{Gal}(E / F)$.
>- (iii) For every [[Irreducible polynomials|irreducible]] polynomial $p \in F[x]$, if there is a root of $p$ in $E$, then $p$ factors into a product of linear factors in $E[x]$.
>
>We say that $E$ is a **normal extension** of $F$ if either of these conditions are satisfied.

---

# Galois extensions

>[!corollary] 
>Let $E$ be a [[Finite extension fields|finite extension]] of a field $F$. Then the following are equivalent:
>- (i) $E$ is a separable extension of $F$ (automatic if $F$ has [[Characteristics of rings|characteristic]] $0$, or if $F$ is finite or more generally [[Perfect fields|perfect]]) and $E$ is a normal extension of $F$.
>- (ii) $\#(\text{Gal}(E/F) = [E:F]$.
>
>We say that $E$ is a **Galois extension** of $F$ if either of these conditions are satisfied.

