/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	... 
	
	Part of final programming project 2016.
*/

// set container size
var container_width = 600;
var container_height = 300;

// wait for all documents in index.html to load, then start creating visuals
window.onload = function() {
	// initiate default visualizations
	createScatterplot(1);
	createMap(dataset[1]);
	createBarchart("PAK", 1);
	
	// initiate time slider
	createSlider;
};

function createSlider() {
	// D3 time slider
	d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(2000).max(2012).value(2001).step(1)
		.on("slide", function(evt, value) {
			// on slide event, update all visualizations for selected year
			Map.updateChoropleth(dataset[value - 2000]);
			createBarchart(value);
			createScatterplot(dataset_scatter[value - 2000]);
		}));
};