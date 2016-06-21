/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	This file contains the function called to draw a world map. Map is color coded for % of female researchers
	per country in 2004. Years can be changed by a time slider, and map is updated accordingly through 
	updateChoropleth in index.js. Library datamaps.all.js is used and adjusted for a custom tooltip and border
	
	
	Part of final programming project 2016.
*/

// global Map
var Map;


/*
	This function initializes a world map, color coded for the amount of female researchers.
	Default year is 2004, color coded on a white-purple scale.
*/
function createMap(data) {
	
	// initiate world map
	Map = new Datamap({
		
		// get html element for drawing world map
		element: document.getElementById("worldmap"),
		
		// function for click event to update bar chart
		done: function(datamap) {
			datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
				selectedCountry = geography.id;
				createBarchart(geography.id, selectedYear);
			});
		},
		
		scope: 'world',
	
		// create legend for color coding 
		legend: true,
		
		// fillcolors range per 5%, default color set to gray
		fills: {
			"< 5%": '#ddd1e8', // 0 - 5 % Female researchers
			"< 10%": '#cdbcdd', // 5 - 10 % Female researchers
			"< 15%": '#bda7d2', // 10 - 15 % Female researchers
			"< 20%": '#ad92c8', // 15 - 20 % Female researchers
			"< 25%": '#9e7ebd', // 20 - 25 % Female researchers
			"< 30%": '#8e69b2',	// 25 - 30 % Female researchers
			"< 35%": '#7e54a8', // 30 - 35 % Female researchers
			"< 40%": '#6e3f9d', // 35 - 40 % Female researchers
			"< 45%": '#5e2a92', // 40 - 45 % Female researchers
			"< 50%": '#4f1588', // 45 - 50 % Female researchers
			"> 50%": '#3f007d', // > 50 % Female researchers
			defaultFill: '#f0f0f0' // No data
		},
		
		data: data
	});
	 
	// set legend, title and labels
	Map.legend({
		legendTitle : "Female researchers (% of total)",
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