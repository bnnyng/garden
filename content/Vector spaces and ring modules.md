---
aliases:
  - vector space
  - vector subspace
  - -vector space
  - -vector subspace
  - vectors
  - -module
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
publish: "true"
date: 2022-10-20
lastmod: 2025-03-02T15:17:56-05:00
---
# Overview and basic definitions

>[!example] Definition: Vector space
>Given a [[Algebraic fields|field]] $F$ (the **scalars**), a $F$**-vector space**, or simply **vector space**, is a triple $(V, +, \cdot)$ where $(V, +)$ is an [[Abelian groups|abelian]] group (the **vectors**) and $\cdot : F \times V \to V$ is a map $(t, v ) \mapsto t \cdot v$ (**scalar multiplication**) such that for all $s, t \in F$ and $v,w \in V$, we have the following:
>- (i) **Associativity of multiplication:** $s(tv) = (st)v$;
>- (ii) **Distributivity of multiplication over scalar addition:** $(s + tv) = sv + tv$;
>- (iii) **Distributivity of multiplication over vector addition:** $s(v + w) = sv + sw$;
>- (iv) **Identity:** $1 \cdot v = v$ for the [[Algebraic rings|unit]] $1 \in F$.


>[!example] Definition: Vector subspace
>Given a field $F$ and an $F$-vector space $V$, an $F$**-vector subspace** is a subset $W \subseteq V$ with the following properties:
>- (i) **Subgroup under $+$:** $W$ is closed under addition and contains the additive identity $0 \in V$ (hence non-empty);
>- (ii) **Closure under multiplication:** For all $w \in W$ and all $t \in F$, we have $tw \in W$ as well.


---
# Analogue in general rings

>[!example] Definition: Module
>Given a [[Algebraic rings|commutative ring with unity]] $R$, a $R$**-module** is a triple $(M, + , \cdot)$, where $(M, +)$ is an [[Abelian groups|abelian]] group and $\cdot : R \times M \to M$ is a map $(r, m) \mapsto r \cdot m$ such that for all $r, s \in R$ and $m \in M$, the analogue of each condition for vector spaces holds.

---
# Examples


#### General $F$-vector spaces

If $F$ is a [[Algebraic fields|field]], then the following are $F$-vector spaces:

- The $n$**-fold Cartesian product** $$ F^n = F \times \cdots \times F $$with component-wise addition and scalar multiplication defined by$$ (a_1, \ldots, a_n) + (b_1, \ldots, b_n) = (a_1 + b_1, \ldots, a_n + b_n), $$ $$ t(a_1, \ldots, a_n) = (ta_1, \ldots, ta_n),$$ respectively.
- The **group of functions $F^X$** from $X \to F$.
- The [[Polynomial rings|polynomial ring]] $F[x]$.
- Any [[Algebraic rings|ring]] $R$ **containing** $F \subseteq R$ as a subring.

#### General $R$-modules

If $R$ is a [[Algebraic rings|commutative ring with unity]], then the following are $R$-modules:
- Both an [[Ideals and quotient rings|ideal]] $I \subseteq R$ and the corresponding [[Ideals and quotient rings|quotient ring]] $R / I$.