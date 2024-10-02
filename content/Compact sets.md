---
aliases:
  - open cover
  - compact set
  - compactness
  - subcover
  - compact
  - finite subcover
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
publish: "true"
date: 2024-04-10 20:02
lastmod: 2024-09-29T15:35:13-04:00
status: 🟥
---
Compactness is a topological generalization of [[Closed sets, closures, and dense subsets|closed]] and [[Bounded sets and functions|bounded]] sets in $\mathbb R$, and specifically the [[(Theorem) Heine-Borel|Heine-Borel]] property.

In analysis, and specifically [[MATH-GU4061|Modern Analysis I]], one first defines compactness of a set $A$ using open coverings and then proves that compactness implies both closed and bounded.

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
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] and let $A\subset X$ be [[Compact sets|compact]]. Then:
>- (i) $A$ is bounded;
>- (ii) If $B \subseteq A$ is a [[Closed sets, closures, and dense subsets|closed]] subset of $A$, then $B$ is also compact;
>- (iii) $A$ is closed.

^7b21f9

---
# Review

## Exercises

[[MATH-GU4061|Modern Analysis I]]

- Prove the Hausdorff property holds for metric spaces. (Hint: what open sets arise naturally from $x, y$?)

[[MATH-UN1208|Honors Mathematics B]]

- Show that $(0, 1]$ is not compact. Is $[a, \infty)$ closed and/or compact?

---
# Notes
## [[MATH-42X|MATH-425]]


>[!example] Definition: Open cover
>An **open cover** of a set $E \subset X$ is a collection of [[Open sets|open sets]] such that $E$ is a subset of the collection. A **subcover** is a subset of the collection that also covers $E$.

---
# Proof appendix

![[Compact sets#^2c2d30]]

*Proof.*  Let $r = d(x,y) > 0$, the [[Metrics, metric spaces, and the metric topology|distance]] between $x$ and $y$. Set $A = B_{r/4}(x)$ and $B = B_{r/4}(y)$. Then we have $x \in A, y\in B$, and $A \cap B = \varnothing$ as desired.


![[Compact sets#^7b21f9]]

*Sketch.*

- (iii) **Show $A^C$ is open by showing that for all $x \in A^C$, there exists $B_\epsilon(x) \subseteq A^C$.**
	1. 