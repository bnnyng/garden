---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-07-27T13:54:35-04:00
---
# Level $k$ learner opponents with uniform priors

### Greedy base policy

**Mod game choices:**
- Players made same choice in each round
![[Pasted image 20250726155832.png]]

**Step sizes for each player:**
![[Pasted image 20250726155803.png]]
![[Pasted image 20250726155808.png]]

**Cumulative rewards for each player:**

![[Pasted image 20250726155735.png]]
![[Pasted image 20250726155739.png]]

**Level $k$ belief distribution for each player:**
- Maximum level 10
![[Pasted image 20250726155926.png]]
![[Pasted image 20250726155930.png]]

### Random base policy

**Mod game choices:**

![[Pasted image 20250726155951.png]]

**Step sizes:**

![[Pasted image 20250726160008.png]]

![[Pasted image 20250726160011.png]]

**Cumulative rewards:**

![[Pasted image 20250726160238.png]]

![[Pasted image 20250726160241.png]]

**Belief distributions:**

![[Pasted image 20250726160254.png]]

![[Pasted image 20250726160259.png]]

### Greedy w/ random choice probability 0.5

- Cumulative rewards 0 for both players due to identical choices

**Mod game choices:**

![[Pasted image 20250726160345.png]]

**Step sizes:**

![[Pasted image 20250726160443.png]]

![[Pasted image 20250726160447.png]]

**Belief distributions:**

![[Pasted image 20250726160421.png]]

![[Pasted image 20250726160425.png]]

### Greedy w/ random choice probability 0.25

- Cumulative rewards 0 for both players due to identical choices

**Mod game choices:**

![[Pasted image 20250726161555.png]]

**Step sizes:**

![[Pasted image 20250726161621.png]]

![[Pasted image 20250726161624.png]]

**Belief distributions:**

![[Pasted image 20250726161725.png]]

![[Pasted image 20250726161728.png]]

---
# Level $k$ learner opponents with varying priors

- Player 1 priors: `[1. 0. 0. 0. 0. 0. 0. 0. 0. 0. 0.]`
- Player 2 priors: `[0. 0. 0. 0. 1. 0. 0. 0. 0. 0. 0.]`

### Greedy base policy

**Mod game choices:**

![[Pasted image 20250727094956.png]]

**Step sizes:**

![[Pasted image 20250727095012.png]]

![[Pasted image 20250727095018.png]]

**Cumulative rewards:**


![[Pasted image 20250727094934.png]]

![[Pasted image 20250727095029.png]]

**Belief distributions:**

![[Pasted image 20250727095047.png]]

![[Pasted image 20250727095051.png]]

### Greedy w/ random choice probability 0.75

**Mod game choices:**

![[Pasted image 20250727132131.png]]

**Step sizes:**

![[Pasted image 20250727132148.png]]

![[Pasted image 20250727132154.png]]

**Cumulative rewards:**

![[Pasted image 20250727132209.png]]

![[Pasted image 20250727132213.png]]

**Belief distributions:**

![[Pasted image 20250727132229.png]]
![[Pasted image 20250727132234.png]]

### Greedy w/ random choice probability 0.25

**Mod game choices:**

![[Pasted image 20250727134044.png]]

**Step size:**

![[Pasted image 20250727134054.png]]

![[Pasted image 20250727134059.png]]

**Cumulative rewards:**

![[Pasted image 20250727134109.png]]

![[Pasted image 20250727134113.png]]

**Belief distributions:**

![[Pasted image 20250727134126.png]]

![[Pasted image 20250727134130.png]]

---
# Level $k$ learner opponents with varying decision parameters

### Inverse temperature 2.0

**Mod game choices:**

![[Pasted image 20250727135341.png]]

**Step sizes:**

![[Pasted image 20250727135349.png]]

![[Pasted image 20250727135352.png]]

**Cumulative rewards:**

![[Pasted image 20250727135403.png]]

![[Pasted image 20250727135407.png]]

**Belief distribution:**

![[Pasted image 20250727135421.png]]

![[Pasted image 20250727135424.png]]

