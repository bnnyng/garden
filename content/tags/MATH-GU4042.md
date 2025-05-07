---
aliases:
  - "#MATH-GU4042"
  - Modern Algebra II
title: Class | Modern Algebra II
lastmod: 2025-01-22T15:44:54-05:00
date: 2025-01-21T10:29:38-05:00
---
# Overview

*Columbia University, Spring 2025 – R. Friedman*

>[!example] Course description
>Rings, homomorphisms, ideals, integral and Euclidean domains, the division algorithm, principal ideal and unique factorization domains, fields, algebraic and transcendental extensions, splitting fields, finite fields, Galois theory.

| Section                               | Definitions                                                                                                                                                                                                                                                | Key results                                                                                                                                                                                  | Examples                                                                                                                                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General ring theory                   | - Ring, subring<br>- Ring with unity, units<br>- Division ring, field<br>- Cancellation law, nilpotent<br>- Integral domain<br>- Characteristic of a ring<br>- Field of quotients<br>- Ideal, quotient ring<br>- Principal ideal, prime and maximal ideals |                                                                                                                                                                                              | - [[Integers modulo n]]<br>- [[Polynomial rings]]<br>- [[Quaternions]]<br>- [[Rings of functions]]<br>- [[Gaussian integers]]<br>- [[Prime (sub)fields]]<br>- [[Frobenius homomorphism]]<br>- [[Field of rational functions]]<br> |
| Division and polynomial factorization | - Greatest common divisor, relatively prime, irreducible                                                                                                                                                                                                   | - [[(Theorem) Long division with remainder]]<br>- [[(Theorem) Unique factorization in polynomial rings]]<br>- [[(Theorem) Existence of a primitive root]]                                    |                                                                                                                                                                                                                                   |
| Field theory                          |                                                                                                                                                                                                                                                            | - [[(Theorem) Every nonconstant polynomial over a field has a root in some extension field]]<br>- [[(Theorem) Every nonconstant polynomial over a field has a root in some extension field]] | - [[Field of algebraic numbers]]<br>- [[Finite extensions of the rationals]]                                                                                                                                                      |
| Galois theory                         |                                                                                                                                                                                                                                                            | - [[(Theorem) Fundamental theorem of Galois theory]]                                                                                                                                         | - [[Roots of unity]]                                                                                                                                                                                                              |

---
# Study status

```dataview
TABLE WITHOUT ID
file.link as "Name",
lastmod as "Last Reviewed",
status as "Status"

FROM #MATH-GU4042 
SORT lastmod ASC
```

---
# Code snippets


```
\mathbb Z / n \mathbb Z
```

---

# Log

[[2025-03-31]]

- [ ] [[Factorization on integral domains]]
	- [ ] When does gcd fail to exist if something is not an integral domain (counterexample)?
- [ ] Understand how to “rationalize the denominator”

[[2025-03-30]]

- [ ] [[Factorization on polynomial rings]]
	- [ ] Why is every ideal of a polynomial ring [[Ideals and quotient rings|principal]]?
- [ ] [[Polynomial roots]]
	- [ ] What is the relationship between roots and trivial/nontrivial linear combinations when viewing extensions as vector spaces?
- [ ] [[Formal derivatives on polynomial rings]]
	- [ ] Are there conditions for being certain that a general (not necessarily irreducible) polynomial has no multiple roots in any extension field?

[[2025-03-26]]

- [ ] Notecards to make
	- [ ] Finite field is perfect

[[2025-03-24]]

- [ ] [[Extension fields]]
	- [ ] Minimal polynomial divides every other polynomial for which $\alpha$ is a root? Does this fact follow from [[(Theorem) Long division with remainder]]?
	- [ ] What is the Euclidean algorithm for polynomials?

[[2025-03-21]]

- [ ] [[Extension fields]]
	- [ ] $F(\alpha)$ notation means specifically $\textup{Im} \ \textup{ev}_\alpha$ always? What exactly is this notation—all $F$-multiples of $\alpha$?
	- [ ] Relation between extension field and polynomial rings?

[[2025-03-07]]

- [ ] [[Extension fields]]
	- [x] Proof of Proposition 1.1: Why is a subring of a field an integral domain? What keeps it from being a field?
		- Answer: The subring inherits the “no zero divisors” property. Also, note that this is reciprocal by defining [[Field of quotients of an integral domain]].
- [ ] [[Prime and maximal ideals]]
	- [ ] Proof of the equivalence of prime and maximal ideals in polynomial rings?

[[2025-03-04]]

- [ ] [[Extension fields]]
	- [ ] Does the general [[Field of quotients of an integral domain|field of quotients]] have anything to do with being subfields of things?

[[2025-02-26]]

- [ ] [[Factorization on polynomial rings]]
	- [ ] What are the cosets in a quotient by an irreducible polynomial? Why does it not include irreducible polynomials in the same degree?

[[2025-02-23]]

- [ ] [[Factorization on polynomial rings]]
	- [ ] Relationship between degrees of polynomials and their sums/products?
	- [ ] What is the implication of relatively prime and irreducible?
	- [ ] Understand proof that if $p$ irreducible, then $p, f$ relatively prime or $p | f$. Why is it the case that we can conclude $p = 1$ or $p = gcd(p, f)$?

[[2025-02-19]]

- [ ] [[Polynomial rings]]
	- [ ] HW 2.4 – What is going on with rationalizing the denominator?

[[2025-02-16]]

- [ ] [[Polynomial rings]]
	- [ ] Why do we care about leading coefficients of polynomials?
- [ ] [[Ideals and quotient rings]]
	- [x] In the example with the evaluation homomorphism, where exactly is the absorbing property? 
	- [ ] How does closure under multiplication work if we include the identity $1 \in R$? How is this situation different from if $1 \in I$?

[[2025-02-10]]

- [ ] [[Polynomial rings]]
	- [ ] Why can’t the homomorphism from the polynomial ring to the ring of all functions $R \to R$ be injective when $R$ is finite—why is $R[x]$ infinite? Is $R[x]$ always infinite?
	- [ ] Why is it the case that $\textup{ev}_r(x) = r$? Is this by convention?
- [ ] [[Cancellation laws and integral domains]]
	- [ ] Is the fact that $\mathbb F_p[x]$ is infinite integral domain with nonzero characteristic immediately implying that it is not a field? Does every field need to have both, and why or why not?
- [ ] [[Field of quotients of an integral domain]]
	- [ ] Is the unique induced homomorphism just a consequence of the [[Universal properties of topologies|universal property]] of the quotient? Is this even a useful question to ask?
	- [ ] Why is injectivity often such a special property? Where else is it showing up?
- [ ] Results to add to notes
	- [x] $\mathbb Z / n \mathbb Z$ is a field for prime $n$ (hence an integral domain)