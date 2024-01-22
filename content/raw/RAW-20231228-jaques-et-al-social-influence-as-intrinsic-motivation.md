---
ref-title: Social Influence as Intrinsic Motivation for Multi-Agent Deep Reinforcement Learning
ref-author: Jaques et al.
ref-publish-date: "2019"
ref-type: Paper
ref-read-date: 2023-12-28
ref-link: https://arxiv.org/abs/1810.08647
aliases: 
tags:
  - raw
lastmod: 2023-12-29T19:05:04-08:00
---
# Highlights
- Social learning is incredibly important for humans, and has been linked to our ability to achieve unprecedented progress and coordination on a massive scale ([View Highlight](https://read.readwise.io/read/01hjsp3m962hzwbg9113cs7mrx))
- Causal influence is assessed using counterfactual reasoning; at each timestep, an agent simulates alternate, counterfactual actions that it could have taken, and assesses their effect on another agent’s behavior. ([View Highlight](https://read.readwise.io/read/01hjsp4p5hbt5zqd6y60f0h6g1))
- Social influence can be seen as a novel, social form of empowerment. ([View Highlight](https://read.readwise.io/read/01hjsp5aty6chex93tcyasr0nd))
- deep RL agents trained with the proposed social influence reward learn effectively and attain higher collective reward than powerful baseline deep RL agents, which often completely fail to learn ([View Highlight](https://read.readwise.io/read/01hjspar3a6dqsbwjv7g9c2jjj))
- the collective reward obtained by a group of agents in these SSDs gives a clear signal about how well the agents learned to cooperate (Hughes et al., 2018) ([View Highlight](https://read.readwise.io/read/01hjsp9t7pwdvvdgj1nggqen5z))
- the communication protocols trained with the influence reward are more meaningful and effective for obtaining better collective outcomes ([View Highlight](https://read.readwise.io/read/01hjspbj881zh1fex1xb8mzx6r))
- the influence reward is essential to allow agents to learn to coordinate. ([View Highlight](https://read.readwise.io/read/01hjspbbf24eh18ve64dgc8mg5))
- Not only must influence agents learn to coordinate their behavior to obtain high reward, they must also learn to cooperate. ([View Highlight](https://read.readwise.io/read/01hjspdk56fxjwn6kkb0xcgv83))
- Influence agents can thus learn socially, only through observing other agents’ actions, and without requiring a centralized controller or access to another agent’s reward function. ([View Highlight](https://read.readwise.io/read/01hjspcqcp7t3nkvmzeh80ar2t))
- multiple agents are trained to independently maximize their own individual reward; agents do not share weights ([View Highlight](https://read.readwise.io/read/01hjspdyzsr4wpqq71445nqq4w))
- Social influence can reduce the variance of policy gradients by introducing explicit dependencies across the actions of each agent ([View Highlight](https://read.readwise.io/read/01hjspj90nynwxsrh2wmjfn290))
- 1) we use centralized training to compute ck
  t directly
  from the policy of agent j, and 2) we assume that influence is unidirectional: agents trained with the influence reward can only influence agents that are not trained with the influence reward ([View Highlight](https://read.readwise.io/read/01hjspkmepn5d18dy35ggq1rgx))
- agent k asks a retrospective
  question: “How would j’s action change if I had acted differently in this situation? ([View Highlight](https://read.readwise.io/read/01hjspg1e7sgfxr9zm5210mzy5))
- The discrepancy between the marginal policy of j and the conditional policy of j given k’s action is a measure of the causal influence of k on j; it gives the degree to which j changes its planned action distribution because of k’s action ([View Highlight](https://read.readwise.io/read/01hjspgtaghqbz38fent0a3x39))
- introducing an awareness of other agents’ actions helps, but having the social influence reward eventually leads to significantly higher collective reward in both games ([View Highlight](https://read.readwise.io/read/01hjspn2ykdm8cg1ev3q6rpfx4))
- the influence reward gave rise not only to cooperative behavior, but to emergent communication. ([View Highlight](https://read.readwise.io/read/01hjspqc4kf1rw5b7wvx94w8gr))
- Whether it will always give rise to cooperative behavior may depend on the specifics of the environment and task, and tuning the trade-off between environmental and influence reward ([View Highlight](https://read.readwise.io/read/01hjsprc9pqm4hadehvwmp93r0))
- it may be possible to influence another agent in a non-cooperativeway ([View Highlight](https://read.readwise.io/read/01hjsprhp2anwrfac5ys4fhgrk))
- the influencer agent learned to use its own actions as a binary code which signals the presence or absence of apples in the environment ([View Highlight](https://read.readwise.io/read/01hjspq1eeqh30hsjwxtwt0q1y))
- we hypothesize that influential communication must provide useful information to the listener ([View Highlight](https://read.readwise.io/read/01hjspx2adytgz6rmktkwef35d))
- counterfactual involves conditioning on a set of variables observed in a given situation and asking how would the outcome have changed if some variable were different, and all other variables remained the same ([View Highlight](https://read.readwise.io/read/01hjspxq4za5w30hskjw3cvdf2))
- Using counterfactuals to allow agents to understand the effects of their actions on others is a promising approach with many extensions ([View Highlight](https://read.readwise.io/read/01hjspz78f57pynbwj3gy9cs8s))
