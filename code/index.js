/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

createMap(dataset[5]);
createBarchart();

// time slider
d3.select('#slider').call(d3.slider().axis(d3.svg.axis().ticks(13)).min(2000).max(2012).value(2001).step(1))
.on("slide", function(evt, value) {
	createMap(dataset[0]);
});