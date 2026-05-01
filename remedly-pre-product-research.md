# Pre-Product Research Findings

## Remedly EHR Rebuild · 2019

**Author** Harun Tuncelli, UI/UX Designer (sole designer at Remedly)
**Method** Internal qualitative research, cross-referenced against the 2010–2019 EHR usability literature
**Purpose** Establish the design problem, validate that Remedly's user complaints reflected a market-wide pattern (not idiosyncratic friction), and produce a prioritized action plan for the rebuild

---

## Executive summary

Remedly's existing product was functionally solid but visually and interactionally rooted in the early 2010s. Customer-experience and sales interviews showed deep dissatisfaction with the user interface; clinical-staff and clinical-board interviews surfaced specific feature gaps; and a structured comparison against Epic and Cerner located Remedly behind on every measured axis.

The internal findings — 78% of users disliked the UI, 69% reported tasks taking too long, 75% felt the product didn't align with the sales pitch, and 72% used Remedly primarily for *scheduling* rather than its EHR features — were consistent with the broader EHR usability literature published between 2010 and 2019. Studies in this period documented physicians spending more time on EHR documentation than on direct patient care (Sinsky et al., 2016; Arndt et al., 2017), workflows requiring thousands of clicks per shift (Hill et al., 2013), EHRs ranked as a top driver of professional dissatisfaction (Friedberg et al., 2013, RAND for AMA), and usability gaps with documented patient-safety implications (Howe et al., 2018, JAMA).

Remedly's research was not surfacing a unique problem. It was surfacing the market problem, expressed by a specific customer base. That framing produced a six-priority action plan, pressure-tested against six standardized-trait personas, and shaped every design decision in the rebuild that followed.

---

## Method

### Internal scope

The research drew on four populations inside Remedly's customer-and-staff network:

- **Existing users** — the customer-interview pool (n=22) of clinicians and clinic operators using the product day to day.
- **Customer-experience and sales departments** — the people fielding inbound complaints and outbound product critiques on every sales call.
- **Clinical staff** — Remedly's internal medical advisors, on payroll for HIPAA and clinical-accuracy review.
- **Clinical board members** — external clinicians retained to validate product direction.

A full inventory of the existing application — every page, every button, every data point, paired with what each user role actually did with it — was completed before any design work began. The inventory served as the source of truth the design system was later built against.

### Constraints

Remedly was a 20–30-person startup with a small user base. Quantitative usability research at scale was not financially or logistically feasible. The work was therefore qualitative-heavy and synthesized against the published EHR usability literature where industry-scale numbers were needed.

### Cross-reference layer

Throughout this report, internal findings are paired with citations from the 2010–2019 EHR usability literature. The intent is to distinguish between findings unique to Remedly's product and findings that reflect well-documented industry-wide patterns. Sources are listed in the References section.

---

## Customer-experience findings

Four signals from the customer-experience and sales departments framed the design problem.

| Finding | Share | Industry parallel |
|---|---|---|
| Disliked the existing UI | **78%** | EHR usability ranked as a top professional dissatisfier across the period (Friedberg et al., 2013) |
| Said basic tasks took too long | **69%** | Physicians spent ~1.8 hours on EHR/desk for every 1 hour with patients (Sinsky et al., 2016); 5.9 of 11.4 work hours on EHR (Arndt et al., 2017) |
| Said product didn't align with sales pitch | **75%** | Repeated theme in midmarket EHR satisfaction surveys (KLAS Arch Collaborative; Black Book Research) |
| Used Remedly primarily for scheduling, not EHR | **72%** | Industry pattern of midmarket EHRs anchored by their best-rated subsystem rather than their full feature set |

These signals were not anomalous. They reflected the dominant EHR usability narrative of the decade. Remedly's rebuild had to respond to both the customer-specific complaints and the industry-wide pattern they were a facet of.

---

## Competitor benchmark

A structured comparison against the two largest US EHR systems — Epic and Cerner — placed Remedly on every axis below the enterprise leaders.

| Axis (out of 10) | Remedly | Epic | Cerner |
|---|---|---|---|
| Medical content quality | **6.2** | 8.8 | 8.4 |
| Workflow speed | **5.0** | 5.4 | 7.2 |
| Features | **4.8** | 9.2 | 8.4 |
| Usability & UI | **4.4** | 6.4 | 7.6 |

### What to take from each

**From Epic.** CEHR certification, large user-base UX vocabulary, customization breadth, and split-screen review patterns. Even Epic's usability score (6.4) was not category-leading — a recurring theme in the period's literature, where enterprise EHR usability scores typically landed below the consumer-product threshold of 68 on the System Usability Scale.

**From Cerner.** Left-menu navigation, auto-dictation, tables and structured sections for readability, restrained color palette. Cerner's higher usability score (7.6) reflected interaction-design strengths Epic and Remedly both lacked.

