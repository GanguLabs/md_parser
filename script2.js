// Run "node script2.js" in terminal to run this in local

// Reference: https://www.npmjs.com/package/marked-ast-markdown

const marked = require('marked-ast');
const { toMarkdown } = require('marked-ast-markdown');
const fs = require('fs');



const ast = marked.parse(`
## Test
 
I'm some markdown, and:
 
1. I'm pretty easy to use
2. I support lists
`);

console.log(ast);
console.log(toMarkdown(ast));

fs.readFile('example.md', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    var markdown = content // "It's a *text*";
    var AST = marked.parse(markdown);

    const mdText = toMarkdown(AST)

    console.log(data)

    // Invoke the next step here however you like
    // console.log(content);   // Put all of the code here (not the best solution)


    // fs.writeFile("test.md", mdText, function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("The file was saved!");
    // });
})