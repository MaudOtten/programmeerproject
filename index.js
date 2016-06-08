/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	... 
	
	Part of final programming project 2016.
*/

// createScatterplot();
createMap(dataset[1]);
createBarchart();

// time slider
d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(0).max(12).value(1).step(1)
.on("slide", function(evt, value) {
	console.log("test");
	Map.updateChoropleth(dataset[value]);
}));