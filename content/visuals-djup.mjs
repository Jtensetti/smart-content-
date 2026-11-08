// Visuals for the deeper second batch (content/*-djup.json). Same types as visuals.mjs.
export default {
  // ---------------- filosofi ----------------
  "zhuangzi-tradet": {
    type: "split", title: "Trädet och snickaren",
    a: { h: "Användbart", items: ["Fälls för virket", "Blir båtar och kistor", "Förbrukas tidigt"] },
    b: { h: "Oanvändbart", items: ["Lämnas ifred", "Får växa", "Blir uråldrigt"] },
    note: "Nyttan är också det som förbrukar oss.",
  },
  "pyrrhon-epoche": {
    type: "flow", title: "Den skeptiska vägen",
    steps: ["Argument: det är så", "Motargument: det är inte så", "Lika starka – omdömet vilar", "Sinnesro"],
  },
  "weil-uppmarksamhet": {
    type: "quote",
    text: "Uppmärksamhet är den sällsyntaste och renaste formen av generositet.",
    by: "Simone Weil, brev till Joë Bousquet 1942",
  },
  "murdoch-tornfalken": {
    type: "flow", title: "Ett ögonblick av unselfing",
    steps: ["Ängslig och kränkt", "En tornfalk svävar förbi", "Grubblet är borta", "Tillbaka – med andra ögon"],
  },
  "nagarjuna-tomhet": {
    type: "flow", title: "Beroende uppkomst",
    steps: ["Ett bord", "Trä, spik och en snickare", "Träd, regn, sol och jord", "… och så vidare, utan slut"],
    note: "Ingen del bär bordet ensam.",
  },
  "ibn-khaldun-cykeln": {
    type: "timeline", title: "Asabiyya-cykeln",
    ev: [
      { t: "Gen 1", d: "Ett hårdhudat folk med stark sammanhållning erövrar" },
      { t: "Gen 2", d: "Bygger staten och minns kampen" },
      { t: "Gen 3", d: "Föds in i lyx – sammanhållningen tunnas ut" },
      { t: "Gen 4", d: "Faller för en ny, hungrigare grupp" },
    ],
  },
  "al-ghazali-elden": {
    type: "flow", title: "Vad ser vi egentligen?",
    steps: ["Elden rör vid bomullen", "Bomullen brinner", "Vi ser: det ena, sedan det andra", "Vi ser aldrig: att det måste ske"],
  },
  "spinoza-stenen": {
    type: "quote",
    text: "Om stenen kunde tänka skulle den tro att den var helt fri och flög bara för att den ville.",
    by: "Spinoza, brev 58 (1674), fritt återgivet",
  },
  "midgley-rormokeri": {
    type: "flow", title: "Filosofi som rörmokeri",
    steps: ["Något i samhället luktar illa", "Ingen ser orsaken", "Lyft på golvet: vilka idéer styr?", "Laga röret – inte bara lukten"],
  },
  "parfit-teleportern": {
    type: "flow", title: "Teleportern",
    steps: ["Du kliver in på jorden", "Skannas – originalet förstörs", "En kopia byggs på Mars", "Den minns allt. Är det du?"],
  },
  "williams-moralisk-tur": {
    type: "split", title: "Samma val, olika tur",
    a: { h: "Förare A", items: ["Kör berusad", "Kommer hem", "Kanske böter"] },
    b: { h: "Förare B", items: ["Kör berusad", "Ett barn springer ut", "Fängelse och skam"] },
  },
  "neurath-skeppet": {
    type: "flow", title: "Neuraths skepp",
    steps: ["Skeppet läcker", "Ingen hamn i sikte", "Byt en planka – stå på de andra", "Upprepa, för alltid"],
  },
  "wang-yangming": {
    type: "quote",
    text: "Att veta och inte handla är att ännu inte veta.",
    by: "Wang Yangming, Chuanxi lu",
  },
  "nagel-fladdermus": {
    type: "split", title: "Fladdermusens ekolod",
    a: { h: "Det vi kan veta", items: ["Ljudets frekvens", "Hjärnans signaler", "Hur den jagar"] },
    b: { h: "Det vi inte når", items: ["Hur det låter", "Hur det känns", "Hur det är"] },
  },
  "mozi-omsorg": {
    type: "flow", title: "Mozis trappa",
    steps: ["Stjäla persikor: fel", "Stjäla en gris: värre", "Döda en människa: ännu värre", "Erövra ett land: kallas ära"],
    note: "Varför blir brottet hyllat när det blir större?",
  },
  "boethius-hjulet": {
    type: "quote",
    text: "Om lyckan började stanna upp skulle hon inte längre vara lyckan.",
    by: "Boethius, Filosofins tröst, bok 2",
  },

  // ---------------- studier ----------------
  "challenger-minnen": {
    type: "dots", title: "Minnena 2,5 år senare", n: 25, of: 100,
    l: "Fel på alla huvudpunkter", l2: "Delvis eller helt rätt",
  },
  "kalla-handen": {
    type: "bars", title: "Vilket försök ville de göra om?", unit: "%",
    items: [{ l: "60 s kallt vatten", v: 31 }, { l: "60 s + 30 s lite varmare", v: 69 }],
    hi: 1, max: 100, note: "Längre smärta – men ett bättre slut.",
  },
  "kopiatorn": {
    type: "bars", title: "Släppte fram (5 sidor)", unit: "%",
    items: [{ l: "Inget skäl", v: 60 }, { l: "Tomt skäl", v: 93 }, { l: "Riktigt skäl", v: 94 }],
    hi: 1, max: 100,
  },
  "hofling-skoterskor": {
    type: "dots", title: "Sjuksköterskor i försöket", n: 21, of: 22,
    l: "Gick för att ge överdosen", l2: "Vägrade",
  },
  "capilano-bron": {
    type: "bars", title: "Andel som ringde upp", unit: "%",
    items: [{ l: "Svajande hängbro", v: 50 }, { l: "Låg, stadig bro", v: 13 }],
    hi: 0, max: 100, note: "9 av 18 mot 2 av 16 – en liten studie.",
  },
  "nunnestudien": {
    type: "bars", title: "Vid liv vid 85 års ålder", unit: "%",
    items: [{ l: "Gladaste fjärdedelen", v: 90 }, { l: "Minst glada fjärdedelen", v: 34 }],
    hi: 0, max: 100,
  },
  "rodin-plantor": {
    type: "bars", title: "Dödlighet efter 18 månader", unit: "%",
    items: [{ l: "Eget ansvar", v: 15 }, { l: "Personalen skötte allt", v: 30 }],
    hi: 0, max: 40,
  },
  "spotlight-trojan": {
    type: "bars", title: "Hur många lade märke till tröjan?", unit: "%",
    items: [{ l: "Bärarnas gissning", v: 50 }, { l: "Verkligheten", v: 23 }],
    hi: 1, max: 100,
  },
  "falsk-konsensus": {
    type: "bars", title: "Gissad andel som skulle säga ja", unit: "%",
    items: [{ l: "Gissat av dem som sa ja", v: 62 }, { l: "Gissat av dem som sa nej", v: 33 }],
    max: 100, note: "Båda grupperna trodde att de var i majoritet.",
  },
  "lenski-ecoli": {
    type: "timeline", title: "Evolution i provrör",
    ev: [
      { t: "1988", d: "12 populationer startas från samma stam" },
      { t: "2003", d: "En population börjar äta citrat" },
      { t: "2008", d: "Frysta prover visar vägen dit" },
      { t: "2020-tal", d: "Över 75 000 generationer" },
    ],
  },
  "semmelweis": {
    type: "bars", title: "Dödlighet på läkarnas avdelning", unit: "%",
    items: [{ l: "April 1847", v: 18.3 }, { l: "Juni 1847, med handtvätt", v: 2.2 }, { l: "Hela 1848", v: 1.3 }],
    hi: 2, max: 20,
  },
  "goodall-verktyg": {
    type: "quote",
    text: "Nu måste vi definiera om verktyg, definiera om människa – eller acceptera schimpanser som människor.",
    by: "Louis Leakey, telegram till Goodall",
  },
  "tetlock-experter": {
    type: "split", title: "Igelkotten och räven",
    a: { h: "Igelkotten", items: ["En stor idé", "Säker i tonen", "Syns i medierna", "Sämre träffsäkerhet"] },
    b: { h: "Räven", items: ["Många små idéer", "Tänker i sannolikheter", "Ändrar sig", "Bättre träffsäkerhet"] },
  },
  "galton-oxen": {
    type: "bars", title: "Oxens vikt i pund",
    items: [{ l: "Medianen av 787 gissningar", v: 1207, t: "1 207" }, { l: "Verklig vikt", v: 1198, t: "1 198" }],
    max: 1300, note: "Felen tog ut varandra.",
  },
  "pennebaker-skriva": {
    type: "flow", title: "Försöket",
    steps: ["Skriv i 15 minuter", "Om dina djupaste tankar och känslor", "Fyra dagar i rad", "Färre vårdbesök månaderna efter"],
  },
  "promenad-ideer": {
    type: "bars", title: "Kreativa idéer (index)",
    items: [{ l: "Sitter", v: 100 }, { l: "Går", v: 160 }],
    hi: 1, max: 180, note: "Sittande = 100. Ungefärliga värden.",
  },
  "maier-hjalploshet": {
    type: "timeline", title: "Femtio år av hjälplöshet",
    ev: [
      { t: "1967", d: "Hundar slutar fly efter stötar de inte kunde stoppa" },
      { t: "1975", d: "Inlärd hjälplöshet blir en modell för depression" },
      { t: "2000-tal", d: "Hjärnforskningen hittar grundläget" },
      { t: "2016", d: "Passivitet är medfött – kontroll är inlärd" },
    ],
  },

  // ---------------- begrepp ----------------
  "jevons-paradox": {
    type: "flow", title: "Jevons paradox",
    steps: ["Effektivare maskiner", "Billigare att använda", "Används till fler saker", "Total förbrukning ökar"],
  },
  "kobraeffekten": {
    type: "flow", title: "Råttorna i Hanoi",
    steps: ["Problem: råttor", "Belöning: per svans", "Svanslösa råttor släpps", "Folk föder upp råttor"],
  },
  "galls-lag": {
    type: "split", title: "Två sätt att bygga",
    a: { h: "Vuxet", items: ["Enkelt som fungerar", "Litet steg", "Testa", "Väx"] },
    b: { h: "Designat från noll", items: ["Stor plan", "Allt på en gång", "Fungerar inte", "Svårt att laga"] },
  },
  "conways-lag": {
    type: "split", title: "Organisationen blir produkten",
    a: { h: "Organisationen", items: ["Team A", "Team B", "Team C"] },
    b: { h: "Produkten", items: ["Modul A", "Modul B", "Modul C"] },
    note: "Glappen mellan teamen blir glapp i systemet.",
  },
  "hofstadters-lag": {
    type: "bars", title: "Tid för uppsatsen",
    items: [{ l: "Studenternas gissning", v: 34, t: "34 dagar" }, { l: "Faktisk tid", v: 56, t: "56 dagar" }],
    hi: 1, max: 60,
  },
  "brandolinis-lag": {
    type: "bars", title: "Energi som krävs",
    items: [{ l: "Skapa ett påstående", v: 1, t: "1×" }, { l: "Motbevisa det", v: 10, t: "10×" }],
    hi: 1, max: 10, note: "En storleksordning, enligt Brandolini.",
  },
  "moravecs-paradox": {
    type: "split", title: "Svårt för vem?",
    a: { h: "Svårt för oss", items: ["Schack", "Huvudräkning", "Formell logik"] },
    b: { h: "Svårt för robotar", items: ["Gå i trappor", "Vika tvätt", "Plocka upp ett ägg"] },
  },
  "braess-paradox": {
    type: "bars", title: "Restid i Braess klassiska exempel",
    items: [{ l: "Utan genvägen", v: 65, t: "65 min" }, { l: "Med genvägen", v: 80, t: "80 min" }],
    hi: 1, max: 90, note: "Alla väljer genvägen – och alla förlorar.",
  },
  "simpsons-paradox": {
    type: "bars", title: "Antagna, Berkeley 1973", unit: "%",
    items: [{ l: "Män, totalt", v: 44 }, { l: "Kvinnor, totalt", v: 35 }],
    max: 60, note: "Inom institutionerna var mönstret det omvända.",
  },
  "basfrekvensfelet": {
    type: "dots", title: "Elva positiva svar", n: 1, of: 11,
    l: "Faktiskt sjuk", l2: "Falsklarm",
  },
  "satisficing": {
    type: "split", title: "Två sätt att välja",
    a: { h: "Maximeraren", items: ["Jämför allt", "20 % högre lön", "Mindre nöjd"] },
    b: { h: "Satisficern", items: ["Sätter en ribba", "Tar första som duger", "Mer nöjd"] },
  },
  "riskkompensation": {
    type: "flow", title: "Riskkompensation",
    steps: ["Ny säkerhetsåtgärd", "Risken känns lägre", "Vi tar mer risk", "Vinsten krymper"],
  },
  "stockdaleparadoxen": {
    type: "split", title: "Två sorters hopp",
    a: { h: "Optimisten", items: ["Hemma till jul", "Hemma till påsk", "Besviken igen", "Ger upp"] },
    b: { h: "Stockdale", items: ["Vi kommer ut", "Det tar tid", "Möt det som är", "Håller ut"] },
  },
  "roda-drottningen": {
    type: "quote",
    text: "Här måste du springa så fort du kan för att stanna på samma ställe.",
    by: "Röda drottningen, Alice i Spegellandet (1871)",
  },
  "ostroms-allmanningar": {
    type: "flow", title: "Några av Ostroms principer",
    steps: ["Tydliga gränser", "Egna regler", "Övervakning", "Gradvisa straff", "Lokal konfliktlösning"],
  },

  // ---------------- myter ----------------
  "myt-rosenhan": {
    type: "versus",
    myth: "Friska försökspersoner lurade åtta sjukhus och avslöjade psykiatrin.",
    fact: "Granskning tyder på att studien till stor del var förvanskad.",
  },
  "myt-hungriga-domare": {
    type: "versus",
    myth: "Hungriga domare dömer hårdare – frigivningarna rasar före lunch.",
    fact: "Ärendenas ordning förklarar mycket, och effekten är orimligt stor.",
  },
  "myt-aldre-priming": {
    type: "versus",
    myth: "Ord om ålderdom får dig att gå långsammare.",
    fact: "Ingen effekt med fotoceller – bara när försöksledarna visste vad som väntades.",
  },
  "myt-power-posing": {
    type: "versus",
    myth: "Två minuter i kraftpose höjer testosteronet och modet.",
    fact: "Större studier hittar ingen effekt på hormoner eller beteende.",
  },
  "myt-lamlar": {
    type: "versus",
    myth: "Lämlar kastar sig i havet i massjälvmord.",
    fact: "Scenen var iscensatt. Lämlar vandrar – och drunknar ibland av misstag.",
  },
  "myt-glas-flyter": {
    type: "versus",
    myth: "Glas är en trögflytande vätska som rinner nedåt med åren.",
    fact: "Glas står still. Gamla rutor var ojämna redan när de tillverkades.",
  },
  "myt-socker": {
    type: "versus",
    myth: "Socker gör barn hyperaktiva.",
    fact: "Dubbelblinda studier hittar ingen effekt. Föräldrarnas förväntningar gör det.",
  },
  "myt-medellivslangd": {
    type: "versus",
    myth: "På medeltiden dog folk vid 30.",
    fact: "Snittet drogs ned av barnadödligheten. Vuxna blev ofta 50–60 år eller äldre.",
  },
  "myt-jarnjungfrun": {
    type: "timeline", title: "Järnjungfruns historia",
    ev: [
      { t: "1515", d: "Påstådd avrättning i Nürnberg – inga samtida belägg" },
      { t: "1793", d: "Siebenkees beskriver redskapet" },
      { t: "1800-tal", d: "Exemplar sätts ihop och ställs ut" },
      { t: "1944", d: "Nürnbergs järnjungfru förstörs i ett bombanfall" },
    ],
  },
  "myt-marie-antoinette": {
    type: "timeline", title: "Ett citat på drift",
    ev: [
      { t: "ca 1765", d: "Rousseau skriver om 'en stor prinsessa'" },
      { t: "1770", d: "Marie Antoinette kommer till Frankrike, 14 år" },
      { t: "1793", d: "Hon avrättas under revolutionen" },
      { t: "1800-tal", d: "Citatet knyts till henne" },
    ],
  },
  "myt-nero": {
    type: "versus",
    myth: "Nero spelade fiol medan Rom brann.",
    fact: "Fiolen fanns inte. Nero var i Antium och skyndade tillbaka för att hjälpa.",
  },
  "myt-einstein-matte": {
    type: "versus",
    myth: "Einstein underkändes i matematik i skolan.",
    fact: "Han kunde differential- och integralkalkyl innan han fyllde 15.",
  },
  "myt-arstiderna": {
    type: "versus",
    myth: "Det är sommar när jorden är närmast solen.",
    fact: "Jorden är närmast solen i januari. Axelns lutning ger årstiderna.",
  },
  "myt-salem": {
    type: "bars", title: "Avrättade i Salem 1692",
    items: [{ l: "Hängda", v: 19, t: "19" }, { l: "Pressad till döds", v: 1, t: "1" }, { l: "Brända på bål", v: 0, t: "0" }],
    hi: 2, max: 20,
  },
  "myt-struts": {
    type: "versus",
    myth: "Strutsen gömmer huvudet i sanden när den är rädd.",
    fact: "Den vänder sina ägg i en grop – och flyr i 70 km/h vid fara.",
  },
  "myt-blixten": {
    type: "versus",
    myth: "Blixten slår aldrig ned två gånger på samma ställe.",
    fact: "Empire State Building träffas runt 20–25 gånger om året.",
  },
  "myt-kameleonten": {
    type: "versus",
    myth: "Kameleonter byter färg för att smälta in.",
    fact: "Färgen är mest ett språk – för att imponera, hota eller ge upp.",
  },
};
