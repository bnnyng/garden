---
aliases: 
tags:
  - permanent-note
publish: 
date: 2024-10-09 17:38
lastmod: 2024-10-09T17:38:52-04:00
---
# Overview

A **convolution** is a mathematical operation on two functions that produces a third function which expresses how the shape of one is modified by the other. It is defined as the integral of the product of two functions after one is reflected about the y-axis and shifted. 

The commutativity of the convolution operation arises from **flipping** the kernel relative to the input. A related function is **cross-correlation**, which is the same as convolution but without flipping the kernel.

The convolution is **translation-equivariant**, meaning it commutes with translations.

---

# Key terms

- **Input** = the first argument to the convolution operation which is usually a tensor, or multidimensional array, of data.
- **Kernel** = also known as a **filter**; the second argument to the convolution, which is usually a tensor of *parameters* that are adapted by the learning algorithm.
- **Feature map** = also known as an **activation map**; the output of a convolution operation.

----
## Definition


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

