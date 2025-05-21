---
aliases:
  - perfect
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-05-12T13:02:37-04:00
---
# Definition

>[!definition] Perfect field
>A [[Algebraic fields|field]] $F$ is **perfect** if one of the following equivalent conditions holds:
>- (i) The **characteristic** of $F$, or smallest number of copies of the multiplicative identity that equal the additive identity, is either $0$, or equal to some $p$ for which every element of $F$ is a $p$th power (i.e., for all $\alpha \in F$, there exists a $\beta \in F$ such that $\beta^p = \alpha$;
>- (ii) If $F$ is of characteristic $p$, then the [[Frobenius homomorphism]] $$ \sigma_p : F \to F, \quad \quad \alpha \mapsto \alpha^p \text{ for all }\alpha \in F $$ is [[Injectivity, surjectivity, and bijectivity|surjective]]. 

---
# Connections to other topics

- [[Algebraic fields]]: Every **finite** field is perfect.
- [[Formal derivatives on polynomial rings]]: If $F$ is perfect and $f \in F[x]$ is [[Irreducible polynomials|irreducible]], then $f$ has **no repeated roots** in any extension. This is because a polynomial has repeated roots if and only if it shares a common factor with its formal derivative (i.e., $\gcd(f, Df) \neq 1$). If $F$ is of characteristic zero, then $Df = 0$ and hence there are no repeated roots (see: [[Characteristics of rings#Fields of characteristic zero]]). Otherwise, if $F$ is of characteristic $p > 0$, then $Df = 0$ if and only if $f = g(x^p)$ for some $g \in F[x]$. But since the Frobenius homomorphism $\alpha \mapsto \alpha^p$ is surjective, then we would have $f = g(x^p) = h^p$ for some $h \in F[x]$, which would imply that $f$ is reducible. 
- [[Separable, normal, and Galois extensions of fields]]: Every finite extension of a perfect field is a **separable extension**. 

---
# Examples

#### Every algebraically closed field is perfect

#### Every finite field is perfect

>**Claim:** Every finite field is perfect.


---
 - Algebraially closed field is perfect, clear if K = 0, 
 - Every finite field is perfect