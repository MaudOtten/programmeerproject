## Women in Science: where do we find them?

### Introductie
Deze visualisatie kijkt naar de genderbalans in wetenschap over de hele wereld. Het percentage vrouwen werkzaam in verschillende
landen, jaren en vakgebieden wordt vanuit diverse oogpunten bekeken en gerelateerd aan algemene indicatoren van een land (vb. geboortecijfer). Voor screenshot, zie eind van dit bestand.

### Technische ontwerp
De structuur van mijn code komt voor het grootste gedeelte overeen met mijn initiele ontwerp. De html file van de main pagina(index.html) roept de scripts, libraries en de (vooraf verwerkte) dataset aan. Vanuit index.js wordt vervolgens de dataset geparsed voor het organiseren van de scatterplot data. Vervolgens worden de andere scripts aangeroepen om elk een visualisatie te bouwen. Elke visualisatie wordt in een aparte functie uit een aparte file gebouwd. Ook bevat index.js de functie die de slider maakt waarin de functies voor de visualisaties ook worden aangeroepen.
Voor het maken van de barchart is nog een aparte functie voor het checken op een datasubset met null-data. Verder wordt vanuit de scatterplot functie en de worldmap functie de barchart functie aangeroepen om te updaten bij een click-event. 

Alle visualisaties hebben vooraf een container-div in de html file waarin de svg wordt geplaatst. De afmetingen van de barchart en scatterplot zijn hetzelfde, en dus globaal. Ook het aangeklikte land (via scatterplot/world map), geselecteerde jaar (via time slider) en gekozen y-variabele van de scatterplot zijn globale variable. Op deze manier kunnen alle visualisaties bij verandering van een van deze variabelen accuraat worden aangepast.

### Uitdagingen
De eerste uitdaging bij dit project was het verkrijgen en verwerken van mijn data. De enorm grote dataset afkomstig van UNESCO (12 jaar, 150 landen en 16 indicatoren) kon niet in z'n geheel als csv bestand gedownload worden, en moest dus verschillende verwerkingsstappen ondergaan. Omdat het bestand in verschillende bestandstypes verwerkt werd moesten de lege datapunten gevuld worden (anders werd hier niet over geitereerd door het preprocessing python script). Dit had als gevolg voor de rest van het project dat alle '0'en moesten worden onderschept bij het visualiseren. Dit is niet de meest nette manier, maar is wel gelukt.

Bij het verder verwerken van mijn data naar 1 dataset ben ik tegengekomen dat omgang met data een kwestie is van breed denken. Ik had erg goed voor ogen hoe de data er per visualisatie uit moest zien, maar het samenvoegen ervan bleek vervolgens een groot probleem. Ik heb inzichten gekregen (vaak na lang tegen dezelfde steen stoten) in het creeren van een complete en breed inzetbare dataset, wat voor dit project geresulteerd heeft in het gebruik van 1 dataset (in plaats van meerderen). Hier ben ik erg blij mee.

Ook heb ik mijn originele idee over het ontwerp aangepast om een concreter verhaal te vertellen. Ik heb de scatterplot als eerste visualisatie gekozen om hier al meer informatie in kwijt te kunnen zonder dat dit geheel op zichzelf staat. De wereldkaart heeft een meer ondergeschikte rol, maar voegt toe dat de weergegeven data geografisch geplaatst kan worden. Dit heeft als gevolg dat er meer focus ligt op de rol van de vrouw, en minder op het beeld van de wereld. Dit is naar mijn mening een grote vooruitgang geweest.

Het maken van de visualisaties en interacties is voor het grootste gedeelte gemakkelijk verlopen. De interacties van de verschillende elementen sloten meteen goed op elkaar aan. De visuele samenhang vond ik echter wel een uitdaging, aangezien ik niet wilde inhaken op het stereotype "vrouwen = roze". Met hulp van medestudenten heb ik uiteindelijk voor paars gekozen, wat meer op de intuitie inspeelt maar niet te 'obvious' is. Door de highlights van de cirkels, bars en landen eenzelfde kleur te geven heeft de pagina meer eenheid en gevoel van samenhang.

Tenslotte heb ik ook geleerd dat het bij uitgebreide visualisaties enorm belangrijk is om je verhaal in het achterhoofd te houden. In de loop van de tijd kunnen keuzes worden gemaakt over design of technische aanpak, maar dit moet niet afdoen aan de boodschap/het verhaal wat je probeert over te brengen. Blijf kijken naar je eigen product door andermans ogen (vraag veel mensen om hun ongezouten mening).

### Argumentatie
Het veranderen van de visualisatie-prioriteit heeft enorm geholpen bij de overtuiging van de gehele visualisatie. Een wereldkaart in plaats van alleen Europa geeft ook een veel breder beeld met verassende ontdekkingen (over veel aziatische en afrikaanse landen bijvoorbeeld). Het weglaten van eventuele selectiemogelijkheden bij de barchart zorgt voor wat meer rust en overzicht. Als dit nog variabel was geweest, zou er een overdaad aan data zijn geweest, wat wegneemt van de verhaalvertelling. Een trendlijn door de scatterplot zou een optie zijn geweest, ik heb hier echter vanaf gezien. Dit omdat de data weergegeven in de scatterplot enorm varieert in aantal landen en welke landen. Als de data consistend en completer was geweest, had een trendlijn ook daadwerkelijk iets gezegd over het globale fenomeen. In dit geval kan echter alleen de suggestie worden gegeven dat er een samenhang is (die in de meeste jaren ook goed te zien is).

In de ideale wereld waarin ik meer tijd had gehad voor dit project, had ik mijn dataset als een json object verwerkt in plaats van een javascript variabele. Ook had ik extra indicatoren meegenomen om in de scatterplot weer te geven en dezen in een dropdown menu weergegeven. Tenslotte zou ik verder hebben gezocht naar een manier om een cirkel in de scatterplot te highlighten wanneer over het corresponderende land in de wereldkaart wordt gehovered. Ik ben echter van mening dat ook zonder deze aanpassingen mijn product een mooi en sterk geheel vormt.

### Eindproduct
![](doc/rsz_print_screen_top.png)
![](doc/rsz_print_screen_bottom.png)
