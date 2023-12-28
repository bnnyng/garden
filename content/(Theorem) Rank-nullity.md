---
aliases:
  - rank-nullity theorem
  - rank-nullity
tags:
  - permanent-note
  - topic-logic-mathematics
  - theorem
publish: "true"
---
The rank-nullity theorem says that a [[Axioms for fields and vector spaces|vector space]] can be thought of as a combination of vectors that “die” (the vectors in the [[Image and kernel|kernel]]) and the vectors that “survive” (the vectors in the image) after a linear transformation.

>If $A : V \to W$ is a linear map between finite-dimensional vector spaces, we have $\text{rank}(A) + \text{null}(A) = \text{dim}(V).$

As a corollary of the theorem, we can use facts about $A$ to determine the relative [[Bases and dimension|dimensions]] of $V$ and $W$.

>$$A \text{ is injective} \implies \text{dim}(V) \leq \text{dim}(W)$$
>$$A \text{ is surjective} \implies \text{dim}(V) \geq \text{dim}(W)$$
>$$A \text{ is bijective} \implies \text{dim}(V) = \text{dim}(W)$$

---
# Proof

To prove the rank-nullity theorem, our goal is to:
- Use the bases of image and kernel to produce a basis for all of $V$ $\{w_1, \cdots, w_m, u_1, \cdots, u_k\}$.
- Show $\text{dim}V = m + k = \text{rank}(A) + \text{null}(A)$.

We start with the following fact:
- Pick a [[Bases and dimension|basis]] $\{w_1, \cdots, w_m\}$ for $\text{im}(A)$, so $\text{rank}(A) = m$.
	- By definition of image, $\exists$ vectors $v_1, \cdots, v_n \in V$ so that $Av_i = w_i$ for all $1 \leq i \leq m$. 
- Pick a basis $\{u_1, \cdots, u_k\}$ for $\text{ker}(A)$, so $\text{null}(A) = k$. 
- The first set [[Linear combinations and spanning|spans]] the part of $V$ which maps identically onto $\text{im}(A)$, and the second set spans the part of $V$ which is sent to 0.

The following is a sketch of the proof:
1. Show $\{w_1, \cdots, w_m, u_1, \cdots, u_k\}$ forms a linearly independent set.
	1. Show second sequence has only the **trivial relation**.
	2. Show first sequence has only the trivial relation.
2. Verify $\{w_1, \cdots, w_m, u_1, \cdots, u_k\}$ spans $V$ by picking an arbitrary $v \in V$.