# Smart Content

Korta, lärorika videor (YouTube Shorts-format, 1080×1920, 19 s) om filosofer,
vetenskapliga studier, tankemodeller och vanliga myter – plus ett scrollflöde
där varje video täcker skärmen.

## De tre stegen

| Steg | Var | Vad |
| --- | --- | --- |
| 1. Kurera innehåll | `content/*.json` | 87 shorts med hook, tre punkter, lärdom, källa och en längre "läs mer"-text |
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

Kör sedan `npm run render && npm run web`. Valideringen stoppar för långa texter.

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

- 0–3,6 s: hook (läsbar redan i första bildrutan – den blir thumbnail)
- 3,6–7,4 s: vem/vad, eventuell siffra som räknas upp
- 7,4–14,4 s: tre punkter
- 14,4–19 s: lärdom + källa
- Lugn bakgrundsmusik genererad med FFmpeg (`video/assets/pad-*.m4a`), en ton per kategori.
- All text ligger inom YouTube Shorts säkra yta (ovanför 1330 px, inte under knapparna till höger).
