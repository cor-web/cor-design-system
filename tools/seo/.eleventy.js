const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  /*
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'possum',
    functionsDir: "./netlify/functions/",
  });
  */

  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({ "./public/": "/" });

};