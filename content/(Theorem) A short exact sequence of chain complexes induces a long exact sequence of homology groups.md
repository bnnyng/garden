---
aliases:
  - connecting homomorphism
  - SES of chain complexes
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: <% tp.file.creation_date() %>
lastmod: 2025-04-06T15:13:23-04:00
---
# Overview



---
# Preliminaries: The connecting homomorphism

>[!definition] Short exact sequence of chain complexes
>A **short exact sequence of chain complexes** consists of composable chain maps $f: (A_*, \partial) \to (B_*, \partial)$ and $g: (B_*, \partial) \to (C_*, \partial)$ such that the sequence
>$$
>0 \to A_p \to_{f_p} B_p \to_{g_p} C_p \to 0
>$$
>is [[Exact sequences|exact]] for all $p$.

>[!lemma] Existence of the connecting homomorphism
>Given a short exact sequence of chain complexes, there is a well-defined homomorphism $\delta : H_p(C_*, \partial) \to H_{p-1}(A_*, \partial)$, called the **connecting homomorphism**, defined by
>$$
>\delta([c]) = [a]
>$$
>when $f(a) = \partial b$ for some $b \in B_p$ with $g(b) = c$.

*Sketch of proof from [[MATH-GU4053|Algebraic Topology]].*

The proof involves the following key steps:

- **Existence of well-defined choices of $b$ and $a$:** Let $c \in C_p$ be a [[Singular chains and singular homology|cycle]] (i.e., $\partial c = 0$). Surjectivity of $g = g_p : B_p \to C_p$ (due to its location in the SES) implies that we can choose $b \in B_p$ such that $g(b) = c$, and by definition of a chain map we have $$ g_{p-1}(\partial b) = \partial c = 0.$$ By exactness, we have $$ \partial b \in \ker (g_{p-1}) = \text{Im}(f_{p-1}) $$ as well, so there exists an $a \in A_{p-1}$ such that $f(a) = \partial b$.
- **Why $a$ is a cycle corresponding to a *homotopy class* $[a]$:** Since $f$ is a chain map, we have $$ f(\partial a) = \partial f(a) = \partial^2 b = 0. $$ Since $f$ is injective (due to its location in the SES), it has a trivial kernel, so we must have $\partial a = 0$ and therefore $a \in A_{p-1}$ is a cycle corresponding to a class $[a] \in H_{p-1} (A_*, \partial)$.
- **The class $[a] \in H_{p-1}(A_*, \partial)$ does not depend on choice of lift $b \in B_p$:** Suppose we have two different [[Lifting properties of covering spaces|lifts]] of a representative $c \in C_p$, i.e., $$ c = g(b) = g(\tilde b) \quad \quad f(a) = \partial b = \partial \tilde b. $$ Then $g(b) - g(\tilde b) = g(b - \tilde b) = 0$, so by exactness there exists $x \in A_p$ such that $f(x) = b - \tilde b \in B_p$. Then $$ \partial b = \partial (\tilde b + f(x)) = \partial \tilde b + \partial f(x) = f(a) + f(\partial x) = f(a + \partial x), $$ so we have shown that $\delta ([c]) = [a] = [a + \partial x]$. But $a$ differs from $a + \partial x$ by a boundary, so by definition $[a] = [a + \partial x]$.
- **The class $[a]$ also does not depend on choice of representative for $[c]$:** Suppose we have two representatives for the same homology class $[c] = [\tilde c] \in H_p(C_*, \partial)$, so $c = \tilde c + \partial y$ for some $y \in C_{p+1}$. Since $g$ is surjective, we can write $y = g(x)$ for some $x \in B_{p+1}$, so $$ c = g(b) + \partial g(x)  = g(b + \partial x), $$ which implies that $b + \partial x$ is another lift of $c$. But we showed above that $[a]$ does not depend on choice of lift, and indeed, $$ \partial(b + \partial x) = \partial b + \partial^2 x = \partial b + 0 = f(a), $$ so this gives the same candidate $[a]$ for $\delta([c])$.
- **The map $\delta$ is indeed a homomorphism (of abelian groups):** TBD, or exercise. $\ \square$
 

---
# Statement and proof


>[!theorem] A short exact sequence of chain complexes induces a long exact sequence in homology
>Let $f: (A_*, \partial) \to (B_*, \partial)$ and $g : (B_*, \partial) \to (C_*, \partial)$ be composable [[Homology of general chain complexes|chain maps]] forming a [[Exact sequences|short exact sequence]] of chain complexes, and let $\delta : H_p(C_*, \partial) \to H_{p-1}(A_*, \partial)$ be the connecting homomorphism. Then the sequence
>$$
>\cdots \to_\delta H_p(A_*, \partial) \to_{f_*} H_p(B_*, \partial) \to_{g_*} H_p(C_*, \partial) \to_\delta H_{p-1}(A_*, \partial) \to_{f_*} \cdots 
>$$
>is exact.

*Proof from [[MATH-GU4053|Algebraic Topology]].* $\ \text{}$
- **Exactness at $H_p(A_*, \partial)$:** By the definition of $\delta$, given some $[c] \in H_{p+1}(C_*, \partial)$, we have $$ (f_* \circ \delta)([c]) = f_*([a]) = [f(a)] = [\partial b] = 0, $$ so $f_* \circ \delta$ is precisely the zero map and $\textup{Im}(\delta ) \subseteq \ker(f_*)$. Conversely, 
- **Exactness at $H_p(B_*, \partial)$:** Since $g \circ f = 0$ implies $g_* \circ f_* = 0$, we know that $\textup{Im}(f_*) \subseteq \ker (g_*)$. Conversely, let $[b] \in \ker(g_*)$ be a homology class with a representative **cycle** $b \in B_p$ that is homologous to $0$ (i.e., $\partial b = 0$). Then $g_*([b]) = [g(b)]$ is also homologous to $0$, so $g(b) \in C_{p}$ is a **boundary** of some $n+1$ chain, i.e., $g(b) = \partial c'$ for $c' \in C_{p+1}$. Surjectivity of $g$ implies that there exists $b’ \in B_{p+1}$ such that $c’ = g(b’)$. Then we have equalities $\partial c’ = \partial g(b’) = g(b)$, so $$ g(b - \partial b') = g(b) - g(\partial b') = g(b) - \partial g(b') = 0 \in \ker(g). $$ By exactness in the chain complexes, this implies $b - \partial b’ \in \textup{Im}(f)$ as well, so there exists some $a \in A_p$ such that $f(a) = b - \partial b’$. Finally, we show $a$ is a **cycle**, i.e., $a \in \ker (\partial_p : A_p \to A_{p-1})$. Taking the boundary of both sides, we have $$ \partial f(a) = \partial(b - \partial b') = \partial b + \partial^2 b = 0, $$ which means $f(\partial a) = 0$. Then injectivity of $f$ implies $\partial a = 0$, and so $a$ is indeed a cycle representing a class $[a] \in H_p(A_*, \partial)$. Thus, $$ f_*([a]) = [b - \partial b'] = [b] - [\partial b'] = [b], $$ and we conclude that $[b] \in \textup{Im}(f_*)$ and $\ker(g_*) \in \textup{Im}(f_*)$. 
- 

- Note that make use of the fact that compositon 0 means the image of the first is in the kernel of the second, since the kernel is the whole domain

---
# Code snippets

```
f: (A_*, \partial) \to (B_*, \partial)
```

```
\textup{Im}
```

