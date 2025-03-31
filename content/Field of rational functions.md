---
aliases:
  - rational function
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-30T13:31:58-04:00
---
# Basic definition

>[!example] Definition: Field of rational functions with coefficients in a field $F$
>If $F$ is a [[Algebraic fields|field]] and $F[x]$ is the [[Polynomial rings|polynomial ring]] with coefficients in $F$, then the **field of rational functions** with coefficients in $F$ is the [[Field of quotients of an integral domain|field of quotients]]
>$$ F(x) = Q(F[x]) = \{ f/g \ : \ f, g \in F[x], \ g \neq 0 \}. $$
>Note that the elements $f/g \in F(x)$ do not define functions from $F$ to itself in general, since usually $f/g$ will be undefined at some $a \in F$ whenever $g(a) = 0$.

---
# Examples and properties

- [[Extension fields]]: If $E$ is an **extension field** of $F$ and $\alpha \in E$ is **transcendental** over $F$, meaning there are no nonzero polynomials $f \in F[x]$ with $\alpha$ as a root, then the smallest subfield of $E$ containing both $F, \alpha$ is precisely the field of rational functions $F(x)$.