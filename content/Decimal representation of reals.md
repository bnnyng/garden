---
aliases:
  - decimal representation
  - decimal expression
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
publish: "true"
date: 2024-03-31 14:29
lastmod: 2024-03-31T14:35:14-07:00
---
>[!example] Definition: Decimal expression
>A **decimal expression** $m.a_1a_2a_3...$ is a natural $m \in \mathbb N$ and a sequence of digits $a_i \in \{ 0, 1, \cdots , 9 \}$, which can be written as the sum 
>$$ 
>m + \sum^\infty_{i=1} \frac{a_i}{10^i}. 
>$$

- The [[The real numbers|real number]] associated with a **decimal representation** is formally the [[Supremum and infimum|least upper bound]] of the set of all finite decimal approximations
$$ 
m.a_1a_2a_3... = \text{lub}\{m + \sum^n_{i=1} \frac{a_i}{10^i} \mid i \in \mathbb N \}.
$$
- *(Proposition 1.4)* Every **real number** $x \geq 0$ has a **decimal representation.**
	- *(Lemma 1.5)* We have $\text{glb} \{ 10^{-i} \mid i \in \mathbb N\} = 0$.
	- *(Corollary 1.6)* We have $0.999... = 1$.
	- *(Lemma 1.6)* If $x \in \mathbb R$ has $x \geq 0$, the set of natural numbers $\mathbb N_{\leq x} = \{n \in \mathbb N \mid n \leq x\}$ is *finite*.

---
# Review

- Explain why a set that has a **least upper bound** must be *non-empty*. ⭐
- Prove Corollary 1.6. ⭐
- Prove Lemma 1.6.
- Prove the **decimal representation** is *unique*. ⭐
- Prove that every real number $x \geq 0$ has a **decimal representation.** ✨
	- Hint: The two sticking points of this proof are showing that the reals are not infinitely small or infinitely large, which are resolved in Lemma 1.5 and 1.6 respectively. 