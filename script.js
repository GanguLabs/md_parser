// Run "node script.js" in terminal to run this in local

var parse = require("@textlint/markdown-to-ast").parse;
const toMarkdown = require('ast-to-markdown')
const fs = require('fs');

fs.readFile('example.md', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    var markdown = content // "It's a *text*";
    var AST = parse(markdown);

    const mdText = toMarkdown(AST)

    console.log(data)

    // Invoke the next step here however you like
    // console.log(content);   // Put all of the code here (not the best solution)


    fs.writeFile("test.md", mdText, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
})

// Or
// fs.writeFileSync('/tmp/test-sync', 'Hey there!');