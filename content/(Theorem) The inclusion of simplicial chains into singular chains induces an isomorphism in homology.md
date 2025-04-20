---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-04-10T14:19:07-04:00
date: 2025-04-10T12:32:45-04:00
---
# Overview 

- Singular homology is better formal properties, defined for any space including topological ones
- Simplicial is calculable, usually via linear algebra

---

# Statement of the theorem 

>[!theorem] Simplicial and singular homology groups are isomorphic
>Let $X$ be a $\Delta$[[Delta-complexes|-complex]]. The inclusion of [[Simplicial chains and simplicial homology|simplicial chains]] into [[Singular chains and singular homology|singular chains]] $\Delta_*(X) \to C_*(X)$ is a [[Homology of general chain complexes|chain map]], and induces an isomorphism in homology
>$$
>H^\Delta_p(X) \to H_p(X)
>$$
>for all $p$.

---

# Preliminaries: Relative simplicial homology

>[!definition] Subcomplex
>Let $(X, \Sigma^X)$ be a $\Delta$[[Delta-complexes|-complex]]. A subspace $A \subseteq X$ is a **subcomplex** if it is the union of some of the simplices of $X$, meaning
>$$
>A = \bigcup_{p \in \mathbb N} \bigcup_{\sigma \in \Sigma_p'} \sigma(\Delta^p)
>$$
>for some subsets $\Sigma_p’ \subseteq \Sigma_p^X$. Thus, we can define a **$\Delta$-complex structure** on $A$ by setting
>$$
>\Sigma_p^A = \{ \sigma \in \Sigma_p^X \ | \ \sigma(\Delta^p) \subseteq A \}. 
>$$

>[!definition] Relative simplicial homology
>Let $X$ be a $\Delta$[[Delta-complexes|-complex]] and $A$ be a subcomplex. Then $\Delta_p(A) \subseteq \Delta_p(X)$, and we define the relative simplicial chain by 
>$$
>\Delta_p(X, A) = \Delta_p(X) / \Delta_p(A).
>$$
>This inherits a boundary homomorphism $\partial : \Delta_p(X, A) \to  \Delta_{p-1}(X, A)$ satisfying $\delta \circ \delta =0$, and we define **relative simplicial homology** by
>$$
>H_p^\Delta (X, A) = H_p(\Delta_* (X, A), \partial).
>$$

![[Pasted image 20250410141844.png|300]]

