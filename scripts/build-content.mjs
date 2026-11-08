// Merges content/*.json, validates it, orders the feed and writes:
//   video/batch.json      – one row of HyperFrames variables per short
//   site/data/shorts.json – the feed data for the scroll page
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const KINDS = {
  filosofi: { tag: "FILOSOFI", accent: "#f5b942", accent2: "#e8613c", label: "Filosofi" },
  studie: { tag: "STUDIE", accent: "#4cc9f0", accent2: "#4361ee", label: "Studie" },
  begrepp: { tag: "TANKEMODELL", accent: "#b892ff", accent2: "#ff6fb5", label: "Tankemodell" },
  myt: { tag: "MYTKOLL", accent: "#ff6b6b", accent2: "#ffb04c", label: "Myt" },
};
const LIMITS = { hook: 100, title: 34, meta: 60, point: 105, takeaway: 62, source: 90, statLabel: 70 };

const items = readdirSync(join(root, "content"))
  .filter((f) => f.endsWith(".json"))
  .flatMap((f) => JSON.parse(readFileSync(join(root, "content", f), "utf8")));

// ---- validate ----
const problems = [];
const ids = new Set();
for (const it of items) {
  const where = it.id || "(no id)";
  if (!it.id || ids.has(it.id)) problems.push(`${where}: missing or duplicate id`);
  ids.add(it.id);
  if (!KINDS[it.kind]) problems.push(`${where}: unknown kind ${it.kind}`);
  for (const k of ["hook", "title", "meta", "takeaway", "source", "more"])
    if (!it[k]) problems.push(`${where}: missing ${k}`);
  if (!Array.isArray(it.points) || it.points.length !== 3) problems.push(`${where}: needs exactly 3 points`);
  const check = (k, v, max) => v && v.length > max && problems.push(`${where}: ${k} is ${v.length} chars (max ${max})`);
  check("hook", it.hook, LIMITS.hook);
  check("title", it.title, LIMITS.title);
  check("meta", it.meta, LIMITS.meta);
  check("takeaway", it.takeaway, LIMITS.takeaway);
  check("source", it.source, LIMITS.source);
  check("statLabel", it.statLabel, LIMITS.statLabel);
  (it.points || []).forEach((p, i) => check(`point ${i + 1}`, p, LIMITS.point));
}
if (problems.length) {
  console.error("Content problems:\n  " + problems.join("\n  "));
  process.exit(1);
}

// ---- order the feed: round-robin across kinds so the scroll stays varied ----
const byKind = Object.keys(KINDS).map((k) => items.filter((i) => i.kind === k));
const feed = [];
while (byKind.some((l) => l.length)) for (const l of byKind) if (l.length) feed.push(l.shift());

const pad = (n) => String(n).padStart(2, "0");
const rows = feed.map((it, i) => {
  const k = KINDS[it.kind];
  return {
    slug: it.id,
    kind: it.kind,
    tag: k.tag,
    num: `#${pad(i + 1)}`,
    hook: it.hook,
    title: it.title,
    meta: it.meta,
    stat: it.stat || "",
    statLabel: it.statLabel || "",
    p1: it.points[0],
    p2: it.points[1],
    p3: it.points[2],
    takeaway: it.takeaway,
    source: it.source,
    accent: k.accent,
    accent2: k.accent2,
    music: `assets/pad-${it.kind}.m4a`,
  };
});

// Only rows without a finished render, unless --all is given.
const all = process.argv.includes("--all");
const todo = rows.filter((r) => all || !existsSync(join(root, "renders", `${r.slug}.mp4`)));
writeFileSync(join(root, "video", "batch.json"), JSON.stringify(todo, null, 2));

mkdirSync(join(root, "site", "data"), { recursive: true });
const site = feed.map((it, i) => ({
  id: it.id,
  num: i + 1,
  kind: it.kind,
  label: KINDS[it.kind].label,
  accent: KINDS[it.kind].accent,
  hook: it.hook,
  title: it.title,
  meta: it.meta,
  stat: it.stat || "",
  statLabel: it.statLabel || "",
  points: it.points,
  takeaway: it.takeaway,
  source: it.source,
  more: it.more,
  video: `videos/${it.id}.mp4`,
  poster: `posters/${it.id}.jpg`,
}));
writeFileSync(join(root, "site", "data", "shorts.json"), JSON.stringify(site, null, 1));

const counts = Object.fromEntries(Object.keys(KINDS).map((k) => [k, items.filter((i) => i.kind === k).length]));
console.log(`${items.length} shorts`, counts, `→ ${todo.length} to render`);
