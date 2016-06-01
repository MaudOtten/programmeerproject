/*
	Name: Maud Ottenheijm
	Student nr: 10641785
	
	...
	
	Part of final programming project 2016.
*/

d3.select('#slider').call(d3.slider().axis(true).value(50).step(5).on("slide", function(evt, value) {
d3.select('#slider3textmin').text(value[ 0 ]);
}));

// initiate map
var Map = new Datamap({
	
	// this block of code is mostly copied from http://bl.ocks.org/markmarkoh/4127667, and adjusted
	// highlighting a country when hovered over by mouse 
	element: document.getElementById("container"),
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
		
		"0 - 20%": '#fedde9', // 0 - 20 %
		"20 - 40%": '#fdabc8', // 20 - 40 %
		"40 - 60%": '#c5a4f8', // 40 - 60 %
		"60 - 80%": '#a775f4', // 60 - 80 %
		"80 - 100%": '#470da1', // 80 - 100 %
		defaultFill: '#000' // Rest of world
	},
	
	// data per country includes fillKey (for coloring) and value
	// if no data, both have value 'null'
	data: {
		"ABW" :{ 
			fillKey: "80 - 100%", 
			value: 83.78},
		"AND" :{ 
			fillKey: "80 - 100%", 
			value: 95.9},
		"AFG" :{ 
			fillKey: "0 - 20%", 
			value: 6.39},
		"AGO" :{ 
			fillKey: "20 - 40%", 
			value: 21.26},
		"ALB" :{ 
			fillKey: "60 - 80%", 
			value: 60.1},
		"ARB" :{ 
			fillKey: "20 - 40%", 
			value: 34.5173747337},
		"ARE" :{ 
			fillKey: "80 - 100%", 
			value: 90.4},
		"ARG" :{ 
			fillKey: "60 - 80%", 
			value: 64.7},
		"ARM" :{ 
			fillKey: "40 - 60%", 
			value: 46.3},
		"ASM" :{ 
			fillKey: "null", 
			value: null},
		"ATG" :{ 
			fillKey: "60 - 80%", 
			value: 64.0},
		"AUS" :{ 
			fillKey: "80 - 100%", 
			value: 84.56},
		"AUT" :{ 
			fillKey: "80 - 100%", 
			value: 81.0},
		"AZE" :{ 
			fillKey: "60 - 80%", 
			value: 61.0},
		"BDI" :{ 
			fillKey: "0 - 20%", 
			value: 1.38},
		"BEL" :{ 
			fillKey: "80 - 100%", 
			value: 85.0},
		"BEN" :{ 
			fillKey: "0 - 20%", 
			value: 5.3},
		"BFA" :{ 
			fillKey: "0 - 20%", 
			value: 9.4},
		"BGD" :{ 
			fillKey: "0 - 20%", 
			value: 9.6},
		"BGR" :{ 
			fillKey: "40 - 60%", 
			value: 55.49},
		"BHR" :{ 
			fillKey: "80 - 100%", 
			value: 90.99998},
		"BHS" :{ 
			fillKey: "60 - 80%", 
			value: 76.92},
		"BIH" :{ 
			fillKey: "60 - 80%", 
			value: 60.8},
		"BLR" :{ 
			fillKey: "40 - 60%", 
			value: 59.02},
		"BLZ" :{ 
			fillKey: "20 - 40%", 
			value: 38.7},
		"BMU" :{ 
			fillKey: "80 - 100%", 
			value: 96.8},
		"BOL" :{ 
			fillKey: "20 - 40%", 
			value: 39.02},
		"BRA" :{ 
			fillKey: "40 - 60%", 
			value: 57.6},
		"BRB" :{ 
			fillKey: "60 - 80%", 
			value: 76.67},
		"BRN" :{ 
			fillKey: "60 - 80%", 
			value: 68.77},
		"BTN" :{ 
			fillKey: "20 - 40%", 
			value: 34.37},
		"BWA" :{ 
			fillKey: "0 - 20%", 
			value: 18.5},
		"CAF" :{ 
			fillKey: "0 - 20%", 
			value: 4.03},
		"CAN" :{ 
			fillKey: "80 - 100%", 
			value: 87.12},
		"CEB" :{ 
			fillKey: "60 - 80%", 
			value: 66.9285233413},
		"CHE" :{ 
			fillKey: "80 - 100%", 
			value: 87.0},
		"CHI" :{ 
			fillKey: "null", 
			value: null},
		"CHL" :{ 
			fillKey: "60 - 80%", 
			value: 72.35},
		"CHN" :{ 
			fillKey: "40 - 60%", 
			value: 49.3},
		"CIV" :{ 
			fillKey: "0 - 20%", 
			value: 14.6},
		"CMR" :{ 
			fillKey: "0 - 20%", 
			value: 11.0},
		"COG" :{ fillKey: "0 - 20%", value: 7.11},
		"COL" :{ fillKey: "40 - 60%", value: 52.57},
		"COM" :{ fillKey: "0 - 20%", value: 6.98},
		"CPV" :{ fillKey: "40 - 60%", value: 40.26},
		"CRI" :{ fillKey: "40 - 60%", value: 49.41},
		"CSS" :{ fillKey: "40 - 60%", value: 49.2739489479},
		"CUB" :{ fillKey: "20 - 40%", value: 30.0},
		"CUW" :{ fillKey: "null", value: null},
		"CYM" :{ fillKey: "60 - 80%", value: 74.1},
		"CYP" :{ fillKey: "60 - 80%", value: 69.33},
		"CZE" :{ fillKey: "60 - 80%", value: 79.71},
		"DEU" :{ fillKey: "80 - 100%", value: 86.19},
		"DJI" :{ fillKey: "0 - 20%", value: 10.71},
		"DMA" :{ fillKey: "60 - 80%", value: 62.86},
		"DNK" :{ fillKey: "80 - 100%", value: 95.99},
		"DOM" :{ fillKey: "40 - 60%", value: 49.58},
		"DZA" :{ fillKey: "0 - 20%", value: 18.09},
		"EAP" :{ fillKey: "40 - 60%", value: 42.1320603779},
		"EAS" :{ fillKey: "40 - 60%", value: 46.8912750396},
		"ECA" :{ fillKey: "40 - 60%", value: 48.1822381678},
		"ECS" :{ fillKey: "60 - 80%", value: 69.2034365478},
		"ECU" :{ fillKey: "40 - 60%", value: 43.0},
		"EGY" :{ fillKey: "20 - 40%", value: 31.7},
		"EMU" :{ fillKey: "60 - 80%", value: 78.3000360116},
		"ERI" :{ fillKey: "0 - 20%", value: 0.99},
		"ESP" :{ fillKey: "60 - 80%", value: 76.19},
		"EST" :{ fillKey: "80 - 100%", value: 84.24},
		"ETH" :{ fillKey: "0 - 20%", value: 2.9},
		"EUU" :{ fillKey: "60 - 80%", value: 78.1021476801},
		"FCS" :{ fillKey: "0 - 20%", value: 11.5312545593},
		"FIN" :{ fillKey: "80 - 100%", value: 92.38},
		"FJI" :{ fillKey: "40 - 60%", value: 41.8},
		"FRA" :{ fillKey: "80 - 100%", value: 83.75},
		"FRO" :{ fillKey: "80 - 100%", value: 94.66},
		"FSM" :{ fillKey: "20 - 40%", value: 29.65},
		"GAB" :{ fillKey: "0 - 20%", value: 9.81},
		"GBR" :{ fillKey: "80 - 100%", value: 91.61},
		"GEO" :{ fillKey: "40 - 60%", value: 48.9},
		"GHA" :{ fillKey: "0 - 20%", value: 18.9},
		"GIN" :{ fillKey: "0 - 20%", value: 1.72},
		"GMB" :{ fillKey: "0 - 20%", value: 15.56},
		"GNB" :{ fillKey: "0 - 20%", value: 3.32},
		"GNQ" :{ fillKey: "0 - 20%", value: 18.86},
		"GRC" :{ fillKey: "60 - 80%", value: 63.21},
		"GRD" :{ fillKey: "20 - 40%", value: 37.38},
		"GRL" :{ fillKey: "60 - 80%", value: 66.7},
		"GTM" :{ fillKey: "20 - 40%", value: 23.4},
		"GUM" :{ fillKey: "60 - 80%", value: 69.27},
		"GUY" :{ fillKey: "20 - 40%", value: 37.35},
		"HIC" :{ fillKey: "80 - 100%", value: 80.6075498547},
		"HKG" :{ fillKey: "60 - 80%", value: 74.56},
		"HND" :{ fillKey: "0 - 20%", value: 19.08},
		"HPC" :{ fillKey: "0 - 20%", value: 8.86529118206},
		"HRV" :{ fillKey: "60 - 80%", value: 68.57},
		"HTI" :{ fillKey: "0 - 20%", value: 11.4},
		"HUN" :{ fillKey: "60 - 80%", value: 76.13},
		"IDN" :{ fillKey: "0 - 20%", value: 17.14},
		"IMN" :{ fillKey: "null", value: null},
		"IND" :{ fillKey: "0 - 20%", value: 18.0},
		"INX" :{ fillKey: "null", value: null},
		"IRL" :{ fillKey: "60 - 80%", value: 79.69},
		"IRN" :{ fillKey: "20 - 40%", value: 39.35},
		"IRQ" :{ fillKey: "0 - 20%", value: 11.3},
		"ISL" :{ fillKey: "80 - 100%", value: 98.16},
		"ISR" :{ fillKey: "60 - 80%", value: 71.45},
		"ITA" :{ fillKey: "60 - 80%", value: 61.96},
		"JAM" :{ fillKey: "40 - 60%", value: 40.5},
		"JOR" :{ fillKey: "40 - 60%", value: 44.0},
		"JPN" :{ fillKey: "80 - 100%", value: 90.58},
		"KAZ" :{ fillKey: "40 - 60%", value: 54.89},
		"KEN" :{ fillKey: "40 - 60%", value: 43.4},
		"KGZ" :{ fillKey: "20 - 40%", value: 28.3},
		"KHM" :{ fillKey: "0 - 20%", value: 9.0},
		"KIR" :{ fillKey: "0 - 20%", value: 12.25},
		"KNA" :{ fillKey: "60 - 80%", value: 65.4},
		"KOR" :{ fillKey: "80 - 100%", value: 84.33},
		"KSV" :{ fillKey: "null", value: null},
		"KWT" :{ fillKey: "60 - 80%", value: 78.7},
		"LAC" :{ fillKey: "40 - 60%", value: 47.466033327},
		"LAO" :{ fillKey: "0 - 20%", value: 14.26},
		"LBN" :{ fillKey: "60 - 80%", value: 74.7},
		"LBR" :{ fillKey: "0 - 20%", value: 5.41},
		"LBY" :{ fillKey: "0 - 20%", value: 17.76},
		"LCA" :{ fillKey: "40 - 60%", value: 51.0},
		"LCN" :{ fillKey: "40 - 60%", value: 50.1533204189},
		"LDC" :{ fillKey: "0 - 20%", value: 8.63639215023},
		"LIC" :{ fillKey: "0 - 20%", value: 6.29098662508},
		"LIE" :{ fillKey: "80 - 100%", value: 95.21},
		"LKA" :{ fillKey: "20 - 40%", value: 25.8},
		"LMC" :{ fillKey: "20 - 40%", value: 22.555151452},
		"LMY" :{ fillKey: "20 - 40%", value: 31.1365897394},
		"LSO" :{ fillKey: "0 - 20%", value: 11.0},
		"LTU" :{ fillKey: "60 - 80%", value: 72.13},
		"LUX" :{ fillKey: "80 - 100%", value: 94.67},
		"LVA" :{ fillKey: "60 - 80%", value: 75.83},
		"MAC" :{ fillKey: "60 - 80%", value: 69.78},
		"MAF" :{ fillKey: "null", value: null},
		"MAR" :{ fillKey: "40 - 60%", value: 56.8},
		"MCO" :{ fillKey: "80 - 100%", value: 92.4},
		"MDA" :{ fillKey: "40 - 60%", value: 46.6},
		"MDG" :{ fillKey: "0 - 20%", value: 3.7},
		"MDV" :{ fillKey: "40 - 60%", value: 49.28},
		"MEA" :{ fillKey: "20 - 40%", value: 38.2614233289},
		"MEX" :{ fillKey: "40 - 60%", value: 44.39},
		"MHL" :{ fillKey: "0 - 20%", value: 16.8},
		"MIC" :{ fillKey: "20 - 40%", value: 34.0523027842},
		"MKD" :{ fillKey: "60 - 80%", value: 68.06},
		"MLI" :{ fillKey: "0 - 20%", value: 7.0},
		"MLT" :{ fillKey: "60 - 80%", value: 73.17},
		"MMR" :{ fillKey: "0 - 20%", value: 2.1},
		"MNA" :{ fillKey: "20 - 40%", value: 32.6617750664},
		"MNE" :{ fillKey: "60 - 80%", value: 61.0},
		"MNG" :{ fillKey: "20 - 40%", value: 27.0},
		"MNP" :{ fillKey: "null", value: null},
		"MOZ" :{ fillKey: "0 - 20%", value: 5.94},
		"MRT" :{ fillKey: "0 - 20%", value: 10.7},
		"MUS" :{ fillKey: "40 - 60%", value: 41.44},
		"MWI" :{ fillKey: "0 - 20%", value: 5.83},
		"MYS" :{ fillKey: "60 - 80%", value: 67.5},
		"NAC" :{ fillKey: "80 - 100%", value: 87.3379213412},
		"NAM" :{ fillKey: "0 - 20%", value: 14.84},
		"NCL" :{ fillKey: "60 - 80%", value: 70.0},
		"NER" :{ fillKey: "0 - 20%", value: 1.95},
		"NGA" :{ fillKey: "40 - 60%", value: 42.68},
		"NIC" :{ fillKey: "0 - 20%", value: 17.6},
		"NLD" :{ fillKey: "80 - 100%", value: 93.17},
		"NOC" :{ fillKey: "60 - 80%", value: 69.8993263469},
		"NOR" :{ fillKey: "80 - 100%", value: 96.3},
		"NPL" :{ fillKey: "0 - 20%", value: 15.44},
		"NZL" :{ fillKey: "80 - 100%", value: 85.5},
		"OEC" :{ fillKey: "80 - 100%", value: 83.8455755786},
		"OED" :{ fillKey: "60 - 80%", value: 78.0513737077},
		"OMN" :{ fillKey: "60 - 80%", value: 70.22},
		"OSS" :{ fillKey: "0 - 20%", value: 18.392568245},
		"PAK" :{ fillKey: "0 - 20%", value: 13.8},
		"PAN" :{ fillKey: "40 - 60%", value: 44.92},
		"PER" :{ fillKey: "40 - 60%", value: 40.2},
		"PHL" :{ fillKey: "20 - 40%", value: 39.69},
		"PLW" :{ fillKey: "null", value: null},
		"PNG" :{ fillKey: "0 - 20%", value: 9.38},
		"POL" :{ fillKey: "60 - 80%", value: 66.6},
		"PRI" :{ fillKey: "60 - 80%", value: 78.78},
		"PRK" :{ fillKey: "0 - 20%", value: 0.0},
		"PRT" :{ fillKey: "60 - 80%", value: 64.59},
		"PRY" :{ fillKey: "40 - 60%", value: 43.0},
		"PSS" :{ fillKey: "20 - 40%", value: 26.6331225128},
		"PYF" :{ fillKey: "60 - 80%", value: 60.68},
		"QAT" :{ fillKey: "80 - 100%", value: 91.49},
		"ROU" :{ fillKey: "40 - 60%", value: 54.08},
		"RUS" :{ fillKey: "60 - 80%", value: 70.52},
		"RWA" :{ fillKey: "0 - 20%", value: 10.6},
		"SAS" :{ fillKey: "0 - 20%", value: 16.6099246937},
		"SAU" :{ fillKey: "60 - 80%", value: 63.7},
		"SDN" :{ fillKey: "20 - 40%", value: 24.64},
		"SEN" :{ fillKey: "0 - 20%", value: 17.7},
		"SGP" :{ fillKey: "80 - 100%", value: 82.0},
		"SLB" :{ fillKey: "0 - 20%", value: 9.0},
		"SLE" :{ fillKey: "0 - 20%", value: 2.1},
		"SLV" :{ fillKey: "20 - 40%", value: 29.7},
		"SMR" :{ fillKey: "null", value: null},
		"SOM" :{ fillKey: "0 - 20%", value: 1.63},
		"SRB" :{ fillKey: "40 - 60%", value: 53.5},
		"SSA" :{ fillKey: "0 - 20%", value: 19.2181330694},
		"SSD" :{ fillKey: "0 - 20%", value: 15.9},
		"SSF" :{ fillKey: "0 - 20%", value: 19.2212447812},
		"SST" :{ fillKey: "20 - 40%", value: 26.3799180756},
		"STP" :{ fillKey: "20 - 40%", value: 24.41},
		"SUR" :{ fillKey: "40 - 60%", value: 40.08},
		"SVK" :{ fillKey: "60 - 80%", value: 79.98},
		"SVN" :{ fillKey: "60 - 80%", value: 71.59},
		"SWE" :{ fillKey: "80 - 100%", value: 92.52},
		"SWZ" :{ fillKey: "20 - 40%", value: 27.1},
		"SXM" :{ fillKey: "null", value: null},
		"SYC" :{ fillKey: "40 - 60%", value: 54.26},
		"SYR" :{ fillKey: "20 - 40%", value: 28.09},
		"TCA" :{ fillKey: "null", value: null},
		"TCD" :{ fillKey: "0 - 20%", value: 2.5},
		"TGO" :{ fillKey: "0 - 20%", value: 5.7},
		"THA" :{ fillKey: "20 - 40%", value: 34.89},
		"TJK" :{ fillKey: "0 - 20%", value: 17.49},
		"TKM" :{ fillKey: "0 - 20%", value: 12.2},
		"TLS" :{ fillKey: "0 - 20%", value: 1.14},
		"TON" :{ fillKey: "40 - 60%", value: 40.0},
		"TTO" :{ fillKey: "60 - 80%", value: 65.1},
		"TUN" :{ fillKey: "40 - 60%", value: 46.16},
		"TUR" :{ fillKey: "40 - 60%", value: 51.04},
		"TUV" :{ fillKey: "null", value: null},
		"TZA" :{ fillKey: "0 - 20%", value: 4.86},
		"UGA" :{ fillKey: "0 - 20%", value: 17.71},
		"UKR" :{ fillKey: "40 - 60%", value: 43.4},
		"UMC" :{ fillKey: "40 - 60%", value: 47.7213465385},
		"URY" :{ fillKey: "60 - 80%", value: 61.46},
		"USA" :{ fillKey: "80 - 100%", value: 87.36},
		"UZB" :{ fillKey: "40 - 60%", value: 43.55},
		"VCT" :{ fillKey: "40 - 60%", value: 56.48},
		"VEN" :{ fillKey: "40 - 60%", value: 57.0},
		"VIR" :{ fillKey: "40 - 60%", value: 50.07},
		"VNM" :{ fillKey: "40 - 60%", value: 48.31},
		"VUT" :{ fillKey: "0 - 20%", value: 18.8},
		"PSE" :{ fillKey: "40 - 60%", value: 53.67},
		"WLD" :{ fillKey: "40 - 60%", value: 40.6891366054},
		"WSM" :{ fillKey: "20 - 40%", value: 21.2},
		"YEM" :{ fillKey: "20 - 40%", value: 22.55},
		"ZAF" :{ fillKey: "40 - 60%", value: 49.0},
		"COD" :{ fillKey: "0 - 20%", value: 3.0},
		"ZMB" :{ fillKey: "0 - 20%", value: 17.34},
		"ZWE" :{ fillKey: "0 - 20%", value: 19.89}}
 });
 
// set legend, title and labels
Map.legend({
	legendTitle : "% Internet Users",
	defaultFillName: "No data",
	labels: {
		q0: "one",
		q1: "two",
		q2: "three",
		q3: "four",
		q4: "five",
		q5: "six,"
	},
});
	