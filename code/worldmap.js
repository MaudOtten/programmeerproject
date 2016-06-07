/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

function createMap(data) {
	
	d3.select("#worldmap").selectAll("*").remove();
	// initiate world map
	var Map = new Datamap({
		
		// this block of code is mostly copied from http://bl.ocks.org/markmarkoh/4127667, and adjusted
		// highlighting a country when hovered over by mouse 
		element: document.getElementById("worldmap"),
		
		// function for click event to facilitate second visualization (bar chart)
		// copied from https://github.com/markmarkoh/datamaps, section "Events"
		done: function(datamap) {
			datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
				// createBarchart(geography.id);
				console.log(geography);
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
			"< 5%": 'red',
			"< 10%": '#fedde9', // 0 - 20 %
			"< 15%": '#fdabc8', // 20 - 40 %
			"< 20%": '#c5a4f8', // 40 - 60 %
			"< 25%": '#a775f4', // 60 - 80 %
			"< 30%": '#470da1',	// 80 - 100 %
			"< 35%": 'firebrick',
			"< 40%": 'blue',
			"< 45%": 'grey',
			"< 50%": 'lawngreen',
			"> 50%": 'yellow',
			defaultFill: '#B0B0B0' // Rest of world
		},
		
		data: data
	});
	 
	// set legend, title and labels
	Map.legend({
		legendTitle : "% Female researchers",
		defaultFillName: "No data",
		labels: {
			"< 5%" : "Less then 5% ",
			"< 10%": " 5 - 10% ",
			"< 15%": "10 - 15% ",
			"< 20%": "15 - 20 % ",
			"< 25%": "20 - 25%",
			"< 30%": "25 - 30%",
			"< 35%": "30 - 35% ",
			"< 40%": "35 - 40% ",
			"< 45%": "40 - 45%",
			"< 50%": "45 - 50%",
			"> 50%": "More then 50% "
		},
	});

};