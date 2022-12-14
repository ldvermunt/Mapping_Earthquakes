// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.  This particulat setup is for the geographic center of tha USA
//2 examples of how to write the code are below, first one hashed out.

let map = L.map('mapid').setView([34.0522, -118.2437], 14);
//let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });

//Add a marker to the map
//var marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle marker to the map - Black border, yellow inside, 300 meter radius.
let marker = L.circle([34.0522, -118.2437],{
    radius: 300,
    color: "Black",
    fillColor: "yellow"
}).addTo(map);

// We create the tile layer that will be the background of our map.  
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);