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
				selectedCountry = geography.id;
				createBarchart(geography.id);
			});
		},
		
		scope: 'world',
	
		// create legend for color coding 
		legend: true,
		
		// fillcolors range per 5%, default color set to gray
		fills: {
			"< 5%": '#FFFFFF', // 0 - 5 % Female researchers
			"< 10%": '#E0FFE4', // 5 - 10 % Female researchers
			"< 15%": '#C2FCC9', // 10 - 15 % Female researchers
			"< 20%": '#9DFCA8', // 15 - 20 % Female researchers
			"< 25%": '#83FC92', // 20 - 25 % Female researchers
			"< 30%": '#85FF93',	// 25 - 30 % Female researchers
			"< 35%": '#98FB98', // 30 - 35 % Female researchers
			"< 40%": '#7FFF00', // 35 - 40 % Female researchers
			"< 45%": '#00FF1E', // 40 - 45 % Female researchers
			"< 50%": '#32CD32', // 45 - 50 % Female researchers
			"> 50%": '#008000', // > 50 % Female researchers
			defaultFill: '#CACACA' // No data
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