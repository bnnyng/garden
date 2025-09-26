---
aliases:
  - Axiom of Choice
  - Zermelo–Fraenkel
  - Foundation Schema
  - Regularity Schema
  - ZFC
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4200
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-08-30T15:07:00-04:00
---
# Overview

The standard axioms of set theory are the **Zermelo–Fraenkel axioms** together with the **Axiom of Choice**. They are expressed in a *first-order language* with one non-logical binary predicate $\in$, meaning “is a member of.” Quantifiers range over sets alone, including a so-called “empty set.”

Set theory is significant because the axioms of all other branches of mathematics can be **interpreted** in it, meaning those axioms can be understood as claims about sets ([[@2020clarke-doaneMorality]], p. 39). [^1] This implies that if the axioms of set theory are [[Effectively calculable, recursive, and computable are equivalent descriptions of functions|consistent]], then so are the other axioms of mathematics. 

**Related notes:** [[Naive conception of set and Russell's paradox]]

---

>[!axiom] Standard axioms of set theory
>- **Extensionality:** Sets are identical if they have the same members. $$ (x)(y)(z)(z \in x \iff z \in y) \implies x=y )) $$
>- **Pairing:** For any sets $z, w$, there exists a set $y$ containing exactly $z$ and $w$. $$ (z)(w)(\exists y)(x)(x \in y ) \iff (x=z \vee x = w)) $$ 
>- **Union:** For any set $z$, there is a set $\bigcup z$ containing exactly the members of $z$. $$ (z)(\exists y )(x)(x \in y \iff (\exists w) (w \in z \wedge x \in w)) $$
>- **Powerset:** For any set $x$, there is a set $P(z)$ containing exactly the subsets of $z$. $$ (z)(\exists y)(x)(x \in y \iff (w)(w \in x \implies w \in z)) $$
>- **Subsets (Restricted Comprehension) Schema:** For any set $z$ and any condition $\Phi$, there is a set that contains exactly those members of $z$ which satisfy $\Phi$. $$ (z) (\exists y)(x)(x \in y \iff (x \in z \wedge \Phi )), $$ where $y$ is not free in $\Phi$.
>- **Infinity:** There is a set containing $\varnothing$ and containing the *successor* of $x$ (i.e., $x \cup \{x \}$) whenever it contains $x$. $$ (\exists y) (((\exists x)(x \in y \wedge (z)(z \notin x) \wedge (x)(x \in y \implies (\exists z)(z \in y \wedge (w)(w \in z \iff (w \in x \vee w = x))))) $$
>- **Foundation (Regularity) Schema:** For any condition $\Phi$, if there is something that satisfies $\Phi$, then there is a minimal $x$ that does (i.e., an $x$ such that $\Phi$ and no $y \in x$ such that $\Phi$. $$(\exists x) \Phi \implies (\exists x)[\Phi \vee (y)(y \in x \implies \neg \Phi^*)], $$ where $\Phi$ does not contain $y$, and $\Phi^*$ is just $\Phi$ but contains $y$ whenever $\Phi$ contains free occurrences of $x$.

Remarks on the axioms:

- **Pairing** allows for the construction of singletons, which are unique by **extensionality**.
- The **power set** is philosophically interesting, since the axiom itself doesn’t tell you what its size should be.
- The **Subsets Schema** implies the existence of an empty set $\varnothing$ via the condition $x \neq x$.
- Without **infinity**, one can prove the existence of infinitely many things, but not the existence of a *set* of them.
- The **Regularity Schema** gives content to the conception of set: sets are not created ad-hoc, but every set occurs at some level of the hierarchy. Contra-posing gives a **Principle of Set-Theoretic Induction**.

---

[^1]: A theory $T$ **interprets** another $T^*$ if there exists a translation of $T^*$ into the language of $T$ such that, if $S^*$ is a theorem of $T^*$, then its translation $S$ is also a theorem of $T$, and the translation is reasonable.