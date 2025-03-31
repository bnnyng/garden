---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-07T12:44:00-05:00
---
# Overview and statement of the theorems


>[!abstract] Theorem: Path lifting
>Let $p: X \to Y$ be a [[Covering maps|covering map]], $\gamma : I \to Y$ a path and let $x \in X$ be such that $p(x) = \gamma (0)$. Then there exists precisely one path $\tilde \gamma : I \to X$ such that $p \circ \tilde \gamma = \gamma$ and $\tilde \gamma(0) = x$.

^ee8d1e

>[!abstract] Theorem: Homotopy lifting
>Let $p : X \to Y$ be a [[Covering maps|covering map]], $W$ any topological space and $H : W \times I\to Y$ be a homotopy. Let $g : W \to X$ be such that $p \circ g = H(-, 0)$. Then there exists precisely one homotopy $\widetilde H : W \times I \to X$ with $p \circ \widetilde H = H$ and $\widetilde H(-, 0) = g$. 
>
>![[Pasted image 20250306115149.png|200]]

^e14e06

Proofs from [[MATH-GU4053|Algebraic Topology]].

---
# Proof of path lifting


![[(Theorem) Path and homotopy lifting#^ee8d1e]]


>**Claim 1:** The path and homotopy lifting theorems hold when $p$ is a trivial covering map, i.e., the preimage $p^{-1}(Y)$ is a disjoint union of copies of $Y$. 

>**Claim 2:** The theorems hold when the image $H(W \times I) \subseteq Y$ is evenly covered.

>**Claim 3:** Given the assumptions of the homotopy lifting theorem, let $[a,b] \subseteq I$ be subinterval such that $H(W \times [a,b]) \subseteq Y$ is evenly covered, and $\widetilde H_a : W \times [0, a] \to X$ be a map such that $p \circ \widetilde H_a = H|_{W \times [0, a]}$. Then there exists precisely one map $\widetilde H_b : W \times [0, b] \to X$ with both $$ \widetilde H_b|_{W \times [0, a]} = \widetilde H_a \quad \quad p \circ \widetilde H_b = H|_{W \times [0, b]}. $$

>**Claim 4:** Let $\mathcal U$ be an open cover of $[0, 1]$. Then there exists $n \in\mathbb N$ such that for each $i = 1, \ldots, n$, there is an open subset $U_i \in \mathcal U$ such that $[(i-1)/n, i/n] \in U_i$. In other words, $1/n$ is a [[(Lemma) Lebesgue numbers exist for compact metric spaces|Lebesgue number]] for the covering.

*Proof.* $\ \text{}$ Since $\mathcal U$ is a covering, for each $x \in [0, 1]$ we may find $\epsilon_x>0$ and a neighborhood $U_x \in \mathcal U$ such that $$ [0, 1] \cap (x - \epsilon_x, x+\epsilon_x) \subseteq U_x. $$ By varying $x$, we can construct another open cover of $[0,1]$ using the sets $$ V_x = [0,1] \cap (x-\epsilon_x/2, x + \epsilon_x/2) \subseteq U_x, $$ and by compactness there is some $m \in \mathbb N$ such that $\bigcup_{i=1}^m V_{x_i}$ is a finite cover of $[0, 1]$, and we can therefore choose $\epsilon = \min\{ \epsilon_{x_i} \ : \ 1 \leq j \leq m \}$. Now for any $y \in [0,1]$, we have $y \in V_{x_j}$ for some $j$, so by our choice of $\epsilon$ we have $$ (y - \epsilon/2, y+ \epsilon / 2) \subseteq (y - \epsilon_{x_j}/2, y+ \epsilon_{x_j} / 2) \subseteq V_{x_j}, $$ and hence $[0, 1] \cap (y - \epsilon/2, y+ \epsilon / 2) \subseteq U_{x_j}$. Finally, let $n \in \mathbb N$ be large enough so that $1/n < \epsilon / 2$. Then for all $i = 1, \ldots, n$, we have $$ [(i-1)/n, i/n] \subseteq (i/n - \epsilon/2, i/n + \epsilon / 2), $$ and the claim follows. $\ \square$

*Proof of **path lifting**.* $\ \text{}$ Since each point of the path $\gamma(t) \in Y$ has an [[Covering maps|evenly covered]] neighborhood (i.e., whose preimage is a disjoint union of open sets, each of which is mapped homeomorphically onto the base neighborhood), our goal is to *find a cover of $[0, 1]$ by open sets whose image in $Y$ is evenly covered*. It follows from **Claim 4** that we want a natural number $n$ such that $\gamma([(i-1)/n, i/n]) \subseteq Y$ is evenly covered for all $i = 1, \ldots, n$.
- **Uniqueness:** Suppose we have a lift $\tilde \gamma : I \to X$ such that $\tilde \gamma(0) = x$ and $p \circ \tilde \gamma = \gamma$. We show by induction that $\tilde \gamma'$ is another lift, then $\tilde \gamma | _{[0, i/n]} = \tilde \gamma’ | _{[0, i/n]}$. 
	- **Base case:** If $i = 0$, then both maps send $0$ to $x$. 
	- **Inductive step:** Suppose $\tilde \gamma | _{[0, (i-1)/n]} = \tilde \gamma’ | _{[0, (i-1)/n]}$. Then uniqueness follows by applying **Claim 3** with $a = (i-1)/n$, $b = i/n$, and taking $W$ to be the one-point space.
- **Existence:** We use induction to construct maps $\tilde \gamma_i : I \to X$ such that each satisfy $\tilde \gamma(0) = x$ and $p \circ \tilde \gamma = \gamma|_{[0, i/n]}$, at the end setting $\tilde \gamma = \tilde \gamma_n$.
	- **Base case:** For $i = 0$, we let $\tilde \gamma_0 = x$.
	- **Inductive step:** Suppose $\tilde \gamma_{i-1}$ has been constructed. Then we may use the existence part of **Claim 3** with $a = (i-1)/n$, $b = i/n$, and $W$ as the one-point space to construct $\tilde \gamma_i$ with precisely the desired properties. $\ \square$


---
# Proof of homotopy lifting

![[(Theorem) Path and homotopy lifting#^e14e06]]



---
# Notes

- Moreover, if $H$ is a [[Homotopies|homotopy relative to]] a subspace $V \subseteq W$, then so is $\widetilde H$.
	- Suffices to prove a non-realtive version


