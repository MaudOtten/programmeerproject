# Name: Maud Ottenheijm
# Student nr: 10641785

# This file contains code for writing csv to json format. Takes input from InternetUsersPer100.csv, outputs in 
# data.json. Part of D3 Datamaps assignment week 5, Data Processing.



# open readfile
import csv
dataFile = open('All_in_one.csv', 'rb')
Reader = csv.reader(dataFile)
data = list(Reader)

default_data = ["", "", "", "", "", "", "", "", "", "", "", ""]
years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]
country_name = ""
counter = 0
# set all data to null
female_in_research = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
birth_rate = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
female_work = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
expences_education = ["", "", "", "", "", "", "", "", "", "", "", "", ""]

total_nature = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
total_engineering = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
total_agriculture = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
total_medicine = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
total_social = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
total_humanities = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
total_notspecified = ["", "", "", "", "", "", "", "", "", "", "", "", ""]

female_nature = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
female_engineering = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
female_agriculture = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
female_medicine = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
female_social = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
female_humanities = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
female_notspecified = ["", "", "", "", "", "", "", "", "", "", "", "", ""]


# start output string
json = "data: {"

# loop through each row in csv, put values in appropriate order into output string
# HEADER:   Country, Indicator, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012
# in een for-loop is de each de inhoud van die iteratie (bv de row in data). De index ervan is data.index(row)
for row in data:
		
	if row[0] is not "":
		
		json += "\" {} \" : ".format(country_name) +  "{"
		
		for year in years:
			indx = years.index(year)
			json += "year: {} :  female_in_research: {}, total_nature: {}, female_nature: {}, total_engineering: {}, female_engineering: {}, total_agriculture: {}, female_agriculture: {}, total_medicine: {}, female_medicine: {}, total_social: {}, female_social: {}, total_humanities: {}, female_humanities: {}, total_notspecified: {}, female_notspecified: {}".format(country_name, year, female_in_research[years.index(year)], total_nature[indx], female_nature[indx], total_engineering[indx], female_engineering[indx], total_agriculture[indx], female_agriculture[indx], total_medicine[indx], female_medicine[indx], total_social[indx], female_social[indx], total_humanities[indx], female_humanities[indx], total_notspecified[indx], female_notspecified[indx])
		
		json = json[0:-1] + "},"
		country_name = "\"" + str(row[0]) + "\""

		if counter is not 0:
			# set all data to null
			female_in_research = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			birth_rate = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			female_work = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			expences_education = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			
			total_nature = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			total_engineering = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			total_agriculture = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			total_medicine = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			total_social = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			total_humanities = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			total_notspecified = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			
			female_nature = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			female_engineering = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			female_agriculture = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			female_medicine = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			female_social = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			female_humanities = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
			female_notspecified = ["", "", "", "", "", "", "", "", "", "", "", "", ""]
	
	counter += 1
	
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
	
	elif row[1] == "Researchers (HC) - % Female":
		if female_in_research[0] is "":
			female_in_research[0] = row[2]
		if female_in_research[1] is "":	
			female_in_research[1] = row[3]
		if female_in_research[2] is "":
			female_in_research[2] = row[4]
		if female_in_research[3] is "":
			female_in_research[3] = row[5]
		if female_in_research[4] is "":
			female_in_research[4] = row[6]
		if female_in_research[5] is "":
			female_in_research[5] = row[7]
		if female_in_research[6] is "":
			female_in_research[6] = row[8]
		if female_in_research[7] is "":
			female_in_research[7] = row[9]
		if female_in_research[8] is "":
			female_in_research[8] = row[10]
		if female_in_research[9] is "":
			female_in_research[9] = row[11]
		if female_in_research[10] is "":
			female_in_research[10] = row[12]
		if female_in_research[11] is "":
			female_in_research[11] = row[13]
		if female_in_research[12] is "":
			female_in_research[12] = row[14]
			
	if row[1] == "Researchers (FTE) - Natural sciences %":
		total_nature[0:12] = row[2:14]
	
	if row[1] == "Researchers (FTE) - Engineering and technology %":
		total_engineering[0:12] = row[2:14]
		
	if row[1] == "Researchers (FTE) - Medical and health sciences %":
		total_medicine[0:12] = row[2:14]
	
	if row[1] == "Researchers (FTE) - Agricultural sciences %":
		total_agriculture[0:12] = row[2:14]
	
	if row[1] == "Researchers (FTE) - Social sciences %":
		total_social[0:12] = row[2:14]
	
	if row[1] == "Researchers (FTE) - Humanities %":
		total_humanities[0:12] = row[2:14]
		
	if row[1] == "Researchers (FTE) - Not specified fields %":
		total_notspecified[0:12] = row[2:14]
		
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Natural sciences":
		female_nature[0:12] = row[2:14]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Engineering and technology":
		female_engineering[0:12] = row[2:14]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Medical and health sciences":
		female_medicine[0:12] = row[2:14]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Agricultural sciences":
		female_agriculture[0:12] = row[2:14]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Social sciences":
		female_social[0:12] = row[2:14]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Humanities":
		female_humanities[0:12] = row[2:14]
	
	if row[1] == "Female researchers as a percentage of total researchers (FTE) - Not specified fields":
		female_notspecified[0:12] = row[2:14]

json = json[0:-1] + "}"


# write output into outputfile
outputFile = open('data.json', 'w')
outputFile.write(json)
outputFile.close()