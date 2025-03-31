---
aliases:
  - quotient map
  - quotient space
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠
publish: "true"
date: 2024-10-22 18:51
lastmod: 2025-03-09T20:05:31-04:00
---
# Overview

The word “quotient” refers to dividing a space into [[Disjoint unions|disjoint]] pieces. One way to formalize this idea is by constructing **quotient spaces**: given an [[Relation|equivalence relation]] $\sim$ on a [[Topological spaces and open sets|topological space]] $X$, the set of equivalence classes 
$$
X / \sim = \{ C_x \ | \ x \in X\}
$$
can be thought as what’s left after “crushing” all points that are similar to each other down to a single element. The **quotient topology** is the topology that makes the canonical projection, or **quotient map** $p: X \to X / \sim$  defined by $x \mapsto [x]$ [[Continuous functions|continuous]].

Quotient are generally thought of in terms of their [[Universal properties of topologies|universal property]]: if $f$ is a function that is constant on equivalence classes, then $f$ is still well-defined after “crushing” the equivalence class to a single point. In fact, the universal property implies that the quotient topology is chosen precisely so that such a map $f$ is still [[Continuous functions|continuous]].

>[!example] Notation
>Given $A \subseteq X$, let $\sim_A$ be the equivalence relation given by $x = y$ or $x, y \in A$ for all $x, y \in X$. Then we write $X / A := X / \sim_A$ for the quotient where all of $A$ is “crushed” to a point.

Quotients are the topological version of a general algebraic [[Group actions and orbits|orbit space]].

Related: [[Disjoint unions]], [[Normal subgroups and quotient groups]]

---
# Quotient spaces

>[!example] Definition: Quotient topology
>Let $\sim$ be an [[Relation|equivalence relation]] on a [[Topological spaces and open sets|topological space]] $X$, and let 
>$$
>C_x = \{ z \in X \ | \ z \sim x\} \subset X
>$$
>be an equivalence class. The set of equivalence classes 
>$$
>X / \sim = \{ C_x \ | \ x \in X\},
>$$
>where $C_x = C_y$ if and only if $x \sim y$, has a *canonical projection* or *quotient map* $p : X \to X/\sim$ sending point $x$ to its equivalence class $[x]$; the notation $[x]$ indicates an element of $X / \sim$, rather than a subset
>$$
>p^{-1}([x]) = \{ y \in X | \ y \sim x \} = C_x \subset X.
>$$
>The **quotient topology** on $X / \sim$ is the topology such that $p$ is [[Continuous functions|continuous]]: 
>$$
>U \subset X / \sim \text{ open} \iff p^{-1}(U) \subset X \text{ open}.
>$$


