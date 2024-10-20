---
aliases:
  - continuous function
  - continuous
  - pasting lemma
  - uniformly continuous
  - uniform
  - uniform continuity
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
  - MATH-GU4051
  - MATH-GU4061
status: 🟠
publish: "true"
date: 2024-05-06 12:11
lastmod: 2024-10-15T19:20:28-04:00
---
>[!question]
>- Fact (4) – why restrict domain and codomain? Is this an accurate takeaway? How is it different from (6)?

---
# Overview

- Continuity in topology can be checked in terms of open or closed sets
- Subspace and product topology arise naturally from the definition of continuous function in topological spaces
- Continuous functions preserve topological prope[[Continuous functions]][Pointwise continuity]], [[Uniformly continuous function]], [[Homeomorphisms and topological embeddings]]

Informally, a function is **uniformly continuous** if it is [[Pointwise continuity|continuous]] “in the same way” at every point—no matter how close the outputs are chosen to be, as long as the inputs are some close enough, then the outputs will be at least that close.

---
# In Euclidean space

>[!example] Definition: Continuous function in Euclidean space
>A function $f : D \to \mathbb R$ is **continuous** if for all $x \in D$, $f$ is **continuous at** $x_0$.
>$$ 
>\forall_{x_0 \in D} \ \forall_{\epsilon > 0} \ \exists_{\delta(x_0, \epsilon) > 0} \ \forall_{x \in D} \ [ \   |x - x_0| < \delta \implies |f(x) - f(x_0)| < \epsilon \ ] 
>$$

^b2b746



---
# In metric spaces

>[!example] Definition: Continuous functions in metric spaces
>Let $(X, d_X)$ and $(Y, d_Y)$ be [[Metrics, metric spaces, and the metric topology|metric spaces]]. We say a function $f: X \to Y$ is:
>- **Continuous at $x_0 \in X$** if for every $\epsilon > 0$, there exists $\delta > 0$ such that
>$$
>d_X(x, x_0) < \delta \implies d_Y(f(x), f(x_0)) < \epsilon,
>$$
>and $f$ **continuous** if this holds for *all* $x_0 \in X$.
>- **Uniformly continuous** if for all $\epsilon > 0$, there exists $\delta > 0$ such that for *any* choice of $x, x_0 \in X$, we have
>$$
>d_X(x, x_0) < \delta \implies d_Y(f(x), f(x_0)) < \epsilon.
>$$

^700d8d

>[!abstract] Theorem: 
>Let $(X, d_X)$ and $(Y, d_Y)$ be [[Metrics, metric spaces, and the metric topology|metric spaces]]. If $f: X \to Y$ is continuous and $X$ is [[Compactness|compact]], then $f$ is uniformly continuous.

^96dcf9

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
>- (c) For all $x \in X$ and every neighborhood $V$ of (i.e., open set $V$ containing) $f(x)$, there is a neighborhood $U$ of $x$ such that $f(U) \subseteq V$.
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

#### Continuous functions preserve limits

>[!abstract] Lemma ([[MATH-GU4051|Topology]] HW 3.6): Continuous functions preserve limits
>If a [[Sequences|sequence]] $\{ x_n \}_{n \geq 1}$ in a [[Topological spaces and open sets|topological space]] $X$ converges to some [[Limits and accumulation points|limit point]] $x \in X$, and $f : X \to Y$ is continuous, then $\{f(x_n)\}_{n \geq 1}$ converges to $f(x) \in Y$.

^66eaae

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
# Examples

#### Basic examples of continuous functions in $\mathbb R$

More continuous functions can be generated from the following rules:
- The identity function $f(x) = x$ is continuous.
- Constant functions $f(x) = c$ for some chosen $c \in \mathbb R$ are continuous.
- The function $f(x) = 1/x$ is continuous on $\mathbb R \backslash \{0\}$.
- The function $f: (0, \infty) \to \mathbb R$ defined by $f(x) = \sqrt{x}$ is continuous.
- Products, sums, and composites of continuous functions (when defined) are continuous.

#### Continuity vs. uniform continuity

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

![[Continuous functions#^96dcf9]]

*Proof from [[MATH-GU4061|Modern Analysis I]]*.

Given $\epsilon > 0$, we know for all $x’ \in X$, there exists $\delta(x’)> 0$ such that 
$$
d_X(x, x') < \delta(x') \implies d_Y(f(x), f(x')) < \epsilon
$$
for *all* $x \in X$. Then $\delta : X \to \mathbb R$ is a map.

🔺 *Exercise.* Show that $\delta : X \to \mathbb R$ can be chosen to be continuous.

Since $\delta$ can be chosen to be continuous, by the [[(Theorem) Extreme value|extreme value theorem]], it attains its minimum $\delta_0 > 0$ on the domain $X$. Then, in particular, for this choice of $\epsilon> 0$ and all $x, x’ \in X$, we have
$$
d_X(x, x') < \delta_0 \implies d_Y(f(x), f(x')) < \epsilon
$$
as well. Hence, $f$ is uniformly continuous.

❓ *Question*. Works because choosing the minimum…?

*Proof from [[MATH-GU4051|Topology]]*.

Let $\epsilon > 0$. Cover $X$ by 
$$
\mathcal C = \{ f^{-1}(B(y, \epsilon / 2)\}_{y \in Y}.
$$
Let $\delta$ be a Lebesgue number for $\mathcal C$. If $d(x_1, x_2) < \delta$ (DISTANCE), then 
$$
\diam\{ x_1, x_2\} < \delta \implies \{x_1, x_2\} \subseteq f^{-1}(B(y, \epsilon /2)) \text{ for some }y \in Y \implies d_Y(f(x_1), f(x_2)) < \epsilon.
$$

#wip Lebesgue number stuff


![[Continuous functions#^02c80b]]

#wip