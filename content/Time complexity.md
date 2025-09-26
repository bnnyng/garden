---
aliases:
  - running time
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-10T16:33:21-04:00
status: 🔨
lastmod: 2025-09-15T11:52:57-04:00
---
$\quad$ The **running time** or **time complexity** of an [[§ Algorithms and Computational Problems|algorithm]] is typically described as a function of its *input size*, which is defined based on the computational problem being studied (e.g., size of the array to be sorted for [[Sorting problems]]). For notation, if $n$ is the size of the input, then the time complexity—that is, the number of primitive steps executed, where each step takes a constant amount of time—is expressed as a function $T(n)$.

$\quad$ For a fixed input size $n$, the **worst case** time complexity is defined as the maximum number of steps over all inputs of size $n$, and the **average case** is the expected time based on a *distribution* over inputs of size $n$.

