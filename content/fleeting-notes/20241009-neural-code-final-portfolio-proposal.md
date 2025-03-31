---
aliases: []
tags:
  - fleeting-note
  - NSBV-BC3386
date: 2024-10-09 17:51
lastmod: 2024-12-03T10:57:24-05:00
---
Bonnie Yang
NSBV-BC3386 The Neural Code
October 21, 2024

#### Final portfolio proposal

My final portfolio will broadly be about reinforcement learning and the hippocampus, both at neural and population code levels.

The first component will be a review/opinion essay (the proportion of each to be determined). I will begin with an overview of dopamine prediction-error signaling as motivation for applying a reinforcement learning paradigm to the brain. Phasic dopamine neuron responses have two components: an initial, unselective response to physically salient stimuli, and the well-known prediction-error response that acts as a reinforcing signal to promote behavior-related neural activity associated with higher-than-expected rewards and suppress activity related with lower-than-expected rewards [[@2016schultz]]. Thus, the prediction-error signal has often been assumed to be a direct implementation of value-based reinforcement learning (i.e., learning to obtain what is subjectively rewarding). However, several recent studies complicate the picture of dopamine and reinforcement via prediction errors. For example, [[@2023coddington]] show that dopamine neuron firing rates match a direct policy-learning RL paradigm instead of value-learning, suggesting that signals capture a *learning rate* for per-trial error. [[@2023markowitz]] showed that dopamine neuron activity corresponds with repeated “syllables” of mouse behaviors that are not evoked by any external reward, suggesting that dopamine is a mechanism for “intrinsic motivation” of behaviors. Interestingly, they validate these findings by training an RL agent to maximize dopamine in order to predict syllable choices in the actual mouse data, and that “the model converged on a syllable transition matrix similar to that emitted by actual mice exploring an open field”; I will have to read the paper more closely to understand the implications and connections to reinforcement learning more broadly, but it’s worth noting that intrinsically motivated reinforcement learning is an active field of research inspired by exactly this kind of “spontaneous” behavior in animals [[@2004chentanez]].

The application of RL to higher-level behavior an appropriate transition to discussing RL as a paradigmatic model for population codes, though I’m not sure if this next part is thematically cohesive enough to include in the same component. Maybe I could instead have an expository section in my second portfolio component? [[@2017stachenfeld]] propose a model of hippocampal place cells as a predictive map that encode the animal’s future locations; this work ties together topics of rate codes, representations, and receptive fields in the context of encoding a RL-based model. [[@2020geerts]] expand this to a general model of learning and decision-making that combines the hippocampal map with a stimulus-response learning system associated with the dorsolateral striatum (again, having only briefly looked over these papers, it seems like  the findings of [[@2023coddington]] actually support this model?). 

At some point, I’d really like to discuss a larger picture of what kind of knowledge neuroscience gives us at all (hence the “opinion” portion). Some of the papers I’ve reviewed use “dopamine” and “dopamine neuron” almost interchangeably, almost implicitly challenging the classic “doctrine” that neurons are the basic functional unit of the brain [[@2005bullock]]. However, this conceptual integration leads to explicit problems in the account of dopamine in the brain, such as why dopamine (the molecule) should do so many other things besides enable prediction-error signaling in the so-called dopamine neurons [[@2016schultz]]. Once the scope of neuroscience moves beyond descriptions of cytoarchitecture and gross biological details (e.g., to a theory of information processing), a scientific explanation depends entirely on our top-down priors. For example, the different theories of dopamine “contradict” one another; to what extent is finding a single characterization of dopamine useful, if there are so many edge cases? Why should the neuron-dopamine code be equivalent in different environmental (e.g., physical location, higher-level cognitive task, external stimuli) contexts?

For the second component, I would like to play around with the RatInABox toolkit developed by [[@2024george]]. I am not sufficiently familiar with the existing literature or capabilities of the package to come up with an original “experiment” yet, but the package is so new that, as a back-up ideal, even an expository code notebook for an undergraduate audience with information about hippocampal cells and a basic RL experiment would be a somewhat original contribution. (I think it would be extremely interesting to implement some kind of intrinsic motivation, but I am not sure how well-defined this task is.) I envision this to be graded with the “code” rubric.

#### References
Bullock, T., Bennett, M., Johnston, D., Josephson, R., Marder, E., & Fields, R. (2005). The Neuron Doctrine, Redux. _Science (New York, N.Y.)_, _310_, 791–793. [https://doi.org/10.1126/science.1114394](https://doi.org/10.1126/science.1114394)

Chentanez, N., Barto, A., & Singh, S. (2004). Intrinsically Motivated Reinforcement Learning. _Advances in Neural Information Processing Systems_, _17_. [https://proceedings.neurips.cc/paper/2004/hash/4be5a36cbaca8ab9d2066debfe4e65c1-Abstract.html?ref=https://githubhelp.com](https://proceedings.neurips.cc/paper/2004/hash/4be5a36cbaca8ab9d2066debfe4e65c1-Abstract.html?ref=https://githubhelp.com)

Coddington, L. T., Lindo, S. E., & Dudman, J. T. (2023). Mesolimbic dopamine adapts the rate of learning from action. _Nature_, _614_(7947), 294–302. [https://doi.org/10.1038/s41586-022-05614-z](https://doi.org/10.1038/s41586-022-05614-z)

Geerts, J. P., Chersi, F., Stachenfeld, K. L., & Burgess, N. (2020). A general model of hippocampal and dorsal striatal learning and decision making. _Proceedings of the National Academy of Sciences_, _117_(49), 31427–31437. [https://doi.org/10.1073/pnas.2007981117](https://doi.org/10.1073/pnas.2007981117)

George, T. M., Rastogi, M., De Cothi, W., Clopath, C., Stachenfeld, K., & Barry, C. (2024). RatInABox, a toolkit for modelling locomotion and neuronal activity in continuous environments. _eLife_, _13_, e85274. [https://doi.org/10.7554/eLife.85274](https://doi.org/10.7554/eLife.85274)

Markowitz, J. E., Gillis, W. F., Jay, M., Wood, J., Harris, R. W., Cieszkowski, R., Scott, R., Brann, D., Koveal, D., Kula, T., Weinreb, C., Osman, M. A. M., Pinto, S. R., Uchida, N., Linderman, S. W., Sabatini, B. L., & Datta, S. R. (2023). Spontaneous behaviour is structured by reinforcement without explicit reward. _Nature_, _614_(7946), 108–117. [https://doi.org/10.1038/s41586-022-05611-2](https://doi.org/10.1038/s41586-022-05611-2)

Schultz, W. (2016). Dopamine reward prediction-error signalling: a two-component response. _Nature Reviews Neuroscience_, _17_(3), Article 3. [https://doi.org/10.1038/nrn.2015.26](https://doi.org/10.1038/nrn.2015.26)

Stachenfeld, K. L., Botvinick, M. M., & Gershman, S. J. (2017). The hippocampus as a predictive map. _Nature Neuroscience_, _20_(11), 1643–1653. [https://doi.org/10.1038/nn.4650](https://doi.org/10.1038/nn.4650)