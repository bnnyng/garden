---
aliases:
  - Calculating fundamental groups
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-12T13:42:14-04:00
---
# Overview

A more general way of *calculating* [[Fundamental groups|fundamental groups]]—i.e., constructing an isomorphism to a more familiar group—makes use of the following fact about [[Group actions on topological spaces|covering space actions]]: a group acting on a simply-connected space is isomorphic to the fundamental group of its orbits. 

In practice, this theorem can be applied on a [[(Path-)connectedness|path-connected]] space $Y$ by *guessing* a [[Homeomorphisms and topological embeddings|homeomorphism]] (or [[Homotopy equivalence|homotopy equivalence]] such that $Y \simeq X/G$ for a covering space action of a group $G$ on a [[Simply connected spaces|simply connected]] space $X$.

---
# Statement and proof

>[!abstract] Theorem: The fundamental group of a quotient space
>Let $G$ be a [[Algebraic groups|group]] and $Y$ be any [[Topological spaces and open sets|topological space]].
>- (i) If $G \times Y \to Y$ is a [[Group actions on topological spaces|covering space action]], then the [[Quotient spaces|quotient map]] $q : Y \to Y / G$ defined by $x \mapsto [x]$ is a [[Covering maps|covering map]].
>- (ii) In the situation above, if $Y$ is also [[Simply connected spaces|simply connected]] (i.e., [[(Path-)connectedness|path-connected]] with trivial [[Fundamental groups|fundamental group]]), then we have $G \cong \pi_1(Y/G, q(y_0))$ via the [[Group homomorphisms and isomorphisms|group isomorphism]] mapping $$ g \mapsto [q \circ f_g], $$ where $f_g : I \to Y$ is any path such that $f_g(0) = y_0$ and $f_g(1) = g \cdot y_0$. 

Precisely, the fact that this map is **surjective** means that 

*Proof of (i) from [[MATH-GU4053|Algebraic Topology]].*

#wip See notes. Prop. 2.4.3



---

# Examples

#### Circle

As an alternative to [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers]], we can consider the action of $G = (\mathbb Z, +)$ on $\mathbb R$ by **translation**. Clearly $\mathbb R$ is simply connected and $G \times \mathbb R \to \mathbb R$ is a covering space action, so $p : \mathbb R \to \mathbb R / \mathbb Z$ is a covering map. Since $S^1 \cong \mathbb R / \mathbb Z$, we reproduce the fact that $\pi_1(S^1) \cong \mathbb Z$. 

#### Torus

Recall that the [[Torus]] $T$ is homeomorphic to $\mathbb R^2 / \mathbb Z^2$. Consider the group $G = \mathbb Z^2$ acting on $\mathbb R^2$ by **translation**. Similar to the above, $G \times \mathbb R^2 \to \mathbb R^2$ is a covering space action, so $p : \mathbb R^2 \to \mathbb R^2/G$ is a covering map and we conclude for fixed $x \in \mathbb R^2$ we have $\pi_1(T, p(x)) \cong \mathbb Z^2$. 

#### Klein bottle

Recall that the [[Klein bottle]] is homeomorphic to $\mathbb R^2 / G$, where $$ G = \{ T^aS^b \ : \ a, b \in \mathbb Z \} $$ and $S, T : \mathbb R^2 \to \mathbb R^2$ are the homeomorphisms defined by $$ S(x, y) = (x + 1, -y) \quad \quad T(x, y) = (x, y+1), $$ and that the map $\mathbb Z^2 \to G$ is a bijection. The action $G \times \mathbb R^2 \to \mathbb R^2$ defined by **evaluation** is a [[Group actions on topological spaces|covering space action]], so the usual quotient projection $p : \mathbb R^2 \to \mathbb R^2 / G$ is a covering map and the basepoint $x = (0, 0)$ gives an isomorphism $G \to \pi_1(\mathbb R/ G, p(x))$.  

Note that unlike with the case of the torus, $\pi_1(\mathbb R/G), p(x)) \ncong \mathbb Z^2$ since $G$ is not abelian. *This shows in general that [[Fundamental groups|fundamental groups]] need not be [[Abelian groups|abelian]].*




NOTE: GENERALIZATION OF THE PROOF FOR [[(Theorem) The fundamental group of the circle is isomorphic to the additive group of integers]]

- MEthod for calculating the fundamental gorup given some X, gives a homeo. between base space and a quotient of a oveirng space

- Covering space action and trivial fundamental group implies that group is iso. to space that one quotients by…?
- Show well-defined (if there is a different path with the same two endpoints, then we get an equal element in the fundamental group), bijection
	- Use fact that fundamental group trivial means [[Simply connected spaces|simply connected]] $\implies$ any two paths homotopic rel endpoints
	- Injection from homotopy lifting
	- Surjective…? Path lifting
	- Group homomorph to isomorphism (sort of, but technically would want a right action…but every group structure is isomorphic to its inverse)
- [[2025-02-06]]: look at a loop, see where it lifts, ask what group element we need to act on it, take an inverse (didn’t need to do this for the circle because it was an isomorphism)
	- “Guessa  homeomorphism 