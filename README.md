# Smart Content

Korta, lärorika videor (YouTube Shorts-format, 1080×1920, 34 s) om filosofer,
vetenskapliga studier, tankemodeller och vanliga myter – plus ett scrollflöde
där varje video täcker skärmen.

## De tre stegen

| Steg | Var | Vad |
| --- | --- | --- |
| 1. Kurera innehåll | `content/*.json`, `content/visuals.mjs` | 87 shorts med hook, tre punkter, lärdom, källa, en längre "läs mer"-text och en animerad visualisering |
| 2. Bygg videor | `video/index.html` | En [HyperFrames](https://hyperframes.heygen.com)-mall (HTML + GSAP) som drivs av variabler. Varje innehållspost blir en rad i en batch-rendering |
| 3. Scrollflöde | `site/` | Statisk sida: helskärmsvideo, snap-scroll, filter, "läs mer", dela-länk per video |

```
content/*.json ──build-content──▶ video/batch.json ──hyperframes render --batch──▶ renders/*.mp4
                                 site/data/shorts.json                                  │
                                                                     encode-web.sh ◀────┘
                                                                          ▼
                                                     site/videos/*.mp4 + site/posters/*.jpg
```

## Kom igång

Kräver Node 22+ och FFmpeg.

```bash
npm install
npm run content      # validerar innehållet, skriver batch + flödesdata
npm run render       # renderar bara de videor som saknas i renders/ (~1 min/st)
npm run web          # komprimerar till site/videos + affischbilder
npm run serve        # öppna flödet lokalt
npm run preview      # redigera mallen i HyperFrames Studio
```

`renders/` (originalen i full kvalitet) är gitignorerad. Det är de du laddar
upp till YouTube; `site/videos/` är lättare webbkopior (de går också bra att ladda upp).

## Lägga till en ny short

Lägg till ett objekt i valfri fil i `content/`:

```json
{
  "id": "unikt-id",
  "kind": "filosofi | studie | begrepp | myt",
  "hook": "Första raden – syns i första bildrutan",
  "title": "Namn eller studie",
  "meta": "Vem · när",
  "stat": "65 %",              // valfri, räknas upp i videon
  "statLabel": "vad siffran betyder",
  "points": ["…", "…", "…"],
  "takeaway": "En mening att minnas",
  "source": "Källa",
  "more": "Längre text som visas under Läs mer i flödet"
}
```

Lägg också till en visualisering med samma id i `content/visuals.mjs`, till exempel:

```js
"mitt-id": { type: "bars", title: "Andel som …", unit: "%",
  items: [{ l: "Grupp A", v: 59 }, { l: "Grupp B", v: 35 }], hi: 0, max: 100 },
```

| Typ | Passar för | Fält |
| --- | --- | --- |
| `bars` | jämföra siffror | `items[{l, v, t?}]`, `hi`, `max`, `unit` |
| `line` | utveckling över tid | `x[]`, `series[{l, pts[]}]`, `ymax`, `marks[{i, s?, t}]`, `mean?` |
| `dots` | andelar ("47 av 100") | `n`, `of`, `l`, `l2` |
| `versus` | myt mot fakta | `myth`, `fact` |
| `quote` | citat | `text`, `by` |
| `flow` | steg, resonemang, cykler | `steps[]`, `loop?` |
| `split` | två sidor | `a{h, items}`, `b{h, items}` |
| `gauge` | en skala som stiger | `min`, `max`, `v`, `unit`, `zones[]` |
| `timeline` | historik | `ev[{t, d}]` |
| `spectrum` | mitten mellan ytterligheter | `rows[[vänster, mitt, höger]]` |

Alla typer tar även `title` och `note`. Kör sedan `npm run render && npm run web`. Valideringen stoppar för långa texter.

### Skrivregler

- Hook ≤ 100 tecken, punkter ≤ 105, lärdom ≤ 62. Kortare är bättre.
- Ange källa för allt. Om en känd studie har replikerats dåligt eller kritiserats: säg det
  (se t.ex. Stanford-fängelset, marshmallowtestet, syltstudien).
- Långa sammansatta ord i titlar kan få ett mjukt bindestreck (`­`).

## Publicera flödet

`.github/workflows/pages.yml` publicerar `site/` till GitHub Pages vid push till `main`.
Slå på det under **Settings → Pages → Source: GitHub Actions**. (Pages på privata repon kräver ett betalt GitHub-konto.)

Varje video har en egen länk: `…/#epiktetos-kontroll`.

## Mallen

Upplägget är inspirerat av [Deepstash](https://deepstash.com): en källa kokas ner till ett fåtal korta idékort.

- 0–3,6 s: hook (läsbar redan i första bildrutan – den blir thumbnail)
- 3,6–7,6 s: vem/vad, eventuell siffra som räknas upp
- 7,6–18,6 s: animerad visualisering (staplar, kurva, citat, flöde …)
- 18,6–28,2 s: tre idékort, ett i taget
- 28,2–34 s: lärdom med överstrykning + källa
- Lugn bakgrundsmusik genererad med FFmpeg (`scripts/make-music.sh` → `video/assets/pad-*.m4a`): två ackord som långsamt glider i varandra, en tonart per kategori.
- All text ligger inom YouTube Shorts säkra yta (ovanför 1330 px, inte under knapparna till höger).
