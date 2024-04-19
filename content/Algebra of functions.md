---
aliases:
  - well-defined
  - well-defined function
  - domain
  - codomain
  - function
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
  - MATH-GU4041
lastmod: 2024-03-31T14:21:12-07:00
publish: 
date: 2023-02-01
---
>[!example] Definition: Function
>A function $f: X \to Y$ consists of three pieces of data:
>- A set $X$, which is the **domain.**
>- A set $Y$, which is the **codomain.**
>- A rule $f$ which takes any input element $x \in X$ and produces an *unambiguous* output $f(x) \in Y$. 

A **well-defined** function produces exactly one value in its **codomain** for every input from its **domain**; that is, there must be exactly one such $f(x)$ for each input $x$. An **ill-defined** function has a formula which is ambiguous, incomplete, or self-contradictory.

Related: [[Image and preimage]], [[Injectivity, surjectivity, and bijectivity]], 

---
# Proof strategies with functions

- Two functions $f$ and $g$ are equal if:
	- $f: X \to Y$ and $g: X \to Y$ have the same domain and codomain.
	- For all $x \in X$, we have $f(x) = g(x)$.
- To prove a function $f: X \to Y$ is injective, or "one-to-one," *assume* $f(x_1) = f(x_2)$ for some $x_1, x_2 \in X$ and *show* $x_1 = x_2$.
- To prove a function $f: X \to Y$ is surjective, or "onto," *assume* an element $y \in Y$ and *show* there exists some $x \in X$ such that $f(x) = y$.

---

# Review

[[MATH-UN1207]]

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

[[MATH-GU4041]]

- Give an example for $f(\bigcap_{A \in T}A) \subset \bigcap_{A \in T} fA$.
- Show that **compositions** are associative using a diagram.
- Give an example where function **composition** does not commute.
- If the composition $(f \circ g)(x) = f(g(x))$ is **bijective**, is $f$ **injective** or **surjective**? What about $g$?