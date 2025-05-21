---
aliases:
  - Euler's theorem
  - Fermat's little theorem
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4041
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-05-13T15:33:09-04:00
---
# Overview and basic definition

>[!definition] Euler $\varphi$-function
>The **Euler $\varphi$-function** (also called the **Euler totient function**) is the map $\varphi: \mathbb N \to \mathbb N$ defined by 
>$$ \varphi(n) = \begin{cases} 1 & \textup{if } n = 1 \\ \#\{m \in \mathbb N \ : m < n, \ \gcd(m, n) = 1 \} & \textup{if } n > 1. \end{cases}  $$

---
# Euler’s and Fermat’s theorems

>[!theorem] Judson 6.18: Euler
>Let $a, n$ be integers such that $n > 0$ and $\gcd(a, n) = 1$. Then $$ a^{\varphi(n)} \equiv 1 \mod n.$$

>**Claim:** If $U(n)$ is the group of units in $\mathbb Z / n \mathbb Z$, then $|U(n)| = \varphi(n)$.


>[!theorem] Fermat’s little theorem
>Let $p$ be any prime number and suppose $p$ does not divide some integer $a$. Then $$ a^{p-1} \equiv 1 \mod p. $$ Further, for any integer $b$, we have $b^p \equiv b \mod p$.

