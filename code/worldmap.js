/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/
var Map;

function createMap(data) {
	// initiate world map
	Map = new Datamap({
		
		// get html element for drawing world map
		element: document.getElementById("worldmap"),
		
		// function for click event to facilitate second visualization (bar chart)
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
			"< 5%": '#FFFFFF',
			"< 10%": '#E0FFE4', // 0 - 20 %
			"< 15%": '#C2FCC9', // 20 - 40 %
			"< 20%": '#9DFCA8', // 40 - 60 %
			"< 25%": '#83FC92', // 60 - 80 %
			"< 30%": '#85FF93',	// 80 - 100 %
			"< 35%": '#98FB98',
			"< 40%": '#7FFF00',
			"< 45%": '#00FF1E',
			"< 50%": '#32CD32',
			"> 50%": '#008000',
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