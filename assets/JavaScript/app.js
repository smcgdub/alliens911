// Photo gallery JS
baguetteBox.run('.cards-gallery', {
  animation: 'slideIn'
});

// UFO Search Function
function callArchiSearch() {

  // countryLat = document.getElementById('lat').value;
  // countryLong = document.getElementById('long').value;

  let searchLocation = document.getElementById('location_search_input').value;
  let pwd = document.getElementById('pwd').value;
  let urlCoordinates = searchLocation;

  // let urlCoordinates = countryLat + '%2C' + countryLong;

  // search_location
  let urlParameters = "&search_range=10000&pwd=" + pwd + "&SearchType=freesearch" + "&keywords=ufo";

  // let urlCoordinates = 53.528680 + '%2C' + -2.123737;

  console.log(urlCoordinates);

  // window.open("http://localhost:8080/login?cid="+ myu +"&pwd="+ myp ,"MyTargetWindowName");
  window.open(
    "https://www.archiuk.com/cgi-bin/archi_new_search_engine.pl?search_location=" + urlCoordinates + urlParameters

    // "https://www.archiuk.com/cgi-bin/web-archi.pl?ARCHIFormFreeSearch=${urlCoordinates}&SearchType=freesearch&distance=10000"


    // "https://www.archiuk.com/placenames"
  );
}

// JS for hamburger icon toggling
// $(".navbar-toggler").click(function (event, c) {
//   $(event.target).addClass("disabled");
//   $(".navbar").toggleClass("navbar-blur"),
//     $(".nav-link").toggleClass("navbar-blue");
//   $(".navbar-brand").toggleClass("navbar-blue");
//   setTimeout(() => {
//     $(event.target).removeClass("disabled");
//   }, 500);
// })

// Load monthly subscription page
function chooseMonthlyPlan() {
  window.open("subscribe_m.html", "_self");
}

// Load annual subscription page
function chooseYearlyPlan() {
  window.open("subscribe_y.html", "_self");
}

// Get users current location
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var positionInfo = `${position.coords.latitude}, ${position.coords.longitude}`;
      document.getElementById("location_search_input").value = positionInfo;
    });
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}