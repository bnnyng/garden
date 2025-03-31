---
aliases:
  - linearly independent
  - linear relation
  - redundant
  - trivial linear relation
  - linear independence
tags:
  - permanent-note
  - topic-logic-mathematics
publish: "true"
date: 2022-10-12
lastmod: 2025-03-08T18:28:16-05:00
---
# Overview 


---
# Basic definition

- terminology to deal with a highly redundant 

>[!example] Definition: Linear independence
>Let $F$ be a [[Algebraic fields|field]] and $V$ be an $F$[[Vector spaces and ring modules|-vector space]]. A sequence of vectors $w_1, \ldots, w_\ell \in V$ is **linearly independent** if whenever $$ t_1w_1 + \cdots + t_\ell w_\ell = 0 $$ for some $t_i \in F$, then $t_i = 0$ for all $i$. We say a sequence is **linearly dependent** if this is not the case.



Note that a sequence $w_1, \ldots, w_\ell \in V$ with *repeated* vectors $w_i = w_j$ is always linearly dependent since we can express $0$ as the **nontrivial** linear combination $w_i - w_j$. Further, the sequences is automatically linearly dependent if $w_i = 0$ for some $i$.

- Also not linearly dependent if we can write one vector as a linear combination of the others



---
# Code snippets

```
w_1, \ldots, w_\ell
```

```
t_1w_1 + \cdots + t_\ell w_\ell = 0
```

