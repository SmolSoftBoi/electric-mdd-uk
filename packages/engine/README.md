# engine

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build engine` to build the library.

## Running unit tests

Run `yarn workspace engine vitest run --coverage` to execute the unit tests via [Vitest](https://vitest.dev).

## Rules

### `gspGroupIdFormat`

Ensures GSP group identifiers match the pattern `"_A"`. Returns a `ValidationError` with code `INVALID_GSP_GROUP_ID_FORMAT` when the pattern does not match.
