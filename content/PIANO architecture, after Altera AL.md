---
aliases:
  - PIANO architecture
tags:
  - permanent-note
  - topic-information-computation-statistics
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-01-17T12:11:25-05:00
---
# Overview

>[!question]
>- Is the PIANO architecture instantiated in each agent?
>- Is there such a thing as a life cycle for each agent?
>- Inspiration from [[Global workspace theory|global workspace theory]] of consciousness? What would an “illusionist” architecture look like? Rather than explicitly programmed modules, something like behavior emerging from recursion…
>	- Do neural nets refute the idea that bottom-up language use enables higher cognition?

The **PIANO (Parallel Input Aggregation via Neural Orchestration) architecture** is a composite architecture for the implementation of human-like AI agents based on two brain-inspired design principles: **concurrency** and **information bottlenecked decision-making**.

> Just as a pianist coordinates multiple notes to create a harmony, the PIANO architecture selectively and concurrently executes various modules in parallel to enable agents to interact with the environment in real time. [[@2024al]]

![[IMG_383BB0535C6E-1.jpeg|500]]


---
# Details

- **Concurrency:** Agents should be able to think and act concurrently, with low-latency real-time interactions as well as the capacity to slowly deliberate and plan.
	- Solution: Implementation of concurrent **modules** (e.g., cognition, planning, motor execution, speech, goal generation), which are both LLM-based and otherwise; “each module can be seen as a *stateless function* that writes to a shared Agent State.”
- **Coherence:** Concurrent functions need to produce a single coherent output.
	- Solution: “Cognitive Controller” (CC) module that makes high-level decisions, possibly to be translated to motor decisions downstream; information is synthesized from the Agent State via a **bottleneck** that functions as “attention” for the CC and allows system designers to have explicit control over information flow.
	- CC decisions are *broadcast* to other modules.
- **Core modules:** 10 concurrent core modules, including memory, action awareness, goal generation, social awareness, talking, and skill execution.