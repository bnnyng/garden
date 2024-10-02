---
aliases:
  - real numbers
  - real number
  - reals
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-GU4061
date: 2023-01-18
publish: "true"
lastmod: 2024-09-21T16:58:52-04:00
status: 🟡
---
The real numbers $\mathbb R$ have three defining properties: they are a [[Field axioms|field]] with defined operations of addition, scalar multiplication, and non-zero division; they are [[Order relations on sets and fields|ordered]]; and they have no "missing points." Informally, these properties make the real numbers visualizable as a line. 

Formally, $\mathbb R$  is the unique [[Completeness|complete ordered field]]. As an upshot of the uniqueness of $\mathbb R$, every real number has a unique [[Decimal representation of reals|decimal representation]].

---
# Formal definition of the reals

*Definitions and notation from [[MATH-GU4061|Modern Analysis I]].*

>[!example] Definition: Real numbers
>The [[Field axioms|field]] of **real numbers** is a tuple $(\mathbb R, + , \cdot, \leq)$ consisting of a set $\mathbb R$, the maps $+, \cdot : \mathbb R \times \mathbb R \to \mathbb R$ defined by
>$$
>+(x, y) := x + y \quad \quad \cdot(x, y) = xy
>$$ 
>respectively, and a [[Order relations on sets and fields|order relation]] $\leq$ satisfying the following:
>- (A1), (M1) **Existence of a neutral element.**  See (F4) Identities.
>- (A2), (M2) **Existence of inverses.**  See (F5) Additive inverses and (F6) Multiplicative inverses.
>- (A3), (M3) **Associativity.**  See (F1) Associativity.
>- (A4), (M4) **Commutativity.**  See (F2) Commutativity.
>- (D) **Distributivity of addition over multiplication.**  For all $x, y, z \in \mathbb R$, we have $(x + y) \cdot z = x \cdot z + y \cdot z$.

^e56751

Moreover, the reals satisfy the [[Order relations on sets and fields|order relation axioms]]—(O1) reflexivity, (O2) antisymmetry, (O3) transitivity, and (O4) linearity/trichotomy—as well as the **compatibility axioms**:
- (OC1) **Compatibility of $+$ and $\leq$.**  For all $x, y, z \in \mathbb R$, $x \leq y \implies x + z \leq y + z$.
- (OC2) **Compatibility of $\cdot$ and $\leq$.**  For all $x, y \in \mathbb R$, $0 \leq x \wedge 0 \leq y \implies 0 \leq x \cdot y$.

Finally, the reals uniquely satisfy the **completeness axiom**.

>[!abstract] Axiom: Completeness of $\mathbb R$
>Let $X,  Y \subseteq \mathbb R$ such that $x \leq y$ for all $x \in X$ and $y \in Y$. Then for all $x \in X$ and $y \in Y$, there exists $c \in \mathbb R$ such that $x \leq c \leq y$.

This can be restated in terms of the [[Bounded sets and functions|least upper bound]], or supremum.

>[!abstract] Theorem: Completeness of $\mathbb R$ using the least upper bound (supremum)
>Let $X \subseteq \mathbb R$ be a non-empty subset that is **bounded above**, meaning there exists $z \in \mathbb R$ such that $x \leq z$ for all $x \in X$. Then the [[Bounded sets and functions|supremum]] of $X$ exists.

---
# Review

- Prove the theorem about completeness of $\mathbb R$. (Hint: set the supremum to be $c$.) 