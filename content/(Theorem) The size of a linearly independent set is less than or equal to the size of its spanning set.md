---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - theorem
publish: "true"
---
>Let $V$ be a finite-dimensional [[Axioms for fields and vector spaces|vector space]] with a finite [[Linear combinations and spanning|spanning set]]. Given any set of [[Linear independence|linearly independent]] $\{v_1, \cdots, v_n\} \subset V$, and any set $\{w_1, \cdots, w_m\}$ which spans $V$, we have $n \leq m$.

The theorem is proved using the following facts and lemmas:
- *(Lemma 32)* If $(v_1, \cdots, v_n)$ is a linearly independent list of vectors in $V$, and $(v_1, \cdots, v_k, w_1, \cdots, w_{m-k})$ is a spanning list of vectors for $V$ where $k<n$, then there is also a spanning list $(v_1, \cdots, v_{k+1}, w_1^{\prime}, \cdots, w_{m-k-1}^{\prime})$ with the *same total size* but one additional vector from $(v_1, \cdots, v_n)$. 
	- This is the [[Mathematical induction|inductive step]]. By iterating this process, we can obtain a new spanning list of the same size which starts with the **linearly independent list** $(v_1, \cdots, v_n)$.
- *(Corollary 33)* If $(v_1, \cdots, v_n)$ is linearly independent and $(w_1, \cdots, w_m)$ is a **spanning list**, then there exists a spanning list $(v_1, \cdots, v_{n}, w_1^{\prime}, \cdots, w_{m-n}^{\prime})$ which starts with the linearly independent list.

 This theorem gives us the following corollary: 
 >A subspace of a finite-dimensional vector space is also finite-dimensional.