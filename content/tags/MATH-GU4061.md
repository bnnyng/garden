---
aliases:
  - "#MATH-GU4061"
  - Modern Analysis I
title: Class | Introduction to Modern Analysis I
publish:
---
# Overview

*Columbia University, Fall 2024 – S. Hirsch*

>[!example] Course description
>Real numbers, metric spaces, elements of general topology, sequences and series, continuity, differentiation, integration, uniform convergence, Ascoli-Arzela theorem, Stone-Weierstrass theorem.

| Section                  | Definitions                                                                                                                                                                                                                       | Key results                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Basic topology           | - Countable, uncountable<br>- Supremum, infimum<br>- Metric, metric space<br>- Compact set<br>- Hausdorff property<br>- Connected set                                                                                             | - [[(Theorem) Between any two real numbers is a rational number]] <br>- [[(Theorem) Heine-Borel]]<br>                                                                                                                                                                                          |
| Sequences and series     | - Convergent and bounded sequences in metric spaces<br>- Cauchy sequence<br>- Limit point compactness, sequential compactness<br>- Sequence escaping to infinity<br>- Limit superior and inferior<br>- $N$-th partial sum, series | - [[(Theorem) Bolzano-Weierstrass]]<br>- [[(Theorem) Compactness, limit point compactness, and sequential compactness are equivalent on metric spaces]]                                                                                                                                        |
| Continuous functions     | - Connected, path-connected                                                                                                                                                                                                       | - [[(Theorem) Extreme value]]<br>- [[(Theorem) Intermediate value]]<br>- [[(Theorem) Continuous functions on compact sets are uniformly continuous]]                                                                                                                                           |
| Differentiable functions | - Differentiable function<br>- Local maximum, local minimum<br>- $n$-times differentiable<br>- $C^k$, smooth functions and function spaces<br>- Taylor polynomial, Taylor approximation                                           | - [[(Theorem) Rolle's and mean value]]<br>- [[(Theorem) L'Hopital's rule]]<br>- [[(Theorem) Taylor approximation]]                                                                                                                                                                             |
| Integration              | - Darboux integrable                                                                                                                                                                                                              | - [[(Theorem) Continuous functions are Darboux integrable]]<br>- [[(Theorem) Integration by parts]]<br>- [[(Theorem) Fundamental theorem of calculus]]                                                                                                                                         |
| Sequences of functions   | - Convergent and uniformly convergent sequences of functions<br>- Equicontinuous, uniformly equicontinuous                                                                                                                        | - [[(Theorem) The limit of a uniformly convergent sequence of continuous functions is continuous]]<br>- [[(Theorem) Every pointwise bounded sequence of functions has a pointwise convergent subsequence]]<br>- [[(Theorem) Arzela-Ascoli]]<br>- [[(Theorem) Stone-Weierstrass approximation]] |


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

![[Complex numbers#^d9f858]]

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
>Let $\{ I_j\}_{j \in J} \subseteq \mathbb R$ be a collection of [[Closed sets and closures|closed]] intervals such that $I_{j + 1} \subseteq I_{j}$, and all $I_j$ are nonempty. Then their arbitrary intersection is nonempty, i.e., $\bigcap_{j=1}^\infty I_j \neq \varnothing$.

#wip Why?

>[!abstract] Theorem: Compactness of intervals in $\mathbb R$
>Any [[Closed sets and closures|closed]] interval $[a, b] \subseteq \mathbb R$ is [[Compactness|compact]], meaning there exists a finite subcover of $[a, b]$.

Theorem: Boxes in R^n are compact

>[!abstract] Theorem: Cantor intersection
>Let $A_i \subseteq \mathbb R^n$ be a family of [[Compactness|compact sets]] such that the intersection of any finite collection of $A_i$ is nonempty. Then their arbitrary intersection is nonempty, i.e.,  $\bigcap_{i=1}^\infty A_i \neq \varnothing$.

#### [[(Path-)connectedness]]

![[(Path-)connectedness#^2c2cea]]

#### [[Bounded sets and functions]]

![[Bounded sets and functions#^437db8]]

![[Closed sets and closures#^161a01]]

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

![[Closed sets and closures#^3a968a]]


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

## [[Continuous functions]]

![[Continuous functions#^700d8d]]

![[Homeomorphisms and topological embeddings#^c54cde]]

![[(Theorem) Extreme value#^fea58b]]

![[(Theorem) Continuous functions on compact sets are uniformly continuous#^96dcf9]]

#### [[(Path-)connectedness]]

## Differentiable functions

#### [[Derivatives of real functions]]

![[Derivatives of real functions#^DEF-differentiable-function-in-R]]

![[Derivatives of real functions#^THM-sum-product-rule-in-R]]

![[Derivatives of real functions#^THM-power-rule-in-R]]

![[Derivatives of real functions#^THM-chain-rule-in-R]]

![[Derivatives of real functions#^ea75f5]]

![[(Theorem) L'Hopital's rule#^THM-lhopital]]

![[(Theorem) Intermediate value#^5d62ea]]

#### [[Local extrema of real functions]]

![[Local extrema of real functions#^DEF-local-extremum]]

![[(Theorem) Rolle's and mean value#^THM-rolles]]

![[(Theorem) Rolle's and mean value#^THM-mean-value]]

#### [[Higher-order derivatives of real functions]]

![[Higher-order derivatives of real functions#^e63a85]]

![[Higher-order derivatives of real functions#^869725]]

![[(Theorem) Taylor approximation#^ed4433]]

![[(Theorem) Taylor approximation#^e31b76]]

## Integration

#### [[Development of the Darboux integral]]

![[Development of the Darboux integral#^cb3f3d]]

![[Development of the Darboux integral#^82b9d9]]

![[Development of the Darboux integral#^7c2ee8]]

#### [[Darboux and Riemann integration]]

![[Darboux and Riemann integration#^6fe17d]]

![[Darboux and Riemann integration#^c67962]]

![[Darboux and Riemann integration#^242f6e]]

## Sequences of functions

#### [[Convergent sequences of functions]]

![[Convergent sequences of functions#^78d4ca]]

![[Convergent sequences of functions#^488b87]]

![[Convergent sequences of functions#^d548a0]]

![[Convergent sequences of functions#^0e421c]]

![[(Theorem) The limit of a uniformly convergent sequence of continuous functions is continuous#^b734a7]]

![[(Theorem) The limit of a uniformly convergent sequence of continuous functions is continuous#^033714]]

#### [[Bounded sequences of functions and equicontinuity]]

![[Bounded sequences of functions and equicontinuity#^64923f]]

![[Bounded sequences of functions and equicontinuity#^0e076a]]