### What to leave in their products

Both Epic and Cerner exhibited well-documented usability failure modes that the rebuild had to avoid: oversized icons producing cognitive overload, outdated visual systems, popup-heavy customization workflows, tab-driven navigation that hides relevant data, and overcrowded top menus. The Pew Charitable Trusts / MedStar Health 2018 report on EHR safety documented multiple instances where these patterns contributed to clinical-safety incidents (Pew Charitable Trusts, 2018).

---

## Customer interview findings (n=22)

Stack-ranked positives and negatives from interviews with existing users, consultants, clinical experts, and clinical-board members.

### Top positives

| Finding | Ratio | Notes |
|---|---|---|
| Body-map feature is the main reason for using Remedly EHR | **16 / 22** | Highly praised by plastic surgeons and dermatologists |
| Highly satisfied with the calendar and booking-application workflows | **18 / 22** | Their only complaint was the lack of modern UI |
| Satisfied with current EHR workflows | **14 / 22** | Major complaint was the time-to-accomplish |
| High satisfaction with commercial features (med spas) | **17 / 22** | Defined as crucial by med-spa accounts |

### Top negatives

| Finding | Ratio | Industry parallel |
|---|---|---|
| Time it takes to record medical history; need for a customer-facing product | **20 / 22** | Documentation time is the most-cited EHR friction in the period (Sinsky et al., 2016; Arndt et al., 2017) |
| Time it takes to accomplish simple tasks | **17 / 22** | Time-on-task is the dominant usability complaint in EHR research (Friedberg et al., 2013) |
| Amount of clicks required for tasks | **18 / 22** | Hill et al. (2013) documented ~4,000 clicks per 10-hour ED shift in EHR documentation alone |
| Outdated user interface | **16 / 22** | Visual currency lagged across the midmarket EHR segment (KLAS; Black Book) |
| Amount of popups represented in the workflows | **16 / 22** | Popup-driven UX is repeatedly cited in AMIA literature as a cognitive-load source |
| Lack of customization for medical forms | **20 / 22** | Specialty-practice customization gaps documented in Pew 2018 |
| Lack of billing functionalities | **19 / 22** | Workflow-completeness is a primary midmarket-EHR differentiator (Black Book) |
| Lack of CEHR certification | **22 / 22** | Aligns with ONC Meaningful Use / Promoting Interoperability incentive structure |
| Lack of innovative features that distinguished other products | **18 / 22** | Innovation lag is consistent with smaller-vendor R&D constraints |
| Tablet compatibility | **16 / 22** | Tablet-first EHR access was a rising expectation across the decade |

---

## Industry context — the 2010–2019 EHR usability gap

Five themes from the published literature framed the rebuild and validated the internal findings.

### 1. Time on EHR consistently exceeded time on the patient.

Sinsky and colleagues' time-and-motion study across four ambulatory specialties found physicians spent roughly two hours on EHR and desk work for every one hour of direct patient care (Sinsky et al., 2016). Arndt and colleagues, using EHR event logs paired with observational data, documented family physicians spending 5.9 hours of an 11.4-hour workday in the EHR — including 1.4 hours after clinic hours (Arndt et al., 2017). The 20-of-22 Remedly respondents who named time-to-record-medical-history as their top friction point were experiencing the dominant EHR usability problem of the decade.

### 2. Click counts were astronomical.

Hill and colleagues, examining emergency-department documentation in a community hospital, found EHR-related interactions averaged approximately 4,000 clicks per 10-hour shift (Hill et al., 2013). The 18-of-22 Remedly respondents complaining about click count were articulating a quantified industry-wide problem.

### 3. EHRs were a top driver of professional dissatisfaction.

The RAND Corporation, in research commissioned by the AMA, documented poorly-designed EHRs as a major source of physician dissatisfaction across multiple practice settings (Friedberg et al., 2013). Subsequent KLAS Arch Collaborative surveys, beginning approximately 2017, showed wide variance in EHR satisfaction by vendor — with smaller and midmarket vendors typically scoring lower than enterprise leaders on usability dimensions.

### 4. Usability gaps had patient-safety implications.

Howe and colleagues, analyzing a database of patient-safety reports, identified electronic health record usability issues as a contributing factor in 1,956 reports involving potential patient harm (Howe et al., 2018, JAMA). The Pew Charitable Trusts and MedStar Health published a report the same year documenting specific EHR-design patterns linked to clinical safety incidents (Pew Charitable Trusts, 2018).

### 5. Specialty practices and midmarket vendors faced wider gaps.

Multiple industry surveys through the period (KLAS, Black Book Research) found higher dissatisfaction among smaller and specialty practices than among large enterprise systems running Epic or Cerner. Customization for specialty workflows, tablet compatibility, and integrated billing were repeated themes in the midmarket complaint pattern — all of which appeared as top negatives in Remedly's customer interviews.

