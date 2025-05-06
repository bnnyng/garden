---
aliases:
  - comprehension schema
  - naive set theory
  - extentionality
  - Russell's paradox
tags:
  - permanent-note
  - topic-humanities
  - MATH-GU4200
publish: 
date: <% tp.file.creation_date() %>
lastmod: 2025-04-20T16:13:26-04:00
---
# Overview

The **naive (logical) conception of sets** views a **set** as a mirror of **predication**: a set is a collection of things that share some property, and sets are “different ways of carving things up.” The **first-order**, logical part of naive set theory has two axioms:
- **Extentionality:** sets are identical if they have the same members.
- **Comprehension [[Logical schema|Schema]]:** when you have a condition, you can collect the things that satisfy it.

**Russell’s paradox** is about whether a “set of all sets that do not contain itself” would contain itself or not. This is a direct inconsistency issue with the Comprehension Schema, implying the naive conception of set must be *false*.

**Related notes:** [[Standard axioms of set theory]]

---
# Motivation

The naive conception of set is based on the intuition that any predicate has an **extension**: we should always be able to collect the things that satisfies a **condition** (i.e., a **formula** with a free variable).  For example, in ordinary math, we do not distinguish “the property of being even” and “the set of even numbers.”

However, such a collection may not be possible, and even appealing to the **Law of the Excluded Middle** is fallacious: “even if a predicate must apply or not apply to any thing, it does not follow *among* the things to which it may apply or not are **extensions**—sets of things to which a predicate applies.”

---
# Russell’s paradox

>[!definition] Russell’s paradox
>**Russell’s paradox** is the following statement, permissible by the axioms of naive set theory: “$x$ is an element of some $y$ if it does not contain itself”; the paradox is about where the object $y$ should go.
>$$ (\exists y) (x) (x \in y \iff x \notin x)) $$

