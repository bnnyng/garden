---
aliases:
  - "#STAT-GU4203"
  - Probability Theory
title: Class | Probability Theory
---
# Overview

*Columbia University, Fall 2024 – Richard Davis*

>[!example] Course description
>A calculus-based introduction to probability theory. A quick review of multivariate calculus is provided. Topics covered include random variables, conditional probability, expectation, independence, Bayes’ rule, important distributions, joint distributions, moment generating functions, central limit theorem, laws of large numbers and Markov’s inequality.

---
# Study status

```dataview
TABLE WITHOUT ID
file.link as "Name",
lastmod as "Last Reviewed",
status as "Status"

FROM #STAT-GU4203
SORT lastmod ASC
```

---

# Notes

##### [[Conditional probability and Bayes' theorem]]

- We can incorporate “extra conditioning” into Bayes’ theorem using the definition of conditional probability again. Let $P (B \cap E) > 0$. Then
$$
\begin{align}
P(A | B \cap E) 
&= \frac{P(A \cap B \cap E)}{P(B \cap E)} = \frac{P(B | A \cap E)P(A \cap E)}{P(B | E) P(B)} \\
&= \frac{P(B | A \cap E) P(A | E) P(E)}{P(B | E) P(E)} = \frac{P(B| A \cap E)P(A | E)}{P(B|E)}
\end{align}
$$

