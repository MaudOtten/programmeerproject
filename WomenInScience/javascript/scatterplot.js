/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	This file contains a function to create a scatterplot on data from selected year. Y-variable is adjustable 
	through button click (buttons in html file). 
	Dots in plot show tooltip on hover, and create a bar chart for the respective country on click. 
	
	Part of final programming project 2016.
*/


/*
	draw scatterplot for selected year with selected y-variable, dots with click-function and hover info
*/
function createScatterplot(data_index, variable) {
	
	// remove current graph
	d3.select("#graph").selectAll("*").remove();
	
	// check which y-variable is selected, adjust y index, domain and name accordingly
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
	var margin = {top: 20, right: 20, bottom: 40, left: 50},
		width = container_width - margin.left - margin.right,
		height = container_height - margin.top - margin.bottom;

	// scale x and y to canvas
	var x = d3.scale.linear()
		.domain([0, 60])
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
	
	// append svg
	var chart = base.append('svg')
		.attr("width", container_width)
		.attr("height", container_height)
		.style("position", "relative")
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	// append x-axis
	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.append("text")
			.attr("y", 25)
			.attr("x", width - margin.right)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.style("text-decoration", "underline")
			.text("Female researchers (% of total)");

	// append y-axis
	chart.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", -45)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text(y_name);
			
	// set tooltip with custom info, using d3.tip.v0.6.3 library
	var tip = d3.tip()
		.attr('class', 'toolTip')
		.offset([-10, 0])
		.html(function(d) {
			return "<strong>" + d[1] + ":</strong><br/><span style='color: rgb(189,167,210)'>Women in research: " 
			+ d[2] + "%</span><br/><span style='color: rgb(189,167,210)'>" + y_name + ": " + d3.format(".2n")(d[y_index]) + "</span>";
		});
	
	chart.call(tip);
	
	// select year in dataset
	var data = scatterData[data_index];
	
	// append circle for each datapoint, hide where value is 0 (no data), mouseover shows tooltip and highlights country in Map
	// on click update barchart
	chart.selectAll("circle")
		.data(data)
			.enter()
			.append("circle")
			.attr("class", "dot")
			.attr("r", 5)
			.attr("cx", function(d) {return x(d[2]); })
			.attr("cy", function(d) {return y(d[y_index]); })
			.style("display", function(d) { return d[2] == 0.0 || d[y_index] == 0.0 ? "none" : null; })
			.on('click', function(d) {
				selectedCountry = d[0];
				createBarchart(d[0], selectedYear);
			})
			.on("mouseover", function(d) {
				tip.show(d);
				var updateCountry = {};
				updateCountry[d[0]] = '#FF5454';
				Map.updateChoropleth(updateCountry);
			})
			.on("mouseout", function(d) { 
				tip.hide(d);
				var updateCountry = {};
				updateCountry[d[0]] = {fillKey: d[5]};
				Map.updateChoropleth(updateCountry);
			});
};