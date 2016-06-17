/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

var chart;

function createBarchart(countrycode = selectedCountry, data_index = selectedYear){
	// remove previous bar chart
	d3.select("#barchart").selectAll("*").remove();
	
	var labels = [["Nature"], ["T & E"], ["Agriculture"], ["Medical"], ["Social"], ["Humanities"], ["Not specified"]];
	
	// define margin, range and scale values
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = container_width - margin.left - margin.right,
		height = container_height - margin.top - margin.bottom;
		
	// define width of bar
	var barWidth = width / 14;

	var x = d3.scale.ordinal()
		.range([0, width]);

	var y = d3.scale.linear()
		.domain([0, 80])
		.range([height, 0]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(10);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(7);

	chart = d3.select("#barchart").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// append x-axis
	chart.append("g")
		.attr("class", "axis")
		.attr("id", "x-axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);
	
	chart.select("#x-axis").selectAll("text")
		.data(labels)
	.enter().append("text")
		.attr("x", function(d, i) {return i * 80 + 20;})
		.attr("y", 10)
		.attr("dy", ".71em")
		.attr("text-anchor", "start")
		.text(function(d) {return d});
	
	// append y-axis
	chart.append("g")
		.attr("class", "axis")
		.attr("id", "y-axis")
		.call(yAxis)
	.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -40)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("% of total amount (female) R&D staff");

	
	if (!(countrycode in dataset[data_index])) {
		createDefaultBarchart();
		return;
	};
	
	var dataBarchart = dataset[data_index][countrycode]["barchart"];
	
	if (checkData(dataBarchart)) {
	// add data and transform to upright chart
	bar = chart.selectAll("bar")
		.data(dataBarchart)
	.enter().append("rect")
		.attr("class", "bar")
		.attr("x", function(d, i) { return i * barWidth + 3})
		.attr("width", barWidth - 6)
		.attr("y", function(d) { return d[1] == 0 ? 150 : y(d[1]); })
		.attr("height", function(d) { return d[1] == 0 ? 80 :  height - y(d[1]); })
		.style("fill", function(d, i) { 
			if (d[1] == 0) {return "none"}
			if (i % 2 == 0 || i == 0) 
				{return "#32CD32"}
			else
				{return "#7C7C7C"}
		});
	};
};

function checkData(data) {
	for (var i = 0; i < 14; i++) {
		if (data[i][1] != 0) {
			return true;
		};
	};
	
	createDefaultBarchart();
};

function createDefaultBarchart() {
	
	d3.select("div#barchart").select("g")
	.append("text")
	.attr("x", container_width / 3)
	.attr("y", container_height / 2)
	.style("font-size", "20px")
	.style("text-transform", "uppercase")
	.style("text-decoration", "underline")
	.text("No data");
};

	
/* 	.append("title")
		.attr("class", "bartitle")
		.text( function(d, i) { 
			var p = 0;
			if (i % 2 == 0 || i == 0) 
				{p = i / 2;}
			else
				{p = (i - 1) / 2;}
			return labels[p] + ": " + d[1] + "%"; 
		}); */