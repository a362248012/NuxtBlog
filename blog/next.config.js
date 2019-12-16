const witCss = require("@zeit/next-css")

if (typeof require !== "undefind") {
    require.extensions['.css']=file=>{}
}

module.exports = witCss({})