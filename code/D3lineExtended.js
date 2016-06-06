/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	This file contains all JavaScript code for drawing a line graph of wind speed data, as facilitated by the KNMI.
	All header info for the csv file can be found in headerData.txt. Code was used from examples: http://bl.ocks.org/mikehadlow/93b471e569e31af07cd3 
	and http://bl.ocks.org/d3noob/5d621a60e2d1d02086bf.
	
	The graph, as shown by D3lineExtended.html, gives three location options. After selecting one, it shows a line graph
	with daily data for average wind speed (blue), maximum wind speed (green) and minimum wind speed (purple), for the 
	years 2000 and 2001. Above the graph all values are shown for the date under the cursor. By clicking on one of the values, 
	each line can be hidden and shown as wished.
	
	Part of D3 Linegraphs assignment week 6, Data Processing.
*/


function create_linegraph() {
	// margin values
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = 600 - margin.left - margin.right,
		height = 300 - margin.top - margin.bottom;

	// adjust string value to JavaScript Date object 
	var parseDate = d3.time.format("%Y%m%d");

	// this will help adjust data point to cursor position
	bisectDate = d3.bisector(function(d) { return d.time; }).left;

	// function to scale data values to screen x and y coordinates
	var x = d3.time.scale()
		.range([0, width]);
	var y = d3.scale.linear()
		.range([height, 0]);

	// function to create x and y axis
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(12);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left");


	// returns x,y coordinates for data points to draw 'average' graph
	var lineavg = d3.svg.line()
		.x(function(d) { return x(d.time); })
		.y(function(d) { return y(d.average); });

	// returns x,y coordinates for data points to draw 'minimum' graph
	var linemin = d3.svg.line()
		.x(function(d) { return x(d.time); })
		.y(function(d) { return y(d.low); });	

	// returns x,y coordinates for data points to draw 'maximum' graph
	var linemax = d3.svg.line()
		.x(function(d) { return x(d.time); })
		.y(function(d) { return y(d.high); });

	// create svg for graph
	var svg = d3.select("body").select("#graph")
		.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		
	// load in data from csv file
	d3.csv("new_data.csv", type, function(error, data) {
		// check for errors
		if (error) throw error;
		
		// create arrays for datasets per location
		deBilt = []
		leeuwarden = []
		maastricht = []
		
		// loop through csv data and separate data based on location
		for (var i = 1; i < data.length; i++){
			if (data[i].location == 260){
				deBilt.push(data[i]);
			}
			else if (data[i].location == 270){
				leeuwarden.push(data[i]);
			}
			else if (data[i].location == 380){
				maastricht.push(data[i]);
			}
			// if data contains other locations, ignore
			else {}
		};
		
		// create menu to choose location to show in graph
		var menu = d3.select("body").selectAll("a")
			.on('click', function(d,i){
				
				// clear svg in case another graph was drawn already
				svg.selectAll("*").remove();
				
				// get value of chosen element
				var value = this.getAttribute("value");
				
				// create graph with data from chosen location
				if (value == 260) {
					createGraph(deBilt);
				}
				else if (value == 270) {
					createGraph(leeuwarden);
				}
				else if (value == 380) {
					createGraph(maastricht);
				}
			});
	});

	// create graph in svg
	function createGraph(data){
		// look for max and min values for x and y, create domain
		x.domain(d3.extent(data, function(d) { return d.time; })).nice();
		y.domain([d3.min(data, function(d) { return d.low - 5; }), d3.max(data, function(d) { return d.high; })]).nice();

		// append x axis using xAxis function
		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);
		
		// append y axis using yAxis function, add axis name
		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Windspeed (0.1 m/s)");
		
		// draw line for 'average speed' data
		svg.append("path")
		.datum(data)
			.attr("class", "lineavg")
			.attr("id", "lineavg")
			.attr("d", lineavg);

		// draw line for 'minimum speed' data
		svg.append("path")
		.datum(data)
			.attr("class", "linemin")
			.attr("id", "linemin")
			.attr("d", linemin);

		// draw line for 'maximum speed' data
		svg.append("path")
		.datum(data)
			.attr("class", "linemax")
			.attr("id", "linemax")
			.attr("d", linemax);

		// create container for focusline
		var pointer = svg.append("g")
		.attr("class", "pointer")
			.style("display", "none");
		
		// append focusline
		pointer.append("line")
		.attr("id", "focusLine")
		.attr('class', 'focusLine');

		// create overlay to draw focusline on, with event listener for cursor
		svg.append("rect")
		.attr("class", "overlay")
		.attr("width", width)
		.attr("height", height)
			.on("mouseover", function() { pointer.style("display", null); })
			.on("mouseout", function() { pointer.style("display", "none"); })
			.on("mousemove", mousemove);

		// function for mousemove event listener, shows focusline and data for corresponding datapoint
		function mousemove() {
			
			// get x-coordinate of cursor
			var x0 = x.invert(d3.mouse(this)[0]),
			
			// use previously defined function bisectData to find closest datapoint to cursor
			i = bisectDate(data, x0, 1),
			d0 = data[i - 1],
			d1 = data[i],
			
			// d contains datapoint closest to cursor
			d = x0 - d0.time > d1.time - x0 ? d1 : d0;
			
			// adjust position of focusline
			pointer.select('#focusLine')
			.attr('x1', x(d.time))
			.attr('y1', 0)
			.attr('x2', x(d.time))
			.attr('y2', 400);


			// Show average wind speed of datapoint where focusline is
			// onclick function is fully informed by http://bl.ocks.org/d3noob/5d621a60e2d1d02086bf
			d3.select("body").select("#averagedata").text(d.time.toLocaleDateString() + 
				": Average wind speed = " + d.average * 10 + " m/s,")
				.on("click", function(){
					
					// Determine if current line is visible
					var active = lineavg.active ? false : true,
					newOpacity = active ? 0 : 1;
					
					// Hide or show the elements
					d3.select(".lineavg").style("opacity", newOpacity);
					d3.select(".lineavg").style("opacity", newOpacity);
					
					// Update whether or not the elements are active
					lineavg.active = active;
				});

			// Show maximum wind speed of datapoint where focusline is
			d3.select("body").select("#maxdata").text("highest speed = " 
				+ d.high * 10 + " m/s,")
				.on("click", function(){
					
					// Determine if current line is visible
					var active   = linemax.active ? false : true,
					newOpacity = active ? 0 : 1;
					
					// Hide or show the elements
					d3.select(".linemax").style("opacity", newOpacity);
					d3.select(".linemax").style("opacity", newOpacity);
					
					// Update whether or not the elements are active
					linemax.active = active;
				});

			// Show minimum wind speed of datapoint where focusline is
			d3.select("body").select("#mindata").text("lowest speed = " 
				+ d.low * 10 + " m/s")
				.on("click", function(){
					
					// Determine if current line is visible
					var active   = linemin.active ? false : true,
					newOpacity = active ? 0 : 1;
					
					// Hide or show the elements
					d3.select(".linemin").style("opacity", newOpacity);
					d3.select(".linemin").style("opacity", newOpacity);
					
					// Update whether or not the elements are active
					linemin.active = active;
				});
		}

	}

	// turns all data values into valid Dates and Numbers, returns object d
	function type(d) {
	  d.time = parseDate.parse(d.time);
	  d.average = +d.average;
	  d.high = +d.high;
	  d.low = +d.low;
	  return d;
	}
	
}