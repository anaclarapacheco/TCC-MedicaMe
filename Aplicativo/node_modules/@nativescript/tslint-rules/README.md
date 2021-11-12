# NativeScript TSLint Rules

[![Build Status](https://travis-ci.org/NativeScript/nativescript-tslint-rules.svg?branch=master)](https://travis-ci.org/NativeScript/nativescript-tslint-rules)

This project contains tslint rules useful for NativeScript applications.

## `prefer-mapped-imports` rule

Prefer using mapped paths when importing external modules or ES6 import declarations.

> Note: This rule is intended for [code-sharing NativeScript projects](https://docs.nativescript.org/code-sharing/intro)

### Options

-   `prefix` specifies the prefix for the mapped imports (usually "@src/").
-   `prefix-mapped-to` specifies folder that is mapped to the prefix (usually "src/").
-   `base-url` specifies the base url of the typescript program (usually ".")`

Sample rule config (`tslint.json`):

```
"prefer-mapped-imports": [
    true,
    {
        "prefix": "@prefix/",
        "prefix-mapped-to": "src/",
        "base-url": "."
    }
]
```

### Autofix

The rule will propose a fix if:

-   Has all the configurations in the `tslint.json`
-   Used in typescript project with `baseUrl` and `path` mappings for either web or mobile files.

## `no-android-resources` rule

The rule forbids using constants inside `android.R` as they cause performance issues.
