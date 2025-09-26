---
aliases:
  - loop invariant
tags:
  - permanent-note
  - topic-information-computation-statistics
  - CSOR-W4231
publish:
date: 2025-09-10T16:16:25-04:00
lastmod: 2025-09-15T11:38:46-04:00
---
$\quad$ **Loop invariance** is a property that can be used to prove *correctness* (i.e., that it solves every instance of the relevant [[§ Algorithms and Computational Problems|computational problem]]) of a [[Sorting problems|sorting algorithm]]. To prove loop invariance, the following three properties must be shown:

- **Initialization:** Loop invariance holds prior to the first iteration of the loop.
- **Maintenance:** If loop invariance is true before an iteration of the loop, it remains true before the next iteration.
- **Termination:** When the loop terminates, the invariant gives a useful property that shows the algorithm is correct.

When the first two properties hold, the loop invariant is true prior to *every* iteration of the loop; note the similarity to [[(Proof pattern) Mathematical induction]], specifically *base case → initialization* and *maintenance → inductive step*.


