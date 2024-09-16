---
aliases:
  - closed set
  - closure
  - closed
  - dense
  - interior (topology)
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
  - MATH-GU4051
publish: "true"
date: 2024-04-10 17:23
lastmod: 2024-09-14T14:27:36-04:00
status: 🔴
---
A **closed set** is a set that contains all of its [[Limits and accumulation points|accumulation points]]. Equivalently, a closed set is the complement of an [[Open sets|open set]].

The **closure** of any set $E$ is the *smallest closed set* that contains $E$—it contains $E$ as well as all its limit points. By smallest, we mean precisely the intersection of *all* closed sets that contain $E$. It follows that the closure of a closed set is simply the set itself.

---
# In metric spaces

>[!example] Definition: Closure
>The **closure** of a set $E \subset X$, denoted $\bar E$, is the set containing $E$ and all of its limit/accumulation points.

^27b93a

>[!abstract] Theorem: Rudin 2.27
>1. $\bar E$ is a closed set.
>2. $E$ is closed if and only if $E = \bar E$.
>3. If $E \subset F$ is a subset and $F$ is closed, then $\bar E \subset F$.

>[!example] Definition: Dense
>For subsets $E, S \in X$, we say that $E$ is **dense** in $S$ if $E \subset S \subset \overline E$. More precisely, $E$ is dense in $S$ if $E \subset S$ is indeed a subset and for all $\epsilon >0$ and all $x \in S$, the [[Open sets|neighborhood]] $B(x, \epsilon) \cap E \neq \emptyset$.

^575cce

---
# In topological spaces

For the following definitions and theorems, recall the terminology:
- Given $x \in X$ and an [[Topological spaces and open sets|open set]] $U \subseteq X$, we say $U$ is a **neighborhood** of $x$ if $x \in U$.
- Given $A, B \subseteq X$, we say $A$ **intersects** $B$ if $A \cap B \neq \varnothing$.

## Closed sets

>[!example] Definition: Closed set in topological space
>Given a [[Topological spaces and open sets|topological space]] $X$, we say a subset $A \subseteq X$ is **closed** if its [[Algebra of sets|complement]] $X \backslash A$ is open.

^00a835

In principle, one can “do topology” using closed sets instead of open sets; most mathematicians just prefer the latter.

>[!abstract] Theorem (Munkres 17.1): Doing topology with closed sets
>Let $X$ be a [[Topological spaces and open sets|topological space]]. Then:
>1. $\varnothing$ and $X$ are closed;
>2. *Arbitrary* intersections of closed sets are closed;
>3. *Finite* unions of closed sets are closed.

^ebfb1b

## Closure and interior

>[!example] Definition: Closure and interior of a set
>Given a subset $A$ of a [[Topological spaces and open sets|topological space]] $X$:
>- The **interior** of $A$, denoted $\text{Int}(A)$, is the *union* of all open sets contained in $A$; 
>- The **closure** of $A$, denoted $\bar A$, is the *intersection* of all closed sets containing $A$.
>
>By definition, $\text{Int}(A) \subset A \subset \bar A$. Further, $\text{Int}(A)$ is the *biggest* open set contained in $A$, and $\bar A$ is the *smallest* closed set containing $A$.

^c6740f

>[!abstract] Theorem (Munkres 17.4): Closure of a subset in a subspace
>Let $Y \subseteq X$ be a [[Subspace (induced) topology|subspace]], and let $A \subset Y$ be any subset. Then the closure of $A$ in $Y$ is equal to $\bar A \cap Y$, where $\bar A$ is the closure of $A$ in $X$.


![[(Theorem) Closure of a set from a topological basis#^111747]]

![[(Theorem) The closure of a set is the union of the set with its limit points#^f956e9]]

![[(Theorem) The closure of a set is the union of the set with its limit points#^39fa20]]

---
# Review

## Definitions

[[MATH-GU4051|Topology]]

- Closed set in topological space
- Closure and interior of a set

## Exercises

[[MATH-GU4051|Topology]]
- Prove that given a subspace $Y \subseteq X$ and a subset $A \subseteq Y$, the closure of $A$ in $Y$ is equal to $Y$ intersected with the closure of $A$ in $X$. ⭐
- Prove [[(Theorem) Closure of a set from a topological basis]]. (Hint: for (i), prove the contrapositive.) ⭐
- Prove [[(Theorem) The closure of a set is the union of the set with its limit points]]. (Hint: use [[(Theorem) Closure of a set from a topological basis]] for one of the containments). ⭐

[[MATH-UN1208|Honors Mathematics B]]

- Is $\mathbb Q$ dense in $\mathbb R$? Why or why not?

---
# Notes

>[!example] Definition: Sequence definition of closed sets
> A set $C \subset \mathbb R^n$ is **closed** if, whenever a sequence $\vec x_m \in C$ **converges** to some **limit** $\vec x_m \to \vec x \in \mathbb R^n$, its **limit** $\vec x$ is also in $C$.

- The [[Sequences|sequence definition]] was used in [[MATH-UN1208|Honors Mathematics B]], and a later exercise required proving that this definition holds if and only if the complement of a closed set is open. In [[MATH-42X]], the latter definition was used to prove the former. 