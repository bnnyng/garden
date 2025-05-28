---
aliases:
  - variance
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: 
publish: 
date: 2024-10-14 10:49
lastmod: 2025-05-27T15:33:04-04:00
---
- Variance is a metric for measuring edistance between X and mean
- Why sqrt? Gets back to original units

#wip 

>[!definition] Variance and standard deviation
>For a random variable $X$, the **variance** of $X$ is 
>$$
>\text{Var}(X) = E(X-EX)^2 = E(X^2) - E(X)^2;
>$$
>that is, the [[Expected value|expected value]] of the random variable $(X-EX)^2$. The **standard deviation** is 
>$$
>\text{SD}(X) = \sqrt{Var(X)}.
>$$

>[!abstract] Properties of variance
>Given random variables $X, Y$ and some $c \in \mathbb R$, the following properties hold:
>-  $\text{Var}(X + c) = \text{Var}(X)$ since $E(X + c) = E(X) + c$
>- $\text{Var}(cX) = c^2 \text{Var}(X)$ and $\text{SD}(X) = |c|\text{SD}(X)$
>- If $X, Y$ are independent, $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$



