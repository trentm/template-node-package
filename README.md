TODO:
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
    make test [TEST-VARS]           # run all tests
    node test/foobar.test.js        # run a specific test file
    make test [TEST_FILTER=foo]     # run just the test files matching 'foo'

    # Run all tests against all supported node versions. This assumes
    # node binaries in "$HOME/opt/node-$majorVer".
    make testall

Test output is node-tap's default "classic" output. Full TAP output is written
to "test.tap". You can use `TAP=1` to have TAP output emited to stdout.

### Test vars

The following `TEST_...` envvars can tweak how the tests are run. As well, a
number of node-tap `TAP_...` envvars are available -- run
`./node_modules/.bin/tap` for docs on those.

- `TEST_JOBS=<number of test files to run concurrently>` - By default this is
  10. Set to 1 to run tests serially.

- `TEST_TIMEOUT_S=<number of seconds timeout for each test file>` - By default
  this is 1200 (10 minutes). Ideally tests are written to take much less than
  10 minutes.

- `TAP=1` to have the test suite emit TAP output. This is a node-tap envvar.


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
