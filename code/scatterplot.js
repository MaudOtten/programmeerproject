/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

function createScatterplot(data_index, variable = "birth_rate") {
	
	d3.select("#graph").selectAll("*").remove();
	
	if (variable == "birth_rate") {
		y_index = 3;
		y_domain = 8;
		y_name = "Birth Rate (child per woman)"
	};
	if (variable == "expences_education") {
		y_index = 4;
		y_domain = 40;
		y_name = "Expences on education (% of total)"
	};
	
	// get graph element
	var base = d3.select("#graph");

	// set margin for plot
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = container_width - margin.left - margin.right,
		height = container_height - margin.top - margin.bottom;

	// scale x and y to canvas
	var x = d3.scale.linear()
		.domain([0, 55])
		.range([0, width]);

	var y = d3.scale.linear()
		.domain([0, y_domain])
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
		.attr("width", container_width)
		.attr("height", container_height)
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
			.text(y_name);
	
	// select data
	var data = dataset_scatter[data_index];
	
	chart.selectAll("circle")
		.data(data)
			.enter()
			.append("circle")
			.attr("class", "dot")
			.attr("r", 5)
			.attr("cx", function(d) {return x(d[2]); })
			.attr("cy", function(d) {return y(d[y_index]); })
			.style("display", function(d) { return d[2] == 0.0 || d[3] == 0.0  || d[4] == 0.0 ? "none" : null; });
	
	// chart.selectAll("circle").on("mouseover", console.log("heyo"));
	
};

