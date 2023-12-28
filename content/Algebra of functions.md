---
aliases:
  - well-defined
  - well-defined function
  - domain
  - codomain
  - injective
  - surjective
  - bijective
  - image
  - preimage
tags:
  - permanent-note
  - topic-logic-mathematics
---
# Overview

## Algebra of functions

- A function consists of three pieces of data: a domain set, a codomain set, and a rule which takes any input from the domain and produces a unique output in the codomain.
- A **well-defined** function produces exactly one value in its **codomain** for every input from its **domain**; that is, there must be exactly one such $f(x)$ for each input $x$.
- An **ill-defined** function has a formula which is ambiguous, incomplete, or self-contradictory.

---
# Notes

## Definition of a function


*(Definition 7)* A function $f: X \to Y$ consists of three pieces of data:
- A set $X$, which is the **domain.**
- A set $Y$, which is the **codomain.**
- A rule $f$ which takes any input element $x \in X$ and produces an *unambiguous* output $f(x) \in Y$. 

## Images and preimages
Given a function $f:X \to Y$, we can produce subsets of $X$ and $Y$:

- If $S \subset X$, the **(forward) image** of $S$ under the function $f$ is the set of points in $Y$ which are mapped to by some point(s) in $S$.
$$ f(S) = \{y \in Y \mid y = f(s) \text{ for some } s \in S \}$$
- If $T \subset Y$, the **preimage** or **reverse image** of $T$ under the function $f$ is the set of points in $X$ which map to some point in $T$.
$$ f^{-1}(T) = \{x \in X \mid f(x) \in T \} $$

## Injectivity, surjectivity, and bijectivity
Suppose $f : X \to Y$ is a function.

- $f$ is **injective** means if two input values have the same output value, they were the same input value all along. The *contrapositive* is: Any two distinct elements in the **domain** map to distinct elements in the **codomain**.
$$ \forall_{x \in X} [f(x) = f(x)^\prime] \implies [x = x^\prime]]$$
- $f$ is **surjective** means that all possible output values are entered, so that the **image** of $f$ is the whole **codomain**.
$$ f(X) = Y \equiv \forall_{y\in Y}\exists_{x\in X}[f(x) = y] $$
- $f$ is **bijective** if it is both **injective** and **surjective.**

## Proof strategies with functions

- Two functions $f$ and $g$ are equal if:
	- $f: X \to Y$ and $g: X \to Y$ have the same domain and codomain.
	- For all $x \in X$, we have $f(x) = g(x)$.
- To prove a function $f: X \to Y$ is injective, or "one-to-one," *assume* $f(x_1) = f(x_2)$ for some $x_1, x_2 \in X$ and *show* $x_1 = x_2$.
- To prove a function $f: X \to Y$ is surjective, or "onto," *assume* an element $y \in Y$ and *show* there exists some $x \in X$ such that $f(x) = y$.

---

# Review

## Honors Math A

- Show that $f^{-1}(Y) = X$ no matter what $f,X,Y$ are.
- Suppose $f: \mathbb R \to \mathbb R$ is the function defined by $f(x) = x^2$. 
	- Prove the following by establishing double containment.
		- $f(\mathbb R) = [0, \infty)$
		- $f([-1,1]) = [0,1]$
		- $f([-1, -1/2) \cup [0, 1/2]) = [0,1]$
	- Calculate the following: $f^{-1} (0)$, $f^{-1}(1)$, $f^{-1}(-1)$.
- Find examples of functions $f$ and sets $S,T,A,B$ so that the sets on the right-hand side are strictly larger:
	- $S \subset f^{-1}(f(S))$
	- $f(f^{-1}(T)) \subset T$
	- $f(A \cup B) \subset f(A) \cap f(B)$
- Prove each of the set inclusions above and the equality below using **definition pushing** arguments.
	- $f(A\cup B) = f(A) \cup f(B)$

## Modern Algebra I
- Give an example for $f(\bigcap_{A \in T}A) \subset \bigcap_{A \in T} fA$.
- Show that **compositions** are associative using a diagram.
- Give an example where function **composition** does not commute.
- If the composition $(f \circ g)(x) = f(g(x))$ is **bijective**, is $f$ **injective** or **surjective**? What about $g$?