---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4053
status: 🟠 🔨
publish: 
date: 2024-11-21 18:26
lastmod: 2025-02-04T12:35:20-05:00
---
# Overview

The [[Fundamental groups|fundamental group]] of the circle is isomorphic to the additive group of integers $\mathbb Z$. Intuitively, the isomorphism “counts” how many times each loop “winds around” the circle.

This result is applied to prove several classic theorems in topology, including theorems about [[Retractions and fixed points|retractions]] and [[(Theorem) Fundamental theorem of algebra]].

#wip Generalization to [[Group actions on topological spaces]]

See also: [[(Theorem) The fundamental group of the n-sphere is trivial in higher dimensions]]

---
# Proof

>[!abstract] Theorem: $\pi_1(S^1, x_0) \cong \mathbb Z$
>The path $p: \mathbb R \to S^1$ defined by $$ p(t) = (\cos 2 \pi t, \sin 2 \pi t) $$**generates** the fundamental group $\pi_1(S^1, x_0) \cong \mathbb Z$.

^7b03d7

*Proof from [[MATH-GU4051|Topology]].*

Let $p$ be defined as above, and suppose $x_0 = (1, 0)$ and $\tilde x_0 = 0$ so that $\tilde x_0 \in p^{-1}(x_0) = \mathbb Z$. Let $\phi: \pi_1(S^1, x_0) \to \mathbb Z$ be the lifting correspondence defined by 
$$
\phi([f]) = \tilde f(1),
$$
where $f : I \to X$ is a loop based at $x_0$ and $\tilde f : I \to \tilde X$ is its unique [[Covering maps|lift]] starting at $\tilde x_0$. Since $S^1$ is [[Simply connected spaces|simply connected]], meaning it is both [[(Path-)connectedness|path-connected]] and has a trivial fundamental group, we conclude $\phi$ is a bijection.

To see that $\phi$ is a [[Group homomorphisms and isomorphisms|group homomorphism]], consider $[f], [g] \in \pi_1(S^1, x_0)$ and corresponding lifts $\tilde f, \tilde g$ starting at $\tilde x_0 = 0 \in \mathbb R$. Setting $n = \tilde f(1), m = \tilde g(1)$ for $n, m \in \mathbb Z$, define $h : I \to \mathbb R$ by 
$$
h (s) = g(s ) + n
$$
Then $(p \circ h)(s) = g(s)$, so by definition, $h$ is a lift of $g$ (❓ to where? $\mathbb R$?) starting at $n$ and ending at $n + m$. Then since
$$
p \circ (\tilde f * h) = (p \circ \tilde f) * (p \circ h) = f * g,
$$we see that the [[Path concatenation|path concatenation]] $\tilde f * h$ is a lift of $f * g$ to the real line that starts $0$ and ends at $n + m$ (❓ why can we define this? What does it take to define a lift?). Thus, we have
$$
\phi ([f] * [g]) = \phi([f * g]) = n + m = \phi([f]) + \phi([g])
$$
as desired. $\ \square$


>[!abstract] Theorem: $\pi_1(S^1, x_0) \cong \mathbb Z$
>The map $(\mathbb Z, + ) \to \pi_1(S^1, x_0)$ defined by $n \mapsto [\omega_n]$ is a [[Group homomorphisms and isomorphisms|group isomorphism]].

*Proof from [[MATH-GU4053|Algebraic Topology]] (following Hatcher).*

Let $p: \mathbb R \to S^1$ be defined as before. To show that the desired map is bijective, we use two slightly more general claims.

![[IMG_AEF18850B706-1.jpeg|350]]

> **Claim 1:** For any $f : [0, 1] \to S^1$ with $f(0) = x_0$, there exists a *unique* [[Covering spaces and liftings|lift]] $\tilde f : [0, 1] \to \mathbb R$ such that $p \circ \tilde f = f$ and $\tilde f(0) = 0 \in \mathbb R$.



>**Claim 2 (about $p : \mathbb R \to S^1)$:** For any space $Y$ and any [[Homotopies|homotopy]] $F: Y \times I \to S^1$ between $f_0, f_1 : Y \to S^1$, if $\tilde f : Y \to \mathbb R$ is any lift of $f_0$ to the reals (i.e., $p \circ \tilde f_0 = f_0$), then there exists a *unique* homotopy $\widetilde F : Y \times I \to \mathbb R$ such that $$ p \circ \widetilde F = F \quad \quad \widetilde F(y, 0) = \tilde f(y). $$ Further, if $F$ is a homotopy *relative to* some subspace $A \subseteq Y$, then $\widetilde F$ is is as well.

#concept-question Is the lift unique? The final homotopy unique? Are these the same?

This implies that the desired map is injective: suppose $\omega_n \simeq \omega_m$ rel $\partial I$ via some homotopy $F: I \times I \to S^1$. Then there exists a unique lifted homotopy $\widetilde F : I \times I \to \mathbb R$ rel $\partial I$ such that
$$
\widetilde F(t, 0) = \widetilde \omega _n (t), 
$$

\quad \quad \widetilde\omega_n(0)



- to prove bijectivity in particular, need two slightly more general claims

#concept-question  is $f$ a loop here or any path






For injectivity, we prove a more general claim, then consider the case where $Y$ is an interval:

mes homotopy downstairs, homotopies lift

![[IMG_AEF18850B706-1.jpeg]]


![[IMG_E0B56FF49390-1.jpeg]]