module.exports = function (eleventyConfig) {
  // Copiar pastas públicas
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Coleção de posts (busca os .md da pasta posts/)
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  return {
    dir: {
      input: ".",
      includes: "_includes", // ⚠️ você usou "includes", não "_includes"
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
