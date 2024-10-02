---
aliases:
  - topology
  - topological space
  - topologies
  - finer
  - coarser
  - discrete topology
  - indiscrete topology
  - finite complement topology
  - standard topology
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
publish: "true"
date: 2024-09-04 20:48
lastmod: 2024-09-26T14:34:47-04:00
status: 🟠
---
>[!question]
>- “Also in $\mathcal T$” can be denoted as either subset or element inclusion?
>- How to understand the topology induced by a norm (correct phrasing)?
>	- What about other norms?
>- Why is a topological space discrete $\iff$ every singleton is open? Isn’t this by definition—the fact that the discrete topology includes all the open singletons? Is there such a thing as a non-discrete topology with non-open singletons?
>- Why, in general, do we require finite intersections, aside from the intuition that an open set should have something like a neighborhood for each point?

---
# Overview

>[!example] Definition: Topology, topological space
>A **topology** on a set $X$ is a collection $\mathcal T$ of subsets of $X$  (i.e., a subset of the [[Axioms of set theory|power set]] $\mathcal T \subseteq \mathcal P(X)$) that has the following properties:
>1. $\emptyset$ and $X$ are in $\mathcal T$;
>2. The [[Algebra of sets|union]] of the elements of any (arbitrary) sub-collection of $\mathcal T$ is also in $\mathcal T$;
>3. The [[Algebra of sets|intersection]] of the elements of any *finite* sub-collection of $\mathcal T$ is also in $\mathcal T$. 
>
>A **topological space** is an ordered pair $(X, \mathcal T)$, where $X$ is a set and $\mathcal T$ is a topology on $X$. 

^43db4b

Topologies can be compared by the granularity of their sets.

>[!example] Definition: Finer, coarser, and comparable topologies
> Two topologies $\mathcal T, \mathcal T’$ on a set $X$ are **comparable** if either $\mathcal T \subseteq \mathcal T’$ or $\mathcal T’ \subseteq \mathcal T$. We say $\mathcal T’$ is **finer** than $\mathcal T$ if $\mathcal T’$ has more open sets than $\mathcal T$; that is, if $\mathcal T \subseteq \mathcal T’$. In this case, we also say $\mathcal T$ is **coarser** than $\mathcal T’$.

^43fc5d


---
# Open sets in topological space

Elements of $\mathcal T$ are called [[Open sets|open sets]] of $X$. Recall that a subset $U \subseteq \mathbb R^n$ is called **open** if for all $x \in U$, there exists some (sufficiently small) $\epsilon > 0$ such that the $\epsilon$-ball about $x$
$$
B_\epsilon(x) = \{ y \in \mathbb R^n \ | \ |x-y| < \epsilon \}
$$
is completely contained in $U$. 

>[!example] Definition: Open set in a topological space
>If $X$ is a topological set with topology $\mathcal T$, we say a subset $U \subset X$ is an **open set** of $X$ if $U \in \mathcal T$. 

^f12524

Thus, we can also say that a **topological space** is a set $X$ together with a collection of **open subsets** of $X$ such that $\emptyset$ and $X$ are both open, and arbitrary unions and finite intersections of open subsets are open.

---
# Examples

#### The motivating example

The **standard, or Euclidean, [[Norms|norm]]** $\| \cdot \|_2$ in $\mathbb R^n$ defined by 
$$
\| x \|_2 = \sqrt{x_1^2 + \cdots + x_n^2}
$$
gives the distance between two points as $\| x - y\|_2$. The topology *induced* by this norm is precisely the collection of open balls $B_\epsilon(x)$, where $\epsilon > 0$ is some real number and $x \in \mathbb R^n$.
#### The arbitrary set $X = \{a, b, c\}$ and its non-examples

An arbitrary three-element set $X = \{a, b, c\}$ has 9 unique topologies up to permutation. 

The following collections of subsets are not topologies (draw them out!):
- $\{\emptyset, X, \{a\}, \{b\} \}$
- $\{\emptyset, X, \{a, b\}, \{b, c\}\}$

#### Discrete and indiscrete topologies

>[!example] Definition: Discrete, indiscrete topology
>Given any set $X$, the collection of all subsets of $X$ (i.e., the [[Axioms of set theory|power set]] $\mathcal P (X)$) is a topology on $X$ called the **discrete topology**. The collection $\{\emptyset, X\}$ is also a topology called the **indiscrete** or **trivial** topology.

Note that a topological space is discrete, meaning every set is an open set $\iff$ every singleton (sets containing a single element) is also open.
#### Finite complement topology

>[!example] Definition: Finite complement topology
>The **finite complement topology** $T_f$ of a set $X$ is the collection of all subsets $U \subseteq X$ such that the complement $X \backslash U$ is either finite or all of $X$. 

#### Subspace (induced) topology

![[Subspace (induced) topology#^fe07da]]

---
# Review

## Definitions

- Topology, topological space
- Finer and coarser topologies
- Discrete and indiscrete topology
- Subspace (induced) topology

## Exercises

- Prove that the collection of all open sets is a topology on $\mathbb R^n$ called the **standard topology**. ⭐
- Given an arbitrary set $X = \{a, b, c\}$, give an example and a non-example of a topology.
- Prove that the following examples satisfy all the properties of a topology:
	- Discrete and indiscrete topologies
	- Finite topology (hint: for (T2) and (T3), use the fact that the complement of an intersection of a family of indexed sets is same as a union of complements between each indexed set and the ambient set, as well as the reverse; see [[Algebra of sets]])
	- Subspace topology
- Show that $\mathbb Z \subseteq \mathbb R$ and $K := \{ 1/n \ | \ n \in \mathbb Z_{>0} \}$ with the respective subspace topologies are discrete, but $K \cup \{ 0 \}$ is not. ⭐