---
aliases:
  - locally Euclidean
  - -manifold
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠🔨
publish: 
date: 2024-10-28 10:20
lastmod: 2025-05-01T11:53:58-04:00
---


---
# Locally Euclidean spaces

>[!example] Definition: Locally Euclidean
>A space $x$ is **locally $n$-Euclidean** if every $x \in X$ has a neighborhood which is [[Homeomorphisms and topological embeddings|homeomorphic]] to an open subset of $\mathbb R^n$.

^68cd2f

>[!abstract] Lemma: Products of locally Euclidean spaces are locally Euclidean
>If $X$ and $Y$ are locally $n,m$-Euclidean, respectively, then their [[Product spaces|product]] $X \times Y$ is locally $(n +m)$-Euclidean.

^19bbc9

---
# Topological manifolds

>[!example] Definition: $n$-dimensional manifold
>An $n$**-dimensional manifold**, or $n$**-manifold**, is a [[Topological spaces and open sets|topological space]] $X$ such that $X$ is [[Topological manifolds|locally n-Euclidean]], [[Hausdorff spaces|Hausdorff]], and [[Countability axioms|second-countable]] (i.e., has a countable [[Topological bases and subbases|basis]]).

^527264


---
# Examples

#### $\mathbb R^n$ and $S^n$ are locally $n$-Euclidean

#### The torus is locally $2$-Euclidean

#### The $x$ and $y$ axes in $\mathbb R^2$ are not locally $n$-Euclidean.

Given the axes
$$
X = \{ (x, y) \in \mathbb R^2 \ | \ xy = 0 \},
$$
any ball $\vec 0$ looks like a finite “cross.” However, the cross is not homeomorphic to any open subset of any $\mathbb R^n$ ( #wip Complete the argument using [[(Path-)connectedness]].)

#### The real projective space is locally $n$-Euclidean

![[Real projective space#^DEF-real-projective-space]]

#wip

