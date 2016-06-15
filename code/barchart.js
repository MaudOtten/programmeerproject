/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

function createBarchart(countrycode, data_index = 1){
	// remove previous bar chart
	d3.select("#barchart").selectAll("*").remove();
	
	var labels = ["Female", "Male", "Female", "something", "2", "3", "4"];
	
	// define margin, range and scale values
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = container_width - margin.left - margin.right,
		height = container_height - margin.top - margin.bottom;
		
	// define width of bar
	var barWidth = width / 14;

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
		.domain([0, 60])
		.range([height, 0]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(10);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(13);

	var chart = d3.select("#barchart").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// append x-axis
	chart.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);
	
	// append y-axis
	chart.append("g")
		.attr("class", "axis")
		.call(yAxis)
	.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -40)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("% of total amount R&D staff");

	chart.selectAll("text")
		.data(labels).enter()
		.append("text")
		.attr("y", height + 20)
		.attr("x", function(d, i) { console.log("here"); return i * barWidth + i * 3 + 5})
		.attr("dy", ".35em")
		.attr("transform", "rotate(90)")
		.style("text-anchor", "start")
		.text(function(d) { return d});
		
	if (!(countrycode in dataset[data_index])) {
		console.log(countrycode);
		createDefaultBarchart();
		return;
	}
	else {
		
		var dataBarchart = dataset[data_index][countrycode]["barchart"];	
		// console.log(dataBarchart);		
		
		// console.log(barWidth);
		
		// add data and transform to upright chart
		var bar = chart.selectAll("bar")
			.data(dataBarchart)
		.enter().append("rect")
			.attr("x", function(d, i) { return i * barWidth + i * 3 + 5})
			.attr("width", barWidth)
			.attr("y", function(d) { return y(d[1]); })
			.attr("height", function(d) { return height - y(d[1]); })
		.append("title")
			.attr("class", "bartitle")
			.text(function(d, i) { return labels[i % 7] + ": " + d[1] + "%"; });
		};

};

function createDefaultBarchart() {
	console.log("duuuh");
	d3.select("div#barchart").append("div").append("p").html("No data for this country");
};