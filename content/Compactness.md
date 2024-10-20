---
aliases:
  - open cover
  - compact set
  - compactness
  - subcover
  - compact
  - finite subcover
  - limit point compact
  - sequentially compact
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
publish: "true"
date: 2024-04-10 20:02
lastmod: 2024-10-17T18:21:53-04:00
status: 🔴🔨
---
>[!question]
>- Why are infinite products of compact sets not necessarily compact in the box topology?
>- Clarify why this is the case: To show $f^{-1}$ is continuous, we want to show that if $Z \subseteq X$ is closed, then $f(Z)$ is also closed.

---
# Overview

Compactness is a topological generalization of [[Closed sets, closures, and dense subsets|closed]] and [[Bounded sets and functions|bounded]] sets in $\mathbb R$, and specifically the [[(Theorem) Heine-Borel|Heine-Borel]] property.

In analysis, and specifically [[MATH-GU4061|Modern Analysis I]], one first defines compactness of a set $A$ using open coverings and then proves that compactness implies both closed and bounded.


---
# Limit point and sequential compactness


>[!example] Definition: Limit point compact
>A [[Metrics, metric spaces, and the metric topology|metric space]] $(X, d)$ is **limit point compact** if every infinite subset of $X$ has a limit point.

^866ab2

>[!example] Definition: Sequentially compact metric space
>A [[Metrics, metric spaces, and the metric topology|metric space]] $(X, d)$ is called **sequentially compact** if every [[Sequences|sequence]] has a convergent subsequence.

^6b379f

>[!abstract] Theorem
>1. Compactness implies limit point compactness in any [[Topological spaces and open sets|topological space]].
>2. Compactness, limit point compactness, and sequential compactness are *equivalent* in a [[Metrics, metric spaces, and the metric topology|metric space]].

^53a90a

---
# In metric spaces


>[!example] Definition: Open covers in metric spaces
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] and $A\subseteq Z$. A family of sets $\{ G_\alpha\}_{\alpha \in J}$ is called an **open cover** of $A$ if all $G_\alpha$ are open and if $A \subseteq \bigcup_{\alpha \in J} G_\alpha$. 

^b75af9

>[!example] Definition: Compact sets in metric spaces
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]]. We say that $A \subseteq X$ is **compact** if every open cover $\bigcup_{\alpha \in J}G_\alpha$ of $A$ has a finite subcover. That is, there exists some other indexing set $K$ such that $J \subseteq K$ and $|K| < \infty$. 

^69b1bd

>[!abstract] Lemma: Hausdorff property for metric spaces
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]]. Given $x, y \in X$ where $x \neq y$, there exist open sets $A, B$ such that $x \in A$ and $y \in B$ and $A \cap B = \varnothing$.

^2c2d30


>[!abstract] Proposition (Rudin 2.34, 2.35): Compact sets are closed and bounded; closed subsets are also compact
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] and let $A\subset X$ be [[Compactness|compact]]. Then:
>- (i) $A$ is bounded;
>- (ii) If $B \subseteq A$ is a [[Closed sets, closures, and dense subsets|closed]] subset of $A$, then $B$ is also compact;
>- (iii) $A$ is closed.

^7b21f9


>[!abstract] Theorem: Limit point compactness implies subsequential compactness in metric spaces
>If $(X, d)$ is a [[Metrics, metric spaces, and the metric topology|metric space]] that is limit point compact, then it is also “subsequentially” compact.

^d852a5

----
# In topological spaces

>[!example] Definition: Open cover, compact topological space
>An **open covering** of a [[Topological spaces and open sets|topological space]] $X$ is a collection of subsets $\mathcal C \subseteq \mathcal P(X)$ such that each $U \in \mathcal C$ is open in $X$ and $\bigcup_{U \in \mathcal C} = X$.
>
>The space $X$ is **compact** if for every open cover $\mathcal C$ of $X$, there exists a sub-collection $\mathcal C’ \subseteq \mathcal C$ such that $\mathcal C’$ is finite and also covers $X$.

^649955

>[!abstract] Lemma (Munkres 26.1):
>A [[Subspace (induced) topology|subspace]] $Y \subseteq X$ is compact if and only if every covering of $Y$ by open sets in $X$ contains a finite subcover (more precisely, every collection of open sets in $X$ whose union contains $Y$ has a finite sub-collection whose union also contains $Y$).

^220c88

>[!abstract] Lemma (Munkres 26.2 & 26.3):
>- (i) If $X$ is compact and $Y \subseteq X$ is [[Closed sets, closures, and dense subsets|closed]], then $Y$ is compact.
>- (ii) If $Y \subseteq X$ is compact and $x$ is [[Hausdorff spaces|Hausdorff]], then $Y$ is closed in $X$.

^c15634

