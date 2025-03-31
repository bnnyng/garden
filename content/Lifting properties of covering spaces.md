---
aliases:
  - lift
  - lifting correspondence
  - homotopy lifting
  - lifting
  - path lifting
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-07T17:01:38-05:00
---
# Overview and basic definition


>[!example] Definition: Lifting map
>Let $f: X \to Y$ be [[Continuous functions|continuous]]. If $g: Z \to Y$ is also continuous, then a **lift** of $g$ is a continuous map $\widetilde g : Z \to X$ such that $f \circ \widetilde g = g$.
>
>![[Pasted image 20241130143257.png|150]]

^adc610

[[Covering maps]] have several special lifting properties:
- **Homotopy lifting:** A homotopy *into* the base space has a *unique* lift to a homotopy into its covering space.
- **Lifting criterion:** Given some connectivity assumptions on the domain of a continuous map *into* the base space, a lift of the map exists *if and only if* the image of its [[Induced homomorphism between fundamental groups|induced homomorphism]] between fundamental groups is contained in the image of the homomorphism induced by the covering map.
- **Unique lifting:** Given a map *out of* a connected covering space, if two lifts agree at one point of the covering, then they agree on all of the covering.

---
# Homotopy lifting property

Proof given in the following note: [[(Theorem) Path and homotopy lifting]].

>[!abstract] Theorem (Hatcher 1.30): Lifting homotopies to covering maps
>Let $p : \widetilde X \to X$ be a [[Covering maps|covering map]], $Y$ any other topological space, and $H : Y \times I \to X$ a [[Homotopies|homotopy]]. If $f : Y \to \widetilde X$ is a continuous map such that $H(0, -) = p \circ f$, then there exists a *unique* homotopy $\widetilde H : Y \times I \to \widetilde X$ that lifts $H$, i.e.,  $$ p \circ \widetilde H = H \quad \text{and}\quad \widetilde H(0, -) = f.$$ Moreover, if $H$ is a homotopy relative to a subspace $U \subseteq X$, then so is $\widetilde H$.

>[!abstract] Corollary (Hatcher 1.31)
>Let $(X, x_0)$ and $(Y, y_0)$ be based spaces and $p : X \to Y$ be a [[Covering maps|covering map]]. 
>- (i) The [[Induced homomorphism between fundamental groups|induced homomorphism between fundamental groups]] $p_*: \pi_1(X, x_0) \to pi_1(Y, y_0)$ is [[Injectivity, surjectivity, and bijectivity|injective]].
>- (ii) Let $\delta$ be a loop in $(Y, y_0)$. Then there exists a loop $\gamma$ in $(X, x_0)$ with $\delta = p \circ \gamma$ *if and only if* the [[Homotopies|path-homotopy]] class $[\delta] \in \pi_1(Y, y_0)$ is in the image of $p_*$.

- Note that this is diff from path lifting because we don’t make assumptions on homotopy class—such a general lift does not necessarily end at $x_0$. 


---
# Lifting criterion

[[2025-02-11]]


>[!abstract] Proposition (Hatcher 1.33): Lifting criterion for the existence of general lifts
>Let $W$ be [[(Path-)connectedness|path-connected]] and locally path-connected, $f : (W, w_0) \to (X, x_0)$ be continuous, and $p : (Y, y_0) \to (X, x_0)$ be a [[Covering maps|covering map]]. Then a *unique* lift $\tilde f : W \to Y$ for which $$ f = p \circ \tilde f, \quad \quad \tilde f(w_0) = y_0 $$ exists *if and only if* the [[Induced homomorphism between fundamental groups|induced homomorphisms]] satisfy $\textup{Im}(f_*) \subseteq \textup{Im}(p_*)$, meaning $$  f_*([\gamma]) = [f \circ \gamma] = [p \circ \tilde f \circ \gamma] = p_*([\tilde f \circ \gamma]). $$


---
# Unique lifting

>[!abstract] Theorem (Hatcher 1.34): Unique lifting
>Let $f : W \to Y$ be continuous and $p: X \to Y$ be a [[Covering maps|covering map]]. If $W$ is [[(Path-)connectedness|connected]], then whenever two lifts $\tilde f_1, \tilde f_2 : W \to X$ of $f$ agree at one point of $W$, they also agree on all of $W$.


---
# Lifting correspondences

The motivation for a lifting correspondence in [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers]] is to take a complicated loop in $S^1$ and “unwrap” it by a lift that “straightens out” the loop in $\mathbb R$.

