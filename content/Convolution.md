---
aliases:
  - convolution
  - convolution operation
tags:
  - permanent-note
  - topic-mathematics-and-logic
---
# Overview

A convolution is a mathematical operation which takes two functions as input and outputs a third function. The output function expresses how the shape of one input function is modified by the other. Formally, it is the integral of the product of two functions after one is reflected about the y-axis and shifted.

Convolution is commutative and translation-equivariant.

---

# Notes


> [!example] Example of a general convolution function
> $$ s(t) = (x * w) (t) = \int x(a)w(t-a)da $$
> - $x(t)$ = a real-valued function which provides a single output, the position at time $t$.
> - $w(a)$ = a weighting function, where $a$ is the age of the measurement.
> - $s(t)$= a weighted average of the object’s position.

- Here, the function $x$ is the **input** and the function $w$ is the kernel.
- Note that $w$ must be a valid [[Probability distributions for continuous random variables|probability density function]] in order to return a weighted average; **in general, convolution is defined for any functions where the integral in this equation is defined.**

> [!example] Discrete convolution function
> $$ s(t) = (x * w) (t) = \sum x(a)w(t-a)da $$

- Data on a computer is usually [[Probability distributions for discrete random variables|discrete]], meaning it is provided in regular intervals (e.g., in the previous example, the time $t$ may only take on integer values).
- Discrete

>[!example] Example convolution over a two-dimensional image
>$$ S(i,j) = (K * I)(i,j) = \sum_m \sum_n I(i-m, j-n)K(m,n) $$

- While convolution is *commutative*, this formula is usually more straightforward to implement in an ML library.

> [!example] Cross-correlation function
> $$ S(i,j) = (K * I)(i,j) = \sum_m \sum_n I(i+m, j+n)K(m,n) $$

