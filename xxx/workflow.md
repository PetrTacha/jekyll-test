---
title: SSS
nav_order: 2
---

# Workflow Overview

You can write documentation content in markdown only.

The theme behavior (top nav, left nav, alert rendering) is already configured globally.
You only need to author markdown pages.

## Create a new page

Create a file like `my-topic.markdown`:

```md
---
layout: page
title: My Topic
permalink: /my-topic/
---

## Section title

Your content here.
```

Then add it to `/_data/navigation.yml`.

## GitHub alerts in markdown

Write this in markdown:

```md
> [!NOTE]
> This is a note.

> [!TIP]
> This is a tip.

> [!WARNING]
> This is a warning.
```

The site transforms those into GitHub-like `markdown-alert` blocks with icon, title, and colored left border.

## Side subnavigation

There are two ways to control left subnavigation.

1. Global: edit `/_data/navigation.yml` under `side` and `children`.
2. Optional: if you need it later, page front matter can still be extended.

```yaml
subnav:
  - title: Intro
    url: /my-topic/#intro
  - title: Examples
    url: /my-topic/#examples
```

This keeps your current workflow markdown-first and avoids HTML edits.