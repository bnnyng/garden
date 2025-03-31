---
aliases: 
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4051
status: 🔨
publish: 
date: 2024-11-05 13:48
lastmod: 2024-11-05T14:19:10-05:00
---
>[!example] Definition: Separation axioms
>Let $X$ be a [[Topological spaces and open sets|topological space]].
>
>| Name | Definition | Significance | 
>| -- | -- | -- |
>| $T_1$ | If $x, y \in X$, there exist open neighborhoods $U_x, U_y \subseteq X$ of $x,y$ respetively such that $x \notin U_y$ and $y \notin U_x$. | Singletons are closed. |
>| $T_2$ | If $x, y \in X$, there exist open neighborhoods $U_x, U_y \subseteq X$ such that $U_x \cap U_y = \varnothing$. | Every sequence converges to a unique limit. |
>| $T_3$ | If $A \subseteq X$ is closed and $x \notin A$, there exist disjoint open sets $U_A, U_x \subseteq X$ containing $A$ and $x$, respectively. | Every point of an open set has a closed neighborhood in that set. |
>| $T_4$ | If $A, B \subseteq X$ are closed and $A \cap B = \varnothing$, there exist disjoint open sets $U_A, U_B \subseteq X$ containing $A$ and $B$, respectively. | Every closed set in an open set has a closed neighborhood. |
>| $T_5$ | If $A, B \subseteq X$ are **separated**, there exist disjoint open sets $U_A, U_B \subseteq X$ containing $A$ and $B4, respectively. | Given $Y \subseteq X$, if $A\subseteq \text{Int}(Y)$ and $\overline A \subseteq Y$, then $A$ has a closed neighborhood in $Y$. |
>
>$T_2$ spaces are also called [[Hausdorff spaces]]. 

>[!example] Definition: Regular, normal topological spaces
>Let $X$ be a $T_1$ [[Topological spaces and open sets|topological space]], meaning singleton sets are closed. Then we define $X$ to be the following if additional conditions hold:
>- **Regular ($T_0, T_3 \implies T_2$):** for all $x \in X$ and any closed set $A \subseteq X$ that does not contain $x$, there exist disjoint open sets $U, V \subseteq X$ such that $x \in U$ and $A \subseteq V$.
>- **Normal ($T_1, T_4 \implies T_3)$:** for all disjoint closed sets $A, B \subseteq X$, there exist disjoint open sets $U, V \subseteq X$ such that $A \subseteq U$ and $B \subseteq V$.
>
>Notice that in a $T_1$ space, normal $\implies$ regular $\implies$ [[Hausdorff spaces|Hausdorff]].



#wip what does separated mean?

Metrization theorem








