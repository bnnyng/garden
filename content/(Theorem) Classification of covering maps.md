---
aliases:
  - semi-locally simply connected
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-10T21:18:55-04:00
---
# Overview

The classification question for all [[(Path-)connectedness|path-connected]] [[Covering maps|coverings]] for a fixed path-connected space $(Y, y_0)$ involves finding all possible triples $$ (X, x, p), $$ where $(X, x)$ is another path-connected space and $p: X \to Y$ is a covering map for which $p(x) = y_0$, up to [[Categories and morphisms|isomorphism]].






---
# Isomorphisms of covering spaces

>[!example] Definition: Isomorphism of covering spaces
>Given a base space $X$, two [[Covering maps|covering spaces]] $p : Y \to X$ and $p’ : Y’ \to X$ are **isomorphic** if there exists a based [[Homeomorphisms and topological embeddings|homeomorphism]] $h : (Y, y) \to (Y’, y')$ such that $$p = p' \circ h.$$
>![[IMG_B726BD4A6605-1.jpeg|100]]
>More precisely, the map $h$ preserves the covering space structure by sending $p^{-1}(x) \to (p’)^{-1}(x)$ for all $x \in X$.

>[!abstract] Proposition (Hatcher 1.37): Isomorphism of covering spaces is an equivalence relation
>Two [[(Path-)connectedness|path-connected]] [[Covering maps|coverings]] $p : Y \to X$ and $p’: Y’\to X$ are **isomorphic** (i.e., there exists a based [[Homeomorphisms and topological embeddings|homeomorphism]] $h : (Y,y) \to (Y’, y')$ such that $p = p’ \circ h$) *if and only if* the images of their [[Induced homomorphism between fundamental groups|induced homomorphisms]] $$ p_* : \pi_1(Y, y) \to \pi_1(X, x) \quad \quad p_*' : \pi_1(Y, y) \to \pi_1(X, x) $$ are equivalent:
>$$ p_*([f]) = [ p \circ f] = [p' \circ h \circ f] = p'_*([h \circ f]). $$ In this case, the homeomorphism $h$ is unique.

[[2025-02-11]]: More general method in both directions to find the homeomorphism

- Uniqueness part of the classification theorem (injective and well-defined?)
- 

*Proof from [[MATH-GU4053|Algebraic Topology]].*


---
# Classification theorem statement and proof

>[!example] Definition: Semi-locally simply connected
>A space $X$ is **semi-locally simply connected** if for all $x \in X$, there exists a [[(Path-)connectedness|path-connected]] neighborhood $U \subseteq X$ of $x$ such that either of the equivalent statements hold:
>- (i) The [[Group homomorphisms and isomorphisms|group homomorphism]] [[Induced homomorphism between fundamental groups|induced]] by inclusion is $i_* : \pi_1(U, x) \to \pi_1(X, x)$ is trivial, i.e., the class of every loop in $U$ is mapped to the class of the constant map at $x$;
>- (ii) Every loop in $U$ is [[Contractible spaces|nullhomotopic]], i.e., can be contracted to a single point in $X$.

>[!abstract] Theorem (Hatcher 1.38): Classification of covering spaces
>Let $(Y, y_0)$ be a based space that is [[(Path-)connectedness|path-connected]], locally path-connected, and semi-locally simply connected. Then there is a bijection between the set $$ \{ (X, x, p) \ : \ X \ \text{path-connected}, \ x \in X, \ p: X \to Y \ \text{a covering s.t.} \ p(x) = y_0 \} / \sim, $$
> where $\sim$ denotes the isomorphism classes of $(X, x, p)$ (hence $p(x) = y_0$ is required *up to* the equivalence relation $\sim$), and the set of [[Algebraic groups|subgroups]] of $\pi_1(Y, y_0)$, i.e., $$ \{ H \leq \pi_1(Y, y_0)\ : \ H \ \text{is a subgroup} \}. $$

 - Wdym universal covering exists (simply-connected) coveirng and is unique up to isomorphism?


>and $p : (Y, y_0) \to (X, x_0)$ be a based [[Covering maps|covering map]]. Then given some “mild assumptions” on the base space $X$ (see top of page), we have:
>- H exists iff the images are the same
>- Any subgroup of fundamental group arises as the image 



---
# Examples

#### [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers|Fundamental group of the circle]]

Recall that any subgroup $H \leq d\mathbb Z$ is of the form $d \geq 1$ for $d \in \mathbb N$. Consider the map $p : \mathbb R \to S^1$ defined by
$$
p(t) = (\cos 2 \pi t, \sin 2 \pi t).
$$
Any two loops in $\mathbb R$ are [[Homotopies|homotopic rel]] $\partial I$, so $\pi_1(\mathbb R, 0) = \{ e\}$ is trivial and thus the image of the homomorphism induced by $p$ is  $$ \textup{Im}(p_*) = \{ e \} = 0 \mathbb Z \leq \mathbb Z. $$
#concept-question what 

Now let $p_d : S^1 \to S^1$ be the map defined by “wrapping around the circle $d$ times”:
$$
p_d((\cos 2 \pi t, \sin 2 \pi t)) = (\cos 2 \pi dt, \sin 2 \pi dt).
$$
By the same reasoning, the image of its induced homomorphism is
$$ \textup{Im}((p_d)_*) = d \mathbb Z \leq \mathbb Z. $$



---
# Notes

[[2025-02-22]]

- Any two [[(Path-)connectedness|path-connected]] [[Covering maps|covering spaces]] of a base space $X$ can be classified by the following fact: there is a (based) [[Homeomorphisms and topological embeddings|homeomorphism]] between them *in and only if* the images of their [[Fundamental groups|fundamental groups]] under their [[Induced homomorphism between fundamental groups|induced homomorphisms]]—that is, as subgroups of the fundamental group of $X$—are *equivalent*.

[[2025-02-06]]

- $G$ from [[(Theorem) A group acting on a simply connected space is isomorphic to the fundamental group of its orbits]] exists iff the images are equal
- Any [[Algebraic groups|subgroup]] $H \leq \pi_1(X, x)$ arises as the image of the homomorphism induced by a based covering map $p : (Y, y) \to (X, x)$.
- In fact this is an iff relation?