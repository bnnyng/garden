---
aliases:
  - exact sequence
  - short exact sequence
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-08T12:30:53-04:00
---
# Overview and basic definition

>[!definition] Exact sequence
>An **exact sequence** $$ A \to_f B \to_g C $$ is a sequence of [[Abelian groups|abelian]] groups $A, B, C$ with [[Group homomorphisms and isomorphisms|group homomorphisms]] $f : A \to B$ and $g : B \to C$ if $\textup{Im}(f) = \ker(g)$. 
>
>If $A, B, C$ are part of a longer sequence, then we say the sequence is **exact at $B$** in the situation above, and that the entire sequence is **exact** if it is exact at all spots.

[[Homology of general chain complexes|Homology groups]] can be considered a measure of *non*-exactness of general chain complexes.

**Relevant theorems:**
- [[(Theorem) The 5-lemma]]

---
# Short and long exact sequences


>[!definition] Short exact sequence
>A **short exact sequence** is an exact sequence of the form $$ 0 \to A \to_f B \to_g 0. $$ That is, the short exact sequence consists of composable homomorphisms $f, g$ such that $f$ is injective, $g$ is surjective, and $\textup{Im}(f) = \ker(g)$.



---
# Example

#### Chain complexes

Suppose $C = (C_p, \partial)$ is a [[Homology of general chain complexes|chain complex]], i.e., we have $$ C_{p+1} \to_{\partial_{p+1}} C_p \to_{\partial_p} C_{p-1} $$ and assume $\textup{Im}(\partial_{p+1} \subseteq \ker(\partial_p)$. Then $C$ is **exact** at $$ C_p = H_p(C) = 0. $$
Thus, a **long exact sequence** is precisely a chain complex for which all [[Singular chains and singular homology|homology groups]] are trivial.

#### Short exact sequences

- Related to first isomorphism thm?
	- Cokernel of f
	- Canonical isomoprhism from last term to cokernel of first term
	- Kernel of g isomorphic to A (f injective, isomorphic onto its image)

#### Long exac

