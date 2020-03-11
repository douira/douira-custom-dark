# douira custom dark theme

This theme mostly only sets code highlighting colors and works fine with the default VSCode dark UI theme. The few UI colors that it does set are the status bar (to a less agressive color)
The highlighting is based on the popular *One Dark Pro* theme with some customizations and modifications.

The `collectStyles.js` script takes the theme file given as the only argument and generates a `collected-<file name>` file in which the scopes with identical styles are combined for easier editing.

### TODO
- Make the object properties of exported objects white like other object attributes.
- make the quotes around html strings be green while vue attributes should have white quotes
- make the colon in front of the vue attributes cyan (the operator color)

Use this definition of the javascript grammar for reference: 
[JavaScript.tmLanguage.json](https://github.com/microsoft/vscode/blob/master/extensions/javascript/syntaxes/JavaScript.tmLanguage.json)
