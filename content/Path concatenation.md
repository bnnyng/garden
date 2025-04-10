---
aliases:
  - path concatenation
tags:
  - permanent-note
  - topic-logic-mathematics
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-06T21:27:43-04:00
---
# Overview and basic definition

>[!example] Definition: Path concatenation
>If $f$ is a path in $X$ from $x_0$ to $x_1$, and $g$ is a path in $X$ from $x_1$ to $x_2$, their **concatenation** or **composition** is a path from $x_0$ to $x_2$ defined by
>$$
>(f * g)(s) = 
>\begin{cases}
>f(2s) &0 \leq s \leq 1/2\\
>g(2s-1) &1/2 \leq s \leq 1.
>\end{cases}
>$$
>The operation $*$ induces a well-defined operation on path-homotopy classes, which is given by
>$$
>[f] * [g] = [f * g].
>$$

^e49aaf
**Related notes:**
- [[Homotopies]]
- [[Fundamental groups]]

---
# Concatenation and path-homotopies

>[!abstract] Lemma: Concatenation properties with path homotopies
>Let $f,f',g : I \to X$ be paths.
>- (i) If $f \simeq_p f’$ and $g \simeq_p g’$, then $f*g \simeq_p f’*g’$.
>- (ii) If $h : X \to Y$ is continuous and $f \simeq_p f’$, then $h \circ f \simeq_p h \circ f’$.
>- (iii) $h \circ (f * g) = (h \circ f) * (h \circ g)$.

^c0e381

*Proof from [[MATH-GU4051|Topology]].*

- (i) Let $H$ be a path-homotopy from $f$ to $f’$ and $G$ be a path-homotopy from $g \to g’$. Define 
$$ 
F(s, t) = 
\begin{cases}
H(2s, t) &0 \leq s \leq 1/2 \\
G(2s-1, t) &1/2 \leq s \leq 1.
\end{cases}
$$
This is well-defined since $H(1, t) = x_1 = G(0, t)$, and continuous by the [[Continuous functions|pasting lemma]]. 🔺Check that $F$ is a path-homotopy from $f * g$ to $f’*g’$.
- (ii) 🔺 Check that if $H$ is a path-homotopy from $f$ to $f$, then $h \circ H$ is a path-homotopy from $h \circ f$ to $h \circ f’$.
- (iii) 🔺 Clear from the definition: just plug in values of $t$…or $s$? $\ \square$

----
# Groupoid properties of path concatenation 

>[!abstract] Claim (Munkres 51.2): “Groupoid properties” of path concatenation on path-homotopy classes
>Let $X$ be a [[Topological spaces and open sets|topological space]] and $f, g, h$ be paths in $X$ that are “composable,” meaning that consecutive pairs share an endpoint. Then [[Path concatenation|path concatenation]] $*$ satisfies the following:
>- (i) **Associativity:** $(f * g) * h \simeq_p f * (g * h)$;
>- (ii) **Left and right identities:** for $x \in X$, let $\mathbf 1_x$ be the constant path $\mathbf 1_x (s) = x$. Then $\mathbf 1_x * f \simeq_p f$ and $f * \mathbf 1_x \simeq_p f$;
>- (iii) **Inverses:** Let $\bar f$ be the reverse path from $x_1$ to $x_0$ defined by $\bar f(t) = f(1-t)$. Then $\bar f * f \simeq_p \mathbf 1_{x_1}$ and $f * \bar f \simeq_p \mathbf 1_{x_0}$.

^27df0f