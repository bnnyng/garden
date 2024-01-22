---
tags:
  - fleeting-note
lastmod: 2024-01-17T12:39:17-08:00
---


# Slipnet

## SlipNode

- SlipNode CLASS – “a platonic concept in Copycat”
	- Parameters
		- SlipNet (SlipNet)
		- Name (string)
		- Short name (string) #question used where?
		- Conceptual depth
		- Intrinsic link length
	- Other attributes
		- Shrunk link length = intrinsic link length * 0.4
		- Clamped (boolean)
		- List of category links
		- List of instance links
		- List of property links
		- List of lateral slip links
		- List of lateral nonslip links
		- List of incoming links
		- List of outgoing links
		- List of codelets – Note that only the last three are included in JS implementation, #question  why? Where is the information stored?
	- JS implementation also separates the following mutable variables:
		- activation
		- ActivationBuffer
		- clampedHigh
	- Methods – original
		- Representation
		- Reset
		- ClampHigh
		- Unclamped
		- Category
		- Fully active
		- bondDegreeOfAssociation
		- degreeOfAssociation
		- Linked
		- SlipLinked
		- related
		- ApplySlippages
		- getRelatedNode
		- getBondCategory
		- update activation
		- spread activation
		- jump
		- get name
	- Methods – JS added
		- category links (filtered from outgoing links)
		- instance links (filtered from outgoing links)
		- property links (filtered from outgoing links)
		- … etc for all other link types
		- Get/set activation
		- Decay activation
		- Sync activation – updates activation with buffered value, then probabilistically decides whether to jump to full activation?
			- #question Compare to “jump”
## SlipLink
- SlipLink CLASS – “a relation between two concepts”
	- Methods
		- Degree of association
		- Intrinsic degree of association
		- Spread activation
		- Points at 
	- Methods – JS added
		- Synopsis/summary
		- Does not have spread activation or points at!, might follow this model

## SlipNet
- SlipNet CLASS
	- Initialization
		- Add initial nodes
		- Add initial links
		- Reset
	- Attributes – Python (lol where are they?)
		- Lists for slipnodes, letters, numbers
	- Attributes – JS only
		- Lists for nodes, links, letters numbers
	- Attributes – Lisp only
		- All of the above, plus directions, alphabetic positions, string positions, bonds, groups, other relations
	- Methods – Python
		- reset
		- update
		- isDistinguishingDescriptor
		- add initial nodes
			- String positions
			- Alphabetic positions
			- Directions
			- Bond types
			- Group types
			- Other relations
			- Objects
			- Categories
			- Very relevant a Priori
		- add initial links
			- Letter categories
			- Lengths
			- 
		- add link
		- add slip link
		- add non slip link
		- add bidirectional link
		- add instance link
		- add property link
		- add opposite link
		- add node
	- Methods – JS
		- one general add link
		- add symmetric links
		- add instance category links
# Workspace

# Codelets