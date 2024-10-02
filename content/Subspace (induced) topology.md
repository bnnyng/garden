---
aliases:
  - subspace topology
  - induced topology
  - subspace
  - Topology HW1, P1
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠
publish: "true"
date: 2024-09-11 10:48
lastmod: 2024-09-19T09:50:10-04:00
---

>[!example] Definition: Subspace (induced) topology
>Given a topological space $(X, \mathcal T)$ and a subset $A \subseteq X$, the **subspace** or **induced** topology on $A$ is defined by the collection
>$$
>\mathcal T_A =  \{ A \cap U \ | \ U \in \mathcal T\}.
>$$
>In other words, open sets in $A$ (i.e., a subset of $A$ that is open in the subset topology) are obtained by intersecting $A$ with open sets of $X$ (i.e., an open set in $(X, \mathcal T$)).

^fe07da



See also: [[The product topology#Product topologies and subspaces|Product topologies and subspaces]]

---
# Basis for a subspace topology

>[!abstract] Lemma: Basis for a subspace topology
>If $\mathcal B$ is a basis for the topology $\mathcal T$ of $X$ and $A \subseteq X$ is any subset, then 
>$$
>\mathcal B' = \{ A \cap U \ | \ U \in \mathcal B \} 
>$$
>is a [[Topological bases and subbases|basis]] for the **subspace topology** on $A$.

^c86300

---
# Closed sets in subspace topologies

>[!abstract] Theorem (Munkres 17.2): Closed sets in a subspace topology
>Let $Y \subset X$ be a subspace. Then a set $A \subset Y$ is closed in $Y$ if and only if it is the intersection of $Y$ with a closed set in $X$.

^1f87b1

---
# Review

- Give an example where a subset is open in $A \subset X$ but not in $X$.
- Prove the lemma about a basis for a subspace topology. ⭐
- ([[MATH-GU4051|Topology]] HW1, P1) Show that if $X$ is a topological space and $A \subset X$ has the property that for all $x \in A$, there exists a open set $U$ containing $x$ such that $U \subset A$, then $A$ is open in $X$. 
- ([[MATH-GU4051|Topology]] HW1, P2) Show that if $Y$ is a subspace of $X$ and $A$ is a subset of $Y$, then the subset topology $A$ inherits as a subspace of $Y$ is the same as the subspace topology $A$ inherits as a subspace of $X$.