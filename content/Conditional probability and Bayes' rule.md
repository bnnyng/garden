---
aliases:
  - Bayes' rule
  - reversing the conditioning
  - conditional probability
  - conditioned
  - posterior probability
  - law of total probability
  - probability of the intersection
  - odds
  - likelihood ratio
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-UN1201
  - STAT-GU4203
publish: "true"
date: 2022-12-21
lastmod: 2025-05-28T11:42:18-04:00
status: 🟠
---
# Overview

$\quad$ **Conditional probability** expresses the probability of one event given that another (probabilistic) event has already occurred. **Bayes’ rule** and the **law of total probability**, which follow directly from the definition of conditional probability, allow us to compute conditional probabilities in a wide range of problems.

**Related notes:**

- [[Probabilistic reasoning and Bayesian belief updating]] (a characterization of Bayes’ rule in terms of cognitive belief updating)
- [[20250918-archive-pragmatic-bayesian-modeling]]

---

# Conditional probability

>[!definition] Conditional probability
>If $A,B$ are events with $P(B) > 0$, then the **conditional probability** of event $A$ given that the **conditioning event** $B$ has occured is given by
>$$ P(A|B) = \frac{P(A \cap B)}{P(B)}. $$

$\quad$ Conditional probability satisfies the [[General definition of probability|axioms of probability]]:

1. $P(A|B) \leq 1$ 
2. $P(\mathcal S|B) = P(B|B) = 1$.
3. If $A_1, A_2, ...$ are disjoint events, then
$$
P \left(\bigcup_{i=1}^\infty A_i | B \right) = \sum_{i=1}^\infty P(A_i | B).
$$

Further, similar to with unconditioned probabilities, we have $P(A|B) = 1 - P(A^C | B)$ and 

$$
P(A \cup B | C) = P(A | C) + P(B | C) - P(A \cap B|C).
$$
>[!definition] Simpson’s paradox
>The events $A, B, C$ exhibit **Simpson’s paradox** if we have both 
>$$
>P(A | B \cap C) < P(A | B^C \cap C) \quad \text{and} \quad P(A | B^C \cap C) < P(A|B ^C \cap C^C),
>$$
> but $P(A|B) > P(A|B^C)$.

$\quad$ Intuitively, Simpson’s paradox occurs when there is “some confounding going on.”

---

# Law of total probability

>[!theorem] Blitzstein & Hwang 2.3.1-2: Probability of an intersection of events
>As a direct consequence of the definition of conditional probability, we have the following result for an intersection of two events:
>$$ 
>P(A \cap B) = P(A|B) \cdot P(B). 
>$$
>Applying this repeatedly, we generalize to the intersection of $n$ events: 
>$$
>P(A_1, ..., A_n) = P(A_1)P(A_2|A_1)P(A_3|A_1,A_2) \cdots (A_n|A_1, ..., A_{n-1}),
>$$
>where $A_1, …, A_n$ are events with intersection $P(A_1, …, A_n) > 0$. The commas denote intersections (i.e., “and”).

$\quad$Note that one can permute $A_1,…A_n$ (from B&H, “this is $n!$ theorems in one”); some orderings are more convenient than others.

>[!theorem] Law of total probability
>Suppose $A_1, ..., A_n$ are **mutually exclusive** (i.e., disjoint) and **exhaustive** (i.e., at least one event in the collection must occur) events. Then for any other event $B$, we have 
>$$
>\begin{align}
>P(B) &= P(B \cap A_1) + \cdots + P(B\cap A_n) &\text{by probability axiom 2 and property 3} \\
>&= \sum_{i=1}^k P(B|A_i)P(A_i) &\text{by theorem for probability of an intersection}
>\end{align} 
>$$ 
>(see [[General definition of probability]] for axioms and properties of probability.)

$\quad$Equivalently, we require $A_1, …, A_n$ to **partition** the whole set $S$; that is, $A_i \cap A_j = \varnothing$ for all $1 \leq i, j \leq n$ (mutually exclusive), and $S$ is the union of all sets in the collection (exhaustive).

---

# Bayes’ rule and odds

>[!definition] Bayes’ theorem (reversing the conditioning)
>If $A_1, ..., A_k$ are **mutually exclusive** and **exhaustive** events, then for any other event $B$, the **posterior probability** of $A_j$ given that $B$ as occurred is 
>$$ P(A_j|B) =\frac{P(A_j \cap B)}{P(B)} = \frac{P(B|A_j) \cdot P(A_j)}{\sum^k_{i=1}P(B|A_i) \cdot P(A_i)}. $$

$\quad$We can incorporate “extra conditioning” into Bayes’ theorem using the definition of conditional probability again. Let $P (B \cap E) > 0$. Then

$$
\begin{align}
P(A | B \cap E) 
&= \frac{P(A \cap B \cap E)}{P(B \cap E)} = \frac{P(B | A \cap E)P(A \cap E)}{P(B | E) P(B)} \\
&= \frac{P(B | A \cap E) P(A | E) P(E)}{P(B | E) P(E)} = \frac{P(B| A \cap E)P(A | E)}{P(B|E)}
\end{align}.
$$

$\quad$ Bayes’ rule can also be expressed in **odds**, instead of probability.

>[!definition] Odds of an event
>The **odds** of an event $A$ are defined by
>$$
>\text{odds}(A) = \frac{P(A)}{P(A^c)}, \quad \quad P(A) = \frac{\text{odds}(A)}{1 + \text{odds}(A)}.
>$$

>[!theorem] Odds form of Bayes’ rule
>For any events $A, B$ with positive probabilities, the **posterior odds** of $A$ after conditioning on $B$ are
>$$
>\frac{P(A|B)}{P(A^c|B)} = \frac{P(B | A)}{P(B|A^c)} \cdot \frac{P(A)}{P(A^c)},
>$$
>where the factors in the right-hand expression are called the **likelihood ratio** and **prior odds**, respectively.


---

# Review

## Definitions

- Conditional probability
- Law of Total Probability
- Bayes’ theorem
- Simpson’s paradox

## Exercises

- Show how the definition of conditional probability satisfies the [[General definition of probability|axioms of probability]]. 
- Prove the Law of Total Probability. (Hint: write $B$ as the union of disjoint events.)
- Show how to incorporate “extra conditioning” into Bayes’ formula for $P(B \cap E) > 0$:
$$
P(A | B \cap E)  = \frac{P(B| A \cap E)P(A | E)}{P(B|E)}
$$
