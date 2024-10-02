---
aliases:
  - Archimedean principle
  - density of the rationals
  - rationals are dense
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1208
  - MATH-GU4061
status: 
publish: "true"
date: 2024-09-15 10:02
lastmod: 2024-09-21T17:38:51-04:00
---
>[!abstract] Theorem: Density of the rationals in $\mathbb R$
>(i) For all [[The real numbers|real numbers]] $x, y \in \mathbb R$ with $x, y > 0$, there exists $n \in \mathbb N$ such that $nx > y$.
>(ii) For all $x, y \in \mathbb R$ with $x < y$, there exists a rational number $a \in \mathbb Q$ such that $x < a < y$.
>

#### (Nearly) direct proof of (ii)

*From [[MATH-UN1208|Honors Mathematics B]], Homework 1.*

>[!abstract] Lemma ([[MATH-UN1208]] 1.6)
>If $x \in \mathbb R$ has $x \geq 0$, the set of natural numbers $N_{\leq x} = \{ n \in \mathbb N \ | \ n \leq x \}$ is *finite*.

*Sketch.*
1. Prove that for any real number $\delta > 0$, there exists a natural number $n$ so that $1/n < \delta$.
2. If $z$ is a real number, let's denote $\Bbb Q_{< z} = \{a \in \Bbb Q \mid a < z \}$. Prove that $\mathsf{lub}\left(\Bbb Q_{<z}\right) = z.$ 
3. If $x < y$ are two real numbers, prove that there exists a rational $a$ with $x < a < y$.


*Proof of 1.*

We can prove there exists some $n \in \mathbb N$ with $1/n < \delta$ by showing that the set of all such $n$ is nonempty. Using the equivalent relation $1/ \delta < n$, we define this set to be
$$ 
\{n \in \mathbb N \ | \ 1/n < \delta \} = \{n \in \mathbb N \ | \ 1/\delta < n \}.
$$

By [[Order relations on sets and fields|trichotomy]], this set is empty if the set $\{n \in \mathbb N \ | \ 1/\delta \geq n \}$ is all of $\mathbb N$. But by Lemma 1.6, we know that given the real number $1/\delta$, the set of $n \in \mathbb N$ with $n \leq 1/\delta$ is finite. Thus, the set of all $n \in \mathbb N$ with $1/n < \delta$ must be nonempty, which proves the existence of some $n$ that satisfies the relation.

*Proof of 2.*

First, let $\ell = \mathsf{lub}(\mathbb Q_{<z})$. By definition of the least upper bound, we have $\ell \leq z$ with precisely $\ell = z$ if $z$ is indeed the least upper bound, as well as $0 \leq z - \ell$.

If $\ell < z$, then the difference $0 < z - \ell$ is a positive real number. By part (1), there exists some $n \in \mathbb N$ with $1/n < z - \ell$. We can also construct an even smaller term $1/2n < 1/n$. Putting these expressions together, we have 
$$ 
0 < 1/2n < 1/n < z - \ell, 
$$
$$ 
\ell + 0 = \ell < \ell + 1/2n < \ell + 1/n < \ell + (z - \ell) = z.
$$

 Now since $\ell$ is the least upper bound, by [[(Theorem) Elements in a subset of the reals can be arbitrarily close to the least upper bound]], for all real $\epsilon>0$ there exists some $q$ such that $\ell \leq q + \epsilon$. By definition of an upper bound, we can also guarantee $q \leq \ell$. Choose $\epsilon = 1/2n$, and let $q$ an element which satisfies $\ell \leq q + 1/2n < q + 1/n$. Using the definition $q \leq \ell$ and the first set of relations we showed, we have
 $$ 
 q + 1/n \leq \ell + 1/n < z, 
 $$
 which means in particular that $q + 1/n$ is a rational less than $z$. If both $\ell < q + 1/n$ and $q + 1/n \in \mathbb Q_{<z}$ are true, then this contradicts our assumption that $\ell = \mathsf{lub}(\mathbb Q_{<z})$. Therefore, any real number $\ell < z$ cannot be an upper bound for $\mathbb Q_{<z}$, and we must have $\ell = z = \mathsf{lub}(\mathbb Q_{<z})$.

*Proof of 3.*

First let $c = \frac{x + y}{2}$ denote the real average of $x$ and $y$, so we have $x < c < y$. By part (2), we have $c = \mathsf{lub}(\mathbb Q_{<c})$. 

Fix $\epsilon = \frac{c-x}{2}$. Since $c$ is the least upper bound, we can use [[(Theorem) Elements in a subset of the reals can be arbitrarily close to the least upper bound]] to choose an $a \in \mathbb Q_{<c}$ so that $a < c \leq a + \epsilon$. First, notice that $a \leq c < y$ for all $a \in \mathbb Q_{<c}$. To see $x < a$ as well, we can use the property $c \leq a + \epsilon$ and the fact that $0 < \frac{c-x}{2} < c-x$ to get
$$
\begin{align*}
    x < c \leq a + \epsilon &\implies x + \frac{c-x}{2} < x + c - x \leq a + \frac{c-x}{2} \\
    &\iff x + \epsilon < c \leq a + \epsilon \\
    &\iff x < a.
\end{align*}
$$

Explicitly, this means we can fix $\epsilon$ so that there is a rational $a$, based our choice of $\epsilon$, which satisfies $x < a < y$ for any real numbers $x,y$. This completes the proof that between any two real numbers is a rational number.

#### Proof of (i) and (ii) by contradiction

#wip See notes from [[MATH-GU4061|Modern Analysis I]].