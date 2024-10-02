---
aliases:
  - metric
  - metric space
  - distance
  - metric topology
  - metrizable
  - standard bounded metric
  - uniform metric
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
  - MATH-GU4051
publish: "true"
date: 2024-04-10 17:32
lastmod: 2024-09-29T15:02:38-04:00
status: ⚫
---
# Overview

>[!example] Definition: Metric, metric space 
>A **metric** on a set $X$ is a function $d: X \times X \to \mathbb R$ that satisfies the following conditions for all $x, y, z \in X$:
>- (M1) **Non-negativity and identity.** $d(x, y) \geq 0$, with $d(x,y) = 0$ if and only if $x = y$;
>- (M2) **Symmetry.** $d(x,y) = d(y,x)$;
>- (M3) **Triangle inequality**. We have $d(x,y) \leq d(x,z) + d(z,y)$.
>
>The value $d(x,y)$ is often called the **distance** between $x$ and $y$ *in* the metric $d$. A **metric space** is a pair $(X, d)$ where $X$ is any set and $d$ is a metric on $X$.

^2a64da

Some properties of a metric space, such as [[Bounded sets and functions|boundedness]], are not entirely topological, but depend on a choice of metric.


Related: [[Inner product spaces]]

---
# Elements and subsets of metric spaces

>[!example] Definition (Rudin 2.18): Elements and subsets of metric spaces
>Let $(X, d)$ be a metric space.
>- A **neighborhood** of a point $p \in X$ is the set 
>$$
>B_\epsilon(p) = \{ q \in X \ | \ d(p, q) < r\}
>$$
>for some **radius** $r > 0$.
>- A point $p$ is a **[[Limits and accumulation points|limit point]]** of the set $E \subseteq X$ if every neighborhood of $p$ contains a point $q \in E$ where $q \neq p$; that is, every neighborhood of $p$ intersects $E$ at some point other than itself.
>- A point $p$ is an **interior point** of $E$ if there exists a neighborhood $U$ of $p$ such that $U \subseteq E$.
>- $E$ is **closed** if every limit point of $E$ is a point of $E$, and **open** if every point of $E$ is an interior point of $E$.
>- $E$ is **[[Closed sets, closures, and dense subsets|dense in]]** $X$ if every point of $X$ is either a limit point of $E$, in $E$, or both.

^b897c8


---
# The metric topology

Metrics generate [[Topological bases and subbases|topological bases]], which then generate a [[Topological spaces and open sets|topology]].

>[!example] Definition: Metric topology, metrizable space
>If $(X, d)$ is a metric space (i.e., $d$ is a metric on the set $X$), for each $x \in X$, we define the $\epsilon$-ball about $x$ as the set
>$$
>B_d(x, \epsilon) = \{ y \in X \ | \ d(x, y) < \epsilon. \}
>$$
>Then the set of all open balls
>$$
>\{ B_d(x, \epsilon) \ | \ x \in X, \ \epsilon > 0 \}
>$$
>is a [[Topological bases and subbases|basis]] for the **metric topology induced by $d$**. A general [[Topological spaces and open sets|topological space]] $(X, \mathcal T)$ is **metrizable** if there exists some metric on $X$ which induces $\mathcal T$.

^afb4a1

The notation $B_d$ emphasizes that the set of open balls is inducing the metric topology with respect to the *specific* metric $d$. 

>[!abstract] Lemma: Every metrizable space is Hausdorff
>If $X$ is a metrizable space and has a topology induced by the metric $d$, then $X$ is [[Hausdorff spaces|Hausdorff]].

- Lemma that follows from discussion about bases

>[!abstract] Lemma: Using bases to determine which *metric topology* is finer
>Let $d, d’$ be metrics on $X$ with induced topologies $\mathcal T, \mathcal T’$ respectively. Then $T’$ is [[Topological spaces and open sets|finer]] than $\mathcal T$ (i.e., $\mathcal T \subseteq T’$) if and only if for all $x \in X$ and all $\epsilon > 0$, there exists $\delta > 0$ such that $B_{d’} (x, \delta) \subseteq B_d(x , \epsilon)$.

----
# Examples

#### Metric generating the discrete topology

