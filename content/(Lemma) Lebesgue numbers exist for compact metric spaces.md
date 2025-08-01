---
aliases:
  - Lebesgue number lemma
  - Lebesgue covering lemma
  - Lebesgue number
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-20 16:44
lastmod: 2025-07-29T15:01:40-04:00
---
>[!lemma]  Lebesgue number
>If $\mathcal C$ is an open cover of a [[Compactness|compact]] [[Metrics, metric spaces, and the metric topology|metric space]], then there exists $\delta > 0$ such that whenever $\text{diam}(A) < \delta$, we have $A \subseteq U$ entirely contained for some $U \in \mathcal C$. The quantity $\delta$ is known as the **Lebesgue number** of the cover. 

^dd996c

*Proof from [[MATH-GU4051|Topology]]*.

It suffices to show this for all balls $B_\delta (x)$, since if $\text{diam}(A) < \delta$ then $A \in B_\delta(x)$, where $x \in A$ is any point. Note that $B_\delta(x) \subseteq U$ if and only if $d(x, X \backslash U) \geq \delta$. 

🔺 *Exercise.* Show that we do have  $B_\delta(x) \subseteq U$ if and only if $d(x, X \backslash U) \geq \delta$. **This trick is central to this proof!**

Assume $X \notin \mathcal C$, since otherwise any $\delta > 0$ works. Since $X$ is compact, assume $U_1, \ldots, U_n \in \mathcal C$ is a finite subcover of $X$. Define $Z_i = X \backslash U_i$, and let $f_i : X \to \mathbb R$ be the map $x \mapsto d(x, Z_i)$ for each $1 \leq i \leq n$. Further, define $f:X \to \mathbb R$ be defined by
$$
f(x) = \max\{ f_i(x) \ | \ i = 1, \ldots, n\}.
$$

🔺 *Exercise*. Show that the maximum of finitely many continuous functions is continuous. (Hint: use induction).

Our goal is to prove that for all $x \in X$, we have $f(x) > 0$. If we know this, then since $f$ continuous implies $f(X)$ is compact, there exists $\delta > 0$ such that for all $x \in X$, we have
$$
f(x) > \delta > 0.
$$
Then we may conclude that for all $x \in X$, there exists $i \in \{ 1, \ldots, n\}$ such that 
$$
f(x) = f_i(x) = d(x, X \backslash U_i) > \delta \iff B_\delta(x) \subseteq U_i.
$$
#wip because the infimum is also strictly greater than 0? why is $f(x)$ strictly greater? Note that in general strictly greater than 0 because X compact.

To prove that $f(x)$ is always positive, let $x \in X$ so that $x \in U_i$ for some $i$. Then there exists $\epsilon > 0$ such that 
$$
x \in B_\epsilon (x) \subseteq U_i \implies d(x, X \backslash U_i) \geq \epsilon.
$$
Since the distance is precisely how we defined $f_i(x)$, we conclude that $f_i(x)> 0$.




