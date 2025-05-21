---
aliases:
  - primitive root
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-05-14T10:18:24-04:00
---

# Overview and statement

>[!theorem] Existence of a primitive root
>Let $F$ be a [[Algebraic fields|field]] and $G$ be a *finite* [[Algebraic groups|subgroup]] of the multiplicative group of units $(F^*, \cdot)$. Then $G$ is cyclic. In particular, if $F$ is finite, then $(F^*, \cdot)$ itself is cyclic.

One notable example is when $F = \mathbb F_p = \mathbb Z / p \mathbb Z$, the group of [[Integers modulo n|integers modulo]] some prime $p$. Then a generator for the multiplicative group $(\mathbb Z / p \mathbb Z)^*$ is called a **primitive root**.

---
# Proof


>[!abstract] Proposition:
>Let $G$ be a finite [[Algebraic groups|group]] of order $n$. If for each $d$ that divides $n$, the set $$ \{ g \in G \ : \ g^d = 1 \}$$ has at most $n$ elements, then $G$ is cyclic.

---
