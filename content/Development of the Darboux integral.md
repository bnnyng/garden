---
aliases:
  - Darboux sum
  - refinement
tags:
  - permanent-note
  - topic-logic-mathematics
  - MATH-GU4061
status: 🔨
publish: "true"
date: 2024-11-12 13:33
lastmod: 2024-11-26T08:48:42-05:00
---
# Overview

If $D \subset \mathbb R^n$ is **Jordan measurable** and $f: D \to \mathbb R$ is a [[Continuous functions|continuous]] and bounded function, then the **Darboux integral** $$ \int_D f(\vec x )d\text{vol}_n $$ is defined. Though not unambiguously correct like the [[Lebesgue integral]], this gives a “reasonable” notion of integrability that allows one to do calculus.

---

# Darboux integral in $\mathbb R$


>[!example] Definition: Partition
>Given a bounded set $[a,b] \subset \mathbb R$, a **partition** $P = \{ x_0, \ldots, x_n \}$ of $[a,b]$ is the collection of intervals made from a finite list of “sampling points” with $a = x_0 < \cdots < x_n = b$. 
>
>A **refinement** of this partition is made by adding sampling points to generate new intervals. Two partitions of $P, P'$ need not be comparable, but one can use their common refinement
>$$
>P \cup P' = \{ x_0, \ldots, x_n, x_0', \ldots, x_m' \}.
>$$

^cb3f3d

Given a partition $P = \{ x_0, \ldots, x_n \}$ of $[a, b] \subset \mathbb R$, the upper and lower sums are motivated by the fact that for any $k$ and $t \in [x_{k-1}, x_k]$:
- $[x_{k-1}, x_k] \times [0, \sup f(t)]$ is the largest box *containing* the graph of $f$;
- $[x_{k-1}, x_k] \times [0, \inf f(t)]$ is the largest box *contained* under the graph of $f$.

>[!example] Definition: Darboux sums and integrals, Darboux integrable in a single variable
>Let $f: [a,b] \to \mathbb R$ be a function, and let $P = \{ x_0, \ldots, x_n\}$ be a partition of $[a, b]$. Then the upper and lower **Darboux sums** are defined by
>$$
>U(f, P) = \sum_{k=1}^n (x_k - x_{k-1})\sup_{t \in [x_{k-1}, x_k]} f(t) 
>$$
>$$
>L(f, P) = \sum_{k=1}^n (x_k - x_{k-1})\inf_{t \in [x_{k-1}, x_k]} f(t) ,
>$$
>respectively. Further, the upper and lower **Darboux integrals** are given by taking the infimum and supremum of all partitions of $[a,b]$, respectively:
>$$
>U_f = \underline{\int^b_a} f = \inf \{ U(f, P) \ | \ P \text{ is a partition of }[a, b] \}
>$$
>$$
>L_f = \overline{\int^b_a} f = \sup \{ L(f, P) \ | \ P \text{ is a partition of }[a, b] \}.
>$$
>If $U_f = L_f$, then $f$ is said to be **Darboux integrable**.

^82b9d9

Intuitively, if $P’$ is a direct refinement of a partition $P$ such that the intervals or rectangle widths are smaller, then $U(f, P’) \leq U(f, P)$ and $L(f, P’) \geq L(f, P)$.


>[!abstract] Theorem (Rudin 6.5): The upper Darboux sum is greater than or equal to the lower Darboux sum
>Let $f: [a,b] \to \mathbb R$ be bounded. Then 
>$$
>L_f = \sup_{\text{partitions }P}L(f,P) \leq U_f = \inf_{\text{partitions }P} U(f, P). 
>$$

^7c2ee8


*Proof from [[MATH-GU4061|Modern Analysis I]].*

Let $P_1, P_2$ be two partitions of $[a, b]$. These partitions are not directly comparable, so we instead use their common **refinement** $Q = P_1 \cup P_2$. (🔺 **Show that the lower [[Development of the Darboux integral|Darboux sum]] of a refinement is $\geq$ the original lower sum, and the upper sum of the refinement is $\leq$ the original upper sum.**) Then $L(f, P_1) \leq L(f, Q)$ and $U(f, Q) \leq U(f, P_2)$, and $L (f, Q) \leq U(f, Q)$ by definition, so all together we have

Since $P_1, P_2$ are arbitrary and we have for any two partitions
$$
L(f, P_1) \leq L_f
\quad \quad \quad
U_f \leq U(f, P_2),
$$
it follows that $L(f, P_1) \leq U(f, P_2)$. Then taking the supremum over all $P_1$ and infimum over all $P_2$ gives proves the stated theorem. $\ \square$

