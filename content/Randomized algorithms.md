---
aliases:
  - randomized algorithm
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-22T13:14:55-04:00
lastmod: 2025-09-25T09:08:45-04:00
---
# Overview

---
# Preliminaries: Basic probability theory

- **Sample space:** set of all possibilities or **sample points** $\mathcal S$, assumed finite or countable; an **event** is any subset of the sample space.
	- *Example.* $\quad$ Consider the situation of flipping 100 coins. The sample space has $2^{100}$ sample points; equivalently, it is the Cartesian product $\{ H, T \} ^{100}$.
	- *Example.* $\quad$ Inputs of size $n = 100$ numbers, where $n \in [0, 10^{20}]$ (e.g., inputs to [[Sorting problems|sorting algorithms]]).
	- *Example.* $\quad$ The set of possible random choices of a randomized algorithm when run on a specific input.
- **Random variable:** a mapping $X : \mathcal S \to \mathbb R$; the [[Expected value, variance, and standard deviation|expected value]] of a [[Discrete random variables and probability mass functions|discrete random variable]] $X$ is given by $$ E[X] = \sum_{i \in \mathbb R} i \cdot \text{Pr}\{ X = i\}, $$ and satisfies *linearity* $E[X + Y] = E[X] + E[Y]$ for any two random variables $X, Y$.
- **Indicator random variable:** for an event $A$, the [[Bernoulli and binomial distributions|indicator random variable]] defined by $$ I(A) = \begin{cases} 1 & \text{if $A$ occurs} \\ 0 & \text{if $A$ does not occur}, \\ \end{cases}$$ which has the crucial property that the expectation of any indicator r.v. is just the probability of its associated event, i.e., $$ E[I(A)] = \text{Pr}\{ A \}. $$
>[!exm] The hiring problem
>Consider the problem of hiring a new employee, where every day you encounter a new candidate and hire this candidate if they are better than your current employee. Let $A_i$ be the event of hiring the $i$th candidate. Then the total number of hires corresponds to the random variable $X = \sum_{i=1}^m I(A_i)$, and hence the expectation is 
>$$
>\begin{align}
>E[X] 
>&= \sum_{i=1}^n E[I(A_i)] 
>= \sum_{i=1}^n \text{Pr}\{ \text{hire candidate $i$}\} \\
>&= \sum_{i=1}^n \text{Pr}\{ \text{candidate $i$ is the best among } \{1, \ldots, i \}\} \\
>&= \sum_{i=1}^n \frac{1}{i} \approx \ln n,
>\end{align}
>$$
>where the final approximation comes from the [[Series|harmonic series]].

----
![[Pasted image 20250925085008.png]]

---
# Code snippets

```
\text{Pr}\{ \}
```