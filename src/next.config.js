const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withSass = require("@zeit/next-sass");

const withTypescript = require("@zeit/next-typescript");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    withTypescript,
    withSass,
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
