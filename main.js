var marker = "";
var map = "";
function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
    marker = new google.maps.Marker({position: uluru, map: map});
  }

function changeMarkerPosition() {
    var latlng = new google.maps.LatLng({lat: 40.71427, lng: -74.00597});
    map.setCenter(latlng);
    marker.setPosition(latlng);
 }
function changeMarkerPosition2() {
    var latlng = new google.maps.LatLng({lat: 41.8756, lng: -87.6244});
    map.setCenter(latlng);
    marker.setPosition(latlng);
 }
function changeMarkerPosition3() {
    var latlng = new google.maps.LatLng({lat: 37.229564, lng: -120.047533});
    map.setCenter(latlng);
    marker.setPosition(latlng);
 }




// var map = "";
// function newyork(){
//   map.setCenter({lat: 40.71427, lng: -74.00597});
//   marker
// }




//   var marker = new google.maps.Marker({
//     position: {lat: 55.760186, lng: 37.618711},
//     map: map,
//     title: 'Наш маркер: Большой театр'
// });