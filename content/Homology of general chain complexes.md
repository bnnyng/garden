---
aliases:
  - chain complex
  - chain map
  - homology group
  - homology
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-03T12:50:22-04:00
---
# Overview 


**Relevant theorems:**
- [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups]]
- [[(Theorem) (Relative) homology is homotopy invariant]]
- [[(Theorem) The relative homology of a subset is isomorphic to the subset with excision when the closure of the excision is in the interior of the subset]]

**Related notes:**
- [[Singular chains and singular homology]]
- [[Relative singular chains and homology]]
- [[Reduced homology]]

---

# Basic definitions

>[!example] Definition: Chain complex
>A **chain complex** 
>$$ 
>\cdots \to C_{p+1} \to C_p \to C_{p-1} \to \cdots 
>$$ 
>is a sequence consisting of an [[Abelian groups|abelian]] group $C_p$ and a [[Group homomorphisms and isomorphisms|group homomorphism]] $\partial_p : C_p \to C_{p-1}$ for all $p \in \mathbb Z$ such that $\partial_{p-1} \circ \partial_p = 0$.
>
>The data of all the abelian groups $C_p$ and homomorphisms $\partial$ is often abbreviated $(C_*, \partial)$.

>[!example] Definition: Chain map
>Let $(B_*, \partial^B)$ and $(C_*, \partial^C)$ be chain complexes. A **chain map** $f_*: (B_*, \partial^B) \to (C_*, \partial^C)$ consists of homomorphisms $f_p : B_p \to C_p$ for all $p \in \mathbb Z$ which satisfy $$ \partial ^C \circ f_p = f_{p-1} \circ \partial ^B. $$ 
>![[Pasted image 20250325104422.png|150]]

---
# Homology groups

>[!example] Definition: Homology groups of a chain complex
>If $(C_*, \partial)$ is a chain complex, its **homology groups** $H_p(C_*, \partial)$ are defined as 
>$$
>H_p(C_*, \partial) = \frac{\ker ( \partial_p : C_p \to C_{p-1}}{\textup{Im} ( \partial_{p+1} : C_{p+1} \to C_p)}.
>$$
>Elements of $\ker \partial$ is called **cycles**, and elements of $\textup{Im} \partial$ are called **boundaries**.
>If $f: (B_*, \partial) \to (C_*, \partial)$ is a chain map, we defined the **induced homomorphism** $H_p(f) : H_p(B_*, \partial) \to H_p(C_*, \partial)$ by 
>$$
>[c] \mapsto [f_p(c)]
>$$
>for a cycle $c \in \ker (\partial : B_p \to B_{p-1})$. We often write $f_*$ for $H_p(f)$.

#wip well-definedness of classes


>[!abstract] Lemma: Homology is a functor
>The association of the abelian group $H_p(C_*, \partial)$ to the chain complex $(C_*, \partial)$ and $H_p(f)$ to a chain map defines a [[Categorical functors|functor]] $H_p : \mathsf {Ch} \to \mathsf {Ab}$.

---

# Code snippets

```
(C_*, \partial)
```

https://math.stackexchange.com/questions/4399279/short-exact-sequence-of-complexes-induces-long-exact-sequence-of-homology-groups