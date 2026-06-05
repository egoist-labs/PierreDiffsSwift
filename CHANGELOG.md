# Changelog

All notable changes to PierreDiffsSwift are documented here.

## 1.2.0 - 2026-06-04

### Added

- Added `PierreDiffRenderOptions` for low-risk @pierre/diffs render controls:
  - `theme`
  - `diffIndicators`
  - `hunkSeparators`
  - `lineDiffType`
  - `disableLineNumbers`
  - `disableFileHeader`
  - `disableBackground`
  - `expandUnchanged`
  - `collapsedContextThreshold`
  - `maxLineDiffLength`
  - `expansionLineCount`
  - `tokenizeMaxLength`
  - `tokenizeMaxLineLength`
  - `stickyHeader`
- Added public option enums: `DiffIndicatorStyle`, `LineDiffType`, and `HunkSeparatorStyle`.
- Added `PierreDiffTheme.pierre` and `PierreDiffTheme.pierreSoft`.
- Added upstream integration notes for agents in `docs/upstream-pierre-diffs.md`.

### Changed

- Bumped the bundled `@pierre/diffs` dependency from `1.1.12` to `1.2.7`.
- Rebuilt `Sources/PierreDiffsSwift/Resources/pierre-diffs-bundle.js`.
- Updated README and agent guidance for the new render options.

### Fixed

- Preserved the WebView scroll position when inline annotations are added, edited, or removed.
