---
aliases:
  - second-countable
  - first-countable
  - countable basis
  - dense
  - separable
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔴🔨
publish: 
date: 2024-10-31 09:41
lastmod: 2024-12-03T15:11:16-05:00
---
TO DO: 
- Examples form 10/29 lecture
- Show every metrizable space is first countable (has a locally countable basis at every point)
- Hence every compact metric space is 

---
# Overview

Like the [[Hausdorff spaces|Hausdorff]] axiom, the **first** and **second countability** axioms are sometimes imposed in order to prove stronger results about a [[Topological spaces and open sets|topological space]].

---
# Dense subsets and separability


>[!example] Definition: Dense subset in a metric space
>For subsets $E, S \in X$, we say that $E$ is **dense** in $S$ if $E \subset S \subset \overline E$, where $\overline E$ is the [[Closed sets and closures|closure]] of $E$.
>
>More precisely, $E$ is dense in $S$ if $E \subset S$ is indeed a subset and for all $\epsilon >0$ and all $x \in S$, the [[Open sets|neighborhood]] $B(x, \epsilon) \cap E \neq \varnothing$. Then every point in $S$ is either a [[Limits and accumulation points|limit point]] of $E$ or in $E$ itself, or both.

^DEF-dense-metric-space

>[!example] Definition: Dense subset, separability in a general topological space
>A [[Topological spaces and open sets|topological space]] $X$ is **separable** if there exists a countable subset $A \subseteq X$ such that the [[Closed sets and closures|closure]] is $\overline A = X$. In this case, we say $A$ is **dense** in $X$.

^DEF-dense-separable-topology

---

# Second countability

>[!example] Definition: Second-countable
>A [[Topological spaces and open sets|topological space]] $x$ is **second-countable** if $X$ has a countable [[Topological bases and subbases|basis]].

^DEF-second-countable

>[!abstract] Lemma (Munkres 30.3): Relationship between second-countability and separability
>1. If $X$ is second-countable (i.e., has a countable [[Topological bases and subbases|basis]]), then $X$ is separable (i.e., has a countable dense subset $A \subseteq X$, where $\overline A = X$).
>2. If $X$ is separable and [[Metrics, metric spaces, and the metric topology|metrizable]], then $X$ is second-countable.

^a92f18

---
# First countability

>[!example] Definition: Countable basis at a point, first countable
>A [[Topological spaces and open sets|topological space]] $X$ has a **countable [[Topological bases and subbases|basis]]** at $x \in X$ if there exists a countable collection $\mathcal B_x$ of neighborhoods of $x$ such that any neighborhood $V\subset X$ of $x$ contains at least one $U \in \mathcal B_x$. 
>
>We say $X$ is **first-countable** if every $x \in X$ has a countable basis.

^DEF-countable-basis-first-countable

>[!abstract] Lemma (Munkres 30.1): Convergent sequences in first-countable spaces
>Let $X$ be first-countable.
>1. Given $A \subseteq X$ and a point in the [[Closed sets and closures|closure]] $x \in \overline A$, there exists a [[Sequences|sequence]] $(x_n)_{n \in \mathbb N}$ such that $x_n \to x$.
>2. If $f: X \to Y$ satisfies $f(x_n) \to f(x)$ whenever $(x_n)_{n \in \mathbb N}$ in $X$ satisfies $x_n \to x$, then $f$ is [[Continuous functions|continuous]].
>
>Recall that the converse for both (1) and (2) is true for *any* [[Topological spaces and open sets|topological space]].

^593144
#wip Nice because if there’s a countable basis, there’s a countable nested sequence of basis elements, so we can do sequence things 

Co-countable topology is not first countable = sequences can’t see what open sets look like, implying discrete?

---
# Continuous maps and countability

>[!abstract] Theorem ([[MATH-GU4051|Topology]] HW 8.3): Continuous maps and countability
>Let $f: X \to Y$ be [[Continuous functions|continuous]].
>- (i) If $X$ is separable, then $f(X)$ is separable.
>- (ii) If $X$ is second-countable and $f(X)$ is an open map, then $f(X)$ is second-countable.


---
# Examples

#### Second-countable spaces

#### First-countable spaces

- Metric spaces are first countable