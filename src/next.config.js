const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withStylus = require("@zeit/next-stylus");
const withTypescript = require("@zeit/next-typescript");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    withTypescript,
    withStylus,
    [
      withBundleAnalyzer,
      {
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
          process.env.BUNDLE_ANALYZE,
        ),
      },
    ],
  ],
  {
    distDir: "../.next",
  },
);
