// Reference: https://www.npmjs.com/package/markdown-it

var fs = require('fs')

var source = '# Markdown to md renderer\nHello world!';


var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

fs.readFile('example.md', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    var result = md.render(content);
 
    // console.log(mdToMd);
    console.log(result)
    // displays: # Markdown to md renderer\nHello world!

})