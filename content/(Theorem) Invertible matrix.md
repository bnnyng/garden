---
aliases:
  - invertible matrix theorem
  - invertible map theorem
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
  - theorem
publish: "true"
date: 2023-12-26
lastmod: 2024-03-31T14:48:31-07:00
---
The invertible matrix theorem applies to two vector spaces with the same [[Bases and dimension|dimension]]. The theorem is built from facts relating [[Compositions and invertible linear maps|inverses]] and the [[Algebra of functions]]. We begin with the following proposition:

>Given a linear map $A : V \to W$, if $A$ is:
>- Right invertible, then $A$ is surjective;
>- Left invertible, then $A$ is injective;
>- Invertible, then $A$ is bijective.

In fact, each of these statements is a biconditional:
>- If $A$ is surjective, then $A$ is right invertible.
>- If $A$ is injective, then $A$ is left invertible.
>- If $A$ is bijective, then $A$ is invertible.

#wip check that these are matched correctly

The invertible matrix theorem follows:
>[!abstract] Theorem: Invertible matrix
>If $A: V \to W$ is a linear map between two vector spaces of the same dimension, then 
>$$ 
>A \text{ is invertible} \iff A \text{ is injective, so } \text{ker}(A) = \{ \vec 0 \} \iff A \text{ is surjective.} 
>$$

