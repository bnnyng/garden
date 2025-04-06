---
aliases:
  - relative homology
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-06T18:19:20-04:00
---
# Overview 

Extension of notes on [[Homology of general chain complexes]].

**Relevant theorems:**
- [[(Theorem) (Relative) homology is homotopy invariant]]
- [[(Theorem) The relative homology of a subset is isomorphic to the subset with excision when the closure of the excision is in the interior of the subset]]

---
# Basic definition

>[!definition] Relative homology
>Let $(X, A)$ be a **pair of spaces** where $A \subseteq X$ as a (topological) [[Subspace (induced) topology|subspace]]. If $(Y, B)$ is another pair of spaces, a **map of pairs** is a continuous $f: X \to Y$ such that $f(A) \subseteq B$.
>
>To obtain a chain complex from a pair of spaces, let $C_p(X, A)$ be the [[Normal subgroups and quotient groups|quotient group]] $C_p(X) / C_p(A)$ consisting of formal linear combinations of $p$-simplices, and let $\partial : C_p(X, A) \to C_{p-1}(X, A)$ be defined by the commutative diagram
>![[Pasted image 20250401123151.png|300]]
>where $i_*$ is the map induced by inclusion $i : A \to X$ and $j_*$ is the quotient map. The **relative homology** of $(X, A)$ is defined as the homology of the chain complex $C_*(X, A)$: 
>$$
>H_p(X, A) = H_p(C_*(X, A), \partial).
>$$


---
# The long exact sequence in relative homology

Notice that 
$$
0 \to C_p(A) \to_{i_*} C_p(X) \to_{j_*} C_p(X, A) \to 0
$$
is a [[Exact sequences|short exact sequence]] for all $p$, which incudes a long exact sequence of homology groups
$$
\cdots \to H_p(A) \to_{i_*} H_p(X) \to_{j_*} H_p(X, A) \to_\delta 
$$
#wip

>[!abstract] Lemma: Long exact sequence of a pair
