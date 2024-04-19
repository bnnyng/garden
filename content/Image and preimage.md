---
aliases:
  - image
  - preimage
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
  - MATH-GU4041
publish: "true"
date: 2024-03-31 14:11
lastmod: 2024-03-31T14:16:56-07:00
---
Given a function $f:X \to Y$, we can produce subsets of $X$ and $Y$:

>[!example] Definition: Image
>If $S \subset X$, the **(forward) image** of $S$ under the function $f$ is the set of points in $Y$ which are mapped to by some point(s) in $S$.
>$$ 
>f(S) = \{y \in Y \mid y = f(s) \text{ for some } s \in S \}
>$$

>[!example] Definition: Preimage
>If $T \subset Y$, the **preimage** or **reverse image** of $T$ under the function $f$ is the set of points in $X$ which map to some point in $T$.
>$$ 
>f^{-1}(T) = \{x \in X \mid f(x) \in T \} 
>$$