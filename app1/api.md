---
layout: docs
product: app1
nav_order: 30
sample_card:
  name: API portal
  icon: AP
  icon_image: /assets/logo/github-logo.png
  buttons:
    - label: Reference
      icon: R
      color: "#0f62fe"
      url: "https://example.com/app1/api/reference"
    - label: Sandbox
      icon: S
      color: "#1f9d55"
      url: "https://example.com/app1/api/sandbox"
  secondary_links:
    - label: Changelog
      icon: C
      url: "https://example.com/app1/api/changelog"
    - label: Support
      icon: "?"
      url: "https://example.com/app1/api/support"
---

# odkazy na API

{% include docs-hub-card.html data=page.sample_card %}