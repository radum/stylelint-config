# @radum Stylelint config [![Build Status](https://travis-ci.com/radum/stylelint-config.svg?branch=master)](https://travis-ci.com/radum/stylelint-config)

> Personal recommended shareable config for stylelint.

It turns on all the possible errors rules within stylelint based on my own CSS styleguide.

Use it as is or as a foundation for your own config. You can extend or clone and change.

## Installation

```bash
npm install -D @radum/stylelint-config
```

## Usage

This package includes the following configurations:

- @radum/stylelint-config - The base code style guide.
- @radum/stylelint-config/scss - To be used in addition to "@radum/stylelint-config" configuration by projects that use Sass.

If you've installed `@radum/stylelint-config` locally within your project, just set your stylelint config to:

```bash
{
  "extends": "@radum/stylelint-config"
}
```

or if you are working on a Scss file:

```json
{
  "extends": [
    "@radum/stylelint-config"
    "@radum/stylelint-config/scss"
  ]
}
```

If you've globally installed @radum/stylelint-config using the -g flag, then you'll need to use the absolute path to @radum/stylelint-config in your config e.g.

```bash
{
  "extends": "/absolute/path/to/@radum/stylelint-config"
}
```

You can also simply use the globally installed configuration name instead of the absolute path:

{
  "extends": "@radum/stylelint-config"
}

### Stylelint no unsupported browser features

Although `stylelint-no-unsupported-browser-features` is installed is not enforced. You should add your own specific settings.

For example:

```
"rules": {
	"plugin/no-unsupported-browser-features": [true, {
		"browsers": [
			"last 2 Chrome versions",
			"last 2 Safari versions",
			"last 1 iOS versions",
			"last 2 Firefox versions",
			"last 2 Edge versions"
		],
		"severity": "warning"
	}]
}
```

### Extending the config

Simply add a "rules" key to your config, then add your overrides and additions there.

For example, to change the at-rule-no-unknown rule to use its ignoreAtRules option, turn off the block-no-empty rule, and add the unit-whitelist rule:

```json
{
  "extends": "@radum/stylelint-config",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## Deploy

To deploy a new version, make sure you have a clean `node_modules` folder and then install the stylelint dependency like this:

```bash
npm i stylelint --no-save --no-package-lock
```

Then run `np` or `npm run release`. This is because np needs to run without a cleanup to be able to run tests that need stylelint.

Until `np` adds an option for peer dependency use the flow above.

## Complementary tools

### Editor plugins

-   [Ale](https://github.com/w0rp/ale): A Vim plugin that supports stylelint.
-   [Flycheck](https://github.com/flycheck/flycheck): An Emacs extension that supports stylelint.
-   [linter-stylelint](https://github.com/AtomLinter/linter-stylelint): An Atom plugin for stylelint.
-   [SublimeLinter-stylelint](https://github.com/SublimeLinter/SublimeLinter-stylelint): A Sublime Text plugin for stylelint.
-   [SublimeLinter-contrib-stylelint_d](https://github.com/jo-sm/SublimeLinter-contrib-stylelint_d): A Sublime Text plugin for stylelint that run's on daemon.
-   [vscode-stylelint](https://github.com/shinnn/vscode-stylelint): A Visual Studio Code extension for stylelint.

### Editors

-   [WebStorm](https://blog.jetbrains.com/webstorm/2016/09/webstorm-2016-3-eap-163-4830-stylelint-usages-for-default-exports-and-more/): Version 2016.3 onwards has built-in support for stylelint.

### Find stylelint rules

Find stylelint rules that are not configured in your stylelint config. This is useful to see what else is new and what is deprecated or updated.

Running this in your root folder will show the list.

```
npx stylelint-find-rules
```

More info here https://github.com/alexilyaev/stylelint-find-rules

## [Changelog](CHANGELOG.md)
