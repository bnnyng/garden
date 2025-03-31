---
aliases:
  - equivalence relation
  - relation
  - reflexive
  - irreflexive
  - symmetric
  - antisymmetric
  - transitive
  - equivalence class
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-09-21 17:03
lastmod: 2024-09-21T17:15:07-04:00
---
>[!example] Definition: Properties of relations
>A **relation** $R$ on a set $A$ is a rule which returns *true* or *false* depending on if $xRy$ for some $x, y \in A$.
>
> | Property | Definition | On a digraph |
> | -------- | ---------- |  ------------ |
> | Reflexive | $\forall x \in A, \ xRx$ |  Every vertex has a self-loop |
> | Irreflexive | $\forall x \in A, \ x \not R x$ | No vertex has a self-loop |
> | Symmetric | $\forall x, y \in A, \ xRy \implies yRx$ | All paths are bi-directional |
> | Antisymmetric | $\forall x, y \in A, \ xRy \wedge yRx \implies x = y$ | All paths are single directions or self-loops |
> | Transitive | $\forall x, y, z \in A, \ xRy \wedge yRz \implies xRz$ | Paths make a $\Delta$ pointing to one vertex |

>[!example] Definition: Equivalence relation, equivalence class
>A relation $R$ on a set $A$ is an **equivalence relation** if it is reflexive, symmetric, and transitive. The **equivalence class** of an element $a \in A$ is the set $[a] = \{ x \in A \ | \ x R a \}$, the set of all elements related to $A$ by $R$.

