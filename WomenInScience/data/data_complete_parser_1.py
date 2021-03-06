# Name: Maud Ottenheijm
# Student nr: 10641785
# 
# This file contains code for preprocessing the dataset from UNESCO on women in science, 
# combining it with birth rate data government expences data (World Bank). Outputfile 'data_all.js' separates data
# per year, then per country with all values in one object. Data for a bar chart is formatted in an array within the country object.
#
# Part of final programming project 2016.



# set of country codes and respective country name
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

# set of data values to be extracted, set to 0
female_in_research = 0
birth_rate = 0
expences_education = 0

total_nature = 0
total_engineering = 0
total_agriculture = 0
total_medicine = 0
total_social = 0
total_humanities = 0
total_notspecified = 0

female_nature = 0
female_engineering = 0
female_agriculture = 0
female_medicine = 0
female_social = 0
female_humanities = 0
female_notspecified = 0

# array of years in dataset
years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]

# open first datafile with 'Women in Science' data
import csv
dataFile = open('dataset_3.csv', 'rb')
Reader = csv.reader(dataFile)
data = list(Reader)

# open second datafile for birth rate data
dataFile2 = open('birth_rate_childperwoman.csv', 'rb')
Reader2 = csv.reader(dataFile2)
data2 = list(Reader2)

# open third datafile for education expences data
dataFile3 = open('expenditure_education_percentage.csv', 'rb')
Reader3 = csv.reader(dataFile3)
data3 = list(Reader3)

# create json-string for output
json = ""

# create outputfile
outputFile = open('data_all.js', 'w')
outputFile.write("var dataset = [ ")

# this function calculates fillKeys for worldmap based on amount of females in research
def define_fillKey( value ):
	fillKey = "defaultFill"

	if value > 0.0:
		fillKey = "< 5%"
	if value > 5.0:
		fillKey = "< 10%"
	if value > 10.0:
		fillKey = "< 15%"
	if value > 15.0:
		fillKey = "< 20%"
	if value > 20.0:
		fillKey = "< 25%"
	if value > 25.0:
		fillKey = "< 30%"
	if value > 30.0:
		fillKey = "< 35%"
	if value > 35.0:
		fillKey = "< 40%"
	if value > 40.0:
		fillKey = "< 45%"
	if value > 45.0:
		fillKey = "< 50%"
	if value > 50.0:
		fillKey = "> 50%"
		
	return fillKey


