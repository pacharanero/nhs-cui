# 50 Key Rules from the NHS CUI Guidance

A distilled, implementable summary of the NHS Common User Interface (CUI) guidance, focused on the rules most likely to improve **clinical safety** and **clinician usability** in a modern electronic health record.

The original CUI corpus runs to thousands of pages across patient identification, medications management, clinical noting and terminology, decision support, care pathways, handover, navigation and abbreviations. This document keeps only what is durably useful, restated plainly so it can be applied today.

A short [Anti-rules](#anti-rules-do-not-follow-these) section at the end lists CUI recommendations that are now obsolete or actively harmful and should not be carried forward.

---

## How to read this document

- Each rule is a single sentence stating *what to do*, followed by a short *why* and (where relevant) a concrete format example.
- Rules are grouped by topic. Numbering is arbitrary — every rule matters.
- Where a rule is a hard safety rule (failing it can directly harm patients), it is marked **[SAFETY]**.

---

## Patient identification

1. **[SAFETY] Show a persistent patient banner at the top of every clinical screen.** It must be fixed, full-width, visually distinct (border or background), and unmovable. Wrong-patient errors are the single largest category of avoidable harm in EHRs.

2. **Use one canonical patient identification dataset everywhere.** In order: family name, given name, title, date of birth, sex/gender, NHS number, age (and date/age at death for deceased patients). Don't omit fields conditionally — clinicians learn the shape of the banner.

3. **Display family name in UPPERCASE in identifying contexts** (banners, lists, search results), with given name and title in normal case: `SMITH, Jane (Mrs)`. This was research-validated as the fastest pattern to parse correctly. Don't use uppercase elsewhere.

4. **Format the NHS number as `123 456 7890` (3-3-4 with single spaces).** This visually distinguishes it from phone numbers, dates and account numbers, and matches the spec used on cards and letters.

5. **[SAFETY] Surface known allergies in or directly adjacent to the patient banner**, with a distinct icon and the label "Known allergies". Allergy information hidden behind a click is allergy information that gets missed.

6. **[SAFETY] Differentiate deceased-patient records using both colour and a non-colour cue** (pattern, border, watermark). Colour alone fails for colour-blind users and in printouts; dual-encoding has prevented well-documented "prescribing for a dead patient" incidents.

7. **Spell out sex and gender values in full** — `Male`, `Female`, `Other`, `Not Known`, `Not Specified`, `Indeterminate`. Never `M`, `F`, `NK`. Single-letter codes are misread under time pressure.

8. **Distinguish the data items "Sex" and "Current Gender" with explicit labels and brief inline tooltips.** Conflating them has produced documented patient safety incidents (wrong reference ranges, wrong screening invitations).

9. **Spell out missing values** — `Not Known`, `Not Recorded`, `Not Asked`. Never use `?`, `-`, blank or "N/A". Symbols are ambiguous, especially when copied into letters.

---

## Dates, times, and numbers

10. **[SAFETY] Use `DD-MMM-YYYY` for every clinical date** — `05-Apr-2008`, never `05/04/2008`. Numeric date formats vary by locale and are a known cause of medication and appointment errors.

11. **[SAFETY] Use the 24-hour clock with leading zeros for every clinical time** — `09:05`, never `9:05 AM`. AM/PM has caused fatal "midnight vs noon" errors.

12. **Mark uncertain times explicitly with an "Approx" checkbox** placed immediately before the time value, not buried in a note. Uncertainty about timing is clinically meaningful; don't make clinicians infer it.

13. **Always show leading zeros on single-digit values, never trailing zeros after a decimal.** `05-Apr-2008`, `09:05:30`, `0.5 mg` (not `.5 mg`), `5 mg` (not `5.0 mg`). Misread decimals are the classic ten-fold-overdose vector.

14. **Display UK postcodes in capitals with one space** — `SW1A 1AA`. Display UK telephone numbers spaced and **without brackets** — `020 7946 0472`, not `(020) 7946 0472`.

15. **Capture telephone numbers in a single freeform field**, not split area/local boxes. UK area codes vary in length; split fields are a known input-error source.

---

## Medications: dose and unit formatting

16. **[SAFETY] Show the dose as a labelled, bold, inseparable unit.** Format: `DOSE 500 mg` — both the label and value bold, on the same line, never wrapped apart from each other or from their parent medication line.

17. **[SAFETY] Always put a space between number and unit.** `500 mg`, never `500mg`. The unit must be visibly separate from the number.

18. **[SAFETY] Never write trailing zeros after a decimal.** `0.5 mg`, never `0.50 mg`. A trailing-zero misread is the most common 10× overdose pattern.

19. **[SAFETY] Always write a leading zero before a decimal.** `0.125 mg`, never `.125 mg`. A missed leading dot is the second most common 10× overdose pattern.

20. **Use a comma as the thousands separator at 1,000 and above.** `5,000 units`, not `5000 units`. Particularly important for heparins and insulins where mis-counted zeros are catastrophic.

21. **Convert units to avoid decimals where possible.** Prefer `1 g` over `1,000 mg`; prefer `500 micrograms` over `0.5 mg`. Decimal points are a hazard, not a convenience.

---

## Medications: naming and concentration

22. **Display the generic name first, in bold lowercase; the brand name (if shown) second, in UPPERCASE.** `**paracetamol** – PANADOL`. This makes the safety-critical name dominant and reduces look-alike/sound-alike confusion.

23. **[SAFETY] Never abbreviate drug names** — not in lists, not in pick-lists, not in handover. `paracetamol`, never `para`. Drug-name abbreviations are a documented wrong-drug cause.

24. **[SAFETY] Express liquid concentration with the word `in`, not a slash.** `400 mg in 5 mL`, never `400 mg/5 mL`. The `/` is misread as a `1` and confused with division.

25. **For combination products, separate strengths with a smaller-font `and`.** `co-codamol 8 and 500 mg`. This makes it impossible to read as a single number.

26. **Avoid characters in medication strings that look like digits or operators** — `@`, `&`, `|`, `/`, `\`, parentheses, brackets, `°`. Use spaces or em-dashes instead.

---

## Medication lists and administration

27. **[SAFETY] Never silently truncate a medication line.** No drug name, strength, dose, route or frequency may be cut off with an ellipsis or hidden behind hover. If it doesn't fit, wrap or expand the row.

28. **Use generous within-line spacing (line-height ~120–140%) and equal blank space between medications.** Cramped rows cause clinicians to read the dose from the line above or below.

29. **[SAFETY] Show every medication's status unambiguously and never mix statuses in a single unseparated list.** `Active`, `Suspended`, `Discontinued`, `Completed` — visually distinct, with discontinued/suspended items either in a separate panel or with strong visual treatment.

30. **[SAFETY] Keep the prescribed medication line visible on screen while the administration event is being recorded.** Modal dialogs that cover the prescription are a documented wrong-drug administration cause.

31. **Make off-screen medications visible.** Show a count, a length indicator or a preview so a clinician knows there is more list below the fold. The "missed last item" is a common omission cause.

---

## Allergies and adverse drug reactions

32. **[SAFETY] Force an explicit "No Known ADRs" record.** Distinguish `Confirmed: no known ADRs`, `Not asked`, `Not recorded`. A blank field must never be interpreted as "safe to prescribe".

33. **[SAFETY] Distinguish a past reaction (event) from a future risk (warning) in the UI.** A patient who *had* a rash 20 years ago and a patient who *is at risk of* anaphylaxis are not the same, and the screen should never let them look the same.

34. **Surface the reaction type at first glance, alongside the causative agent** — `penicillin — anaphylaxis`. Don't make the user click to find out whether the allergy is "rash" or "airway".

35. **Record the causative agent at the most specific level captured.** Brand, generic, route, excipient, formulation. Recording only "penicillins" hides excipient sensitivities.

36. **[SAFETY] Fire allergy and interaction checks at point of prescribe AND at point of administer.** Not as an opt-in review screen. The check must be impossible to skip silently.

---

## Clinical noting and terminology

37. **Display the SNOMED CT preferred term, not the concept ID, in clinical views.** Concept IDs belong in audit, export and detail panes only. They are noise in a clinical context.

38. **Visually distinguish encoded terms, free text, and system prompt text** from each other, using weight and a non-red/green highlight (e.g. pale blue). Clinicians need to know at a glance what is structured, what is narrative, and what is template scaffolding.

39. **[SAFETY] Confirm the full term to the user before any clinical action is committed.** Before the term is added to the record, prescribed against or sent to another system, the *complete, untruncated* term must be shown and acknowledged.

40. **[SAFETY] Keep numbers and their units inseparable.** When wrapping or truncating, never let `5 mg` become `5` on one line and `mg` on another, and never truncate `milligrams` to `milli...`.

41. **Use simple, line-based clinical body graphics with explicit orientation labels** (front/back/left/right). Decorative shading and colour can mask findings; ambiguous orientation has caused documented wrong-side annotations.

42. **Annotated graphics must always be visible without scrolling, and existing annotations must not be silently deletable.** A clinician seeing a body diagram should be confident they are seeing all of it.

---

## Truncation, layout, and reading

43. **[SAFETY] Never silently truncate clinical text.** When truncation is unavoidable, show an ellipsis *plus* a separate "more available" indicator, *and* allow the user to expand without leaving context.

44. **Make field tab-order match on-screen reading order.** A keyboard user verifying a patient banner should tab through name → DOB → sex → NHS number, in that visible order.

---

## Alerts, decision support, and handover

45. **[SAFETY] Reserve hard, blocking interruptions for genuinely high-priority safety situations.** Default to non-modal, in-context surfacing for everything else. Modal-by-default is the engine of alert fatigue, which kills people.

46. **Every alert and recommendation must explain its reasoning in the alert itself.** "Potential interaction with furosemide" is acceptable; a context-free "Warning" is not.

47. **When an alert references a specific data point, make that reference a deep link.** "K⁺ 7.7 mmol/L" should jump to the result it was triggered by.

48. **[SAFETY] Treat clinical handover as an explicit handshake.** The receiving clinician must accept (or refuse) responsibility, the system must record who, when, and what. Allow refusal — silent acceptance hides risk.

---

## Symbols, abbreviations and keyboard

49. **[SAFETY] Convey safety state via shape AND colour AND text.** Use ISO conventions — red prohibition circle, yellow warning triangle, blue mandatory disc — and always include a short text label. Colour-only signalling fails for ~8% of male users (colour vision deficiency), in greyscale, and for screen readers.

50. **[SAFETY] Block the known-dangerous abbreviations at the point of entry, in both structured fields and free text.** Reject or rewrite, with the user prompted to confirm an expansion:

    | Banned input | Risk | Use instead |
    |---|---|---|
    | `U`, `u` | Read as "0" → 10× overdose | `units` |
    | `IU` | Read as "IV" or "10" | `international units` |
    | `QD`, `q.d.` | Read as `QID` (4× daily) | `daily` or `once daily` |
    | `QOD`, `q.o.d.` | Read as `QD` or `QID` | `every other day` |
    | `MS`, `MSO4`, `MgSO4` | Morphine vs magnesium sulfate confusion | `morphine sulfate`, `magnesium sulfate` |
    | `cc` | Read as `U` (units) | `mL` |
    | `μg`, `ug` | Read as `mg` → 1000× overdose | `micrograms` |
    | Trailing zero (`5.0 mg`) | Read as `50 mg` | `5 mg` |
    | Naked decimal (`.5 mg`) | Read as `5 mg` | `0.5 mg` |

---

## Anti-rules: do not follow these

The original CUI guidance was written between roughly 2007 and 2012. Some of its specific recommendations are now either obsolete (technology has moved on) or harmful (clinical-safety understanding has moved on). The following should **not** be carried into a new system.

### Alerting and decision support

- **Don't use flashing animation to attract attention.** The original guidance suggests flashing for status changes. Modern accessibility guidance treats flashing as a seizure trigger and a fatigue source.
- **Don't make alerts fade out after 5–10 seconds.** The original guidance proposed timed pop-ups so the alert "doesn't obstruct the view". A safety alert that disappears unread is a safety alert that did not happen.
- **Don't treat decision support as out of scope of the medication UI.** Original guidance separated alerting from prescribing/administration as different documents. Modern e-prescribing requires inline allergy and interaction checks at point of prescribe and point of administer — they are part of the medication UI, not a layer above it.
- **Don't rely only on a two-tier `Priority` / `High Priority` model.** Modern clinical workflows (NEWS2, sepsis, AKI, deteriorating-patient pathways) require richer, actionability-based categorisation.

### Display and layout

- **Don't restrict clinical body graphics to greyscale.** That rule was a 2010 print-cost compromise. Modern devices render colour reliably and some clinical findings (cyanosis, erythema, jaundice, bruising stage) are inherently colour-coded.
- **Don't design to a fixed `1024 × 768` minimum.** That assumption appears throughout the corpus. Design responsively for everything from a 320 px phone to an ultra-wide ward monitor.
- **Don't depend on hover tooltips as a primary information channel.** Touch devices have no hover. Many keyboard users cannot reliably trigger one. Anything safety-critical must be visible, not hover-revealed.
- **Don't use yellow highlight as the selection indicator.** It clashes with high-contrast and dark modes and with WCAG contrast requirements.
- **Don't use marquee/dotted-border drag interactions** for grouping or selecting clinical concepts. They have no keyboard or screen-reader equivalent.
- **Don't use a "look-ahead scroll bar" as the primary navigation device for a medication list.** Later CUI revisions themselves withdrew this — it doesn't survive contact with mobile or touch.

### Data and recording

- **Don't deliberately omit ADR severity from the record.** The original guidance said severity was "subjective and misleading" and should not be displayed. Severity is now a structured, mandated EHR field; suppressing it loses information clinicians need.
- **Don't duplicate the same medication across multiple grouping views** (e.g. same drug under "cardiac" *and* under "regular"). Even the later CUI guidance withdrew this, having found it caused mis-counts and double-administration.
- **Don't permit "use abbreviations if universally understood in the local context".** "Universally understood" varies by trust, by ward, by speciality, and by shift. Abbreviations either pass an explicit safe list or they are blocked.

### Interaction and input

- **Don't bind clinical functions to F2–F12.** They collide with browser shortcuts (F5 reload, F12 devtools) on web-delivered EHRs, and a wrong key under time pressure can mean a wrong action.
- **Don't rely on right-click context menus** as the only path to important functions. They have no touch-screen equivalent and are inconsistent across platforms.
- **Don't dismiss natural-language input as immature.** That argument was true in 2008. Modern speech and structured-NLP entry, when combined with confirmation of the resulting encoded term, are now mainstream.

### Identity and inclusion

- **Don't restrict sex/gender to binary `M`/`F`.** Early CUI revisions did so. Modern guidance requires `Sex` (recorded) and `Current Gender` (self-described) as separate fields, each with a fuller value set including `Other`, `Not Specified`, `Indeterminate`.
- **Don't use uppercase-only patient names everywhere.** Use uppercase for the *family name in identifying contexts* only (banner, list, search). Wholesale uppercase is shouty, harder to read, and fails dyslexia-friendly typography guidance.

---

## Source

Distilled from the NHS Common User Interface (CUI) UIG corpus, archived from `systems.digital.nhs.uk/data/cui/uig`, transcribed from PDF in this repository under `markdown/`. Original sections covered: patient identification and information entry/display, medications management, clinical noting and terminology, decision support, care pathways, handover, consistent navigation, and abbreviations and acronyms.
