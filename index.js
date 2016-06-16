/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	... 
	
	Part of final programming project 2016.
*/

// set container size
var container_width = 600;
var container_height = 300;
var barchartOn = 0;
var selectedYear = 1;
var selectedCountry = "PAK";

// wait for all documents in index.html to load, then start creating visuals
window.onload = function() {
	
	var totalData = [];
	var index;		
	var tempYear = [];
	
	dataset.forEach( function(year) {		
		index = 0;
		var tempArray = [];
		var countryCodes = Object.keys(year);
		
		for (var count in year){
			var tempVar = year[count];
			tempArray.push(countryCodes[index], tempVar.country_name, tempVar.female_in_research, tempVar.birth_rate, tempVar.expences_education);
			tempYear.push(tempArray);
			index += 1;
		};
		totalData.push(tempYear);
	});
	
	console.log(totalData);
	
	// initiate default visualizations
	createScatterplot(selectedYear);
	createMap(dataset[selectedYear]);
	createBarchart(selectedCountry, selectedYear);
	
	// initiate time slider
	createSlider();
};

function createSlider() {
	
	// D3 time slider
	d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(2000).max(2012).value(2001).step(1)
		.on("slide", function(evt, value) {
			selectedYear = value - 2000;
			
			// on slide event, update all visualizations for selected year
			d3.transition()
			.duration(500)
			.each(function() {
				Map.updateChoropleth(dataset[selectedYear]);
			});
			
			createScatterplot(selectedYear);
			
			if (barchartOn == 1) {
				createBarchart(selectedCountry, selectedYear);
			};
		}));
};