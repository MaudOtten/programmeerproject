/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	... 
	
	Part of final programming project 2016.
*/

// set container size
var container_width = 600;
var container_height = 300;

// keep track of selected country and year
var selectedYear = 1;
var selectedCountry = "PAK";

// global dataset for scatterplot
var totalData = [];

// wait for all documents in index.html to load, then parse dataset to create scatterplot data
window.onload = function() {
	
	// set arrays and values for iteration
	var tempYear = [];
	var index;
	
	// loop per year of total dataset
	dataset.forEach( function(year) {		
		index = 0;
		tempYear = [];
		
		// get keys (countrycodes) to add to data
		var countryCodes = Object.keys(year);
		
		// loop per object containing data for one country
		for (var count in year){
			// get data on current country
			var tempVar = year[count];
			
			// push 
			tempYear.push([countryCodes[index], tempVar.country_name, tempVar.female_in_research, tempVar.birth_rate, tempVar.expences_education]);
			
			index += 1;
		};
		totalData.push(tempYear);
	});
	
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
			createBarchart(selectedCountry, selectedYear);
		}));
};