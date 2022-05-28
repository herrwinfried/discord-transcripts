/*"postbuild": "run-script-os",
"postbuild:win32": "copy .\\src\\template.html .\\dist\\template.html",
"postbuild:darwin:linux": "cp ./src/template.html ./dist/template.html",
"postbuild:default": "echo 'This will run on any platform that does not have its own script'",
"heroku-postbuild": "cp ./src/template.html ./dist/template.html",*/

const os = require("os");
const fs = require("fs")
const fse = require("fs-extra")
    fse.copy('./src/template.html', './dist/template.html')
    .then(() => console.log('success!'))
    .catch(err => console.error(err))
