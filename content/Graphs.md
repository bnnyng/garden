---
aliases:
  - graph
  - vertex
  - vertices
  - edges
  - directed graph
  - path
  - loop
  - cycle
  - connected graph
  - Hamiltonian path
tags:
  - permanent-note
  - topic-computer-science-information
  - wip
publish: "true"
date: 2023-12-31 18:10
lastmod: 2023-12-31T18:26:09-08:00
---
# Overview

A graph consists of a set of vertices and a set of edges.

---
# Key terms

- **Graph** $G = (V, E)$ = a set of vertices $V$ and a set of edges $E$.
	- **Directed graph** = also called **digraph**; a graph whose edges each have an associated direction (i.e., the edge pair is ordered).
	- **Weighted graph** = edges have an associated weight value.
- **Edge** = also called **arc**; a pair of vertices $(v,w)$ (i.e., with $v,w \in V$).
	- **Adjacent** = two vertices are **adjacent** if there is an edge connecting them (i.e., there is such a pair $(v,w) \in V$).
	- **Degree** $d$ = for a vertex, $d$ is the number of edges attached; alternatively, the number of **neighbors** for that vertex.
	- **Neighborhood** $N(v)$ = the set of all **neighbors** for a vertex $v$.
- **Walk** = a sequence of vertices where each vertex is adjacent to the next.
- **Path** = a sequence of vertices $w_1, \cdots, w_n$ with pairs $(w_i, w_{i+1}) \in E$ for all $1 \leq i < n$; alternatively, a walk where no vertex is repeated.
	- **Path length** = the number of edges in the path.
	- **Hamiltonian path** = a path containing all vertices.
	- **Loop** = a path that contains an edge $(v,v)$ from a vertex to itself.
	- **Cycle** = a path from a vertex to itself in a directed graph that contains at least one edge (i.e., a path with $w_1 = w_n$ that has at least length 1).

---
# Types of graphs

- We say $u$ is **connected** to $v$ if there is a $(u,v)$-path in G. A **connected graph** has the property that for all $u, v \in V(G)$, there exists a $(u,v)$-path.