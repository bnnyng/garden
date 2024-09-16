---
aliases:
  - covariance
  - correlation
  - correlation coefficient
tags:
  - permanent-note
  - topic-logic-mathematics
  - STAT-UN1201
publish: 
date: 2024-09-13 10:24
lastmod: 2024-09-13T10:42:27-04:00
---
# Joint probability distributions

When $X$ and $Y$ are two [[Probability distributions for discrete random variables|discrete random variables]] defined on the [[Sample spaces and events|sample space]] $\mathcal S$ of an experiment, the **joint probability mass function** is defined for each pair $(x,y)$ by $$ p(x,y) = P(X = x \text{ and }Y = y).$$
We can use the joint pmf to compute both the probability that the random pair $(X,Y)$ lies in any two-dimensional set $A$, as well as to recover the distribution of a single variable $X$ or $Y$.

On the other hand, if $X$ and $Y$ are [[Probability distributions for continuous random variables|continuous random variables]], then the **joint probability density function** is defined as a function which satisfies $f(x,y) \geq 0$ and $$ \int_{-\infty}^\infty \int_{-\infty}^\infty f(x,y) \; dxdy = 1. $$
Then the probability that the pair $(X,Y)$ lies in a two-dimensional set $A$ is obtained by the joint pdf over $A$. Similar to the discrete case, the **marginal probability density function** of each variable can be obtained by fixing the possible value for one variable, then integrating the joint pdf over the other.

---
# Expected value of jointly distributed variables

> [!example] Formula: Expected value of a function $h(X,Y)$
> $$ \mathbb E[h(X,Y)] = \mu_{h(X,Y)} = \begin{cases} \sum_x \sum_y h(x,y) \cdot p(x,y) & \text{for discrete } X,Y \\ \int_{-\infty}^{\infty} h(x,y) \cdot f(x,y) & \text{for continuous } X,Y \end{cases}$$

---

# Covariance of jointly distributed variables

The **covariance** between two dependent random variables is an assessment of how strongly they are related to one another. It is defined as the **expected value** (or mean) of the *product* of their deviations from their *individual* expected values.

>[!example] Formula: Covariance between $X$ and $Y$
>$$ 
>\begin{align}\text{Cov}(X,Y) &= \mathbb E[(X - \mathbb E[X])(Y-\mathbb E[Y])] \\ &= \begin{cases} \sum_x \sum_y (x - \mu_X)(y-\mu_Y)p(x,y) & \text{for discrete } X,Y \\ \int_{-\infty}^{\infty} (x - \mu_X)(y-\mu_Y)f(x,y) \; dxdy & \text{for continuous } X,Y \end{cases} \end{align}
>$$

>[!example] Formula: Shortcut formula for covariance
>$$ \text{Cov}(X,Y) = \mathbb E(XY) - \mu_X \cdot \mu_Y $$

Note that the formula for covariance computes a value which depends entirely on the unit of measurement. 

---
# Correlation

We use the **correlation coefficient** to scale the covariance and make it interpretable. More precisely, the correlation coefficient measures the degree of **linear** relation between two random variables, which are said to be **uncorrelated** when their correlation coefficient is 0.

> [!example] Formula: Correlation coefficient
> $$ 
> \text{Corr}(X,Y) = \rho_{X,Y} = \frac{\text{Cov}(X,Y)}{\sigma_X \cdot \sigma_Y} 
> $$