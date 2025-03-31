---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-20 16:27
lastmod: 2024-12-19T02:36:29-05:00
---
>[!abstract] Theorem: Continuity is equals uniform continuity on compact spaces
>Let $(X, d_X)$ and $(Y, d_Y)$ be [[Metrics, metric spaces, and the metric topology|metric spaces]]. If $f: X \to Y$ is [[Continuous functions|continuous]] and $X$ is [[Compactness|compact]], then $f$ is uniformly continuous.

^96dcf9

*Proof from [[MATH-GU4061|Modern Analysis I]]*.

Given $\epsilon > 0$, we know for all $x’ \in X$, there exists $\delta(x’)> 0$ such that 
$$
d_X(x, x') < \delta(x') \implies d_Y(f(x), f(x')) < \epsilon
$$
for *all* $x \in X$. Then $\delta : X \to \mathbb R$ is a map.

🔺 *Exercise.* Show that $\delta : X \to \mathbb R$ can be chosen to be continuous.

Since $\delta$ can be chosen to be continuous, by the [[(Theorem) Extreme value|extreme value theorem]], it attains its minimum $\delta_0 > 0$ on the domain $X$. Then, in particular, for this choice of $\epsilon> 0$ and all $x, x’ \in X$, we have
$$
d_X(x, x') < \delta_0 \implies d_Y(f(x), f(x')) < \epsilon
$$
as well. Hence, $f$ is uniformly continuous.

❓ *Question*. Works because choosing the minimum…?

*Proof from [[MATH-GU4051|Topology]]*.

Let $\epsilon > 0$. Cover $X$ by 
$$
\mathcal C = \{ f^{-1}(B(y, \epsilon / 2)\}_{y \in Y}.
$$
Let $\delta$ be a [[(Lemma) Lebesgue numbers exist for compact metric spaces|Lebesgue number]] for $\mathcal C$. If $d(x_1, x_2) < \delta$ (DISTANCE), then 
$$
\text{diam}\{ x_1, x_2\} < \delta \implies \{x_1, x_2\} \subseteq f^{-1}(B(y, \epsilon /2)) \text{ for some }y \in Y \implies d_Y(f(x_1), f(x_2)) < \epsilon.
$$

