/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	... 
	
	Part of final programming project 2016.
*/

// set canvas size
var container_width = 600;
var container_height = 300;

createScatterplot(dataset_scatter[1], "birth_rate");
createMap(dataset[1]);
createBarchart("PAK", dataset[1]);

// time slider
d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(2000).max(2012).value(2001).step(1)
.on("slide", function(evt, value) {
	Map.updateChoropleth(dataset[value - 2000]);
	// createBarchart(dataset[value])
	createScatterplot(dataset_scatter[value - 2000]);
}));

var slider = d3.select('#slider');