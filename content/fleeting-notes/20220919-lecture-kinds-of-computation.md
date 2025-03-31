---
tags:
  - fleeting-note
  - COGS-UN1001
---
# Lecture: Kinds of computation
---
## History of computation
- (100 B.C.) The Antikythera mechanism was an ancient computer used to predict the motion of the heavens.
- (1840) Charles Babbage's analytical machine was a mechanical, general-purpose computer.
	- Ada Lovelace developed the first *computer program*, an algorithm for the analytical machine to compute Bernoulli numbers. 
	- Importantly, Lovelace also proposes a "general-purpose calculator manipulate *symbols* that *represent* abstract processes."
	- Computers were initially purposed for saving time on human calculations; the analytical machine was considered useless in this.
 > "The analytical machine might act upon other things besides number, were objects found whose mutual fundamental relations oculd be expressed by those of the abstract science of operations ..." (Ada Lovelace)
 
 ---
## What is a "general-purpose" computer?
- **Church-Turing thesis** = A computer can carry out any *real-world computation* (i.e., steps that a human can complete) as long as it can *simulate* (i.e., do as much as) a "Turing machine."

#### Turing machines
- A **Turing machine** is a theoretical system that includes...
	- An infinitely long memory "tape" where *symbols* can be written and read
	- A current position on the tape and a current state
	- A table to "look up" the next action, based on current state and symbol on the current position
- Turing machines can describe an algorithm for carrying out any step-wise computation that a human can do.
	- The *representation* and *algorithm* must both be specified in creation.
- Turing machines can be implemented in interesting ways! Many unusual physical implementations are *"Turing complete."*
	- Ex: Legos, Minecraft, Powerpoint animations, DNA enzyme reactions.

#### Von Neumann architecture
- A *central processing unit* is connected to a *memory unit*. The CPU takes an *input device* and emits an *output device*.
	- The CPU has two subunits, a *control unit* and an *arithmetic/logic unit.*
	- The memory unit has more storage than the Turing "tape."
- The Von Neumann computer is broader than a Turing machine, allowing it to be more *efficient* but not necessarily more *capable*.
---
## Connectionist models
- **Connectionist models** are an alternative to **symbolic processing** where cognition arises from *parallel processing*, rather than a single command unit (i.e., computer) with a *central processor*.
- **Parallel distributed processing (PDP)** = Many local units, or small *agents*, are simulatenously competing to receive and send signals. Ultimately, these signals "settle" into an output.
- Perceptual and cognitive states are not **represented** by discrete symbols, but patterns of continuous activity across the units.

#### Implementing connectionist models
- **Neural networks** have "hidden units" for assessing different parts of a stimuli. When a mistake is made, "weights" are adjusted to improve future performance.
	- There are superficial parallels between NN "neurons" and real neurons, but things that can be modeled by NNs (e.g., supervised learning) are difficult to observe in the brain.
- Connectionist models can be simulated on traditional symbolic computing hardware.
- **Neuromorphic computing** uses electronic *analog* circuits that mimic the brain's neurobiological architecture.

#### Symbolic vs. connectionist cognition
- **Implementational connectionists** have a more moderate belief in parallel processing. They believe that a *symbolic model* for cognition should be built on top of a connectionist system, which is implemented as neurons.
- **Radical connectionists** believe that connectionist models of cognition are more accurate for explaining human behavior, so symbolic models should be entirely discarded.

---

## Notes
- Computation is limited for language, since exact linguistic rules for attaching sentence parts are frequently broken. 
	- Example: "I saw the sheep grazing in the field." vs. "I saw the Grand Canyon flying to New York."
	- Sentences depend on *semantic knowledge*, not purely grammatical construction.
	- Sentences are parsed consciously: What is a more reasonable reading? What makes sense based on other worldly knowledge? 