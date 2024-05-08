---
aliases:
  - measurable set
  - measurable
  - measurable sets
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: 2024-04-22 11:02
lastmod: 2024-04-24T16:16:27-07:00
---
A measurable set is simply a set which induces countable additivity for the [[Lebesgue measure|outer measure]] of any other set.

>[!example] Definition: Measurable set
>A set $E \subset \mathbb R$ is **measurable** if for any other set $A \subset \mathbb R$, we have 
>$$
>m^*(A) = m^*(A \cap E) + m^*(A \cap E^c). 
>$$

^211106

It follows immediately that a set is measurable *if and only if* its complement is measurable.

Measurability works well with set operations: intersections, differences, and unions of measurable sets are measurable.

We have conclusive results about measurability for particular sets:
- Countable sets have zero outer measure.
- Every [[Interval|interval]] is measurable, and the measure of any interval is precisely its **length**, the difference between its endpoints.
- The union of a countable collection of measurable sets is measurable. As a corollary, all open and closed sets are measurable.

Related: [[(Theorem) Approximation of measurable sets]]
