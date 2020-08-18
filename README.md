# Forum Design System

## Prerequisites

The design system uses two fonts: Chronicle Deck (Typography.com) and Acumin Pro (Adobe Typekit), which you will need to load.

It is also recommended that you use the design system with [Basscss](https://basscss.com/).

## Installation

Add the following to your `package.json`. You can check the [releases](https://github.com/minervaproject/forum-design-system/releases) page for the latest version.

```
"forum-design-system": "https://github.com/minervaproject/forum-design-system#v0.1.0",
```

We recommend importing the design system CSS after Basscss but before your custom styles, like this:

```
import "forum-design-system/dist/forum-design-system.css";
```

Alternatively, you can use [jsDelivr](https://www.jsdelivr.com/):

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/minervaproject/forum-design-system@v0.1.0/dist/forum-design-system.css">
```

## Documentation

See [https://minervaproject.github.io/forum-design-system/](https://minervaproject.github.io/forum-design-system/).

## Development

For local development, you'll need to run the following:

```
nvm use
yarn
yarn start
```

After making changes, run `yarn build` to update `dist/forum-design-system.css`.

Note: if you add or change styles, make sure you update the documentation in `index.html`.

## Releasing

To release a new version, first update the version number in `package.json`. Then create a new release [here](https://github.com/minervaproject/forum-design-system/releases).

