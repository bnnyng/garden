---
aliases:
  - cup product
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4053
status: 
publish: 
lastmod: 2025-05-07T11:37:08-04:00
date: 2025-05-01T13:40:31-04:00
---
# Overview 

- Cup product makes cohomology into ring

>[!definition] Cup product
>Let $X$ be a topological space and $R$ be a [[Algebraic rings|ring]]. 
>At the [[Cohomology of spaces|cochain]] level, the cup product of a $p$-cochain $\varphi : \text{Sin}_p(X) \to R$ and a $q$-cochain $\psi: \text{Sin}_q(X) \to R$ is given by
>$$
>(\varphi \smile \psi) (\sigma) = \varphi(d^q_{p+1} \sigma) \cdot \psi(d^p_{0}\sigma) = \varphi(\sigma|_{[v_0, \ldots, v_p]}) \psi (\sigma |_{[v_p, \ldots, v_{p+q}]}),
>$$
>where $\sigma : \Delta^{p+q} \to X$ is a singular $(p + q)$-simplex. This induces a cup product on the [[Cohomology of spaces|cohomology level]], which is a bilinear operation 
>$$
>H^p(X; R) \times H^q(X; R) \to H^{p+1}(X; R), \quad \quad (\varphi, \psi) \mapsto \varphi \smile \psi.
>$$

#wip parse the above

The associative, distributive, and unital properties of the cup product allow it define multiplication on the [[Cohomology of spaces|cohomology groups]]
$$
H^*(X; R) := \oplus H^p(X; R)
$$
of a space $X$, making cohomology into a [[Graded rings|graded ring]].


---
# Properties

- **Relation between cup product an coboundary:** Well-definedness is a consequence of the **Leibniz rule** $$ \delta(\varphi \smile \psi) = (\delta \varphi) \smile \psi + (-1)^p \varphi \smile (\delta \psi), $$ which relates a cup product of cochains to the coboundary map (see Hatcher Lemma 3.6, p. 206). This is the same as the **product rule** for **differential forms**, which is a generalization of the [[Derivatives of real functions|product rule]] for derivatives. From this formula, it is clear that the product of two cocycles is a cocycle, and the product of a cocycle with a coboundary (in either order) is a coboundary. 
- **Induced cup product on cohomology:** The Leibniz rule implies that if $[\varphi] \in H^p(X; R)$ and $[\psi] \in H^q(X; R)$, meaning $\delta \varphi = \delta \psi = 0$, then $$ \delta(\varphi \smile \psi) = 0 \smile \psi \pm \varphi \smile 0 = 0, $$so $[\varphi \smile \psi] \in H^{p+q}(X; R)$.
- **Distributive, associative, and unital:** Distributivity and associativity of $\smile$ at the cochain level is inherited from distributivity and associativity in $R$. If $R$ has an identity element, then there is a unique identity $1 \in H^0(X; R)$ for $\smile$ such that $$ \varphi \smile 1 = 1 \smile \varphi = \varphi $$ for all $\varphi$; this is defined by the $0$-cocycle that takes the value $1 \in R$ on each singular $0$-simplex. #concept-question  verify?
- 


![[Pasted image 20250501231500.png]]
![[Pasted image 20250501231625.png]]


----
# Interpretation

Geometrically, the cup product is a particular way of embedding the $p$ simplex and the $q$ simplex in the $p + q$ simplex. The $p$-simplex obtained by restriction  
$$
\sigma|_{[v_0, \ldots, v_p]}, 
\quad \quad
(t_0, \ldots, t_p) \mapsto (t_0, \ldots, t_p, 0, \ldots, 0)
$$
is (informally) called the “**front $p$-face**”, and the $q$-simplex obtained by
$$
\sigma|_{[v_0, \ldots, v_p]}, 
\quad \quad
(t_0, \ldots, t_q) \mapsto (0, \ldots, 0, t_0, \ldots, t_q)
$$
is called the “**back $q$-face**”.


---
# Examples

#### $p = q = 0$

In the special case that $p = q = 0$, we have
$$
C^0(X;R) = \{ \varphi : \text{Sin}_0(X) \to R \} \cong \{ \varphi : X \to R \}.
$$
Then it is clear how to “multiply” the cochains: we define
$$
(\varphi \smile \psi)(\sigma) = \varphi(\sigma) \psi(\sigma).
$$
