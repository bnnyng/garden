---
aliases:
  - simplex
  - singular homology group
  - homologous
  - -cycle
  - face
  - simplicial
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 🔴 🔨 ❓
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-27T17:42:13-04:00
---
>[!question]
>- Definition of standard $p$-simplex?
>- Orientation and the boundary operator?

---
# Overview

>[!example] Key terms and notation
>- **Standard $p$-simplex $\Delta^p$:** the $p$-dimensional “triangle” whose vertices are the [[Vector bases and dimension|standard basis]] vectors of $\mathbb R^{p+1}$.
>- **Boundary $\partial \Delta^p$:** the set obtained by inserting a $0$ at the $i$th coordinate for each dimension $0 \leq i \leq p$ and each point in $\Delta^{p-1}$. 
>- **Singular $p$-simplex $\sigma$:** any continuous map $\Delta^p \to X$ for some topological space $X$.
>- $\textup{Sin}_p(X)$**:** the set of all singular $p$-simplices in $X$.
>- **Face of a $p$-simplex $d_i(\sigma)$:** the $(p-1)$-simplex obtained by first inserting $0$ at the $i$th coordinate and then applying some singular $p$-simplex $\sigma$. Note that this procedure is a map $\textup{Sin}_p(X) \to \textup{Sin}_{p-1}(X)$.
>- **Singular $p$-chain:** a [[Abelian groups|formal linear combination]] of $p$-simplices.
>- $C_p(X)$**:** the free abelian group $\mathbb Z\textup{Sin}_p(X)$ (i.e., all formal linear combinations of $p$-simplices in $X$ with coefficients in $\mathbb Z$).
>- **Boundary operator $\partial_p$:** the [[Group homomorphisms and isomorphisms|group homomorphism]] $C_p(X) \to C_{p-1}(X)$ given by adding together oriented (i.e., scaled by some power of $-1$) **faces of $p$-simplices**.
>- $p$**-cycle:** an element in the kernel of the boundary operator $\partial$, which is denoted $\ker \partial = Z_p(X) \subset C_p(X)$.
>- **Boundary:** an element in the image of $\partial$, which is denoted $\textup{Im}  \partial = B_{p-1}\subset C_{p-1}$.


**Relevant theorems:**
- [[(Theorem) The abelianization of the fundamental group of a path-connected space is isomorphic its first singular homology group]]

**Related notes:**
- [[Homology of general chain complexes]]

---
# Standard simplices

Simplices are higher-dimensional analogues of triangles, and play a role in singular homology that is similar to the role of the unit interval $I = [0, 1]$ for [[Fundamental groups|fundamental groups]], where every representative in the fundamental group is a loop out of $I$. The basic **standard simplices** are spaces with $p$ vertices that are realized in $p +1$ Euclidean space.

>[!example] Definition: Singular $p$-simplex
>Given an integer $p \geq 0$, the **standard $p$-simplex** is the space $$ \Delta^p = \left \{ (t_0, \ldots, t_p) \in \mathbb R^{p+1} \ : \ \sum_{i=0}^p t_i = 1,  \ t_i \geq 0 \text{ for all } i \right \}, $$ which is equipped with the [[Subspace (induced) topology|subspace topology]] induced by the usual Euclidean topology on $\mathbb R^{p+1}$. 
>
>If $X$ is any topological space, a **singular $p$-simplex** in $X$ is a continuous map $\sigma : \Delta^p \to X$. The set of all singular $p$-simplices in a space $X$ is denoted $\mathup{Sin}_p(X)$.

💬 *Remark.* $\ \text{}$ If $e_0, \ldots, e_p \in \mathbb R^{p+1}$ is the **standard basis**, e.g., $e_0 = (1, 0, \ldots, 0$), $e_1 = (0, 1, \ldots, 0)$, then the point $t \in \Delta^p$ may be written as the linear combination $$ t = (t_0, \ldots, t_p)  = t_0e_0 + \cdots + t_pe_p. $$
*Example.* $\ \text{}$ $\Delta^0$ is the one-point space, $\Delta ^1$ is homeomorphic to an interval, $\Delta^2$ is a solid triangle, and $\Delta^3$ is a tetrahedron.

