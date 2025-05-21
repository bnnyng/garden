---
aliases:
  - morphism
  - isomorphism
  - category
  - categories
  - fiber
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-05-07T11:36:48-04:00
---
# Overview

- [[Topological categories and functors]]

**Related notes:** [[Categorical functors]]

---
# Axiomatic definition

>[!definition] Category
>A **category** $\mathsf C$ consists of four pieces of data:
>1. A collection $\mathsf{Ob}(\mathsf C)$ of “**objects**”.
>2. For each pair of objects $X, Y \in \mathsf{Ob}(\mathsf C)$, a set $\mathsf C(X, Y) = \mathsf {Hom}_{\mathsf C}(X, Y)$ of **morphisms** from $X$ to $Y$. A generic element $f \in \mathsf {Hom}_{\mathsf C}(X, Y)$ is typically written $f: X \to Y$.
>3. For each triple of objects $X, Y, Z \in \mathsf{Ob}(\mathsf C)$, we have a **composition** map $$ \mathsf {Hom}_{\mathsf C}(Y, Z) \times \mathsf {Hom}_{\mathsf C}(X, Y) \to \mathsf {Hom}_{\mathsf C}(X, Z) $$ defined by $(g, f) \mapsto g \circ f$.
>4. For each $X \in \mathsf{Ob}(\mathsf C)$, we specify an **identity** morphism $\mathbf 1_X \in \mathsf {Hom}_{\mathsf C}(X, X)$.
>
>This data is required to satisfy the following properties:
>- **Associativity of composition.** For each four-tuple of objects $X, Y, Z, W \in \mathsf{Ob}(\mathsf C)$, if $f : Z \to W$, $g: Y \to Z$, and $h : X \to Y$ are composable morphisms, then $$ (f \circ g ) \circ h = f \circ (g \circ h). $$
>- **Composition with identity.** If $f : X \to Y$ is a morphism, then $$ f \circ \mathbf 1_X = \mathbf 1_Y \circ f = f. $$

---
# Isomorphisms


>[!example] Definition: Isomorphism
>Let $\mathsf C$ be a category. Then a morphism $f : X \to Y$ in $\mathsf C(X, Y)$ is an **isomorphism** if there exists a morphism $g : Y \to X$ in $\mathsf C(Y, X)$ such that $$ g \circ f = \mathbf 1_X \in \mathsf C(X, X) \quad \quad f \circ g = \mathbf 1_Y \in \mathsf C(Y, Y). $$

---
# Examples

#### 

>[!definition]
>For any category $\mathsf{C}$, define the **opposite** $\mathsf{C^{op}}$ to be the category with the same objects, i.e., $\mathsf{Ob}(\mathsf{C^{op}})=\mathsf{Ob}(\mathsf{C})$ and with the morphisms reverse, i.e., $\mathsf{C^{op}}(X, Y) = \mathsf{C}(Y, X)$.




---
# Notes

```
\mathsf{Ob}(\mathsf C)
```

```
\mathsf {Hom}_{\mathsf C}(X, Y)
```

