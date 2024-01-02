---
aliases:
  - Bayes' theorem
  - Bayes' rule
  - reversing the conditioning
  - conditional probability
  - conditioned
  - exhaustive
  - posterior probability
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-UN1201
  - formula
publish: "true"
date: 2022-12-21
lastmod: 2024-01-01T13:31:20-08:00
---
# Key terms

- **Conditional probability $P(A|B)$** = the conditional probability of $A$ given that the **conditioning event** $B$ has occurred.
- **Exhaustive** = a set of events in which at least one event must occur.

---

# Formulas

>[!example] Conditional probability
>$$ P(A|B) = \frac{P(A \cap B)}{P(B)} $$

>[!example] Multiplication rule for intersections
>$$ P(A \cap B) = P(A|B) \cdot P(B) $$
>$$  P(A \cap B \cap C) = P(C | A \cap B) \cdot P(A \cap B) = P(C| A \cap B) \cdot P( B | A) \cdot P(A) $$

>[!example] Law of total probability
>If $A_1, ..., A_k$ are **mutually exclusive** and **exhaustive** events, then for any other event $B$, we have 
>$$ P(B) = \sum_{i=1}^k P(B|A_i)P(A_i). $$

>[!example] Bayes’ theorem (reversing the conditioning)
>If $A_1, ..., A_k$ are **mutually exclusive** and **exhaustive** events, then for any other event $B$, the **posterior probability** of $A_j$ given that $B$ as occurred is 
>$$ P(A_j|B) =\frac{P(A_j \cap B)}{P(B)} = \frac{P(B|A_j) \cdot P(A_j)}{\sum^k_{i=1}P(B|A_i) \cdot P(A_i)}. $$