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

| Section        | Definitions                                                                    | Key results                 |
| -------------- | ------------------------------------------------------------------------------ | --------------------------- |
| Basic topology | - Countable, uncountable<br>- Metric, metric space<br>- Hausdorff property<br> | - [[(Theorem) Heine-Borel]] |

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


#### [[Compact sets]]

![[Compact sets#^b75af9]]

![[Compact sets#^69b1bd]]

![[Bounded sets and functions#^8bd60c]]

![[Compact sets#^2c2d30]]

![[Compact sets#^7b21f9]]

![[(Theorem) Heine-Borel#^f63527]]

>[!abstract] Theorem: Interval nesting
>Let $\{ I_j\}_{j \in J} \subseteq \mathbb R$ be a collection of [[Closed sets, closures, and dense subsets|closed]] intervals such that $I_{j + 1} \subseteq I_{j}$, and all $I_j$ are nonempty. Then their arbitrary intersection is nonempty, i.e., $\bigcap_{j=1}^\infty I_j \neq \varnothing$.

#wip Why?

>[!abstract] Theorem: Compactness of intervals in $\mathbb R$
>Any [[Closed sets, closures, and dense subsets|closed]] interval $[a, b] \subseteq \mathbb R$ is [[Compact sets|compact]], meaning there exists a finite subcover of $[a, b]$.

Theorem: Boxes in R^n are compact

>[!abstract] Theorem: Cantor intersection
>Let $A_i \subseteq \mathbb R^n$ be a family of [[Compact sets|compact sets]] such that the intersection of any finite collection of $A_i$ is nonempty. Then their arbitrary intersection is nonempty, i.e.,  $\bigcap_{i=1}^\infty A_i \neq \varnothing$.

#### [[Connected sets]]

![[Connected sets#^2c2cea]]

#### [[Sequences]]

![[Sequences#^bdedb7]]

![[Bounded sets and functions#^9253f7]]

![[Sequences#^067414]]

![[Cauchy sequences#^e1c6fb]]

![[Sequences#^ac6d87]]

#### [[Bounded subsets and diameters]]

![[Bounded sets and functions#^437db8]]

![[Closed sets, closures, and dense subsets#^161a01]]



---
# Notes

Cards to make:
- [ ] Statement of the [[(Theorem) Heine-Borel|Heine-Borel]]
- [ ] Statement of the Hausdorff property

- Cantor’s intersection theorem?