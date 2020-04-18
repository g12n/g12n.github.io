

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addLayoutAlias('blog', 'post.njk');

    return {
        dir: {
            input: "./_source"   
        },
        templateFormats: [
            "md",
            "css",
            "njk", 
            "yml", 
            "html"
        ],
        passthroughFileCopy: true
    }

};