---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-05-06T10:01:48-04:00
date: 2025-04-29T15:41:53-04:00
---
# Overview

The **fundamental theorem of Galois theory**

---
# Theorem statement and proof

>[!theorem] Fundamental theorem of Galois theory
>Let $E$ be a [[Separable, normal, and Galois extensions of fields|Galois extension]] of a field $F$.
>- (i) There is a [[Injectivity, surjectivity, and bijectivity|bijective]], order-reversing correspondence between [[Algebraic groups|subgroups]] of $\text{Gal}(E/F)$ and intermediate fields $F \leq K \leq E$, given as follows: every subgroup $H \leq \text{Gal}(E/F)$ is associated to the [[Galois groups|fixed field]] $E^H$, and every intermediate field $F \leq K \leq E$ is associated to the subgroup $\text{Gal}(E/K) \leq \text{Gal}(E/F)$: $$ \text{Gal}(E/E^H) = H, \quad \quad E^{\text{Gal}(E/K)} = K, $$ where in particular, $E^{\text{Gal}(E/F)} = F$ and $E^{e} = E$. Further, since there are only finitely many subgroups of $\text{Gal}(E/F)$, there are only finitely many intermediate fields $K$ between $F$ and $E$.
>- (ii) For every subgroup $H \leq \text{Gal}(E/F)$, we have $[E : E^H] = \#(H)$, the number of elements in $H$, and hence $$ [E^H : F] = (\text{Gal}(E/F) : H) = \#(\text{Gal}(E/F)) / \#(H), $$ the number of left [[Algebraic groups|cosets]] of $H$. Likewise, for every intermediate field $F \leq K \leq E$, $$ \#(\text{Gal}(E/K)) = [E:K]. $$
>- (iii) For every intermediate field $F \leq K \leq E$, the field $K$ is a [[Separable, normal, and Galois extensions of fields|normal extension]] of $F$ if and only if $\text{Gal}(E/K) \leq \text{Gal}(E/F)$ is a [[Normal subgroups and quotient groups|normal subgroup]]. In this case, $K$ is a **Galois** extension of $F$ and $$ \text{Gal}(K/F) \cong \text{Gal}(E/F) / \text{Gal}(E/FK). $$






---
# Code snippets

```
\text{Gal}(E/F)
```