# iterate over input datasets per year in data
for year in years:
	indx = years.index(year)
	
	json = "\n{"
	
	# preset first country name, counter for resetting data to 0
	country_name = "Albania"
	counter = 0
	
	# iterate over dataset per row
	for row in data[1:]:
		
		# if new country is reached
		if str(row[0]) != country_name:
			
			# get country code
			countryCode = "Unknown";
			
			for code in country_codes:
				if country_name == country_codes[country_codes.index(code)][2]:
					countryCode = country_codes[country_codes.index(code)][1]
					break
			
			# define fillKey with define_fillKey function
			fillKey = define_fillKey(float(female_in_research))
			
			# iterate over dataset 2 for birth rate data
			for row2 in data2[1:]:
				
				if row2[2] == countryCode and row2[4] == str(year):
					birth_rate = row2[6]
			
			# iterate over dataset 3 for education expences data
			for row3 in data3[1:]:
				
				if row3[2] == countryCode and row3[4] == str(year):
					expences_education = row3[6]
			
			# create bar chart array of data in string
			barchart = "barchart: [[\"female_nature\", " + str(female_nature) + "], [\"total_nature\", " + str(total_nature) +"], [\"female_engineering\", " + str(female_engineering) + "], [\"total_engineering\", " + str(total_engineering) + "], [\"female_agriculture\", " + str(female_agriculture) + "], [\"total_agriculture\", " + str(total_agriculture) + "], [\"female_medicine\", " + str(female_medicine) + "], [\"total_medicine\", " + str(total_medicine) + "], [\"female_social\", " + str(female_social) + "], [\"total_social\", " + str(total_social) + "], [\"female_humanities\", " + str(female_humanities) + "], [\"total_humanities\", " + str(total_humanities) + "], [\"female_notspecified\", " + str(female_notspecified) +"], [\"total_notspecified\", " + str(total_notspecified) + "]]"
			
			# create country object of data in json string
			json += "\"" + str(countryCode) + "\" : { country_name: \"" + str(country_name) + "\", fillKey: \"" + fillKey + "\", female_in_research: " + str(float(female_in_research)) + ", birth_rate: " + str(birth_rate) + ", expences_education: " + str(expences_education) + ", " + barchart + "}, "
			
			# if iteration is past the first country
			if counter is not 0:
				# set data to null
				female_in_research = 0
				birth_rate = 0
				female_work = 0
				expences_education = 0

				total_nature = 0
				total_engineering = 0
				total_agriculture = 0
				total_medicine = 0
				total_social = 0
				total_humanities = 0
				total_notspecified = 0

				female_nature = 0
				female_engineering = 0
				female_agriculture = 0
				female_medicine = 0
				female_social = 0
				female_humanities = 0
				female_notspecified = 0
			
			# get current country name
			country_name = str(row[0])
		
		# Get value of current row's indicator
		if row[1] == "Researchers (FTE) - % Female":
			female_in_research = row[indx + 2]
		
		if row[1] == "Researchers (HC) - % Female" and female_in_research < row[indx + 2]:
			female_in_research = row[indx + 2]
		
		if row[1] == "Researchers (FTE) - % Female":
			female_in_research = row[indx + 2]
		
		if row[1] == "Researchers (FTE) - Natural sciences %":
			total_nature = row[indx + 2]
	
		if row[1] == "Researchers (FTE) - Engineering and technology %":
			total_engineering = row[indx + 2]
			
		if row[1] == "Researchers (FTE) - Medical and health sciences %":
			total_medicine = row[indx + 2]
		
		if row[1] == "Researchers (FTE) - Agricultural sciences %":
			total_agriculture = row[indx + 2]
		
		if row[1] == "Researchers (FTE) - Social sciences %":
			total_social = row[indx + 2]
		
		if row[1] == "Researchers (FTE) - Humanities %":
			total_humanities = row[indx + 2]
			
		if row[1] == "Researchers (FTE) - Not specified fields %":
			total_notspecified = row[indx + 2]
			
		if row[1] == "Female researchers as a percentage of total researchers (FTE) - Natural sciences":
			female_nature = row[indx + 2]
		
		if row[1] == "Female researchers as a percentage of total researchers (FTE) - Engineering and technology":
			female_engineering = row[indx + 2]
		
		if row[1] == "Female researchers as a percentage of total researchers (FTE) - Medical and health sciences":
			female_medicine = row[indx + 2]

		if row[1] == "Female researchers as a percentage of total researchers (FTE) - Agricultural sciences":
			female_medicine = row[indx + 2]
		
		if row[1] == "Female researchers as a percentage of total researchers (FTE) - Social sciences":
			female_social = row[indx + 2]
		
		if row[1] == "Female researchers as a percentage of total researchers (FTE) - Humanities":
			female_humanities = row[indx + 2]
		
		if row[1] == "Female researchers as a percentage of total researchers (FTE) - Not specified fields":
			female_notspecified = row[indx + 2]
		
		counter += 1
	
	# reset country code for last country
	countryCode = "Unknown";
	
	# get last country code
	for code in country_codes:
		if country_name == country_codes[country_codes.index(code)][2]:
			countryCode = country_codes[country_codes.index(code)][1]
			break
	
	# define fillKey with define_fillKey function
	fillKey = define_fillKey(float(female_in_research))
	
	# iterate over dataset 2 for birth rate data
	for row2 in data2[1:]:
		
		if row2[2] == countryCode and row2[4] == str(year):
			birth_rate = row2[6]
	
	# iterate over dataset 3 for education expences data
	for row3 in data3[1:]:
		
		if row3[2] == countryCode and row3[4] == str(year):
			expences_education = row3[6]

	# create bar chart array of data in string
	barchart = "barchart: [[\"female_nature\", " + str(female_nature) + "], [\"total_nature\", " + str(total_nature) +"], [\"female_engineering\", " + str(female_engineering) + "], [\"total_engineering\", " + str(total_engineering) + "], [\"female_agriculture\", " + str(female_agriculture) + "], [\"total_agriculture\", " + str(total_agriculture) + "], [\"female_medicine\", " + str(female_medicine) + "], [\"total_medicine\", " + str(total_medicine) + "], [\"female_social\", " + str(female_social) + "], [\"total_social\", " + str(total_social) + "], [\"female_humanities\", " + str(female_humanities) + "], [\"total_humanities\", " + str(total_humanities) + "], [\"female_notspecified\", " + str(female_notspecified) +"], [\"total_notspecified\", " + str(total_notspecified) + "]]"
	
	# create country object of data in json string
	json += "\"" + str(countryCode) + "\" : { country_name: \"" + str(country_name) + "\", fillKey: \"" + fillKey + "\", female_in_research: " + str(float(female_in_research)) + ", birth_rate: " + str(birth_rate) + ", expences_education: " + str(expences_education) + ", " + barchart + "}, "
			
	# end final object without comma and close year object
	json = json[0:-2] + "}"
	
	# if not final year, put comma after object
	if indx < 12:
		json += ","
	
	# write output string in output file
	outputFile.write(json)


# end, write and close file
end_of_file = "\n];"
outputFile.write(end_of_file)
outputFile.close()