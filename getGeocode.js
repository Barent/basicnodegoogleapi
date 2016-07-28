var GoogleMapsAPI = require('googlemaps');
var fs = require('fs');

var publicConfig = {
  key: 'AIzaSyAX0eVODPBRtn77pmT5sOzWocd92fR3LfQ',
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             true // use https
  //proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
};
var gmAPI = new GoogleMapsAPI(publicConfig);

// geocode API
var geocodeParams = {
  "address":    "932 Brown Rock drive, New Braunfels, TX"
};

gmAPI.geocode(geocodeParams, function(err, result){
  console.log(result.results[0].geometry.location.lat + " " + result.results[0].geometry.location.lng);
  var lat = result.results[0].geometry.location.lat;
  var long = result.results[0].geometry.location.lng;

  fs.writeFile("/home/barent/MiscScripts/geocodeutil/test.txt", lat + "," + long, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  }); 

});
