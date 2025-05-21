---
aliases:
  - excision theorem
  - barycentric subdivision
  - -small
  - good pair
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 🔨
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-05-10T11:05:26-04:00
---
# Overview and statement

>[!theorem] Excision
>Let $X$ be any space with subspaces $Z \subseteq A \subseteq X$ such that the [[Closed sets and closures|closure]] of $Z$ (in $X$) is contained in the [[Open sets|interior]] of $A$. Then the map induced on [[Homology of general chain complexes|homology]] by the identity $$ i : (X \backslash Z, A \backslash Z) \to (X, A) $$ is an isomorphism.

---
# Preliminaries 

#### Deformation retracts of neighborhoods

>[!definition] Good pair
>Let $A \subseteq X$ be a closed subspace. We say that $A$ is a **deformation retract of a neighborhood** in $X$, or simply that $(X, A)$ is a **good pair**, if there exists a set $U \subseteq X$ containing $A \subseteq \text{int}(U)$ and a homotopy $H : U \times I \to U$ [[Homotopies|relative to]] $A$ from the identity to a [[Retractions and fixed points|retraction]] map $r : U \to A \subseteq U$.

>[!exm]
>The pair $(X, A) = D^2, S^1)$ with $S^1 \subseteq D^2$ as the boundary of the disk is a good pair: we can take $U$ to be a small annulus containing $S^1$.



#### ?

>[!theorem] ([[MATH-GU4053|Algebraic Topology]] notes 7.2.2): 
>Let $\mathcal U$ be a collection of subsets of $X$ such that $$ \bigcup_{U \in \mathcal U} \textup{int} (U) = X. $$ Then $C_p^{\mathcal U} \to C_p(X)$ induces an [[Group homomorphisms and isomorphisms|isomorphism]] on homology for all $p \in \mathbb Z$.


To prove an isomorphism $H_p^{\mathcal U }(X) 

- (i) There exists a “**subdivision operator**” $S_p : C_p(X) \to C_p(X)$;
- (ii) 


#### Subdivision



#### Small chains

>[!definition] Small chain
>Let $X$ be any space and $\mathcal U$ be a collection of subsets of $X$. We say that a [[Singular chains and singular homology|singular simplex]] $\sigma : \Delta^p \to X$ is **$\mathcal U$-small if** there exists $U \in \mathcal U$ such that $\textup{Im} (\sigma) \subseteq U$. The subgroup spanned by $\mathcal U$-small simplices is denoted
>$$
>C^{\mathcal U}_p(X) \subseteq C_p(X).
>$$
>Note that if $\sigma : \Delta^p \to X$ is $\mathcal U$-small, then so is $\sigma \circ \delta^i : \Delta^{p-1} \to X$ and hence $\partial \sigma \in C^{\mathcal U}_p$. Therefore we have a [[Homology of general chain complexes|chain complex]] $(C^{\mathcal U}_*(X), \delta)$ given by restricting the boundary on $C_*(X)$, and the inclusion
>$$
>C^{\mathcal U}_*(X) \to C_*(X)
>$$ 
>is a chain map.


#### Proof of isomorphism for small chains

*Proof from [[MATH-GU4053|Algebraic Topology]]* ([[2025-03-27]]).


Assuming exsitence of S, T

###### Proof of isomorphism

Assuming the existence of $S_p, T_p$, we want to show that the map

- **Surjectivity:**
- 



###### Proof of remaining assumptions


---


>[!abstract] Theorem: Excision

*Proof from [[MATH-GU4053|Algebraic Topology]]* ([[2025-03-27]]).

expalin wy the small chains ting implies it