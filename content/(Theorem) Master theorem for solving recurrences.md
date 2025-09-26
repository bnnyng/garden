---
aliases:
  - master theorem
  - master method
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
status: 🔨
publish:
lastmod: 2025-09-25T08:38:59-04:00
date: 2025-09-22T12:28:55-04:00
---
# Overview

$\quad$ The **master method** for solving [[Recurrence relation|recurrences]] applies to equations of the form 

$$
T(n) = aT(n/b) + f(n)
$$

for some constants $a \geq 1$ and $b > 1$ and function $f(n)$. In each case, we compare $f(n)$ to the function $n^{\log_ba}$, and the larger of the two functions completely determines the solution (i.e., [[Asymptotic notation|asymptotic bounds]]) of the recurrence. To use the master method on a given recurrence, we simply determine which case (if any) of the master theorem applies:

| Case | Condition on $f(n)$                                                              | Time complexity $T(n)$       |
| ---- | -------------------------------------------------------------------------------- | ---------------------------- |
| 1    | $O(n^{\log_ba}/n^\epsilon)$                                                      | $\Theta(n^{\log_ba})$        |
| 2    | $\Theta(n^{\log_ba})$                                                            | $\Theta(n^{\log_ba} \log n)$ |
| 3    | $\Omega(n^{\log_ba} \cdot n^\epsilon)$ and $af(n/b) \leq cf(n)$ for some $c < 1$ | $\Theta(f(n))$               |


---

# Statement of the theorem

>[!theorem] [[@2009cormenIntroduction]] 4.1: Master theorem
>Let $f(n)$ be a function, and let $T(n)$ be defined on nonnegative integers by the [[Recurrence relation|recurrence]]
>
>$$
>T(n) = aT(n/b) + f(n)
>$$
>
>where $a \geq 1$ and $b > 1$ are constants and we interpret $n/b$ to be either the integer floor or ceiling of the the true fraction. Then the [[Asymptotic notation|asymptotic bound]] bounds of $T(n)$ are given as follows:
>- (i) If $f(n) = O(n^{\log_ba - \epsilon})$ for some $\epsilon > 0$, then $T(n) = \Theta(n^{\log_b a})$.
>- (ii) If $f(n) = \Theta(n^{\log_ba})$, then $T(n) = \Theta(n^{\log_ba}\log_2n)$.
>- (iii) If $f(n) = \Omega(n^{\log_ba + \epsilon})$ for some $\epsilon > 0$ and $af(n/b) \leq cf(n)$ for some $c< 1$, $n$ sufficiently large, then $T(n) = \Theta(f(n))$.

$\quad$ Note the following technical details:

- In case (i), $f(n)$ must be **polynomially** smaller than $n^{\log_ba}$, meaning it is smaller by a factor of $n^\epsilon$ for some constant $\epsilon > 0$. Similarly, in case (iii), $f(n)$ must be polynomially larger.
- In case (iii), the condition $af(n/b) \leq cf(n)$ is called the **regularity condition** and is satisfied by most polynomially bounded functions.
- The three cases do not cover all possibilities for $f(n)$. Between (i) and (ii), there is a gap when $f(n)$ is smaller than $n^{\log_ba}$ but not polynomially smaller, and similarly there is a gap between (ii) and (iii) where $f(n)$ is larger but not polynomially larger. The master theorem does not apply in these cases.

---
# Examples

#### Direct applications

| $T(n)$                                      | $f(n)$      | $a$ | $b$ | $n^{\log_ba}$                 | Result                                                                            |
| ------------------------------------------- | ----------- | --- | --- | ----------------------------- | --------------------------------------------------------------------------------- |
| [[Merge sort]] $T(n) = 2T(n/2) + \Theta(n)$ | $\Theta(n)$ | 2   | 2   | $n$                           | Case 2 $\implies T(n) = \Theta(n \log n)$                                         |
| Binary search $T(n) = T(n/2) + 1$           | 1           | 1   | 2   | $n^0 = 1$                     | Case 2 $\implies T(n) = \Theta(\log n)$                                           |
| $T(n) = 2 T(n/2) + 1$                       | 1           | 2   | 2   | $n$                           | Case 1 $\implies T(n) = \Theta(n)$                                                |
| $T(n) = 3T(n/2) + n^2$                      | $n^2$       | 3   | 2   | $n^{\log 3} \approx n^{1.58}$ | $af(n/b) = 3(n^2)^2 = (3/4)f(n)$ $\implies$ Case 3 $\implies T(n) = \Theta (n^2)$ |

#### Change of variables

![[Pasted image 20250925083827.png]]

![[Pasted image 20250925083839.png]]

![[Pasted image 20250925083849.png]]

---

# Code snippets

$n^{\log_ba}$

```
n^{\log_ba}
```
