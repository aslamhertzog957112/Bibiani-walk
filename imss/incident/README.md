# IMSS Africa — Bibiani Incident Capture (Rev A)

Offline iPhone home-screen web app. Companion to the Plant Sample Capture app. Same origin → reads the sample app's records on the same phone and links them to incidents automatically.

## Deploy
Repo path: `Bibiani-walk/imss/incident/` — upload: incident.html · sw.js · manifest.json · icon.svg · icon-180.png · icon-512.png · README.md
URL: https://aslamhertzog957112.github.io/Bibiani-walk/imss/incident/incident.html → Share → Add to Home Screen ("IMSS Incident").

## Operator flow (5 steps)
1. Classify — class, severity, occurrence window (from/to) vs discovery time, Gold Code section, GPS pin
2. Barriers (bow-tie) — every control in that section marked Held / Failed / Bypassed / Absent / N/A; pick the key barrier; latest sample-app control state for the section shown alongside
3. Facts — narrative (facts only), persons by ROLE only, plant conditions at the time, evidence refs, link samples, photos
4. Recovered material — seal, witness, routed to Security Evidence Room
5. Hypotheses — auto-derived from the barrier states and plant conditions (H1–H9 + H0 null); reporter signs

## Analyst outputs
- Indicators tab: per-section composite risk — incidents, barrier fails, sample fails, time-to-close, grade trend — and recurring control failures
- Focus tab: printable Investigation Focus report per incident — bow-tie, ranked hypotheses, evidence held, collection plan, recurrence
- Setup: Guardian package export (schema imss.package.v1: ontology + hypothesis library + incidents + linked samples), CSV, GeoJSON

## Data protection
No names in the field app — roles only. Identities, informer reporting and HUMINT stay in Guardian Case Management / HUMINT Ops under access control (Ghana Data Protection Act 2012).
