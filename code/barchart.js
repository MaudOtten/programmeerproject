/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

var chart;

function createBarchart(countrycode, data_index){
	// remove previous bar chart
	d3.select("#barchart").selectAll("*").remove();
	
	// labels for x-axis
	var labels = [["Nature Sc"], ["T & E *"], ["Agriculture"], ["Medical Sc"], ["Social Sc"], ["Humanities"], ["N.S."]];
	
	// define margin, range and scale values
	var margin = {top: 20, right: 20, bottom: 40, left: 50},
		width = container_width - margin.left - margin.right,
		height = container_height - margin.top - margin.bottom;
		
	// define width of bars
	var barWidth = width / 14;
	
	// set x, y and scales
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
	
	// define svg for chart
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
	
	// append labels on x-axis
	chart.select("#x-axis").selectAll("text")
		.data(labels)
	.enter().append("text")
		.attr("x", function(d, i) {return i * 75 + 40;})
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

	// check if chosen country is in dataset
	if (!(countrycode in dataset[data_index])) {
		// if not, create 'No data' default chart and exit function
		createDefaultBarchart();
		return;
	};
	
	// create tooltip for bars
	var tip_female = d3.tip()
		.attr('class', 'barTip')
		.offset([-10, 0])
		.html(function(d, i) {
			return "<strong>Female researchers in this field:</strong><br/><strong>" 
			+ d[1] + "%</strong>";
		});
	
	// create tooltip for bars
	var tip_total = d3.tip()
		.attr('class', 'barTip')
		.offset([-10, 0])
		.html(function(d) {
			return "<strong>This field makes up</strong><br/><strong>" 
			+ d[1] + "% of the scientific community</strong>";
		});
	
	// get data of chosen country
	var dataBarchart = dataset[data_index][countrycode]["barchart"];
	
	// Set a title for the chart with country name
	chart.append("g").attr("class", "barTitle")
	.append("text")
		.style("font-size", "20px")
		.style("text-transform", "uppercase")
		.style("text-decoration", "underline")
		.attr("x", container_width / 2.5)
		.attr("y", 0)
		.text(dataset[data_index][countrycode].country_name.toString());
	
	// check if data contains only nulls, if not create bar chart
	if (checkData(dataBarchart)) {
		
		chart.call(tip_female);
		chart.call(tip_total);
		
		// add data and transform to upright chart. If data is zero (no data), append empty bar
		bar = chart.selectAll("bar")
			.data(dataBarchart)
		.enter().append("rect")
			.attr("class", function(d) { return d[1] == 0 ? "nodata" : "bar"})
			.attr("x", function(d, i) { 
				if (i % 2 == 0 || i == 0) 
					{return i * barWidth + 7}
				else
					{return  i * barWidth + 2}
			})
			.attr("width", barWidth - 6)
			.attr("y", function(d) { return d[1] == 0 ? 150 : y(d[1]); })
			.attr("height", function(d) { return d[1] == 0 ? 90 :  height - y(d[1]); })
			.style("fill", function(d, i) { 
				if (d[1] == 0) { return "none"}
				if (i % 2 == 0 || i == 0) 
					{return "#6c399e"}
				else
					{return "#5F9F9F"}
			})
			.on('mouseover', function(d, i) { if (d[1] == 0) {return null}; return (i % 2 == 0 || i == 0) ? tip_female.show(d) : tip_total.show(d)})
			.on('mouseout', function(d, i) { if (d[1] == 0) {return null}; return (i % 2 == 0 || i == 0) ? tip_female.hide(d) : tip_total.hide(d)});				
	};
};

function checkData(data) {
	for (var i = 0; i < 14; i++) {
		if (data[i][1] != 0) {
			return true;
		};
	};
	
	createDefaultBarchart(data);
};

function createDefaultBarchart() {
	
	d3.select("div#barchart").select("g")
	.append("text")
	.attr("x", container_width / 2.5)
	.attr("y", container_height / 2.5)
	.style("font-size", "20px")
	.style("text-transform", "uppercase")
	.text("No data");
};