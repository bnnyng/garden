---
aliases:
  - normal subgroup
  - quotient group
  - fiber
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4041
status: 
publish: 
date: 2024-12-08 14:11
lastmod: 2025-02-19T12:25:02-05:00
---
# Overview

**Normal subgroups**—groups in which the left and right [[Algebraic groups|cosets]] are the same—allow for the construction of **quotient** or **factor groups**.

**Relevant theorems:**
- [[(Theorem) First isomorphism theorem]]

**Related notes:** [[Quotient spaces]], [[Group actions and orbits]]

---
# Normal subgroups

>[!example] Definition: Normal subgroup
>A subgroup $N \lhd G$ is **normal** if the left and right [[Algebraic groups|cosets]] are the same, meaning $gN = Ng$ for all $g \in G$.

>[!abstract] Theorem (Judson 10.3): Equivalent characterizations of normal subgroups
>Let $G$ be a group with subgroup $N \leq G$. Then the following statements are equivalent:
>- $N$ is a **normal subgroup** (for all $g \in G$, we have $gN = Ng$).
>- For all $g \in G$, we have $gNg^{-1} \subset N$.
>- For all $g \in G$, we have $gNg^{-1} = N$.


---
# Quotient groups

#### Construction via normal subgroups

>[!example] Definition: Quotient group
>If $N \lhd G$ is a normal subgroup, the **quotient** or **factor group** of $G$ and $N$ is the group $G/N$ where elements are the [[Algebraic groups|cosets]] of $N$ in $G$ and the group operation is defined by 
>$$
>(aN)(bN) = abN
>$$ 
>for some $a, b \in G$. The identity is the coset $N = 1N$, and inverses are defined by $(aN)^{-1} = a^{-1}N$ for all $a \in G$.

- Quotient group is abelian iff commutators are a subgroup in N.

#### Construction via fibers

>[!example] Definition: Fiber of a homomorphism
>If $\varphi : G \to H$ is a [[Group homomorphisms and isomorphisms|group homomorphism]], the **fibers** of $\varphi$ are the sets of elements of $G$ projecting to single elements of $H$.

Then multiplication of the codomain $H$ can be used to define multiplication on the **set of fibers**, which [[Relation|partitions]] $G$. Then the set of fibers is precisely the quotient group $G / \ker \varphi$, and therefore naturally isomorphic to the image $\varphi (G) \leq H$; this is the content of the [[(Theorem) First isomorphism theorem]].

---
# Examples

- Every subgroup of an [[Abelian groups|abelian]] group is normal.

#### Quotient of the free group by the commutator of its generators

Aka. abelianization of the free group is the free abelian gorup?

If $F_n = \mathbb Z * \cdots * \mathbb Z$ is the [[Free products of groups|free group]] of rank $n$ and $G = \{ a_1, \ldots, a_n \ | \ ab

---
# Notes

- *(Lemma)* If $N \lhd G$ is a **normal subgroup**, then the product of $N$-cosets is an $N$-coset; for all $a,b \in G$, we have $(aN)(bN) = ab \cdot N$.
- *(Corollary)* If $N \leq G$ is a **normal subgroup**, then:
	- For all $a \in G$, we have $aN \cdot N = N \cdot aN = aN$.
	- For all $a \in G$, we have $aN \cdot a^{-1}N = a^{-1}N \cdot aN = N$.
- *(Theorem B)* If $N \lhd G$ is a **normal subgroup**, then the set of N-cosets in $G$, denoted $G / N$, is a group called the **quotient group** or **factor group** of $G$ by $N$.
	- The group operation is the multiplication of $N$-cosets $(aN)(bN) = abN$.
	- The identity is the coset $N = 1N$.
	- Inverses are defined by $(aN)^{-1} = a^{-1}N$ for all $a \in G$.