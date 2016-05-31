# Name: Maud Ottenheijm
# Student nr: 10641785

# This file contains code for writing csv to json format. Takes input from InternetUsersPer100.csv, outputs in 
# data.json. Part of D3 Datamaps assignment week 5, Data Processing.

# bounds for range
range_1 = 2000
range_2 = 4000
range_3 = 6000
range_4 = 8000
range_5 = 10000

range_name1 = "<" + str(range_1)
range_name2 = "<" + str(range_2)
range_name3 = "<" + str(range_3)
range_name4 = "<" + str(range_4)
range_name5 = "<" + str(range_5)
range_name6 = ">=" + str(range_5)

# open readfile
import csv

country_codes = [
["af", "AFG", "Afghanistan"],
["ax", "ALA", "Aland Islands"],
["al", "ALB", "Albania"],
["dz", "DZA", "Algeria"],
["as", "ASM", "American Samoa"],
["ad", "AND", "Andorra"],
["ao", "AGO", "Angola"],
["ai", "AIA", "Anguilla"],
["aq", "ATA", "Antarctica"],
["ag", "ATG", "Antigua and Barbuda"],
["ar", "ARG", "Argentina"],
["am", "ARM", "Armenia"],
["aw", "ABW", "Aruba"],
["au", "AUS", "Australia"],
["at", "AUT", "Austria"],
["az", "AZE", "Azerbaijan"],
["bs", "BHS", "Bahamas"],
["bh", "BHR", "Bahrain"],
["bd", "BGD", "Bangladesh"],
["bb", "BRB", "Barbados"],
["by", "BLR", "Belarus"],
["be", "BEL", "Belgium"],
["bz", "BLZ", "Belize"],
["bj", "BEN", "Benin"],
["bm", "BMU", "Bermuda"],
["bt", "BTN", "Bhutan"],
["bo", "BOL", "Bolivia, Plurinational State of"],
["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
["ba", "BIH", "Bosnia and Herzegovina"],
["bw", "BWA", "Botswana"],
["bv", "BVT", "Bouvet Island"],
["br", "BRA", "Brazil"],
["io", "IOT", "British Indian Ocean Territory"],
["bn", "BRN", "Brunei Darussalam"],
["bg", "BGR", "Bulgaria"],
["bf", "BFA", "Burkina Faso"],
["bi", "BDI", "Burundi"],
["kh", "KHM", "Cambodia"],
["cm", "CMR", "Cameroon"],
["ca", "CAN", "Canada"],
["cv", "CPV", "Cape Verde"],
["ky", "CYM", "Cayman Islands"],
["cf", "CAF", "Central African Republic"],
["td", "TCD", "Chad"],
["cl", "CHL", "Chile"],
["cn", "CHN", "China"],
["cx", "CXR", "Christmas Island"],
["cc", "CCK", "Cocos (Keeling) Islands"],
["co", "COL", "Colombia"],
["km", "COM", "Comoros"],
["cg", "COG", "Congo"],
["cd", "COD", "Congo, the Democratic Republic of the"],
["ck", "COK", "Cook Islands"],
["cr", "CRI", "Costa Rica"],
["ci", "CIV", "Cote d'Ivoire"],
["hr", "HRV", "Croatia"],
["cu", "CUB", "Cuba"],
["cw", "CUW", "Curacao"],
["cy", "CYP", "Cyprus"],
["cz", "CZE", "Czech Republic"],
["dk", "DNK", "Denmark"],
["dj", "DJI", "Djibouti"],
["dm", "DMA", "Dominica"],
["do", "DOM", "Dominican Republic"],
["ec", "ECU", "Ecuador"],
["eg", "EGY", "Egypt"],
["sv", "SLV", "El Salvador"],
["gq", "GNQ", "Equatorial Guinea"],
["er", "ERI", "Eritrea"],
["ee", "EST", "Estonia"],
["et", "ETH", "Ethiopia"],
["fk", "FLK", "Falkland Islands (Malvinas)"],
["fo", "FRO", "Faroe Islands"],
["fj", "FJI", "Fiji"],
["fi", "FIN", "Finland"],
["fr", "FRA", "France"],
["gf", "GUF", "French Guiana"],
["pf", "PYF", "French Polynesia"],
["tf", "ATF", "French Southern Territories"],
["ga", "GAB", "Gabon"],
["gm", "GMB", "Gambia"],
["ge", "GEO", "Georgia"],
["de", "DEU", "Germany"],
["gh", "GHA", "Ghana"],
["gi", "GIB", "Gibraltar"],
["gr", "GRC", "Greece"],
["gl", "GRL", "Greenland"],
["gd", "GRD", "Grenada"],
["gp", "GLP", "Guadeloupe"],
["gu", "GUM", "Guam"],
["gt", "GTM", "Guatemala"],
["gg", "GGY", "Guernsey"],
["gn", "GIN", "Guinea"],
["gw", "GNB", "Guinea-Bissau"],
["gy", "GUY", "Guyana"],
["ht", "HTI", "Haiti"],
["hm", "HMD", "Heard Island and McDonald Islands"],
["va", "VAT", "Holy See (Vatican City State)"],
["hn", "HND", "Honduras"],
["hk", "HKG", "Hong Kong"],
["hu", "HUN", "Hungary"],
["is", "ISL", "Iceland"],
["in", "IND", "India"],
["id", "IDN", "Indonesia"],
["ir", "IRN", "Iran, Islamic Republic of"],
["iq", "IRQ", "Iraq"],
["ie", "IRL", "Ireland"],
["im", "IMN", "Isle of Man"],
["il", "ISR", "Israel"],
["it", "ITA", "Italy"],
["jm", "JAM", "Jamaica"],
["jp", "JPN", "Japan"],
["je", "JEY", "Jersey"],
["jo", "JOR", "Jordan"],
["kz", "KAZ", "Kazakhstan"],
["ke", "KEN", "Kenya"],
["ki", "KIR", "Kiribati"],
["kp", "PRK", "Korea, Democratic People's Republic of"],
["kr", "KOR", "Korea, Republic of"],
["kw", "KWT", "Kuwait"],
["kg", "KGZ", "Kyrgyzstan"],
["la", "LAO", "Lao People's Democratic Republic"],
["lv", "LVA", "Latvia"],
["lb", "LBN", "Lebanon"],
["ls", "LSO", "Lesotho"],
["lr", "LBR", "Liberia"],
["ly", "LBY", "Libya"],
["li", "LIE", "Liechtenstein"],
["lt", "LTU", "Lithuania"],
["lu", "LUX", "Luxembourg"],
["mo", "MAC", "Macao"],
["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
["mg", "MDG", "Madagascar"],
["mw", "MWI", "Malawi"],
["my", "MYS", "Malaysia"],
["mv", "MDV", "Maldives"],
["ml", "MLI", "Mali"],
["mt", "MLT", "Malta"],
["mh", "MHL", "Marshall Islands"],
["mq", "MTQ", "Martinique"],
["mr", "MRT", "Mauritania"],
["mu", "MUS", "Mauritius"],
["yt", "MYT", "Mayotte"],
["mx", "MEX", "Mexico"],
["fm", "FSM", "Micronesia, Federated States of"],
["md", "MDA", "Moldova, Republic of"],
["mc", "MCO", "Monaco"],
["mn", "MNG", "Mongolia"],
["me", "MNE", "Montenegro"],
["ms", "MSR", "Montserrat"],
["ma", "MAR", "Morocco"],
["mz", "MOZ", "Mozambique"],
["mm", "MMR", "Myanmar"],
["na", "NAM", "Namibia"],
["nr", "NRU", "Nauru"],
["np", "NPL", "Nepal"],
["nl", "NLD", "Netherlands"],
["nc", "NCL", "New Caledonia"],
["nz", "NZL", "New Zealand"],
["ni", "NIC", "Nicaragua"],
["ne", "NER", "Niger"],
["ng", "NGA", "Nigeria"],
["nu", "NIU", "Niue"],
["nf", "NFK", "Norfolk Island"],
["mp", "MNP", "Northern Mariana Islands"],
["no", "NOR", "Norway"],
["om", "OMN", "Oman"],
["pk", "PAK", "Pakistan"],
["pw", "PLW", "Palau"],
["ps", "PSE", "Palestine, State of"],
["pa", "PAN", "Panama"],
["pg", "PNG", "Papua New Guinea"],
["py", "PRY", "Paraguay"],
["pe", "PER", "Peru"],
["ph", "PHL", "Philippines"],
["pn", "PCN", "Pitcairn"],
["pl", "POL", "Poland"],
["pt", "PRT", "Portugal"],
["pr", "PRI", "Puerto Rico"],
["qa", "QAT", "Qatar"],
["re", "REU", "Reunion"],
["ro", "ROU", "Romania"],
["ru", "RUS", "Russian Federation"],
["rw", "RWA", "Rwanda"],
["bl", "BLM", "Saint Barthelemy"],
["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
["kn", "KNA", "Saint Kitts and Nevis"],
["lc", "LCA", "Saint Lucia"],
["mf", "MAF", "Saint Martin (French part)"],
["pm", "SPM", "Saint Pierre and Miquelon"],
["vc", "VCT", "Saint Vincent and the Grenadines"],
["ws", "WSM", "Samoa"],
["sm", "SMR", "San Marino"],
["st", "STP", "Sao Tome and Principe"],
["sa", "SAU", "Saudi Arabia"],
["sn", "SEN", "Senegal"],
["rs", "SRB", "Serbia"],
["sc", "SYC", "Seychelles"],
["sl", "SLE", "Sierra Leone"],
["sg", "SGP", "Singapore"],
["sx", "SXM", "Sint Maarten (Dutch part)"],
["sk", "SVK", "Slovakia"],
["si", "SVN", "Slovenia"],
["sb", "SLB", "Solomon Islands"],
["so", "SOM", "Somalia"],
["za", "ZAF", "South Africa"],
["gs", "SGS", "South Georgia and the South Sandwich Islands"],
["ss", "SSD", "South Sudan"],
["es", "ESP", "Spain"],
["lk", "LKA", "Sri Lanka"],
["sd", "SDN", "Sudan"],
["sr", "SUR", "Suriname"],
["sj", "SJM", "Svalbard and Jan Mayen"],
["sz", "SWZ", "Swaziland"],
["se", "SWE", "Sweden"],
["ch", "CHE", "Switzerland"],
["sy", "SYR", "Syrian Arab Republic"],
["tw", "TWN", "Taiwan, Province of China"],
["tj", "TJK", "Tajikistan"],
["tz", "TZA", "Tanzania, United Republic of"],
["th", "THA", "Thailand"],
["tl", "TLS", "Timor-Leste"],
["tg", "TGO", "Togo"],
["tk", "TKL", "Tokelau"],
["to", "TON", "Tonga"],
["tt", "TTO", "Trinidad and Tobago"],
["tn", "TUN", "Tunisia"],
["tr", "TUR", "Turkey"],
["tm", "TKM", "Turkmenistan"],
["tc", "TCA", "Turks and Caicos Islands"],
["tv", "TUV", "Tuvalu"],
["ug", "UGA", "Uganda"],
["ua", "UKR", "Ukraine"],
["ae", "ARE", "United Arab Emirates"],
["gb", "GBR", "United Kingdom"],
["us", "USA", "United States"],
["um", "UMI", "United States Minor Outlying Islands"],
["uy", "URY", "Uruguay"],
["uz", "UZB", "Uzbekistan"],
["vu", "VUT", "Vanuatu"],
["ve", "VEN", "Venezuela, Bolivarian Republic of"],
["vn", "VNM", "Viet Nam"],
["vg", "VGB", "Virgin Islands, British"],
["vi", "VIR", "Virgin Islands, U.S."],
["wf", "WLF", "Wallis and Futuna"],
["eh", "ESH", "Western Sahara"],
["ye", "YEM", "Yemen"],
["zm", "ZMB", "Zambia"],
["zw", "ZWE", "Zimbabwe"] ]

# start output string
json = "data: {"

# loop through each row in csv, put values in appropriate order into output string
with open('SCN_DS_31052016075604234.csv', 'rb') as file:
	reader = csv.reader(file, header = true)
	data = list(reader)
	
	for row in data:
		count = row
		
		if count.TIME == "2000":
			
			count.countryCode = "Unknown";
			
			for code in country_codes:
				if count.LOCATION == country_codes[code][2]:
					count.countryCode = country_codes[code][1]
					break
			
			value = count.value
			
			if value < range_1:
				count.fillKey = range_name1
			
			elif value < range_2:
				count.fillKey = range_name2
			
			elif value < range_3:
				count.fillKey = range_name3
			
			elif value < range_4:
				count.fillKey = range_name4
			
			elif value < range_5:
				count.fillKey = range_name5
			
			elif value >= range_5:
				count.fillKey = range_name6

# end output string
json = json[0:-1] + "}"

# write output into outputfile
outputFile = open('processed_data.json', 'w')
outputFile.write(json)
outputFile.close()