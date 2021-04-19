module.exports = config => {

  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('src');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'site',
      output: 'public'
    }
  };
};