![[Universal properties of topologies#^bc4d96]]


---
# Quotient maps

>[!example] Definition: Quotient map, relative quotient topology
>A [[Continuous functions|continuous function]] $p : X \to Y$ is a **quotient map** if $p$ is [[Injectivity, surjectivity, and bijectivity|surjective]] and 
>$$
>U \subset Y \text{ open} \iff p^{-1}(U) \text{ open}.
>$$
>The **quotient topology** on $Y$ (relative to $p$) is the *unique* topology such that $p$ is a quotient map. 

^aca28f


>[!abstract] Lemma: Conditions for continuous surjections to be quotient maps
>Let $p : X \to Y$ be [[Continuous functions|continuous]] and surjective. Then $p$ is a quotient map if either of the following hold:
>- (i) $p$ is an open or closed map (sends open sets to open sets, or closed sets to closed sets);
>- (ii) $X$ is [[Compactness|compact]] and $Y$ is [[Hausdorff spaces|Hausdorff]] (c.f. [[(Theorem) A continuous bijection from a compact space to a Hausdorff space is a homeomorphism]]).

^7594aa

>[!abstract] Theorem (Munkres 22.2): Characterizing continuous functions out of quotient spaces
>Let $p : X \to Y$ be a quotient map. Let $Z$ be a space and let $f : X \to Z$ be a function which is constant on $p^{-1}(z)$ for all $z \in Z$. Then there exists a *unique* $\overline f : Y \to Z$ such that $\overline f \circ p = f$. 
>
>![[Pasted image 20241028110109.png|150]]
>Moreover:
>- (i) **The [[Universal properties of topologies|universal property]] of quotients.** $\overline f$ is continuous if and only if $f$ is continuous;
>- (ii) $\overline f$ is a quotient map if and only if $f$ is a quotient map.

^a96c53

*Proof of (ii) from [MME Topology notes](https://sites.google.com/view/millereismeier/home).*

We restate (ii) as the following:

>[!abstract] Proposition: Surjections from compact spaces to Hausdorff spaces are quotients
>Let $f : X \to Y$ be a [[Continuous functions|continuous]] [[Injectivity, surjectivity, and bijectivity|surjection]] from a [[Compactness|compact]] space to a [[Hausdorff spaces|Hausdorff]] space. Then if $\sim$ is the [[Relation|equivalence relation]] 
>$$
>x \sim z \iff f(x) = f(z),
>$$
>then the *induced* map $\bar f : X / \sim Y \to Y$ is a [[Homeomorphisms and topological embeddings|homeomorphism]]; equivalently, $f$ is a quotient map.

*Proof from [[MATH-GU4051|Topology]].*

- **Existence of $\overline f$.** Let $y \in Y$. Since $p$ is surjective, we may pick $x \in X$ such that $p(x) = y$, and set $\overline f(y) = f(x)$. The condition on $f$ guarantees $\overline f$ is well-defined ❓, uniqueness is clear.
- (i) **$\overline f$ continuous $\implies f$ continuous.** Let $U \subseteq Z$ be open. Then $f^{-1}(U) = p^{-1}(\overline f^{-1}(U))$ is open in $X$. Since $p$ is a quotient map, this implies $f^{-1}(U)$ is open.
- (i) **$f$ continuous $\implies \overline f$ continuous.** 
	1. 🔺 Exercise: check composition of quotient maps is a quotient map.


>[!abstract] Theorem: The relationship between quotient maps and quotient spaces
>Let $p : X \to Y$ be a quotient map. Define and [[Relation|equivalence relation]] $\sim$ on $X$ by setting
>$$
>x_1 \sim x_2 \iff p(x_1) = p(x_2).
>$$ 
>Then there exists a [[Homeomorphisms and topological embeddings|homeomorphism]] $\overline p : X / \sim \to Y$, and the diagram
>
>![[Pasted image 20241028110825.png|150]]
>commutes. That is, every quotient map is of the form $X \to X / \sim$.

^86e415


---
# Examples

#### Interval with endpoints glued together

Consider the interval $[0,1]$ with the equivalence relation $t \sim s$ if either: $t=s$; $t=0$ and $s=1$; or $t=1$ and $s=0$. This is the *simplest* equivalence relation under which $0 \sim 1$. Note the following:
- There are two types of points in $[0,1]$: if $t \neq 0, 1$, then the point $[t] \in [0, 1]/\sim$ corresponds to the equivalence class $\{ t\}$. If $t = 0, 1$, then the point $[t] \in [0,1]/\sim$ corresponds to the equivalence class $\{ 0, 1\}$.
- Every open interval $(a,b)$ is **saturated**, meaning it is a union of equivalence classes $C_t = \{ t\}$ for all $t \in (a, b)$, which project to (i.e., their images under $p: [0,1] \to [0,1]/\sim$ are) open sets in the quotient.
- The half-open interval $[0, b)$ for $b < 1$ does not project to an open set $p([0, b))$.


#### Torus

We can define the torus as the quotient of $X = [0, 1]^2$ by defining a relation $\sim$ by $(t, 0) \sim (t, 1)$ and $(0, s) \sim (1, s)$ for all $t, s \in [0,1]$.
- Take the minimal equivalence relation generated by these conditions (a relation) — taking the intersection of all relations $R \subseteq X \times X$.
- Technically $(0, 0) \sim (0, 1)$, $(0,0) \sim (1, 0) \sim (1, 1)$, have declared symmetry and transitivity by doing so (the four points in the corners are equivalent).

Explicitly, the map $f: [0,1]^2 \to S^1 \times S^1$ defined by
$$
f(t, s) = (\cos 2 \pi t, \sin 2 \pi t, \cos 2 \pi s, \sin 2 \pi s)
$$
is a continuous surjection from a compact space to a Hausdorff space, hence a quotient map. Since $f$ is constant on equivalence classes under $\sim$, we conclude by the [[Universal properties of topologies|universal property]] that $f$ induces a homeomorphism $\bar f: X / \sim \to S^1 \times S^1$.

#### Unit sphere with antipodal points identified

![[Real projective space#^ee538c]]

#### Quotients of the closed disk $D^n$

- $D^n \cong (S^{n-1} \times [0, 1])/(S^{n-1} \times \{ 0\})$
- $D^n / S^{n-1} \cong S^n$.

#### The Mobius band

The **Mobius** band is defined to be the space $M = I^2 / \sim$ where $(0, s) \sim (1, 1-s)$; that is, the left edge of the square $I^2$ is glued to the right edge with a twist.

---
# Review

- 🔺 Show that if $U \subset X / \sim$ is open, then $p^{-1}(U) \subset X$ is an open subset of $X$ which is a union of equivalence classes (i.e., **saturated**); and that if $V \subset X$ is **saturated**, then $p(V)$ is open (note that $p^{-1}(p(V))) = V$.
- 🔺 Check that the quotient topology is indeed a topology.
