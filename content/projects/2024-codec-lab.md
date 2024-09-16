---
aliases:
  - CoDec Lab
tags:
  - workspace
publish: 
date: 2024-08-29 17:56
lastmod: 2024-09-13T10:09:00-04:00
---
- **Function learning** = “how people narrow down the theoretically infinite space of function hypotheses to more interpretable representations”
- [Repository: function-learning-teaching](https://github.com/maya-malaviya/function-learning-teaching)

---
# Log

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