For any set $X$, the metric
$$
d(x,y) = \left\{
\begin{align}
1 \quad  x \neq y \\
0 \quad x = y
\end{align}
\right.
$$
generates the [[Topological spaces and open sets|discrete topology]]: recall that to show a topology is the discrete topology, it suffices to show *every singleton is open*, and we have $\{ x\} = B_d(x, 1/2)$ for all $x \in X$.

#### Euclidean metric

The **Euclidean metric** on $\mathbb R^n$ is the norm $|x - y|$ defined by
$$
d(x, y) = \sqrt{(x_1-y_1)^2 + \cdots (x_n-y_n)^2}.
$$

#### “Square metric” on $\mathbb R^n$

The “square metric” on $\mathbb R^n$ is defined by
$$
\rho (x, y) = \text{max}\{ |x_1-y_1|, ..., |x_n - y_n| \}.
$$

>[!abstract] Theorem: The Euclidean and the square metrics induce the same topology
>The Euclidean and the square metrics induce the same topology on $\mathbb R^n$ (and both are equal to the [[The product topology|product topology]]).

^dec64c

#### Standard bounded metric

>[!example] Definition: Standard bounded metric
>Given any metric space $(X, d)$, the **standard bounded metric corresponding to $d$** is defined as
>$$
>\overline d (x, y) = \text{min}\{ d(x,y), 1\}.
>$$

^079f83

>[!abstract] Theorem: The standard bounded metric induces the same topology as the original
>For any metric space $(X, d)$:
>1. The standard bounded metric $\overline d$ induces the same topology as $d$;
>2. Every subset $A \subseteq X$ is [[Bounded sets and functions|bounded]] with respect to $\overline d$.

Intuitively, we can show (1) by using balls of radius $<1$ to generate the topology induced by $d$. Statement (2) gives an example of how boundedness is a property of the metric, and not a general topological property; the result is immediate by definition of $\overline d$.

#### Uniform metric on the general product

>[!example] Definition: Uniform metric, uniform topology
>Consider the [[The product topology|product]] $\prod_J \mathbb R$, where $J$ is any indexing set. As a set, $\prod_J \mathbb R$ is the set of all functions $J \to \mathbb R$, so we may also denote it $\mathbb R^J$. The **uniform metric on $\mathbb R^J$** is defined by
>$$
>\overline \rho (x, y) = \text{sup} \{ \ \overline d (x_\alpha, y_\alpha) \ | \ \alpha \in J \ \},
>$$
>where $\overline d (x, y) = \text{min}\{ d(x, y), 1\}$ is the **standard bounded metric** on $\mathbb R$ and $d(x, y) = |x - y|$ is the **standard metric**. It induces the **uniform topology on $\mathbb R^J$**.

^b6198c

- use $\overline d$ rather than $d$ to avoid infinity (e.g., what happens if $J = \mathbb Z_{>0}$)

[[Bounded sets and functions|supremum]]

---
# Review

[[MATH-GU4051|Topology]]

- Show that the basis for the metric topology is indeed a basis. ⭐
- Check the example metrics are indeed metrics, particularly $\overline d$. ⭐
- Show that every **metrizable space** is [[Hausdorff spaces|Hausdorff]]. (Hint: select radius $\epsilon > 0$ to create disjoint open balls in $X$.)
- Prove that the Euclidean and the square metrics induce the same topology on $\mathbb R^n$. (Hint: apply the lemma about using bases to determine which *metric topology* is finer.) ⭐
- Prove that the standard bounded metric induces the same topology as the original metric. ⭐
- Show that the **uniform metric on the general product** $\overline \rho$ is a metric. ⭐

---
# Proof appendix

![[Metrics, metric spaces, and the metric topology#^dec64c]]

*Sketch.*
1. **Verify the following inequality: $\rho(x,y) \leq d(x, y) \leq \sqrt{n} \cdot \rho(x,y)$.**
2. $\rho(x,y) \leq d(x,y) \implies$ $y \in B_d(x, \epsilon) \subseteq B_\rho(x, \epsilon)$ for all $x \in X$, and the inequality is bounded above by $\epsilon > 0$.  #concept-question for what epsilon?
