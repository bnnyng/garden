---
aliases:
  - matrix multiplication
  - matrix product
tags:
  - permanent-note
  - topic-logic-mathematics
date: 2022-11-16
lastmod: 2023-12-28T18:17:56-08:00
---
# Overview

The **matrix product** is the [[Different perspectives of matrices|matrix]] representing the [[Compositions and invertible linear maps|composite]] of two linear maps.

---
# Composites

- The linear map $A_N : \mathbb F^n \to \mathbb F^m$ corresponds to the $m \times n$ matrix
$$ N = \begin{pmatrix} b_{11} \ \cdots \ b_{1n} \\ \cdots \ \cdots \ \cdots \\ b_{m1} \ \cdots \ b_{mn} \end{pmatrix} =
\begin{pmatrix} \mid \ \cdots \ \mid \\ 
v_1 \ \cdots \ v_n \\ 
\mid \ \cdots \ \mid \end{pmatrix}. $$
- The linear map $A_M : \mathbb F^m \to \mathbb F^l$ corresponds to the $l \times m$ matrix
$$ M = \begin{pmatrix} a_{11} \ \cdots \ a_{1m} \\ \cdots \ \cdots \ \cdots \\ a_{l1} \ \cdots \ a_{lm} \end{pmatrix} =
\begin{pmatrix} \textemdash \ f_i \ \textemdash \\ 
\cdots \ \cdots \ \cdots \\ 
\textemdash \ f_m \ \textemdash \end{pmatrix}. $$
- Their composite defines a linear map $A_MA_N : \mathbb F^n \to \mathbb F^m \to \mathbb F^l$, which is associated with some $l \times n$ matrix.
$$ MN = \begin{pmatrix} f_1v_1 \ \cdots \ f_1v_n \\ 
\cdots \ \cdots \ \cdots \\ 
f_lv_1 \ \cdots \ f_lv_n \end{pmatrix} $$

----

# Matrix product

- *(Definition 32)* Given an $l \times m$ matrix $M$ and an $m \times n$ matrix $N$, then their **matrix product** is the $l \times n$ matrix $MN$ whose entries $MN_{ij}$ are obtained by **pairing** the $i$th row of $M$ to the $j$th column of $N$.
$$MN_{ij} = (a_{i1} \ \cdots \ a_{im}) 
\begin{pmatrix} b_{1j} \\ \cdots \\ b_{mj} \end{pmatrix} = 
a_{i1}b_{1j} + \cdots + a_{im}b_{mj}. $$
- *(Theorem 63)* **Matrix multiplication is composition.** If $M$ is an $l \times m$ matrix and $N$ is an $m \times n$ matrix, and we have the [[Compositions and invertibility|composite]] of two linear maps $A_MA_N : \mathbb F^n \to \mathbb F^l$, then we have $A_{MN} = A_MA_N$. 
- Given linear maps $A,B : V \to W$:
	- **Left-equivalent.** There exists an [[Invertibility|invertible]] map $S : W \to W$ so that $SA = B$ $\iff \text{ker}(A) = \text{ker}(B)$.
	- **Right-equivalent.** There exists an invertible map $T : V \to V$ so that $AT = B$ $\iff \text{im}(A) = \text{im}(B)$.
	- **LR-equivalent.** There exist invertible maps $S,T$ so that $SAT = B$ $\iff \text{rank}(A) = \text{rank}(B)$. 