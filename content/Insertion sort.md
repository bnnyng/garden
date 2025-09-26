---
aliases:
  - insertion sort
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
status: 🟠 🔨 ❓
publish:
lastmod: 2025-09-15T12:50:04-04:00
date: 2025-09-10T12:12:58-04:00
---
# Overview

$\quad$ **Insertion sort** is a [[Sorting problems|sorting algorithm]] that sorts an array of numbers **in place** (i.e., rearranging them in the same array, with at most a constant amount of numbers outside the array at any given time). At each indexing step $j$, the $j$th key in the array is *inserted* into the *sorted* subarray of keys $1, \ldots, j-1$ as follows: beginning with the largest key in the subarray, move each key up an index until a key smaller than key $j$ is reached.

---
# Basic algorithm

>[!definition] Insertion sort algorithm
>**Input:** an array $A[1..n ]$ containing a sequence of length $n$.
>```
>for j=2 to A.length:
>	key = A[j]
>	# Insert A[j] into the sorted sequence A[1..j-1]
>	i = j-1 
>	while i > 0 and A[i] > key:
>		A[i+1] = A[i]
>		i = i-1
>	A[i+1] = key
>```

---

# Proof of correctness

*Proof from [[@2009cormenIntroduction]], p. 19. Uses [[(Proof pattern) Loop invariance]].* $\quad$Correctness of insertion sort can be understood using the following fact:

>[!lemma] Loop invariance of insertion sort
>At the start of each iteration of the `for` loop in the definition above, the subarray $A[1..j-1]$ consists of the elements originally in $A[1..j-1]$ but in sorted order.

#wip

---
# Time complexity

#### Analysis by direct inspection

$\quad$ The [[Time complexity|running time]] of insertion sort can be determined by summing the running times for each statement executed, assuming *machine-independence* (i.e., replacing actual costs with some constants $c_i$):

| Step number | Statement                    | Time cost | Number of times executed                                                                                        |
| ----------- | ---------------------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| 1           | `for j=2 to A.length`        | $c_1$     | $n$                                                                                                             |
| 2           | `key = A[j]`                 | $c_2$     | $n-1$                                                                                                           |
| 3           | `i = j-1`                    | $c_3$     | $n-1$                                                                                                           |
| 4           | `while i > 0 and A[i] > key` | $c_4$     | $\sum_{j=2}^nt_j$, where $t_j$ is the number of times the `while` loop is executed for the current value of $j$ |
| 5           | `A[i+1] = A[i]`              | $c_5$     | $\sum_{j=2}^n(t_j - 1)$                                                                                         |
| 6           | `i = i-1`                    | $c_6$     | $\sum_{j=2}^n(t_j - 1)$                                                                                         |
| 7           | `A[i+1] = key`               | $c_7$     | $n-1$                                                                                                           |

For insertion sort on an input of $n$ values, we therefore obtain
$$
T(n) = 
$$


#### Analysis by solving a recurrence





#question  Lecture 1 slide 23?
![[Pasted image 20250910165858.png]]