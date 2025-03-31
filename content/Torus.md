---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-11T09:53:01-04:00
---
# Basic definition

>[!example] Definition: Torus
>The $2$-torus is the [[Quotient spaces|quotient space]] $T = [0, 1]^2 / \sim$, where $\sim$ is the equivalence relation given by $$ (t, 0) \sim (t, 1) \quad \quad (0, s) \sim (1, s). $$

---
# In point-set topology

- [[Homeomorphisms and topological embeddings]]: The surjection $f : [0,1]^2 \to S^1 \times S^1$ defined by $$ f(t, s) = (\cos 2 \pi t, \sin 2 \pi t, \cos 2 \pi s, \sin 2 \pi s) $$ induces a homeomorphism out of the quotient space. Thus, $T \cong S^1 \times S^1$.
	- The same map $f$ shows that torus is also homeomorphic to the space $\mathbb R^2/\sim$, where $(x,y) \sim (x’, y’)$ if there exist $n, m \in \mathbb Z$ such that $$ x' = x + n \quad \quad y' = y + m $$ (more precisely, $f$ induces a homeomorphism between $\mathbb R^2 / \sim \cong S^1 \times S^1$).

Question: Does it follow that $T = \mathbb R^2/\mathbb Z^2?$

---
# In algebraic topology

- [[(Theorem) van Kampen]]: 
- [[(Theorem) A group acting on a simply connected space is isomorphic to the fundamental group of its orbits|Calculating fundamental groups]]: The torus $T = \mathbb R^2/\mathbb Z^2$ has [[Fundamental groups|fundamental group]] $\pi_1(T, y) \cong \mathbb Z^2$.