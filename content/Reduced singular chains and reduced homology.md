---
aliases:
  - reduced singular homology
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-09T18:17:47-04:00
---
# Overview 

---
# Basic definition and properties

>[!definition] Reduced singular homology
>For a topological space $X$, the **reduced** or **augmented singular chain complex** is defined as
>$$
>\widetilde C_p(X) = \begin{cases} C_p(X) & \text{for } p \geq 0 \\ \mathbb Z & \text{for } p = -1 \\ 0 & \text{for } p < -1 \end{cases}.
>$$
>For $p > 0$, the boundary map $\widetilde \partial_p : \widetilde C_p(X) \to \widetilde C_{p-1}(X)$ is defined as the [[Singular chains and singular homology|singular boundary]] $\widetilde \partial_p = \partial_p$, while for $p=0$ the boundary is defined by
>$$
>\widetilde \partial_0 : \widetilde C_0(X) = C_0(X) \to \widetilde C_{-1}(X) = \mathbb Z, \quad \quad \sigma \mapsto 1 \in \mathbb Z, 
>$$
>where $\sigma: \Delta^0 \to X$ is a $0$-simplex (i.e., a choice of point in $X$). **Reduced singular homology** is then defined as 
>$$
>\widetilde H_p(X) = H_p(\widetilde C_*(X), \partial).
>$$

We can also verify the following:

- **$(\widetilde C_*(X), \partial)$ is indeed a [[Homology of general chain complexes|chain complex]]:** This means that $\widetilde \partial_{p-1} \circ \widetilde \partial _p = 0$ for all $p$. This is clearly true for $p > 1$, since $\widetilde \partial_p = \partial_p$ and we know this property holds for the singular boundary $\partial_p$. For $\partial_0 \circ \partial_1 : C_1(X) \to \mathbb Z$, we have $$ (\partial_0 \circ \partial_1)(\sigma) = \partial_0(d_0 \sigma - d_1 \sigma) = 1 - 1 = 0 $$ for all singular $p$-simplices $\sigma : \Delta^1 \to X$, so $\partial_0 \circ \partial_1 = 0$ as well. Finally, the composition $\partial_1 \circ \partial_0 : C_0(X) \to 0$ is by definition the zero map.
- 