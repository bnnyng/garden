---
aliases: 
tags:
  - permanent-note
publish: 
date: 2025-05-14T18:03:24-04:00
lastmod: 2025-05-14T18:53:19-04:00
---
# General file management

- **Create a file:** `touch <file-name>`

## Folder paths

To input a path in Finder, use `cmd + shift + G`. To copy the current folder path, use `cmd + option + C`. 

Automator workflows
```
~/Library/Workflows/
```

---
# Package managers

## Conda

- **Create new environment:** `conda create --name <env-name> python=<version>
- **List all environments:** `conda env list`
- **Remove environment:** `conda env remove -n <env-name>`

## Homebrew

- **Check if a package is installed:** `brew list <package-name>`
- **Check the version of an installed package:** `<package-name> --version
- **Install a package:** `brew install <package-name>`

---
# Git

- **Clone repository from link:** `git clone <repo-link>

---
# Snippets

```
<package-name>
```
