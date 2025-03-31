---
aliases: 
tags:
  - fleeting-note
date: 2024-09-12 17:03
lastmod: 2024-09-12T17:13:09-04:00
---
# Resources

#### JavaScript general

- [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

#### jsPsych
- [Plugins documentation page](https://www.jspsych.org/v7/overview/plugins/)

---
#### [Simple reaction time task](https://www.jspsych.org/v7/tutorials/rt-task/)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My experiment</title>
    <script src="https://unpkg.com/jspsych@7.3.4"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.3"></script>
    <link href="https://unpkg.com/jspsych@7.3.4/css/jspsych.css" rel="stylesheet" type="text/css" />
  </head>
  <body></body>
  <script>
  </script>
</html>
```

- **Timeline** = an array that contains the set of trials that we want to run in the experiment; *defines* the experiment.
	- Trials are added to array as they are created.