---

# Darboux integral in higher dimensions


>[!example] Definition: Darboux integrable in multiple variables
>A function $f: [a_1,b_1] \times \cdots [a_n,b_n] \to \mathbb R$ is **Darboux integrable** if the *greatest lower bound* of the sum of "overestimate boxes" $U_f$ and the *least upper bound* of the sum of "underestimate boxes" $L_f$ are the same. In this case, we set its integral to be  In this case, we set its integral to be 
>$$ 
>U_f = L_f = \int_B f(\vec x) d\text{vol}_n 
>$$ 
>where $B$ is the box of the domain.

>[!example] Definition: Characteristic function
> If $D \subset \mathbb R^n$ is a subset of Euclidian space, its **characteristic function** $\chi_D : \mathbb R^n \to \mathbb R$ is 
> $$ 
> \chi_D(\vec x) = \begin{cases} 1 & \vec x \in D \\ 0 & \vec x \notin D\end{cases}. 
> $$

>[!example] Definition: Jordan measurable
>A subset of Euclidian space $D \subset \mathbb R^n$ is **Jordan measurable** if its **characteristic function** $\chi_D$ is **integrable**. In this case, we set 
>$$ 
>\text{vol}_n(D) = \int_B \chi_D d\text{vol}_n 
>$$ 
>for some box $B$ containing $D$.

*Remark.* What does Jordan measurable actually mean? If $\chi_D$ is **integrable**, we can compute upper and lower sums for $\chi_D$, which are over and underestimate approximations using boxes.
	- Then $D$ is **Jordan measurable** if for all $\epsilon > 0$, the inner and outer boxes are at least $\epsilon$-close.
	- In other words, the domain is **Jordan measurable** if its "[[Fubini's theorem and change of variables|boundary]]" has volume (i.e., **Jordan measure**) $0$!

>[!example] Definition: Integration on Jordan measurable sets
> If $D \subset \mathbb R^n$ is a **bounded subset** (that is, it is contained in a "box" with $D \subset [-c, c]^n$ for some $c > 0$), and $f : D \to \mathbb R$ is a function, we say $f$ is **integrable** on $D$ if $f\chi_D$ is **integrable** over the box $[-c, c]^n$, with integral
> $$ 
> \int_D f(\vec x) d\text{vol}_n = \int_{[-c, c]^n} f(\vec x) \chi_D(\vec x) d \text{vol}_n. 
> $$



%% ## Darboux integration in higher dimensions

- *(Definition)* A function $f: [a_1,b_1] \times \cdots [a_n,b_n] \to \mathbb R$ is **Darboux integrable** if the *greatest lower bound* of the sum of "overestimate boxes" $U_f$ and the *least upper bound* of the sum of "underestimate boxes" $L_f$ are the same. In this case, weset its integral to be $$ U_f = L_f = \int_B f(\vec x) d\text{vol}_n $$ where $B$ is the box of the domain.

- *(Definition)* If $D \subset \mathbb R^n$ is a subset of Euclidian space, its **characteristic function** $\chi_D : \mathbb R^n \to \mathbb R$ is $$ \chi_D(\vec x) = \begin{cases} 1 & \vec x \in D \\ 0 & \vec x \notin D\end{cases}. $$
- *(Definition)* If $D \subset \mathbb R^n$ is a **bounded subset** (that is, it is contained in a "box" with $D \subset [-c, c]^n$ for some $c > 0$), and $f : D \to \mathbb R$ is a function, we say $f$ is **integrable** on $D$ if $f\chi_D$ is **integrable** over the box $[-c, c]^n$, with integral $$ \int_D f(\vec x) d\text{vol}_n = \int_{[-c, c]^n} f(\vec x) \chi_D(\vec x) d \text{vol}_n. $$
---
## Jordan measurability

- *(Definition)* A subset of Euclidian space $D \subset \mathbb R^n$ is **Jordan measurable** if its **characteristic function** $\chi_D$ is **integrable**. In this case, we set $$ \text{vol}_n(D) = \int_B \chi_D d\text{vol}_n $$ for some box $B$ containing $D$.
- What does **Jordan measurable** actually mean?
	- If $\chi_D$ is **integrable**, we can compute upper and lower sums for $\chi_D$, which are over and underestimate approximations using boxes.
	- Then $D$ is **Jordan measurable** if for all $\epsilon > 0$, the inner and outer boxes are at least $\epsilon$-close.
	- In other words, the domain is **Jordan measurable** if its "[[Fubini's theorem and change of variables|boundary]]" has volume (i.e., **Jordan measure**) $0$!
