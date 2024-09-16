---
aliases:
  - subspace topology
  - induced topology
  - subspace
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠
publish: "true"
date: 2024-09-11 10:48
lastmod: 2024-09-14T11:51:02-04:00
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
>is a [[Basis for a topology|basis]] for the **subspace topology** on $A$.

^c86300


---
# Review

- Give an example where a subset is open in $A \subset X$ but not in $X$.
- Prove the lemma about a basis for a subspace topology. ⭐