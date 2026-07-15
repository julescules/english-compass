# Local visual asset pack

The application source intentionally keeps the original full-edition filenames and artwork placement rules. The corresponding raster files are not distributed in this public repository because several source licenses prohibit raw-material redistribution or do not provide image-level repository permission.

On the maintainer's D: workspace, `scripts/Publish-GitHub.ps1` copies the existing local art into the public mirror for preview while `.gitignore` keeps every raster file untracked. A public clone can use a separately licensed art pack by placing files at the same `assets/...` paths.

`icon.svg` is the existing English Compass project icon and is distributed under the repository's MIT License.
