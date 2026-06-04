# Upstream @pierre/diffs Notes

PierreDiffsSwift wraps a pinned bundled build of `@pierre/diffs`.

## Current Pin

- npm package: `@pierre/diffs`
- pinned version: `1.2.7`
- configured in: `scripts/package.json`
- bundled output: `Sources/PierreDiffsSwift/Resources/pierre-diffs-bundle.js`

## Before Integrating Upstream APIs

1. Read the pinned dependency version in `scripts/package.json`.
2. Run `cd scripts && npm install` if `scripts/node_modules` is missing.
3. Check the local type declarations for the pinned version:
   - `scripts/node_modules/@pierre/diffs/dist/components/FileDiff.d.ts`
   - `scripts/node_modules/@pierre/diffs/dist/components/CodeView.d.ts`
   - `scripts/node_modules/@pierre/diffs/dist/types.d.ts`
4. Cross-check current upstream docs and releases:
   - https://diffs.com/docs
   - https://diffs.com/
   - https://github.com/pierrecomputer/pierre/releases
5. Prefer additive Swift wrapper APIs that preserve `PierreDiffView` defaults.
6. Rebuild the bundle with `cd scripts && npm run build`.
7. Run `swift test`.

Do not assume upstream `latest` docs match the pinned bundled version. If the npm pin changes, update this file, `CHANGELOG.md`, `README.md`, `AGENTS.md`, and `CLAUDE.md`.

## Wrapper Scope

`PierreDiffView` wraps upstream `FileDiff`, not `CodeView`. Low-risk `FileDiff` options can be exposed through `PierreDiffRenderOptions`.

`CodeView` is a larger upstream API for multi-file virtualized review surfaces. Adding it should be treated as a new Swift view, such as `PierreCodeView` or `PierreMultiFileDiffView`, rather than an expansion of `PierreDiffView`.

