---
aliases:
  - formal derivative
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 🟠
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-05-06T10:20:27-04:00
---
# Overview and basic definition

>[!definition] Formal derivative
>Given [[Algebraic fields|field]] $F$ and a [[Polynomial rings|polynomial]] $f = \sum_{i=0}^n a_i x^i \in F[x]$, the **formal derivative** of $f$ is defined as the polynomial $$ Df = \sum_{i=1}^n(i\cdot a_i)x^{i-1}. $$

---
# Properties of formal derivatives

>[!proposition] Properties of the formal derivative
>- (i) **Linearity:** The map $D : F[x] \to F[x]$ is $F$[[Linear maps|-linear]], meaning for all $f, g \in F[x]$ and $a \in F$, we have $$ D(f + g) = Df + Dg \quad \quad D(af) = aDf. $$
>- (ii) **Product rule:** For all $f, g \in F[x]$, $$ D(fg) = (Df)g + f(Dg). $$
>- (iii) **Power rule:** For all $f \in F[x]$ and $n \in \mathbb N$, $$ D(f^n ) = n \cdot f^{n-1}Df. $$


>[!proposition] Kernel of the formal derivative
>Let $D : F[x] \to F[x]$ be the $F$-linear map corresponding to the formal derivative, which has kernel defined by $\ker D = \{ f \in F[x] \ : \ Df = 0 \}$. Then depending on the [[Characteristics of rings|characteristic]] of $F$, we have $$ \ker D = \begin{cases} F , & \textup{if char}F = 0 \\ F[x^p] & \textup{if char}F = p > 0\end{cases}, $$ where $$F[x^p] = \left \{ \sum_{i=0}^n a_i x^{ip} \ : \ a_i \in F \right \} \leq F[x] $$ is the subring of all polynomials in $x^p$.

>[!remark]
>The statement for the case $\textup{char}F = p$ is equivalent to saying that $f = \sum_{i=0}^na_ix^i$ has $Df = 0$ iff for all indices $i$ corresponding to nonzero coefficients $a_i \neq 0$, $p$ [[Factorization on integral domains|divides]] $i$. Alternatively, $f$ is of the form $g(x^p)$ for some $$ g = \sum_{j=0}^m b_j x^j = \sum_{j=0}^m a_{jp} x^{jp}. $$



---
# Detecting multiple roots

>[!proposition] Criterion for an element to be a multiple root
>Let $f \in F[x]$ be a *nonconstant* polynomial. Then an element $\alpha \in F$ is a [[Polynomial roots|multiple root]] of $f$, meaning $(x - \alpha)^m$ divides $f$ for some $m \geq 2$, *if and only if* $$ f(\alpha) = Df(\alpha) = 0. $$

*Proof from [[MATH-GU4042|Modern Algebra II]].* $\ \textup{ }$ Write $f = (x - \alpha)^m g$ for some $g \neq 0\in F[x]$. We can check each possible value of $m$:
- If $m = 0$, then $f(\alpha) = g(\alpha) \neq 0$ by assumption.
- If $m = 1$, then $$ Df = m(x-\alpha)^{m-1}g + (x-\alpha)^m Dg $$ evaluates to $Df(\alpha) = g(\alpha) \neq 0$ again by assumption.
- If $m \geq 2$, then we evaluate $Df(\alpha) = 0$. Since $\alpha$ is a root of $f$, we conclude $f(\alpha) = D(\alpha) = 0$ as claimed. $\quad \square$

>[!proposition] Criterion for the *existence* of a multiple root
>Let $f \in F[x]$ be a *nonconstant* polynomial. Then there exists an [[Extension fields|extension field]] $E$ of $F$ and a multiple root of $f$ in $E$ *if and only if* $f$ and $Df$ are not [[Factorization on polynomial rings|relatively prime]] in $F[x]$ (i.e., $\gcd(f, Df) \neq 1$).

*Proof from [[MATH-GU4042|Modern Algebra II]].*

>**Claim:** Divisibility, greatest common divisors, and relative primality of polynomials in $F[x]$ are unchanged in $E[x]$ (i.e., after passing to extension fields).

Assuming the claim, we have:
- $\implies$: Suppose $E$ is an extension field of $F$ and $\alpha$ is a multiple root of $f$ in $E$. Then $f(\alpha) = Df(\alpha) = 0$ means that $\alpha$ is a root of both $f$ and $Df$, so $x-\alpha$ divides both $f$ and $Df$. This means explicitly that $f, Df$ are not relatively prime in $E[x]$, so they also are not relatively prime in $F[x]$.
- $\impliedby$: Suppose $f, Df$ are not relatively prime in $F[x]$, so there exists a common *nonconstant* factor $g \in F[x]$ that divides both $f$ and $Df$. Then there is an extension $E$ of $F$ that contains a root $\alpha$ of $g$ (by results from [[Extension fields#Extensions with irreducible factors]]). Then $\alpha$ is a common root of $f$ and $Df$ in $E$, i.e., $f(\alpha) = Df(\alpha) = 0$, so $\alpha$ is a multiple root of $f$ (by the criteria above). $\ \square$

>[!corollary] Existence of multiple roots for irreducible polynomials
>- (i) Let $f \in F[x]$ be an [[Factorization on polynomial rings|irreducible]] polynomial. Then there exists an extension field $E$ of $F$ and a multiple root of $f$ in $E$ *if and only if* $Df = 0$. 
>- (ii) If $F$ has [[Characteristics of rings|characteristic]] $0$, then $f$ does not have a multiple root in any extension field $E$ of $F$. In particular, if $E$ is an extension field of $F$ such that $f$ splits into linear factors in $E$, say $$ f = c(x - \alpha_1) \cdots (x - \alpha_n),$$ then the $\alpha_i$ are distinct.

*Proof of (i) from [[MATH-GU4042|Modern Algebra II]].* 
- $\implies$: If there exists an extension field $E$ of $F$ and a multiple root of $f$ in $F$, then $\gcd(f, Df) \neq 1$. Since $f$ is assumed irreducible, it must be that $f$ divides $Df$, implying $Df \geq \deg f$. But by definition, either $Df < \deg f$ or $Df = 0$, so we must have $Df = 0$.
- $\impliedby$: If $Df = 0$, then $f$ is a $\gcd$ of both $f$ and $Df$, so $f, Df$ are not relatively prime in $F[x]$. $\ \square$

---
# Examples

#### Multiple roots for characteristic $p > 0$

Let $F = \mathbb F_p$ be a field with characteristic $p > 0$, and consider the simple extension $\mathbb F_p(t)$, where $t$ is [[Extension fields|transcendental over]] $\mathbb F_p$ (we say $t$ is an **indeterminate**). Recall that $\mathbb F_p(t)$ is the [[Field of rational functions]] in $t$ over $\mathbb F_p$.
- **$t$ is not a $p$th power:** otherwise, if $t = (g/h)^p$ where $g, h \in \mathbb F_p[t]$ are coprime, then $t \cdot h^p = g^p$ implies $1 + p \cdot \deg h = p \cdot \deg g$, but this is impossible since $1$ is not divisible by $p \geq 2$.
- **$x^p - t$ is irreducible in $\mathbb F_p(t)[x]$:** otherwise, if $x^p - t$ were reducible, it would factor into 



---
# Notes
