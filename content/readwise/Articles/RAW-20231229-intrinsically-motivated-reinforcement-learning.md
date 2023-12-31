---
ref-title: Intrinsically Motivated Reinforcement Learning
ref-author: Satinder Singh, Andrew G. Barto, Nuttapong Chentanez
ref-publish-date: 2004
ref-type: Paper
ref-read-date: 2023-12-29
ref-link: 
aliases:
  - https://www.cs.cornell.edu/~helou/IMRL.pdf
tags:
  - raw
lastmod: 2023-12-29T18:05:14-08:00
---


# Highlights
- extrinsic motivation, which means being moved to do something because of some specific rewarding outcome, and intrinsic motivation, which refers to being moved to do something because it is inherently enjoyable ([View Highlight](https://read.readwise.io/read/01hjw68gqj51wbnmpywvspratt))
- These activities favor the development of broad competence rather than being directed to more externally-directed goals (e.g., ref. [14]). In contrast, machine learning algorithms are typically applied to single problems and so do not cope flexibly with new problems as they arise over extended periods of time ([View Highlight](https://read.readwise.io/read/01hjw68yx5ete7mt3bhw1q9dsr))
- The skills making up general competence act as the “building blocks” out of which an agent can form solutions to new problems as they arise. ([View Highlight](https://read.readwise.io/read/01hjw69k0ck8b2he46sr93nk5s))
- This may underlie the fact that novelty itself has rewarding characteristics ([View Highlight](https://read.readwise.io/read/01hjw6b2egvzdepgc5f7g81jwj))
- learning how to increase the total amount of reward it receives over time from the critic. ([View Highlight](https://read.readwise.io/read/01hjw6cbppzrepx3cmy6fs2qna))
- An an animal’s reward signals are determined by processes within its brain that monitor not only external state but also the animal’s internal state. The critic is in an animal’s head. ([View Highlight](https://read.readwise.io/read/01hjw6cs6fjy42enx7dn9d88jy))
- Handcrafting a different specialpurpose motivational system (as in the usual RL practice) should be largely unnecessary. ([View Highlight](https://read.readwise.io/read/01hjw6dvnhf8tveexkp1jft8vh))
- Briefly, an option is something like a subroutine. It consists of1) an option policy that directs the agent’s behavior for a subset of the environment states, 2) an initiation set consisting of all the states in which the option can be initiated, and 3) a termination condition, which specifies the conditions under which the option terminates ([View Highlight](https://read.readwise.io/read/01hjw6ffhvd33v8pbws7bqjchb))
- An option model is a probabilistic description ofthe effects ofexecuting an option. ([View Highlight](https://read.readwise.io/read/01hjw6gwxtbxz9vh7rb4t6q1c8))
    - Note: Reward!
- We claim that the concepts ofan option and an option model are exactly appropriate to model this type ofbehavior ([View Highlight](https://read.readwise.io/read/01hjw6jtwe5pk8ab6mknk2dexj))
- our agent maintains a knowledge base of skills that it learns using intrinsic rewards ([View Highlight](https://read.readwise.io/read/01hjw6kra2x3ny4rc73rbxk89a))
- In our current implementation we assume that the agent has intrinsic or hardwired notions of interesting or “salient” events in its environment ([View Highlight](https://read.readwise.io/read/01hjw6n4bwxr229ma8pw2z33ad))
- The intrinsic reward for each salient event is proportional to the error in the prediction of the salient event according to the learned option model for that event (see Fig. 2 for detail ([View Highlight](https://read.readwise.io/read/01hjw6q4rqy7aqgzaxj88yvx07))
    - Note: Confused, why proportional?
- Each first encounter with a salient event initiates the learning of an option and an option model for that salient event ([View Highlight](https://read.readwise.io/read/01hjw6t8f3tm7nmbdrskcvnraf))
- As the agent moves around the environment, all the options (initiated so far) and their models are simultaneously updated using intra-option learning. ([View Highlight](https://read.readwise.io/read/01hjw6td2f9gj4k2ak6y5sp0gm))
- the intrinsic reward is used to update QB. As a result, when the agent encounters an unpredicted salient event a few times, its updated action value function drives it to repeatedly attempt to achieve that salient even ([View Highlight](https://read.readwise.io/read/01hjw6twaf8ya7h86nc3xvwazj))
- learning improves both its policy for doing so and its option-model that predicts the salient event, ([View Highlight](https://read.readwise.io/read/01hjw6vejr2d79a5nf8pbweaty))
- as its option policy and option model improve, the intrinsic reward diminishes and the agent gets “bored” with the associated salient event and moves on. ([View Highlight](https://read.readwise.io/read/01hjw6vqe4v2a1xt4wg7ccrsg0))
- Occasionally, the agent encounters the salient event in a state (set of sensor readings) that it has not encountered before, and it generates intrinsic reward again (it is “surprised”) ([View Highlight](https://read.readwise.io/read/01hjw6w1k2d9rr2g3xe1brvc8b))
    - Note: Anthropomorphizing analogy…does help me understand better tbh.
- First note that the salient events that are simpler to achieve occur earlier in time ([View Highlight](https://read.readwise.io/read/01hjw6ygkjgtrmsgyqdxen1fga))
- automatically, the skill of achieving the simpler events are learned before those for the more complex events. ([View Highlight](https://read.readwise.io/read/01hjw6ysety68dnst0qkxphk6j))
- Finally note that the more complex skills are learned relatively quickly once the required sub-skills are in place, as one can see by the few rewards the agent receives for them. ([View Highlight](https://read.readwise.io/read/01hjw6zdy1hcrx5df3tvcb8pqt))
- An agent having a collection of skills learned through intrinsic reward can learn a wide variety of extrinsically rewarded tasks more easily than an agent lacking these skills ([View Highlight](https://read.readwise.io/read/01hjw701aa97a1ty01awr2yqvs))
- this is only one of the simplest ([View Highlight](https://read.readwise.io/read/01hjw7183wrndchy7ee3y8gwh9))
