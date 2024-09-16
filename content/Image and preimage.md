---
aliases:
  - image
  - preimage
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
  - MATH-GU4041
  - MATH-GU4061
publish: "true"
date: 2024-03-31 14:11
lastmod: 2024-09-15T11:47:28-04:00
status: 
---
>[!example] Definition: Image, preimage
>Given a [[Algebra of functions|function]] $f:X \to Y$, we can produce subsets of $X$ and $Y$:
>- If $S \subset X$, the **(forward) image** of $S$ under the function $f$ is the set of points in $Y$ which are mapped to by some point(s) in $S$.
>$$ 
>f(S) = \{y \in Y \mid y = f(s) \text{ for some } s \in S \}
>$$
>- If $T \subset Y$, the **preimage** or **reverse image** of $T$ under the function $f$ is the set of points in $X$ which map to some point in $T$.
>$$ 
>f^{-1}(T) = \{x \in X \mid f(x) \in T \} 
>$$


>[!abstract] Proposition: Relations between image and preimage sets
>Let $f : X \to Y$, $A_1, A_2 \subseteq X$, and $B_1, B_2 \subseteq Y$. Then:
>- **Subsets.**  If $A_1 \subseteq A_2$, then $f(A_1) \subseteq f(A_2)$; similarly, if $B_1 \subseteq B_2$ then $f^{-1}(B_1) \subseteq f^{-1}(B_2)$
>- **[[Algebra of sets|Unions]].**  $f(A_1 \cup A_2) = f(A_1) \cup f(A_2)$; similar equality holds for the preimage and $B_1 \cup B_2$
>- **[[Algebra of sets|Intersections]].**  $f(A_1 \cap A_2) \subseteq f(A_1) \cap f(A_2)$ is an inclusion, while $f^{-1}(B_1 \cap B_2) = f^{-1}(B_1) \cap f^{-1}(B_2)$ is an equality


---
# Review

- Prove the relations between image and preimage sets.