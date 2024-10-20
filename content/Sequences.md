---
aliases:
  - sequence
  - subsequence
  - limit
  - converges
  - convergent sequence
  - converge
  - converges to
  - sequence definition
  - sequentially compact
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-42X
  - MATH-GU4061
publish: "true"
date: 2024-04-10 18:42
lastmod: 2024-10-15T10:54:32-04:00
status: 🟠
---
# Overview

A sequence is a function whose domain is the natural numbers. Sequences can diverge (e.g., $x_n = n$), converge (e.g., $x_n = 1/n$), or oscillate (e.g., $x_n = (-1)^n$).

A **convergent sequence** has a **limit** $x$ such that the values $x_n$ can be made arbitrarily close to $x$ for large values of $n \in \mathbb N$. Every convergent sequence is also [[Cauchy sequences and complete metric spaces|Cauchy]].

Related: [[Convergence of functions]], [[Bounded sets and functions#Bounded sequences|Bounded sequences]]

---
# In metric spaces

## Sequences and subsequences

>[!example] Definition: Sequence in a metric space
>Given a [[Metrics, metric spaces, and the metric topology|metric space]] $(X, d)$, a **sequence**, often denoted $(x_n)_{n \in \mathbb N}$, is a discrete function $\mathbb N \to \mathbb X$ which maps each natural number $n$ to some $x_n \in X$. 
^bdedb7

>[!example] Definition: Subsequence
>If $(x_n)_{n \in \mathbb N}$ is a sequence and $(n_k) \in \mathbb N$ is a sequence of natural numbers with $n_{k+1} > n_k$, then $(x')_k = x_{n_k}$ is a **subsequence** of $(x_n)_{n \in \mathbb N}$.

![[Bounded sets and functions#^9253f7]]

## Convergent sequences and limits


>[!example] Definition: Convergent sequence in a metric space
>Given a [[Metrics, metric spaces, and the metric topology|metric space]] $(X, d)$, a sequence $(x_n)_{n \in \mathbb N}$ is called **convergent in $X$** if there exists $x \in X$ such that
>$$
>\forall_{\epsilon> 0} \ \exists_{N \in \mathbb N} \ \forall_{n \in \mathbb N} \ [ n \geq N \implies d(x_n, x )< \epsilon].
>$$
>In this case, we say $x$ is the **limit** of $(x_n)_{n \in \mathbb N}$ and write $\lim_{n \to \infty}x_n = x$. A sequence is **divergent** if it does not converge to some $x$.

^067414

>[!abstract] Proposition: Facts about convergent sequences *in metric spaces* 
>- (i) Convergent sequences converge to a unique limit.
>- (ii) If a sequence converges, then it is also [[Bounded sets and functions|bounded]].
>- (iii) Every convergent sequence is [[Cauchy sequences and complete metric spaces|Cauchy]].

^ac6d87

>[!abstract] Proposition: The set of sub-sequential limits is closed.
>Let $A$ be the set of [[Limits and accumulation points|limits]] of subsequences of a [[Sequences|sequence]] $(x_n)_{n \in \mathbb N}$ in $\mathbb R$. Then $A$ is [[Closed sets, closures, and dense subsets|closed]].

^c93f86


---
# In topological spaces

>[!example] Definition: Convergent sequence in a topological space
>A sequence $x_1, x_2, …$ of points in an arbitrary [[Topological spaces and open sets|topological space]] $X$ **converges** to the point $x$ if, for each **neighborhood** $U$ of $x$, there exists a positive integer $N$ such that $x_n \in U$ for all $n \geq N$. 
^24c72a

The key difference is that sequences *can converge to more than one point* in an arbitrary space!

---
# Review

[[MATH-GU4061|Modern Analysis I]]
- State whether the following sequences are convergent or divergent: $x_n=1/n$, $(-1)^n$, $n$.

---
# Proof appendix

![[Sequences#^ac6d87]]

*Proof of (i).* 

For all $\epsilon > 0$, exist $N_x, N_y \in \mathbb N$ such that for all $n > N_x$, we have $d(x_n, x) < \epsilon/2$, and similarly for all $n > N_y$. Then for all $n > \text{max}(N_x, N_y)$, we have
$$
d(x, y) \leq d(x_n, x) + d(x_n, y) = \epsilon,
$$
so $d(x, y)= 0$ and $x = y$.

*Proof of (iii).*

Since $(x_n)_{n \in \mathbb N}$ is convergent, for all $\epsilon> 0$, there exists $N \in \mathbb N$ such that $d(x_n, x)< \epsilon/2$ for all $n > N$ and some $x \in X$. By the [[Triangle inequality|triangle inequality]], for all $n, m > N,
$$
d(x_n, x_m) \leq d(x_n, x) + d(x, x_m) < \epsilon,
$$
which is precisely what it means for $(x_n)_{n \in \mathbb N}$ to converge.

![[Sequences#^c93f86]]

*Proof.*

It suffices to show that every convergent sequence in $A$ has a limit in $A$. Let $(a_i)_{i \in \mathbb N}$ be a sequence in $A$. Then for *each* $i \in \mathbb N$, there exists a subsequence $(x_{n(m)})_{m \in \mathbb N}$ such that $x_{n(m_i)}$ converges to $a_i$ as $m_i \to \infty$. 

$$
\begin{matrix}
i = 1 & i = 2 & i = 3 & \cdots \\
x_{n(1)_1} & x_{n(1)_2} & x_{n(1)_3} & \cdots \\
x_{n(2)_1} & x_{n(2)_2} & x_{n(2)_3} & \cdots \\
x_{n(3)_1} & x_{n(3)_2} & x_{n(3)_3} & \cdots \\
\vdots & \vdots & \vdots \\
a_1 & a_2 & a_3 & \cdots
\end{matrix}
$$
Now let $n \in \mathbb N$. Since $a_i \to a$, there exists some $a_I$ such that $d(a_I, a) < 1/(2n)$. #wip

---
# Notes

#### [[MATH-UN1208|Honors Mathematics B]]

- *(Proposition 3.1)* **Continuous functions take convergent sequences to convergent sequences.** If $f: D \to \mathbb R$ is [[Pointwise continuity|continuous]] and $x_n \in D$ is a **convergent sequence** $x_n \to x$ with $x \in D$ as well, then $f$ sends $x_n$ to another convergent sequence $f(x_n) \to f(x)$ .
- *(Proposition 3.2)* **Convergent sequences converge to a *unique* limit**. If $x_n \to x$ and $x_n \to x^\prime$, then $x = x^\prime$.
- *(Lemma 3.3)* **Bounded monotone sequences converge.** Suppose $x_n$ is **monotone increasing**, so $x_n +1 \geq x$ for all $n \in \mathbb N$, and [[Bounded sets and functions|bounded above]], so there exists an $x$ with $x_n \leq x$ for all $n \in \mathbb N$. Then $x_n$ **converges** to some $x^\prime$.
- [[(Theorem) All bounded sequences have a convergent subsequence]] (Bolzano-Weierstrass).
