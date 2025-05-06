---
aliases:
  - group action
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-27T10:39:10-04:00
---
# Overview and basic definition

>[!definition] Group action
>If $G$ is a [[Algebraic groups|group]] and $Y$ is any set, a **(left) group action** $\alpha : G \times Y \to Y$ is a map given by $(g, y) \mapsto gy$ such that 
>$$ 
>\alpha(x, e ) = x, \quad \quad \alpha( g_2, \alpha(g_1, x)) = \alpha(g_1g_2, x) 
>$$ 
>for all $x \in X$ and $g_1, g_2 \in G$. The action of an element $g \in G$ is often denoted $\alpha(g, x) = g \cdot x$, in which case the axioms above read $e \cdot x = x$ and $(g_1g_2) \cdot x = g_2 \cdot (g_1 \cdot x)$.

>[!definition] Orbit
>If $G$ is a group acting on a set $Y$, there is an [[Relation|equivalence relation]] $x \sim y$ if there exists $g \in G$ such that $gx = y$ for $x, y \in Y$. An **orbit** is a partition of $Y$ under $\sim$, and the set of orbits is denoted $Y / G$ or $Y / \sim$.

>[!definition] Free action
>An action of a group $G$ on a set $Y$ is **free** if the only element that fixes any point of $Y$ is the identity element of $G$:
>$$
>g(y) = y \ \text{ for } \ g \in G, y \in Y \implies g = e.
>$$


---
# Examples

#### Group action of integers on the reals


