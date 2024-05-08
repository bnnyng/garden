---
aliases:
  - sequence
  - subsequence
  - limit
  - converges
  - convergent sequence
  - converge
  - converges to
  - bounded sequence
  - sequence definition
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
publish: "true"
date: 2023-02-26
lastmod: 2024-04-10T20:19:08-07:00
status: 🟨
---
# Overview

A sequence is a function whose domain is the natural numbers. Sequences can diverge (e.g., $x_n = n$), converge (e.g., $x_n = 1/n$), or oscillate (e.g., $x_n = (-1)^n$).

A **convergent sequence** has a [[The real numbers|real]] **limit** $x$ such that the values $x_n$ can be made arbitrarily close to $x$ for large values of $n \in \mathbb N$.

---
# Sequences and subsequences

>[!example] Definition: Sequence
>A **sequence**, often denoted $(x_n)_{n \in \mathbb N}$, is a discrete function $\mathbb N \to \mathbb R$ which maps each natural number $n$ to a real value $x_n$. 

>[!example] Definition: Subsequence
>If $(x_n)_{n \in \mathbb N}$ is a sequence and $(n_k) \in \mathbb N$ is a sequence of natural numbers with $n_{k+1} > n_k$, then $(x')_k = x_{n_k}$ is a **subsequence** of $(x_n)_{n \in \mathbb N}$.

>[!example] Definition: Bounded sequence
>A sequence is **bounded** if there exists an $M > 0$ such that $|x_n| \leq M$ for all values in the sequence (see also: [[Supremum and infimum]]).

---
# Convergent sequences and limits

See also: [[Cauchy sequence]]

>[!example] Definition: Convergence and limit
>Given a **sequence** of real numbers $x_1, x_2, x_3, \cdots$ , abbreviated $x_n$, and a real number $x$, we say $x_1, x_2, x_3, \cdots$ **converges to** $x$ if 
>$$ 
>\forall_{\epsilon > 0} \ \exists_{N \in \mathbb N} \ \forall_{n \in \mathbb N} \ [ \ n > N \implies |x_n - x| < \epsilon \ ]. 
>$$
>If $x_n$ converges to $x$, then $x$ is called the **limit** of the sequence $x_n$, and we write $\lim_{n \to \infty} x_n = x$. A **divergent** sequence does not converge to some real number.

- *(Proposition 3.1)* **Continuous functions take convergent sequences to convergent sequences.** If $f: D \to \mathbb R$ is [[Pointwise continuity|continuous]] and $x_n \in D$ is a **convergent sequence** $x_n \to x$ with $x \in D$ as well, then $f$ sends $x_n$ to another convergent sequence $f(x_n) \to f(x)$ .
- *(Proposition 3.2)* **Convergent sequences converge to a *unique* limit**. If $x_n \to x$ and $x_n \to x^\prime$, then $x = x^\prime$.
- *(Lemma 3.3)* **Bounded monotone sequences converge.** Suppose $x_n$ is **monotone increasing**, so $x_n +1 \geq x$ for all $n \in \mathbb N$, and [[Supremum and infimum|bounded above]], so there exists an $x$ with $x_n \leq x$ for all $n \in \mathbb N$. Then $x_n$ **converges** to some $x^\prime$.
- [[(Theorem) All bounded sequences have a convergent subsequence]] (Bolzano-Weierstrass).