---
aliases:
  - CW complex
  - cell attachment
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 🟠 🔨
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-11T11:01:12-04:00
---
>[!question]
>- Why does the attaching map end up being the disjoint union space?
>- Topology on the finite cell complex? 

---
# Overview and formal definition


>[!example] Definition: Cell (CW) complex
>An $n$**-cell** $e^n$ is a topological space that is [[Homeomorphisms and topological embeddings|homeomorphic]] to the open $n$**-disk** $D^n \backslash S^{n-1}$. A **cell complex** is a special case of a [[Quotient spaces|quotient space]] with the following construction:
>1. Let $X^0$ be a discrete set of $0$**-cells** (i.e., a discrete topological space).
>2. Inductively form the $n$-**skeleton** $X^n$ from $X^{n-1}$ as follows: 
>	1. For each $n$**-cell** $e^n_\alpha$, let $\varphi_\alpha : S^{n-1} \to X^{n-1}$ be the continuous **attaching map**. 
>	2. Thus, $X^n$ is the *quotient space* of the [[Disjoint unions|disjoint union]] of $X^{n-1}$ and a collection of $n$-disks $\{D^n_\alpha\}_{\alpha \in J}$ under the equivalence relation $x \sim \varphi_\alpha(x)$ for $x \in S^{n-1}$, represented by the expression $$X^{n-1} \sqcup \coprod_\alpha D^n_\alpha. $$
>	3. This is equivalent to saying $$ X^n = X^{n-1} \sqcup \coprod_\alpha e_\alpha^n, $$ where each $e^n_\alpha$ is an open $n$-disk.
>3. The final cell complex is the union $X = \bigcup_k X^k$. If the union is infinite, then $X$ is equipped with the **weak topology**: A set $A \subseteq X$ is open (or closed) iff $A \cap X^n$ is open (or closed) in $X^n$ for each $n$.



---
# Examples

#### Unit circle $S^1$

In general, a CW complex may be constructed in multiple ways.

- **Starting with one point:** Let $$ X^0 = \{ (1, 0) \} $$ be the space with a single point. Then the attaching map $e : S^0 \to X^0$ gives $S^1 \cong (D^1 \cup X^0) / \sim$ (note that $D^1$ is the closed interval, and $S^0$ are the two endpoints). 
- **Starting with two points:** Let $$ X^0 = \{ (0, 1), (0, -1)\} \quad \quad X = X^1. $$ then $$ S^1 \cong \left ( \coprod_{\alpha \in \{ L, R\}} D_\alpha ^1 \cup X^0 \right ) / \sim, $$ where $\sim$ attaches an endpoint from each closed line to two different points.

#### Sphere $S^n$

The homeomorphism of the $n$[[Euclidean spheres and disks|-sphere]] $S^n \cong D^n / \partial D^n$ is equivalent to saying that $S^n$ has the structure of a cell complex with two cells, the point $e^0$ and the $n$-cell $e^n$ attached by the constant map $S^{n-1} \to e^0$.

#### Real projective space $\mathbb RP^n$

The homeomorphism for the [[Real projective space]] $\mathbb R P^n \cong S^n/(x \sim -x)$ is equivalent to saying that $\mathbb RP^n$ is the quotient space of a *hemisphere* $D^n$ with antipodal points on $\partial D^n$ identified. But since $\partial D^n$ with antipodal points identified is just $\mathbb RP^{n-1}$, we see that $\mathbb RP^n$ is obtained by attaching an $n$-cell to $\mathbb RP^{n-1}$ with the quotient $S^{n-1} \to \mathbb RP^{n-1}$ as the attaching map. By induction, we conclude that $\mathbb RP^n$ has the cell complex structure $$e^0 \cup e^1 \cup \cdots \cup e^n, $$ with one cell $e^i$ in each dimension $0 \leq i \leq n$.

---
# Resources

- [CW Complex in nLab](https://ncatlab.org/nlab/show/CW+complex)

---
# Notes

*Notation from [[MATH-GU4053|Algebraic Topology]].*

- **Attaching a single $n$-cell:** Given a topological space $X$ and the $n$-dimensional closed disk $D^n$, an **attaching map** $e: S^{n-1} \to X$ gives the quotient space $$ X \cup_e D^n = D^n \sqcup X / \sim,  $$ where $\sim$ is the relation given by identifying the boundary points of $D^n$.
- **Attaching multiple $n$-cells:** Let $e_\alpha : S^{n-1}_\alpha \in X$, $\alpha \in J$. Then the space $$ X \to \coprod_{\alpha \in J}D^n_\alpha \cup X / \sim, $$ is obtained from $X$ by attaching $n$-cells along each $e_\alpha$; that is, the relation $\sim$ is given by $$ x \in S^{n-1}_\alpha \subseteq D^n_\alpha \sim e_\alpha(x) \in X. $$
- **CW complexes:** A **CW complex** is a sequence of spaces $$ \varnothing = X^{-1} \subset X^0 \subset X^1 \subset \cdots \subset X^n, $$ where $X^n$ is constructed inductively from $X^{n-1}$ by attaching #wip