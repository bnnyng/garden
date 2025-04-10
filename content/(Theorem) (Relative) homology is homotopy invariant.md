---
aliases:
  - homotopy invariance
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-09T01:24:40-04:00
---
# Statement and proof

>[!theorem] Relative homology is homotopy invariant
>Let $f: (X, A) \to (Y,B)$ be a [[Relative singular chains and relative homology|map of pairs]] (i.e., $f(A) \subseteq B$) such that $f : X \to Y$ and $f|_A : A \to B$ are both [[Homotopy equivalence|homotopy equivalences]]. Then 
>$$
>f_{*} : H_{p}(X, A) \to H_{p}(Y, B)
>$$
>is an isomorphism for all $p$.

>[!remark]
>The non-relative version immediately follows: if $f: X \to Y$ is a homotopy equivalence, then $f_*: H_p(X) \to H_p(Y)$ is an isomorphism for all $p$. This is shown by taking the special case $A = B = \varnothing$, as $f_\varnothing : \varnothing \to \varnothing$ is trivially a homotopy equivalence.




---
# Examples

#### Homology of the sphere relative to the di

Consider the inclusion map $i : (D^n, S^{n-1}) \to (\mathbb R^n, \mathbb R^n \backslash \{ 0 \})$
