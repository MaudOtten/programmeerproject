/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/


var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 1300 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y%m%d");
bisectDate = d3.bisector(function(d) { return d.time; }).left;
	
var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
	.ticks(12);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.time); })
    .y(function(d) { return y(d.average); });	
	
var svg = d3.select("body").select("div").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
d3.csv("new_data.csv", type, function(error, data) {
  if (error) throw error;
  
  var data = data.slice(1, 731)
  
  x.domain(d3.extent(data, function(d) { return d.time; })).nice();
  y.domain(d3.extent(data, function(d) { return d.average; })).nice();
  
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Windspeed (0.1 m/s)");

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
	  
	var follower = svg.append("g")
      .attr("class", "follower")
      .style("display", "none");

  follower.append("circle")
      .attr("r", 3);
	  
  follower.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .on("mouseover", function() { follower.style("display", null); })
      .on("mouseout", function() { follower.style("display", "none"); })
      .on("mousemove", mousemove);
	  
  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.time > d1.time - x0 ? d1 : d0;
    follower.attr("transform", "translate(" + x(d.time) + "," + y(d.average) + ")");
    follower.select("text").text(d.time.toLocaleDateString() + ": " + d.average * 10 + " m/s");
  }
});

function type(d) {
  d.time = parseDate.parse(d.Time);
  d.average = +d.Average;
  return d;
}