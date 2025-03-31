---
aliases:
  - "#MATH-GU4053"
  - Algebraic Topology
title: Class | Introduction to Algebraic Topology
lastmod: 2024-12-30T15:31:07-08:00
date: 2024-12-30T15:28:10-08:00
---
# Overview

*Columbia University, Spring 2025 – S. Galatius*

>[!example] Course description
>The study of topological spaces from algebraic properties, including the essentials of homology and the fundamental group. The Brouwer fixed point theorem. The homology of surfaces. Covering spaces.

| Section                        | Definitions                                                                                                                              | Key results                                                                                                                                                                                                                                         | Examples                                                                                                                                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Homotopies and covering spaces | - Homotopy relative to a subspace<br>- Cell attachment, CW complex<br>- Covering space, covering space action <br>- Categories, functors | - [[(Theorem) Path and homotopy lifting]]<br>- [[(Theorem) A group acting on a simply connected space is isomorphic to the fundamental group of its orbits]]<br>- [[(Theorem) Classification of covering maps]]                                     | - [[Klein bottle]]<br>- [[Real projective space]]<br>- [[Torus]]<br>- [[Euclidean spheres and disks]]<br>- [[Euclidean spheres and disks]] |
| Singular homology              |                                                                                                                                          | - [[(Theorem) The abelianization of the fundamental group of a path-connected space is isomorphic its first singular homology group]]<br>- [[(Theorem) A short exact sequence of chain complexes induces a long exact sequence of homology groups]] |                                                                                                                                            |
| Cohomology                     |                                                                                                                                          |                                                                                                                                                                                                                                                     |                                                                                                                                            |
| Homotopy theory                |                                                                                                                                          |                                                                                                                                                                                                                                                     |                                                                                                                                            |

---
# Study status

```dataview
TABLE WITHOUT ID
file.link as "Name",
lastmod as "Last Reviewed",
status as "Status"

FROM #MATH-GU4053 
SORT lastmod ASC
```
---
# Exams

## Midterm

#### Study schedule

| Thu 3/6                                                                                                                                                                                                                                                       | Fri 3/7                                                                                                         | Sat 3/8      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| <input type="checkbox"> Make midterm study plan<br><input type="checkbox"> Make and practice flashcards for all content<br><input type="checkbox"> Complete notes for all content<br><input type="checkbox"> Go through past homework and note main takeaways | <input type="checkbox"> Practice flashcards<br><input type="checkbox"> Go through all problems on practice exam |              |
| **Sun 3/9**                                                                                                                                                                                                                                                   | **Mon 3/10**                                                                                                    | **Tue 3/11** |
|                                                                                                                                                                                                                                                               |                                                                                                                 |              |



---
# Log

[[2025-03-07]] – Homework review

- Problems to review
	- [ ] 1.5 – Weakly contractible spaces
	- [ ] 2.1 – Homotopy equivalence between [[Real projective space]] and an open subset of a higher dimension (review useful homeomorphisms between circle and cylinders)
	- [ ] 2.3 – Any group homomorphism out of $\pi_1(S^1, x_0)$ is an [[Induced homomorphism between fundamental groups|induced homomorphism]]
	- [ ] 2.5 – Cones and CW complexes
	- [ ] 3.1 & 3.2 – Facts about [[Klein bottle]] arising from a quotient by the group action
	- [ ] 3.4 – $n$-connectedness
	- [ ] 4.2 – 2-torus is homeomorphic to $\mathbb R^2 / \mathbb Z^2$
	- [ ] 4.5 – Using [[(Theorem) van Kampen]] to show that the inclusion of a manifold with one point removed into itself is injective
	- [ ] 5 – In general, verifying well-definedness
- General questions
	- [ ] When is local path-connectedness necessary for [[(Theorem) Classification of covering maps]]?

[[2025-03-06]] – Midterm review

- Notes to complete
	- [x] [[Klein bottle]] as a quotient of $\mathbb R^2$ by a covering space action, fundamental group of the Klein bottle ([[2025-02-06]])
- Proofs to review
	- [ ] [[Lifting properties of covering spaces]]: path lifting and homotopy lifting ([[2025-01-30]])
	- [ ] [[Lifting properties of covering spaces]]: existence of a lift ([[2025-02-11]])
	- [ ] [[Lifting properties of covering spaces]]: corollary of homotopy lifting?
	- [ ] Two path-connected covering spaces are isomorphic iff the induced homomorphisms of fundamental groups have the same image (Hatcher 1.37)
	- [ ] [[(Theorem) van Kampen]]: particularly surjectivity, using it in proofs ([[2025-02-13]])
	- [ ] [[(Theorem) A group acting on a simply connected space is isomorphic to the fundamental group of its orbits]]: ([[2025-02-06]], Hatcher 1.3)
	- [ ] [[(Theorem) Classification of covering maps]]
- General content to review
	- [ ] Checking that things are categories and functors, including how to verify that things are well-defined
	- [ ] Relevance of conjugation?
	- [ ] Definition of simply-connectedness, $k$-connectedness and non-empty assumptions
	- [ ] When local path-connectedness is useful
	- [ ] Importance of simply connected coverings (e.g., induced homomorphism is an isomorphism; also, induced homomorphism is injective in general)
	- [ ] Verify the generator for the fundamental group of the [[Real projective space]] (see Hatcher p. 74)
	- [ ] Verify the [[Klein bottle]] is the same as the action as claimed in [[Group actions on topological spaces]]
- Notecard topics to make
	- [x] [[Categories and morphisms]], [[Categorical functors]]
	- [ ] Change-of-basepoint isomorphism
	- [x] Assumptions in path and homotopy lifting

[[2025-02-09]]

- [x] What is a **continuous action**?
- [ ] [[(Theorem) Classification of covering maps]]
	- [ ] What are the assumptions on the base space $X$? Simply-connected, etc.?
	- [ ] Are we considering basepoints? Is our discussion in class the same as Hatcher’s: there is a bijection between isomorphism classes of path-connected covering spaces and conjugacy classes of subgroups of $\pi_1(X)$?
	- [ ] Definition of a **conjugacy class**?