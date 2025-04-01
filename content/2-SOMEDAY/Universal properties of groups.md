---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-12-08 14:00
lastmod: 2025-04-01T09:43:54-04:00
---
See also: [[Universal properties of topologies]]

---
# Free products

>[!abstract] Theorem: Universal property of the free product
>Suppose $i_j : G_j \to G_1 * G_2$ is the inclusion defined by $i_j (g) = g$ for $j = 1, 2$. Given [[Group homomorphisms and isomorphisms|homomorphisms]] $\varphi_j : G_j \to H$, there is a *unique* homomorphism  $\varphi : G_1 * G_2 \to H$ defined by 
>$$
>\varphi(g_1\cdots g_n) = \varphi_{j_1}(g_1) \cdots \varphi_{j_n}(g_n),
>$$
>where $g_i \in G_{j_i}$ (❓ is a generator?). For an arbitrary product $*_{j \in J}G _j$, this can be also stated as the unique homomorphism $\varphi : *_{j \in J}G _j \to H$ such that $\varphi |_{G_j} = G_j$.
>
>![[Pasted image 20241213132505.png|200]]

^7e3818

We also have the following restatement of the lemma used to prove [[(Theorem) The fundamental group of the n-sphere is trivial in higher dimensions]], which claimed that given a based loop in a union of spaces has the form of a [[Path concatenation|path concatenation]] product of based loops from each space.

>[!abstract] Theorem (Munkres 59.1): The unique homomorphism of the free product is a surjection
>Suppose $X = \bigcup_{\alpha \in J} A_\alpha$, where each $A_\alpha$ is open and [[(Path-)connectedness|path-connected]], and each intersection $A_\alpha \cap A_\beta$ is also path-connected.  For $x_0 \in X$, the inclusions $i_\alpha : A_\alpha \to X$ [[Induced homomorphism between fundamental groups|induce homomorphisms]] $(i_\alpha)_* : \pi_1(A_\alpha, x_0) \to \pi_1(X, x_0)$. Consider $G = \pi_1(X, x_0)$ as the [[Free products of groups|free product]] with $G_\alpha = \pi_1(A_\alpha, x_0)$ and homomorphisms $\varphi_\alpha = (i_\alpha)_*$. Then $\varphi$ is surjective.

#wip See 12-3 lecture

