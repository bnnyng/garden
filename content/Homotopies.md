---
aliases:
  - homotopy
  - path-homotopy
  - straight line homotopy
  - homotopic
  - homotopy relative to
  - homotopic relative to
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
  - MATH-GU4053
status: 🟡
publish: "true"
date: 2024-11-12 18:23
lastmod: 2025-03-07T10:22:21-05:00
---
# Overview

Intuitively, two maps are **homotopic** if one can be continuously deformed into the other. **Path-homotopies** are paths that can be deformed into each other *when endpoints are fixed*.

Path-homotopy classes are also elements of the [[Fundamental groups|fundamental groups]] of a space.

See also: [[Path concatenation]], [[Homotopy equivalence]]

---
# Ways to (dis-)prove homotopies

- [[(Path-)connectedness]] (ex: antipodal maps on the real line with origin removed)

---
# (Path-)homotopies and (path-)homotopy classes

>[!example] Definition: Homotopic, homotopy
>Let $I = [0,1]$, $X, Y$ be [[Topological spaces and open sets|topological spaces]], and $f, f’ : X \to Y$ be [[Continuous functions|continuous]]. We say $f$ is **homotopic** to $f’$ if there exists a continuous mapping $H : X \times I \to Y$ such that for all $x \in X$, $H(x, 0) = f(x)$ and $H(x, 1) = f’(x)$. We call $H$ a **homotopy** from $f$ to $f’$, and we write $f \simeq f’$.

^a20a20

Alternatively, a homotopy can be viewed as a one-parameter family $t \mapsto H_t$. For every $t \in [0,1]$, define a continuous $H_t : X \to Y$ by $H_t(x) = H(x, t)$ such that $H_0 = f$, $H_1 = f’$, and the $H_t$s vary continuously with respect to $t$ (when you put them all together, $H$ is continuous).

>[!example] Definition: Path-homotopy
>Given $I = [0,1$, two paths $f, f’ : I \to X$, e.g., from $x_0 \in X$ to $x_1 \in X$, are **path-homotopic**, written $f \simeq_p f’$ if there exists a homotopy $H : I \times I \to X$ such that $H(0, t) = x_0$ and $H(1, t) = x_1$; that is, the endpoints are fixed for all $t \in I$.

^3e2e4b

>[!abstract] Lemma: Homotopies and path-homotopies are equivalence relations.

^7e4cfb

*Proof from [[MATH-GU4051|Topology]]*.

We check the three properties of an [[Relation|equivalence relation]] for homotopies:
- **Reflexivity:** For $f : X \to Y$, we have $f \simeq f$ via $H : X \times I \to Y$ defined by $H(x, t) = f(x)$. Note that $H = f \circ \pi_1$, the projection onto the first coordinate.
- **Symmetry:** If $f \simeq g$ via $H: X \times I \to Y$, then we have $g \simeq f$ via $H’: X \times I \to Y$ defined by $H’(x, t) = H(x, 1-t)$.
- **Transitivity:** If $f \simeq f’$ via $H$ and $f’ \simeq f’’$ via $H’$, define $H’’: X \to Y$ by 
$$
H''(t) = 
\begin{cases}
H(x, 2t) &\text{if } 0 \leq t \leq 1/2 \\
H'(x, 2t-1) &\text{if } 1/2 \leq t \leq 1.
\end{cases}
$$
$H’’$ is well-defined (hint: how is it defined at $t = 1/2$?) and continuous on the closed sets $X \times [0, 1/2]$ and $X \times [1/2, 1]$, which implies $H’’$ is continuous by the [[Continuous functions|pasting lemma]] 

🔺 The same homotopies $H$, etc. work for showing path-homotopy, with the additional step of checking the endpoint condition. $\ \square$

---
# Homotopies relative to a subspace

>[!example] Definition: Homotopy relative to a subspace
>Given a subspace $A \subseteq X$, a homotopy $F : X \times I \to Y$ is called a **homotopy relative to $A$** (or **homotopy rel $A$**) if values of $F$ on $A$ are independent of the time parameter, i.e., for all $a \in A$, we have $F(a, t) = F(a, 0)$ for all $t \in I$. Equivalently, the restriction $F_t | A$ is the same for all $t \in I$.
>
>We may also say that functions $f, g : X \to Y$ are **homotopic rel $A$** if there exists a homotopy $F$ between them with the above properties.

Note that a [[Deformation retractions|deformation retraction]] of $X$ onto $A \subseteq X$ is precisely a **homotopy rel $A$** from the identity of $X$ to a retraction of $X$ onto $A$.

---
# Examples

#### Straight line homotopy in convex sets

>[!example] Definition: Convex set
>A subset $A \subseteq \mathbb R^n$ is **convex** if for all $x, y \in A$, the line segment from $x$ to $y$ lies in $A$. Explicitly, the entire line $(1-t)x + ty$ is in $A$ for all $t \in [0, 1]$.

If $A \subseteq \mathbb R$ is convex, then any two continuous functions $f, f’ : X \to A$ are homotopic via the **straight line homotopy**
$$
H(x, t) = (1-t)f(x) + t(f'(x)).
$$

#### Maps on the real plane with origin removed

Let $X = \mathbb R^2\backslash \{ 0\}$ be the real plane with origin removed. Then 
$$
f_0(x) = x
\quad \quad
f_1(x) = -x
$$
are homotopic via
$$
H(x, t) = 
\begin{pmatrix}
\cos\pi t & -\sin \pi t \\
\sin \pi t & \cos \pi t
\end{pmatrix}x,
$$
which continuously rotates the point. This is well-defined (i.e., $H(x, t) \in X$ for all $x \in X$), since we have $\det = 1$, hence the matrix is invertible and $H(x, t)$ is always nonzero.

Note that these are not homotopic if replacing the plane with $\mathbb R \backslash \{ 0 \}$ (argue based on [[(Path-)connectedness]]) or $\mathbb R^3 \backslash \{ 0\}$ (argument TBD).