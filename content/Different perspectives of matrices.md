---
aliases:
  - matrix
  - matrices
  - projection
  - row vector
  - column vector
  - row perspective
  - column perspective
tags:
  - permanent-note
  - topic-logic-mathematics
---
# Overview

**Matrices** are used to visualize [[Linear maps|linear transformations]]. In particular, an $m \times n$ matrix corresponds to a linear map from an $n$-dimensional space to an $m$-dimensional space.

There are three perspectives for understanding matrices. The “entries” perspective is a computation of the “row” and “column” perspectives.

The column perspective emphasizes that the columns of matrix $M$ tell you where $A_M : F^n \to \mathbb F^m$ sends a [[Bases and dimension|standard basis]] vector $e_i \in \mathbb F^n$. Each column of a $M$ is a vector $v_j = A_Me_i \in F^m$. 
$$ M = \begin{pmatrix} \mid \ \cdots \ \mid \\ 
v_1 \ \cdots \ v_n \\ 
\mid \ \cdots \ \mid \end{pmatrix} $$

The row perspective emphasizes that the row of matrix $M$ give individual entries of the output $p_iA_M : \mathbb F^n \to \mathbb F$. Each row is a linear function $f_1, \cdots, f_m : \mathbb F^n \to \mathbb F$, and the $i$th component of $A_M(v)$ is $f_i(v) = p_iA_M(v)$. 

$$ M = \begin{pmatrix} \textemdash \ f_i \ \textemdash \\ 
\cdots \ \cdots \ \cdots \\ 
\textemdash \ f_m \ \textemdash \end{pmatrix} $$

A particular entry of $M$ is therefore the $i$th component of a column vector, given by $a_{ij} = p_i(A_Me_j)$. Explicitly, $p_i$ is a linear function called the **projection to the $i$th coordinate**. The entry perspective is useful for matrix multiplication.

---
# Matrix definition

>[!example] Definition: Matrix
>An $m \times n$ **matrix** over the [[Axioms for fields and vector spaces|field]] $\mathbb F$ is a two-dimensional array $M$ containing elements of $\mathbb F$ which as $m$ rows and $n$ columns. $$ M = \begin{pmatrix} a_{11} \ \cdots \ a_{1n} \\ 
\cdots \ \cdots \ \cdots \\ 
a_{m1} \ \cdots \ a_{mn} \end{pmatrix} $$ The The entry in row $i$ and column $j$ of the matrix is denoted $a_{ij} \in \mathbb F$.

Two matrices $M, M^\prime$ are equal if they are both $m \times n$ and all entries $M_{ij} = M^\prime_{ij}$.

In terms of matrices, a linear map is explicitly a transformation  $A_M : \mathbb F^n \to \mathbb F^m$ associated with some matrix, defined by $$ A_M \begin{pmatrix}x_1 \\ \cdots \\ x_n \end{pmatrix} = 
\begin{pmatrix} a_{11}x_1 + \cdots + a_{1n}x_n \\
\cdots \\
a_{m1}x_1 + \cdots + a_{mn}x_n \end{pmatrix}. $$
---
# The column perspective

$$ M = \begin{pmatrix} \mid \ \cdots \ \mid \\ 
v_1 \ \cdots \ v_n \\ 
\mid \ \cdots \ \mid \end{pmatrix} $$

The underlying idea behind the “column perspective” is that linear maps are determined by what they do to a [[Bases and dimension|basis]]. Thus, to understand what $A_M$ does to $\mathbb F^n$, we compute $A_M e_j$ for each vector in the standard basis $(e_1, \cdots, e_n)$. 

