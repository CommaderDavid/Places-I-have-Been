// Back end
function Location(placeName, landmark, year, favoriteRestaurant, nextTime) {
  this.placeName = placeName;
  this.landmark = landmark;
  this.year = year;
  this.favoriteRestaurant = favoriteRestaurant;
  this.nextTime = nextTime;
}

// Front end
$(document).ready(function() {
  $("form#addPlace").submit(function(e) {
    event.preventDefault();
    var placeName = $("#place").val();
    var landmark = $("#landmark").val();
    var year = $("#year").val();
    var favoriteRestaurant = $("#restaurant").val();
    var nextTime = $("#nextTime").val();

    var newLocation = new Location(placeName, landmark, year, favoriteRestaurant, nextTime);
    console.log(newLocation);
  })
})
