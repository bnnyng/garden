---
tags:
  - fleeting-note
  - complexity-explorer/intro-complexity
lastmod: 2024-06-13T11:10:32-06:00
---
# What are networks?

- Examples
	- Neural networks (C. elegans)
	- Metabolic network – nodes are chemicals, links are chemical reactions
	- Food web
	- Airline routes
	- Internet – nodes are servers, links are paths between
	- Power grid
- Networks have nodes, links, and *hubs*
- General science of networks – what are their common properties?
	- Small world property
	- Long-tailed degree distribution
	- Clustering and community
	- Structures for robustness, etc.

---
# Network terminology

- Nodes, links, degree
	- Directed links, in degree, out degree
- **Degree distribution** = frequency of each possible number of degree in a given of network
- **Distance** = shortest path
- **Clustering** $C_v$ = fraction of *pairs* of neighbors that are connected to one another

---
# Small-world networks

- Small-world networks quantify connectedness (“it’s a small world”)
	- Notion of degrees of removal
- Possible structures of networks
	- Regular – high average distance (lots of hops), high average clustering; exactly same connection between all nodes
	- Random – low of both
	- **Small-world networks** = represents most real-world networks; low average distance but high average clustering
- How are small-world networks formed? (Watts & Strogatz model)
	- Start with **regular** network (nearest neighbors)
	- Randomly choose number of links, rewire to another randomly chosen node
	- Coefficient beta from 0 to 1; less to more average clustering

---
# Scale-free and long-tailed network structure

- **Scale-free distribution** = distribution of degrees looks the same at all scales; also known as a **power law** distribution
	- Care about the exponent
	- Scale-free network = network with scale-free or power law degree distribution
	- Scale-free networks are “fractal-like” with hubs that have roughly the same shape as original network 
	- Scale-free networks have small-world property – low distance and high clustering
	- Controversial assumption that most real-world networks are scale free
- **Long-tailed degree distribution** = many nodes have low degree compared to amount that have high degree
- Preferential attachment – biased choice when a new node is created in linking to existing nodes