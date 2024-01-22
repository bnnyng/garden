---
aliases: 
tags:
  - bud
publish: 
date: 2024-01-16 08:17
lastmod: 2024-01-17T14:30:06-08:00
---
[[20240112-copycat-components]]

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