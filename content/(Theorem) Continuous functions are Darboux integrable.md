---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-11-12 14:10
lastmod: 2024-11-22T11:13:49-05:00
---

>[!abstract] Theorem:
>Let $f : [a,b ] \to \mathbb R$ be bounded. Then $f$ is Darboux integrable if and only if for all $\epsilon > 0$, there exists a partition $P$ of $[a,b]$ such that
>$$
>U(f, P) - L(f, P) < \epsilon.
>$$

*Proof from [[MATH-GU4061|Modern Analysis I]]*.

For the forward implication, let $f$ be Darboux integrable. For every $\epsilon > 0$, there exist partitions $P_1, P_2$ such that 
$$
U(f, P_1) - \overline{\int^b_a} f < \epsilon/2
$$
$$
\underline{\int^b_a} f - L(f, P_2) < \epsilon / 2.
$$
Let $P= P_1 \cup P_2$ be the common **refinement** of these partitions, so 
$$
U(f, P) - L(f, P) \leq U(f, P_1) - L(f, P_2) + \underline{\int^b_a} f - \overline{\int^b_a} f  < \epsilon.
$$

Conversely, suppose that for all $\epsilon > 0$ there exists a partition $P$ such that the statement of the theorem holds. Then

$$
0 \leq \overline{\int^b_a} f - \underline{\int^b_a} f  \leq U(f, P) - L(f, P) < \epsilon,
$$
so the upper and lower Darboux sums are equivalent. $\ \square$

>[!abstract] Thoerem:
>Let $f: [a, b] \to \mathbb R$ be continuous. Then $f$ is [[Properties of the Darboux integral|Darboux integrable]].

*Proof from [[MATH-GU4061|Modern Analysis I]].*

By the previous theorem, it suffices to find a partition $P$ of $[a, b]$ such that $U(f, P) - L(f, P) < \epsilon$.

Recall that [[(Theorem) Continuous functions on compact sets are uniformly continuous]], so we can find $\delta >0$ such that for $|x-y|< \delta$, we have
$$
|f(x) - f(y)| < \frac{\epsilon}{b-a}.
$$

Fix a partition $P = \{ x_0, \ldots, x_n \}$ of $[a, b]$ such that $|x_k - x_{k-1} < \delta$. By continuity of $f$, for each $k$, we can find some $x_k^+, x_k^-$ such that
$$
f(x_k^+) = \sup_{x \in [x_{k-1}, x_k] }f(x)
\quad \quad \quad 
f(x_k^-) = \inf_{x \in [x_{k-1}, x_k]} f(x)
$$

#wip 