# SvelteKit Demo app

# Deviations

- Fluid type scale compromises "pixel perfect" font-sizes at hard screen sizes from figma for consistent typographic hierarchy across all viewports.
- Logical properites compromises "pixel perfect" absolute positioning and sizing for consistent positioning and sizing across all viewports and writing-modes.

## Possible Improvements

- Text contrast accessibility. Should consider adding a text-shadow and/or killing mix-blend-mode.
- Image optimization: webps, srcsets, etc.
- Font optimization: woff2, subsetting etc.
- Scaling the logic for a production level project: re-assigning values to stores in respective components using a Map or Array that indexes all final image objects.
