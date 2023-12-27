---
aliases:
  - image
  - kernel
  - rank
  - nullity
tags:
  - permanent-note
  - topic-mathematics-and-logic
publish: "true"
---
# Overview

The **image** and **kernel** are two [[Axioms for fields and vector spaces|subspaces]] associated with a [[Linear maps|linear map]].

---
# Images and kernels of linear maps

Let $A : V \to W$ be [[Linear maps|linear]].

>[!example] Definition: Image
>The **image** of $A$ is what $A$ the set of all vectors "traced out" by plugging vectors into the map.
$$\text{im}(A) = \{  Av \mid v \in V \} = \{w \in W \mid \exists_{v \in V} Av = w \} \subset W $$

We can compare this definition of the image with its “[[Algebra of functions|set-theoretic]]” counterpart: the image is the set of all vectors produced by the linear function.

>[!example] Definition: Kernel
>The **kernel** of $A$ is the set of all vectors sent to zero by $A$.
>$$ \text{ker}(A) = A^{-1}(\vec 0) = \{v \in V \mid Av = \vec 0 \} \subset V $$

In other words, the kernel is the set of vectors for which the information carried by $v \in V$ is lost when passed to $W$.

The image and kernel have the following properties:
- *(Lemma 46)* If $A : V \to W$ is [[Linear maps|linear]], then $\text{ker}(A) \subset V$ and $\text{im}(A) \subset W$ are indeed subspaces.
- *(Lemma 47)* If $A : V \to W$ is linear, then $A$ is [[Algebra of functions|injective]] **if and only if** $\text{ker}(A) = \{\vec 0 \}$.
	- Analogous:  $A \text{ is surjective} \iff A = W$.
- *(Lemma 48)* If $A : V \to W$ is injective and $\{v_1, \cdots, v_n\} \subset V$ is linearly independent, then $\{Av_1, \cdots, Av_n\} \subset W$ is linearly independent. 

---
# Examples of image and kernel

#wip

---
# Rank and nullity

>[!example] Definition: Rank and nullity 
>Let $A : V \to W$ be [[Linear maps|linear]].
>- The **rank of $A$** is the [[Bases and dimension|dimension]] of its **image**; $\text{rank}(A) = \text{dim im} (A)$.
>- The **nullity of $A$** = dimension of its **kernel**; $\text{null}(A) = \text{dim ker}(A).$

- [[(Theorem) Rank-nullity]]

