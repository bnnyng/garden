---
aliases:
  - entropy
  - Shannon entropy
  - entropy axioms
  - uncertainty
tags:
  - permanent-note
  - topic-physics-complexity
publish: 
date: 2024-07-31 15:35
lastmod: 2024-07-31T16:08:31-06:00
---
>[!example] Definition: Shannon entropy
>$$
>H({p_1, \cdots, p_n}) = - \sum_{i=1}^np_i\log (p_i)
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