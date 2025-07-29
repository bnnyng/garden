---
aliases: 
tags:
  - permanent-note
  - topic-cognitive-science
publish: 
date: 2025-06-03T14:29:49-04:00
lastmod: 2025-06-03T14:37:14-04:00
---
# Discovery games

>[!definition] Discovery game
>A **discovery game** $\mathcal G$ is a tuple $\langle M, \mathcal T, A, R, \mathbf R \rangle$, where $M$ is a set of **items**, $\mathcal T$ is the **game tree** recording successful combinations, $A$ is a set of **actions**, $R : M \to \mathbb Z_+$ is the **item reward** function, and $\mathbf R$ is the **action reward** function.
>$\quad$ Given two items $m, n \in M$, an attempted combination is denoted $c (m,n)$, where for a successful combination we have $c(m,n) = o$ for some newly discovered object $o \in \mathcal T$.

---
# The optimal policy for discovery


---
# Model implementation

- The **item reward function** 