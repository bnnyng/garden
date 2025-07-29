---
aliases: 
tags:
  - fleeting-note
date: <% tp.file.creation_date() %>
lastmod: 2025-07-27T15:00:13-04:00
---
# Level $k$ belief learner in a standard game

- Using “myopic belief up
- Default to `max_level_k = 10`

### Against a random opponent

- Opponent level belief (after “learning”): `array([1., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])`

**Belief distribution over cognitive hierarchy levels during learning:**

![[Pasted image 20250721154900.png]]

**State and cooperation values for `LevelKBeliefLearner` vs. random opponent:**

![[Pasted image 20250721154906.png]]

### Against a level 1 player

- Opponent level belief: `array([6.56777197e-70, 1.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00])`

**Belief distribution:**

![[Pasted image 20250721155612.png]]

**State and cooperation values:**

![[Pasted image 20250721155534.png]]

### Against another level $k$ belief learner

##### $n = 20$ learning episodes

![[Pasted image 20250721161514.png]]

![[Pasted image 20250721161521.png]]

![[Pasted image 20250721161740.png]]

##### $n = 100$ learning episodes

![[Pasted image 20250721161940.png]]

![[Pasted image 20250721161947.png]]

![[Pasted image 20250721162213.png]]

##### $n=200$ learning episodes

![[Pasted image 20250722121050.png]]

![[Pasted image 20250722121057.png]]

![[Pasted image 20250722121103.png]]

##### $n = 200$ learning episodes with max level 20

![[Pasted image 20250722121515.png]]

![[Pasted image 20250722121521.png]]

![[Pasted image 20250722122838.png]]



##### $n=500$ learning episodes

![[Pasted image 20250727145949.png]]

![[Pasted image 20250727145955.png]]

![[Pasted image 20250727150001.png]]



---

# Level $k$ belief learner in quantum chicken game

##### $n=100$ learning episodes

![[Pasted image 20250722162429.png]]

![[Pasted image 20250722162440.png]]

![[Pasted image 20250722162413.png]]

##### $n=200$ learning episodes

![[Pasted image 20250722163153.png]]

![[Pasted image 20250722163207.png]]

![[Pasted image 20250722163237.png]]

##### $n = 500$ learning episodes

![[Pasted image 20250722163737.png]]

![[Pasted image 20250722163747.png]]

![[Pasted image 20250722163805.png]]

##### $n=500$ learning episodes with $\epsilon$ term added to posterior

![[Pasted image 20250722171520.png]]

![[Pasted image 20250722171528.png]]
![[Pasted image 20250722171852.png]]
