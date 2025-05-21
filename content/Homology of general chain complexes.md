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
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-05-07T11:37:34-04:00
---
# Overview 

A **chain complex** is a sequence of [[Group homomorphisms and isomorphisms|homomorphisms]] of [[Abelian groups|abelian groups]] which generalize [[Singular chains and singular homology|singular chains]]. The **homology groups** $H_p(C_*, \partial) = \ker (\partial_p)/ \text{Im}(\partial_{p+1})$ of a chain complex can be regarded as a measure of [[Exact sequences|non-exactness]]: the sequence
$$
\cdots \to C_{p+1} \to C_p \to C_{p-1} \to \cdots
$$
is **exact** at $C_p$ (i.e., $\ker(\partial_p) = \textup{Im}(\partial_{p+1})$) if and only if $H_p(C_*, \partial) = 0$.

**Homology groups** $H_p(X)$ are a result of a two-stage process: forming a chain complex of [[Singular chains and singular homology|singular]], [[Simplicial chains and simplicial homology|simplicial]], or cellular chains, then taking the homology groups $\ker \partial / \text{Im}\partial$ of this chain complex.

[[Calculating homology groups|Computations of homology groups]] typically involve two key theorems, **homotopy equivalence** and excision.

**Relevant theorems:**
- [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups]]
- [[(Theorem) (Relative) homology is homotopy invariant]]
- [[(Theorem) The relative homology of a subset is isomorphic to the subset with excision when the closure of the excision is in the interior of the subset]]

**Related notes:**
- [[Singular chains and singular homology]]
- [[Relative singular chains and relative homology]]
- [[Reduced singular chains and reduced homology]]
- [[Chain homotopies]]
- [[Homology with coefficients]]

---

# Chain complexes and chain maps

>[!definition] Chain complex
>A **chain complex** 
>$$ 
>\cdots \to C_{p+1} \to C_p \to C_{p-1} \to \cdots 
>$$ 
>is a sequence consisting of an [[Abelian groups|abelian]] group $C_p$ and a [[Group homomorphisms and isomorphisms|group homomorphism]] $\partial_p : C_p \to C_{p-1}$ such that $\partial_{p-1} \circ \partial_p = 0$ for all $p \in \mathbb Z$ .
>
>The data of all the abelian groups $C_p$ and homomorphisms $\partial$ is often abbreviated $(C_*, \partial)$.


>[!definition] Chain map
>Let $(B_*, \partial^B)$ and $(C_*, \partial^C)$ be chain complexes. A **chain map** $f_*: (B_*, \partial^B) \to (C_*, \partial^C)$ consists of homomorphisms $f_p : B_p \to C_p$ for all $p \in \mathbb Z$ which satisfy $$ \partial ^C \circ f_p = f_{p-1} \circ \partial ^B. $$ 
>![[Pasted image 20250325104422.png|150]]

---
# Homology groups

>[!definition] Homology groups of a chain complex
>If $(C_*, \partial)$ is a chain complex, its **homology groups** $H_p(C_*, \partial)$ are defined as 
>$$
>H_p(C_*, \partial) = \frac{\ker ( \partial_p : C_p \to C_{p-1})}{\textup{Im} ( \partial_{p+1} : C_{p+1} \to C_p)}.
>$$
>Elements of $\ker \partial$ is called **cycles**, and elements of $\textup{Im} \partial$ are called **boundaries**.
>If $f: (B_*, \partial) \to (C_*, \partial)$ is a chain map, we define the **induced homomorphism** $H_p(f) : H_p(B_*, \partial) \to H_p(C_*, \partial)$ by 
>$$
>[c] \mapsto [f_p(c)]
>$$
>for a cycle $c \in \ker (\partial : B_p \to B_{p-1})$. We often write $f_*$ for $H_p(f)$.

To see that $f_*$ is well-defined, we need to justify the following claims:

- **The image of any element $f(c)$ is indeed in $\ker (\partial : C_p \to C_{p-1})$:** Since $f$ is a chain map, we know that for we have $$ \partial f(c) =  f(\partial c) = 0, $$ which is zero since $c \in \ker(\partial)$. 
- **The class $[f(c)]$ does not depend on choice of representative for $[c]$:** Suppose $[c] = [d]$, meaning $c, d$ differ by a boundary. In particular, there exists some $x \in C_{p+1}(X)$ such that $d = c + \partial x$. The fact that $f$ consists of group homomorphism implies $$ f(d) = f(c) + f(\partial x) = f(c) + \partial (f(x)), $$ where the second equality again follows from chain map properties. Then $f(c), f(d)$ differ by the boundary $\partial (f(x))$, so $[f(c)] = [f(d)]$.
- **The map $f_*$ is a homomorphism:** This follows because every $f_p : B_p \to C_p$ is a homomorphism, so they induce homomorphisms on the quotient.

![[Topological categories and functors#^0c28bf]]



---
# Code snippets

```
(C_*, \partial)
```

https://math.stackexchange.com/questions/4399279/short-exact-sequence-of-complexes-induces-long-exact-sequence-of-homology-groups