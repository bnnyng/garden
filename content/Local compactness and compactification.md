---
aliases:
  - locally compact
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠
publish: "true"
date: 2024-10-17 18:26
lastmod: 2024-11-15T06:51:05-05:00
---

>[!example] Definition: Local compactness
>A [[Topological spaces and open sets|topological space]] $X$ is **locally compact at a point** $x \in X$ if there exists a [[Compactness|compact]] subspace $C \subseteq X$ and a neighborhood $U$ of $x$ such that $U \subseteq C$. We say $X$ is **locally compact** if this holds for all $x \in X$.

^b1a036

**Compactification** is the process of adding “points at infinity” to turn an arbitrary space compact so that nice theorems, such as 

>[!example] Definition: Compactification
>A **compactification** of a [[Topological spaces and open sets|topological space]] $x$ is a *pair* $(X’, i)$ of a [[Compactness|compact]] topological space $X’$ and an [[Homeomorphisms and topological embeddings|embedding]] $i : X \to X’$ such that $j(X)$ is a [[Closed sets and closures|dense]] subset of $X’$, meaning every point of $X’$ is either in $X$ or a limit point of $X$. 

^a0c0be

---
# One-point compactification

![[(Theorem) One-point compactification#^7fecb4]]

---
# Examples

- Every [[Compactness|compact]] set is locally compact.
- $\mathbb R$ is locally compact, since any $x \in \mathbb R$ is contained in a compact subset $C = [x-1, x+1]$, for example, and the neighborhood $(x-1, x+1) \subseteq C$. Similarly, every $\mathbb R^n$ is compact.
- [[The countably infinite product of the real line with itself]] with the p

#### $\mathbb Q$ is not locally compact

$\mathbb Q$ is not locally compact as a subset of $\mathbb R$ with the usual topology. First, for any irrational $x \notin \mathbb Q$ with a neighborhood $(-\epsilon, \epsilon) \subset \mathbb R$, we may find a sequence of rationals in $[-\epsilon, \epsilon]$ that converges that converges to $x$, which implies that $[-\epsilon, \epsilon] \cap \mathbb Q$. 

Now suppose, towards a contradiction, that there exists an open neighborhood $U \subseteq \mathbb Q$ of $0$ such that $U \subseteq K \subseteq \mathbb Q$ for some compact set $K$. Then there exists a basic open neighborhood $(-\epsilon, \epsilon) \cap \mathbb Q \subseteq U$, which implies that $[-\epsilon, \epsilon] \cap \mathbb Q$ is a closed subset of the compact set $K$, and is therefore compact. But this contradicts the previous paragraph, so we conclude that $0$ has no open neighborhood contained in a compact subset $K \subseteq \mathbb Q$. 