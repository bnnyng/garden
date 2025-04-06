---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-03-21T10:41:39-04:00
---

# One-on-one meeting notes

[[2025-03-11]] – Lab meeting

- [Marcell Vazquez-Chanlatte](https://mjvc.me)(Nissan Alliance Innovation Lab), “[Compositional Automata Embeddings for Goal-Conditioned Reinforcement Learning](https://rad-embeddings.github.io)”
	- Formerly at Berkeley with Mark, now collaborating with UCSD and CMU as well
	- Ph.D: learning formal specifications from expert demonstrations
- Human-robot interaction and formal verification (relation to [[Formalization of mathematics]]?)

[[2025-02-28]]

- Side question: How good are people at for each function?
	- Naive measure: MSE → normalize to compare across functions
- To do
	- [x] Try to get Bezier curve (splines) on placed points plot, then show MSE difference between the interpolated function and true function?
	- [x] Switch colors so darker = better MSE
	- Check if everyone put a point in a neighborhood of given points?
	- Additional details for participants/between participants?
		- [x] For each participant, plot bar with x = strategy and y = average norm MSE, plus points to denote individual trials
	- Statistical significance for differences between strategies
		- [x] Linear mixed-effects models, see R script from Maya

[[2025-02-14]]

- Dataset/EDA
	- Learner task with different teaching strategies, attempting to replicate function
	- Analyses to try: distribution over points placed?

[[2025-02-07]]

- Paper questions: What is the upshot/ultimate goal of this kind of modeling—explain human behavior?
- Pilot behavioral data
	- Different conditions (see slides from talk): sine only, quadratic only, both
	- Point of interest: How do people who have to distinguish between two types behave (teach) differently?
	- Summarize and sort people based on pre-test accuracy
	- Big picture: Hope that teacher teaches in accordance with what they think the student has seen before
		- In this experiment, people started as learners and then became teachers
		- Different ways to describe distributions of points across functions?

![[Pasted image 20250207131505.png|300]]
- Paper notes
	- **RSA:** Speaker simulates a learner in their head, and teaches to the learner. When people simulate learners or listeners
		- People simulate a **pragmatic** listener (recall a person with hat + glasses and just glasses, a pragmatic listener will choose just glasses in response to “my friend is the one with glasses”)
	- **Signaling bandit:** Selecting the right object out of many target objects
		- “Bandit” part refers to the listener choosing?


[[2025-01-24]]

- Different ways to consider possible parameter values:
	- Purely Bayesian (learning whole distribution)
	- Maximum aposteriori estimate (one number)
	- Variational inference
- Stein’s variational gradient descent
	- Trying to sample learner’s utility
- Non-parametric models = can increase in complexity relative to the available data
	- E.g., SVGD with one data point is the same as MAP estimate (same with all GD?)
- Review: what is the utility? MSE between learner’s guess and true function?
- Grad school discussion
	- GRE optional?
	- Look for unifying (informal) meetings (outside of colloquiums?)

[[2025-01-17]]

- Goldwater
	- Ask for advice on situation with research essay—mentor disappeared for two months lol.
	- Need additional support? Talk about career goals?
- General career
	- Do I need to take the GRE?
- General questions about computational cogsci
	- Bayesian models of cognition implicitly rational?
	- Surely have asked this before: non-Bayesian models?
- Update on lab stuff?

[[2024-11-01]]

- Questions about RL homework notebooks
	- Different algorithms – what is the relevance to cogsci research? Considering how cognitive plausible these are – directly modeling a behavior? Or a general framework somehow to study behavior within…
	- Walking through each of the TD algorithms (I don’t know how to look at equations)
	- Describe difference between SARSA and Q learning
	- Model-free vs. model-based with examples
- RL & cognition
	- Computational psychiatry 
	- Human-robot interaction
- Point of RL is to predict values of state-action pairs
	- Can compute the whole trajectory and propagate reward back
- Gymnasium
	- Example MDPs for many different tasks—snowball fighting task, cart pull
- Optimal teacher
	- Teacher reasons about a learner agent
	- Learner has priors (kernels)
	- Knowledge can be defined as parameters for the kernels?
- Hard coding number of times learner/teacher is iterating – 
- Takeaways/lingering thoughts
	- Not sure if this computational stuff is what I want to be doing (but the job? If I only wanted to go into academia I think I would be fine…but what if I want to jump ship and make industry-type connections? IU still might be the best)

[[2024-10-25]]

- Questions about RL homework notebooks
	- What is the policy? How is that different from the transition function?
	- Go over upshot of each problem? Particularly B
	- B.4 – Difference between prediction and control?
	- Is RL always implemented as a [[Markov decision processes and dynamic programming|Markov decision process]]? Transition probabilities and reward functions always unavailable, or are there real-world situations where they are?
- Augmented MDPs
	- Object oriented
	- Partially observable
- Q-learning computational, DNNs are the algorithmic implementation
- What does simple vs. complex mean?
	- Complex = action value depends on other actions

![[Pasted image 20241025144326.png]]

[[2024-10-15]]

- Talking points for meeting with Maya
	- ARC-AGI challenge
		- Issues with current approach match issues with computationalism/associationism—how?
			- Charges against the scaling: not *intelligent*, getting at what makes something intelligence in a functional way…? Something about the information-processing mechanism is different, assumes computationalism
		- Seems like it will just lead to a solution that is good at doing the challenge
		- AlphaProof as an example—mathematics as a *human practice* has a natural domain specific language, which is the formal system of mathematics
			- AlphaProof details, program synthesis?
			- Back to my interest of interpolating between formal logic and informal “sketching”
			- What is the analogy for the visual domain? Sensory filtering.
	- Takeaways for the rational analysis, problems?
	- Takeaways from the hyperbole paper? What are the caveats?—when I am presented a model, I just accept that it is good and true. What are the alternatives?
- [[@2020liederResource]]
	- Alternatives
- Papers suggested: [[@2024legris]], [[@2023sucholutsky]]

[[2024-10-13]]
- Thoughts on [[@2020liederResource]]
	- Why are people good at things like math if resource-rationality predicts that we should have the highest trade-off against accuracy here? Maybe we’re the only ones to ever do it, so we can’t compare what is “inaccuracy” (also, math is made up)
	- How to define a constraint on cognition – non-metabolic?

[[2024-10-04]]
- Hyperbole can be represented in model by allowing people to select points anywhere on the plane, not just on the function line itself
- Next steps:
	- [ ] Paper reading: [[@2015griffiths]] [[@2024sumers]], [[@2020liederResource]]

---
# Log


[[2025-02-20]] – Data exploration

```
RangeIndex: 630 entries, 0 to 629
Data columns (total 10 columns):
 #   Column      Non-Null Count  Dtype  
---  ------      --------------  -----  
 0   subject_id  630 non-null    object 
 1   condition   630 non-null    object 
 2   index       630 non-null    int64  
 3   fn_fam      630 non-null    object 
 4   strategy    630 non-null    object 
 5   fnnum       630 non-null    int64  
 6   fn_pts      630 non-null    object 
 7   placed_pts  630 non-null    object 
 8   mse         630 non-null    float64
 9   zscoremse   630 non-null    float64
dtypes: float64(2), int64(2), object(6)
memory usage: 49.3+ KB
```

[[2024-11-09]] – Going through “parameter investigation” notebook
- Implementation questions
	- What is “length scale” parameter in the Gaussian process mixture?
- Concept questions
	- Visualizing priors – what determines the shape of the CIs? Why is the periodic one constant (counterintuitive)?
	- Why is log posterior just the sum of prior and likelihood?
	- Where was this done?
```
We see that a periodic kernel is probably the most suitable for learning the function sin0. But it doesn't have the right period- how can we recover the correct period? One option is to enumerate across many periods and pick one that produces the highest likelihood or posterior probability of generating those points. (How to calculate that is an important part of GP math but I already implemented it in `model_torch.py`.)
```

- Log-likelihood is the probability of observing data (y-axis, given some x-axis)
	- Each GP has a log-likelihood, value for mixture is computed as a sum of likelihoods from individual GPs


[[2024-10-20]]

- Started reinforcement learning HW1 from Maya, did not finish problem 6 (implementation)


2024-09-13
- Cloned repository, getting error when trying to run `firebase serve` 
- Started scikit-learn [Gaussian Process Regression tutorial](https://scikit-learn.org/stable/auto_examples/gaussian_process/plot_gpr_noisy_targets.html#sphx-glr-auto-examples-gaussian-process-plot-gpr-noisy-targets-py)
	- What is the kernel (radial basis function specifically)?

```
Error: Failed to get Firebase project function-learning-teaching. Please make sure the project exists and your account has permission to access it.
```

- To discuss in meeting
	- [ ] Resolve issue with Firebase project access
	- [ ] Access to final Gaussian process resource

2024-09-12

- [[20240912-jspsych-tutorial]]

2024-09-09

- Logistics: 5 hrs/week (1 hour meeting, 1 hour lab meeting?)
	- Weekly activities: troubleshooting code, generating ideas, reading papers
	- Meetings on Fridays
- Experimental pipeline
	- Recruitment via Prolific, data storage in firebase as a json file
		- Will be valid for only a specified period of time
	- Experiment runs on [jspych (JavaScript) package](https://www.jspsych.org/latest/) – pre-made plug-ins for types of questions, results pushed to firebase
		- Each plugin is a type of trial, can write customs; plugins are JavaScript variables
		- Put plugins into timeline
- Drawing functions by points – enables continuous function, interpolation method from previous study, avoids ill-defined functions
- Generating example points (red) – random, covering more of the domain, optimization model (start with math and not the code)
- Scaffolding – contains “timeline” to take in sets of trials and run them in sequential order, automatically assigns conditions to participants
- Model code
	- Important files: `model_torch.py` and notebook
- Next time
	- Go through official math
- Next steps
	- [ ] Try hosting experiment locally
	- [ ] Learn JavaScript basics, jspsych tutorial (v7)
	- [x] Learn more about Gaussian processes (GPR) – scipy tutorial, look at resources from Maya

2024-09-04 – High-level meeting with Maya

```
Also, if you have time for a really short virtual check in (~15 mins) sometime before 9/6, we could discuss at a high level what you want to get out of research and what our expectations are for working together! (No problem if you don't have time though, we can cover it at our first meeting.)
```

- Pre-meeting discussion points
	- **What I want to get out of research**
		- Once I get more familiar with the project, want to actually have a cohesive subproject even if it’s “assigned”; I work better with a goal in mind
		- Maybe get insight into new ideas or techniques to use for a senior thesis, but current plan is *really* vague because I’m not sure what I’m interested in
			- Also have this Polymath (computational social science, NLP) thing going on which I could also spin into the thesis
		- I’d also like to be able to interact with the lab environment as a whole, so it’s nice to be in the same city (as opposed to entirely remote), but still hard to fit into the schedule; want to learn more about different lab cultures
		- Overall, I’m really interested in doing a PhD and just want to know what it’s like plus what *I* like in that work environment
	- **Expectations for working together**
		- I’m not used to doing school-year research – intensive REUs only
			- Research with Dr. Lindsay was very focused on her existing work and more exploratory, rather than purposeful
			- OTOH, Simon and Marina project was my own idea and it’s (I’m assuming) a mutually beneficial arrangement – I receive really quality mentorship for free, and they (I’m assuming) believe that the project has enough legs to get that publication and mentorship record for their CV
		- Maybe weekly check-ins? I’m kind of a hands-off person once I get my own thing going
	- What about Maya?
		- Experience with undergrad collaborators in the past? What has worked well and hasn’t worked well?
		- Ideas about publication? Will be valuable experience for me regardless
	- Did we end up scheduling the meeting with Maya?
		- Free after 10:30 a.m. until 2:30 p.m., unless there’s a nice place on/around NYU campus for me to hang out and take a Zoom call at 3:00 p.m.
- Meeting notes
	- Discussed broader interests in math
	- History of CoDec lab: previously at Steven’s Institute of Technology with two PhD students (one Maya), recently moved to NYU
	- Lab culture: Mark is incredibly chill

```
What I [Maya] can offer
- Concrete tasks that would help with my research and build your skills
- Accountability
- Guidance during planning
- Guidance during roadblocks / troubleshooting
- Flexibility to address your independent goals as time goes on
```

- Next steps
	- Familiarize myself with project ideas

2024-08-27 – Initial meeting with Mark and Maya

```
As for next steps: 
- Here's an initial writeup of the project that might be helpful: [https://ojs.aaai.org/index.php/AAAI-SS/article/view/31277/33437](https://ojs.aaai.org/index.php/AAAI-SS/article/view/31277/33437) This paper also contains important references that guided the project, so consider skimming the abstracts of those (and you can then dive deeper into papers that pique your interest). - I attached a PDF of my conference poster that summarizes what we discussed today (won't be much new, but helpful for reference). 
- If you send me your github username/email I can add you to the project repo. You can explore the code and get familiar with the structure before we meet, though we’ll go over it together as well & I can help orient you since it's not super tidy at the moment. 
- I'd also be curious if you have ideas for different, more naturalistic tasks you're curious to explore (regardless of if it fits well with the model / what we've talked about so far).
```