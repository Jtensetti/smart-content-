#!/usr/bin/env bash
# Makes web copies of the HyperFrames masters in renders/:
#   site/videos/<slug>.mp4  – H.264, CRF 26, faststart (≈1.5 MB each)
#   site/posters/<slug>.jpg – the hook frame, shown before the video loads
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p site/videos site/posters
for src in renders/*.mp4; do
  slug=$(basename "$src" .mp4)
  out="site/videos/$slug.mp4"
  if [[ ! -f "$out" || "$src" -nt "$out" ]]; then
    ffmpeg -y -loglevel error -i "$src" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
      -c:a aac -b:a 96k -movflags +faststart "$out"
    ffmpeg -y -loglevel error -ss 0.9 -i "$src" -frames:v 1 -vf scale=540:-1 -q:v 4 "site/posters/$slug.jpg"
    echo "encoded $slug"
  fi
done
du -sh site/videos site/posters
