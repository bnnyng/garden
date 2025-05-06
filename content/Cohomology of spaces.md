---
aliases:
  - cohomology group
  - cohomology
  - cochain
  - coboundary
  - cochain complex
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
lastmod: 2025-05-02T00:19:21-04:00
date: 2025-05-01T11:54:55-04:00
---
# Overview

The cohomology groups 
$$
H^*(X; R) := \oplus H^p(X; R)
$$
are a [[Graded rings|graded ring]], with addition defined as formal addition as in the [[Abelian groups|free abelian group]], and multiplication defined as the induced [[The cup product of cochains|cup product]]. Elements of $H^*(X; R)$ are finite sums $\sum_i \alpha_i$ of cochains $\alpha_i \in H^i(X; R)$, and the product of two elements is defined by #wip WHAT?


[[2025-04-22]]

**Related notes:**
- [[The cup product of cochains]]
- [[Mathematical duality#Homology and cohomology]]

---

# Singular cochains and singular cohomology

>[!definition] Singular cochains with coefficients
>Given a [[Topological spaces and open sets|topological space]] $X$ and an [[Abelian groups|abelian]] group $G$, the group of **singular $p$-cochains with coefficients in $G$** is defined by
>$$
>C^p(X; G) = \{ \varphi : \text{Sin}_p(X) \to G \} \cong \text{Hom}(C_p(X), G),
>$$
>where $\varphi$ is a [[Group homomorphisms and isomorphisms|group homomorphism]] sending each [[Singular chains and singular homology|singular p-simplex]] $\sigma: \Delta^p \to X$ to a value $\varphi (\sigma) \in G$. 

>[!definition] Coboundary map
>The **coboundary map** $\delta : C^p(X; G) \to C^{p+1}(X; G)$ is defined by sending each cochain $\varphi$ to a cochain 
>$$
>\delta \varphi : C_{p+1}(X) \to_\partial  C_p(X) \to_\varphi G,
>\quad \quad
>(\delta\varphi) (\sigma) \mapsto \sum_i(-1)^i \varphi (d_i \sigma),
>$$ 
>where $d_i : \text{Sin}_{p+1}(X) \to \text{Sin}_{p}(X)$ is the face map for a singular $p+1$-simplex. That is, $\delta\varphi(\sigma)$ is the alternating sum from evaluating $\varphi$ on all possible faces of $\sigma$.

- By the same argument as with $\partial$ for simplicial chains, we can show that $\delta \cdot \delta = 0$. Thus a chain complex

- arises from the composition
- well defined 

>[!definition] Cohomology group with coefficients
>Given a **cochain complex**
>$$
>\cdots \leftarrow C^{p+1}(X; G) \leftarrow C^p(X; G) \leftarrow C^{p-1}(X; G) \leftarrow \cdots \leftarrow C^0 (X;G) \leftarrow 0,
>$$
>the **cohomology group $H^p(X; G)$ with coefficients in $G$** is the [[Normal subgroups and quotient groups|quotient]]
>$$
>H^p(X; G) = \frac{\ker (C^p(X; G) \to C^{p+1}(X; G))}{\text{Im}(C^{p-1}(X; G) \to C^p(X; G))}.
>$$

---
# Contravariant functors

#wip 




---

# Notes

- Another way of abelianizing other than formal linear combinations/