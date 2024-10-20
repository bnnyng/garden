---
aliases:
  - discrete random variable
  - probability mass function
  - support of a random variable
  - discrete uniform distribution
  - pmf
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: ⚫
publish: 
date: 2024-09-30 10:42
lastmod: 2024-10-14T10:38:28-04:00
---
>[!question]
>- Domain and range of PMF?

---

# Overview

>[!example] Definition: Discrete random variable
>Given an experiment with sample space $\mathcal S$, a random variable $X: \mathcal S \to \mathbb R$ is **discrete** if there is a countable (possibly infinite) list of values $a_1, a_2, …$ such that 
>$$
>P(\{ X = a_i \text{ for some }i \in I \}) = 1.
>$$ 
>The **support** of the discrete r.v. $X$ is the set of values for which $P(X = a_i) > 0$.

^bce0e8

>[!example] Definition: Probability mass function
>The **probability mass function** (pmf) of a discrete random variable $X$ is the function defined by 
>$$
>p_X (x) = P(X = x) = P(\{ s \in \mathcal S \ | \ X(s) = x\}).
>$$
>That is, formally, $X = x$ is the *event* consisting of all outcomes in the sample space $s \in S$ to which $X$ assigns the value $x$.

^de88c7

>[!abstract] Theorem (Blizstein & Hwang 3.2.7): Properties of valid PMFs
>1. **Nonnegative:** $p(x) \geq 0$ for all $x$.
>2. **Sums to 1:** Given support $a1, a_2, …$, we have $\sum_{i=1}^\infty p (a_i) = 1$.
>3. $P(a < X \leq b) = \sum_{a < x \leq b}p(x)$.

---
# Examples

#### Discrete uniform distribution

>[!example] Definition: Discrete uniform distribution
>For a finite set $C$, we say $X$ follows a **discrete uniform distribution** $X \sim \text{Dunif}(C)$ if for all $s \in C$, we have
>$$
>p(x) = P(s \in C \ | \ X(s) = x) = \frac{1}{|C|}.
>$$

#### Bernoulli distribution

![[Bernoulli and binomial distributions#^e0f572]]

#### Binomial distribution



---
# Review

- Calculate $P(A)$, where $A$ is the event that the sum of two rolls of a dice is odd.