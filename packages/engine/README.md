# engine

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build engine` to build the library.

## Running unit tests

Run `yarn workspace engine vitest run --coverage` to execute the unit tests via [Vitest](https://vitest.dev).

## Rules

### `gspGroupIdFormat`

Ensures GSP group identifiers match the pattern `"_A"`. Returns a `ValidationError` with code `INVALID_GSP_GROUP_ID_FORMAT` when the pattern does not match.

## Adding validators

You can extend engine validation by creating new rules. Follow these steps:

1. Add a file under `src/lib/rules/` that exports a constant `<camelName>Rule` implementing the `Rule` interface.
2. Create matching tests in `src/lib/rules/__tests__/` with one passing and one failing case.
3. Register the rule in `RULES` within `src/lib/validator.ts`.
4. Document the rule and its error codes in this README.

See `gspGroupIdFormatRule` for an example implementation.
