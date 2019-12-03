// Back end
function Location(placeName, landmark, year, favoriteRestaurant, nextTime) {
  this.placeName = placeName;
  this.landmark = landmark;
  this.year = year;
  this.favoriteRestaurant = favoriteRestaurant;
  this.nextTime = nextTime;
}

Location.prototype.nextVisit = function() {
  return "Next time: " + this.nextTime;
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

    $("ul#result").append("<div class = 'location'> <li>" + newLocation.placeName + "</li> <div class = 'details'> <li>" + newLocation.landmark + "</li> <li>" + newLocation.year + "</li> <li>" + newLocation.favoriteRestaurant + "</li> <li>" + newLocation.nextVisit() + "</li> </div> </div>");

    console.log(newLocation);
    $(".location").click(function() {
      $(this).children(".details").slideToggle();
    })
  })
})
