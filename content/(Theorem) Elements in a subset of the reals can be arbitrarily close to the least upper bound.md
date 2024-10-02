---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - theorem
status: 
publish: "true"
date: 2024-09-15 10:21
lastmod: 2024-09-15T10:26:48-04:00
---
*From [[MATH-UN1208|Honors Mathematics B]], Homework 1.*

>[!abstract] Theorem: Elements in a subset of $\mathbb R$ can be arbitrarily close to the supremum and infimum
>Suppose $S \subset \mathbb R$ is a set of real numbers, and that $x \in \mathbb R$ is an [[Bounded sets and functions|upper bound]] for this set (i.e., for all $s \in S$, we have $s \leq x$). Then 
>$$
>x = \mathsf{lub}(S) \iff \forall_{\substack{\epsilon \in \Bbb R \\ \epsilon > 0}} \exists_{s \in S} \;\; x \le s + \epsilon.
>$$
>That is, the given upper bound $x$ is the least upper bound of $S$ if and only if, for all real numbers $\epsilon > 0$, there exists some $s \in S$ for which $x \le s + \epsilon.$

^438b35

*Proof.*  We can prove this statement by proving the contrapositive
$$ 
x \neq \mathsf{lub}(S) \iff \exists_{\substack{\epsilon \in \mathbb R \\ \epsilon > 0}} \ \forall_{s \in S} \ [x > s + \epsilon].
$$

For the forward implication, let $\ell = \mathsf{lub}(S)$ with $x > \ell$, so $x$ is not the least upper bound for $S$ and $x - \ell > 0$ is strictly positive. Observing that the average of $0$ and $x - \ell$ has $0 < \frac{x-\ell}{2} < x- \ell$, we can choose $\epsilon = \frac{x-\ell}{2}$. Since the upper bound $\ell$ is defined to have $s \leq \ell$ for all $s \in S$, we have 
$$
s + \frac{x-\ell}{2} \leq \ell + \frac{x-\ell}{2} < \ell + (x - \ell) = x.
$$
This shows that there exists $\epsilon$ for which $s + \epsilon < x$ is a strict inequality, which completes the forward proof.

For the reverse implication, we can show the given upper bound $x$ is greater than some other real upper bound for $S$. The hypothesis $x > s + \epsilon$ implies that the average of $s + \epsilon$ and $x$ has 
$$  
s + \epsilon < \frac{s + \epsilon + x}{2} < x.
$$

We see the average is a real number strictly greater than all of $s$, so it precisely an real upper bound for $S$ that is strictly smaller than $x$. Since $x$ is greater than some other upper bound for $S$, it cannot be the least upper bound, which completes the reverse proof.