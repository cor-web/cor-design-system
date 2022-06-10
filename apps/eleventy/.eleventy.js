const CorButton = require('@cor-web/components/button/template.js');
const form = require('./form');

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("user", function(data) {
    return CorButton({firstName:'si', lastName:'sjiu'})
  });

  eleventyConfig.addShortcode('formInput', form)

  eleventyConfig.addWatchTarget('../../packages/components');
}