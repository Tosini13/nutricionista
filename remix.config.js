/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  serverDependenciesToBundle:  ['swiper', 'swiper/react', 'swiper/react/swiper-react.js', 'ssr-window','ssr-window/ssr-window.esm.js','dom7'],
};
