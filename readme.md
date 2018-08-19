# Pricerunner kodtest

Välkommen till Pricerunners kodtest! Vi har förberett en liten uppgift som vi vill att du löser
för att vi ska kunna bedömma dina färdigheter. Uppgiften går ut på att rita ut en produktlistning
på ett antal produkter som hämtas från våra system enligt en design.


Vi har som sagt förberett lite kod för att du ska kunna komma igång snabbare. Som du kanske ser har
vi satt upp Webpack för att kompilera och packa ihop koden. Vi har även satt upp Redux, reducers och
en action som hämtar en kategori från vårt api. Det finns också en funktion för att hämta produktbilder.

För att starta upp projektet behöver du köra kommandot `npm install` och efter det kan du köra
`npm start` och surfa till `localhost:4005`. Designen hittar du i mappen `design`.

Skapa gärna ett github-repository där du comittar din kod så vi kan följa arbetsflödet, sen skickar
länken till oss när du känner dig klar.

Uppskattad arbetstid är cirka 8 timmar. Det är ok att lägga mer tid men redovisa gärna vad du har lagt tiden på.

#### Lycka till!

-- Priceunner frontend team

# Självutvärdering

## Tid

Jag skulle uppskatta att jag spenderade ca. tio effektiva timmar på uppgiften. Den största orsaken till att det tog mer än åtta var att jag inte tidigare arbetat ordentligt med Sass, Redux, Immutable.js och Webpack (mer än via `create-react-app`). Jag har sett alla tidigare men spenderade tid på att lära mig mer om dem för att bättre förstå uppgiften. Majoriteten av tiden har lagds på layout, css och design för att få den så lik specifikationen som möjligt.

## Förbättringar

* Nästan all css är skriven i "vanilla" css och jag tror en hel del förbättringar kan göras om jag lär mig mer Sass.
* Använde inte samma fonts som i design-bilderna. Lyckades inte identifiera vilken font Pricerunner loggan är i.
* Använde inte samma stjärnor som i design-bilderna. Utan importerade andra liknande från wikimedia.
* Hade problem med att importera svg-fil till stjärnorna. Webpack föreslog att jag behövde en `loader`, läste på och prövade lite men valde tillslut att importera stjärnorna via href.
* Lite osäker på fallbackbild när produktbild fattas, hittade ingenting officiellt så använde bara `placekitten.com`.

## TODO
* Göra alla komponenter där det går till funktionella komponenter.
* Göra så att hela kortet på iPhone blir en länk. 