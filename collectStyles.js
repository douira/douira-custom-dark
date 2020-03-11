const fileName = process.argv.slice(2).join(" ")
const fs = require("fs")
const { tokenColors } = JSON.parse(
  fs
    .readFileSync(fileName)
    .toString()
    .replace(/,(\s*})/gm, "$1")
)
const styles = {}
tokenColors.forEach(
  ({ scope, settings: { foreground = "", fontStyle = "" } }) => {
    const style = `${fontStyle.toLowerCase()}_${foreground.toLowerCase()}`
    if (!scope instanceof Array) {
      scope = [scope]
    }
    styles[style] = (styles[style] || []).concat(scope)
  }
)
fs.writeFileSync(
  `collected-${fileName}`,
  JSON.stringify(
    {
      tokenColors: Object.entries(styles).map(([style, scopes]) => {
        const [fontStyle, foreground] = style.split("_")
        const settings = {}
        if (fontStyle) {
          settings.fontStyle = fontStyle
        }
        if (foreground) {
          settings.foreground = foreground
        }
        return {
          scope: scopes
            .map(scope => scope.split(","))
            .flat()
            .map(scope => scope.trim()),
          settings
        }
      })
    },
    null,
    2
  )
)
