---
aliases:
  - span
  - spans
  - linear combination
  - spanning set
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-UN1207
publish: "true"
date: 2022-10-12
lastmod: 2025-03-08T18:28:30-05:00
---
# Overview and basic definitions

>[!example] Definition: Linear combination, span
>Let $F$ be a [[Algebraic fields|field]] and $V$ be an $F$[[Vector spaces and ring modules|-vector space]]. A **linear combination** of a sequence of vectors $v_1, \ldots, v_d \in V$ is another vector of the form $$ t_1 v_1 + \cdots + t_dv_d, $$ where each $t_i \in F$.
>
>The **span** of the set $\{ v_1, \ldots, v_d \}$ is the set of all linear combinations $$ \textup{span} \{ v_1, \ldots, v_d \} = \{ t_1 v_1 + \cdots + t_dv_d \ : \ t_i \in f \text{ for all } i \}, $$ with $\textup{span} \ \varnothing = \{ 0 \}$.


---
# Properties of span

>[!abstract] Proposition: Minimality of the spanning subspace
>Let $v_1, \ldots, v_d \in V$ be a sequence of [[Vector spaces and ring modules|vectors]].
>- (i) $\textup{span} \{ v_1, \ldots, v_d \}$ is a vector subspace of $V$ containing $v_i$ for every $i$;
>- (ii) If $W \subseteq V$ is another subspace that contains $v_1, \ldots, v_d$, then $$ \textup{span} \{ v_1, \ldots, v_d \} \subseteq W. $$ That is, $\textup{span} \{ v_1, \ldots, v_d \}$ is the *smallest* vector subspace of $V$ containing the sequence $v_1, \ldots, v_d$;
>- (iii) For every $v \in V$, we have $$ \textup{span} \{ v_1, \ldots, v_d \} \subseteq \textup{span} \{ v_1, \ldots, v_d, v \}, $$ with equality *if and only if* $v \in \textup{span} \{ v_1, \ldots, v_d \}$.


---
# Code snippets

```
v_1, \ldots, v_d
```

```
t_1 v_1 + \cdots + t_dv_d
```

```
\textup{span} \{ v_1, \ldots, v_d \}
```