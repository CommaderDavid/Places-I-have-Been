// Back end
function Location(placeName) {//landmarks, year, favoriteRestaurant, nextTime) {
  this.placeName = placeName;
  // this.landmarks = landmarks;
  // this.year = year;
  // this.favoriteRestaurant = favoriteRestaurant;
  // this.nextTime = nextTime;
  // console.log(placeName, landmarks, year, favoriteRestaurant, nextTime);
}

// Front end
$(document).ready(function() {
  $("form#addPlace").submit(function(e) {
    event.preventDefault();
    var placeName = $("#place").val();
    var newLocation = new Location(placeName);
    console.log(newLocation);
  })
})
