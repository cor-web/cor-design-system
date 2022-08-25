const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

module.exports = function (eleventyConfig) {



  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: ".11ty-vite", // Default name of the temp folder

    // Defaults are shown:
    viteOptions: {
      clearScreen: false,
      server: {
        mode: "development",
        middlewareMode: true,
      },
      build: {
        mode: "production",
      }
    }
  });







  /*****************************************************************************************
     *  File PassThroughs: Tell 11ty to copy assets to the final site
     * ***************************************************************************************/



  eleventyConfig.addWatchTarget("./src/assets/");

  // copy all assets
  eleventyConfig.addPassthroughCopy('./src/assets');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,

    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',


    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: '_site'
    }

  };
};