---
aliases:
  - 5-lemma
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-04-08T02:28:30-04:00
---
> [!theorem] The 5-lemma
> Suppose we have a commutative diagram of abelian groups and homomorphisms 
> ![[Pasted image 20250406174915.png|250]]
> such that both rows are [[Exact sequences|exact]] and the vertical arrows labeled “$\cong$” are isomorphisms. Then the middle mapping $C \to C’$ is also an isomorphism.

*Proof.* $\ \text{ }$ Diagram chasing. See Hatcher Section 2.1, p. 129.

>[!corollary] 2-out-of-3 property
>Given a diagram of chain complexes of the form 
>![[Pasted image 20250408022805.png|250]],
>if any two vertical maps induce isomorphisms on [[Homology of general chain complexes|homology]] of all degrees, then so does the third.

