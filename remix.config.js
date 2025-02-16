const {
  createRoutesFromFolders,
} = require("@remix-run/v1-route-convention");
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {
    v2_dev: true,
  },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverDependenciesToBundle:  ['swiper', 'swiper/react', 'swiper/react/swiper-react.js', 'ssr-window','ssr-window/ssr-window.esm.js','dom7'],
  // assetsBuildDirectory: "./public/build",
  // serverBuildPath: "./build/index.js",
};
