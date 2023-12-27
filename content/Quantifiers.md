---
aliases: 
tags:
  - permanent-note
  - topic-mathematics-and-logic
---
# Overview

## Quantifiers

Given a family of propositional statements $P$ that depends on parameter $x$:
- The universal quantifier $\forall$ is true when all the statements $P(x)$ are true;
- The existential quantifier $\exists$ is true when at least one of the statements $P(x)$ is true.

When quantifiers are nested, the strength of statements implies $\exists_{y} \forall_{x} Q(x, y) \implies \forall_{x} \exists_{y} Q(x,y)$. Logical operations like and, or, and negation can be used to translate between the two quantifiers.

---
# Notes

## Quantifiers
- $P(x)$ is a family of [[Propositional logic|propositional]] statements that depends on parameter $x$
- "For all x, P(x)" ($\forall_x P(x)$) is the **universal quantifier.** This statement is true precisely when all of the statements $P(x)$ are true.
- "There exists an x such that P(x)" ($\exists_x P(x))$ is the **existential quantifier.** This statement is true precisely when at least one of the statements $P(x)$ is true.
- $\forall$ and $\exists$ quantify over a **set** of propositions, often indicated by $\in$ ("is in")

## Nested quantifiers
- $\forall_{x} \exists_{y} Q(x,y)$ means "for all x, you can find a y so that Q(x,y) is true"
- $\exists_{y} \forall_{x} Q(x, y)$ means "there exists some y so that, for this particular y and all x, the statement Q(x,y) is true"
- The second statement is **stronger**, so that $\exists_{y} \forall_{x} Q(x, y) \implies \forall_{x} \exists_{y} Q(x,y)$
- Statements with the same type of quantifier are not nested since they can be rephrased over a singular **indexing set**

## Quantifiers and logical operations

^163220

#### Negation
$\neg \forall_{x} P(x)\equiv \exists_{x} \neg P(x)$
$\neg \exists_{x} P(x) \equiv \forall_x \neg P(x)$

#### And/or
$\forall_x[P(x) \wedge Q(x)] \equiv [\forall_x P(x)] \wedge [\forall_x Q(x)]$
$\exists_x[P(x) \vee Q(x)] \equiv [\exists_x P(x)] \vee [\exists_x Q(x)]$




