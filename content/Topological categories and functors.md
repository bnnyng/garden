---
aliases: []
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-03T18:18:30-04:00
---
# Overview

The following [[Categories and morphisms|categories]] and [[Categorical functors|functors]] are of particular interest in [[§ Point-Set Topology]] and [[§ Algebraic Topology]].

----
# Categories

| Category                                  | Objects                                                                                        | Morphisms                                                                                                                                                                             | When is there an isomorphism?                                                                           |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| A single group $G$                        | One object, where the set is denoted $\mathsf{Ob}(G) = \{ * \}$                                | Elements of $G$                                                                                                                                                                       |                                                                                                         |
| Groups $\mathsf{Grp}$                     | [[Algebraic groups]]                                                                           | Homomorphisms                                                                                                                                                                         | When there is a bijective homomorphism                                                                  |
| Topological spaces $\mathsf{Top}$         | [[Topological spaces and open sets\|Topological spaces]] $(X, \tau)$                           | [[Continuous functions]]                                                                                                                                                              | When $f$ has a continuous inverse, hence a [[Homeomorphisms and topological embeddings\|homeomorphism]] |
| Based topological spaces $\mathsf{Top}_*$ | Pairs $(X, x_0)$, where $X$ is a topological space and $x_0 \in X$ is the specified base point | [[Fundamental groups\|Base-point preserving]] continuous functions $f : (X, x_0) \to (Y, y_0)$                                                                                        |                                                                                                         |
| Homotopy category $\mathsf{hTop}$         | Topological spaces $(X, \tau)$                                                                 | [[Homotopies\|Homotopy classes]] of continuous functions $[f]$ (n.b., not the maps themselves), i.e., the set of base-point preserving continuous functions as above, modulo $\simeq$ | When $[f]$ is a [[Homotopy equivalence\|homotopy equivalence]]                                          |
| Chain complexes $\mathsf{Ch}$             | [[Homology of general chain complexes\|Chain complexes]]                                              | Chain maps                                                                                                                                                                            |                                                                                                         |

---
# Functors

#### Fundamental group $\pi_1$

Let $\mathsf{Top}_*$ be the category of **based spaces**, where objects are pairs $(X, x_0)$ for a [[Topological spaces and open sets|topological space]] $X = (X, \tau_X)$ and a chosen base point $x_0 \in X$. The morphisms $f: (X, x_0) \to (Y, y_0)$ are simply [[Fundamental groups|base-point preserving]] continuous functions, meaning $f(x_0) = y_0$. Further, let $\mathsf{Grp}$ be the category with [[Algebraic groups|groups]] as objects and [[Group homomorphisms and isomorphisms|group homomorphisms]] as morphisms.

The [[Fundamental groups|fundamental group]] $\pi_1 : \mathsf{Top}_* \to \mathsf{Grp}$ is a functor: given a morphism $f : (X, x_0) \to (Y, y_0$), we have $$ \pi_1(f) : \pi_1(X, x_0) \to \pi_1(Y, y_0) $$ defined by mapping $[\gamma] \mapsto [f \circ \gamma]$ for some representative $[\gamma] \in \pi_1(X, x_0)$. In particular, $\pi_1$ associates each based space to is corresponding fundamental group, and each base-point preserving function is mapped to $\pi_1(f) = f_*$, the [[Induced homomorphism between fundamental groups|induced homomorphism]] between fundamental groups.

#### Free abelian group

In general, the [[Abelian groups|free abelian group]] is a functor $\mathsf{Set} \to \mathsf {Ab}$ defined by $X \mapsto \mathbb ZX$, where $\mathbb Z X$ is the set of **formal linear combinations** of elements of $X$.

The lemma that two [[Group homomorphisms and isomorphisms|group homomorphisms]] $\varphi, \psi : \mathbb ZX \to A$, where $A$ is abelian, are equal *iff* they are equal on every value of $x \in X$ is equivalent to the claim that the function $\mathsf{Ab}(\mathbb ZX, A) \to \mathsf {Set}(X, A)$ defined by sending a homomorphism to its restriction $\varphi \mapsto \varphi|_X$ is a **bijection** for all pairs of sets $X$ and abelian groups $A$.

As an upshot, homomorphisms *out of* free abelian groups can be defined by defining $\varphi(x)$ whenever $x \in X$, and then letting $\varphi: \mathbb ZX \to A$ be its unique extension to a homomorphism.

*Example.* 

#### Singular $p$-simplices

The set of **singular $p$-simplices** in $X$ is a functor $\mathup{Sin}_p : \mathsf{Top} \to \mathsf{Set}$.

#### Singular homology

The class of [[Singular chains and singular homology|singular chains]] $(C_*(X), \partial)$ form a functor $\mathsf{Top} \to \mathsf{Ch}$. To see this, let $f: X \to Y$ be any continuous map, and define $f_*: C_p(X) \to C_p(Y)$ be the homomorphism defined on generators as $f_*(\sigma) = f \circ \sigma$.

>[!abstract] Lemma: Functorial properties of the induced homomorphism on singular chains
>Let $f : X \to Y$ and $g: Y \to Z$ be continuous functions and define $f_*: C_*(X) \to C_*(Y)$ and $g_*: C_*(Y) \to C_*(Z)$ as above. Then $f_*, g_*$ are [[Homology of general chain complexes|chain maps]]. Moreover, the following hold:
>- (i) **Composition:** $(g \circ f)_* = g_* \circ f_*$;
>- (ii) **Identity:** $(\text{id}_X)_*: C_*(X) \to C_*(X)$ is the identity chain map.

Composition with the functor $H_p: \mathsf {Ch} \to \mathsf {Ab}$ 

#### Homology of a chain complex

>[!abstract] Lemma: Homology is a functor from chain complexes to abelian groups
>The association of the abelian group $H_p(C_*, \partial)$ to the chain complex $(C_*, \partial)$ and $H_p(f)$ to a chain map defines a [[Categorical functors|functor]] $H_p : \mathsf {Ch} \to \mathsf {Ab}$.

^0c28bf



$H_p$ is a functor from chain complexes to abelian groups

$H_p(f) : H_p(B) \to H_p(C)$
$[b] \mapsto [f_p(b)]$, 
$b \in B_p$
$\partial_p b = 0$, no boundary
Check that $\partial^C_p(f_p(b)) = 0$
Also representatives

[[2025-02-27]]

$B = (B_p, \partial^B_p)_{p \in \mathbb Z}$
$C = (C_p, \partial^C_p)_{p \in \mathbb Z}$

---
# Code snippets

```
\mathsf{hTop}
```