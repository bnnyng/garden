---
aliases:
  - "#MATH-UN1207"
  - Honors Mathematics A
title: Class | Honors Mathematics A
publish: "true"
tags:
  - topic-logic-mathematics
---
# Overview

*Columbia University, Fall 2022* – *Mike Miller Eismeier* – [Syllabus](http://math.columbia.edu/~mmiller/honors-a-syllabus.pdf) – [Course notes](http://math.columbia.edu/~mmiller/Honors-notes.pdf)

>[!example] Course description
>The Honors Math sequence covers linear algebra and multivariable calculus with a rigorous, proofbased approach. In addition to the course content itself, the Honors sequence hopes to develop your skills as proofwriters who can clearly communicate the idea of why things are true, in addition to the usual computational content of introductory classes in calculus and linear algebra. 
> 
> Honors Math A is a course in proof-based linear algebra. We will first discuss mathematical logic, then the idea of sets and functions, before moving on to linear algebra from both abstract and concrete perspectives. No calculus is used except as a source of examples.

---
# Main definitions and theorems

## Vector spaces and subspaces
- *(Lemma 38)* **Basis extension lemma.** If $S = \{v_1, \cdots, v_n\}$ is any [[Linear independence|linearly independent]] set for a **finite-dimensional** vector space $V$, there is a larger set $S^{\prime} = \{v_1, \cdots, v_n, w_1, \cdots, w_m\}$ which is a **basis** for $V$ (with $k = 0$ if $\text{span}(S) = V$).
- *(Midterm, Problem 6)* If two subspaces $U,W \subset V$ are **complementary** (i.e., $U,W$ **intersect trivially** so that $U \cap W = \{\vec 0\}$, then $\text{dim}V = \text{dim}U + \text{dim}W = \text{dim}(U+W)$. 
	- *(Sample Final 1, Problem 2)* For all $v \in V$, there exist **unique** $u \in U$ and $w \in W$ so that $v = u + w$.

## Linear maps
- *(Theorem 45)* **Linear maps are determined by their values on a basis.** Given a basis for a vector space $\{v_1, \cdots, v_n\} \subset V$ and a list of vectors $(w_1, \cdots, w_n) \subset W$, there exists a **unique linear map** $A : V \to W$ for which $Av_i = w_i$ for all $1 \leq i \leq n$. 
- *(Theorem 49)* **[[(Theorem) Rank-nullity|Rank-nullity]].** If $A : V \to W$ is a linear map between **finite-dimensional** vector spaces, we have: 
$$\text{rank}(A) + \text{null}(A) = \text{dim}(V).$$
- *(Corollary 50)* Following the **rank-nullity theorem**, we have:
	- $A \text{ is injective} \implies \text{dim}(V) \leq \text{dim}(W)$
	- $A \text{ is surjective} \implies \text{dim}(V) \geq \text{dim}(W)$
	- $A \text{ is bijective} \implies \text{dim}(V) = \text{dim}(W)$
- *(Proposition 53)* Given a linear map $A : V \to W$:
	- If $A$ is **right invertible**, then $A$ is [[Injectivity, surjectivity, and bijectivity|surjective]]
	- If $A$ is **left invertible**, then $A$ is **injective**.
	- If $A$ is **invertible**, then $A$ is **bijective**.
- *(Corollary 57)* **[[(Theorem) Invertible matrix|Invertible map theorem]].** If $A : V \to W$ is a linear map between two vector spaces of the same [[Bases and dimension|dimension]], then 
$$ A \text{ is invertible} \iff A \text{ is injective, so } \text{ker}(A) = 0 \iff A \text{ is surjective.} $$

## Gauss-Jordan algorithm
- *(Proposition 70)* If $M$ is an $m \times n$ matrix and $b \in \mathbb F^m$ is a vector (i.e., an $m \times 1$ matrix), and $M^\prime$ and $b^\prime$ are obtained by performing the same **elementary row operation**, then $A_Mx = b \iff A_{M^\prime}x = b^\prime.$
- *(HW6, Problem 4)* A $n \times n$ matrix $M$ is [[Invertibility|invertible]] $\iff \text{rref}(M) = I_n$, the [[Identity and zero map|identity matrix]].
- *(HW6, Problem 5)* **Algorithm to compute the inverse of a matrix.** Let $M$ be an $n \times n$ matrix. Perform the [[Algorithmically solving systems of equations|Gauss-Jordan algorithm]] on the **pair** $(M \mid I_n)$ until $(\text{rref}(M) \mid N)$ is reached for some matrix $N$. Then $M$ is **invertible** *if and only if* $\text{rref}(M) = I_n$, in which case the **inverse** $M^{-1} = N$. 
	- Following *Proposition 70*, If a **pair** $(M \mid b)$ has solution $x$, then $(M^\prime \mid b^\prime)$ has the same solution $x$. 
	- If $M$ invertible, **GJA** transforms the system $(M \mid e_j)$ into $(\text{rref}(M) \mid v_j) = (I_n \mid v_j)$, so $v_j$ is some unique vector with $Mv_j = e_j$.
	- The vector $v_j$ is thus the $j$'th column of $N$.

## Matrices with respect to a basis
- *(Proposition 74)* The **transition maps** satisfy the following properties:
	- For any basis $\beta$ of $V$, we have $\phi_{\beta \to \beta} = I$ is the [[Identity and zero map|identity map]] $\mathbb F^n \to \mathbb F^n$.
	- For any two bases $\beta, \beta^\prime$ of $V$, we have $\phi_{\beta \to \beta^\prime}^{-1} = \phi_{\beta^\prime \to \beta}$.
	-  For any three bases $\beta, \beta^\prime, \beta^{\prime \prime}$, we have $\phi_{\beta^\prime \to \beta^{\prime \prime}}\phi_{\beta \to \beta^\prime} = \phi_{\beta^\prime \to \beta^{\prime \prime}}$.
- *(Proposition 75)* Let $A : V \to W$ be a **linear map**, and *choose* bases $\beta_V, \beta_V^\prime$ for $V$ and $\beta_W, \beta_W^\prime$ for $W$. Then the **matrix representation of** $A$ with *respect to two bases* is given by
$$
[A]_{\beta_V^\prime \to \beta_W^\prime} = 
\phi_{\beta_W \to \beta_W^\prime}
[A]_{\beta_V \to \beta_W}
\phi_{\beta_V^\prime \to \beta_V}.
$$

## Determinants
- *(Theorem 80)* **The determinant is well-behaved under [[Composition and matrix multiplication|matrix multiplication]].** If $M$ and $N$ are $n \times n$ matrices, then $\text{det}(MN) = \text{det}(M)\text{det}(N)$.
	- If $M$ is [[Invertibility|invertible]], $\text{det}(M) \neq 0$ and $\text{det}(M^{-1}) = \text{det}(M)^{-1}$.
- *(Theorem 85)* **Determinant changes with [[Algorithmically solving systems of equations|elementary row or column operations]].**
	- If $M^\prime$ is obtained by **swapping** two rows or two columns of $M$, then $\text{det}(M^\prime) = -\text{det}(M)$.
	- If $M^\prime$ is obtained by **scaling** a row or column of $M$ by $c$, then $\text{det}(M^\prime) = c\text{det}(M)$.
	- If $M^\prime$ is obtained by **adding a multiple** of one row or column of $M$ to another, then $\text{det}(M^\prime) = \text{det}(M)$.

## Eigen(things)
- *(Lemma 94)* If $\lambda_1, \cdots, \lambda_k$ are the **eigenvalues** of $A: V \to V$, then the subspaces $E_{\lambda_1}, \cdots, E_{\lambda_k}$ are **independent**, so we have $E_{\lambda_i} \cap (E_{\lambda_1} + \cdots + E_{\lambda_{i-1}}) = \{ \vec 0 \}$ for all $1 \leq i \leq k$.
- *(Lemma 95)* If $W_1, \cdots, W_k \subset V$ are **independent subspaces**, then $\text{dim}(W_1 + \cdots + W_k) = \text{dim}(W_1) + \cdots + \text{dim}(W_k)$. Furthermore, the separate bases for $W_1, \cdots, W_k$ can be combined to form a basis for $W_1 + \cdots + W_k$.
- *(Theorem 97)* A linear map $A: V \to V$ is **diagonalizable** *if and only if* its **characteristic polynomial** $p_A(\lambda)$ can be **split into linear factors**, and $\text{dim}E_{\lambda_i} =$ the **algebraic multiplicity** of $\lambda_i$ for every **eigenvalue** $\lambda_i$.
- *(Corollary 98)* If $A: V \to V$ is a linear map with $n = \text{dim}V$ distinct eigenvalues $\lambda_1, \cdots, \lambda_n \in \mathbb F$, then $A$ is **diagonalizable.**
- *(Corollary 100)* If $A: V \to V$ is a linear map for some vector space $V$ over the **algebraically closed field** $\mathbb F$, then $A$ has *an* **eigenvector**; that is, there exists some $v \neq \vec 0$ and $\lambda \in \mathbb F$ so that $Av = \lambda v$.

## Inner product spaces
- *(Definition 54)* If $V$ is an **inner product space**, the **norm**, or magnitude, is a *function* $|| \cdot || : V \to [0, \infty)$ defined by $\sqrt{\langle v, v \rangle} \in [0, \infty)$.
- *(Lemma 102)* The **norm** on an **inner product space** satisfies the following properties:
	- (N1) $\| v \| \geq 0$, and $\|v\| = 0 \iff v = \vec 0$.
	- (N2) $\|cv\| = |c| \|v\|$
	- (N3) $\|v + w \|^2 = \|v\|^2 + \|w\|^2 + 2\text{Re} \langle v,w \rangle$
		- In particular, $\|v + w \|^2 = \|v\|^2 + \|w\|^2 \iff \langle v, w \rangle$ has no *real* part. 

## Orthogonality and orthonormal bases
- *(Definition 57)* An **orthonormal list of vectors** in a *finite-dimensional* **inner product space** $V$ is a list of vectors $(v_1, \cdots, v_k)$ for which $\|v_i \|^2 = 1$ and $v_1 \cdot v_j = 0$ for all $i \neq j$.
- *(Lemma 106)* If $(v_1, \cdots, v_k)$ is an **orthonormal list**, it is [[Linear independence|linearly independent]].
- *(Proposition 107)* **Orthonormal basis extension.** If $V$ is a *finite-dimensional* **inner product space**, every list of **orthonormal vectors** in $(v_1, \cdots, v_k) \subset V$ can be extended to an **orthonormal basis** for $V$.

## Transpose and dot product
- *(Proposition 113)* If $A : \mathbb F^n \to \mathbb F^m$ is a linear map, we have $\text{ker}(A^*) = \text{im}(A)^\perp$ and $\text{im}(A^*) = \text{ker}(A)^\perp$.

## Maps between inner product spaces
- *(Definition 59)* If $V$ is an [[Inner product spaces|inner product space]], an **isometry** is an [[Invertibility|invertible]] linear map $A : V \to V$ with $\langle Av_1, Av_2 \rangle = \langle v_1, v_2 \rangle$ for all $v_1, v_2 \in V$.
	- If $V = \mathbb R^n$ is a *real* inner product space, $A$ is called an **orthogonal transformation** and has a corresponding $n \times n$ **orthogonal matrix**. The set of **orthogonal matrices** is denoted $O(n)$.
	- If $V = \mathbb C^n$ is *complex*, $A$ is called an **unitary transformation** and has a corresponding $n \times n$ **unitary matrix.** The set of **unitary matrices** is denoted $U(n)$.
- *(Proposition 115)* If $A : V \to V$ is a linear map of a *finite-dimensional* **inner product space**, then the following are equivalent:
	- $A$ is an **isometry**.
	- $A$ preserves [[Inner product spaces|norms]]; for all $v \in V$, we have $\|Av \| = \|v \|$.
	- $A$ satisfies the equation $A^*A = I$.
	- If $V = \mathbb F^n$ and $A$ corresponds with an $n \times n$ matrix, then the **columns** of $A$ form an [[Orthogonal complements|orthonormal basis]] for $\mathbb F^n$.
- *(Lemma 118)* **Inner product and symmetric/Hermitian matrices.** 
	- A *real* matrix is **symmetric** and a *complex* matrix is **Hermitian** *if and only if* for all $v,w \in V$, we have $\langle Mv, w \rangle = \langle v, Mw \rangle$. 
	- A *real* matrix is **skew-symmetric** and a *complex* matrix is **skew-Hermitian** *if and only if* for all $v,w \in V$, we have $\langle Mv, w \rangle = -\langle v, Mw \rangle$. 
- *(Proposition 119)* The [[Diagonal matrices and eigen(things)|eigenvalues]] of a **symmetric** or **Hermitian** matrix are all *real*, so that its [[Diagonal matrices and eigen(things)|characteristic polynomial]] splits into *linear factors* over $\mathbb R$. The **eigenvalues** of a **skew-** matrix are all *imaginary*.
