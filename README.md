# flook-dogfood

Disposable public repository used to validate the Flook product-owner council
end to end. A flock of coding agents proposes changes here, opens pull requests,
and (under delegated authority) merges them after the test gate passes.

## Run tests

```sh
npm test
```

## Layout

- `src/` — small statistics helpers.
- `test/` — `node:test` suite.
- `plans/TODO.md` — candidate work for the council to plan.
