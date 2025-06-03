---
aliases:
  - construal
  - value-guided task construal
tags:
  - permanent-note
  - topic-cognitive-science
publish: "true"
date: 2025-05-26T13:12:36-04:00
lastmod: 2025-06-03T10:49:22-04:00
---
# Overview

$\quad$ [[@2022hoPeople]] introduce **value-guided task construals** to model the process of *adaptively* selecting simplified representations of cause-effect relationships during task planning. Intuitively, a construal “picks out” details in a task to consider. 

$\quad$The problem of selecting a task construal is formulated as an *approximately optimal* trade-off between **cognitive cost** and task performance, or **behavioral utility**. This gives a normative, [[(Resource-)rational analysis|resource-rational]] account of planning ([[@2023hoRational]]).

$\quad$The key idea is to treat model and policy selection as a two-level optimization process: an outer loop selects a **construal**, or simplified model of cause-effect relationships, by optimizing the **value of representation** over task construals; this is then used by an inner loop planning algorithm to compute the optimal policy. 

---

# Preliminaries: MDP models of sequential decision-making

>[!definition] MDP model of sequential decision-making tasks
>A task representation $\mathcal T$ consists of the following data: a state space $\mathcal S$ with initial state $s_0 \in \mathcal S$; an action space $\mathcal A$; a transition function $P : \mathcal S \times \mathcal A \times \mathcal S \to [0, 1]$; and a utility function $U : \mathcal S \to \mathbb R$. The **value** of a plan $\pi : S \times A \to [0, 1]$ is defined for all states $s \in \mathcal S$ by the expected cumulative utility of using that plan:
>$$
>V_\pi(s) = U(s) + \sum_a \pi(a | s ) \sum_{s'}P(s' | s, a) V_\pi(s').
>$$

---

# Value-guided task construals

>[!definition] Construal
>Suppose an agent has $N$ primitive cause-effect relationships assigning probabilities to state, action, and next-state transitions
>$$
>\phi_i : \mathcal S \times \mathcal A \times \mathcal S \to [0,1], \quad \quad i = 1, \ldots, N,
>$$
>where each $\phi_i(s’ |s, a)$ is a potential function representing the *local* effect of taking some action. A **construal** $c \subseteq \{ \phi_1, \ldots, \phi_N\}$ is a subset of primitive cause-effect relationships that produces a task construal $\mathcal T_c$ that shares the same state space, action space, and utility function with $\mathcal T$, but has a **construed transition function**
>$$
>P_c(s' | s, a) \propto \prod_{\phi_i \in c} \phi_i(s' | s, a). 
>$$



>[!definition] Behavioral utility, value of representation
>Given a decision-maker with task construal $\mathcal T_c$, the **behavioral utility** of the computed optimal plan $\pi_c$ when starting at state $s_0$ is defined as its performance when interacting with actual transition dynamics $P$: 
>$$
>U(\pi_c) = U(s_0) + \sum_a \pi_c(a | s_0) \sum_{s'}P(s' | s_0, a) V_{\pi_c}(s').
>$$
>The **value of representation** for the construal $c$ is
>$$
>\text{VOR}(c) = U(\pi_c) - |c|,
>$$
>where $|c|$ is the **cognitive cost** defined as the cardinality of $c$.



---

# Model implementation

- Given a value of representation function $\text{VOR}$ that assigns a value to each construal, decision-makers are modeled as selecting a construal according to a [[Bayesian inference|softmax]] decision rule: $$ P (c) \propto \exp(\alpha^{-1}\text{VOR}(c), $$ where $\alpha > 0$ is temperature parameter.
- The process of revisiting and modifying construals at each stage of planning is represented as a sequential decision-making problem, the **construal modification Markov decision process.**

>[!definition] Construal modification Markov decision process
>Given a set of $N$ cause-effect relationships, let $\mathcal C = \mathcal P ( \{ \phi_1, \ldots, \phi_N \})$ be the set of all possible construals (i.e., the powerset of cause-effect relationships). The **construal modification Markov decision process** has state space $\mathcal S \times \mathcal C$ and an action space corresponding to possible next construals $c’ \in \mathcal C$. After selecting a new construal $c’$, the probability of transitioning from task state $s$ to $s’$ is given by
>$$
>P(s' | s, c') = \sum_a \pi_{c'}(a|s) P (s'|s,a);
>$$
>that is, first calculating a joint distribution using the actual transition function $P(s’|s,a)$ and plan $\pi_{c’}(a|s)$, then marginalizing over task actions $a$.
>
>The **optimal construal modification value function** is defined for all $s \in \mathcal S$ and $c \in \mathcal C$ by 
>$$
>V(s, c) = U(s) + \max_{c'}\left \{ \sum_{s'} P(s' | s, c') V(s', c') - |c' - c| \right \},
>$$
>where $|c’-c|$ is the number of additional cause-effect relationships in $c’$ compared to $c$.

