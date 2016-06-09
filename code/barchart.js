/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

var defaultData;
var defaultCountrycode;

function createBarchart(countrycode = defaultCountrycode, data = defaultData){
	// remove previous bar chart
	d3.select("#barchart").selectAll("*").remove();
	
	defaultCountrycode = countrycode;
	defaultData = data;
	
	var dataArray = data[countrycode]["barchart"];
	
	var canvas_width = 600;
	var canvas_height = 300;
	
	// define margin, range and scale values
	var margin = {top: 20, right: 20, bottom: 50, left: 100},
	width = canvas_width - margin.left - margin.right,
	height = canvas_height - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
	.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
	.range([height, 0]);

	var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")
	.ticks(14, "Category");

	var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(10, "mm");

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
	y.domain([0, d3.max(dataArray, function(d) { console.log(d[1]); return d[1]; })]);
	
	// define width of bar
	var barWidth = width / dataArray.length;
	
	// add data and transform to upright chart
	var bar = chart.selectAll("g")
	.data(dataArray)
		.enter().append("g")
		.attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });
	
	// create x-axis
	chart.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);
	
	  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("%");
	
	// append rect for each value
	bar.append("rect")
		.attr("y", function(d) { return d[1]; })
		.attr("height", function(d) { return height - d[1]; })
		.attr("width", barWidth - 5)
		.append("title");

	
	// give text to each bar
	bar.append("text")
		.attr("x", barWidth)
		.attr("y", height - margin.bottom)
		.attr("dy", ".75em")
		.text(function(d) { return d[0]; });


};