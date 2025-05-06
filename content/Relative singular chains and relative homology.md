---
aliases:
  - relative homology
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 🔴 🔨
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-04-24T16:16:05-04:00
---
# Overview 

Extension of notes on [[Homology of general chain complexes]]. 

Informally, **relative homology** of a subspace $A \subseteq X$ counts the number of “holes” in $X$ that are not in $A$. In particular, if the inclusion $A \hookrightarrow X$ is a [[Homotopy equivalence|homotopy equivalence]], then the spaces are the same from the perspective of homology, and thus the relative homology groups are all zero.

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

is a [[Exact sequences|short exact sequence]] for all $p$, which induces a long exact sequence of homology groups

$$
\cdots \to H_p(A) \to_{i_*} H_p(X) \to_{j_*} H_p(X, A) \to_\delta H_{p-1}(A) \to \cdots,
$$

where $\partial$ is the connecting homomorphism defined explicitly as follows: let $[c] \in H_p(X, A)$ be a relative homology class represented by $c \in C_p(X)$ with $\partial c \in C_{p-1}(A)$. Then $\delta([c]) = [\partial c]$ is the homology class in $H_{p-1}(A)$ defined by the boundary.

>[!lemma] Long exact sequence of a sequence of inclusions
>For $B \subseteq A \subseteq X$, the inclusions $i : (A, B) \to (X, B)$ and $j : (X, B) \to (X, A)$ induce a [[Exact sequences|short exact sequence]] of [[Homology of general chain complexes|chain complexes]]
>$$
>0 \to C_{*}(A, B) \to_{i_{*}} C_{*}(X, B) \to_{j_{*}} C_{*}(X, A) \to 0, 
>$$
>and hence a [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups|long exact sequence]] in homology
>$$
>\cdots \to H_{p}(A, B) \to _{i_{*}}H_{p}(X, B) \to _{j_{*}} H_{p}(X, A) \to_{\delta} H_{p-1}(A,B) \to \cdots.
>$$

>[!remark]
>If $B \subseteq X$ and the inclusion $i : B \to X$ is a [[Homotopy equivalence|homotopy equivalence]], then it follows from [[(Theorem) (Relative) homology is homotopy invariant|homotopy invariance]] that $i : H_p(B) \to H_p(X)$ is an isomorphism for all $p$. Thus, the LES from the beginning of this section implies $H_p(X, B) = 0$ for all $p$.
>
>For a triple $B \subseteq A \subseteq X$ as in the previous theorem, this means that the [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups|connecting homomorphism]] $H_p(X, A) \to H_{p-1}(A, B)$ is an isomorphism for all $p$.

