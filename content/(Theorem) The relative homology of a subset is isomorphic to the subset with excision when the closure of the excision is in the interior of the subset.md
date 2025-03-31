---
aliases:
  - excision theorem
  - barycentric subdivision
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-27T12:48:41-04:00
---
>[!example] Definition: 

>[!abstract] Theorem: Excision
>Let $X$ be any space with subspaces $Z \subseteq A \subseteq X$ such that the [[Closed sets and closures|closure]] of $Z$ (in $X$) is contained in the [[Open sets|interior]] of $A$. Then the map induced on [[Homology of general chain complexes|homology]] by the identity $$ i : (X \backslash Z, A \backslash Z) \to (X, A) $$ is an isomorphism.

---
# Preliminaries 


>[!abstract] Theorem ([[MATH-GU4053|Algebraic Topology]] notes 7.2.2): 
>Let $\mathcal U$ be a collection of subsets of $X$ such that $$ \bigcup_{U \in \mathcal U} \textup{int} (U) = X. $$ Then $C_p^{\mathcal U} \to C_p(X)$ induces an [[Group homomorphisms and isomorphisms|isomorphism]] on homology for all $p \in \mathbb Z$.


To prove an isomorphism $H_p^{\mathcal U }(X) 

- (i) There exists a “**subdivision operator**” $S_p : C_p(X) \to C_p(X)$;
- (ii) 


## Subdivision



## Small chains

>[!example] Definition: Small chain
>Let $X$ be any space and $\mathcal U$ be a collection of subsets of $X$. We say that a [[Singular chains and singular homology|singular simplex]] $\sigma : \Delta^p \to X$ is $\mathcal U$-small if there exists $U \in \mathcal U$ such that $\textup{Im} (\sigma) \subseteq U$.

## Proof of isomorphism for small chains

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