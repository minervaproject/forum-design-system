# Forum Design System

## Prerequisites

The design system uses two fonts: Chronicle Deck (Typography.com) and Acumin Pro (Adobe Typekit), which you will need to load.

It is also recommended that you use the design system with [Basscss](https://basscss.com/).

## Installation

Go to the [releases](https://github.com/minervaproject/forum-design-system/releases) page and copy the latest `tar.gz` link. Then include it in your `package.json` file like this:

```
"forum-design-system": "https://github.com/minervaproject/forum-design-system/archive/v0.0.1.tar.gz",
```

We recommend importing the design system CSS after Basscss but before your custom styles, like this:

```
import "../../public/stylesheets/basscss.min.css";
import "../../node_modules/forum-design-system/src/index.css";
import "stylesheets/screen.scss";
```
