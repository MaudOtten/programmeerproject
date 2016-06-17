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
				// , geography.properties.name
			});
		},
		
		scope: 'world',
	
		// create legend for color coding 
		legend: true,
		
		// fillcolors range per 5%, default color set to gray
		fills: {
			"< 5%": '#FFFFFF', // 0 - 5 % Female researchers
			"< 10%": '#E6F1E5', // 5 - 10 % Female researchers
			"< 15%": '#CEE3CC', // 10 - 15 % Female researchers
			"< 20%": '#B6D5B2', // 15 - 20 % Female researchers
			"< 25%": '#9DC799', // 20 - 25 % Female researchers
			"< 30%": '#85BA80',	// 25 - 30 % Female researchers
			"< 35%": '#6DAC66', // 30 - 35 % Female researchers
			"< 40%": '#549E4D', // 35 - 40 % Female researchers
			"< 45%": '#3C9033', // 40 - 45 % Female researchers
			"< 50%": '#24821A', // 45 - 50 % Female researchers
			"> 50%": '#0C7501', // > 50 % Female researchers
			defaultFill: '#E6E6E6' // No data
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