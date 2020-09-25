TODO:
- proj setup steps in "https://github.com/.../settings":
    - disable merge commits
    - remove wikis if not using
    - remove projects if not using
- Find and replace all "foobar" boilerplate in this repo:
        rg -i foobar
        find . -name "*foobar*"
- update copyright year in LICENSE


TODO: Add a short (one or a few paragraphs) description of this package here
including: why, what it does, perhaps what it doesn't do, and current status if
relevant.


# Install

    npm install foobar


# Usage

TODO: some usage examples


# ...

TODO: other user-guide-ish top-level sections as you see fit


# Reference

TODO: if it will be maintained, provide an h2 section for each API method


# License

MIT. See [LICENSE](./LICENSE).


# Dev Guide

## How to contribute

**[File an issue](https://github.com/trentm/node-foobar/issues/new)** if you
find a bug, or want to discuss a new feature or change.

**[Open a pull request](https://github.com/trentm/node-foobar/pulls)** if you
have a suggested change.

Before commiting or proposing PRs, please ensure the following pass:

    make fmt        # format code via prettier
    make check      # lint, style, and formatting (via eslint and prettier)
    make test


## Testing

Usage:
    npm test                        # run all tests
    make test                       # run all tests (same)
    node test/foobar.test.js        # run a specific test file

Test output is node-tap's default "classic" output. You can use `TAP=1` to
have TAP output emited to stdout.


## Release process

Here is how to cut a release:

1. Push a commit to set the intended version in "package.json#version" and
   changing `## not yet released` at the top of "CHANGES.md" to:

    ```
    ## not yet released

    (nothing yet)

    ## v$version
    ```

2. Once that is merged and you've updated your local copy, run:

    ```
    make cutarelease
    ```

   This will run a couple checks (clean working copy, versions in package.json
   and CHANGES.md match), then will git tag and npm publish.
