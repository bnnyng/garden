---
tags:
  - fleeting-note
lastmod: 2024-01-30T10:49:08-08:00
---

# Codelets

## Codelet

 - Codelet:
	- Basically a million types…lmao
	- JS
		- Codelet base
			- 
		- Codelet factory
		- Utility functions
			- urgency
			- choose unmodified object (random object from a given list)
			- choose neighbor - random neighbor for a given object
			- get scout source - random object that matches target criterion
			- choose bond facet - also random
			- structure vs. structure - returns one structure of two
			- fight it out - pits incompatible structures against each other
		- Lots of codelet classes to extend the codelet base
	- Lisp
		- Codelet base class (in coderack)
			- Variables: Type, arguments, urgency, position in bin, timestamp, structure category
			- Print to output file, run
			- Run
			- Return probability of removing codelet (function of urgency and age)
	- Python
		- Codelet base class
			- Name, urgency, arguments, birthdate
			- String representation
		- Codelet methods
			- codelet decorator for functions that are codelet behaviors
			- Shared functions
				- show which string object is from
	- Think I need to define copycat instance first

## Coderack
- Lisp
	- Methods
		- Make codelet
	- Class: CodeRack
		- Variables: list of bins corresponding to urgency level, urgency array for graphics
		- Total number of codelets
		- Print info about current state of coderack
	- Class: CodeRack bin
		

# Workspace

## WorkspaceObject

- JS
	- Base class, letter and group extend
		- Parameters: WorkspaceString - string that letter or group is in
		- Methods
			- Add descriptions to object and workspace
			- Calculate intrastring happiness
			- Calculate raw importance
			- Update importance, happiness, and salience
			- Span of letters
			- Indicate whether letter and group spans string
			- Whether object is contained
			- Whether object is strictly outside
			- isBeside
			- relevantDescriptions – get fully active descriptions
			- relevantDistinguishingDescriptors – get fully active distinguishing descriptors
			- hasDescriptor
			- getDescriptor
			- getDescriptionType
			- isMiddleObject
			- getCommonGroups
			- letterDistance
	- Concept mapping
		- Takes WorkspaceObject in constructor
		- Initial descriptor, target descriptor
	- Description: class for description of a letter or group
	- Replacement
	- Rule

- Python
	- WorkspaceObject takes instance of copycat from WorkspaceString
	- Letter:
		- Takes instance of workspace from instance of copycat
		- Parameters: WorkspaceString, number position
		- Methods: init, add description, representation, distinguishing descriptor
- Lisp
	- WorkspaceObjects: definitions and functions for letters and groups
	- 
## WorkspaceString

- Lisp
	- Initial string, modified string, target string?
- JS
	- In declaration, create a letter object for each letter in the string

## WorkspaceStructure
- Extends object, takes instance of Copycat as argument
- JS does not have!
- Bonds
	- Python methods
		- Internal strength, external strength, break, build
		- Methods only called once outside class
			- Get incompatible bonds – codelet methods
			- Same category – codelet methods
			- Get incompatible correspondences – codelet methods
			- Same neighbors – codelet methods bond builder
		- Methods only called inside class once
			- Number of local supporting bonds – used to update external strength
			- Ends
		- Methods only created?
			- Set source
	- JS methods
		- Update strength
		- Local density
		- Flipped version
		- Build
		- Break

## Concept mapping

# Slipnet

## To do

- [ ] Slipnode
	- [ ] More thorough string representation
	- [ ] Directed
	- [x] Get link label
	- [ ] Get related node
	- [ ] Apply slippages
- [ ] Sliplink
	- [ ] Define intrinsic degree of association
- [ ] Slipnet
	- [ ] Is distinguishing descriptor

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

