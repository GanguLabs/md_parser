# md_parser
Testing Markdown parser to format md files (Roam Research to Obsidian)

 - Best working example is using VS code plugin - [Tidy Markdown](https://marketplace.visualstudio.com/items?itemName=tehnix.vscode-tidymarkdown&ssr=false) to format md files from Roam Research
    - But it still has some issues in formatting fenced code blocks - it adds additional fences (```) when it encounters curly braces ({})
 - Another example - [Markdown-Formatter](https://github.com/quilicicf/markdown-formatter) - for understanding the logic
    - VS-Code extension - [Markdown spec Formatter](https://marketplace.visualstudio.com/items?itemName=quilicicf.markdown-spec-formatter)
    - [How it works](https://github.com/quilicicf/markdown-formatter#how-it-works):
        - It uses [remark](https://www.npmjs.com/package/remark) to parse the markdown and generate an AST.
        - Then [remark-stringify](https://www.npmjs.com/package/remark-stringify) to re-generate the string from the AST and apply the formatting rules to it.
        - Additionally, [mdast-util-toc](https://www.npmjs.com/package/mdast-util-toc) is used to generate a ToC.

