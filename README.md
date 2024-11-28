# @radum Stylelint config

[![npm](https://img.shields.io/npm/v/@radum/stylelint-config?color=444&label=)](https://npmjs.com/package/@radum/stylelint-config)

> Personal recommended shareable config for stylelint.

It turns on all the possible errors rules within stylelint based on my own CSS styleguide.

Use it as is or as a foundation for your own config. You can extend or clone and change.

- [@radum Stylelint config](#radum-stylelint-config)
	- [Usage](#usage)
		- [Installation](#installation)
		- [Extending the config](#extending-the-config)
			- [Stylistic](#stylistic)
		- [Provide a defineConfig function for stylelint.config.js files](#provide-a-defineconfig-function-for-stylelintconfigjs-files)
	- [Complementary tools](#complementary-tools)
		- [Stylelint configs and plugins used](#stylelint-configs-and-plugins-used)
		- [Editor plugins](#editor-plugins)
		- [Find stylelint rules](#find-stylelint-rules)
	- [Changelog](#changelog)

> [!WARNING]
> Please keep in mind that this is **_a personal config_** with a lot opinions. Changes might not always be pleased by everyone and every use cases.
>
> If you are using this config directly, I'd suggest you **review the changes everytime you update**. Or if you want more control over the rules, always feel free to fork it. Thanks!

## Usage

### Installation

```bash
pnpm install -D @radum/stylelint-config stylelint
```

And create stylelint.config.js in your project root:

```js
import radum from '@radum/stylelint-config';

export default radum();
```

or if you are working on a Scss file:

```js
import radum from '@radum/stylelint-config';

export default radum({
	scss: true
});
```

This will set the `customSyntax` to `postcss-scss` and add the `stylelint-scss` plugin + all my rules.

### Extending the config

The first argument is an object with the following options:

- `sccs`: boolean - Enable SCSS rules. Default is false.
- `stylistic`: boolean - Enable stylistic rules. Default is true.
- `order`: boolean - Enable order rules. Default is false.

The second argument is an Stylelint config object. You can use it to disable or enable rules. Add new plugins or change the default settings.
This will be merged with the default config.

```js
// stylelint.config.js
import radum from '@radum/stylelint-config';

export default radum(
	{
		scss: true,
		stylistic: false,
		order: true,
	},
	{
		rules: {
			'scss/at-if-no-null': null,
		},
	}
);
```

This will disable the `scss/at-if-no-null` rule and enable the `scss` and `order` rules + their own plugins.

#### Stylistic

The stylistic rules are based on the [@stylistic/stylelint-plugin](https://github.com/stylelint-stylistic/stylelint-stylistic) plugin and are enabled by default.

In order to customize the stylistic rules, you can disable them by setting the `stylistic` option to `false` and then add the rules you want to enable or pass an object.

```js
// stylelint.config.js
import radum from '@radum/stylelint-config';

export default radum(
	{
		stylistic: {
			indent: 'tab',
			quotes: 'double',
			maxLineLength: 120
		}
	}
);
```

### Provide a defineConfig function for stylelint.config.js files

If you are using the [stylelint-define-config](https://github.com/stylelint-types/stylelint-define-config) package, you can provide a function that will be used to define the config.

```bash
pnpm install -D stylelint-define-config @stylelint-types/stylelint-scss @stylelint-types/stylelint-stylistic @stylelint-types/stylelint-order
```

```js
import radum from '@radum/stylelint-config';
import { defineConfig } from 'stylelint-define-config';

/// <reference types="@stylelint-types/stylelint-scss">

export default radum({
	scss: true
}, defineConfig({
	rules: {
		'property-no-unknown': null
	}
}));
```

## Complementary tools

### Stylelint configs and plugins used

- https://github.com/stylelint/stylelint-config-recommended
- https://github.com/stylelint/stylelint-config-standard
- https://github.com/stylelint-scss/stylelint-config-recommended-scss
- https://github.com/stylelint-scss/stylelint-config-standard-scss
- https://github.com/stylelint-stylistic/stylelint-stylistic

- https://github.com/stylelint-scss/stylelint-scss
- https://github.com/hudochenkov/stylelint-order

### Editor plugins

- [Ale](https://github.com/w0rp/ale): A Vim plugin that supports stylelint.
- [Flycheck](https://github.com/flycheck/flycheck): An Emacs extension that supports stylelint.
- [linter-stylelint](https://github.com/AtomLinter/linter-stylelint): An Atom plugin for stylelint.
- [SublimeLinter-stylelint](https://github.com/SublimeLinter/SublimeLinter-stylelint): A Sublime Text plugin for stylelint.
- [SublimeLinter-contrib-stylelint_d](https://github.com/jo-sm/SublimeLinter-contrib-stylelint_d): A Sublime Text plugin for stylelint that run's on daemon.
- [vscode-stylelint](https://github.com/shinnn/vscode-stylelint): A Visual Studio Code extension for stylelint.
- [WebStorm](https://blog.jetbrains.com/webstorm/2016/09/webstorm-2016-3-eap-163-4830-stylelint-usages-for-default-exports-and-more/): Version 2016.3 onwards has built-in support for stylelint.

### Find stylelint rules

Find stylelint rules that are not configured in your stylelint config. This is useful to see what else is new and what is deprecated or updated.

Running this in your root folder will show the list.

```bash
npx stylelint-find-rules
```

More info here https://github.com/alexilyaev/stylelint-find-rules

## [Changelog](CHANGELOG.md)