- *(Lemma 58)* If $M$ is an $m \times n$ matrix, then $A_Me_j$ is the $j$th column of $M$ so that
$$ A_Me_j = 
A_M \begin{pmatrix}0 \\ \cdots \\ x_j = 1 \\ \cdots \\ 0 \end{pmatrix} = 
\begin{pmatrix} a_{11}(0) + \cdots + a_{1j}(1) + \cdots + a_{1n}(0) \\
\cdots \\
a_{m1}(0) + \cdots + a_{mj}(1) + \cdots + a_{mn}(0) \end{pmatrix} = 
\begin{pmatrix} a_{1j} \\ a_{2j} \\ \cdots \\ a_{mj} \end{pmatrix}. $$
- If $x$ is a general vector, then $A_Mx$ is a linear combination of the columns of $A$ with "weights" provided by the entries of $x$.
$$ A_Mx = A_M(x_1e_1 + \cdots + x_ne_n) = x_1A_Me_1 + \cdots + x_nA_Me_n =
x_1v_1 + \cdots + x_nv_n$$

- *(Corollary 59)* If $M$ is an $m \times n$ matrix with columns $v_1, \cdots, v_n$, then the associated linear map $A_M : \mathbb F^n \to \mathbb F^m$ has:
	- $\text{im}(A_M) =$ the span of all columns, $\text{span}(v_1, \cdots, v_n)$
	- $\text{ker}(A_M) =$ the set of linear relations between the columns, $\text{Rel}(v_1, \cdots, v_n)$
	- Further, by [[(Theorem) Rank-nullity|rank-nullity]], $\text{rank}(A_M) =$ the # of non-redundant columns, and $\text{null}(A_M) =$ the # of redundant columns.
- *(Corollary 60)* If $A_M : \mathbb F^n \to \mathbb F^m$ is any linear map, then there exists a *unique* $m \times n$ matrix $M$ so that $A = A_M$.
	- In other words, matrices and linear maps are a "dictionary"; any linear map can be "worked with" in the language of matrices.

---
# The row perspective

$$ M = \begin{pmatrix} \textemdash \ f_i \ \textemdash \\ 
\cdots \ \cdots \ \cdots \\ 
\textemdash \ f_m \ \textemdash \end{pmatrix} $$

A **row vector** is a $1 \times n$ matrix corresponding to a linear function $f: \mathbb F^n \to \mathbb F$. Its entries are number outputs $f(e_j)$ for each $j$. #wip in what?

Given such a row vector, as well as a column vector $\vec v \in \mathbb F^n$, the pairing $f(\vec v)$ of the two vectors is given by $$  f(\vec v) =  (a_1 \cdots a_n) \begin{pmatrix} x_1 \\ \cdots \\ x_n \end{pmatrix} = 
a_1x_1 + \cdots + a_nx_n. $$
---
# The entry perspective

>[!example] Definition: Coordinate projection
>The **projection to the $i$th coordinate** is a linear function $p_1, \cdots, p_n : \mathbb F^n \to \mathbb F$ defined by $$p_i \begin{pmatrix} x_1 \\ \cdots \\ x_n \end{pmatrix} = 
(0 \ \cdots \ a_1 = 1 \ \cdots \ 0 ) \begin{pmatrix} x_1 \\ \cdots \\ x_n \end{pmatrix} = x_i.$$ That is, the projection outputs the value of the $i$th coordinate.

- *(Lemma 61)* If $A_M : \mathbb F^n \to \mathbb F^m$ is the linear map associated with an $m \times n$ matrix $M$, then for $1 \leq i \leq m$, the $i$th row of $M$ is the **row vector** $(a_{i1} \ \cdots \ a_{in})$ corresponding to the linear map $p_i A_M : \mathbb F^n \to \mathbb F^m\to \mathbb F$. $$p_i A_M\begin{pmatrix} x_1 \\ \cdots \\ x_n \end{pmatrix} = a_{i1}x_1 + \cdots a_{in}x_n $$

- *(Lemma 62)* If $M = (a_{ij})$ is an $m \times n$ matrix and $A_M : \mathbb F^n \to \mathbb F^m$ is an associated linear map, then the particular entry $a_{ij} = p_i(A_Me_j)$. 
	- The entry $a_{ij}$ is the $i$th component of the column vector $A_Me_j$.