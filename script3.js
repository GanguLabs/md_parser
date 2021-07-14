// Run "node script3.js" in terminal to run this in local

var fs = require('fs')
// var unified = require('unified')
// var markdown = require('remark-parse')
// var remark2rehype = require('remark-rehype')
// var html = require('rehype-stringify')

// unified()
//     .use(markdown)
//     .use(remark2rehype)
//     .use(html)
//     .process(fs.readFileSync('example.md'), function (err, file) {
//         if (err) throw err
//         console.log(String(file))
//     })


var unified = require('unified')
var html = require('rehype-parse')
var rehype2remark = require('rehype-remark')
var stringify = require('remark-stringify')

var processor = unified()
    .use(html)
    .use(rehype2remark)
    .use(stringify, {
        bullet: '*',
        emphasis: '_',
        fences: true,
        gfm: true,
        listItemIndent: '1',
        rule: '-',
        ruleSpaces: false,
        strong: '_'
    })
    .process(fs.readFileSync('example.md'), function (err, file) {
        if (err) throw err
        console.log(String(file))

        fs.writeFile("test.md", String(file), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    })







// var remarkAbstract = require("remark");
// var fs = require("fs")
// var stringifyMD = require("remark-stringify")

// let remark = remarkAbstract();
// var ast = remark.process(fs.readFileSync('example.md'));

// console.log(stringifyMD(ast))


