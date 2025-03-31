---
aliases:
  - SVGD
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-02-02T17:29:25-05:00
---
# Stein variational gradient descent


![[Screenshot 2025-02-02 at 5.27.29 PM.png|550]]

#wip

Algorithm 1 mimics a gradient dynamics at the particle level, where the two terms in φˆ∗(x) in (8) play different roles: the first term drives the particles towards the high probability areas of p(x) by following a smoothed gradient direction, which is the weighted sum of the gradients of all the points weighted by the kernel function. The second term acts as a repulsive force that prevents all the points to collapse together into local modes of p(x); to see this, consider the RBF kernel k(x, x′) = exp(− 1  h ||x − x′||2), the second term reduces to ∑  j  2  h (x − xj)k(xj, x), which drives x away from its neighboring points xj that have large k(xj, x). If we let bandwidth h → 0, the repulsive term vanishes, and update (8) reduces to a set of independent chains of typical gradient ascent for maximizing log p(x) (i.e., MAP) and all the particles would collapse into the local modes.  Another interesting case is when we use only a single particle (n = 1), in which case Algorithm 1 reduces to a single chain of typical gradient ascent for MAP for any kernel that satisfies ∇xk(x, x) = 0 (for which RBF holds). This suggests that our algorithm can generalize well for supervised learning tasks even with a very small number n of particles, since gradient ascent for MAP (n = 1) has been shown to be very successful in practice. This property distinguishes our particle method with the typical Monte Carlo methods that requires to average over many points. The key difference here is that we use a deterministic repulsive force, other than Monte Carlo randomness, to get diverse points for distributional approximation.

---
# Resources

- [“The Stein Gradient” (with notebook)](https://sanyamkapoor.com/kb/the-stein-gradient/)