## Workflow Overview

You can write documentation content in markdown only.

The theme behavior (top nav, left nav, alert rendering) is already configured globally.
You only need to author markdown pages.

## Create a new page
## Docs Workflow

This repository is markdown-first.

- Write docs in markdown files.
- Keep minimal front matter only:

```yaml
---
layout: page
title: My Page
permalink: /my-section/my-page/
---
```

- Do not use per-page subnav front matter unless you explicitly want custom behavior.
- Top and left navigation are global and come from [ _data/navigation.yml ](_data/navigation.yml).
- GitHub alerts are authored directly in markdown and rendered by the theme:

```md
> [!NOTE]
> Note content.
```

## Build Behavior

Your setup with Docker jekyll/builder:jekyll and mapping host _site to /srv/jekyll/_site works for this project.

Why it works:

- The layout override is in [ _layouts/default.html ](_layouts/default.html).
- The style override is in [ assets/main.scss ](assets/main.scss).
- Navigation data is in [ _data/navigation.yml ](_data/navigation.yml).
- Markdown pages are standard Jekyll pages with front matter and permalinks.

Both local Jekyll serve/build and Docker jekyll build use the same Jekyll processing rules, so output structure and features are consistent.
Create a file like `my-topic.markdown`:

```md
---
layout: page
title: My Topic
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
2. Per-page: set `subnav` in page front matter:

```yaml
subnav:
  - title: Intro
    url: /my-topic/#intro
  - title: Examples
    url: /my-topic/#examples
```

This lets each markdown page define its own subnavigation without editing HTML.