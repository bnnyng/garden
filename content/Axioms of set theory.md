---
aliases:
  - set-builder notation
  - set theory axioms
  - set operation axioms
  - naive set theory
  - product set
  - power set
  - Cartesian product
  - set
tags:
  - permanent-note
  - topic-logic-mathematics
---
# Overview

## Axioms of set theory

The axioms of naïve set theory allow sets to be useful for more math. They are as follows:

1. Sets are specified by their elements.
2. The natural numbers form a set.
3. Subsets can be defined with formulas.
4.  If $X, Y$ are sets, there is a set called the **Cartesian product** $X \times Y$ whose elements are ordered pairs.
5.  If $X$ is a set, there is a **power set of X** whose elements $s \in \mathcal P(x)$ are the subsets $S \subseteq X$.

Sets contain unique member elements. Subsets can be produced from the elements of a larger set that satisfy a given condition. To prove two sets are equal (i.e., contain the same elements) we must prove that each is a subset of the other.

The [[Algebra of sets]] gives four ways to construct new sets out of existing ones.

---
# Key terms

- **Set** = a collection of non-specific objects
- **Element** = an object that is a member of a set
- **Naive set theory** = a few reasonable [[Mathematical jargon|axioms]] which give *basic facts* about what a **set** is. These facts make sets useful for making precise mathematical statements. Axioms can be added as needed without worrying about the theoretical framework (i.e., whether axioms completely consistent with each other).
- **Axiomatic set theory** = a complete list of axioms for set theory. Notions of set theory will depend on precise axioms. These axioms are a major area of research in mathematical logic.

---
# Notes

## Set-builder notation
$$ S = \{x \in X \mid \text{property of } x\} $$
- $x \in X$ = gives a name to a generic element of the set; states what larger set it comes from
- $\text{property of } x$ = tells what conditions the elements of $X$ must satisfy to be in $S$

## Set theory axioms
#### 1. Sets are specified by their elements
- Two sets are **equal** if they have precisely the same elements.
$$ S = T \iff \forall_x [x \in S \iff x \in T] $$
- Sets themselves can be elements of other sets. Example: $\{\{2,7\}\}$ is a set with one element, the set $\{2,7\}$.
- Elements do not appear more than once in a set; an element is either in a set or not.

#### 2. The natural numbers form a set
- There is a set $\mathbb N$ of natural numbers, whose elements are $\{0, 1, 2, ...\}$.
- Natural numbers are an *infinite set*, which is needed to "get started" on doing more math.

#### 3. Subsets can be defined with formulas
- **Restricted comprehension** with formulas is used to produce more sets. 
- If $X$ is a set and $P(x)$ is a family of propositions for $x \in X$, then $S$ is also a set where
$$ S = \{x \in X \mid P(x) \text{ is true} \} $$
- There exists an **empty set** $\emptyset$ that contains no elements. This is a subset of any set $X$ defined by the proposition $P(x) = \text{False}$. 
- $S$ is a **subset** of $X$ ($S \subseteq X$) if for all $x \in S$, we also have $x \in X$
- **Double containment argument:** To *prove* two sets are equal, show that each is contained in the other (proving each implication separately).
$$S = T \iff [S \subseteq T] \wedge [T \subseteq S]$$

## Set operation axioms
#### 4. Products exist
- If $X, Y$ are sets, there is a set called the **Cartesian product** whose elements are ordered pairs.
$$ X \times Y = \{(x,y) \mid x\in X, y\in Y\} $$

#### 5. There is a set of all subsets of X
- If $X$ is a set, there is a **power set of X** whose elements $s \in \mathcal P(x)$ are the subsets $S \subseteq X$. 
- $\mathcal P(x)$ for an $n$-element set is $2^n$, since each element exists or does not exist.
	- $\mathcal P(x)$ includes the empty set $\emptyset$ where no elements exist.
	- $\mathcal P(\mathbb N)$ has *uncountably many* elements!
- *Why does the power set matter?* Many mathematical objects are understood in terms of simpler subsets, which are elements of the power set.

## Additional notes
- A negative proposition, such as \[ $x$ is not rational ], is still a valid condition for building new sets
- **Russell's paradox** states that if a set contains all sets that are not members of itself, that set must be an element of itself. This paradox is related to the axiom of restricted comprehension.