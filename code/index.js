/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

var data = []

// time slider
d3.select('#slider').call(d3.slider().axis(true).value(50).step(5).on("slide", function(evt, value) {
d3.select('#slider3textmin').text(value[ 0 ]);
}));

// initiate world map
var Map = new Datamap({
	
	// this block of code is mostly copied from http://bl.ocks.org/markmarkoh/4127667, and adjusted
	// highlighting a country when hovered over by mouse 
	element: document.getElementById("worldmap"),
	
	// function for click event to facilitate second visualization (bar chart)
	// copied from https://github.com/markmarkoh/datamaps, section "Events"
	done: function(datamap) {
		datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
			createBarchart(geography.id);
		});
	},
	
	scope: 'world',
	
	geography_config: {
		borderColor: 'rgba(255,255,255,0.3)',
		highlightBorderColor: 'rgba(0,0,0,0.5)',
		
		// attempt at a popup with data value, doesn't function
		popupTemplate: function(geo, data) {
			return '<div class="hoverinfo"><strong>' + geo.properties.name + ': ' + str(data.value) + '</strong></div>';
		}
	},
	// create legend for color coding 
	legend: true,
	
	"id": "colormap", 
	
	// fillcolors range per 20%, default color set to black
	fills: {
		
		"< 10%": '#fedde9', // 0 - 20 %
		"20 - 40%": '#fdabc8', // 20 - 40 %
		"40 - 60%": '#c5a4f8', // 40 - 60 %
		"60 - 80%": '#a775f4', // 60 - 80 %
		"80 - 100%": '#470da1', // 80 - 100 %
		defaultFill: '#000' // Rest of world
	},
	
	dataUrl: data_maps_2000,
	data: {}
	});
 
/* // set legend, title and labels
Map.legend({
	legendTitle : "% Female researchers",
	defaultFillName: "No data",
	labels: {
		q0: "one",
		q1: "two",
		q2: "three",
		q3: "four",
		q4: "five",
		q5: "six,"
	},
}); */

// create bar chart for clicked country
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

create_linegraph()