>[!example] Definition: Lifting correspondence
>Given a covering $p: \widetilde X \to X$ and some points $x_0 \in X$ and $\widetilde x_0 \in p^{-1}(x_0)$, define the **lifting correspondence** $\phi : \pi_1(X, x_0) \to p^{-1}(x_0)$ derived from $p$ as follows: if $f: I \to X$ is a [[Fundamental groups|loop]] at $x_0$ and $\widetilde f : I \to \widetilde X$ is a lift starting at $\widetilde x_0$, then 
>$$
>\phi([f]) = \widetilde f(1)
>$$ 
>(note that this is a point in $p^{-1}(x_0)$ since $p \circ \widetilde f (1) = f(1)$).

>[!abstract] Theorem (Munkres 54.4):
>- (i) If $\widetilde X$ is [[(Path-)connectedness|path-connected]], then $\phi$ is surjective.
>- (ii) If $\widetilde X$ is [[Fundamental groups|simply connected]], then $\phi$ is bijective.

---
# Notes

#### Characterization of homotopy lifting from [[MATH-GU4051|Topology]]


>[!abstract] Theorem (Munkres 54.1 & 54.2): Unique liftings of paths and path-homotopies in covering spaces
>Let $p: \widetilde X \to X$ be a covering map, $x_0 \in X$, and $\widetilde x_0 \in p^{-1}(x_0)$. Then:
>- (i) Any path $f: I \to X$ starting at $x_0$ has a *unique* lift to a path $\widetilde f$ in $\widetilde X$ starting at $\widetilde x_0$;
>![[IMG_C08457AEF44A-1.jpeg|150]]
>- (ii) If $F : I \times I \to X$ is a [[Homotopies|path-homotopy]] from two paths $f, g$ which start at $x_0$, then there is a unique lift to a path-homotopy $\widetilde F: I \times I \to \widetilde X$ between $\widetilde f, \widetilde g$, the unique lifts starting at $\widetilde x_0$.

^8a5904

*Proof from [[MATH-GU4051|Topology]].*

For (i), let $\mathcal C$ be a cover of $X$ consisting of sets $U \in \mathcal C$ that are each evenly covered by $p$. Then the collection
$$
\{ f^{-1}(U) \ | \ U \in \mathcal C \}
$$
covers $I$, and since $I$ is [[Compactness|compact]], we can apply the [[(Lemma) Lebesgue numbers exist for compact metric spaces|Lebesgue number lemma]] (🔺 why?) to find a subdivision
$$
0 = t_0 < t_1 < \cdots < t_m = 1
$$
such that for all $i \in 0, \ldots, m-1$, we have $f([t_i, t_{i+1}]) \subseteq U$ for some $U \in \mathcal C$. 

We now define the lift $\widetilde f$ incrementally. Begin by setting $\widetilde f(o) = \widetilde x_0$, and suppose $\widetilde f$ is defined on $[0, t_i$] and we want to define it on $[t_i, t_{i+1}]$. Since $f([t_i, t_{i+1}]) \subseteq U$ for some $U$ that is evenly covered by $p$. #wip

Note that the previous theorem can be proven as consequences of the more general statement:

>[!abstract] Theorem (Hatcher 1.7c): 
>Given a map $F : Y \times I \to X$ and a map $\widetilde F : Y \times \{ 0 \} \to \widetilde X$ lifting the restriction $F|_{Y \times \{ 0\}}$, there is a unique map $\widetilde F : Y \times I \to \widetilde X$ lifting $F$ and restricting to the given $\widetilde F$ on $Y \times \{ 0\}$.
>![[IMG_B2FD2501D4D9-1.jpeg|150]]

❓ *Question.* What is the relationship between the two theorems?

#### Lifting criterion statement from Hatcher


>[!abstract] Theorem: Lifting criterion 
>Let $Y$ be [[(Path-)connectedness|path-connected]] and locally path-connected. Given a [[Covering maps|covering map]] $p : (\widetilde X, \tilde x_0) \to (X, x_0)$ and any map $f : (Y, y_0) \to (X, x_0)$, a lift $\tilde f : (Y, y_0) \to (\widetilde X, \tilde x_0)$ exists *if and only if* the [[Induced homomorphism between fundamental groups|induced homomorphisms]] satisfy $$ f_*(\pi_1(Y, y_0)) \subset p_*(\pi_1(\widetilde X, \tilde x_0)). $$
