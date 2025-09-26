---
aliases:
  - quicksort
  - randomized quicksort
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-22T12:53:59-04:00
lastmod: 2025-09-25T08:51:06-04:00
---
# Overview

$\quad$ **Quicksort** is a [[Sorting problems|sorting algorithm]] that follows the [[Divide-and-conquer algorithms|divide-and-conquer]] paradigm, where each level of recursion involves the following three steps on a typical subarray $A[p .. r]$:

1. **Divide:** Partition the input array $A[p .. r]$ into two (possibly empty) subarrays $B = A[p..q-1]$ and $C = A[q+ 1.. r]$ such that each element of $B$ is less than or equal to a **pivot element** $A[q]$, and each element of $C$ is greater than or equal to $A[q]$.
2. **Conquer:** Sort the subarrays $B, C$ by recursive calls to quicksort.
3. **Combine:** Trivial; because subarrays are already sorted, no additional work is needed to combine them, and the entire array $A[p..r]$ is now sorted.

$\quad$ **Randomized quicksort** is the [[Randomized algorithms|randomized algorithm]] obtained by replacing the choice of a pivot with a randomly sample from the array $A[p..r]$. 

---

# Basic algorithm

#### Deterministic quicksort

>[!definition] Quicksort algorithm
>**Input:** An array $A$ and indices $p, r$.
>```
>if p < r:
>	q = PARTITION(A, p, r)
>	QUICKSORT(A, p, q-1)
>	QUICKSORT(A, q+1, r)
>```
>To sort an entire array $A$, we call `QUICKSORT(A, 1, A.length)`.

$\quad$ Quicksort depends on a “partition” algorithm for modifying the array *in place* so that the array is rearranged with respect to a pivot element. 

>[!definition] Partition algorithm
>**Input:** An array $A$ and indices $p, r$.
>
>**Output:** index of the new position of the pivot element.
>
>```
>x = A[r]
>i = p-1
>for j=p to r-1:
>	if A[j] <= x:
>		i = i+1
>		exchange A[i] with A[j]
>exchange A[i+1] with A[r]
>return i+1	
>```

#### Randomized quicksort

$\quad$ Randomized quicksort is obtained by modifying the procedures above. We define `RANDOMIZED-PARTITION(A, p, r)` by

```
i = DRAW_FROM(p, r)
exchange A[r] with A[i]
return PARTITION(A, p, r)
```

and thus `RANDOMIZED-QUICKSORT(A, p, r)` simply calls this in place of `PARTITION`:

```
if p < r:
	q = RANDOMIZED-PARITION(A, p, r)
	RANDOMIZED-QUICKSORT(A, p, q-1)
	RANDOMIZED-QUICKSORT(A, q+1, r)
```




---

# Correctness

>[!lemma] Loop invariance of partitioning in quicksort
>The partitioning procedure has a loop invariant where for a given pivot element $A[r]$ and any array index $k$, we have the following at the beginning of each iteration of the `for` loop:
>- (i) If $p \leq k \leq i$, then $A[k] \leq A[r]$.
>- (ii) If $i + 1 \leq k \leq j - 1$, then $A[k] > A[r]$.
>- (iii) If $k = r$, then $A[k] = A[r]$.

---

# Time complexity

#### Worst-case analysis

#### Average-case analysis
