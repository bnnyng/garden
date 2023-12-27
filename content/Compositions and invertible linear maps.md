---
aliases:
  - invertible
  - composition
  - composite
  - inverse
  - left invertible
  - right invertible
tags:
  - permanent-note
  - topic-mathematics-and-logic
publish: "true"
---
# Overview

**Compositions** are sequential [[Linear maps|linear transformations]] such that the codomain of the first transformation is the domain of the second. The result of taking a composite is also a linear transformation.

Most generally, **inverses** are linear maps which “undo” another map. An invertible linear map is also called an [[Isomorphism]].

---
# Compositions of linear maps

- *(Lemma 51)* If $A : V \to W$ and $B : W \to U$ are linear maps, then the composite $(BA) : V \to U$ defined by $(BA)(v) = B(Av)$ is also linear.
- *(Lemma 52)* Compositions of linear maps have the following arithmetic properties:
	- (i) If  $A : V \to W$, $B : W \to U$, and $C : U \to X$ are linear maps between vector spaces, then $C(BA) = (CB)A$.
	- (ii) If $A: V \to W$ is a linear map, then $A1_V = A = 1_W A$.
	- (iii) If $A : V \to W$ is a linear map and $U$ is any other **vector space**, then $0_{W,U}A = 0_{V,U}$ and $A0_{U,V} = 0_{U,W}$.

---
# Inverses

>[!example] Definition: Invertible
>If $A : V \to W$ is a linear map, we say that
>- $A$ is **right invertible** if there exists a linear map $B : W \to V$ so that $AB = 1_W$.
>- $A$ is **left invertible** if there exists a linear map $B : W \to V$ so that $BA = 1_V$.
>- $A$ is **invertible** if there exists a linear map $B : W \to V$ so that $AB = 1_W$ and $BA = 1_V$. We write $B = A^{-1}$.

- [[(Theorem) Invertible matrix theorem]]

#wip examples of invertible maps