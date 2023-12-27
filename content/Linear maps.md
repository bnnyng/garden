---
aliases:
  - linearity
  - linear map
  - linear transformation
  - affine function
tags:
  - permanent-note
  - topic-mathematics-and-logic
---
# Overview

**Linear maps** are functions that send elements from one [[Axioms for fields and vector spaces|vector space]] to another in a way that is compatible with the [[Axioms for fields and vector spaces]]. 

**Linearity** is ubiquitous, meaning addition and scaling can be applied before or after the linear transformation without changing the result.

Linear maps are defined with respect to a [[Bases and dimension|basis]]. One upshot of this fact is that equality can be checked with a finite list of vectors.

---
# Linearity

>[!example] Definition: Linear map
>If $V,W$ are vector spaces over the field $\mathbb F$, a **linear map** (i.e., linear transformation, linear operator) from $V$ to $W$ is a function $A: V \to W$ with the following properties:
>- (L1) **$A$ respects addition**. For all $v_1,v_2 \in V$, $A(v_1+v_2) = A(v_1) + A(v_2)$
>- (L2) **$A$ respects scaling.** For all $v \in V$ and $c \in \mathbb F$, $A(cv) = cA(v)$.

Every linear function $f : \mathbb F^n \to F$ for some $a_1, \cdots , a_n \in \mathbb F$ takes the form 
$$ f\begin{pmatrix} x_1 \\ \cdots \\  x_n\end{pmatrix} = a_1x_1 + \cdots + a_nx_n.$$

Properties of linear maps include:
- *(Lemma 44)* If $A : V \to W$ is a linear map, we have $A(\vec 0) = \vec 0.$
	- Informally, this means linear maps do not have constant terms. A function in the form $f(x) = ax + b$ for $b \neq 0$ is an **affine function**.
- [[(Theorem) Linear maps are determined by their values on a basis]]

---
# Examples of linear maps

- Rotation
- Differentiation and integration
- Identity map

#wip Make notes for each of these examples