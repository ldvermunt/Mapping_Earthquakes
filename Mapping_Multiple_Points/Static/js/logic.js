// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.  This particulat setup is for the geographic center of tha USA
//2 examples of how to write the code are below, first one hashed out.

let map = L.map('mapid').setView([34.0522, -118.2437], 5);
//let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });


// Get data from cities.js (adjacent folder)
let cityData = cities;

  //Loop through the cities array (in adjacent folder) and log them to the console
  cityData.forEach(function(city) {
    console.log(city)

   //add a variable for city.populaiton to subtract 200000 people (per skill drill)
   
    var newpop = city.population-200000
  
 //Add a marker for each cities location.  Tie city population to circle marker size.  Add a popup for population and city name.


 L.circleMarker(city.location,
    {radius: city.population/100000,
    color: "yellow"
})
  .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " + newpop.toLocaleString() + "</h3>")
    .addTo(map);
  });





// We create the tile layer that will be the background of our map.  
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);