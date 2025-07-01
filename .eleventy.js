module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Corrigindo a collection
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/index.md").reverse();
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
