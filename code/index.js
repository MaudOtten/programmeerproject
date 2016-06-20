/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	... 
	
	Part of final programming project 2016.
*/

// set container size
var container_width = 600;
var container_height = 300;

// keep track of scatterplot y-variable, selected country and year
var selectedYear = 4;
var selectedCountry = "none";

// global dataset for scatterplot
var scatterData = [];

// wait for all documents in index.html to load, then parse dataset to create scatterplot data
window.onload = function() {
	
	// set arrays and values for scatterdata
	var tempYear = [];
	var index;
	
	// get data for scatterplot per year in dataset
	dataset.forEach( function(year) {		
		index = 0;
		tempYear = [];
		
		// get keys (countrycodes) to add to scatterdata
		var countryCodes = Object.keys(year);
		
		// loop per object containing data for one country
		for (var count in year){
			// get data on current country
			var tempVar = year[count];
			
			// push to temp array
			tempYear.push([countryCodes[index], tempVar.country_name, tempVar.female_in_research, tempVar.birth_rate, tempVar.expences_education, tempVar.fillKey]);
			
			index += 1;
		};
		
		//push year data to scatterData
		scatterData.push(tempYear);
	});
	
	// set y-variable scatterplot to Birth rate as default 
	var variable = "birth_rate";
	
	// initiate default visualizations
	createScatterplot(selectedYear, variable);
	createMap(dataset[selectedYear]);
	createBarchart(selectedCountry, selectedYear);
	
	// initiate time slider
	createSlider();
};

function createSlider() {
	
	// D3 time slider
	d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(2000).max(2012).value(2004).step(1)
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