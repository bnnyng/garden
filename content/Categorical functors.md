---
aliases:
  - functor
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-04-01T09:44:12-04:00
---
# Overview and basic definition

**Functors** are ways to pass between [[Categories and morphisms|categories]], or “domains of discourse” in mathematics. Functors preserve any property that can be stated purely categorically.

>[!example] Definition: Functor
>Let $\mathsf C, \mathsf D$ be [[Categories and morphisms|categories]]. A **functor** $F: \mathsf C \to \mathsf D$ consists of the following data:
>1. For each $X \in \mathsf{Ob}(\mathsf C)$, there exists an object $F(X) \in \mathsf{Ob}(\mathsf D)$.
>2. For each morphism $f \in \mathsf C(X, Y)$, there exists a morphism $F(f) : F(X) \to F(Y)$ in $\mathsf D(F(X), F(Y))$. 
>
>This data is required to satisfy the following properties, which essentially require that functors preserve structures between categories:
>- **Compositions map to compositions:** $F(g \circ f) = F(g)F(f)$.
>- **Identities map to identities:** $F(\mathbf 1_X) = \mathbf 1_Y$.

>[!abstract] Proposition: Functors preserve isomorphism
>If $X, Y$ are isomorphic objects of a category $\mathsf C$ and $F : \mathsf C \to \mathsf D$ is a functor, then $F(X), F(Y)$ are isomorphic in $\mathsf D$ as well.

----
# Examples

#### Forgetful functors

