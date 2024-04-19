---
aliases:
  - closed set
  - closure
  - closed
  - dense
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
publish: 
date: 2024-04-10 17:23
lastmod: 2024-04-10T20:18:57-07:00
status: 🟧
---
A **closed set** is a set that contain all of its [[Limits and accumulation points|accumulation points]]. Equivalently, a closed set is the complement of an [[Open sets|open set]].

The **closure** of any set $E$ is the *smallest closed set* that contains $E$—it contains $E$ as well as all its limit points. By smallest, we mean precisely the intersection of *all* closed sets that contain $E$. It follows that the closure of a closed set is simply the set itself.

---
# Closure of a set

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
# Review

See also: [[Open sets#Review|Review questions for open sets]].

- Is $\mathbb Q$ dense in $\mathbb R$? Why or why not?

---
# Notes

>[!example] Definition: Sequence definition of closed sets
> A set $C \subset \mathbb R^n$ is **closed** if, whenever a sequence $\vec x_m \in C$ **converges** to some **limit** $\vec x_m \to \vec x \in \mathbb R^n$, its **limit** $\vec x$ is also in $C$.

- The [[Sequences|sequence definition]] was used in [[MATH-UN1208]], and a later exercise required proving that this definition holds if and only if the complement of a closed set is open. In [[MATH-42X]], the latter definition was used to prove the former. 