---
aliases:
  - divide-and-conquer
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-15T11:02:48-04:00
status: ⚫
lastmod: 2025-09-15T12:08:00-04:00
---
# Overview

$\quad$ **Divide-and-conquer** algorithms are [[Self-reference|recursive]] approaches to solving computational problems in which a given [[§ Algorithms and Computational Problems|computational problem]] where each *level* of recursion involves the following three steps:

1. **Divide** the given problem instance into subproblems;
2. **Conquer** the subproblems by solving them recursively;
3. **Combine** the solutions for the subproblems into a solution to the original problem.

$\quad$ A paradigmatic example of a divide-and-conquer algorithm is [[Merge sort|merge sort]].

---
# Time complexity

$\quad$ The three steps of divide-and-conquer algorithms imply a [[Recurrence relation|recurrence equation]] for describing their [[Time complexity|running time]]. 

>[!definition] Running time of divide-and-conquer
>Given a computational problem that is solved by a divide-and-conquer algorithm, define the following parameters relevant to running time:
>- Let $c$ be a constant such that any problem smaller than $c$ takes constant time (i.e., $\Theta(1)$); 
>- Let the original problem be divided into $a$ subproblems, each of which is $1/b$ the size of the original; thus, it takes $a T(n/b)$ time to solve $a$ subproblems of size $n/b$;
>- Finally, suppose it takes $D(n)$ time to divide the problem into subproblems, and $C(n)$ time to combine the subproblem solutions into an overall solution.
>
>Then the running time on a problem of size $n$ is given by the [[Recurrence relation|recurrence equation]]
>$$
>T(n) = \begin{cases} \Theta(1) & \text{if }n \leq c \\ a T(n/b) + D(n) + C(n) & \text{otherwise} \end{cases}.
>$$

^b63a72

