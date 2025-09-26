---
aliases:
tags:
  - fleeting-note
  - CSOR-W4231
date: <% tp.file.creation_date() %>
lastmod: 2025-09-22T14:43:04-04:00
---
[[2025-09-22]]

# Week 4, Day 1: Title

---

**Last time:** [[Quicksort]], basic probability theory, [[Randomized algorithms]]
**Today:** Analysis of randomized quicksort

Example: Expectation

$X$ is the number of heads

$E[X] = \sum_{i = 0}^n i \cdot \text{Prob}(heads = i)$

$= \sum i \cdot \begin{pmatrix}n //i  \end{pmatrix} p^i(i - p)^{n-i} = np$

Can make precise by using indicator random variable, $A_i$ with $i$th toss being heads

- expectation of an indicator is just the probability of an event
- Upshot: life is easier if we can express things using indicator random variables

**Hiring problem**

$A_i$ is the event of hiring the $i$th candidate

We hire a person if they are better than the one we hire currently → always keep the best candidate we have seen so far → hire $i$ if better than everyone before

num hires = sum of indicators over all $A_i$

**Randomized Quicksort**

- To find the total work, suffices to count the number of comparisons done (i.e., size of the subarray) → amount of work is proportional to subarray
- Things get compared when one of them is the pivot, otherwise not compared → reduce problem to the probability that we have a pivot
- EXERCISE: No matter input, going to be lower bounded by n log n

**Selection problem**

- Given an array, just want to choose something like the maximum element (also minimum, median, ith element)
- One idea: divide and conquer, pick some pivot and then separate into smaller and larger