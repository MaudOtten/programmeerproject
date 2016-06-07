/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/


function createBarchart(countrycode){
	// remove previous bar chart
	d3.select("#barchart").selectAll("*").remove();

	// define margin, range and scale values
	var margin = {top: 20, right: 20, bottom: 30, left: 60},
	width = 960 - margin.left - margin.right,
	height = 450 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
	.range([height, 0]);

	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom");

	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(10, "mm");
	
	var data = [28, 30, 40];

	// define width and height
	var width = 200,
	height = 150;

	// set x and y
	var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
	.range([height, 0]);

	// give values to chart
	var chart = d3.select("#barchart")
	.attr("width", width)
	.attr("height", height);

	// set y domain
	y.domain([0, d3.max(data, function(d) { return d; })]);
	
	// define width of bar
	var barWidth = width / data.length;
	
	// add data and transform to upright chart
	var bar = chart.selectAll("g")
	.data(data)
		.enter().append("g")
		.attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });
	
	// create x-axis
	chart.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);
	
	// append rect for each value
	bar.append("rect")
		.attr("y", function(d) { return y(d); })
		.attr("height", function(d) { return height - y(d); })
		.attr("width", barWidth - 5)
		.append("title");
	
	console.log("bar appended")
	
	// give text to each bar
	bar.append("text")
		.attr("x", barWidth / 2)
		.attr("y", function(d) { return y(d) + 3; })
		.attr("dy", ".75em")
		.text(function(d) { return d; });
		
	console.log(countrycode)


};