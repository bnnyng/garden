---
tags:
  - fleeting-note
lastmod: 2024-01-31T17:39:42-08:00
---

# Steven – General tips and tricks
## Choosing a problem

- What are you trying to do?
	- Trying to win → easiest given skills
	- Trying to learn → which will leverage techniques you don’t know
	- Have fun → what’s cool, won’t be too painful to solve
	- ❗ **TO DO: Discuss goal before competition**

## Breaking problem into components

- Have a division of labor – make sure time efficient
- Two ways to do so:
	1. One large model with components that can be worked on separately, then “assembled” at the end
	2. Use separate models which may address the weakness of each other

## Non-technical considerations

- **Model does not have to be super complicated**
	- Judges prefer simpler models that are well-reasoned
- **Writing and exposition are key**
	- Judges spend ~10 mins per paper in the initial round
	- Summary sheet should have three parts:
		- Short introduction to problem
			- Convey a good sense of problem and requirements from the problem statement
			- Give insights into specific results
		- Summary of team’s primary results
		- Overview of methods and techniques
		- ❗ Look at example from slides

---
# Leon – Approach to Wordle model

## Problem statement

- Problems A & B usually have an external research component
- In Problem C, data is provided!

## The first attack

- Decide on problem first!
- Spent 3 hours writing on the blackboard
- Approach from all angles
	- What are the considerations in playing Wordle?
	- What makes a word difficult? – use common sense!

## Modeling word difficulty

- Problems
	- Can’t do anything super complicated, too many predictors – limited computational resources and time
	- How do we efficiently represent observed difficulty? 
- Developing method
	- Validate ideas with existing data
- Isolating for best predictors
	- Developed predictors + method to represent observed difficulty with two parameters ($\beta$ distribution)
	- Used Lasso regression to select best predictors – nonlinear optimization

---
# Anthony – Working in a time crunch

- Start writing on the second full day (i.e., Saturday)
- When time is running low:
	- Go back to simpler, working version of model
	- Delegate tasks
	- Have drawbacks/limitations, just address in paper
- Reminders
	- Read contest instructions thoroughly
	- Reread the problem statement