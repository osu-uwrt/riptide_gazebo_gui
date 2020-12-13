// Misc. Imports
const electron = require("electron")
const homeDir = require("electron").remote.app.getPath("home")

// Path Reading
const path = require("path")
console.log("homeDir: " + homeDir)

// Read JSON File Data
const fs = require("fs")
let rawdata = fs.readFileSync(path.join(homeDir, "osu-uwrt", "riptide_software", "src", "riptide_gazebo", "scripts", "params.json"))
let jsonData = JSON.parse(rawdata)
console.log(jsonData)