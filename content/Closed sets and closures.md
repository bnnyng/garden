---
aliases:
  - closed set
  - closure
  - closed
  - interior (topology)
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-42X
  - MATH-GU4051
  - MATH-GU4061
publish: "true"
date: 2024-04-10 17:23
lastmod: 2024-11-03T16:35:32-05:00
status: 🟡
---
A **closed set** is a set that contains all of its [[Limits and accumulation points|accumulation points]]. Equivalently, a closed set is the complement of an [[Open sets|open set]].

The **closure** of any set $E$ is the *smallest closed set* that contains $E$—it contains $E$ as well as all its limit points. By smallest, we mean precisely the intersection of *all* closed sets that contain $E$. It follows that the closure of a closed set is simply the set itself.

---
# In metric spaces

>[!example] Definition: Closure
>The **closure** of a set $E \subset X$, denoted $\bar E$, is the set containing $E$ and all of its limit/accumulation points.

^27b93a

>[!abstract] Theorem: Rudin 2.27
>1. $\bar E$ is a closed set.
>2. $E$ is closed if and only if $E = \bar E$.
>3. If $E \subset F$ is a subset and $F$ is closed, then $\bar E \subset F$.


>[!abstract] Proposition
>Let $A \subseteq X$ be [[Bounded sets and functions|bounded]]. Then $\text{diam}(A) = \text{diam} (\overline A)$, where $\overline A$ is the [[Closed sets and closures|closure]] of $A$.

^161a01


>[!abstract] Proposition: Sequence characterization of closed sets
>Let $(X, d)$ be a [[Metrics, metric spaces, and the metric topology|metric space]] and $A \subseteq X$. Then $A$ is closed if and only if every [[Sequences|convergent sequence]] in $A$ converges to some $a \in A$.

^3a968a


---
# In topological spaces

For the following definitions and theorems, recall the terminology:
- Given $x \in X$ and an [[Topological spaces and open sets|open set]] $U \subseteq X$, we say $U$ is a **neighborhood** of $x$ if $x \in U$.
- Given $A, B \subseteq X$, we say $A$ **intersects** $B$ if $A \cap B \neq \varnothing$.

## Closed sets

>[!example] Definition: Closed set in topological space
>Given a [[Topological spaces and open sets|topological space]] $X$, we say a subset $A \subseteq X$ is **closed** if its [[Algebra of sets|complement]] $X \backslash A$ is open.

^00a835

In principle, one can “do topology” using closed sets instead of open sets; most mathematicians just prefer the latter.

>[!abstract] Theorem (Munkres 17.1): Doing topology with closed sets
>Let $X$ be a [[Topological spaces and open sets|topological space]]. Then:
>1. $\varnothing$ and $X$ are closed;
>2. *Arbitrary* intersections of closed sets are closed;
>3. *Finite* unions of closed sets are closed.

^ebfb1b

## Closure and interior

>[!example] Definition: Closure and interior of a set
>Given a subset $A$ of a [[Topological spaces and open sets|topological space]] $X$:
>- The **interior** of $A$, denoted $\text{Int}(A)$, is the *union* of all open sets contained in $A$; 
>- The **closure** of $A$, denoted $\bar A$, is the *intersection* of all closed sets containing $A$.
>
>By definition, $\text{Int}(A) \subset A \subset \bar A$. Further, $\text{Int}(A)$ is the *biggest* open set contained in $A$, and $\bar A$ is the *smallest* closed set containing $A$.

^c6740f

>[!abstract] Theorem (Munkres 17.4): Closure of a subset in a subspace
>Let $Y \subseteq X$ be a [[Subspace (induced) topology|subspace]], and let $A \subset Y$ be any subset. Then the closure of $A$ in $Y$ is equal to $\bar A \cap Y$, where $\bar A$ is the closure of $A$ in $X$.

^ee0a7e


![[(Theorem) Describing the closure of a set using a topological basis#^111747]]

![[(Theorem) The closure of a set is the union of the set with its limit points#^f956e9]]

---
# Examples

#### Graphs of continuous functions are closed

If $f: D \subseteq \mathbb R \to \mathbb R$ is [[Continuous functions|continuous]], then the set
$$
\text{Graph}(f) = \{ (x, f(x)) \ | \ x \in \mathbb D\} \subseteq \mathbb R \times \mathbb R
$$
is closed. If we have a [[Sequences|convergent sequence]] $x_n \to x$ in $\mathbb R$, then the image has $f(x_n) \to f(x)$ as well, so any convergent sequence in the graph $(x_n, f(x_n))$ should have a limit point $(x, f(x))$ in the graph.

---
# Review

[[MATH-GU4051|Topology]]
- Prove that given a subspace $Y \subseteq X$ and a subset $A \subseteq Y$, the closure of $A$ in $Y$ is equal to $Y$ intersected with the closure of $A$ in $X$. ⭐ 
- Prove [[(Theorem) Describing the closure of a set using a topological basis]]. (Hint: for (i), prove the contrapositive.) ⭐
- Prove [[(Theorem) The closure of a set is the union of the set with its limit points]]. (Hint: use [[(Theorem) Describing the closure of a set using a topological basis]] for one of the containments). ⭐

[[MATH-UN1208|Honors Mathematics B]]

- Is $\mathbb Q$ dense in $\mathbb R$? Why or why not?

---
# Proof appendix

![[Closed sets and closures#^161a01]]

*Proof.*

Since $A \subseteq \overline A$, we know automatically $\text{diam}(A) \leq \text{diam}(\overline A)$. Conversely, let $\epsilon> 0$. Then there exist $x, y \in \overline A$ such that 
$$
d(x, y) \geq \text{diam}(\overline A) - \epsilon.
$$
Further, by definition of $\overline A$, there exist $x’, y’ \in A$ such that $d(x, x’) < \epsilon$ and $d(y’, y) < \epsilon$. Then 
$$
\text{diam}(A) \geq d(x', y') \geq d(x, y) - d(x', x) - d(y', y) \geq \text{diam}(\overline A) - 3\epsilon.
$$
Since this holds for any $\epsilon > 0$, we must have $\text{diam}(A) \geq \text{diam}(\overline A)$ as well.

![[Closed sets and closures#^3a968a]]

*Sketch of proof.*

- ($\implies$) Use definition of a sequence converging to some point $x \in X$, then show that $x$ is a limit point of $A$ using the [[Limits and accumulation points|sequence characterization of limit points]]. Since $A$ is closed, the limit point $x$ is also in $A$.
- 



---
# Notes

>[!example] Definition: Sequence definition of closed sets
> A set $C \subset \mathbb R^n$ is **closed** if, whenever a sequence $\vec x_m \in C$ **converges** to some **limit** $\vec x_m \to \vec x \in \mathbb R^n$, its **limit** $\vec x$ is also in $C$.

- The [[Sequences|sequence definition]] was used in [[MATH-UN1208|Honors Mathematics B]], and a later exercise required proving that this definition holds if and only if the complement of a closed set is open. In [[MATH-42X]], the latter definition was used to prove the former. 