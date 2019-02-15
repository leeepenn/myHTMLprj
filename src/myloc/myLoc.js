window.onload = getMyLocation;
function getMyLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation);
  } else {
    alert("no location service")
  }
}
function displayLocation (position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var div = document.getElementById("location");
  div.innerHTML = "you are at latitude: " + latitude + ",longitude: " + longitude;

  showMap(position.coords);
}
var map;
function showMap (coords) {
  var googleLatAndLong = new google.maps.LatLng(coors.latitude, coords.longitude);
  var mapOptions = {
    szoom=10,
    center: googleLatAndLong,
    mapTypeId: google.maps.mapTypeId.ROADMAP
  };
  var mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);
}