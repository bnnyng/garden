---
aliases:
  - Shannon information
  - Shannon entropy
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: 2024-07-31 15:35
lastmod: 2025-06-26T11:49:15-04:00
---
# Overview

More precisely, given a set $X$, the goal of an uncertainty measure is to capture the *uncertainty of a process* that returns one of the set’s elements.

>[!definition] Shannon entropy
>$$
>H({p_1, \cdots, p_n}) = - \sum_{i=1}^np_i\log_2 (p_i) = \sum_{i=1}^n p_i \log_2 \left (\frac{1}{p_i} \right )
>$$

The motivation for **Shannon entropy** is an equation that takes a *list of probabilities* and returns a number representing *uncertainty*. This function is required to obey four axioms:

> [!axiom] Axioms of Shannon entropy
> 1. Continuity
> 2. Symmetry
> 3. Condition of Maximum Information
> 4. [[Coarse-graining and equivalence classes]]



---
# Notes

- The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point.

---
# References

- [DeDeo (2018), “Information Theory for Intelligent People”](https://wiki.santafe.edu/images/a/a8/IT-for-Intelligent-People-DeDeo.pdf)