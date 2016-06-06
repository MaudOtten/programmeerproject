# Name: Maud Ottenheijm
# Student nr: 10641785

# This file contains code for writing csv to json format. Takes input from InternetUsersPer100.csv, outputs in 
# data.json. Part of D3 Datamaps assignment week 5, Data Processing.

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
    ["bo", "BOL", "Bolivia Plurinational State of"],
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
    ["cd", "COD", "Congo Democratic Republic of the"],
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
    ["ir", "IRN", "Iran (Islamic Republic of)"],
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
    ["kr", "KOR", "Republic of Korea"],
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
    ["mk", "MKD", "The former Yugoslav Republic of Macedonia"],
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
    ["md", "MDA", "Republic of Moldova"],
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
    ["ps", "PSE", "Palestine"],
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
    ["sh", "SHN", "Saint Helena"],
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
    ["tz", "TZA", "United Republic of Tanzania"],
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
    ["ve", "VEN", "Venezuela (Bolivarian Republic of)"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ]

# open readfile
import csv
dataFile = open('new_complete.csv', 'rb')
Reader = csv.reader(dataFile)
data = list(Reader)

years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]
country_name = ""
counter = 0

# set all data to null
female_in_research = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
birth_rate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
female_work = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
expences_education = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

total_nature = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
total_engineering = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
total_agriculture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
total_medicine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
total_social = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
total_humanities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
total_notspecified = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

female_nature = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
female_engineering = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
female_agriculture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
female_medicine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
female_social = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
female_humanities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
female_notspecified = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


# start output string
json = "data: {"

# loop through each row in csv, put values in appropriate order into output string
# HEADER:   Country, Indicator, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012
# in een for-loop is de each de inhoud van die iteratie (bv de row in data). De index ervan is data.index(row)

for row in data[1:]:
	
	if row[1] == "Researchers (FTE) - % Female":
		female_in_research[0] = row[2]
		female_in_research[1] = row[3]
		female_in_research[2] = row[4]
		female_in_research[3] = row[5]
		female_in_research[4] = row[6]
		female_in_research[5] = row[7]
		female_in_research[6] = row[8]
		female_in_research[7] = row[9]
		female_in_research[8] = row[10]
		female_in_research[9] = row[11]
		female_in_research[10] = row[12]
		female_in_research[11] = row[13]
		female_in_research[12] = row[14]
	
	if row[1] == "Researchers (HC) - % Female":
		if female_in_research[0] is 0:
			female_in_research[0] = row[2]
		if female_in_research[1] is 0:	
			female_in_research[1] = row[3]
		if female_in_research[2] is 0:
			female_in_research[2] = row[4]
		if female_in_research[3] is 0:
			female_in_research[3] = row[5]
		if female_in_research[4] is 0:
			female_in_research[4] = row[6]
		if female_in_research[5] is 0:
			female_in_research[5] = row[7]
		if female_in_research[6] is 0:
			female_in_research[6] = row[8]
		if female_in_research[7] is 0:
			female_in_research[7] = row[9]
		if female_in_research[8] is 0:
			female_in_research[8] = row[10]
		if female_in_research[9] is 0:
			female_in_research[9] = row[11]
		if female_in_research[10] is 0:
			female_in_research[10] = row[12]
		if female_in_research[11] is 0:
			female_in_research[11] = row[13]
		if female_in_research[12] is 0:
			female_in_research[12] = row[14]
	
	
	if row[1] == "Researchers (FTE) - Natural sciences %":
		for value in range(2, 15):
			total_nature[value - 2] = row[value]
	
	if row[1] == "Researchers (FTE) - Engineering and technology %":
		for value in range(2, 15):
			total_engineering[value - 2] = row[value]
		
	if row[1] == "Researchers (FTE) - Medical and health sciences %":
		for value in range(2, 15):
			total_medicine[value - 2] = row[value]
	
	if row[1] == "Researchers (FTE) - Agricultural sciences %":
		for value in range(2, 15):
			total_agriculture[value - 2] = row[value]
	
	if row[1] == "Researchers (FTE) - Social sciences %":
		for value in range(2, 15):
			total_social[value - 2] = row[value]
	
	if row[1] == "Researchers (FTE) - Humanities %":
		for value in range(2, 15):
			total_humanities[value - 2] = row[value]
		
	if row[1] == "Researchers (FTE) - Not specified fields %":
		for value in range(2, 15):
			total_notspecified[value - 2] = row[value]
		
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Natural sciences":
		for value in range(2, 15):
			female_nature[value - 2] = row[value]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Engineering and technology":
		for value in range(2, 15):
			female_engineering[value - 2] = row[value]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Medical and health sciences":
		for value in range(2, 15):
			female_medicine[value - 2] = row[value]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Agricultural sciences":
		for value in range(2, 15):
			female_medicine[value - 2] = row[value]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Social sciences":
		for value in range(2, 15):
			female_social[value - 2] = row[value]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Humanities":
		for value in range(2, 15):
			female_humanities[value - 2] = row[value]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Not specified fields":
		for value in range(2, 15):
			female_notspecified[value - 2] = row[value]
			
	
	if row[0] is not "":
		
		countryCode = "Unknown";
		country_name = str(row[0])
		
		for code in country_codes:
			if country_name == country_codes[country_codes.index(code)][2]:
				countryCode = country_codes[country_codes.index(code)][1]
				break

		country_name = "\"" + str(row[0]) + "\""
		
		# Country code check
		#if countryCode == "Unknown":
		#	print country_name
		
		json += " \"" + str(countryCode) + "\" : { "
		
		for year in years:
			num = years.index(year)
			json += str(year) + " : {  female_in_research: " + str(female_in_research[num]) + ", total_nature: " + str(total_nature[num]) + ", female_nature: " + str(female_nature[num]) + ", total_engineering: " + str(total_engineering[num]) + ", female_engineering: " + str(female_engineering[num]) + ", total_agriculture: " + str(total_agriculture[num]) + ", female_agriculture: " + str(female_agriculture[num]) + ", total_medicine: " + str(total_medicine[num]) + ", female_medicine: " + str(female_medicine[num]) + ", total_social: " + str(total_social[num]) + ", female_social: " + str(female_social[num]) + ", total_humanities: " + str(total_humanities[num]) + ", female_humanities: " + str(female_humanities[num]) + ", total_notspecified: " + str(total_notspecified[num]) + ", female_notspecified: " + str(female_notspecified[num]) + "}, "

		json = json[0:-2] + "}, "

		if counter is not 0:
			# set all data to null
			female_in_research = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			birth_rate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			female_work = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			expences_education = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

			total_nature = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			total_engineering = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			total_agriculture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			total_medicine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			total_social = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			total_humanities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			total_notspecified = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

			female_nature = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			female_engineering = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			female_agriculture = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			female_medicine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			female_social = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			female_humanities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			female_notspecified = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	
	counter += 1

json = json[0:-2] + "}"



# write output into outputfile
outputFile = open('data.json', 'w')
outputFile.write(json)
outputFile.close()