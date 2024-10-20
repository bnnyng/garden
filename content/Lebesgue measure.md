---
aliases:
  - outer measure
  - Lebesgue outer measure
  - measure
  - monotonicity
  - countable subadditivity
  - countably subadditive
  - countably additive
  - countable additivity
  - Lebesgue measure
  - excision
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
publish: "true"
date: 2024-04-10 20:09
lastmod: 2024-04-24T16:14:59-07:00
status: 🟧
---
# Overview

The Lebesgue outer measure for a set $E$, denoted $m^*$, is defined as the [[Bounded sets and functions|greatest lower bound]] of the sum of lengths in any [[Compactness|open cover]] of $E$. The **Lebesgue measure** $m$ is simply the restriction of outer measure to [[Measurable sets|measurable sets]].

Outer measure and measure share most key properties, with the important distinction being that measure is **countably additive**, while outer measure is only **countably *sub*additive**. Countable additivity is precisely what gives the [[Lebesgue integral]] an advantage over the [[Riemann integral]].

---
# Outer measure

>[!example] Definition: Lebesgue outer measure
>Given a set $E \subset \mathbb R$, let $\{I_k\}_{k=1}^\infty$ be the collection of all [[Compactness|open covers]] of $E$; that is, each interval $I_k$ is open and bounded. The **Lebesgue outer measure** of $E$ is the [[Bounded sets and functions|greatest lower bound]] of the sum of such collections’ lengths.
>$$
>m^*(E) := \text{inf} \left \{ \sum_{k=1}^\infty I_k \ | \ E \subset \bigcup_{k=1}^\infty I_k \right \}
>$$

^f38f88

Outer measure has the following key properties:
- **Monotonicity.** If $F \subset E$ is a subset, then $m^*(F) \leq m^(E)$.
- **Translation invariance.** For all $E \subset \mathbb R$ and $x \in \mathbb R$, we have $$ m^*(E + x) = m^*(\{z \in \mathbb R | z = y + x \text{ for } y \in E\}) = m^*(E). $$
- **Countable subadditivity.** We have $$ m^* \left ( \bigcup_{k=1}^\infty E_k \right ) \leq \sum_{k=1}^\infty m^*(E_k). $$

---
# Lebesgue measure and countable additivity

>[!example] Definition: Lebesgue measure
>The **Lebesgue measure** is the restriction of the outer measure to the class of [[Measurable sets|measurable sets]]. If $E$ is a measurable set, its Lebesgue measure is denoted by $m$ and defined as
>$$
>m(E) = m^*(E) := \text{inf} \left \{ \sum_{k=1}^\infty I_k \ | \ E \subset \bigcup_{k=1}^\infty I_k \right \}.
>$$

^eb363c

The key difference between properties of outer measure and properties of the Lebesgue measure is that the latter is **countably additive**. 

>[!abstract] Proposition: Countable additivity of measure
>Given a countable collection of measurable and disjoint sets $\{ E_k\}_{k=1}^\infty$, then their union $\bigcup_{k=1}^\infty E_k$ is also measurable and 
>$$
>m \left ( \bigcup_{k=1}^\infty E_k \right ) = \sum_{k=1}^\infty m(E_k).
>$$

We can also name the following key properties of measure:
- **Finite additivity.** Countable additivity holds for any *finite* disjoint collection of measurable sets $\{E_k\}_{k=1}^n$.
- **Excision.** If $A \subset B$ and $m(A) < \infty$, then $m(B \smallsetminus A) = m(B) - m(A)$.
- **Countable monotonicity.** This is an oft-used combination of montonicity and countable additivity of measure: if $E$ is [[Compactness|covered]] by a countable collection of measurable sets $\{E_k\}_{k=1}^\infty$, then 
$$
m(E) \leq \sum_{k=1}^\infty m(E_k).
$$