![[(Theorem) Heine-Borel#^282006]]

## Products and compactness

>[!abstract] Theorem (Munkres 26.7): The product of finitely many compact spaces is compact.
>If $X$ and $Y$ are compact, then their [[The product topology|product]] $X \times Y$ is also compact. By induction, the product of finitely many compact spaces is compact. 
>
>This holds for arbitrarily many spaces in the **product topology**, but not for infinite products in the **box topology**.

^4a8b84




---
# Continuous functions and compactness


>[!abstract] Theorem (Munkres 26.5 & 26.6): Continuous functions and compactness
>- (i) If $f : X \to Y$ is [[Continuous functions|continuous]] and $X$ is compact, then $f(X)$ is compact.
>- (ii) Let $f: X \to Y$ be a continuous bijection. If $X$ is compact and $Y$ is [[Hausdorff spaces|Hausdorff]], then $f$ is a [[Homeomorphisms and topological embeddings|homeomorphism]].

^d5a100

![[(Theorem) Extreme value#^fea58b]]



---
# Examples

#### Compact and non-compact intervals of $\mathbb R$

#### Finite complement topology is compact

The [[Finite complement topology|finite complement topology]] on *any* set is compact. 



---
# Review

[[MATH-GU4051|Topology]]

- When can compactness be used to verify if a continuous bijection is a homeomorphism (i.e., under what conditions do you not need to check that the inverse image is continuous)?
- Are countably infinite products of compact sets also compact?

[[MATH-GU4061|Modern Analysis I]]

- Prove the Hausdorff property holds for metric spaces. (Hint: what open sets arise naturally from $x, y$?)

[[MATH-UN1208|Honors Mathematics B]]

- Show that $(0, 1]$ is not compact. Is $[a, \infty)$ closed and/or compact?

---
# Proof appendix

![[Compactness#^2c2d30]]

*Proof from [[MATH-GU4061|Modern Analysis I]].* 

Let $r = d(x,y) > 0$, the [[Metrics, metric spaces, and the metric topology|distance]] between $x$ and $y$. Set $A = B_{r/4}(x)$ and $B = B_{r/4}(y)$. Then we have $x \in A, y\in B$, and $A \cap B = \varnothing$ as desired.


![[Compactness#^7b21f9]]

*Sketch from [[MATH-GU4061|Modern Analysis I]].*

- (iii) **Show $A^C$ is open by showing that for all $x \in A^C$, there exists $B_\epsilon(x) \subseteq A^C$.**

![[Compactness#^d852a5]]

*Sketch from [[MATH-GU4061|Modern Analysis I]].*

Let $E := \{ x_n \ | \ n \in \mathbb N \}$ be the set of all points in the sequence.
- Case 1: $E$ is finite.
	- Trick: We can make an (infinite) subsequence from a finite sequence by taking the final value over and over again
	- There exists $a \in E$ such that $x_n = a$ for infinitely many $n$
	- Make a convergent subsequence by choosing all the points that equal $a$
- Case 2: $E$ is infinite.
	- Limit point compactness $\implies$ $E$ has limit point $x \in X$.
	- For all $k \in \mathbb N$, exists $x_{n(k)} \neq x$ in $E$ where $d(x_{n(k)}, x) < 1/k$. 
	- Make a convergent subsequence by removing elements from $\{ n(k) \ | \ k \in \mathbb N$\} so that $n(k_i) > n(k_j)$ for $i > j$

*Sketch from [[MATH-GU4051|Topology]]*.

- 


![[Compactness#^53a90a]]

*Proof of 1 from [[MATH-GU4051|Topology]].*




![[Compactness#^d5a100]]

*Proof of (i) from [[MATH-GU4061|Modern Analysis I]].*

Suppose $K \subseteq X$ is a compact subset and $f : X \to Y$ is continuous. Then let $\{ U_\alpha\}$ be an open cover of $f(K)$. By continuity of $f$, the preimages $f^{-1}(U_\alpha)$ are also open and cover $K$. Since $K$ is compact, we may find a finite subcover $\{f^{-1}(U)_i \}_{i=1}^n$. Then the union of the images of this collection is a finite subcover of $f(K)$, and we conclude that $f(K)$ is compact.

*Sketch of (ii) from [[MATH-GU4061|Modern Analysis I]]*.

Suppose $(X, d_X)$ and $(Y, d_Y)$ are [[Metrics, metric spaces, and the metric topology|metric spaces]]. To show $f^{-1}$ is continuous, it suffices to show that $f(A)$ is open for any $A \subseteq X$.

1. If $A \subseteq X$ is open, then $A^C$ is closed and therefore compact by [[(Theorem) Heine-Borel|Heine-Borel]].
2. $A^C$ compact $\implies$ $f(A^C)$ compact, hence closed by [[(Theorem) Heine-Borel|Heine-Borel]] again.
3. Conclude that $f(A)$ open.

*Sketch of (ii) from [[MATH-GU4051|Topology]].*

To show $f^{-1}$ is continuous, we want to show that *images of closed sets under $f$ are also closed*. This can be done by applying the earlier lemmas.
1. Suppose $A \subseteq X$ closed. Since $X$ is compact, $A$ is also compact (Munkres 26.2).
2. Since $A \subseteq X$ is compact, its image under a continuous function $f(A) \subseteq Y$ is also compact (above; Munkres 26.5).
3. Since $f(A) \subseteq Y$ is compact and $Y$ is Hausdorff, $f(A)$ is also closed (Munkres 26.3).

❓ I don’t know why this is true