>[!example] Definition: Face, boundary of simplices
>For $0 \leq i \leq p$, the **face map** $\delta^i : \Delta^{p-1} \to \Delta^p$ is the map defined by $$ \delta^i (t_0, \ldots, t_{p-1}) = (t_0, \ldots, t_{i-1}, 0, t_i, \ldots, t_{p-1}. $$ The image $\delta^i(\Delta^{p-1}) \subset \Delta^p$ is called the $i$th **face** of $\Delta^p$, and the **boundary** of $\Delta ^p$ is the union of all faces $$\partial \Delta^p = \bigcup_{i=0}^p \delta^i(\Delta^{p-1}) \subset \Delta^p. $$
>
>For a general singular $p$-simplex $\sigma : \Delta^p \to X$ in a space $X$, the $i$th **face** of $\sigma$ is a $(p-1)$-simplex given by the *image* of the map $d_i : \textup{Sin}_p(X) \to \textup{Sin}_{p-1}(X)$ defined by $$ d_i (\sigma) = \sigma \circ \delta^i. $$ 

*Example.* $\ \text{}$ $\Delta^1$ has two faces, which are endpoints of the interval; $\Delta^2$ has three faces, which are the three edges of a triangle; $\Delta^3$ has four faces, which are the triangles of in the boundary of a solid tetrahedron.

*Example.* $\ \text{}$ A $0$-simplex in a space $X$ is a point in $X$. By the homeomorphism $\Delta^1 \cong I$, a $1$-simplex in $X$ is a path in $X$, and the $0$-simplex **faces** $d_0(\sigma)$ and $d_1(\sigma)$ are just the two endpoints of the path.

>[!abstract] Lemma: 
>For $0 \leq i < j \leq p$, we have $\delta^j\delta^i = \delta^i \delta^{j-1} : \Delta^{p-2} \to \Delta^p$.

*Proof from [[MATH-GU4053|Algebraic Topology]].*

Both maps send a point $(t_0, \ldots, t_p{-2}) \in \Delta^p$ to $$(t_0, \ldots, t_{i-1}, 0 , t_i, \ldots, t_{j-2}, 0, t_{j-1}, \ldots, t_{p-2}). $$ $\ \square$

---
# Singular chains

>[!example] Definition: Singular $p$-chains
>For an integer $p \geq 0$ and a topological space $X$, a **singular $p$-chain** or **$p$th singular chain group** in $X$ is a formal linear combination of singular $p$-simplices in $X$, which are continuous maps $\sigma: \Delta^p \to X$. The set of all singular $p$-chains is simply the [[Abelian groups|free abelian group]] with basis $\textup{Sin}_p(X)$, i.e., the set of finite linear combinations of elements of $\textup{Sin}_p(X)$ with coefficients in $\mathbb Z$, and denoted 
>$$  C_p (X) = \mathbb Z \textup{Sin}_p(X) = \left \{ \sum_{\sigma : \Delta^p \to X} n_\sigma \cdot \sigma \ : \ n_\sigma = 0 \in \mathbb Z \text{ for all but finitely many } \sigma \right \}. $$

💬 *Remark.* $\ \text{}$ Any $p$-simplex in a space $X$, i.e., a continuous map $\sigma : \Delta^p \to X$, is a $p$-chain. A general $p$-chain is a $\mathbb Z$-linear combination of $p$-simplices.

>[!example] Definition: Boundary operator
>The **boundary operator** is the [[Group homomorphisms and isomorphisms|group homomorphism]] $\partial : C_p(X) \to C_{p-1}(X)$ defined by $$ \partial \sigma = \sum_{i=0}^p (-1)^i d_i(\sigma) $$ for all standard $p$-simplices $\sigma \in \textup{Sin}_p(X)$.
>
>Using the fact that functions out of a base space can be extended to homomorphisms out of [[Abelian groups|free abelian group]], for a general chain $c=\sum_\sigma c_\sigma \sigma$ we can define $$\partial c = \sum_{\sigma} \sum_{i=0}^p (-1)^i c_\sigma d_i(\sigma). $$ This is equivalent to defining the general boundary operator by specifying its values on [[Vector bases and dimension|basis]] elements.

💬 *Remark.* $\ \text{}$ The same notation $\partial$ is typically used for all $p$, though, e.g., Hatcher specifies $\partial_p : C_p(x) \to C_{p-1}(X)$.

- Note that signs are inserted to account for orientation and coherent oritnations

>[!abstract] Lemma
>The composition $$ \partial^2 = \partial \circ \partial : C_p(X) \to C_{p-1}(X) \to C_{p-2}(X) $$ is the trivial homomorphism.

*Proof from [[MATH-GU4053|Algebraic Topology]].*

To prove that $\partial^2$ maps $c \mapsto 0 \in C_{p-2}(X)$ for any chain $c \in C_p(X)$, it suffices to show this on a [[Vector bases and dimension|basis]], i.e., $\partial^2\sigma = 0$ for all *singular* chains $\sigma \in \textup{Sin}_p(X)$. 

>[!abstract] Corollary: Image is contained in the kernel

---

# Singular homology

>[!example] Definition: Cycle, boundary
>The kernel of the [[Group homomorphisms and isomorphisms|group homomorphism]] $\partial_p : C_p(x) \to C_{p-1}(X)$ is denoted $$ Z_p(X) = \ker\partial_p \subset C_p(X); $$ elements of this kernel are called $p$**-cycles** in $X$. 
>
>The image of the group homomorphism $\partial_{p+1} : C_{p+1}(X) \to C_p(X)$ is denoted $$ B_p(X) = \textup{Im} \ \partial_{p+1} \subset C_p(X); $$ elements of this image are called **boundaries**.

*Example.* 


>[!example] $p$th singular homology group, homologous
>The **$p$th singular homology group** of $X$ is the abelian group formed by the quotient of the $p$-cycles by boundaries in $X$:
>$$ H_p(X) = Z_p(X) / B_p(X) = \frac{\ker(\partial_p : C_p(X) \to C_{p-1}(X))}{\textup{Im}(\partial_{p+1} : C_{p+1}(X) \to C_p(X))}. $$
>Alternatively, two cycles $c,c’ \in C_p(X)$ are **homologous** if their difference is a boundary, i.e., there exists $\alpha \in C_{p+1}(X)$ such that $$ \partial \alpha = c - c’ \in B_p(X). $$ Thus, $H_p(X)$ is the group of $p$-cycles modulo the relation of being homologous.

---
# Examples

#### Singular homology groups of the one-point space

Let $X = \{ * \}$ be the one-point space. We have:
- The set of singular simplices $\textup{Sim}_p(X)$ is the one-point *set* of the constant map $\{ c : \Delta^0 \to X \}$.
- The set of singular chains $C_p(X)$ is isomorphic to $\mathbb Z$ for all $p$ via the mapping $n \mapsto n \cdot c$ for all $n \in \mathbb Z$.
- The boundary operator $\partial : C_p(X) \to C_{p-1}(X)$ is defined by $$ n \cdot c \mapsto n \cdot (c - c + c - \cdots) , $$ which is $0$ for even $p$.

(z when p=0 and 0 otherwise)

eAch $C_i(X) \cong \mathbb Z$
Similar method for each discrete top. space

$$C_3(X) \to_{0} C_2(X) \to_\text{id} C_1\to_{\partial = 0} C_0(X) $$

$$H_0(X) = \frac{\ker \partial_0}{\textup{Im} \ \partial_1} = \frac{C_0(X)}{0} \cong \mathbb Z

$$ $$ H_1(X) = \frac{\ker\partial_1}{\textup{Im} \ \partial _2} = \frac{C_1(X)}{C_1(X)} \cong 0 $$
$$ H_2(X) = \frac{\ker \partial_2}{\textup{Im} \ \partial_3} = \frac{0}{0} = 0. $$



#### $H_0(X)$ for a path-connected space is always infinite cyclic

>[!abstract] Proposition: The zeroth singular homology group for a [[(Path-)connectedness|path-connected]] space is isomorphic to the integers
>Given any space $X$, we have $$ H _0 (X) \cong \mathbb Z \iff X \text{ path-connected}. $$

*Proof from [[MATH-GU4053|Algebraic Topology]].*

($\impliedby$) By definition, $$ H_0(X) = \frac{\ker(\partial_0 : C_0 (X) \to 0) }{\textup{Im}(\partial_1 : C_1(X) \to C_0(X)) } = \frac{C_0(X)}{\textup{Im} \ \partial_1}, $$where the final quotient is the **cokernel** of $\partial_1$. #wip something to do with the one-point space? Define a map $\varepsilon : H_0(X) \to \mathbb Z$ by adding up coefficients $$ \left [  \sum_{x \in X} n_x \cdot x \right ] \mapsto \sum_{x \in X}n_x. $$ 
Our goal is to show that this map $\varepsilon$ is a [[Group homomorphisms and isomorphisms|group isomorphism]]:
- **Well-definedness:** 
- **Surjectivity:**
- **Injectivity:** The claim is that for any two $x, x’ \in X$ such that $[x], [x’] \in H_0(X)$, we have $[x] = [x’]$. Using the fact that $I \cong \Delta^1$, by [[(Path-)connectedness|path-connectedness]] of $X$ we can choose $\sigma : \Delta^1 \to X$ such that $\sigma(0, 1) = x$ and $\sigma (1, 0) = x’$, so $$ \partial \sigma = d_0\sigma - d_1 \sigma = x - x' \implies [x] = [x']. $$

#### $H_1(X)$ for a path-connected space

[[2025-02-25]]

---
# Notes

```
\partial_p : C_p(X) \to C_{p-1}(X)
```