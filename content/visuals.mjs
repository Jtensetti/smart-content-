// One animated visual per short, shown in the middle of the video.
// Types: bars, line, dots, versus, quote, flow, split, gauge, timeline, spectrum.
// `title` is the small heading above the visual, `note` the line under it (both optional).
// Numbers here come from the cited sources; illustrative shapes say so in `note`.

import DJUP from "./visuals-djup.mjs";

const curve = (n, f) => Array.from({ length: n }, (_, i) => +f(i).toFixed(3));

export default {
  // ---------------- filosofi ----------------
  "epiktetos-kontroll": {
    type: "split", title: "Kontrollens dikotomi",
    a: { h: "Du styr", items: ["Dina omdömen", "Dina val", "Dina handlingar", "Din insats"] },
    b: { h: "Du styr inte", items: ["Vädret", "Andras åsikter", "Det förflutna", "Utfallet"] },
    note: "Lägg energin i den vänstra kolumnen.",
  },
  "sokrates-vet-inget": {
    type: "quote",
    text: "Jag tror inte att jag vet det jag inte vet.",
    by: "Sokrates, i Platons Försvarstal",
  },
  "platon-grottan": {
    type: "flow", title: "Vägen ut ur grottan",
    steps: ["Fångarna ser skuggor på väggen", "En fånge vänder sig och ser elden", "Han går ut och bländas av solen", "Han återvänder – och blir hånad"],
  },
  "aristoteles-vana": {
    type: "spectrum", title: "Den gyllene medelvägen",
    rows: [["Feghet", "Mod", "Dumdristighet"], ["Snålhet", "Generositet", "Slöseri"], ["Tråkighet", "Humor", "Clowneri"]],
    note: "Dygden ligger mellan två ytterligheter.",
  },
  "seneca-livets-korthet": {
    type: "quote",
    text: "Det är inte så att vi har kort tid, utan att vi slösar bort mycket av den.",
    by: "Seneca, Om livets korthet",
  },
  "marcus-hindret": {
    type: "quote",
    text: "Det som hindrar handlingen främjar handlingen. Det som står i vägen blir vägen.",
    by: "Marcus Aurelius, Självbetraktelser 5:20",
  },
  "epikuros-lycka": {
    type: "split", title: "Två sorters begär",
    a: { h: "Räcker långt", items: ["Mat och vatten", "Vänner", "Tak över huvudet", "Eftertanke"] },
    b: { h: "Skapar oro", items: ["Lyx", "Berömmelse", "Makt", "Mer och mer"] },
  },
  "diogenes-solen": {
    type: "quote",
    text: "Flytta dig lite, du står i min sol.",
    by: "Diogenes till Alexander den store, enligt Plutarchos",
  },
  "descartes-cogito": {
    type: "flow", title: "Metodiskt tvivel",
    steps: ["Sinnena kan lura mig", "Drömmar känns verkliga", "Allt kan betvivlas …", "… utom att jag tvivlar", "Jag tänker, alltså finns jag"],
  },
  "hume-ar-bor": {
    type: "flow", title: "Humes giljotin",
    steps: ["Är: 'Folk har alltid gjort så'", "Glapp: inga fakta säger vad vi bör", "Bör: 'Alltså ska vi göra så'"],
    note: "Glappet kräver en värdering – säg den högt.",
  },
  "kant-imperativ": {
    type: "flow", title: "Testa din handlingsregel",
    steps: ["Regel: ljug för att få ett lån", "Tänk om alla gjorde så", "Då skulle ingen tro på löften", "Regeln förstör sig själv – förkasta den"],
  },
  "nietzsche-aterkomst": {
    type: "quote",
    text: "Vill du detta en gång till och otaliga gånger till?",
    by: "Nietzsche, Den glada vetenskapen §341",
  },
  "kierkegaard-baklanges": {
    type: "quote",
    text: "Livet kan bara förstås baklänges, men det måste levas framlänges.",
    by: "Søren Kierkegaard, dagboken 1843",
  },
  "sartre-existens": {
    type: "split", title: "Vad kommer först?",
    a: { h: "Kniven", items: ["Syftet bestäms", "Sedan tillverkas den"] },
    b: { h: "Människan", items: ["Hon finns först", "Sedan skapar hon syftet"] },
    note: "Existensen föregår essensen.",
  },
  "camus-sisyfos": {
    type: "quote",
    text: "Man måste föreställa sig Sisyfos lycklig.",
    by: "Albert Camus, Myten om Sisyfos",
  },
  "beauvoir-blir": {
    type: "quote",
    text: "Man föds inte till kvinna, man blir det.",
    by: "Simone de Beauvoir, Det andra könet",
  },
  "mill-skadeprincipen": {
    type: "quote",
    text: "Makt får utövas över en individ mot hans vilja bara för att förhindra skada på andra.",
    by: "John Stuart Mill, Om friheten (fritt översatt)",
  },
  "rawls-slojan": {
    type: "flow", title: "Tankeexperimentet",
    steps: ["Du ska välja samhällets regler", "Men du vet inte vem du blir", "Rik eller fattig? Frisk eller sjuk?", "Vilka regler väljer du då?"],
  },
  "laozi-vatten": {
    type: "quote",
    text: "Inget i världen är mjukare än vatten, men inget övervinner bättre det hårda.",
    by: "Laozi, Tao te ching 78",
  },
  "konfucius-gyllene": {
    type: "quote",
    text: "Gör inte mot andra det du inte vill ska göras mot dig.",
    by: "Konfucius, Samtalen 15:24",
  },
  "buddha-lidande": {
    type: "flow", title: "De fyra ädla sanningarna",
    steps: ["Lidande finns", "Det har en orsak: begär", "Det kan upphöra", "Vägen dit: den åttafaldiga vägen"],
  },
  "wittgenstein-sprak": {
    type: "quote",
    text: "Mitt språks gränser betyder min världs gränser.",
    by: "Wittgenstein, Tractatus 5.6",
  },
  "arendt-banalitet": {
    type: "quote",
    text: "Problemet med Eichmann var just att så många var som han.",
    by: "Hannah Arendt, Den banala ondskan",
  },
  "popper-falsifiering": {
    type: "dots", title: "Alla svanar är vita?", n: 1, of: 100, l: "En svart svan räcker", l2: "Tusen vita bevisar inget",
  },
  "kuhn-paradigm": {
    type: "flow", title: "Hur vetenskapen byter fot", loop: true,
    steps: ["Normalvetenskap", "Avvikelser hopar sig", "Kris", "Revolution: nytt paradigm"],
  },
  "pascal-rummet": {
    type: "quote",
    text: "Människans hela olycka kommer av en enda sak: att inte kunna sitta still i ett rum.",
    by: "Blaise Pascal, Tankar",
  },
  "heraklitos-floden": {
    type: "quote",
    text: "Man kan inte stiga ner i samma flod två gånger.",
    by: "Herakleitos, enligt Platon",
  },
  "hobbes-naturtillstand": {
    type: "quote",
    text: "Och människans liv blir ensamt, fattigt, otäckt, brutalt och kort.",
    by: "Thomas Hobbes, Leviathan",
  },
  "montaigne-essaer": {
    type: "quote",
    text: "Det största i världen är att veta hur man tillhör sig själv.",
    by: "Montaigne, Essäer I:39",
  },

  // ---------------- studier ----------------
  "milgram-lydnad": {
    type: "gauge", title: "Generatorns skala", min: 15, max: 450, v: 450, unit: "V",
    zones: ["Lätt chock", "Måttlig chock", "Stark chock", "Intensiv chock", "Fara: svår chock", "XXX"],
    note: "26 av 40 vred hela vägen.",
  },
  "asch-konformitet": {
    type: "bars", title: "Andel fel svar", unit: "%",
    items: [{ l: "Ensam, utan grupp", v: 1, t: "<1 %" }, { l: "I grupp, snitt per fråga", v: 37 }, { l: "Föll minst en gång", v: 75 }],
    hi: 2, max: 100,
  },
  "wilson-elstotar": {
    type: "bars", title: "Gav sig själva en stöt", unit: "%",
    items: [{ l: "Män", v: 67 }, { l: "Kvinnor", v: 25 }], max: 100,
    note: "Hellre en elstöt än 15 minuter med sina tankar.",
  },
  "harvard-lycka": {
    type: "timeline", title: "85 år av liv",
    ev: [
      { t: "1938", d: "268 Harvardstudenter rekryteras" },
      { t: "1940-tal", d: "456 pojkar från Bostons fattiga kvarter läggs till" },
      { t: "Vid 50", d: "Hur nöjda är de med sina relationer?" },
      { t: "Vid 80", d: "Just det förutsäger bäst vem som är frisk" },
    ],
  },
  "vandrande-sinne": {
    type: "dots", title: "En vanlig vaken timme", n: 47, of: 100, l: "Tankarna vandrar", l2: "Här och nu",
  },
  "dunning-kruger": {
    type: "bars", title: "Sämsta fjärdedelen, percentil",
    items: [{ l: "Deras faktiska resultat", v: 12, t: "12:e" }, { l: "Vad de själva trodde", v: 62, t: "62:a" }],
    hi: 1, max: 100,
  },
  "osynliga-gorillan": {
    type: "dots", title: "Av alla som räknade passningar", n: 50, of: 100, l: "Missade gorillan", l2: "Såg den",
  },
  "loftus-minne": {
    type: "bars", title: "Mindes krossat glas", unit: "%",
    items: [{ l: "Frågan sa 'smashade'", v: 32 }, { l: "Frågan sa 'träffade'", v: 14 }, { l: "Ingen fråga om fart", v: 12 }],
    hi: 0, max: 50, note: "Det fanns inget krossat glas i filmen.",
  },
  "ebbinghaus-glomska": {
    type: "line", title: "Andel kvar i minnet", ymax: 100,
    x: ["0", "20 min", "1 h", "9 h", "1 d", "2 d", "6 d", "31 d"],
    series: [{ l: "Minne", pts: [100, 58, 44, 36, 34, 28, 25, 21] }],
    marks: [{ i: 1, t: "58 %" }, { i: 7, t: "21 %" }],
    note: "Mest försvinner direkt – sedan planar kurvan ut.",
  },
  "testeffekten": {
    type: "bars", title: "Mindes efter en vecka", unit: "%",
    items: [{ l: "Läste texten fyra gånger", v: 40 }, { l: "Läste en gång, övade tre", v: 61 }], hi: 1, max: 100,
  },
  "somnbrist": {
    type: "line", title: "Uppmärksamhetsmissar per test", ymax: 20,
    x: ["Dag 0", "", "", "", "", "", "", "Dag 14"],
    series: [
      { l: "4 h", pts: [2, 5, 8, 10, 12, 14, 16, 17] },
      { l: "6 h", pts: [2, 3.5, 5, 6, 7, 8, 9, 10] },
      { l: "8 h", pts: [2, 2, 2, 2.2, 2, 2, 2.1, 2] },
    ],
    note: "Ungefärlig bild av Van Dongen m.fl. 2003.",
  },
  "oppen-placebo": {
    type: "bars", title: "Kände tydlig lindring", unit: "%",
    items: [{ l: "Fick öppet placebo", v: 59 }, { l: "Fick ingenting", v: 35 }], hi: 0, max: 100,
  },
  "barmhartige-samariten": {
    type: "bars", title: "Stannade och hjälpte", unit: "%",
    items: [{ l: "Gott om tid", v: 63 }, { l: "Lite bråttom", v: 45 }, { l: "Mycket bråttom", v: 10 }], hi: 2, max: 100,
  },
  "rokfyllda-rummet": {
    type: "bars", title: "Slog larm om röken", unit: "%",
    items: [{ l: "Ensam i rummet", v: 75 }, { l: "Tre ovetande deltagare", v: 38 }, { l: "Med två passiva skådespelare", v: 10 }],
    hi: 2, max: 100,
  },
  "bekraftelsebias": {
    type: "flow", title: "2 – 4 – 6. Vad är regeln?",
    steps: ["8 – 10 – 12? Ja, stämmer", "20 – 22 – 24? Ja, stämmer", "'Regeln är plus två!' Fel.", "1 – 2 – 3? Ja – regeln: stigande tal"],
    note: "Testa det som kan visa att du har fel.",
  },
  "festinger-dissonans": {
    type: "split", title: "Efter lögnen: hur kul var uppgiften?",
    a: { h: "Fick 1 dollar", items: ["Inget bra skäl att ljuga", "'Det var nog ganska kul'"] },
    b: { h: "Fick 20 dollar", items: ["Bra skäl att ljuga", "'Det var tråkigt'"] },
  },
  "ikea-effekten": {
    type: "bars", title: "Betalningsvilja för en IKEA-låda",
    items: [{ l: "Byggde den själv", v: 78, t: "78 cent" }, { l: "Färdigbyggd", v: 48, t: "48 cent" }], hi: 0, max: 100,
  },
  "forankring": {
    type: "bars", title: "Gissad andel afrikanska FN-länder", unit: "%",
    items: [{ l: "Hjulet visade 10", v: 25 }, { l: "Hjulet visade 65", v: 45 }], hi: 1, max: 100,
    note: "Ett slumptal flyttade gissningen med 20 procentenheter.",
  },
  "sylt-valet": {
    type: "bars", title: "Syltbordet i butiken", unit: "%",
    items: [{ l: "24 sorter – stannade", v: 60 }, { l: "6 sorter – stannade", v: 40 }, { l: "24 sorter – köpte", v: 3 }, { l: "6 sorter – köpte", v: 30 }],
    hi: 3, max: 100, note: "Köpt = andel av dem som stannade.",
  },
  "robbers-cave": {
    type: "flow", title: "Tre veckor i lägret",
    steps: ["Två grupper bildas var för sig", "Tävlingar: fientlighet och räder", "Bara kontakt hjälper inte", "Gemensamma problem: de enas"],
  },
  "traning-depression": {
    type: "bars", title: "Effekt mot depression (högre = bättre)",
    items: [{ l: "Promenad eller jogging", v: 62, t: "0,62" }, { l: "Yoga", v: 55, t: "0,55" }, { l: "Styrketräning", v: 49, t: "0,49" }, { l: "SSRI (jämförelse)", v: 26, t: "0,26" }],
    hi: 0, max: 80, note: "Effektstorlek, Noetel m.fl. BMJ 2024.",
  },
  "tacksamhet": {
    type: "split", title: "Tio veckors anteckningar",
    a: { h: "Tacksamhet", items: ["Mer optimistiska", "Färre krämpor", "Tränade mer"] },
    b: { h: "Irritation", items: ["Mindre optimistiska", "Fler krämpor", "Tränade mindre"] },
  },
  "lotteri-anpassning": {
    type: "bars", title: "Hur lycklig är du nu? (0–5)",
    items: [{ l: "Lotterivinnare", v: 4.0, t: "4,0" }, { l: "Kontrollgrupp", v: 3.8, t: "3,8" }, { l: "Förlamade i olycka", v: 3.0, t: "3,0" }],
    max: 5, note: "Vinnarna njöt mindre av vardagen.",
  },
  "pygmalion": {
    type: "bars", title: "IQ-ökning på ett år, årskurs 1",
    items: [{ l: "'Blomstrare' (slumpvis valda)", v: 27, t: "+27" }, { l: "Övriga elever", v: 12, t: "+12" }], hi: 0, max: 40,
  },
  "nara-exponering": {
    type: "line", title: "Hur mycket man gillar något", ymax: 100,
    x: ["0 ggr", "1", "2", "5", "10", "25 ggr"],
    series: [{ l: "Gillande", pts: [30, 42, 50, 60, 68, 76] }],
    note: "Schematisk bild av Zajonc 1968.",
  },
  "pengar-lycka": {
    type: "line", title: "Välbefinnande och årsinkomst", ymax: 100,
    x: ["15 000 $", "", "", "100 000 $", "", "500 000 $"],
    series: [
      { l: "De flesta", pts: [30, 42, 52, 60, 70, 82] },
      { l: "Olyckligaste 20 %", pts: [10, 20, 28, 33, 33, 33] },
    ],
    marks: [{ i: 3, s: 1, t: "Platå" }],
    note: "Schematisk bild av Killingsworth m.fl. 2023.",
  },
  "ultimatumspelet": {
    type: "dots", title: "Ett snålt bud: 20 av 100 kr", n: 20, of: 100, l: "B:s del", l2: "A:s del",
    note: "Sådana bud avvisas ofta – fast B då får noll.",
  },

  // ---------------- tankemodeller ----------------
  "ockhams-rakkniv": {
    type: "bars", title: "Om varje antagande är 90 % säkert", unit: "%",
    items: [{ l: "1 antagande", v: 90 }, { l: "2 antaganden", v: 81 }, { l: "3 antaganden", v: 73 }, { l: "5 antaganden", v: 59 }, { l: "8 antaganden", v: 43 }],
    hi: 4, max: 100, note: "Chansen att allt stämmer krymper för varje led.",
  },
  "hanlons-rakkniv": {
    type: "flow", title: "När något går fel",
    steps: ["Någon gjorde dig illa", "Kan det vara slarv, stress eller okunskap?", "Anta det först", "Mindre ilska – och oftare rätt"],
  },
  "ranta-pa-ranta": {
    type: "line", title: "Ett år, 1 % per dag", ymax: 40,
    x: ["Dag 1", "", "", "", "", "", "", "", "", "", "", "", "Dag 365"],
    series: [
      { l: "1 % bättre", pts: curve(13, (i) => Math.pow(1.01, i * 365 / 12)) },
      { l: "1 % sämre", pts: curve(13, (i) => Math.pow(0.99, i * 365 / 12)) },
    ],
    marks: [{ i: 12, s: 0, t: "37,8" }, { i: 12, s: 1, t: "0,03" }],
  },
  "survivorship-bias": {
    type: "split", title: "Andra världskriget: var ska planen pansras?",
    a: { h: "Planen som kom hem", items: ["Hål i vingarna", "Hål i stjärten", "Hål i flygkroppen"] },
    b: { h: "Det som saknades", items: ["Träffar i motorn", "De planen störtade"] },
    note: "Pansra där hålen inte syns.",
  },
  "sunk-cost": {
    type: "split", title: "Inför nästa beslut",
    a: { h: "Spelar roll", items: ["Vad det kostar framåt", "Vad du får ut framåt"] },
    b: { h: "Spelar ingen roll", items: ["Det du redan betalat", "Tiden du redan lagt"] },
  },
  "pareto": {
    type: "bars", title: "Pareto, Italien ca 1900", unit: "%",
    items: [{ l: "Andel av befolkningen", v: 20 }, { l: "Andel av marken de ägde", v: 80 }], hi: 1, max: 100,
  },
  "goodharts-lag": {
    type: "flow", title: "Så går det till",
    steps: ["Mått: antal lösta ärenden", "Måttet blir mål – med bonus", "Ärenden delas upp och stängs för tidigt", "Siffran stiger, kvaliteten sjunker"],
  },
  "chestertons-staket": {
    type: "flow", title: "Innan du river",
    steps: ["Du hittar ett staket", "Du ser ingen nytta med det", "Ta reda på varför det byggdes", "Förstår du skälet – då får du riva"],
  },
  "kartan-terrangen": {
    type: "split", title: "Modell och verklighet",
    a: { h: "Kartan", items: ["Budgeten", "Schemat", "Diagnosen", "Prognosen"] },
    b: { h: "Terrängen", items: ["Verkliga kostnader", "Det som händer", "Patienten", "Framtiden"] },
  },
  "fermi": {
    type: "flow", title: "Pianostämmare i Chicago",
    steps: ["3 miljoner invånare: 1,5 miljon hushåll", "Var 15:e har piano: 100 000 pianon", "En stämning per år: 100 000 jobb", "En stämmare hinner ca 1 000 per år", "Svar: runt 100 stämmare"],
  },
  "inversion": {
    type: "flow", title: "Vänd på frågan",
    steps: ["Mål: må bra", "Vad garanterar att jag mår dåligt?", "Sömnbrist, stillasittande, ensamhet", "Undvik dem först"],
  },
  "regression-medel": {
    type: "line", title: "Landningar, en efter en", ymax: 10, mean: 5,
    x: ["", "", "", "", "", "", "", "", "", "", ""],
    series: [{ l: "Resultat", pts: [5.2, 4.5, 5.6, 4.8, 8.8, 5.4, 4.7, 5.3, 1.6, 4.9, 5.2] }],
    marks: [{ i: 4, t: "Beröm" }, { i: 8, t: "Skäll" }],
    note: "Efter toppar och dalar kommer det vanliga ändå.",
  },
  "tit-for-tat": {
    type: "flow", title: "Fyra rader kod", loop: true,
    steps: ["Börja med att samarbeta", "Gör som motspelaren gjorde sist", "Svek? Svik tillbaka – en gång", "Samarbetar de igen? Förlåt direkt"],
  },
  "feynman-teknik": {
    type: "flow", title: "Feynmantekniken", loop: true,
    steps: ["Välj ett ämne", "Förklara det som för ett barn", "Hitta luckorna", "Läs på och förenkla igen"],
  },
  "parkinsons-lag": {
    type: "quote",
    text: "Arbete expanderar så att det fyller den tid som finns tillgänglig för det.",
    by: "C. Northcote Parkinson, The Economist 1955",
  },
  "lindy": {
    type: "timeline", title: "Har funnits – väntas finnas",
    ev: [
      { t: "1 år", d: "En ny app: kanske ett år till" },
      { t: "50 år", d: "En klassisk roman: kanske 50 år till" },
      { t: "2 400 år", d: "Platons dialoger: kanske lika länge till" },
    ],
    note: "En tumregel för idéer och teknik – inte för människor.",
  },

  // ---------------- myter ----------------
  "myt-10-procent": {
    type: "bars", title: "Hjärnans andel av kroppen", unit: "%",
    items: [{ l: "Av kroppsvikten", v: 2 }, { l: "Av energin", v: 20 }], hi: 1, max: 25,
    note: "Ett organ som var 90 % oanvänt vore ett dyrt slöseri.",
  },
  "myt-larstilar": {
    type: "versus",
    myth: "Du lär dig bäst i din egen stil – visuell, auditiv eller praktisk.",
    fact: "Välkontrollerade studier visar ingen vinst av att matcha undervisningen efter stil.",
  },
  "myt-stanford-fangelse": {
    type: "timeline", title: "Experimentets historia",
    ev: [
      { t: "1971", d: "Avbryts efter 6 av 14 planerade dagar" },
      { t: "1973", d: "Publiceras och hamnar i läroböckerna" },
      { t: "2002", d: "BBC-försök: vakterna blir inte brutala" },
      { t: "2018", d: "Arkiv: vakterna hade fått instruktioner" },
    ],
  },
  "myt-genovese": {
    type: "versus",
    myth: "38 vittnen såg på och gjorde ingenting.",
    fact: "Få såg något tydligt, minst två ringde polisen och en granne höll om henne.",
  },
  "myt-ego-depletion": {
    type: "bars", title: "Uppmätt effekt (d)",
    items: [{ l: "Metaanalys 2010, 198 studier", v: 62, t: "0,62" }, { l: "23 labb, 2 141 deltagare, 2016", v: 4, t: "0,04" }],
    hi: 1, max: 80, note: "Nära noll när alla gjorde exakt samma test.",
  },
  "myt-10000-timmar": {
    type: "bars", title: "Hur mycket övning förklarar", unit: "%",
    items: [{ l: "Spel", v: 26 }, { l: "Musik", v: 21 }, { l: "Idrott", v: 18 }, { l: "Utbildning", v: 4 }, { l: "Yrken", v: 1, t: "<1 %" }],
    max: 40, note: "Metaanalys, Macnamara m.fl. 2014.",
  },
  "myt-guldfisk": {
    type: "versus",
    myth: "En guldfisk minns bara i tre sekunder.",
    fact: "Guldfiskar lär sig trick och minns dem i flera månader.",
  },
  "myt-tungkartan": {
    type: "versus",
    myth: "Sött på spetsen, bittert längst bak – varje smak har sin zon.",
    fact: "Alla grundsmaker kan kännas över hela tungan.",
  },
  "myt-napoleon": {
    type: "bars", title: "Längd i centimeter",
    items: [{ l: "Napoleon", v: 169, t: "169" }, { l: "Snittfransman ca 1800", v: 165, t: "ca 165" }], hi: 0, max: 190,
  },
  "myt-vikingahjalmar": {
    type: "versus",
    myth: "Vikingar bar hjälmar med horn.",
    fact: "Den enda hela vikingahjälmen saknar horn. Hornen kom från 1800-talets operor.",
  },
  "myt-kinesiska-muren": {
    type: "versus",
    myth: "Kinesiska muren syns från rymden med blotta ögat.",
    fact: "Från 400 km höjd är den som ett hårstrå på fem meters håll.",
  },
  "myt-platt-jord": {
    type: "timeline", title: "Den runda jorden",
    ev: [
      { t: "ca 350 f.Kr.", d: "Aristoteles: jordens skugga på månen är rund" },
      { t: "ca 240 f.Kr.", d: "Eratosthenes mäter jordens omkrets" },
      { t: "700-talet", d: "Munken Beda skriver om ett jordklot" },
      { t: "1492", d: "Columbus tvist gällde avståndet, inte formen" },
    ],
  },
  "myt-mozart": {
    type: "timeline", title: "En effekt som krympte",
    ev: [
      { t: "1993", d: "Studenter klarar en rumslig uppgift bättre i ca 15 min" },
      { t: "1998", d: "Georgias guvernör vill ge alla nyfödda en klassisk cd" },
      { t: "1999", d: "Metaanalys: effekten är liten" },
      { t: "2010", d: "Metaanalys: ingen särskild Mozarteffekt" },
    ],
  },
  "myt-hawthorne": {
    type: "versus",
    myth: "Arbetarna blev mer produktiva bara av att bli iakttagna.",
    fact: "Originaldatan visar en mycket svagare effekt än historien säger.",
  },
  "myt-marshmallow": {
    type: "versus",
    myth: "Barn som kan vänta på godiset lyckas bättre i livet.",
    fact: "Med 900 barn och hänsyn till bakgrund krymper sambandet nästan till noll.",
  },
  ...DJUP,
};
