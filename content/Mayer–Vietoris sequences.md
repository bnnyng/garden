---
aliases:
  - Mayer–Vietoris sequence
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: "true"
lastmod: 2025-04-24T09:45:08-04:00
date: 2025-04-23T18:17:21-04:00
---
# Overview

For a pair of subspaces $A, B \subseteq X$ such that $X$ is the union of the interiors of $A, B$, the **Mayer–Vietoris sequence** is a long [[Exact sequences|exact sequence]] of the form
$$
\cdots \to H_p(A \cap B) \to H_p(A) \oplus H_p(B) \to H_p(X) \to_\partial H_{p-1}(A \cap B) \to \cdots \to H_0(X) \to 0.
$$
Like the long exact sequence in [[Relative singular chains and relative homology|relative homology]], the Mayer–Vietoris sequence is useful for calculations and sometimes more convenient to use.

For $A \cap B$ [[(Path-)connectedness|path-connected]], we have the [[Commutator subgroups and abelianization|abelianized]] statement of [[(Theorem) van Kampen]]: the $H_1$ terms of the reduced Mayer–Vietoris sequence give an isomorphism
$$
H_1(X) \cong \frac{H_1(A) \oplus H_1(B)}{\text{Im}((j_0)_*, - (j_1)_*) : H_1(A \cap B) \to H_1(A) \oplus H_p(B)},
$$
where $(j_0)_*, (j_1)_*$ are the maps induced on relative homology by inclusions $j_0 : A\cap B \to A$ and $j_1 : A \cap B \to B$.

---

# Preliminaries: Small chains

Recall the definition of a $\mathcal U$-small chain from the proof of the [[(Theorem) The relative homology of a subset is isomorphic to the subset with excision when the closure of the excision is in the interior of the subset|excision theorem]].

>[!definition] Small chain
>Let $X$ be any space and $\mathcal U$ be a collection of subsets of $X$. We say that a [[Singular chains and singular homology|singular simplex]] $\sigma : \Delta^p \to X$ is **$\mathcal U$-small if** there exists $U \in \mathcal U$ such that $\textup{Im} (\sigma) \subseteq U$. The subgroup spanned by $\mathcal U$-small simplices is denoted
>$$
>C^{\mathcal U}_p(X) \subseteq C_p(X).
>$$
>Note that if $\sigma : \Delta^p \to X$ is $\mathcal U$-small, then so is $\sigma \circ \delta^i : \Delta^{p-1} \to X$ and hence $\partial \sigma \in C^{\mathcal U}_p$. Therefore we have a [[Homology of general chain complexes|chain complex]] $(C^{\mathcal U}_*(X), \delta)$ given by restricting the boundary on $C_*(X)$, and the inclusion
>$$
>C^{\mathcal U}_*(X) \to C_*(X)
>$$ 
>is a chain map.

---
# Derivation of the Mayer–Vietoris sequence

Let $U_0, U_1$ be subsets of a topological space $X$ with corresponding inclusions $i_0 : U_0 \to X$ and $i_1 : U_1 \to X$, respectively, and set  $\mathcal U = \{ U_0, U_1 \}$. 

- The abelian group $C^{\mathcal U}_p(X)$ is precisely the [[Abelian groups|free abelian group]] on continuous maps $\sigma : \Delta^p \to X$ with image contained in either $U_0$ or $U_1$, so it is equal to the image of the homomorphism induced by inclusions
$$
C_p(U_0) \oplus C_p(U_1) \to C_p(X), 
\quad \quad
(\alpha, \beta) \mapsto (i_0)_*\alpha + (i_1)_*\beta.
$$
- The kernel of this homomorphism has the formal linear combinations $(\sum_\sigma n_\sigma \sigma, \sum_{\sigma’} n_{\sigma'}\sigma)$ of simplices $\sigma \in U_0$ and $\sigma \in U_1$ such that:
	- (i) When $\sigma(\Delta^p) \in U_0 \cap U_1$, we have $n_\sigma + n_{\sigma’} = 0$;
	- (ii) When $\sigma(\Delta^p) \notin U_0 \cap U_1$, the coefficients are 0.
- The kernel is equal to the image of the map
$$
C_p(U_{01}) \to C_p(U_0) \oplus C_p(U_1),
\quad \quad
c \mapsto ((j_0)_* (c), - (j_1)_*(c)),
$$
where $U_{01} = U_0 \cap U_1$ and $j_0 : U_{01} \to U_0$ and $j_1: U_{01} \to U_1$ are the inclusions. 
- Each coordinate of the homomorphism above is **injective**, so we may define a [[Exact sequences|short exact sequence]]
$$
0 \to C_p(U_{01}) \to C_p(U_0) \oplus C_p(U_1) \to C^{\mathcal U}_p(X) \to 0.
$$
In particular, we can view this as an SES of *chain complexes* by viewing the middle term as a chain complex with boundary map $(\alpha, \beta) \mapsto (\partial \alpha, \partial \beta)$. Therefore this SES induces a [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups|long exact sequence in homology]].
- Assuming that the interiors of $U_0, U_1$ cover $X$, i.e., $X = \text{int}(U_0) \cup \text{int}(U_1)$, the homology of $C^{\mathcal U}_*(X)$ agrees with the homology of $X$ and we obtain the unreduced **Meyer–Vietoris sequence**
$$
\cdots \to H_p(U_{01}) \to H_p(U_0) \oplus H_p(U_1) \to H_p(X) \to_\delta H_{p-1}(U_{01}) \to \cdots,
$$
where the two mappings are
$$
(i_0)_* + (i_1)_* : H_p(U_0) \oplus H_p(U_1) \to H_p(X)
$$
$$
((j_0)_*, - (j_1)_*) : H_p(U_{01}) \to H_p(U_0) \oplus H_p(U_1).
$$

----
# The reduced Mayer–Vietoris sequence

The Mayer–Vietoris sequence for [[Reduced singular chains and reduced homology|reduced singular homology]] is obtained by augmenting the short exact sequence
$$
0 \to C_0(U_{01}) \to C_0(U_0) \oplus C_0(U_1) \to C^{\mathcal U}_0(X) \to 0
$$
using the mapping $\widetilde \partial_0 : C_0 \to \mathbb Z$ defined by $\sigma \mapsto 1 \in \mathbb Z$ for the first and last chain groups, and $\widetilde \partial_0 \oplus \widetilde \partial_0$ in the middle group, which gives
$$
0 \to \mathbb Z \to \mathbb Z \oplus \mathbb Z \to \mathbb Z \to 0.
$$




---
# Examples

#wip 

![[Pasted image 20250423185410.png]]

---
# Exercises

- Check that the SES that induces the Mayer–Vietoris sequence is indeed exact (see Hatcher, p. 150).

---
# Code snippets

```
C^{\mathcal U}_*(X)
```

