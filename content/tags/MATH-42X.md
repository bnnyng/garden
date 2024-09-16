---
aliases:
  - "#MATH-42X"
  - MATH 424
  - MATH 425
  - MATH 426
  - Fundamentals of Analysis
title: Class | Fundamentals of Analysis
publish:
---
# Overview

*University of Washington, Spring 2024 – Selim Tuncel, Silvia Ghinassi*

---
# Study topics

```dataview
TABLE
lastmod as "Last Reviewed",
status as "Status"

FROM #MATH-42X
SORT lastmod ASC
```




---
# MATH 425

- In general, covers parts of Rudin Ch. 2, 3, 4, 7, and 9

## Basics of metric spaces

![[Metrics and metric spaces#^2a64da]]

![[Open sets#^06ed9e]]

![[Closed sets, closures, and dense subsets#^27b93a]]

![[Bounded sets and functions#^8bd60c]]

![[Closed sets, closures, and dense subsets#^575cce]]

![[Cauchy sequence#^e1c6fb]]

![[Completeness#^fb5297]]


#wip Cauchy-Schwarz theorem? (425 lec1)
lec6 remark on being open in different sets and subsets

---

# MATH 426

## Definitions

### Lebesgue measure and integration

![[Lebesgue measure#^f38f88]]

![[Measurable sets#^211106]]

![[Lebesgue measure#^eb363c]]

>[!example] Definition: $\sigma$-algebra
>Given a set $X$, a $\sigma$-algebra is a collection $\mathcal A$ of subsets of $X$ with the following properties:
>- (i) The empty set $\emptyset$ is contained in $\mathcal A$;
>- (ii) For all subsets in $\mathcal A$, their complements in $X$ are also contained in $\mathcal A$;
>- (iii) The union of a countable collection of sets in $\mathcal A$ is also contained in $\mathcal A$.

![[(Theorem) Approximation of measurable sets#^add4d6]]


## Lecture overviews

### 1 - What is a measure?
**Definitions:** length, [[Lebesgue measure|Lebesgue outer measure]]

### 2 - Properties of Lebesgue outer measures
**Propositions:**
- Properties of the Lebesgue outer measure:
	- Monotonicity: if $A \subset B$, then $m^*(A) \leq m^*(B)$.
	- If $E$ is countable, then $m^*(E) = 0$.
	- The Lebesgue outer measure of an interval is its length.

### 3 - More properties of outer measure, measurable sets

**Definitions:** [[Measurable sets]]

**Propositions:**
- **Outer measure is translation invariant**. For all $E \subset \mathbb R$ and $x \in \mathbb R$, we have $$ m^*(E + x) = m^*(\{z \in \mathbb R | z = y + x \text{ for } y \in E\}) = m^*(E). $$
- **Outer measure is countably subadditive.** We have $$ m^*(\bigcup_{k=1}^\infty) \leq \sum_{k=1}^\infty m^*(E_k). $$
- **A set is measurable if and only if its complement is measurable.** This follows from the definition of a measurable set.

### 4 - Properties of measurable sets

**Propositions:**
- **Intersections and differences of measurable sets are measurable.** If $E_1, E_2$ are measurable, then so are $E_1 \cap E_2$ and $E_1 \smallsetminus E_2$.
- **The union of a collection of measurable sets is measurable.**

### 5 - $\sigma$-algebras and measurable intervals

**Definitions:** $\sigma$-algebra, $G_\delta$ and $F_\sigma$ sets

**Propositions:**
- Every interval is measurable.
- Corollary: Open and closed sets are measurable.
- The translation of a measurable set is measurable.

### 6 - Approximating measurable sets

**Propositions:**
- **Every measurable set has an open outer approximation.** If $E$ is measurable, then for all $\epsilon > 0$, there exists an open set $O$ such that $E \subset O$ and $m^*(O \smallsetminus E) < \epsilon$. 
- **Every measurable set has a closed inner approximation.** If $E$ is measurable, then for all $\epsilon > 0$, there exists a closed set $F$ such that $F \subset E$ and $m^*(E \smallsetminus F) < \epsilon$.
- **Outer approximation.** If $E$ is measurable, then there exists a $G_\delta$ set set $G$ such that $m^*(G \smallsetminus E) = 0$.
- **Inner approximation.** If $E$ is measurable, then there exists a $F_\sigma$ set $F$ such that $m^*(E \smallsetminus F) =0$.

### 7 - Continuity of Lebesgue measure, Borel-Cantelli lemma

**Definitions:** Lebesgue measure

**Propositions:**
- Properties of Lebesgue measure:
	- **Lebesgue measure is translation invariant.**
	- **Lebesgue measure is countably additive.** Given a collection of disjoint and measurable sets $\{E_k\}_{k=1}^\infty$, then their union is also measurable and we have $$ m(\bigcup_{k=1}^{\infty}E_k) = \sum_{k=1}^{\infty}m(E_k). $$
- **Continuity of measure.**
- **Borel-Cantelli lemma.** If $\{E_k\}$ is a countable collection of measurable set for which their sum is less than $\infty$, then almost all $x \in \mathbb R$ belong to at most finitely many of the $E_k$’s.

### 8 - Cantor set, measurable functions

**Definitions:** [[Measurable functions]]

**Propositions:**
- The Cantor set is uncountable with zero measure.
- **Measurable functions and open sets.** A function $f : E \to \mathbb R$ is measurable if and only if for all open sets $O \subset \mathbb R$, the set $f^{-1}(O)$ is measurable.
- **Measurability of (almost) equal functions.** Given functions $f, g : E \to \mathbb R$ where $f = g$ almost everywhere, if $f$ is measurable then $g$ is measurable.

### 9 - Properties of measurable functions

**Definitions:** Polarization identity

**Propositions:**
- Given a function on the extended real numbers $f : E \to \mathbb R \cup \{ \infty\}$ and a measurable set $D \subset E$, then $f$ is measurable on $E$ if and only if both the restriction of $f$ to $D \cap E$ and $E \smallsetminus D$ are.
- If $f,g : E \to \mathbb R \cup \{ \infty\}$ are measurable and finite almost everywhere, then:
	- **Linear combinations.** For all $\alpha, \beta \in \mathbb R$, the scaled sum $\alpha f + \beta g$ is measurable on $E$;
	- **Products.** $fg$ is measurable on $E$.
- **Measurability of composite functions.** If $g : E \to A$ is measurable and $f: A \to \mathbb R$ is continuous, then $f \circ g : E \to \mathbb R$ is measurable.
- The strictly positive and strictly negative parts of a measurable function are measurable.

**Remarks:**
- Finiteness is assumed for sums because $f + g$ is not always defined for functions in the extended real numbers.
- The composition of measurable functions is not measurable in general.

```
$f : E \to \mathbb R \cup \{ \infty\}$
```

### 10 - Pointwise limits of measurable functions, approximation by simple functions

**Definitions:** Pointwise convergence, converging almost everywhere, uniform convergence; [[Simple functions]]

**Propositions:**
- If a function $f_n$ converges to a measurable function $f$ almost everywhere, then $f_n$ is measurable.
- Every measurable function can be approximated by simple functions.

### 11 - Simple approximation, setting up Egoroff’s theorem
**Propositions:**
- A function $f:E  \to \mathbb R \cup \pm \infty$ is measurable if and only if there exist simple functions that converge to $f$ pointwise and are always less than $f$.
- Egoroff’s theorem.

### 12 - Egoroff’s theorem, Lusin’s theorem

**Propositions:**
- Given a simple function, for all $\epsilon > 0$, there exists a continuous function and a closed set such that the simple and continuous functions are equal on the closed set, and the complement of the closed set is less than $\epsilon$.

### 13, 14, 15 - Riemann integral, Lebesgue integral

**Definitions:** Lebesgue integral on simple functions on sets of finite measure/bounded measurable functions on sets of finite measure/non-negative measurable functions

### 16 - Chebyshev inequality, linearity and monotonicity