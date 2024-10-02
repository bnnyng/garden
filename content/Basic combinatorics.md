---
aliases:
  - multiplication rule
  - binomial coefficient
  - Bose-Einstein
  - binomial theorem
  - sampling with replacement
  - sampling without replacement
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-GU4203
status: 🔴
publish: 
date: 2024-09-14 17:01
lastmod: 2024-09-23T11:00:41-04:00
---
>[!question]
>- Difference between “ordered outcomes” in sampling without replacement, and total possible “n choose k”?

---
# The multiplication rule

>[!abstract] Theorem: Multiplication rule
>Let $A, B$ be two sub-experiments of a *compound* experiment. If $A$ has $a$ possible outcomes and $B$ has $b$ possible outcomes, then the compound experiment has $ab$ possible outcomes. 

Specifically, one can represent the outcomes as a $a \times b$ matrix $M$ where each entry is a pair $(a_i, b_j)$. Then $|M| = a \cdot b$.

Many probability experiments can be interpreted in one of two contexts: sampling with replacement, or sampling without replacement.

>[!abstract] Theorem: Sampling with, without replacement
>Suppose we have $n$ objects and want to make $k$ choices from them. 
>- If we **sample with replacement**, meaning that a chosen object can be chosen again, then there are $n^k$ possible outcomes. 
>- If we **sample without replacement**, the number of possible *ordered* outcomes is $n(n-1)\cdots(n-k+1)$ (the total number of possible outcomes is “$n$ choose $k$”).

## Examples

#### Birthday problem

> There are $k$ people in a room. Assume each person’s birthday is equally likely to be any of the 365 days of the year and that people’s birthdays are independent. What is the probability that at least one pair of people in the group have the same birthday?

*Sketch.*  The original problem is framed as one of sampling $k$ times from $365$ days *with* replacement. However, we cannot count $365^k$ directly because there are different ways to combine individuals such that birthdays are shared. Instead, count the *complement*: the number of ways to assign birthdays to $k$ people such that no two people share a birthday. Using the **naïve definition of probability**, we have
$$
P(\text{shared birthday}) = 1 - P(\text{no shared birthdays}) = 1 - \frac{(365)(364) \cdots (365-k+1)}{365^k}.
$$

---
# Adjusting for overcounting

Instead of counting each possibility once and only once *directly*, these methods $c$-count for each possibility (e.g., double-count) and adjust by dividing by $c$.

The **binomial coefficient** counts the number of ways to choose subsets of a certain size *without* replacement and without distinguishing between different orders in which they could be chosen.

>[!abstract] Theorem: Binomial coefficient formula
>For any nonnegative integers $k$ and $n$, the **binomial coefficient** $\begin{pmatrix} n \\ k\end {pmatrix}$ (“$n$ choose $k$”) is the number of subsets of size $k$ for a set of size $n$. For $k \leq n$, we have 
>$$
>\begin{pmatrix} n \\ k \end{pmatrix} = \frac{n(n-1) \cdots (n-k+1)}{k!} = \frac{n!}{(n-k)!k!}.
>$$
>For $k > n$, this is $0$. If we want to choose multiple subsets of $k_1, k_2,…$, we compute this by 
>$$
>\begin{pmatrix} n \\ k_1 \end{pmatrix}\begin{pmatrix} n-k_1\\ k_2 \end{pmatrix} \cdots = \frac{n!}{k_1!k_2!...}
>$$

#concept-question Why does this last formula work?
## Examples

#### Binomial theorem

>[!abstract] Theorem: Binomial theorem formula
>For any nonnegative integer $n$,
>$$
>(x + y )^n = \sum_{k=0}^n \begin{pmatrix} n\\ k \end{pmatrix}x^ky^{n-k}.
>$$

#### Bose-Einstein

> How many ways are there to choose $k$ times from a set of $n$ objects *with* replacement, if order doesn’t matter?


---

# Review

- How many subsets does a set of $n$ elements have? Use the multiplication rule.
- What is the total number of solutions $(x_1, … , x_n)$ for the problem $x_1 + \cdots + x_n = k$? (Hint: apply Bose-Einstein). ⭐