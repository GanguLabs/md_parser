// Reference: https://www.npmjs.com/package/marked-to-md


var fs = require('fs')
var marked = require('marked');
var mdRenderer = require('marked-to-md');
 
var source = '# Markdown to md renderer\nHello world!';
 
var renderer = mdRenderer(new marked.Renderer());
var parser = new marked.Parser({ renderer: renderer });

fs.readFile('example.md', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    var tokens = marked.lexer(content);
    var mdToMd = parser.parse(tokens);
 
    // console.log(mdToMd);
    console.log(marked(content))
    // displays: # Markdown to md renderer\nHello world!

})