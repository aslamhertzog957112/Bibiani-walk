# IMSS Africa — Bibiani Plant Sample Capture (Rev B)

Offline iPhone home-screen web app. Client site: Bibiani Gold Mine.
Control standard: Gold Plant Risk & Security Audit (P. van Schalkwyk) — used with permission. Control *descriptions* only are embedded; no other site's findings or comments are carried.

## Files
samples.html · sw.js · manifest.json · icon.svg · README.md
Drop into the GitHub Pages repo (own folder, e.g. /imss/), open once in Safari online, Share → Add to Home Screen.

## IMSS Africa brand tokens
Forest  #0E2A23 (primary)  ·  Forest-2 #17453A
Brass   #C9A227 (accent)   ·  Brass-2  #E6C45A
Sand    #F4F1EA (background)
Font: Arial. Mark: brass shield with forest inner shield and a brass "M" + point (SVG in header and icon.svg).

## Operative flow
1. GPS pin → Gold Code section (14.1 Mills, 14.2 Cyclone & feed pumps, 14.3 Gravity concentrator, 15 Spillage, 10 Conveyors, 16.6 GR material control, 16.7 Electrowinning, 16.7b Calcining, 5 Locks, 6/7 Pipes & trenches) → point type
2. Control checklist for that section — every item marked ✓ Compliant / ✗ Fail / N/A — plus threat indicators
3. Photos (min 2, stamped)
4. Material class → route to / test / priority → mass, container, seal, witness
5. Collector signature

Handovers and test results are added from the sample record. AAR reports section compliance %, control failures, results, typology weighting, custody integrity and training points. CSV / GeoJSON / JSON export.

## Before go-live
Confirm MC-1…MC-7 "route to" destinations against the Bibiani lab / gold-room SOP (Setup tab).
