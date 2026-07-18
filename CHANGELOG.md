# Changelog

All notable changes to PierreDiffsSwift are documented here.

## 1.3.0 - 2026-07-18

### Added

- Added `PierreDiffFont` for customizing code and header fonts via CSS variables:
  - `family` / `headerFamily`
  - `size` / `lineHeight` (CSS strings, or points via convenience initializer)
  - `tabSize`
  - `faces` for bundled `@font-face` injection (`.ttf` / `.otf` / `.woff` / `.woff2`)
- Added `PierreDiffFontFace` and `PierreDiffFontFormat` to load fonts from `Data`, file URLs, or bundle resources and embed them as data URLs in the WebView.
- Added `PierreDiffFont.bundled(familyName:faces:...)` helper that builds a CSS stack with system monospace fallbacks.
- Exposed font configuration on `PierreDiffRenderOptions.font` (defaults preserve historical 12px mono styling).
- Font-only option changes update CSS variables / `@font-face` rules without a full `FileDiff` re-render.

### Changed

- Bumped the bundled `@pierre/diffs` dependency from `1.2.7` to `1.2.12`.
- Pinned `shiki` / `@shikijs/themes` to `4.3.1` for the esbuild bundle (required by `@pierre/theming` theme imports in 1.2.12).
- Rebuilt `Sources/PierreDiffsSwift/Resources/pierre-diffs-bundle.js`.
- Updated package installation URL to `https://github.com/egoist-labs/PierreDiffsSwift`.

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
