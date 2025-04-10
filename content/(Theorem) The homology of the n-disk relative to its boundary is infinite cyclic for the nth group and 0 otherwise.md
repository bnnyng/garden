---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-10T01:14:50-04:00
---
# Statement and proof

>[!abstract] Theorem: Homology of a disk relative to its boundary
>$$ H_p (D^n, \partial D^n) \cong \begin{cases} \mathbb Z & \text{if }p=n \\ 0 & \text{otherwise} \end{cases} $$

*Proof from [[MATH-GU4053|Algebraic Topology]]* ([[2025-03-25]]). $\ \text{ }$ 

Write $\partial_+D^n$ and $\partial_-D^n$ for the upper and lower hemispheres of the boundary $\partial D^n \cong S^{n-1}$, respectively. The computation of $H_p(D^n, \partial D^n)$ depends on the following isomorphisms:

- $D^n$ and $\partial_- D^n$ are both [[Contractible spaces|contractible]], hence [[Homotopy equivalence|homotopy equivalent]] (to the one-point space), so the sequence of inclusions $\partial_-D^n \to \partial D^n \to D^n$ implies the [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups|connecting homomorphism]] $$ \delta: H_{p}(D^n, \partial D^n) \to_\cong H_{p-1}(\partial D^n, \partial_-D^n) $$ is an isomorphism for all $p$ and all $n \geq 1$.
- If $S$ is the “south pole”, [[(Theorem) The relative homology of a subset is isomorphic to the subset with excision when the closure of the excision is in the interior of the subset|excision]] implies the inclusion $(\partial D^n \backslash \{ S\}, \partial_- D^n \backslash \{ S\}) \to (\partial D^n, \partial_-D^n)$ induces an isomorphism $$ H_p(\partial D^n \backslash \{ S\}, \partial_- D^n \backslash \{ S\}) \to_\cong H_p(\partial D^n, \partial_-D^n). $$
- There is a homeomorphism $\partial D^n\backslash \{ S\} \to \mathbb R^{n-1}$ given by [[Homeomorphisms and topological embeddings|stereographic projection]], which restricts to a homeomorphism $\partial_- D^n \backslash \{ S\} \to \mathbb R^{n-1}\backslash \textup{int}(D^{n-1})$. Thus this homeomorphism induces an isomorphism of groups $$ H_p(\partial D^n, \partial_-D^n) \to_\cong H_p(\mathbb R^{n-1}, \mathbb R^{n-1}\backslash \textup{int}(D^{n-1})).  $$
- Finally, [[(Theorem) (Relative) homology is homotopy invariant|homotopy invariance]] implies that the [[Homotopy equivalence|homotopy equivalence]] $(D^{n-1}, \partial D^{n-1}) \to (\mathbb R^{n-1}, \mathbb R^{n-1}\backslash \textup{int}(D^{n-1}))$ induces an isomorphism $$ H_{p-1}(D^{n-1}, \partial D^{n-1}) \to_\cong H_{p-1}(\mathbb R^{n-1}, \mathbb R^{n-1}\backslash \textup{int}(D^{n-1})). $$

Combining these gives an isomorphism

$$
H_p(D^n, \partial D^n) \cong H_{p-1}(D^{n-1}, \partial D^{n-1})
$$

for all $p$ and all $n \geq 1$. By induction, we obtain

$$
H_p(D^n, \partial D^n) \cong H_{p-n}(D^0, \partial D^0) = H_{p-n}(\{ * \}, \varnothing) = H_{p-n}(\{ *\})
$$
$$
\cong \begin{cases}\mathbb Z & \text{for }p=n \\ 0 & \text{otherwise} \end{cases}.
$$

---

# Applications

#### Homology of the $n$-sphere

>[!abstract] Corollary: $S^n \cong S^m \iff n = m$.

>[!abstract] Corollary: $\mathbb R^n \cong \mathbb R^m \iff n = m$.

*Proof from [[MATH-GU4053|Algebraic Topology]]* ([[2025-03-25]]). $\ \text{}$Suppose there exists a [[Homeomorphisms and topological embeddings|homeomorphism]] $h : \mathbb R^n \to \mathbb R^m$, and $h(0) = 0$ without loss of generality. Then the restriction $h|_{\mathbb R^n \backslash \{ 0 \} }: R^n \backslash \{ 0 \} \to R^m \backslash \{ 0 \}$ is also a homeomorphism, so it induces an isomorphism of relative homologies $$ h_* : H_p(\mathbb R^n, R^n \backslash \{ 0 \} ) \to H_p(\mathbb R^m, R^m \backslash \{ 0 \} )$$ which 
- isomorphic for all $p$
- also can extract dimension
- Homeomorphism induces isomorphism on homology (why? singular homology of pairs is a functor?)