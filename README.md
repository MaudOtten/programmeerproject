# Maud Ottenheijm, Programmeerproject 2016

## Women in Science: where do we find them?

#### Doel

Deze visualizatie bekijkt wereldwijd het percentage vrouwen werkzaam in het onderzoek. Het is bedoeld om een beeld te krijgen van de genderdiversiteit in het onderzoek vanuit verschillende invalshoeken, en te bepalen of en waar er werkelijk een trend richting genderbalans te zien is. 
De doelgroep voor deze visualizatie omvat mensen die onderzoek doen in gender & equality.

#### Features
- Scatterplot: deze grafiek zet per land het percentage vrouwen in de wetenschap af tegen het landelijke geboortecijfer of de uitgave aan onderwijs door de overheid. Hiermee kan een correlatie worden bekeken tussen de genderbalans in de wetenschap en algemene indicatoren voor de rol van de vrouw in de samenleving en de investering van het land in onderwijs. Kijkend over de tijdspan van 12 jaar kan worden gezien hoe deze waarden en de correlatie verschuift.
- Wereldkaart: deze kaart is ingekleurd op het percentage vrouwelijke wetenschappers, en is te veranderen over tijd. Hiermee kan de globale verandering in hoeveelheid vrouwen worden bekeken. Ook zijn de datapunten in de scatterplot geografisch te plaatsen door een highlight van het desbetreffende land in de kaart bij hover over de scatterplot.
- Barchart: Op klikken van een bolletje in de scatterplot of een land in de landkaart wordt voor het desbetreffende land data laten zien per wetenschappelijke discipline. Een paarse bar laat het percentage vrouwen zien werkzaam in deze discipline (relatief aan het aantal mensen werkzaam in deze discipline). Een blauwe bar laat de grootte zien van deze discipline (% mensen) relatief aan de totale wetenschappelijke gemeenschap van dit land.

Screenshot:


#### Data sources

- Unesco Institute for Statistics
- Worldbank

#### Decomposing

Ten eerste moet de kaart correct worden gecodeerd in kleur obv de data. Deze data moet vervolgens adhv de slider aangepast worden. De scatterplot kan worden geplot adhv een eigen dataset en reageert alleen bij het klikken van een land. Tenslotte zal bij het klikken van een land de barchart geplot moeten worden met desbetreffende data. Ook deze zal bij aanpassen van de slider moeten worden aangepast.
Voor deze visualisaties is minimaal D3 nodig.
Een eventuele beperking van de beschikbare data is de inconsistentie van de beschikbaarheid van data over de tijdslijn. Dit kan de vertelling van de visualisaties enigszins in de weg zitten. Als dit een groot probleem blijkt, kan er gekozen worden voor een kortere tijdspan, wat de kans op volledige data vergroot.

#### Eerdere visualizaties

Een eerdere visualizatie die als inspiratie heeft gediend is afkomstig van Unesco Institute for Statistics (http://www.uis.unesco.org/_LAYOUTS/UNESCO/women-in-science/index.html#!lang=en). Deze visualisatie kijkt wereldbreed naar de verhouding tussen mannen en vrouwen in verschillende onderzoeksvelden en onderwijsniveaus. De visualisatie is mooi vormgegeven, maar bevat enorm veel data wat vrij chaotisch wordt laten zien. Hierdoor is het moeilijk om te vergelijken tussen landen. Concrete conclusies over een land zijn eveneens moeilijk te trekken. Mooi aan deze visualisatie vind ik wel de beschrijving van de 'educational pipeline'. Dit zou nog meer belicht kunnen worden door hier een wat verhalendere visual van te maken. Tenslotte bevat het geen tijdselement, wat ik erg interessant vind om te bekijken.

#### Minimum Viable Product

De MVP zal bestaan uit de wereldkaart, waar gekozen kan worden voor data van meerdere jaren (mbv een dropdown menu / checking boxes / slider). Bij klikken van een land wordt de barchart weergegeven, met data over dit land per vakgebied. Ook wordt een scatterplot laten zien waarop voor alle landen de data van het meest recente weergegeven jaar wordt weergegeven. Bij hover-over wordt de naam van het land weergegeven. Dit alles zal door een coherent verhaal omgeven worden en een geheel vormen.
