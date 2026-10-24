# IMSS Academy — Mining Security School of Excellence (Rev A)

Offline training simulator. Deploy to `Bibiani-walk/imss/academy/`:
academy.html · sw.js · manifest.json · icon.svg · icon-180.png · icon-192.png · icon-512.png · README.md

URL: https://aslamhertzog957112.github.io/Bibiani-walk/imss/academy/academy.html

## How it works
The Academy does not re-implement the apps. Each operational app has a training mode (`?mode=train`):
separate `train_` storage keys, GPS taken from the scenario, photos optional, red TRAINING banner.
Drill → Academy loads the scenario, opens the real app in training mode in a frame, trainee works in the
genuine interface, saves → the app posts the record back → Academy scores it against the answer key.

## Tabs
Home (trainee + standing) · Learn (modules per level, app walkthroughs) · Drill (14 seed scenarios:
5 sampling, 5 incident, 4 field-assessment scoring) · Test (34-item MCQ bank by module; 80% pass, 90% for F-04)
· Register (records, certification, decay triggers, certificate print, Guardian export) · Author (L5: JSON scenarios/MCQ, library import/export)

Certification auto-issues when, within 90 days, the trainee passes the required number of distinct drills for their level
(L1 2, L2 4, L3 3, L4 2, L5 2) and either a full-bank test or three module tests. Validity 12 months (L1–L3), 24 months (L4–L5).
Decay trigger: two consecutive drill scores below 70%.

## Install
Android: Chrome → open the URL → ⋮ → "Install app". iPhone: Safari → Share → Add to Home Screen.
Open once online; allow Location and Camera. Works offline afterwards.
