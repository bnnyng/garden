---
aliases:
  - connected
  - path-connected
  - path
  - topologist's sine curve
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4061
status: 🔴
publish: 
date: 2024-09-29 15:15
lastmod: 2024-10-15T14:14:35-04:00
---
>[!question]
>- Why is it that in analysis, definition uses closure?
>- Why is the closure of a connected set also connected?

---
# # In metric spaces

>[!example] Definition: Connected sets in metric spaces
>Given a [[Metrics, metric spaces, and the metric topology|metric space]] $(X, d)$, a subset $A \subseteq X$ is said to be **connected** if for all other (nonempty) subsets $U, V \in X$ where 
>$$
>\overline U \cap V = U \cap \overline V = \varnothing,
>$$
>we have $U \cup V \neq A$. The sets $U, V$ which satisfy the equality above are said to be **separated**; a subset is **connected** if it is not the union of two (nonempty) separated sets.

^2c2cea


----
# In topological spaces

>[!example] Definition: Separation, connected set in topological space
>Given a [[Topological spaces and open sets|topological space]] $(X, \mathcal T)$, a **separation** of $X$ is a pair of open subsets $U, V \subset X$ which are non-empty, disjoint, and have $U \cup V = X$. 
>
>We say a set $X$ is **connected** if there does not exist *any* separation of $X$. Equivalently, $X$ is connected if and only if the only sets that are both closed and open are $\varnothing$ and $X$.

^028f0f

## Connected subspaces

>[!abstract] Lemma: Facts about connectedness
>- (i) If $Y \subseteq X$ is a connected subspace and $U, V$ form a separation of $X$, then $Y \subseteq U$ or $Y \subseteq V$.
>- (ii) If $A \subseteq X$ is connected and $A \subseteq B \subseteq \overline B$, then $B$ is also connected.
>- (iii) **Conditions for the union of connected subspaces to be connected.** Suppose $\{ A_\alpha\}_{\alpha \in J}$ is a collection of connected subspaces of $X$ such that there exists a “special” index $\beta \in J$ such that for all other $\alpha \in J$, we have $A_\beta \cap A_\alpha \neq \varnothing$. Then $\bigcup_{\alpha \in J}A_\alpha$ is connected.

^679363

## Path-connectedness and continuity

>[!example] Definition: Path, path-connected
>Let $(X, \mathcal T)$ be a [[Topological spaces and open sets|topological space]]. Given $x, y \in X$, a **path** from $x \to y$ is a [[Continuous functions|continuous]] map $p : [0, 1] \to X$ such that $p(0) = x$ and $p(1) = y$.
>
>We say $X$ is **path-connected** if for all $x, y \in X$, there exists a path from $x$ to $y$.

^dcd98f

>[!abstract] Proposition: If $X$ is path-connected, then $X$ is connected.

^d29547

>[!abstract] Proposition: Continuous functions preserve (path-)connectedness
>Let $f : X \to Y$ be a [[Continuous functions|continuous function]] between [[Topological spaces and open sets|topological spaces]]. Then:
>- (i) If $X$ is connected, then so is $f(X)$.
>- (ii) If $X$ is path-connected, then so is $f(X)$.

^48a4d1

---
# Examples

#### Intervals in $\mathbb R$

>[!abstract] Theorem: Every interval of the real numbers is connected.

^9e43c2

On the other hand, subsets of $\mathbb R$ that are *not* intervals cannot be connected. One example is the rationals $\mathbb Q \subset \mathbb R$; then $U = \mathbb Q \cap (-\infty, \sqrt 2)$ and $V = \mathbb Q \cap (\sqrt 2, \infty)$ is a separation.

#### The straight line path

>[!example] Definition: Straight line path
>The straight line path between any two points $p : [0, 1] \to X$, where $p(0)=x$ and $p(1)=y$, is defined by
>$$
>p(t) = (1-t)x + ty.
>$$


The following sets are all path-connected, and hence connected:
- Any interval in $\mathbb R$;
- $\mathbb R^n$;
- Any ball in $\mathbb R^n$;
- If $n \geq 2$, the set $\mathbb R^n \backslash \{ w\}$ for some $w \in \mathbb R^n$;
- $\mathbb R^n$ with countably many points removed (but not *uncountably* many—imagine removing the x-axis of $\mathbb R^2$!).

Any two points of the first three sets are connected via the straight line path. In the final set, points are connected either by the straight line path or, if $w \in p([0, 1])$, we can define a path by
$$
p(t) = \left \{ 
\begin{matrix}
f(2t) &\text{if } 0 \leq t \leq 1/2 \\
g(2t-1) &\text{if } 1/2 \leq t \leq 1
\end{matrix}
\right .
$$
where $f$ is a path from $x$ to $z$ and $g$ is a path from $z$ to $y$ for some $z \in \mathbb R^n \backslash \{ w\}$; note that $p$ is continuous by the [[Continuous functions|pasting lemma]].

🔺*Exercise.* Finish showing that these sets are path-connected by showing that the straight line path is indeed contained in the set.
#### Connected but not path-connected

#wip [[Topologist's sine curve]]

----

# Review

- Show that any two intervals of the reals are [[Homeomorphisms and topological embeddings|homeomorphic]], so the domain of a path can be defined with an arbitrary interval. ⭐