- *(Proposition 16.1)* If $D_1, D_2 \subset \mathbb R^n$ are **Jordan measurable**, then so are their intersection $D_1 \cap D_2$ and union $D_1 \cup D_2$, and their volumes can be computed by $$ \text{vol}_n(D_1) + \text{vol}_n(D_2) - \text{vol}_n(D_1 \cap D_2) = \text{vol}_n(D_1 \cup D_2). $$
- *(Proposition 16.2)* **The region bounded by continuous bounded functions is Jordan measurable.** If $D \subset B \subset \mathbb R^{n-1}$ is **Jordan measurable** and $f,g : D \to \mathbb R$ are **continuous** and **bounded**, $$ D' = \{\vec x \in \mathbb R^n \| \ f(\vec x) \leq x_j \leq g(\vec x) \} $$ is **Jordan measurable**, where $x_j$ is the coordinate omitted in $D \subset \mathbb R^{n-1}$. 
- *(Theorem 16.3)* If $D \subset \mathbb R^n$ is **Jordan measurable** and $f: D \to \mathbb R$ is [[Continuity|continuous]] and **bounded**, then $f$ is **Darboux integrable** on $D$. %%

```

---
## Darboux integration in higher dimensions

- *(Definition)* A function $f: [a_1,b_1] \times \cdots [a_n,b_n] \to \mathbb R$ is **Darboux integrable** if the *greatest lower bound* of the sum of "overestimate boxes" $U_f$ and the *least upper bound* of the sum of "underestimate boxes" $L_f$ are the same. In this case, weset its integral to be $$ U_f = L_f = \int_B f(\vec x) d\text{vol}_n $$ where $B$ is the box of the domain.

- *(Definition)* If $D \subset \mathbb R^n$ is a subset of Euclidian space, its **characteristic function** $\chi_D : \mathbb R^n \to \mathbb R$ is $$ \chi_D(\vec x) = \begin{cases} 1 & \vec x \in D \\ 0 & \vec x \notin D\end{cases}. $$
- *(Definition)* If $D \subset \mathbb R^n$ is a **bounded subset** (that is, it is contained in a "box" with $D \subset [-c, c]^n$ for some $c > 0$), and $f : D \to \mathbb R$ is a function, we say $f$ is **integrable** on $D$ if $f\chi_D$ is **integrable** over the box $[-c, c]^n$, with integral $$ \int_D f(\vec x) d\text{vol}_n = \int_{[-c, c]^n} f(\vec x) \chi_D(\vec x) d \text{vol}_n. $$
---
## Jordan measurability

- *(Definition)* A subset of Euclidian space $D \subset \mathbb R^n$ is **Jordan measurable** if its **characteristic function** $\chi_D$ is **integrable**. In this case, we set $$ \text{vol}_n(D) = \int_B \chi_D d\text{vol}_n $$ for some box $B$ containing $D$.
- What does **Jordan measurable** actually mean?
	- If $\chi_D$ is **integrable**, we can compute upper and lower sums for $\chi_D$, which are over and underestimate approximations using boxes.
	- Then $D$ is **Jordan measurable** if for all $\epsilon > 0$, the inner and outer boxes are at least $\epsilon$-close.
	- In other words, the domain is **Jordan measurable** if its "[[Fubini's theorem and change of variables|boundary]]" has volume (i.e., **Jordan measure**) $0$!
- *(Proposition 16.1)* If $D_1, D_2 \subset \mathbb R^n$ are **Jordan measurable**, then so are their intersection $D_1 \cap D_2$ and union $D_1 \cup D_2$, and their volumes can be computed by $$ \text{vol}_n(D_1) + \text{vol}_n(D_2) - \text{vol}_n(D_1 \cap D_2) = \text{vol}_n(D_1 \cup D_2). $$
- *(Proposition 16.2)* **The region bounded by continuous bounded functions is Jordan measurable.** If $D \subset B \subset \mathbb R^{n-1}$ is **Jordan measurable** and $f,g : D \to \mathbb R$ are **continuous** and **bounded**, $$ D' = \{\vec x \in \mathbb R^n \| \ f(\vec x) \leq x_j \leq g(\vec x) \} $$ is **Jordan measurable**, where $x_j$ is the coordinate omitted in $D \subset \mathbb R^{n-1}$. 
- *(Theorem 16.3)* If $D \subset \mathbb R^n$ is **Jordan measurable** and $f: D \to \mathbb R$ is [[Continuity|continuous]] and **bounded**, then $f$ is **Darboux integrable** on $D$.
```