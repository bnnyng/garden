---
aliases:
  - entropy
  - Shannon entropy
  - entropy axioms
  - uncertainty
  - information
tags:
  - permanent-note
  - topic-physics-complexity
publish: 
date: 2024-07-31 15:35
lastmod: 2024-10-14T10:36:07-04:00
---
# Overview


>[!example] Definition: Shannon entropy
>$$
>H({p_1, \cdots, p_n}) = - \sum_{i=1}^np_i\log_2 (p_i) = \sum_{i=1}^n p_i \log_2 \left (\frac{1}{p_i} \right )
>$$

The motivation for **Shannon entropy** is an equation that takes a *list of probabilities* and returns a number representing *uncertainty*. This function is required to obey four axioms:

> [!abstract] Axioms of Shannon entropy
> 1. Continuity
> 2. Symmetry
> 3. Condition of Maximum Information
> 4. [[Coarse-graining]]

---
# References

- [DeDeo (2018), “Information Theory for Intelligent People”](https://wiki.santafe.edu/images/a/a8/IT-for-Intelligent-People-DeDeo.pdf)