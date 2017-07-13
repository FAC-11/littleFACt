(function() {

  document.getElementById("from-to").addEventListener("submit", function(event) {
    event.preventDefault();
    var from = document.getElementById("from-to")[0].value
    var inputTo = document.getElementById("from-to")[1].value
    var to = document.getElementById("from-to")[1].value;

    if (from.indexOf('station') === -1) {
      from += "station";
    }
    if (to.indexOf('station') === -1) {
      to += "station";
    }
    // CODE FOR WIKI STATION-API PROBLEM
    //if (inputTo.indexOf('station') !== -1 ) {
    //    inputTo.replace(' station', "");
    // }
    // console.log(inputTo);


    tflAPI(tflURL(from,to), function (resultsToShow) {


       document.getElementById('duration').textContent = resultsToShow.journeys[0].duration;
       document.getElementById('tfl-results').style.display = 'block';


      var lineLeg = resultsToShow.journeys[0].legs;
      console.log(lineLeg);
      var linesNode = document.getElementById('lines');
      linesNode.innerHTML = "";
      lineLeg.forEach(function(line) {
        var newline = document.createElement('p');
        newline.textContent = line.routeOptions[0].name;
        linesNode.appendChild(newline);

      })

    })

    wikiApi(inputTo);
  })








})()
