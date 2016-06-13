/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

function createBarchart(countrycode, data = dataset[11]){
	// remove previous bar chart
	d3.select("#barchart").selectAll("*").remove();

	if (!(countrycode in data)) {
		console.log("not here");
		createDefault;
		return;
	};

	var dataArray = data[countrycode]["barchart"];
	console.log(dataArray);

	// define margin, range and scale values
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = container_width - margin.left - margin.right,
		height = container_height - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
		.domain([0, 60])
		.range([height, 0]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10, "mm");

	var chart = d3.select("#barchart").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// set y domain
	y.domain([0, 100]).nice();

	// define width of bar
	var barWidth = width / dataArray.length;

	// create x-axis
	chart.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
			.append("text")
			.attr("transform", "rotate(60)");

	chart.append("g")
		.attr("class", "axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", -40)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("% of total amount R&D staff");

		// add data and transform to upright chart
	var bar = chart.selectAll("g")
		.data(dataArray)
		.enter().append("rect")
			.attr("y", function(d) { return height - y(d[1]); })
			.attr("height", height)
			.attr("width", function(d, i) { return i * barWidth + 2})
			.append("title");
	
	
	// add data and transform to upright chart
	var bar = chart.selectAll("g")
		.data(dataArray)
		.enter().append("g")
			.attr("transform", function(d, i) { return "translate(" + i * barWidth + 2 + ",0)"; });
			
			
	// give text to each bar
	bar.append("text")
		.attr("x", barWidth)
		.attr("y", height - margin.bottom)
		.attr("dy", ".75em")
		.text(function(d) { return d[0]; });


};

function createDefault() {
	var chart = d3.select("#barchart").append("div").html("No data for this country");
};