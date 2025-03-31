---
aliases:
  - group
  - subgroup
  - coset
  - coset space
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🟠
publish: "true"
date: 2024-11-18 21:29
lastmod: 2025-03-25T09:28:49-04:00
---
# Overview and basic definition

>[!example] Definition: Group
>A **group** is a set $G$ equipped with a map $\circ : G \times G \to G$, called **multiplication** or **product**, which satisfies the following:
>- (i) **Associativity:** $(g \circ h) \circ k = g \circ (h \circ k)$ for all $g, h, k \in G$;
>- (ii) **Identity:** there exists an identity element $e \in G$ such that $g \circ e = e \circ g$ for any $g \in G$;
>- (iii) **Inverses:** for all $g \in G$, there exists $g^{-1} \in G$ such that $g \circ g^{-1} = e$.
>
>If $G$ has finitely many elements, we call $G$ the **order** of the group $G$. We say $G$ is **trivial** in the case that $G = \{ e\}$.

^58ba13

Relevant theorems:
- [[(Theorem) Lagrange]]

**Related notes:**
- [[Group homomorphisms and isomorphisms]]
- [[Abelian groups]]
- [[Normal subgroups and quotient groups]]

---
# Subgroups and cosets

>[!example] Definition: Subgroup
>A **subgroup** of a group $G$ is any subset $H \leq G$ which satisfies the following:
>- (i) **Closure under the group operation:** if $a, b \in H$, then $ab\in H$.
>- (ii) **Inverses and identity:** for all $a \in H$, there exists an inverse $a^{-1} \in H$ such that $aa^{-1} = e$. 

>[!example] Definition: Left and right cosets, coset space
>Given a subgroup $H \leq G$, a left $H$**-coset** of $G$ is the set
>$$
>gH = \{ gh \ | \ h \in H \}
>$$
>for some $g \in G$. **Right cosets** $H_g$ are defined similarly. The set $gH$ is sometimes also called a left coset of $H$ with representative $g \in G$.
>
>The **left $H$-coset space** is the set of al left $H$-cosets of $G$, written
>$$
>G/H =  \{ gH \ g \in G\}.
>$$
>The number of left cosets of $H$ in $G$ (which is equivalent to the number of right cosets) is called the **index** $H$ in $G$ and denoted $|G/H|$.