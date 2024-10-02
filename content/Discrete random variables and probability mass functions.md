---
aliases:
  - discrete random variable
  - probability mass function
  - support of a random variable
  - discrete uniform distribution
  - Bernoulli
  - binomial
  - indicator random variable
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: ⚫
publish: 
date: 2024-09-30 10:42
lastmod: 2024-09-30T11:20:44-04:00
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

>[!example] Definition: Probability mass function
>The **probability mass function** (pmf) of a discrete random variable $X$ is the function defined by 
>$$
>p_X (x) = P(X = x) = P(\{ s \in \mathcal S \ | \ X(s) = x\}).
>$$
>That is, formally, $X = x$ is the *event* consisting of all outcomes in the sample space $s \in S$ to which $X$ assigns the value $x$.

>[!abstract] Theorem (Blizstein & Hwang 3.2.7): Properties of valid PMFs
>1. **Nonnegative:** $p(x) \geq 0$ for all $x$.
>2. **Sums to 1:** Given support $a1, a_2, …$, we have $\sum_{i=1}^\infty p (a_i) = 1$.
>3. $P(a < X \leq b) = \sum_{a < x \leq b}p(x)$.

---
# Examples

#### Discrete uniform distribution

For a finite set $C$, we say $X$ follows a **discrete uniform distribution** $X \sim \text{Dunif}(C)$ if for all $s \in C$, we have
$$
p(x) = P(s \in C \ | \ X(s) = x) = \frac{1}{|C|}.
$$

#### Bernoulli distribution

>[!example] Definition: Bernoulli distribution, indicator random variable
>We say $X$ has a **Bernoulli distribution with parameter $p$**, denoted $X \sim \text{Bern}(p)$, if $X$ has support $\{ 0, 1 \}$ and there are **success** and **failure** probabilities given, respectively, by
>$$
>p(1) = P(X =1) = p \quad \quad \quad p(0) = P(X = 0) = 1-p.
>$$
>*Any* event has a Bernoulli random variable naturally associated with it: let $A$ be any event, and define the **indicator random variable** by
>$$
>I_A(x) = \left \{ 
>\begin{align} 1 \quad \text{if } s \in A \\ 0 \quad \text{if } s \notin A. \end{align} 
>\right. $$
>Then $I_A \sim \text{Bern} (p)$, where $p = P(A) = P(I_A(s) = 1)$ and $1-p = P(A^C)$.

#### Binomial distribution

- Binomial experiment
	- Fix $n$ number of trials
	- Two outcomes, successful, failure, $p$ is the probability of success
	- Carry out a Bernoulli experiment (1-flip) $n$ times
- Given results $y_1, .., y_n$
	- Each trial has same success rate $p$: $y_i \sim \text{Bern} (p)$.
	- All trials are independnet
- The RV $X$ is the number of successes – adding up (1 if you win) – what is the PMF of $X$?

---
# Review

- Calculate $P(A)$, where $A$ is the event that the sum of two rolls of a dice is odd.