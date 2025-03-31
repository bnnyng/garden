---
aliases:
  - chain complex
  - chain map
  - homology group
  - relative homology
  - homology
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-27T12:48:08-04:00
---
# Overview 


**Relevant theorems:**
- [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups]]
- [[(Theorem) (Relative) homology is homotopy invariant]]
- 

**Related notes:**
- [[Singular chains and singular homology]]
- 

---

# Basic definitions

>[!example] Definition: Chain complex
>A **chain complex** $$ \cdots \to C_{p+1} \to C_p \to C_{p-1} \to \cdots $$ is a sequence consisting of an [[Abelian groups|abelian]] group $C_p$ and a [[Group homomorphisms and isomorphisms|group homomorphism]] $\partial_p : C_p \to C_{p-1}$ for all $p \in \mathbb Z$ such that $\partial_{p-1} \circ \partial_p = 0$.
>
>The data of all the abelian groups $C_p$ and homomorphisms $\partial$ is often abbreviated $(C_*, \partial)$.

>[!example] Definition: Chain map
>Let $(B_*, \partial^B)$ and $(C_*, \partial^C)$ be chain complexes. A **chain map** $f_*: (B_*, \partial^B) \to (C_*, \partial^C)$ consists of homomorphisms $f_p : B_p \to C_p$ for all $p \in \mathbb Z$ which satisfy $$ \partial ^C \circ f_p = f_{p-1} \circ \partial ^B. $$ 
>![[Pasted image 20250325104422.png|150]]






---

# Code snippets

```
(C_*, \partial)
```

https://math.stackexchange.com/questions/4399279/short-exact-sequence-of-complexes-induces-long-exact-sequence-of-homology-groups