// Reference: https://www.npmjs.com/package/markdown

// DEFINETELY NOT working

var markdown = require( "markdown" ).markdown;
console.log(markdown.toHTML("Hello *World*!"));

var fs = require('fs')
fs.readFile('example.md', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    var result = markdown.toHTML(content);
 
    // console.log(mdToMd);
    console.log(result)
    // displays: # Markdown to md renderer\nHello world!

})
