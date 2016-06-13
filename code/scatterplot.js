/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

function createScatterplot(dataset) {

	// set canvas size
	var canvas_width = 600;
	var canvas_height = 300;

	// get graph element
	var base = d3.select("#graph");

	// set margin for plot
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = canvas_width - margin.left - margin.right,
		height = canvas_height - margin.top - margin.bottom;

	// scale x and y to canvas
	var x = d3.scale.linear()
		.range([0, width]);

	var y = d3.scale.linear()
		.range([height, 0]);

	// setup axes
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(12);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");
		
	var chart = base.append('svg')
		.attr("width", canvas_width)
		.attr("height", canvas_height)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		
	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	chart.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", -45)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Y variable");
	
// load scatterplot-specific data	

	x.domain([0, 100]).nice();
	y.domain([0, 100]).nice();
	
/* 	Object.keys(dataset).forEach(function(d) {
		console.log(dataset[d].female_in_research)
		d.x = +d[1];
		d.y = +d[2];
		d.country_code = d[0];
	}); */
	
	console.log("here!")
	
	chart.selectAll("circle")
		.data(dataset)
			.enter()
			.append("circle")
			.attr("r", 3.5)
			.attr("cx", function(d) { console.log("got it!"); return 5; })
			.attr("cy", function(d) {return 6; });
	



};

