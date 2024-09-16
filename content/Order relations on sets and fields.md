---
aliases:
  - ordered set
  - ordered field
  - trichotomy
  - transitivity
  - order relation axioms
  - order relation
  - relation
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-GU4061
publish: "true"
date: 2024-03-28 10:40
lastmod: 2024-09-15T09:45:09-04:00
---

#wip Square definitions from [[MATH-UN1208|Honors Mathematics B]] and [[MATH-GU4061|Modern Analysis I]].

----
# Order relations

>[!example] Definition: Relation
>A **relation** $<$ is a rule which returns *true* or *false* depending on whether $x < y$ for some elements of a set $x,y \in X$.

>[!abstract] Axioms: Order relations
>- (O1) **Reflexivity.**  $x \leq x$.
>- (O2) **Antisymmetry.**  $x \leq y \wedge y \leq x \implies x = y$.
>- (O3) **Transitivity.**  $x \leq y \wedge y \leq z \implies x \leq z$.
>- (O4) **Linearity.**  We must have $x \leq y$ or $y \leq x$.

---
# Ordered sets and fields

>[!example] Definition: Ordered set
>An **ordered set** $(X, <)$ is a [[Axioms of set theory|set]] $X$ together with a relation $<$, which satisfies two axioms:
>- (O1) **Trichotomy.** Given $x,y \in X$, exactly one of $x < y$ or $x = y$ or $y < x$ is true.
>- (O2) **Transitivity.** If $x < y$ and $y <z$, then $x < z$.

>[!example] Definition: Ordered field
>An **ordered field** $(\mathbb F, + , \cdot, <)$ is a [[Field axioms|field]] $(\mathbb F, + , \cdot)$ with an order $<$ *on* $\mathbb F$ so that we have:
> - (OF1) If $x < y$, then $x + z < y + z$.
> - (OF2) If $x<y$ and $z > 0$ , then $xz < yz$.

- *(Lemma)* If $\mathbb F$ is an **ordered field**, then the following are true:
	- (a) $x > 0 \iff -x < 0$.
	- (b) $-1 < 0$ and $1 > 0$.
	- (c) For any *positive* natural $n \in \mathbb N$ written as a sum $n = 1 + \cdots + 1$, we have $n > 0$. In particular, $n \neq 0$, so we can divide by positive integers.
	- (d) **Non-negative squares**. For any $x \in \mathbb F$ we have $x^2 \geq 0$, and if $x \neq 0$ then $x^2 > 0$.

---
# Review

- Give an example of an ordered field
- Is $\mathbb F_p$ orderable? Justify. 
- Can the complex numbers $\mathbb C$ be made into an ordered field? Justify with a contradiction.
- Justify (OF2) with the property that scaling a positive number by a positive number outputs a positive number. ⭐