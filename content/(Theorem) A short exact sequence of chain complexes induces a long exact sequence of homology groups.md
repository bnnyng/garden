---
aliases:
  - connecting homomorphism
  - SES of chain complexes
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-03T12:51:07-04:00
---
# Overview



---
# Preliminaries: The connecting homomorphism

>[!example] Definition: Short exact sequence of chain complexes
>A **short exact sequence of chain complexes** consists of composable chain maps $f: (A_*, \partial) \to (B_*, \partial)$ and $g: (B_*, \partial) \to (C_*, \partial)$ such that the sequence
>$$
>0 \to A_p \to_{f_p} B_p \to_{g_p} C_p \to 0
>$$
>is [[Exact sequences|exact]] for all $p$.

>[!abstract] Lemma: Existence of the connecting homomorphism
>Given a short exact sequence of chain complexes, there is a well-defined homomorphism $\delta : H_p(C_*, \partial) \to H_{p-1}(A_*, \partial)$, called the **connecting homomorphism**, defined by
>$$
>\delta([c]) = [a]
>$$
>when $f(a) = \partial b$ for some $b \in B_p$ with $g(b) = c$.

*Sketch of proof from [[MATH-GU4053|Algebraic Topology]].*

The proof involves the following key steps:

- **Existence of well-defined choices of $b$ and $a$:** Let $c \in C_p$ be a [[Singular chains and singular homology|cycle]] (i.e., $\partial c = 0$). Surjectivity of $g = g_p : B_p \to C_p$ (due to its location in the SES) implies that we can choose $b \in B_p$ such that $g(b) = c$, and by definition of a chain map we have $$ g_{p-1}(\partial b) = \partial c = 0.$$ By exactness, we have $$ \partial b \in \ker (g_{p-1}) = \text{Im}(f_{p-1}) $$ as well, so there exists an $a \in A_{p-1}$ such that $f(a) = \partial b$.
- **Why $a$ is a cycle corresponding to a *homotopy class* $[a]$:** Since $f$ is a chain map, we have $$ f(\partial a) = \partial f(a) = \partial^2 b = 0. $$ Since $f$ is injective (due to its location in the SES), it has a trivial kernel, so we must have $\partial a = 0$ and therefore $a \in A_{p-1}$ is a cycle corresponding to a class $[a] \in H_{p-1} (A_*, \partial)$.
- 



---
# Statement and proof


>[!abstract] Theorem: A short exact sequence of chain complexes induces a long exact sequence in homology
>Let $f: (A_*, \partial) \to (B_*, \partial)$ and $g : (B_*, \partial) \to (C_*, \partial)$ be composable [[Homology of general chain complexes|chain maps]] forming a [[Exact sequences|short exact sequence]] of chain complexes, and let $\partial


---
# Applications

```
f: (A_*, \partial) \to (B_*, \partial)
```