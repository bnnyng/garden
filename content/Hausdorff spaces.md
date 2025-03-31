---
aliases:
  - Hausdorff
  - Hausdorff space
  - the $T_1$ axiom
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔴
publish: "true"
date: 2024-09-14 14:29
lastmod: 2024-11-03T10:14:23-05:00
---

“Non-Hausdorff spaces don’t exist in nature”

#wip Link with [[Countability axioms|separable]]

---
# Overview

The key difference between [[Sequences|sequences]] in metric spaces and sequences in arbitrary [[Topological spaces and open sets|topological spaces]] is that a sequence in arbitrary space *can converge to more than one point.*

![[Sequences#^24c72a]]

**Hausdorff spaces** impose an additional constraint on an arbitrary space so that sequences converge to one point only (i.e., one-point sets are [[Closed sets and closures#In topological spaces|closed]]).

>[!example] Definition: Hausdorff space
>A topological space $X$ is called a **Hausdorff space** if for each pair of distinct points $x_1, x_2 \in X$, there exist neighborhoods $U_1, U_2$ of $x_1, x_2$, respectively, such that $U_1 \cap U_2 = \varnothing$.

^493f21

![[(Theorem) Sequences in Hausdorff spaces converge to at most one point#^78121d]]

---
# The $T_1$ axiom

>[!example] Definition: The $T_1$ axiom
>The **$T_1$ axiom** is the condition that all finite subsets of a space are [[Closed sets and closures|closed]].

^bbe4e3

Note that this is *weaker* than the Hausdorff axiom!

>[!abstract] Proposition (Munkres 17.9)
>Let $X$ be a [[Topological spaces and open sets|topological space]] that satisfies the $T_1$ axiom (i.e., all of its finite subsets are [[Closed sets and closures|closed]]) and $A \subset X$ be any subset. Then a point $x \in A$ is a [[Limits and accumulation points|limit point]] of $A$ *if and only if* every neighborhood of $x$ contains infinitely many points of $A$.

^199f39

---
# Review


- Show that the topological definition of a convergent sequence agrees with the usual $\epsilon-\delta$ definition of [[Sequences|convergence]] in $\mathbb R$. ⭐
- Prove the theorem that if a set $X$ is Hausdorff, then (a) every finite subset of $X$ is closed and (b) every sequence in $X$ converges to at most one point of $X$. ⭐
- Give an example of a topological space that is not Hausdorff, but satisfies the $T_1$ axiom (i.e., all finite subsets are closed).
- Prove that if $X$ satisfies the $T_1$ axiom, then a point $x \in A \subset X$ is a [[Limits and accumulation points|limit point]] of $A$ if and only if every neighborhood of $x$ contains infinitely many points of $A$. (Hint: the reverse implication is immediate. For the forward implication, prove the contrapositive, and note that one can take the complement of $\{x\}$ in either $A$, $U$, or $A \cap U$ based on the definition of a limit point.)