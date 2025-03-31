---
aliases:
  - finite extension
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-30T13:52:48-04:00
---
# Overview and basic definition

>[!example] Definition: Finite extension
>If $E$ is an [[Extension fields|extension field]] of $F$, then $E$ is a **finite extension** of $F$ if $E$ is a *finite-dimensional* $F$[[Vector spaces and ring modules|-vector space]], and the **degree** of $E$ over $F$ is the positive integer
>$$ [ E : F] = \dim_F E, $$ where $[E : F ] = 1$ *if and only if* $E = F$.
>

Importantly, if $E$ is a finite extension of $F$, then $E$ is also an [[Algebraic extension fields and closures|algebraic extension]] of $F$, i.e., every element $\alpha \in E$ is [[Extension fields|algebraic over]] $F$.

**Related notes:**
- [[Minimal polynomial in an extension field]]
- [[Finite extensions of the rationals]]


---
# Computing degrees of extensions

>[!abstract] Proposition:
>If $E$ is a finite extension field of $F$ and $V$ is an $E$[[Vector spaces and ring modules|-vector space]]:
>- (i) $V$ is a finite-dimensional $F$-vector space *if and only if* $V$ is a finite-dimensional $E$-vector space.
>- (ii) In the case above, we have $$ \dim_F V = [E:F] \dim_E V. $$
>
>In particular, if $F \leq E \leq K$ is a sequence of [[Algebraic fields|fields]], then $K$ is a finite extension of $F$ *iff* $K$ is a finite extension of $E$, and in this case we have $$ [K: F] = [K: E][E:F]. $$

>[!abstract] Corollary:
>If $F \leq E \leq K$ and $K$ is a finite extension of $F$, then $[K:E]$ and $[E:F]$ both divide $[E:F]$.

>[!abstract] Corollary:
>If $K$ is a finite extension field of $E$ and $E$ is a finite extension field of $F$ with [[Vector bases and dimension|bases]] $$ \beta_1,\ldots, \beta_n,  \quad \quad \alpha_1, \ldots, \alpha_m, $$ respectively, then $$ \{ \alpha_i \beta_j \ : 1 \leq i \leq m, \ 1 \leq j \leq n \} $$ is an $F$-basis of $K$.



