/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	... 
	
	Part of final programming project 2016.
*/

// createScatterplot();
createMap(dataset[1]);
createBarchart("PAK", dataset[11]);

// time slider
d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(0).max(12).value(1).step(1)
.on("slide", function(evt, value) {
	Map.updateChoropleth(dataset[value]);
	createBarchart(dataset[value])
}));

var slider = d3.select('#slider');