### Synthesis

Remedly's findings were not idiosyncratic. They reflected a market-wide problem expressed by a specific customer base. The rebuild's job was to address the customer-specific friction *and* the broader pattern — using strategies the literature suggested would actually move the metrics that mattered.

---

## Action plan

Six priorities, ranked by combined customer-signal weight and industry-literature alignment.

1. **CEHR certification.** Closes the 22-of-22 certification gap; aligns with the ONC Meaningful Use / Promoting Interoperability incentive structure that drove EHR purchasing decisions across the decade. A baseline credibility requirement before any other work would be marketable.

2. **UI rebuild — workflow-first.** Closes the 78% UI-dislike and 69% time-too-long signals together. Time-on-task and click-count reduction were the two metrics with the strongest industry-literature support (Sinsky et al., 2016; Arndt et al., 2017; Hill et al., 2013) for impacting both clinician satisfaction and patient-care time.

3. **Medical-forms customization.** Closes the 20-of-22 customization gap. Specialty-practice customization was a top complaint across the midmarket EHR segment (Pew Charitable Trusts, 2018). The fix was a customization tool that lets clinics build their own forms — not more pre-built templates that would never cover the long tail.

4. **Booking-system rebuild.** Preserves the 18-of-22 calendar-liking signal while addressing clinical-first workflows. Treats Remedly's strongest existing surface as the foundation rather than a replacement target.

5. **Billing functionality.** Closes the 19-of-22 billing complaints. Workflow-completeness — particularly billing-EHR integration — was a primary differentiator across the midmarket segment (Black Book Research).

6. **Patient-facing app.** The post-encounter time problem starts pre-encounter. A patient-facing application that captures medical history before the clinic visit reduces the documentation load at the point of care. Aligns with the industry trend toward patient portals and mobile-first patient engagement.

---

## Persona approach

The standard persona output — name, age, photo, hopes, dreams — was not producing actionable design decisions. Six personas were synthesized using a five-trait standardized model:

- **Openness ↔ Extraversion**
- **Conscientiousness**
- **Neuroticism ↔ Extraversion**
- **Agreeableness ↔ Conscientiousness**
- **Likes Ease ↔ Likes Detail**

Each persona produced a measurable trait profile rather than a narrative description. Trait profiles mapped to specific UI implications: a risk-averse, detail-oriented persona indicated a need for confirmation patterns and explicit save-states; a calm, methodical persona indicated bulk-action shortcuts and keyboard-first input. Six personas pressure-tested the action plan before any design work began. Where two personas indicated conflicting needs, the resolution surfaced as a customization decision — pushed into the customization tool rather than baked into a default flow.

---

## References

- Arndt, B. G., Beasley, J. W., Watkinson, M. D., Temte, J. L., Tuan, W.-J., Sinsky, C. A., & Gilchrist, V. J. (2017). Tethered to the EHR: Primary Care Physician Workload Assessment Using EHR Event Log Data and Time-Motion Observations. *Annals of Family Medicine*, 15(5), 419–426.
- Black Book Research. (Multiple years, 2014–2019). EHR Loyalty and Replacement Surveys.
- Friedberg, M. W., Chen, P. G., Van Busum, K. R., et al. (2013). Factors Affecting Physician Professional Satisfaction and Their Implications for Patient Care, Health Systems, and Health Policy. *RAND Corporation* (commissioned by the American Medical Association).
- Hill, R. G., Sears, L. M., & Melanson, S. W. (2013). 4000 clicks: a productivity analysis of electronic medical records in a community hospital ED. *American Journal of Emergency Medicine*, 31(11), 1591–1594.
- Howe, J. L., Adams, K. T., Hettinger, A. Z., & Ratwani, R. M. (2018). Electronic Health Record Usability Issues and Potential Contribution to Patient Harm. *JAMA*, 319(12), 1276–1278.
- KLAS Research. (2017–2019). Arch Collaborative EHR Experience Reports.
- Pew Charitable Trusts, in collaboration with MedStar Health and the American Medical Association. (2018). *Ways to Improve EHR Safety.*
- Sinsky, C., Colligan, L., Li, L., Prgomet, M., Reynolds, S., Goeders, L., Westbrook, J., Tutty, M., & Blike, G. (2016). Allocation of Physician Time in Ambulatory Practice: A Time and Motion Study in 4 Specialties. *Annals of Internal Medicine*, 165(11), 753–760.

---

*Internal Remedly research. Customer-interview ratios (n=22) are from the 2019 Remedly product-research overview. Industry citations are drawn from the published EHR usability literature spanning 2010–2019. This document is a portfolio version of the original 2019 deliverable, prepared for case-study reference.*
