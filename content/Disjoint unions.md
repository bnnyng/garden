---
aliases:
  - disjoint union
  - coproduct
tags:
  - permanent-note
  - topic-logic-mathematics
status: 
publish: "true"
date: 2024-10-28 09:07
lastmod: 2025-04-08T12:00:12-04:00
---
A **disjoint union**, or **coproduct**, is a space $Q$ such that given two spaces $X, Y$, a [[Continuous functions|continuous]] map from $Q$ has the same *data* as a map from each of $X$ and $Y$. Compare this to a [[Product spaces|product]] of [[Topological spaces and open sets|topological spaces]] which, in the standard product topology, where a continuous map some $X \to Y \times Z$ is the same data as a continuous map to each of $Y, Z$.


>[!definition] Disjoint union
>Given a collection of sets $\{ X_\alpha\}_{\alpha \in J}$, their **disjoint union**, or **coproduct**, is 
>$$
>\coprod_{\alpha \in J} X _\alpha = \{ (x, \alpha) \ | \ \alpha \in J, \ x \in X_{\alpha}\}.
>$$
>For a single set $X$, while the usual union of $X$ with itself is simply the original set $X \cup X = X$, while $X \sqcup X$ involves two distinct copies of $X$. 
>
>Further, there exist natural injective [[Projection and inclusion maps|inclusion maps]] $i_\alpha : X_\alpha \to \coprod_\alpha X_\alpha$ given by $x \mapsto (x, \alpha)$. 

^6bc549

Note that if $Y$ is discrete and $X$ is any space, then $X \times Y \cong \coprod_{y \in Y} X$ is a [[Homeomorphisms and topological embeddings|homeomorphism]].

%% The [[Universal properties of topologies|universal property]] of the disjoint union motivates [[Quotient spaces|quotient spaces]]: we would like each inclusion $i_\alpha: X _\alpha \to \coprod X_\alpha$ to be continuous, so we should define a set $U \subseteq \coprod X_\alpha$ if and only if$i_\alpha^{-1}(U) \subseteq X_\alpha$ is open for all $\alpha$. %%