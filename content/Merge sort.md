---
aliases:
  - merge sort
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-15T11:09:54-04:00
lastmod: 2025-09-25T08:56:02-04:00
---
# Overview

$\quad$ **Merge sort** is a [[Sorting problems|sorting algorithm]] that follows the [[Divide-and-conquer algorithms|divide-and-conquer]] paradigm. Specifically, each level of recursion involves the following three steps:

1. **Divide** the given $n$-element sequence to be sorted into two sequences of length $n/2$;
2. **Conquer** the subsequences by sorting them recursively using merge sort;
3. **Combine** (or merge) the two sorted subsequences to produce the sorted answer.

The recursion “bottoms out” when the sequence to be sorted has length 1, since every sequence of length 1 is already sorted.

---

# Basic algorithm

>[!definition] Merge algorithm
>**Input:** Two sorted arrays, $K[1..n_1]$ and $L[1..n_2]$.<br>
>**Output:** A “merged” sorted array $M[1..n_1+n_2]$.
>
>```
>i=1, j=1
>for t=1 to n1+n2:
>	if i <= n1 and (j > n2 or K[i] < L[j]):
>		M[t] = K[i]
>		i = i+1
>	else:
>		M[t] = L[j]
>		j = j+1
>```

^2b053a

>[!definition] Merge sort algorithm
>**Input:** an array $A[1..n]$ containing a sequence of length $n$.
>
>```
>if n > 1:
>	Recursively merge sort A[1..floor(n/2)] 
>	Recursively merge sort A[floor(n/2)+1..n]
>	Merge the sorted subsequences 
>```

---

# Proof of correctness

---
# Time complexity

#question How is the merge algorithm folded into the merge sort algorithm?

#### Merge

$\quad$ The [[Merge sort#^2b053a|merge algorithm]] has linear time complexity, with order $\Theta(n_1 + n_2)$.

#### Merge sort (unfolding the recursion)

$\quad$ The simplified analysis assumes $n$ is a power of $2$, and hence each divide step yields two subsequences of exactly size $n/2$. It therefore follows from the running time of [[Divide-and-conquer algorithms#^b63a72|general divide-and-conquer algorithms]] that the running time on a problem of size $n$ is given by the [[Recurrence relation|recurrence equation]]

$$
T(n) = \begin{cases} \Theta(1) & \text{if }n=1, \\ T(n/2) + T(n/2) + \Theta(n) & \text{if }n> 1 \end{cases},
$$

where $T(n/2)$ is the time taken to solve each subproblem and $\Theta(n)$ is the time taken to perform the merge procedure.

>[!proposition] Time complexity of merge sort
>The [[Time complexity|running time]] of merge sort on an input of size $n$, where $n$ is a power of $2$, is 
>$$
>T(n) = \Theta(n \lg n).
>$$

*Proof from [[CSOR-W4231]]. Uses: [[(Proof pattern) Methods for solving recurrences]].* $\quad$ We rewrite the recurrence equation for running time as 
$$
T(n) = \begin{cases} c & \text{if }n=1, \\ 2T(n/2) + cn & \text{if }n> 1 \end{cases},
$$
where $c$ is a constant representing the time required to solve problems of size 1, as well as the time taken in the divide and combine steps per array element[^1]. We can therefore solve the running time recurrence by unfold the recursion as follows:
$$
\begin{align} 
T(n)
&= 2T(n/2) + cn 
= 2(2T(n/4) + c(n/2) + cn \\
&= 4T(n/4) + 2cn 
= 4(2T(n/8) + c(n/4)) + 2 cn \\
&= 8 T(n/8) + 3cn 
= \cdots 
= 2^i \cdot T(n/2^{i}) + i \cdot cn \\
&\cdots \\
&= n \cdot T(1) + \lg n \cdot cn
= \Theta(n \lg n)
\end{align},
$$
where the second to last equality follows from the fact that $T(n/2^i) = T(1)$ implies $2^i = n$, and since $n = 2^{\lg n}$ by definition of logarithm, we have $i = \lg n$. $\quad \square$


#### Merge sort (recursion tree)

$\quad$ From [[@2009cormenIntroduction]], Figure 2.5:

![[Pasted image 20250925085531.png]]


[^1]: More precisely, we can let $c$ be the maximum of these two different times and understand that the recurrence gives an upper bound on running time, and similarly for minimum and lower bound; both are on the order of $n \lg n$ and thus together give a $\Theta(n \lg n)$ overall running time.


