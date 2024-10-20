---
aliases:
  - connected component
  - path component
  - component
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔴
publish: 
date: 2024-10-12 16:41
lastmod: 2024-10-13T13:50:58-04:00
---
>[!question]
>- Components are always closed in the topology of the whole space (why?) but open in the subspace topology (of what?)?
>- Need to justify the claim that $C(x)$ is the largest connected set containing $x$?


---
# Overview

>[!example] Definition: (Connected) components
>Given any points $x, y$ in a [[Topological spaces and open sets|topological space]] $X$, define an [[Relation|equivalence relation]] by $x \sim_C y$ if there exists a [[Connectedness|connected]] subspace $A \subseteq X$ such that $x, y \in A$. The **components** of $X$ are the equivalence classes under $\sim_C$, and the component of a point $x \in X$ is denoted
>$$
>C(x) = \{ y \in X \ | \ y \sim_C x\}.
>$$

^59e825

>[!example] Definition: Path components
>Given any points $x, y$ in a [[Topological spaces and open sets|topological space]] $X$, define an [[Relation|equivalence relation]] by $x\sim_P y$ if there exists a [[Connectedness|path]] from $x \to y$. The **path components** of $X$ are the equivalence classes under $\sim_P$, and the path component of a point $x \in X$ is denoted
>$$
>P(x) = \bigcup_{\substack{x \in A \subseteq X \\  A \text{  is path connected}}} A.
>$$

^078eee

---
# Examples

#### Components of $\mathbb Q$ are singletons

If $x \in \mathbb Q$, then $C(x) = \{ x\}$. Otherwise, if $x \in A \subseteq \mathbb Q$, and there is some $y \in A$ such that (without loss of generality) $x < y$, then $x < z< y$ for some irrational $z \in \mathbb R$. Then $A \cap (-\infty, z)$ and $A \cap (z, \infty)$ are a separation of $A$—this is similar to showing that $\mathbb Q$ is not [[Connectedness|connected]].

#### Topologist’s sine curve
[[Topologist's sine curve]] has one component but two path components. 

---
# Review

- Check that connected components and path components are indeed equivalence relations (reflexive, symmetric, transitive).
- Is a connected component $C(x)$ open or closed?
- Are any components of $\mathbb Q$ open?
- Check that the path component $P(x)$ is indeed the union of all path-connected subsets $A \subseteq X$ that contain $x$. ⭐