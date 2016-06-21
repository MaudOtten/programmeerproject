/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	This file is called upon by index.html. First it parses data from data_all.js (containing a global dataset variable 
	'dataset') and calls on createScatterplot, createBarchart and createMap to create visualizations on loading of window.
	Also included is function createSlider to create a time slider with functions to update visualizations accordingly.
	
	Includes libraries D3, D3.slider, Datamaps, Topojson and D3.tip.v0.6.3.
	
	Part of final programming project 2016.
*/

// set container size
var container_width = 600;
var container_height = 300;

// keep track of scatterplot y-variable, selected country and year
var selectedYear = 4;
var selectedCountry = "none";

// global dataset and y-variable for scatterplot
var scatterData = [];
var variable;


/*
	wait for all documents included in index.html to load, then parse dataset 
	to create scatterplot data. Scatterplot, barchart, time slider and world map 
	are drawn subsequently
*/
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
	variable = "birth_rate";
	
	// initiate default visualizations
	createScatterplot(selectedYear, variable);
	createMap(dataset[selectedYear]);
	createBarchart(selectedCountry, selectedYear);
	d3.select('#barchart').select('svg').append("g").attr("class", "barTitle")
	.append("text")
		.style("font-size", "14px")
		.style("text-transform", "uppercase")
		.style("fontcolor", "firebrick")
		.attr("x", container_width / 2)
		.attr("y", 40)
		.text('Click a dot or country to look at country-specific data!');
	
	// initiate time slider
	createSlider();
};

/*
	draw a time slider to select year in dataset, adjust visualizations accordingly
*/
function createSlider() {
	// call d3 time slider library
	d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(2000).max(2012).value(2004).step(1)
		.on("slide", function(evt, value) {
			// on slide event, update all visualizations for selected year
			selectedYear = value - 2000;
			
			// update map using updateChoropleth with smooth transition
			d3.transition()
			.duration(500)
			.each(function() {
				Map.updateChoropleth(dataset[selectedYear]);
			});
			
			createScatterplot(selectedYear);
			createBarchart(selectedCountry, selectedYear);
		}));
};