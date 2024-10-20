---
aliases:
  - "#MATH-GU4061"
  - Modern Analysis I
title: Class | Introduction to Modern Analysis I
---
# Overview

*Columbia University, Fall 2024 – Sven Hirsch*

>[!example] Course description
>Real numbers, metric spaces, elements of general topology, sequences and series, continuity, differentiation, integration, uniform convergence, Ascoli-Arzela theorem, Stone-Weierstrass theorem.

| Section              | Definitions                                                                                                                                                                                                                       | Key results                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Basic topology       | - Countable, uncountable<br>- Supremum, infimum<br>- Metric, metric space<br>- Compact set<br>- Hausdorff property<br>- Connected set                                                                                             | - [[(Theorem) Between any two real numbers is a rational number]] <br>- [[(Theorem) Heine-Borel]]<br> |
| Sequences and series | - Convergent and bounded sequences in metric spaces<br>- Cauchy sequence<br>- Limit point compactness, sequential compactness<br>- Sequence escaping to infinity<br>- Limit superior and inferior<br>- $N$-th partial sum, series | - [[(Theorem) Bolzano-Weierstrass]]                                                                   |

>[!question]
>- Compactness, limit point compactness, etc. are all defined the same for subsets of metric spaces?

---
# Study status

```dataview
TABLE WITHOUT ID
file.link as "Name",
lastmod as "Last Reviewed",
status as "Status"

FROM #MATH-GU4061
SORT lastmod ASC
```

---
# Topics

## The real and complex numbers

![[The real numbers#^e56751]]

![[Complex numbers, conjugates, and absolute value#^d9f858]]

## Basic topology

#### [[Metrics, metric spaces, and the metric topology|Metric spaces]]

![[Metrics, metric spaces, and the metric topology#^2a64da]]

![[Metrics, metric spaces, and the metric topology#^b897c8]]


#### [[Compactness]]

![[Compactness#^b75af9]]

![[Compactness#^69b1bd]]

![[Bounded sets and functions#^8bd60c]]

![[Compactness#^2c2d30]]

![[Compactness#^7b21f9]]

![[(Theorem) Heine-Borel#^f63527]]

>[!abstract] Theorem: Interval nesting
>Let $\{ I_j\}_{j \in J} \subseteq \mathbb R$ be a collection of [[Closed sets, closures, and dense subsets|closed]] intervals such that $I_{j + 1} \subseteq I_{j}$, and all $I_j$ are nonempty. Then their arbitrary intersection is nonempty, i.e., $\bigcap_{j=1}^\infty I_j \neq \varnothing$.

#wip Why?

>[!abstract] Theorem: Compactness of intervals in $\mathbb R$
>Any [[Closed sets, closures, and dense subsets|closed]] interval $[a, b] \subseteq \mathbb R$ is [[Compactness|compact]], meaning there exists a finite subcover of $[a, b]$.

Theorem: Boxes in R^n are compact

>[!abstract] Theorem: Cantor intersection
>Let $A_i \subseteq \mathbb R^n$ be a family of [[Compactness|compact sets]] such that the intersection of any finite collection of $A_i$ is nonempty. Then their arbitrary intersection is nonempty, i.e.,  $\bigcap_{i=1}^\infty A_i \neq \varnothing$.

#### [[Connectedness]]

![[Connectedness#^2c2cea]]

#### [[Bounded sets and functions]]

![[Bounded sets and functions#^437db8]]

![[Closed sets, closures, and dense subsets#^161a01]]

## Sequences and series

#### [[Sequences]]

![[Sequences#^bdedb7]]

![[Bounded sets and functions#^9253f7]]

![[Sequences#^067414]]

![[Bounded sets and functions#^53990e]]

![[Bounded sets and functions#^496c53]]

![[Sequences#^ac6d87]]

![[Sequences#^c93f86]]

![[Limits and accumulation points#^32e7de]]

![[Closed sets, closures, and dense subsets#^3a968a]]


#### [[Cauchy sequences and complete metric spaces]]

![[Cauchy sequences and complete metric spaces#^e1c6fb]]


![[Cauchy sequences and complete metric spaces#^e8fe08]]

#### [[Compactness|Limit point and sequential compactness]]

![[Compactness#^866ab2]]

![[Compactness#^6b379f]]

#### [[Series]]

![[Series#^d80ac1]]

![[Series#^b11689]]

![[Series#^df4dba]]

![[Series#^b60f35]]

![[Series#^1e6adc]]

![[Series#^ad405d]]

![[Series#^8b4150]]

![[Series#^35baae]]

#### [[Continuous functions]]

![[Continuous functions#^700d8d]]

![[Homeomorphisms and topological embeddings#^c54cde]]

![[(Theorem) Extreme value#^fea58b]]



![[Compactness#^d5a100]]

#wip Analagous to lemma from general metrizable spaces.

![[Continuous functions#^96dcf9]]

---
# Notes

Cards to make:
- [ ] Statement of the [[(Theorem) Heine-Borel|Heine-Borel]]
- [ ] Statement of the Hausdorff property
- [ ] HW 4.2: separable = countable dense subset?

- Cantor’s intersection theorem?

Questions:
- Does $e^2$ work for the $\epsilon-\delta$ proof?
