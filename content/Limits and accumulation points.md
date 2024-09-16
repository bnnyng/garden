---
aliases:
  - limit
  - accumulation point
  - cluster point
  - limit point
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
  - MATH-GU4051
publish: "true"
date: 2024-04-22
lastmod: 2024-09-14T14:12:43-04:00
status: 🔴
---

>[!question]
>- Why is the definition of a limit point in topology the same as saying $x$ is a limit point if it is in the [[Closed sets, closures, and dense subsets|closure]] of $A \backslash \{x\}$?

---

Related: [[Measurable functions]]

---
# In Euclidean space

>[!example] Definition: Limit point of a set
>Let $D \subset \mathbb R^n$. We say that $a \in D$ is a **limit point of** $D$ if there exists a [[Sequences|sequence]] $\{x_n\} \in D \backslash \{a\}$ such that $x_n \to a$.

>[!example] Definition: Limit point of a function
>Given a function $f: D \to \mathbb R^m$, the **limit of** $f(x)$ as $x \to a$ exists and is $c \in \mathbb R^m$ if for all $\epsilon > 0$, there exists $\delta > 0$ such that
>$$
>0 < \|x - a \| < \delta \implies \|f(x) - c \| < \epsilon.
>$$
>In this case, we write $\lim_{x \to a} f(x) = c$.

Limits for combinations of functions are defined as follows:
- **Sums of functions**: Given $f,g: D \to \mathbb R^m$, if $\text{lim}(f) = \vec c$ and $\text{lim}(g) = \vec d$ exist, then $\text{lim}(f+g) = \vec c + \vec d$ exists.
- **Products of functions**: given $f,g : D \to \mathbb R$, if $\text{lim}(f) = c$ and $\text{lim}(g)$ exists, then $\text{lim}(fg) = cd$ exists.
- **Composite functions**: Given $f : D \subset \mathbb R^n \to \mathbb R^m$ and $g: D^\prime \subset \mathbb R^m \to \mathbb R^\ell$ so that the composite function $g \circ f : D \to \mathbb R^\ell$ is defined, if $\text{lim} \ f(\vec x) = \vec c$ as $\vec x \to \vec x_0$ exists and the limit for $g(\vec y)$ as $\vec y \to \vec c$ exists, then the limit $g(f(\vec x))$ as $\vec x \to \vec x_0$ exists, and is equal to the limit $g(\vec y)$ as $\vec y \to \vec c$.
- **Composites with continuous functions**: If $g$ is [[Pointwise continuity|continuous]], then $\text{lim}_{\vec x \to \vec x_0} \ g(f(\vec x)) = g(\text{lim}_{\vec x \to x_0} \ f(\vec x))$.

We have the following facts about limits:
- **The limit on an open set does not change with a larger domain.** Given an **open set** $U \subset D \subset \mathbb R^m$, the function $f : D \to \mathbb R^m$, and an element $\vec x_0 \in U$, then the **limit** as $\vec x \to \vec x_0$ for some $\vec x \in U$ is the same as the **limit** for some $\vec x \in D$. 


---
# In general metric spaces

>[!example] Definition: Accumulation point
>Given any set $E \subset X$, a point $x \in X$ is an **accumulation point** if for all $\epsilon > 0$, there exists $y \in E$ such that $y \neq x$ and the distance metric has $d(x,y) < \epsilon$. That is, for all $\epsilon > 0$,
>$$
>E \cap [B(x, \epsilon) \backslash \{x\}] \neq \emptyset.
>$$


---

# In topological spaces


>[!example] Definition: Limit point in topological space
>Given a subset $A$ of a [[Topological spaces and open sets|topological space]] $X$, a point $x \in X$ is a **limit point** if every [[Open sets|neighborhood]] of $x$ intersects $A$ at some point other than $x$ itself; that is, for all neighborhoods $U \subseteq X$ with $x \in U$, we have
>$$
>A \cap (U \backslash \{x\}) \neq \varnothing.
>$$
>Equivalently, $x$ is a limit point if it is in the [[Closed sets, closures, and dense subsets|closure]] of $A \backslash \{x\}$. We write $A’$ to denote the set of all limit points of $A$ in $X$.

---
# Review

## Definitions

[[MATH-GU4051|Topology]]
- Limit point in topological space
## Exercises

[[MATH-UN1208|Honors Mathematics B]]
- Use the definitions of limits and continuity, respectively, to show that a function $f : D \to \mathbb R^m$ is [[Pointwise continuity|continuous at]] $x_0 \in D$ *if and only if* $\lim_{x \to x_0} f(x)$ exists and is equal to $f(x_0)$. ⭐