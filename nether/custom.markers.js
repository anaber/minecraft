/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Ancient City Portal
        {
            x: 156,
            z: -368,
            description: "To Ancient City Base",
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
        },

        // Midway Portal
        {
            x: 7,
            z: -235,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "Midway Portal",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        // End City Portal
        {
            x: 100,
            z: -127,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "To End Portal City", 
            textColor: "red", 
            offsetX: 0,
            offsetY: 20, 
            font: "bold 50px Calibri,sans serif",
        },

        // first base
        {
            x: 12,
            z: 22,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "First Base", 
            textColor: "red", 
            offsetX: 0,
            offsetY: 20, 
            font: "bold 50px Calibri,sans serif",
        },

        // faraway
        {
            x: 405,
            z: 438,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "Faraway Portal", 
            textColor: "red", 
            offsetX: 0,
            offsetY: 20, 
            font: "bold 50px Calibri,sans serif",
        },

        // pale oaks
        {
            x: -1519,
            z: 350,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "Pale Oaks", 
            textColor: "red", 
            offsetX: 0,
            offsetY: 20, 
            font: "bold 50px Calibri,sans serif",
        },

        // pale oaks
        {
            x: 136,
            z: 402,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "Path Junction", 
            textColor: "red", 
            offsetX: 0,
            offsetY: 20, 
            font: "bold 50px Calibri,sans serif",
        },

        // pale oaks
        {
            x: 136,
            z: 126,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "Path Junction", 
            textColor: "red", 
            offsetX: 0,
            offsetY: 20, 
            font: "bold 50px Calibri,sans serif",
        },

        // pale oaks
        {
            x: 15,
            z: 126,
            image: "marker-icon.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.8,
            title: "Path Junction", 
            textColor: "red", 
            offsetX: 0,
            offsetY: 20, 
            font: "bold 50px Calibri,sans serif",
        },

        // add your markers here




        // do not delete the following two closing brackets
    ]
}
