---
aliases:
  - discriminant
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
lastmod: 2025-05-09T11:49:18-04:00
date: 2025-05-08T19:11:23-04:00
---

# Overview

>[!definition] Discriminant
>Let $K$ be a [[Algebraic fields|field]]. The **discriminant** is the [[Symmetric polynomials|symmetric polynomial]] defined by 
>$$
>\Delta = \Delta(t_1, \ldots, t_n) = \left ( \prod_{i < j}(t_j - t_i) \right )^2 \in K[t_1, \ldots, t_n].
>$$
>By construction, there is a square root of $\Delta$ is defined by $\sqrt \Delta (t_1, \ldots, t_n) = \prod_{i< j} (t_j - t_i)$. 
>
>$\quad$ Likewise, if $E$ is a [[Separable, normal, and Galois extensions of fields|normal extension]] of a field $F$ and $f \in F[x]$ is a nonconstant [[Polynomial rings|polynomial]] that splits into linear factors in $E[x]$, e.g., 
>$$
>f = c (x- \alpha_1) \cdots (x- \alpha_n)
>$$
>for $\alpha_i \in E$, then we define the discriminant of the polynomial $f$ to be
>$$
>\Delta(f) = \Delta(\alpha_1, \ldots, \alpha_n) = \left ( \prod_{i < j}(\alpha_j - \alpha_i) \right )^2,
>$$
>and similarly $\sqrt \Delta(f) = \prod_{i< j} (\alpha_j - \alpha_i)$.

$\quad$ The following key facts about the discriminant are highlighted in [[MATH-GU4042|Modern Algebra II]]:

- A polynomial $f$ has [[Polynomial roots|multiple roots]] if and only if $\Delta (f) = 0$.
- If $\Delta (f) \neq 0$, then $\Delta$ is a square (“crudely speaking”) if and only if the [[Galois groups of polynomials|Galois group]] $\text{Gal}(E/F) \leq A_n$, not just in $S_n$. 
- If $f = x^2 + bx + c$, then $\Delta = b^2 - 4c$.

---

# Preliminaries: The sign of a permutation

>[!definition] Sign of a permutation
>Given a [[Permutation groups|permutation]] $\sigma \in S_n$, the **sign** of the permutation, sometimes denoted $\text{sgn} \ \sigma$, is the value $\varepsilon = \{ \pm 1 \}$ defined by the identity
>$$
>\varepsilon(\sigma) \prod_{i<j} (t_j - t_i) = \prod_{i < j}(t_{\sigma(j)} - t_{\sigma(i)}).
>$$ 

>[!lemma] The discriminant is a symmetric polynomial
>For all $\sigma \in S_n$, we have
>$$
>\sigma (\sqrt \Delta (t_1, \ldots, t_n)) = \varepsilon (\sigma)\sqrt \Delta (t_1, \ldots, t_n),
>$$
>where $\varepsilon(\sigma)$ is the sign of the permutation $\sigma$. Hence $\Delta$ is a [[Symmetric polynomials|symmetric polynomial]].

---
# The discriminant and the alternating group

>[!proposition]
>Suppose $f \in F[x]$ does not have a [[Polynomial roots|multiple root]], meaning $\Delta (f) \neq 0$. Let $E$ be a [[Splitting fields|splitting field]] of $f$ and $\rho : \text{Gal}(E/F) \to S_n$ be the homomorphism defined by the action of the [[Galois groups of polynomials|Galois group]] $\text{Gal}(E/F)$ on the set $\{ \alpha_1, \ldots, \alpha_n \}$ of roots of $f$ in $E$. Then:
>- (i) For any polynomial $f$, the discriminant $\Delta(f) \in F$.
>- (ii) The image of $\rho$ is contained in $A_n$ if and only if $\sqrt \Delta \in F$ as well, i.e., if $\Delta$ is the square of an element in $F$. 
>- (iii) More generally, for all $\sigma \in \text{Gal}(E/F)$, we have $\rho(\sigma) \in A_n$ if and only if $\sigma(\sqrt \Delta) = \sqrt \Delta$.

*Proof from [[MATH-GU4042|Modern Algebra II]]*. $\quad$ 


---
# Code snippets

```
\varepsilon(\sigma)
```

```
\sqrt \Delta (t_1, \ldots, t_n)
```

