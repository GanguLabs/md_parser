// Reference: https://www.npmjs.com/package/remarkable


const { Remarkable } = require('remarkable');
var md = new Remarkable();
 
console.log(md.render('# Remarkable rulezz!'));
// => <h1>Remarkable rulezz!</h1>


var fs = require('fs')
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