---
aliases:
  - injective
  - surjective
  - bijective
  - bijection
  - permutation
tags:
  - permanent-note
publish: "true"
date: 2024-03-31 14:16
lastmod: 2024-03-31T14:20:36-07:00
---
Suppose $f : X \to Y$ is a function.

>[!example] Definition: Injective
>$f$ is **injective** means if two input values have the same output value, they were the same input value all along. The *contrapositive* is: Any two distinct elements in the **domain** map to distinct elements in the **codomain**.
>$$ 
>\forall_{x \in X} [f(x) = f(x)^\prime] \implies [x = x^\prime]]
>$$

>[!example] Definition: Surjective
>$f$ is **surjective** means that all possible output values are entered, so that the **image** of $f$ is the whole **codomain**.
>$$ 
>f(X) = Y \equiv \forall_{y\in Y}\exists_{x\in X}[f(x) = y] 
>$$

$f$ is **bijective** if it is both **injective** and **surjective.**