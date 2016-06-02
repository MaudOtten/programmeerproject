# Name: Maud Ottenheijm
# Student nr: 10641785

# This file contains code for writing csv to json format. Takes input from InternetUsersPer100.csv, outputs in 
# data.json. Part of D3 Datamaps assignment week 5, Data Processing.


# open readfile
import csv
dataFile = open('research_total.csv', 'rb')
Reader = csv.reader(dataFile)
data = list(Reader)

# start output string
json = "data: {"

# loop through each row in csv, put values in appropriate order into output string
for row in data[:20]:
	
	# if no value is found, set to null
	female_in_research = "null"
	birth_rate = "null"
	female_work = "null"
	expences_education = "null"
	female_nature = "null"
	female_engineering = "null"
	female_medicine = "null"
	female_social = "null"
	
	
	
	print row
	
		# # append full output string per row
	# json += "\"" + str(row[1]) + "\" :{ fillKey: \"" + str(fillKey) + "\", value: " + str(category) + "},"

# # end output string
# json = json[0:-1] + "}"

# # write output into outputfile
# outputFile = open('data.json', 'w')
# outputFile.write(json)
# outputFile.close()