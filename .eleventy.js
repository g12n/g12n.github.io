const localImages = require('eleventy-plugin-local-images');



module.exports = function(eleventyConfig) {
    
    eleventyConfig.addLayoutAlias('blog', 'post.njk');
    
    eleventyConfig.addPlugin(localImages, {
        distPath: '_site',
        assetPath: '/assets/img',
        selector: 'img',
        verbose: false
    });


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