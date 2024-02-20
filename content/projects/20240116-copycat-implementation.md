---
aliases: 
tags:
  - bud
publish: 
date: 2024-01-16 08:17
lastmod: 2024-02-07T12:44:38-08:00
hours-worked: "27.5"
---

[[20240112-copycat-components]]
[[20240127-copycat-definitions-scratchpad]]

# Definitions

## Slipnet

- **Node** = a representation of a single “Platonic” concept type
	- **Activation** = a measure of percieved relevance to the current situation; activation can be **spread** to neighbors and **decay** over time
	- **Conceptual depth** = a measurement of the abstraction of a concept, or how far that concept is from being “directly perceivable”
		- Example: “opposite” is deeper than “successor”, which is deeper than “a”
- **Link** = a numerical length that represents the “conceptual distance” between two nodes with a conceptual relationship; shorter distances lead to easier slippages
	- **Link label** = a node shared by all links of a single type; the activation level of the label determines link length

## Workspace

- **Salience** = a function of an object’s importance and unhappiness that determines how attractive the object appears to codelets; depends on both Workspace and Slipnet state
- **Bond** = a Workspace object that represents similarities or relationships between pairs of neighboring objects inside a single framework (i.e., string)
	- **Bond strength** = a dynamically varying value based on the activation and conceptual depth of its Slipnet representation, as well as the amount of similar bonds in its immediate neighborhood
- **Group** = a higher-level object, composed of a set of basic objects that share a **bond** of the same type
- **Correspondence** = also known as **bridge**; a relationship between two end-objects that are counterparts (i.e., have the same higher-level role in different frameworks)
	- **Bridge strength** = a measurement that reflects the ease of slippages and number of identity mappings used, as well as is similarity to other existing bridges
- **Viewpoint** = a coherent “vision” or structure in the Workspace
	- **Structure strength** = a measurement of the likelihood of a single structure beating its rivals, based on both context-dependent and -independent factors

## Coderack

- **Codelet** = a simple agent that carries out the actions in the Workspace
	- **Scout codelet** = an agent that looks at a potential action and tries to estimate its promise, then decides to create one or more codelets to follow up its findings
	- **Effector codelet** = an agent that creates or destroys a structure in the Workspace
- **Coderack** = a pool of codelets waiting to be run
	- **Urgency value** = for each codelet in the Coderack, a number that determines the probability of that codelet being selected to run

---
# Resources

## General information
- [[2009-mitchell-complexity-a-guided-tour]]

## Code sources

- [Original program in LISP](https://github.com/fargonauts/copycat-lisp)
- [(Github) copycat-js](https://github.com/Paul-G2/copycat-js?tab=readme-ov-file)
- [(Github) fargonauts / copycat](https://github.com/fargonauts/copycat?tab=readme-ov-file) – Python implementation

---

# Notes

## [Metacat](https://science.slc.edu/jmarshall/metacat/)

- Extension of Copycat model that includes *self-watching*, or [[Metacognition]]
	- Introspection gives insight on how it arrives at answers
	- Richer representations of analogies


---
# Log

2024-01-30
- Going to try this with FastAPI instead, realizing that Github only hosts static pages:
	- [ ] Define project requirements and design
		- [ ] Define simulation
		- [ ] Design UI
		- [ ] Plan backend APIs – what endpoints will backend expose to serve data to the frontend?
	- [ ] Set up development environment
		- [ ] Install tools and libraries
			- [x] [FastAPI installation](https://fastapi.tiangolo.com/#installation)
			- [ ] [Heroku CLI installation](https://devcenter.heroku.com/articles/getting-started-with-python#set-up)
		- [ ] Set up GitHub repository
	- [ ] Backend development
		- [ ] Define API endpoints to handle requests from frontend – trigger simulation logic and return results
		- [ ] Implement simulation logic based on frontend parameters
	- [ ] Frontend development
		- [ ] Set up directory for HTML, CSS, and JavaScript files
		- [ ] Design UI components with dynamic graphics
		- [ ] Fetch data from backend using JavaScript code and update UI with received data
	- [ ] Integration and testing
	- [ ] Deployment
		- [ ] Deploy FlaskAPI application to a cloud platform
		- [ ] Set up CORS to allow cross-origin requests from GitHub Pages domain
		- [ ] Deploy frontend by pushing static frontend files to a github repository and enabling GitHub Pages for the repository
- FastAPI
	- `uvicorn main:app --reload` = create server?

2024-01-29
- Start with project, app, database model, and url scheme (only usign index)
	- Next, need **serializer** to return data in JSON format (convert from complex data to native Python data types)
- Figured out how to connect front to backend with REST API, next: need to finish simulation code, implement Websockets!

2024-01-28
- Need to define a model/database for Copycat app? What to include?

2024-01-26
- `__repr__()` returns information that can recreate the object, `__str__()` returns user-readable representation of object state
- Seems like progress should go from WorkspaceObject → Workspace Structures → Letter, Group → ConceptMapping, Description, Replacement, Rule
- **Workspace structure** = includes descriptions, bonds, groups, replacements, and correspondences
	- Seems like JS does not include this as a base class…
- Need to connect to an HTML interface, then make GUI
- Started working on WorkspaceStructure instead, will make WO extend WS like in Python implementation
	- Still confused about the role of Group

2024-01-25
- Made a Django project for the backend – kind of overwhelmed!
- Resources:
	- [Building an application with Django backend and React frontend](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react#step-2-setting-up-the-apis)


2024-01-17
- Code for `SlipNode`
	- Different `spread_activation` implementations:
		- Python: make a similar method in `SlipLink` that adds the link’s intrinsic degree of association to the destination’s buffer value; the method in `SlipNode` loops through the list of all outgoing links
		- JS: like above, but does the same thing all in `SlipNode`
		- Currently trying the JS way
	- Note that the Python `update` is like a combination of JS `set activation` and `decay_activation`
- Name-mangling! When `__method_name` has double underscore prefix, python will force you to access using `obj._MyClass__method_name()` for any `obj = MyClass()`
- Do `SlipNode` and `SlipLink` need mutual imports? Or works fine if both in `SlipNet`
- Note that `SlipNode.update()` method is same for lisp and JS, slightly different for Python?
- Next time: finish `SlipNet` – coding links

2024-01-16
- Looked into Metacat—would be cool to implement this after Copycat!
- General idea:
	- Write scripts in Python
	- Pull it all together in a Colab web app, similar to [Hodgkin/Huxley tutorial](https://github.com/openworm/hodgkin_huxley_tutorial)
- Components: 
	- Fargonauts uses one codelet class with different “types”, copycat-js uses different class files for each codelet; use [Python inheritance](https://www.w3schools.com/python/python_inheritance.asp)?
- Keep in mind [Python style guide](https://peps.python.org/pep-0008/):
	- Class names use CapWords
	- Modules/packages have short, all-lowercase names
	- Functions/variables should be lowercase with underscore
	- https://peps.python.org/pep-0008/#naming-conventions
- [Looking at PyTorch source code for how to name and organize](https://github.com/pytorch/pytorch/tree/main/torch)
- Seems like ideal to start with Slipnet, workspace later?
	- Next time: Finish methods for slipnode.py