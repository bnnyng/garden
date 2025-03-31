---
aliases:
  - "Reflection Essay: Representational Geometry"
tags:
  - fleeting-note
  - NSBV-BC3386
date: 2024-10-22 22:44
lastmod: 2024-10-23T16:25:03-04:00
---
# Reading notes

- Manifold hypothesis = formalization of the idea of “regularities in the environement”, which certainly exist due to the laws of physics, at the very least

[[@2016fusi]]

- Want the representations to form a basis for the dimensions of the task variables?
- Dimensionality, maximum dimensionality relative to the features in the environment
	- But then you reduce it to lower dimensional space?
- “An update to the neuron doctrine that ensembles, not individual neurons, are the functional unit of the nervous system.”

[[@2024courellis]]

- **Abstraction** = “a process through which relevant shared structure in the environment is compressed and summarized, while superfluous details are discarded or represented so that they do not interfere with the relevant ones.”
	- **Abstract representation** = “a representation of a particular variable is abstract if a linear decoder trained to report the value of that variable can generalize to new conditions.”
- Interesting – abstraction in cognitive science is often taken to be something that should apply to non-physical, “abstract” concepts, but it stands that the best performance on abstraction will be for features in our environment
- Human participants, task was reversal learning of 

[[@2019hirokawa]]
- Rats, task was “olfactory discrimination”

---
# Reflection essay

I am very confused by the representational geometry approach to neural encodings, and I am excited to discuss this in person. To begin, I appreciate that the theory behind representational geometry is a genuinely novel theory, as [[@2016fusi]] describe: “This fits with a recent update to the neuron doctrine notion that ensembles, not individual neurons, are the functional unit of the nervous system.” The [[The neuron doctrine and beyond|neuron doctrine]], a perspective that has been primary in research since the time of Hubel of Wiesel, includes the assumption that the brain consists of distinct functional units (neurons), and that information encoding in the brain can be understood in terms of in discrete, all-or-nothing action potentials. To be clear, I don’t think either claim about the brain’s “functional units” is empirical, at least not with the scientific measurements available today; the notion that functional units exist at all is a theoretical framework for interpreting brain activity. 

In [[@2016fusi]], the framework is applied to interpreting “mixed selectivity” neurons, which are necessary for higher cognition: “A brain with neural representations based on highly specialized neurons would be hamstrung, only capable of learning a small number of simple tasks. Mixed selectivity endows the computational horsepower needed for complex thought and action.” Representational geometry is based on a method of measuring the usefulness of mixed selectivity neurons using linear separability: “If an artificial network based on simplifying biological principles can read out the relevant information, we assume the brain can too.” From my understanding, it is desirable for neural representations to have dimensionality as close as possible to the dimensionality of their embedding space, where each dimension is the firing rate in response to a stimulus feature. 

Linear separability of representations is necessary for having useful “abstractions,” which [[@2020bernardi]] and [[@2024courellis]] define as a compactification of environmental features that are shared in different situations; to say that neurons represent abstract information means that somewhere during information processing, the brain is able to distinguish between relevant and irrelevant details and throw out the latter. When the geometry of an abstract variable both leads to high performance by a linear decoder on unseen situations and has a high number of different ways it can be linearly separated, the abstraction is understood to be more generalizable and flexible in new environments [[@2020bernardi]]. 

I do not entirely understand what conclusions we should draw from these measures of a representational geometry. In particular, the neural representation space seems closely related to the “manifold hypothesis” in machine learning and information geometry, which claims that most high-dimensional natural data has low-dimensional latent space (see https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/). As discussed in [[@2016warrant]], biological organisms evolve sensory structures that “match” their environment—I am clearly kind of obsessed with this concept. Assuming the manifold hypothesis, these sensory matched filters work well precisely because they exploit the low-dimensional representation. That is, it is plausible to me that some abstraction occurs very early in information processing, and the physical sensory limitations can even be considered “pre-processing” like one would do in ML (indeed, the manifold hypothesis is empirically motivated by the fact that very simple algorithms can perform well on complicated datasets given some clever compression techniques). 

I think this perspective could partially reconcile the seemingly opposite results of [[@2019hirokawa]] and [[@2024courellis]]. In [[@2019hirokawa]], experimenters found single-neuron encodings of more “cognitive” decision variables when rats were given a task that required them to generalize between different olfactory stimuli. This seems like a more natural experimental design than in [[@2024courellis]], which (I think?) asked human participants to generalize between left/right classifications for different images that were basically arbitrary, meaning they did not reflect intrinsic properties of things in the images. My tentative theory is that tasks closer to what an organism experiences in its natural environment will have more efficient mechanisms for abstract representation, while “unnatural” tasks will recruit neuron ensembles—we know from examples of cognition being unaffected after brain damage that the brain is flexible enough to use whatever structures are available. A fun implication is that higher-dimensional representational geometry doesn’t tell us about the usefulness of an abstraction, but how difficult the task is relative to what the brain is used to doing. (In writing that sentence, I meant “used to” in terms of evolution, but I also wonder if lower-dimensional encodings can be developed within a lifetime, and whether that is desirable. For example, if I am reviewing flashcards, I might initially have to reason conceptually to arrive at an answer, but eventually it becomes a case of visual pattern matching to the fixed answer in my head.)

---
# Lecture notes

