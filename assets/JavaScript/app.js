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
$(".navbar-toggler").click(function (event, c) {
  $(event.target).addClass("disabled");
  $(".navbar").toggleClass("navbar-yellow"),
    $(".nav-link").toggleClass("navbar-yellow");
  $(".navbar-brand").toggleClass("navbar-yellow");
  setTimeout(() => {
    $(event.target).removeClass("disabled");
  }, 500);
})