#!/usr/bin/env bash
# Generates calm 34 s background pads, one per category: two chords that slowly
# swap places, with a gentle swell. Output: video/assets/pad-<kind>.m4a
set -euo pipefail
cd "$(dirname "$0")/../video/assets"
D=34
pad() { # name f1 f2 f3 f4 (chord A)  g1 g2 g3 g4 (chord B)
  local n=$1; shift
  local a="(sin(2*PI*$1*t)+0.8*sin(2*PI*$2*t)+0.6*sin(2*PI*$3*t)+0.4*sin(2*PI*$4*t))"
  local b="(sin(2*PI*$5*t)+0.8*sin(2*PI*$6*t)+0.6*sin(2*PI*$7*t)+0.4*sin(2*PI*$8*t))"
  local w="(0.5+0.5*cos(2*PI*t/17))"
  ffmpeg -y -loglevel error -f lavfi -i \
    "aevalsrc='0.09*($w*$a+(1-$w)*$b)*(0.8+0.2*sin(2*PI*0.15*t))':s=44100:d=$D" \
    -af "lowpass=f=1800,aecho=0.8:0.7:120|260:0.25|0.15,afade=t=in:d=1.5,afade=t=out:st=$((D-3)):d=3" \
    -ac 2 -c:a aac -b:a 128k "pad-$n.m4a"
}
pad filosofi 110 164.81 220 261.63   87.31 130.81 174.61 220
pad studie   130.81 196 261.63 329.63 98 146.83 196 246.94
pad begrepp  146.83 220 293.66 369.99 123.47 185 246.94 293.66
pad myt      82.41 123.47 164.81 196   130.81 164.81 196 261.63
