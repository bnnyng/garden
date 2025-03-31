---
lit-author: 
aliases:
  - A Theory of Learning to Infer
tags:
  - literature-note
title: Paper | A Theory of Learning to Infer
publish: "true"
date: 2024-02-28 10:34
lastmod: 2024-03-04T16:23:19-08:00
---
# Summary

The authors propose that instead of performing domain-general Bayesian approximations, the human brain *learns to infer* by making approximations using a pattern-recognition model that maps queries to posterior distributions. This framework can explain when people systematically underreact to either the prior probability or the likelihood. They then implement this general framework using a small neural net as the mapping model and show experimental results that match empirical behavioral studies. 

---
# Takeaways

- People deviate from Bayesian optimal reasoning by systematically underreacting to the prior and/or likelihood.
- The *learning to infer* theory is an approximate inference algorithm that accounts for context-specific errors by incorporating a “memory” architecture.

---
# Key terms

- **Query** = when data is given to a inference system, which returns the probability of a hypothesis or subset of hypotheses
- **Base rate neglect** = [[Base rate neglect occurs when people underreact to prior probabilities]]
- **Conservatism** = [[Conservatism occurs when people underreact to the likelihood of the data]]
- **Rational process models** = [[Rational process models claim that judgement errors come from approximations of rational reasoning]]
- **Approximate inference algorithm** = an algorithm that avoids computing the **marginal likelihood**, or denominator in [[Conditional probability and Bayes' theorem|Bayes' rule]]
	- **Monte Carlo algorithm** = an approximation of the posterior using a finite number of weighted samples
	- **Markov chain Monte Carlo** = an approximate inference algorithm that generates samples with *uniform weights* from a Markov chain where the distribution that remains unchanged between states (i.e., the **stationary distribution**) is precisely the posterior
- **Amortized inference algorithm** = an algorithm that reuses computations across multiple queries

---
# Notes

## Introduction

- Usage of **heuristics** and principled **approximation** of rational judgements are two theories that explain [[Probabilistic reasoning|Bayesian suboptimality]], when people exhibit errors in probabilistic judgement.
	- Heuristic models assume that people are able to get feedback on a strategy’s usefulness and perform a cost-benefit analysis.
	- Rational process models do not explain systematically domain-specific inferential errors.
- The authors propose a rational process model that performs *approximate recognition* by mapping different queries to [[Conditional probability and Bayes' theorem|posterior probabilities]].
	- This explains the “context-sensitivity of inferential errors” and does not depend on explicit feedback about the *true* posterior.
	- Because the output is optimized to be as close as possible to the true posterior, the model can represent “learned biases” that systematically ignore certain sources of information.

## Learning to infer

>[!quote]
>*Learning to infer* refers to a particular approximate inference scheme, using a pattern recognition system (such as a neural network, but it could also be an exemplar generalization model) to find and exploit patterns in the conditional distribution of hypotheses given data (the posterior).

- The fundamental claim of the theory is that the brain experiences a trade-off between *accurate* probabilistic reasoning and computational costs.
	- That is, Bayesian optimality is not the standard for how well a system is performing probabilistic reasoning.
### Approximate inference

- Large hypothesis spaces make explicit computation of Bayes’ rule implausible because the denominator, or **marginal likelihood**, uses a sum over all hypotheses.
- Approximate inference is an *optimization problem* where the goal is to find the parameters that get closest to the true posterior, as measured by a divergence functional (e.g., KL divergence or relative entropy).
	- For example, relevant parameters in a **Monte Carlo** algorithm are the set of weights and samples.
- Most approximate inference algorithms are memoryless; computations for each query do not influence subsequent outputs.

### Amortized inference

>[!quote]
>The amortized inference engine *learns to infer*: it generalizes from past experience to efficiently compute the approximate posterior conditional on new data.

- Nonamortized approximation is simply an amortization architecture without constraints.

>[!quote]
>Amortization only becomes relevant when there are computational constraints that force sharing of variational parameters—that is, limitations on the function approximator’s capacity. *A key part of our argument is that the brain’s inference engine operates under such constraints.*

## The Learned Inference Model

- To obtain an approximate posterior, the authors used a three-layer neural network; the neural net is just one implementation of a “learnable function approximator” that is able to use memory of previous samples to estimate future posteriors.
	- Inputs are all the data related to the query.
	- Outputs are a unique approximate distribution over all hypotheses.
	- The computational bottleneck is implemented by decreasing the number of units in each subsequent layer.
- *Neural networks* and *probabilistic generative models* have complementary strengths.
	- Neural networks are used for pattern recognition and function recognition, and do not represent causal knowledge about the world.
	- Probabilistic generative models can represent causal knowledge and represent problems where hidden causes are inferred from data, but they are not good for inference.
	- The neural network here finds patterns in agent’s *internal representations*—that is, how observed data corresponds with different inferences.

## Future directions

- An alternative theory for how the brain performs approximate inference is by *sampling hypotheses*; one extension is how to integrate the *variational approximation* over past inferences with hypothesis sampling in response to a given query.
	- From “Bayesian Brains Without Probabilities,” review by Sanborn & Chater (2016): “Only with infinite samples does a Bayesian sampler conform to the laws of probability; with finite samples it systematically generates classic probabilistic reasoning errors, including the unpacking effect, base-rate neglect, and the conjunction fallacy.”
- Hypothesis sampling may be combined with variational inference by sampling from the variational distribution during MCMC, either to initialize the chain or as a *proposal distribution.*
	- These techniques have been explored in machine learning literature.