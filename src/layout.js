// Misc. Imports & Setup
const electron = require("electron");
const homeDir = require("electron").remote.app.getPath("home");
const path = require("path");

// Read JSON File Data
const fs = require("fs");
let rawdata = fs.readFileSync(path.join(homeDir, "osu-uwrt", "riptide_software", "src", "riptide_gazebo", "scripts", "params.json"));
let jsonData = JSON.parse(rawdata);
console.log(jsonData);

/* 
    Render stuff from JSON 
*/

// Iterate through each section
let root = document.getElementById("root");
for (var key in jsonData) {

    // Render Section Header
    let header = document.createElement("h1");
    header.textContent = jsonData[key].header;
    root.appendChild(header);

    // Render individual section parts
    for (var field in jsonData[key]["fields"]) {

        // Field Name
        let fieldName = document.createElement("p");
        fieldName.style.display = "inline";
        fieldName.textContent = jsonData[key]["fields"][field].name + ":";
        root.appendChild(fieldName);

        // Field Input
        let fieldInput = getElementDisplay(field, jsonData[key]["fields"][field]);
        fieldInput.style.display = "inline";
        if (fieldInput != null)
            root.appendChild(fieldInput);

        root.appendChild(document.createElement("br"));
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
function getElementDisplay(id, json) {
    console.log("id: " + id);
    let parent = document.createElement("div");
    let input;
    switch (json.type) {
        case "string":
            input = document.createElement("input");
            input.value = json.default;
            input.id = id;
            parent.appendChild(input);
            break;
        case "number":
            input = document.createElement("input");
            input.value = json.default;
            input.id = id;
            parent.appendChild(input);
            break;
        case "array-of-number": 
            for (let i = 0; i < json.size; i++) {
                input = document.createElement("input");
                input.value = json.default[i];
                input.id = "" + id + i;
                parent.appendChild(input);
            }
            break;
        case "multi-select": 
            let select = document.createElement("select");
            for (let i = 0; i < json.options.length; i++) {
                let option = document.createElement("option");
                option.value = json.options[i];
                option.textContent = json.options[i];
                select.appendChild(option);
            }
            select.id = id;
            parent.appendChild(select);
            break;
        case "props":
            for (let prop in json.props) {
                parent.appendChild(document.createElement("br"));
                parent.appendChild(document.createElement("br"));
                let header = document.createElement("h2");
                header.textContent = json.props[prop].name;
                header.style.display = "inline";
                header.style.marginTop = "5px";
                parent.appendChild(header);
                for (let i = 0; i < json.props[prop].default.length; i++) { // We allow multiple instances of props
                    let propNumber = document.createElement("h5");
                    propNumber.style.display = "inline";
                    propNumber.textContent = (i + 1) + ":";
                    parent.appendChild(document.createElement("br"));
                    parent.appendChild(propNumber);
                    for (let j = 0; j < 6; j++) {
                        let posScalar = document.createElement("input");
                        posScalar.value = json.props[prop].default[i][j];
                        posScalar.id = "" + id + prop + i + j;
                        parent.appendChild(posScalar);
                    }
                }
            }
            break;
        default: 
            console.error("Invalid Type!");
            return null;
    }
    return parent;
}