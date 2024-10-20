---
aliases:
  - Bernoulli
  - indicator random variable
  - Bernoulli distribution
  - binomial distribution
  - binomial distributions
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: 
publish: 
date: 2024-10-14 10:36
lastmod: 2024-10-14T10:38:40-04:00
---
# Bernoulli distributions


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

^e0f572

----
# Binomial distribution

- Binomial experiment
	- Fix $n$ number of trials
	- Two outcomes, successful, failure, $p$ is the probability of success
	- Carry out a Bernoulli experiment (1-flip) $n$ times
- Given results $y_1, .., y_n$
	- Each trial has same success rate $p$: $y_i \sim \text{Bern} (p)$.
	- All trials are independnet
- The RV $X$ is the number of successes – adding up (1 if you win) – what is the PMF of $X$?
