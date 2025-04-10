---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
lastmod: 2025-04-09T20:33:03-04:00
date: 2025-04-08T03:08:45-04:00
---
# Overview and basic definition

> [!definition] Chain homotopy
> Let $A = (A_*, \partial^A)$ and $B = (B_*, \partial^B)$ be [[Homology of general chain complexes|chain complexes]], and let $\varphi, \psi : A \to B$ be two chain maps. Then a **chain homotopy** from $\varphi$ to $\psi$ consists of homomorphisms $T_p : A_p \to B_p$ for all $p \in \mathbb Z$ such that
> $$
> \partial_{p+1}^B \circ T_{p} + T_{p-1} \circ \partial^A_{p} = \psi - \varphi,
> $$
> or $\partial \circ T + T \circ \partial = \psi - \varphi$ in more brief notation. We say that two chain maps are **chain homotopic** if a chain homotopy exists between them.

**Relevant theorems:**
- [[(Theorem) (Relative) homology is homotopy invariant]]

---

# Chain homotopies and homology

> [!lemma] Chain homotopic maps induce the same maps in homology
>If $\varphi, \psi : A \to B$ are chain homotopic, then the induced maps 
>$$
>H_{p}(\varphi), H_{p}(\psi): H_{p}(A_{*}, \partial^A)\to H_{p}(B_{*}, \partial^B)
>$$
>are equal.

>[!theorem] Homotopic maps induce chain homotopic chain maps
>If $f_0, f_1 : X \to Y$ are two [[Homotopies|homotopic]] continuous maps, then the induced chain maps 
>$$
>(f_0)_*, (f_1)_* : C_*(X) \to C_*(Y), \quad \quad (f_i)_*(\sigma) = f_i \circ \sigma
>$$
>on generators $\sigma \in C_*(X)$ are chain homotopic.

>[!corollary] Homotopic maps induce equal maps on homology





