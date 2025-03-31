---
aliases:
  - radial basis function
  - RBF kernel
  - squared exponential
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-03-21T10:32:44-04:00
---
# Overview and basic definition

Given two points $x_i, x_j \in \mathbb R^d$, the **radial basis function** kernel measures the similarity between them, decaying exponentially with their squared Euclidean distance.

>[!example] Definition: Radial basis function kernel
>Consider a [[Gaussian process regression|Gaussian process]] whose realizations $$ f \sim \mathcal{GP}(\mu(x), k(x, x')) $$ are functions $f : \mathbb R^d \to \mathbb R$, and suppose $n$ data points are given. The **radial basis function** (or **squared exponential**, **Gaussian**) kernel is the map $k : \mathbb R ^d \times \mathbb R^d \to \mathbb R$ defined by $$ k(x_i, x_j) = \sigma^2 \exp \left ( -\frac{1}{2 \ell ^2} \sum_{k=1}^d (x_{i, k} - x_{j, k})^2 \right ) $$ for all $x_i, x_j \in \mathbb R^d$, where $\ell$ is the **length-scale** parameter controlling the smoothness of the kernel.

**Related notes:** [[Gaussian process regression]]

---
# References

- Statistics Stack Exchange, “[Kernels in Gaussian Processes](https://stats.stackexchange.com/questions/298734/kernels-in-gaussian-processes)”
