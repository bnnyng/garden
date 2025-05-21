---
aliases:
  - algebraic extension
  - algebraic closure
  - algebraically closed
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4042
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-05-07T11:35:05-04:00
---

# Overview and definitions

>[!definition] Algebraic closure in an extension field, algebraic extension
>If $E$ is an [[Extension fields|extension field]] of $F$, then the **algebraic closure** of $F$ in $E$ is the set of all elements of $E$ which are algebraic over $F$: $$ \{ \alpha \in E \ : \ \alpha \text{ is algebraic over } F \}. $$
>We say $E$ is an **algebraic extension** of $F$ if $\alpha$ is algebraic over $F$ for all $\alpha \in E$. By definition, the algebraic closure is an algebraic extension.

>[!definition] Algebraically closed field, algebraic closure of a field
>A field $K$ is **algebraically closed** if every nonconstant [[Polynomial rings|polynomial]] $f \in K[x]$ has a root in $K$. If $K$ happens to be an [[Extension fields|extension field]] $K$ of a field $F$, we say $K$ is *an* **algebraic closure** of $F$ if $K$ is also an algebraic extension of $F$.

**Relevant theorems:**
- [[(Theorem) Fundamental theorem of algebra]]

---
# Relation to finite extensions

>[!lemma] Consequences of properties of finite extensions for algebraic extensions
>- (i) If $E$ is a [[Finite extension fields|finite extension]] of $F$, then $E$ is an algebraic extension of $F$.
>- (ii) Let $E$ be an extension field of $F$ and $\alpha, \beta \in E$ be [[Extension fields|algebraic over]] $F$. Then $$ a \pm \beta \quad \quad a \cdot \beta \quad \quad a/\beta \ \text{ (if } \beta \neq 0) $$ are all also algebraic over $F$.


>[!corollary] The algebraic closure is a subfield
>The algebraic closure of $F$ is in $E$ is a *subfield* of $E$ containing $F$.

- Follows from (ii) of the above lemma

>[!lemma]
>Let $E$ be an [[Extension fields|extension field]] of $F$. Then $E$ is a finite extension of $F$ *if and only if* $$ E = F (\alpha_1, \ldots, \alpha_n), $$ for some $\alpha_1, \ldots, \alpha_n \in E$, which are all algebraic over $F$.

>[!lemma] Algebraic extensions on subfields
>Let $F \leq E \leq K$ be a sequence of [[Extension fields|field extensions]].
>- (i) If $E$ be an algebraic extension of $F$, and $\alpha \in K$. Then $\alpha$ is algebraic over $F$ *if and only if* $\alpha$ is algebraic over $E$.
>- (ii) $K$ is an algebraic extension of $F$ *if and only if* $K$ is an algebraic extension of $E$ and $E$ is an algebraic extension of $F$.
 
---
# Algebraically closed fields

>[!lemma] Equivalent characterizations of algebraically closed fields
>Let $K$ be a [[Algebraic fields|field]]. Then the following are equivalent:
>- (i) $K$ is algebraically closed;
>- (ii) If $f \in K[x]$ is a nonconstant [[Polynomial rings|polynomial]], then $f$ is a product of linear factors, i.e., the [[Irreducibility|irreducible]] polynomials in $K[x]$ are linear.
>- (iii) The only algebraic extension of $K$ is $K$ itself.

---
# Relation between the definitions

>[!proposition]
>Let $F$ be a [[Algebraic fields|field]] and let $K$ be an [[Extension fields|extension field]] of $F$. If $K$ is algebraically closed, then the algebraic closure of $F$ in $K$ is *an* algebraic closure of $F$.

---
# Examples

- [[Field of algebraic numbers]]

