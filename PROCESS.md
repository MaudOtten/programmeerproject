# Week 1, Day 1
Vandaag vooral de data uitgezocht die ik wil gebruiken. Nog veel nagedacht over een evt ander doel (jonge vrouwen inspireren om onderzoek in te gaan, zou moeten mbv timeline maar weet niet of dit haalbaar is). Veel geschetst en gelijst
![](doc/Sketch_1.jpg)

# Week 1, Day 2
Besloten om mijn originele verhaling vast te houden (laten zien van de gender gap). Vervolgens eerdere HTML en JS files opgedoken om weer even het geheugen op te frissen. Ook eerste poging gedaan tot data processing in Python. Hier moet ik morgen een beter systeem voor bedenken.

# Week 1, Day 3
Vandaag heb ik de opbouw van mijn verhaal omgegooid waardoor de elementen een veel compacter en concreter verhaal vertellen. Mijn primaire element wordt nu de scatterplot (ipv de wereldkaart), waar per land een bolletje aangeeft wat de % vrouwen in onderzoek (x-as) en % vrouwen met een baan (y-as) zijn. De y-variabele is te veranderen door de gebruiker naar birth rate van een land en % uitgave aan educatie door de overheid. Klikken op een bolletje geeft een barchart voor dit land met daarin de verdeling man-vrouw per vakgebied in onderzoek.
Onder deze twee visualisaties is een time slider met een play-button waarmee over de tijd kan worden gekeken. Hieronder is een wereldkaart te zien, ingekleurd op % vrouwen in onderzoek, met een legenda. Zowel de scatterplot, bar chart als de wereldkaart reageert op de time slider.

Basic sketch van de indeling van deze elementen over de pagina:
![](doc/Sketch_2.jpg)

Ik heb een overzicht schets gemaakt (DESIGN.md) met de verschillende scripts, waar wat wordt aangeroepen en welke elementen in de main page HTML file al zullen staan. Ook heb ik al een aantal dingen geprobeerd mbt stijl en de slider knop ingebouwd (library d3.slider.js).

Inspiratie voor slider en play-button: http://bl.ocks.org/darrenjaworski/5544599
Slider examples, voor evt variatie: http://thematicmapping.org/playground/d3/d3.slider/

# Week 1, Day 4
Vandaag heb ik de hele dag gedaan over het downloaden van mijn data. Beetje jammer, maar uiteindelijk wel gelukt. Unesco is niet bepaald een aanrader voor megagrote datasets.

# Week 1, Day 5
Vandaag presenteerden we onze prototypes voor een groep. Ik heb een begin gemaakt aan een pythonscript wat mijn data processed, dit blijkt nog enorm ingewikkeld (zeker wegens de ingewikkelde JSON structuur en de grote hoeveelheid gaten in mijn data). Op het design en interactieve elementen werd goed gereageerd door de groep en hier ben ik inmiddels ook volledig tevreden over.

# Week 2, Day 1
Vandaag ben ik verder gegaan aan het processen van mijn data. Hier veel frustratie over. Ik heb alle lege velden een 0 gegeven, aangezien geen van de werkelijke datawaarden 0 was. Hierdoor is het iets makkelijker te verwerken dan met lege strings, die door verschillende talen verschillend worden geinterpreteerd (en dus geen geldige JSON opleveren). Ook heb ik een eerste poging gedaan om de data in datamaps te laden, dit lukt echter nog niet. Ik moet er waarschijnlijk een andere vorm aan geven om het mogelijk te maken.
Ook een poging gedaan tot versimpelde datasets voor 1 jaar een fillkey per jaar. Even kijken of dit misschien iets oplevert...

# Week 2 Day 2
Vandaag heb ik mijn dataset omgegooid om te kunnen selecteren op jaar (ivm slider) in eerste instantie. 
De csv had een aantal aanpassingen nodig mbt de landnamen en codes, waar de twee files die vergelijken niet altijd overeenkomen.
Ook heb ik een aantal pogingen gedaan om de opmaak van mijn html pagina te verbeteren. Weinig suces in het centreren van de legenda van de map.

# Week 2 Day 3
De data voor maps weer aangepast en gekeken naar hoe de barchart het best de data ingevoerd kan krijgen. Hier weer nieuwe python script voor geschreven 
en wederom gekeken naar een verbeterde css voor de html pagina.

# Week 2 Day 4
Data voor barchart kloppend gemaakt zodat die makkelijk gelezen en getekend kan worden. Het schalen van de barchart is echter nog niet correct. Het verandert wel obv klikken een land in de kaart.

# Week 2 Day 5
Weinig vooruitgang. Vooral gekloot met de legenda van de kaart. Data klopt nu helemaal voor barchart en kaart, eerste poging tot scatterplot data.

# Week 3 Day 1
Vandaag heb ik mijn scatterplot gebouwd! In 1 dag de data erop aangepast (wel nog in een apart databestand, dit wil ik nog aanpassen). De grafiek past zich al aan obv de time slider. Er is nog geen mogelijkheid om de y-variabele te veranderen, maar beide kunnen wel worden meegegeven bij het aanmaken van de grafiek. Y-as wordt daarop ook aangepast. Het niet weergeven van de nul-data (lege data) heb ik opgelost door de cirkels met 0 als x of y op display:none te zetten. Ik wil kijken of ik dit iets eleganter kan doen. Ook een begin gemaakt aan de bar chart. Het tekenen van de assen is makkelijk, de bars neerzetten is nog lastig.

# Week 3 Day 2
Vandaag labels gemaakt voor de barchart. Heel veel geprobeerd (per bar appenden, aan x-as appenden met ticks), maar dit werkte allemaal niet. Heb even het idee van geroteerde labels losgelaten en ze naast elkaar onder de x-as neegezet. Niet helemaal aligned met de bars, maar het komt in de buurt! Verder heb ik wat structuur aangebracht in het aanroepen van de data en functies (met een window.onload). Hiermee wil ik voorkomen dat de pagina crasht.

# Week 3 Day 3
Het is gelukt om de barchart data te laten zien in bars! On click op de cirkels van de scatterplot wordt de barchart ge-updated. De scatterplot heeft een tooltip mbv d3.tip. Het gekozen land wordt onthouden dmv een globale variabele (net als het geselecteerde jaar). Ook via de world map wordt de barchart aangepast. Ook de color coding van de world map is enigszins aangepast, ik ga voor een range van groene kleuren.

# Week 3 Day 4


# Week 3 Day 5
Andere color range geprobeerd met groen. In de presentatie werd er geopperd toch een andere kleur te gebruiken ivm associaties met bossen. Hier even over nadenken. Ook heb ik een barchart label geprobeerd toe te voegen. Dit heeft nog weinig opgeleverd.
