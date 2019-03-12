//PART I - BUILD TABLE

// Assign the data from 'data.js' to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

// Use d3 to update each cell's text with UFO sighting values (date/time, city, state, country, shape, duration, comments)
tableData.forEach(function(ufoSighting) {
  // Step 1: Loop Through `data` and console.log each UFO sighting report object
  console.log(ufoSighting);
  
  // Step 2:  Use d3 to append one table row `tr` for each UFO sighting report object
  var row = tbody.append("tr");
 
  // Step 3:  Use `Object.entries` to console.log each UFO sighting report value
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);

    // Step 4: Use d3 to append 1 cell per UFO sighting report value 
    // Append a cell to the row for each value 
    // in the UFO sighting report object
    var cell = tbody.append("td");
   
    // Step 5: Use d3 to update each cell's text with
    // UFO sighting report values (datetime, city, state, country, shape, duration, comments) 
    cell.text(value);
    });

    // PART 2 - FILTER BY INPUT

    // Select the submit button for filtering data (filtered data)
    var submit = d3.select("#filter-btn");

    submit.on("click", function() {

      // Prevent the page from refreshing
      d3.event.preventDefault();
      // Remove existing table so filtered data shows at the top
      // d3.selectAll("td").remove();

      // Select the input element and get the raw HTML node
      var inputElementdatetime = d3.select("#datetime");
      var inputElementcity = d3.select("#city");
      var inputElementstate = d3.select("#state");
      var inputElementcountry = d3.select("#country");
      var inputElementshape = d3.select("#shape");

      // Get the value property of the input element and store in new variable
      var inputValuedatetime = inputElementdatetime.property("value");
      var inputValuecity = inputElementcity.property("value");
      var inputValuestate = inputElementstate.property("value");
      var inputValuecountry = inputElementcountry.property("value");
      var inputValueshape = inputElementshape.property("value");

      console.log(inputValuedatetime);
      console.log(inputValuecity);
      console.log(inputValuestate);
      console.log(inputValuecountry);
      console.log(inputValueshape);

        // Function to rebuild table using filtered data
        function filter(filteredData) {
          // Remove existing table so filtered data shows at the top
          d3.selectAll("td").remove();
          console.log("Search Results:", filteredData);
          // Build the new table
          // Use D3 to select the table body
          var tbody = d3.select("tbody");
          filteredData.forEach((filteredTable) => {
          //append one table row per sighting
            var row = tbody.append("tr");
            Object.entries(filteredTable).forEach(([key, value]) => {
              var cell = tbody.append("td");
              cell.text(value);
              });
            });    
          }
        
        // Filter the data for date/time
        if (inputValuedatetime) {

        console.log(inputValuedatetime);

        var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValuedatetime);
        filter(filteredData);
        console.log(filteredData); 
        } 

        // Filter data for city
        if (inputValuecity) {
        console.log(inputValuecity);
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.city === inputValuecity);
        filter(filteredData);
        console.log(filteredData);
        }

        // Filter data for state
        if (inputValuestate) {
        console.log(inputValuecity);
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.state === inputValuestate);
        filter(filteredData);
        console.log(filteredData);
        }

        // Filter data for country
        if (inputValuedatecountry) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.country === inputValuecountry);
        filter(filteredData);
        console.log(filteredData);
        }

        // Filter data for shape
        if (inputValueshape) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.shape === inputValueshape);
        filter(filteredData);
        console.log(filteredData);
        }
    }); 

    // BONUS: Refactor to use Arrow Functions!
/*
data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
*/

});