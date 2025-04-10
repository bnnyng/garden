---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-25T12:56:25-04:00
---
# Statement and proof

>[!abstract] Theorem: Homology of a disk relative to its boundary
>$$ H_p (D^n, \partial D^n) \cong \begin{cases} \mathbb Z & \text{if }p=n \\ 0 & \text{otherwise} \end{cases} $$

*Proof from [[MATH-GU4053|Algebraic Topology]]* ([[2025-03-25]]). $\ \text{ }$ 

We prove by induction on $n$.
- **Base case:** If $n = 0$, then $D^0 = \{ *\}$ and $\partial D^0 = \varnothing$ and we have $$ H_p(\{ * \}, \varnothing) = H_p(\{ * \}) $$ #wip 

---
# Applications

#### Homology of the $n$-sphere

>[!abstract] Corollary: $S^n \cong S^m \iff n = m$.

>[!abstract] Corollary: $\mathbb R^n \cong \mathbb R^m \iff n = m$.

*Proof from [[MATH-GU4053|Algebraic Topology]]* ([[2025-03-25]]). $\ \text{}$Suppose there exists a [[Homeomorphisms and topological embeddings|homeomorphism]] $h : \mathbb R^n \to \mathbb R^m$, and $h(0) = 0$ without loss of generality. Then the restriction $h|_{\mathbb R^n \backslash \{ 0 \} }: R^n \backslash \{ 0 \} \to R^m \backslash \{ 0 \}$ is also a homeomorphism, so it induces an isomorphism of relative homologies $$ h_* : H_p(\mathbb R^n, R^n \backslash \{ 0 \} ) \to H_p(\mathbb R^m, R^m \backslash \{ 0 \} )$$ which 
- isomorphic for all $p$
- also can extract dimension



- Homeomorphism induces isomorphism on homology (why? singular homology of pairs is a functor?)