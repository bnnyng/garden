---
aliases:
  - sorting algorithm
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
status: 🔨
publish:
lastmod: 2025-09-22T13:49:57-04:00
date: 2025-09-10T11:15:11-04:00
---
# Overview

$\quad$ The **sorting problem** is the general [[§ Algorithms and Computational Problems|computational problem]] of sorting a sequence of numbers, which are called **keys**, into nondecreasing order. Specifically, the desired relationship between inputs and outputs is as follows:

>[!definition] Sorting problem
>- **Input:** A sequence of $n$ numbers $(a_1, a_2, \ldots, a_n)$.
>- **Output:** A [[Permutation groups|permutation]] or reordering $(a_1’, a_2’, \ldots, a_n’)$ of the input sequence such that $a_1’ \leq a_2’ \leq \ldots \leq a_n’$.

**Related notes:**

- [[Divide-and-conquer algorithms]]

---

# Sorting algorithms

| Algorithm name     | In place | Divide-and-conquer | Worst-case running time | Average-case running time |
| ------------------ | -------- | ------------------ | ----------------------- | ------------------------- |
| [[Insertion sort]] | Yes      | No                 | $\Theta(n^2)$           | $\Theta(n^2)$             |
| [[Merge sort]]     | No [^1]  | Yes                | $\Theta(n \log n)$      | $\Theta(n \log n)$        |
| [[Quicksort]]      | Yes      | Yes                | $\Theta(n^2)$           | $\Theta(n \log n)$        |
| Heapsort           | Yes      | No                 | $O(n \log n)$           |                           |
| Counting sort      | No       | No                 | $\Theta(k + n)$         | $\Theta(k + n)$           |
| Radix sort         | No       | No                 | $\Theta(d(n+ k))$       | $\Theta(d(n+ k))$         |
| Bucket sort        | No       |                    | $\Theta(n^2)$           | $\Theta(n)$               |

[^1]: The “merge” steps requires storing values in a temporary auxiliary array that is proportional to the size of the input array, and hence does $O(n)$ work.
