---
aliases:
  - continuous function
  - continuous
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
  - MATH-GU4051
status: 🔴🔨
publish: "true"
date: 2024-05-06 12:11
lastmod: 2024-09-27T22:33:32-04:00
---
>[!question]
>- Fact (4) – why restrict domain and codomain? Is this an accurate takeaway? How is it different from (6)?

---
# Overview

- Continuity in topology can be checked in terms of open or closed sets
- Subspace and product topology arise naturally from the definition of continuous function in topological spaces

See also: [[Pointwise continuity]], [[Uniformly continuous function]], [[Homeomorphisms and topological embeddings]]

---
# In Euclidean space

>[!example] Definition: Continuous function in Euclidean space
>A function $f : D \to \mathbb R$ is **continuous** if for all $x \in D$, $f$ is **continuous at** $x_0$.
>$$ 
>\forall_{x_0 \in D} \ \forall_{\epsilon > 0} \ \exists_{\delta(x_0, \epsilon) > 0} \ \forall_{x \in D} \ [ \   |x - x_0| < \delta \implies |f(x) - f(x_0)| < \epsilon \ ] 
>$$

^b2b746

More continuous functions can be generated from the following rules:
- The identity function $f(x) = x$ is continuous.
- Constant functions $f(x) = c$ for some chosen $c \in \mathbb R$ are continuous.
- The function $f(x) = 1/x$ is continuous on $\mathbb R \backslash \{0\}$.
- The function $f: (0, \infty) \to \mathbb R$ defined by $f(x) = \sqrt{x}$ is continuous.
- Products, sums, and composites of continuous functions (when defined) are continuous.


---
# In general topological spaces

>[!example] Definition: Continuous function in topological space
>Let $X, Y$ be [[Topological spaces and open sets|topological spaces]]. A function $f : X \to Y$ is **continuous** if for every open subset $V \subset Y$, the [[Image and preimage|preimage]] set $f^{-1}(V)$ is an open subset of $X$.

^9fa13a

Note that continuity can also be checked in terms of closed sets!

>[!abstract] Theorem (Munkres 18.1): Equivalent statements of continuity
>Let $f: X \to Y$ be a function between [[Topological spaces and open sets|topological spaces]] $X, Y$. Then the following are equivalent:
>- (a) $f$ is [[Continuous functions|continuous]].
>- (b) For every closed set $B \subset Y$, the set $f^{-1}(B)$ is closed in $X$.
>- (c) For all $x \in X$ and every neighborhood $V$ of (i.e., open set $V$ containing) $f(x)$m there is a neighborhood $U$ of $x$ such that $f(U) \subseteq V$.
>- (d) For every [[Subspace (induced) topology|subset]] $A \subset X$, we have $f (\overline A) \subset \overline{f(A)}$, where the overline denotes the [[Closed sets, closures, and dense subsets|closure]] of a set.

^a5487f

Note that condition (c) is similar to $\epsilon-\delta$—why?

#wip Also note that it suffices to prove every basis and subbasis is open

## Facts about continuous functions in topological spaces

#wip compare to Munkres 18.2

#### Every constant function is continuous

#### The subspace topology is the coarsest topology that makes the inclusion function continuous

#### Restrictions of the domain and restrictions or expansions of the range are continuous

#concept-question What is the upshot?

#### The projection functions are continuous, and functions *into* product spaces are continuous if their coordinate functions are continuous

>[!abstract] Theorem: A function is continuous if and only if its coordinate functions are continuous
>Let $X \times Y$ be a [[The product topology|product space]], and $\pi_1: X \times Y \to X$ defined by $\pi_1(x, y) = x$ and $\pi_2 : X \times Y \to Y$ defined by $\pi_2(x, y) = y$ be the projection maps. A function *into* the product space $f : Z \to X \times Y$ is uniquely determined by the **coordinate functions** 
>$$
>f_1 = \pi_1 \circ f \quad \text{and} \quad f_2 = \pi_2 \circ f,
>$$
>which satisfy $f(z) = (f_1(z), f_2(z))$. Then $f$ is [[Continuous functions|continuous]] if and only if $f_1, f_2$ are continuous.

^1b4dbe

#### A function is continuous if for every open set that covers the space, the restriction to that open set is continuous

#concept-question How is this different from 4?

The pasting lemma is a special case of this “local formulation of continuity.”

>[!abstract] Lemma (Munkres 18.3): Pasting
>Let $X = A \cup B$ for some $A, B \subseteq X$ that are both [[Closed sets, closures, and dense subsets|closed]] (or both open) in $X$, and let $f: A \to Y, g : B \to Y$ be [[Continuous functions|continuous]] functions such that for all $x \in A \cap B$, we have $f(x) = g(x)$. Then $h : X \to Y$ defined by
>$$
>h(x) = \left \{
>\begin{align*}
>f(x) \quad \text{if } x \in A \\
>g(x) \quad \text{if } x \in B
>\end{align*}
>\right.
>$$
>is continuous as well.

^21deb4

---
# In general metrizable spaces

Recall that a general [[Topological spaces and open sets|topological space]] $(X, \mathcal T)$ is [[Metrics, metric spaces, and the metric topology|metrizable]] if there exists some metric on $X$ which induces the topology $\mathcal T$. Specifically, the set of all open balls given by this metric is a [[Topological bases and subbases|basis]] for $\mathcal T$ on $X$.

>[!abstract] Lemma (Munkres 21.1): $\epsilon-\delta$ definition of continuity in metrizable spaces
>Let $(X, d_X), (Y, d_Y)$ be [[Metrics, metric spaces, and the metric topology|metric spaces]]. Then a function $f: X \to Y$ is continuous if and only for all $x \in X$ and all $\epsilon>0$, there exists $\delta > 0$ such that
>$$
>d_X(x, y) < \delta \implies d_Y(f(x), f(y)) < \epsilon.
>$$

^e3c6d0

>[!abstract] Lemma (Munkres 21.2 & 21.3): Convergent sequence definition of continuity in metrizable spaces
>1. Let $A \subseteq X$. If a sequence in $A$ converges to $x \in X$, then $x \in \overline A$, the [[Closed sets, closures, and dense subsets|closure]] of $A$.
>2. Let $f: X \to Y$. If $f$ is continuous, then for all sequences $x_n \to x$ in $X$, we have $f(x_n) \to f(x)$ in $Y$.
>
>The converse holds for [[Metrics, metric spaces, and the metric topology|metrizable]] spaces. As a corollary, [[The countably infinite product of the real line with itself]] in the box topology is *not* metrizable.

^02c80b




---
# Review

## Exercises

[[MATH-GU4051|Topology]]

- Show that for $f : \mathbb R \to \mathbb R$, the $\epsilon-\delta$ definition and the definition of a continuous function in topological space are equivalent. ⭐
- Prove the equivalence of statements in Theorem (Munkres 18.1). ⭐
- Prove the pasting lemma. ⭐
- Prove that the $\epsilon-\delta$ definition of continuity holds for general metric spaces (i.e., with a [[Metrics, metric spaces, and the metric topology|metric topology]]). 

---
# Proof appendix

![[Continuous functions#^02c80b]]