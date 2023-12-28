---
aliases:
  - relation
  - ordered set
  - trichotomy
  - transitivity
  - ordered field
  - upper bound
  - lower bound
  - least upper bound
  - supremum
  - greatest lower bound
  - infimum
  - complete ordered field
  - decimal representation
  - real numbers
tags:
  - permanent-note
  - topic-logic-mathematics
---
# Overview

The real numbers $\mathbb R$ have three defining properties: they are a field with defined operations of addition, scalar multiplication, and non-zero division; they are ordered; and they have no "missing points." Informally, these properties make the real numbers visualizable as a line. 

Formally, $\mathbb R$  is the unique complete ordered field. As an upshot of the uniqueness of $\mathbb R$, every real number has a unique decimal representation.

The least upper bound property of complete ordered fields states that every set which is non-empty and bounded above has a least upper bound.

---

# Ordered sets and fields

- *(Definition)* A **relation** $<$ is a rule which returns *true* or *false* depending on whether $x < y$ for some elements of a set $x,y \in X$.
- *(Definition)* An **ordered set** $(X, <)$ is a [[Axioms of set theory|set]] $X$ together with a *relation* $<$, which satisfies two axioms:
	- (O1) **Trichotomy.** Given $x,y \in X$, *exactly one of* $x < y$ or $x = y$ or $y < x$ is *true*.
	- (O2) **Transitivity.** If $x < y$ and $y <z$, then $x < z$.
- *(Definition)* An **ordered field** $(\mathbb F, + , \cdot, <)$ is a [[Axioms for fields and vector spaces|field]] $(\mathbb F, + , \cdot)$ with an *order* $<$ *on* $\mathbb F$ so that we have:
	- (OF1) If $x < y$, then $x + z < y + z$.
	- (OF2) If $x<y$ and $z > 0$ , then $xz < yz$.
- *(Lemma 1.1)* If $\mathbb F$ is an **ordered field**, then the following are true:
	- (a) $x > 0 \iff -x < 0$.
	- (b) $-1 < 0$ and $1 > 0$.
	- (c) For any *positive* natural $n \in \mathbb N$ written as a sum $n = 1 + \cdots + 1$, we have $n > 0$. In particular, $n \neq 0$, so we can divide by positive integers.
	- (d) **Non-negative squares**. For any $x \in \mathbb F$ we have $x^2 \geq 0$, and if $x \neq 0$ then $x^2 > 0$.

---
# Lower and upper bounds

- *(Definition)* Let $(X, <)$ be an **ordered set** with [[Axioms of set theory|subset]] $S \subset X$. We have the following definitions in $X$:
	- An **upper bound** for $S$ is an element $x \in X$ where for all $s \in S$, we have $s \leq x$. A **lower bound** for $S$ is an element where we have $x \leq s$.
	- $S$ is **bounded above** if there *exists* an **upper bound** for $S$, and similarly **bounded below** if there exists a **lower bound**.
	- If one *exists*, the **least upper bound** or **supremum** of $S$ is an **upper bound** $x \in X$ for $X$ so that for *any other* upper bound $x^\prime \in X$ for $S$, we have $x \leq x^\prime$. This is written as $\text{lub}(S)$ or $\text{sup}(S)$.
		- The **greatest lower bound** or **infimum** is written as $\text{glb}(S)$ or $\text{inf}(S)$.
- *(Lemma 1.2)* If $(X,<)$ is an **ordered set** and $S \subset X$ is a **subset** with both $x, x^\prime$ as its **least upper bounds**, then we have $x = x^\prime$.

---
# Completeness

- *(Definition)* A **complete** ordered field $(\mathbb F, + , \cdot, <)$ is an **ordered field** satisfying:
	- (COF) **Least upper bound property.** If $S \subset \mathbb F$ is **bounded above** and $S \neq \emptyset$, then $S$ has a **least upper bound**.
- *(Definition)* An **isomorphism** between **ordered fields** $\mathbb F_0, \mathbb F_1$ is a [[Algebra of functions|bijection]] $f : \mathbb F_0 \to \mathbb F_1$ such that:
	- (a) $f(x + y) = f(x) + f(y)$
	- (b) $f(xy) = f(x)f(y)$
	- (c) $x<y \implies f(x) < f(y)$
- *(Theorem 1.3)* If $\mathbb F_0$ and $\mathbb F_1$ are **complete ordered fields**, then there exists a *unique* **isomorphism** $f: \mathbb F_0 \to \mathbb F_1$.

---
# Decimal representation of reals

- *(Definition)* A **decimal expression** $m.a_1a_2a_3...$ is a natural $m \in \mathbb N$ and a sequence of digits $a_i \in \{ 0, 1, \cdots , 9 \}$, which can be written as the sum
$$ m + \sum^\infty_{i=1} \frac{a_i}{10^i}$$
- The **real number** associated with a **decimal representation** is formally the **least upper bound** of the set of all finite decimal approximations
$$  m.a_1a_2a_3... = \text{lub}\{m + \sum^n_{i=1} \frac{a_i}{10^i} \mid i \in \mathbb N \}.$$
- *(Proposition 1.4)* Every **real number** $x \geq 0$ has a **decimal representation.**
	- *(Lemma 1.5)* We have $\text{glb} \{ 10^{-i} \mid i \in \mathbb N\} = 0$.
	- *(Corollary 1.6)* We have $0.999... = 1$.
	- *(Lemma 1.6)* If $x \in \mathbb R$ has $x \geq 0$, the set of natural numbers $\mathbb N_{\leq x} = \{n \in \mathbb N \mid n \leq x\}$ is *finite*.

---
# Review

#### Definitions
- Ordered set
- Ordered field
- Least upper bound (supremum)
- Greatest lower bound (infimum)
- Isomorphism between ordered fields

#### Concepts
- Give an example of an **ordered field**.
- Is $\mathbb F_p$ orderable? Justify. 
- Can the complex numbers $\mathbb C$ be made into an ordered field? Justify with a contradiction.
- Explain why a set that has a **least upper bound** must be *non-empty*. ⭐

#### Exercises
- Justify (OF2) with the property that scaling a positive number by a positive number outputs a positive number. ⭐
- Consider the set $X = \mathbb Q$ with subset $S = \{x \in \mathbb Q \mid x^2 < 2\}$. Prove that $S$ would have a **least upper bound** would have $\text{lub}(S)^2 = 2$. Since $\sqrt{2} \notin S$, the subset $S$ does not have a **least upper bound** in $\mathbb Q$. ⭐
- Prove Corollary 1.6. ⭐
- Prove Lemma 1.6.
- Prove the **decimal representation** is *unique*. ⭐
- Prove that every real number $x \geq 0$ has a **decimal representation.** ✨
	- Hint: The two sticking points of this proof are showing that the reals are not infinitely small or infinitely large, which are resolved in Lemma 1.5 and 1.6 respectively. 