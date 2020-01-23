# Forum Design System

## Prerequisites

The design system uses two fonts: Chronicle Deck (Typography.com) and Acumin Pro (Adobe Typekit), which you will need to load.

It is also recommended that you use the design system with [Basscss](https://basscss.com/).

## Installation

Add the following to your `package.json`. You can check the [releases](https://github.com/minervaproject/forum-design-system/releases) page for the latest version.

```
"forum-design-system": "https://github.com/minervaproject/forum-design-system#v0.0.2",
```

We recommend importing the design system CSS after Basscss but before your custom styles, like this:

```
import "forum-design-system/dist/forum-design-system.css";
```

## Documentation

See [https://minervaproject.github.io/forum-design-system/](https://minervaproject.github.io/forum-design-system/).

## Development

For local development, you'll need to run the following:

```
nvm use
npm install -g sass
```

After making changes, run `npm run build` to update `dist/forum-design-system.css`.

Note: if you add or change styles, make sure you update the documentation in `index.html`.
