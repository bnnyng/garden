---
aliases:
  - induced homomorphism
  - induced homomorphism between fundamental groups
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-06T11:37:32-05:00
---
# Overview



---
# Basic definition

>[!example] Definition: Induced homomorphism between fundamental groups
>Let $h: (X, x_0) \to (Y, y_0)$ be a [[Continuous functions|continuous]] map; the notation specifies that $h$ carries a point $x_0 \in X$ to a point $y_0 \in Y$. In this case, $h$ is called **base-point preserving** or **based**.
>
>The **[[Group homomorphisms and isomorphisms|homomorphism]] induced by $h$** is the map 
>$$
>h_*:\pi_1(X, x_0) \to \pi_1(Y, y_0)
>$$
>defined by $h_*([f]) = [h \circ f]$.

^621d04

When defining such a homomorphism, show that it is *well-defined* (i.e., has unique outputs, the desired domain and codomain).

>[!abstract] Theorem (Munkres 52.4): Functorial properties of the induced homomorphism
>If $h: (X, x_0) \to (Y, y_0)$ is a based map, the induced homomorphism $h_*:\pi_1(X, x_0) \to \pi_1(Y, y_0)$ satisfies the following:
>- (i) $h_*$ is indeed a [[Group homomorphisms and isomorphisms|group homomorphism]];
>- (ii) If $k: (Y, y_0) \to (Z, x_0)$ is another based map, then their composite is a based map from $(X, x_0)$ to $(Z, z_0)$ given by
>$$
>k_* \circ h_* = (k \circ h)_*.
>$$
>- (iii) If $\text{id}_X : X \to X$ is the identity with $\text{id}_X (x) = x$ for all $x \in X$, then 
>$$
>(\text{id}_X)_* = \text{id}_{\pi_1(X, x_0)}.
>$$

^142658

*Proof from [[MATH-GU4051|Topology]].*

To see that $h_*$ preserves group multiplication for (i), we have
$$
\begin{align*}
h_* ([f]* [g]) &= h_*([f * g]) := [h \circ (f * g)] \\
&= [( h \circ f) * (h \circ g)] = h_*([f]) * h_*([g]),
\end{align*}
$$
 where the third equality follows from the concatenation properties of [[Homotopies|path-homotopies]] for continuous $h_*$.

For (ii), we have
$$
(k \circ h)_* ([f]) := [(k \circ h) \circ f] = [k \circ (h \circ f)] =: k_*(h_*([f])).
$$

For (iii), we have
$$
(\text{id}_X)_*([f]) := [\text{id}_X([f])] = [f],
$$
so $\text{id}_X$ sends $[f] \mapsto [f]$ for any class $[f] \in \pi_1(X, x_0)$.


---
# Homotopy invariance of the fundamental group

>[!abstract] Corollary (Munkres 52.5): The fundamental group is a topological invariant.
>If $h : X \to Y$ is a [[Homeomorphisms and topological embeddings|homeomorphism]] with $h(x_0) = y_0$ , then $h_* : \pi_1(X, x_0) \to \pi_1(Y, y_0)$ is an [[Group homomorphisms and isomorphisms|isomorphism]]. In particular, if $X, Y$ are [[(Path-)connectedness|path-connected]] and $X \cong Y$, then $\pi_1 (X, x_0) \cong \pi_1(Y, y_0)$.

^974567



Given the homeomorphism $h$, consider the inverse $h^{-1}: Y \to X$. Then 
$$
(h^{-1})_* \circ h_* = (h^{-1} \circ h)_* = (\text{id}_X)_* = \text{id}_{\pi_1(X, x_0)},
$$
and similarly $h_* \circ (h^{-1})_* = \text{id}_{\pi_1(Y, y_0)}$, so $h_*$ is a group isomorphism with $(h_*)^{-1} = (h^{-1}) _*$.

For the second statement, let $h : X \to Y$ be a homeomorphism and pick $x_0 \in X, y_0 \in Y$. Set $z_0 = h(x_0)$. By the previous paragraph, we know $h_* : \pi_1(X, x_0) \to \pi_1(Y, z_0)$ is an isomorphism, and since $Y$ is path-connected and every fundamental group of $Y$ is isomorphic, we certainly have $\pi_1(Y, z_0) \cong \pi_1(Y, y_0)$.
