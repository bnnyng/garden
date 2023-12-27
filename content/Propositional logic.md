---
aliases:
  - propositional logic
  - negation
  - logical equivalence
  - law of the excluded middle
  - logical connective
  - de Morgan's laws
  - tautology
  - contrapositive
  - implication
tags:
  - permanent-note
  - topic-mathematics-and-logic
---
# Overview

## Propositional logic

Mathematical logic is a set of rules used to infer the truth value of one proposition from known truth values of other propositions. Logical manipulation is important because it rephrases statements into more accessible, equivalent forms.

Propositional logic assumes statements have truth values. In general, propositions can be either atomic or compound, which are propositions made from logical connectives. Two propositions with the same truth value are logically equivalent.

---
# Key terms

- **Proposition** = a sentence with an unambiguous **truth value**.
	- **Atomic proposition** = the simplest form of a **proposition**, denoted by a lower-case letter.
	- **Compound proposition** = a proposition built from **atomic propositions** using **logical connectives**.
	- **Truth table** = a table representing the truth value for a proposition based on the truth value of its atomic propositions.
- **Predicate** = a **proposition** whose truth value depends on one or more *variables*. Predicates are used in **first-order logic**, not **propositional logic**.
- **Tautology** = a proposition which is *always true* regardless of the truth value of its **atomic propositions**.
- **Contradiction** = also known as **fallacy**; a proposition which is *always false* regardless of the truth value of its **atomic propositions**.
- **Contingency** = a proposition which is neither a **tautology** nor a **contradiction**.
- **Logically equivalent** = when two **propositions** have the same **truth value**; two propositions are **logically equivalent** *if and only if* they have the same **truth tables**.
- **Law of the excluded middle** = a statement has to be either true or false, and cannot be both of them. For example, the law is assumed for the statement $\neg \neg P \equiv P$.

---
# Notes

## Unary and binary connectives

- **Negation** $\neg P$ = "Not $P$." True when $P$ is true, and false when $P$ is false.
- **Conjunction** $P \wedge Q$ = "P and Q." True when both constituent propositions are true, and false when at least one of $P$, $Q$ is false.
- **Disjunction** $P \vee Q$ = "P or Q." True when at least one of $P$, $Q$ is true, and false when both $P$, $Q$ are false

| $p$ | $q$ | $p \implies q$ | $q \implies p$ | $\neg q \implies \neg p$ | $\neg p \implies \neg q$ |
| --- | --- | -------------- | -------------- | ------------------------ | ------------------------ |
| T   | T   | T              | T              | T                        | T                        |
| T   | F   | F              | T              | F                        | T                        |
| F   | T   | T              | F              | T                        | F                        |
| F   | F   | T              | T              | T                        | T                         |

- **Implication** $P \implies Q$ = "If P is true, then Q is true." True if $P$ is false or $Q$ is true, and false if $P$ is true and $Q$ is false
	- When proving an **implication**, the **hypothesis (**"if $P$") part of the statement can be taken for granted.
	- The **implication** is a **disjunction**; the statement $P \implies Q$ is logically equivalent to the statement $\neg P \vee Q$ ("P is false or Q is true")
	- **Contrapositive** = $\neg Q \implies \neg P \equiv P \implies Q$
	- **Converse** = $Q \implies P$
	- **Inverse** = $\neg P \implies \neg Q$
- $P \iff Q$ ("P is true *if and only if* Q is true") is true if $P$ is **logically equivalent** to $Q$ 
	- By definition, the statement $P \iff Q$ is logically equivalent to the statement $(P \implies Q) \wedge (Q \implies P)$ 

## Standard logical equivalences 

#### Domination law
$P \vee T \equiv T$
$P \vee F \equiv P$

#### Identity law
$P \wedge T \equiv P$
$P \wedge F \equiv F$

#### Commutativity law
$P \vee Q \equiv Q \vee P$
$P \wedge Q \equiv Q \wedge P$

#### Associativity law
$(P \vee Q) \vee R \equiv P \vee (Q \vee R)$
$(P \wedge Q) \wedge R \equiv P \wedge(Q \wedge R)$

#### Distributivity law
$P \vee (Q \wedge R) \equiv (P \vee Q) \wedge (P \vee R)$
$P \wedge (Q\vee R) \equiv (P \wedge Q) \vee (P \wedge R)$

#### Absorption law
$P \vee (P \wedge Q) \equiv P$
$P \wedge (P \vee Q) \equiv P$

#### De Morgan's laws
$\neg \neg P \equiv P$ ("If P is not false, then it is true.")
$\neg (P \vee R) \equiv \neg P \wedge \neg R$ ("If neither P, R are true, then both are false.")
$\neg (P \wedge R) \equiv \neg P \vee \neg R$ ("If it is not true that both P and R are true, then one is false.")


