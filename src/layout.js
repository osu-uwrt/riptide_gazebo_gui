// Misc. Imports & Setup
const electron = require("electron")
const homeDir = require("electron").remote.app.getPath("home")
const path = require("path")

// Read JSON File Data
const fs = require("fs")
let rawdata = fs.readFileSync(path.join(homeDir, "osu-uwrt", "riptide_software", "src", "riptide_gazebo", "scripts", "params.json"))
let jsonData = JSON.parse(rawdata)
console.log(jsonData)

/* 
    Render stuff from JSON 
*/

// Iterate through each section
let root = document.getElementById("root")
for (var key in jsonData) {

    // Render Section Header
    let header = document.createElement("h1")
    header.textContent = jsonData[key].header
    root.appendChild(header)

    // Render individual section parts
    for (var field in jsonData[key]["fields"]) {

        // Field Name
        let fieldName = document.createElement("h2")
        fieldName.style.display = "inline"
        fieldName.textContent = jsonData[key]["fields"][field].name
        root.appendChild(fieldName)

        // Field Input
        let fieldName = getElementDisplay(jsonData[key]["fields"][field])
    }
}

/* 
Handles the input categories. Takes in a JSON object with:
- name: The actual thing that should be rendered on the page.
- type: What this function switches on.
- default: Default value that is filled in on initial program start.
- size (optional): In the case of array-of-* values, says how many should be input.
- options (optional): In the case of multi-select, gives the values for it.

Handles the following types:
- array-of-number: Renders <size> element inputs
- multi-select: Renders <options> in a multi-select menu
- number: Self-explanatory
- string: Self-explanatory
- props: Special stuff
*/
function getElementDisplay(json) {

}