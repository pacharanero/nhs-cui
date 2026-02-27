![](advdrugrisks_assets/advdrugrisks.pdf-0-0.png)

_Prepared for_


**NHS Connecting for Health**


**Tuesday, 13 January 2009**


**Version 1.0.0.0 Baseline**


_Prepared by_


**Clinical Applications and Patient Safety Project**


**NHS CUI Programme Team**


**[mscui@microsoft.com](mailto:mscui@microsoft.com?subject=Re:%20NHS%20CUI%20documentation)**



![](advdrugrisks_assets/advdrugrisks.pdf-0-1.png)
Microsoft and NHS Connecting for Health Confidential

### PREFACE


**Documents replaced by this document**


None


**Documents to be read in conjunction with this document**


None


**Patient Safety Process**


The development cycle for this design guide is compliant with the Clinical Safety Management
System (CSMS) – the patient safety risk assessment and management process defined by NHS
Connecting for Health (NHS CFH) in conjunction with the National Patient Safety Agency (NPSA).


The design guide developers reviewed patient safety incidents arising from both current practice
and existing systems for medications management. The resulting guidance points support
mitigation of these known patient safety risks. In addition, the developers identified any potential
new risks by applying a patient-safety risk-assessment process. The developers are assessing and
managing all risks to support a Clinical Safety Case for this design guide.


The Hazard Log records all hazards and risks raised to date and includes mitigation actions that, in
some cases, will be applicable to you if you are an implementer or other user of this design guide.
The Hazard Log is a live document and updates regularly whilst this design guide continues its
development. Until this design guide has received full Clinical Authority to Release (CATR) from the
NHS CFH Clinical Safety Group (CSG) – based on an approved Clinical Safety Case – there may
be outstanding patient safety risks yet to be identified and mitigated.


Refer to [nww.cui.nhs.uk (N3 connection required) for all current patient safety documentation,](http://nww.cui.nhs.uk/)
including Hazard Logs and the current patient safety process status for this and other design
guides.


**Copyright**


This document has been prepared for the NHS CUI Programme and is subject to the terms and conditions of the Development Agreement between
Microsoft and the Secretary of State for Health in respect of the Programme. The document may contain information or work product that is Microsoft
pre-existing work and/or information or work product that has been created specially for the purposes of the Programme.


All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.


© Microsoft Corporation and Crown Copyright 2009


**Disclaimer**


At the time of writing this document, Web sites are referenced using active hyperlinks to the correct Web page. Due to the dynamic nature of Web sites, in
time, these links may become invalid. Microsoft is not responsible for the content of external Internet sites.


Page ii

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

### TABLE OF CONTENTS


_**1**_ _**Introduction .................................................................................................................................... 1**_


1.1 Definitions of Adverse Drug Reactions ..................................................................................... 1


1.2 Risks versus Events ................................................................................................................. 2


1.3 Customer Need ......................................................................................................................... 3


1.4 Scope ........................................................................................................................................ 3


1.4.1 In Scope .............................................................................................................................. 3


1.4.2 Out of Scope ....................................................................................................................... 4


1.5 Assumptions ............................................................................................................................. 4


1.6 Dependencies ........................................................................................................................... 5


_**2**_ _**Guidance Overview ....................................................................................................................... 6**_


2.1 Visual Summary of the Guidance ............................................................................................. 6


_**3**_ _**Guidance Details ............................................................................................................................ 7**_


3.1 Introduction ............................................................................................................................... 7


3.2 Principles .................................................................................................................................. 7


3.3 Guidelines ................................................................................................................................. 8


3.3.1 Structure of Adverse Drug Reaction Risk List ..................................................................... 8


3.3.2 Content of Adverse Drug Reaction Risk Phrases ............................................................. 13


3.3.3 Content of Supporting Data (High-Level Guidance) ......................................................... 17


3.3.4 Format of List .................................................................................................................... 20


3.3.5 Displaying Dates and Times ............................................................................................. 23


3.3.6 Displaying Source of Risk ................................................................................................. 25


3.3.7 Displaying Authorship of Risk and Event Phrases ............................................................ 26


3.3.8 Displaying Absence of Risk ............................................................................................... 27


3.3.9 Displaying that No Decision Support is Available for A Specific Risk ............................... 29


3.3.10 Displaying Risks in Narrative Text ................................................................................ 31


3.4 Rationale Summary ................................................................................................................ 32


_**4**_ _**Document Information ................................................................................................................ 33**_


4.1 Terms and Abbreviations ........................................................................................................ 33


4.2 Definitions ............................................................................................................................... 33


4.3 Nomenclature ......................................................................................................................... 33


4.3.1 Body Text .......................................................................................................................... 33


4.3.2 Cross References.............................................................................................................. 34


4.4 References ............................................................................................................................. 34


_**APPENDIX A**_ _**Reference Summary of Guidance ........................................................................... 36**_


_**APPENDIX B**_ _**Study ID 42: Executive Summary ............................................................................ 39**_


Page iii

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


_**APPENDIX C**_ _**Study ID 45: Executive Summary ............................................................................ 44**_


Page iv

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

### 1 INTRODUCTION


Adverse drug reactions (ADRs) represent a significant risk to patient safety according to a recent
report **{R1}** . A recent National Patient Safety Agency (NPSA) report quoted a study which found
that an estimated 6.5% of hospital admissions are due to an adverse drug reaction **{R1}** .


Currently, information about a patient’s propensity (that is, risk) for suffering an ADR to a given
drug is not recorded or displayed consistently across the NHS, which could result in its ambiguous
or incomplete communication.


This guidance aims to support clear and unambiguous communication of the known ADR risks for a
patient which is also appropriate for a wide range of settings throughout the NHS.


Clinical software applications that record or display ADR risks must provide sufficient information to
allow the user to make good clinical decisions, such as:


  - Whether to prescribe a medication


  - Whether to take additional actions (such as administering the drug in a hospital).


The users must also be able to determine whether the patient’s current symptoms are attributable
to an ADR.


This guidance is written with the assumption that the display of a list of ADR risks would be
featured in clinical applications in addition to automatic warning alerts based upon Decision
Support Systems (DSS). Therefore, the guidance scope does not cover such DSS alerts and the
reader should not assume that the designs in this document would remove the need for such alerts.


Another important issue associated with the recording and subsequent display of adverse drug
reactions is that of maintaining data quality. In writing this guidance, attempts have been made to
ensure that data display requirements do not encourage poor data quality at the point of entry. For
example, this guidance does not require the display of data that is unavailable to the clinician who
enters the risk. Also, this guidance mandates that the application faithfully reflects certain key data,
such as the causative agent of the reaction risk, in the form in which it was entered. The issue of
maintaining ADR risk data quality is a theme which will be usefully addressed in any future work
addressing user interface design for entering ADR risks.


**Important**


The visual representations used within this document to display the guidance are illustrative only. They
are simplified in order to support understanding of the guidance points. Stylistic choices, such as colours,
fonts or icons, are not part of the guidance and, unless otherwise specified, are therefore not mandatory
requirements for compliance with the guidance in this document.

#### **1.1 Definitions of Adverse Drug Reactions**


The World Health Organisation defines ‘adverse drug reactions’ as “any response to a drug which
is noxious and unintended, and which occurs at doses normally used in humans for prophylaxis,
diagnosis, or therapy of disease, or for the modification of physiological function” **{R2}** . In other
words, in normal cases, the drug itself is not toxic, but for some patients, the drug will provoke a
negative physiological response.


However, beyond this general notion of what is an adverse drug reaction, there are many
sub-definitions and opposing classifications.


Page 1

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


Many taxonomies categorise adverse drug reaction risks according to whether they are
immunologic-mediated or not. Some also make the distinction between Type A (pharmacological)
and Type B (hypersensitivity). For example, Figure 1 shows a classification of adverse drug
reactions from the _Medical Journal of Australia_ **{R5}** :


Figure 1: Classification of Adverse Drug Reactions


Another report describes how there are multiple sub-groups within the category of immunological
reactions alone, the most common being Type 1, or “allergy”, and that immunological reactions only
account for 5-10% of adverse reactions **{R13}** .


It would be fair to say that most clinicians would not be familiar with such a detailed classification.
NHS Connecting for Health (NHS CFH), who commissioned this guidance, categorises adverse
drug reactions into three categories:


**1. Allergic drug reaction**


A response to a pharmaceutical product to which an individual has become sensitised, in
which histamine, serotonin and other vasoactive substances are released, in response to
an immune system-mediated reaction.


This causes systemic symptoms which can include pruritus, erythema, flushing, urticaria,
angio-oedema, nausea, diarrhoea, vomiting, laryngeal oedema, bronchospasm,
hypotension, cardiovascular collapse and death.


**2. Adverse drug reaction**


A response to a pharmaceutical product which is noxious and unintended and which occurs
at doses normally used in man for prophylaxis, diagnosis, or therapy of disease or for
modification of physiological function.


**3. Drug intolerance**


An undesirable effect produced by the pharmacological actions of a pharmaceutical product
at therapeutic or sub-therapeutic dosages and which prevents the patient from tolerating
treatment with that product.

#### **1.2 Risks versus Events**


This guidance will take the approach that an adverse drug reaction can be expressed in terms of an
actual reaction event or in terms of a future risk to the patient. As will be shown later in the
document, this is an important distinction, given that a patient can experience a reaction (event)
without the clinician believing that the drug represents a serious future risk; or, conversely, the
clinician may wish to record that the patient is at risk of adversely reacting to a given medication,
even if the details of any past reaction are not known. For example, the patient may tell the clinician
that they are allergic to penicillin, but are not able to recall any specific reaction event to justify this


Page 2

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-5-0.png)
Microsoft and NHS Connecting for Health Confidential


risk. The clinician may therefore wish to record this as a risk and not an event. Obviously, the
confusion of ‘risk’ and ‘event’ at this point could be dangerous as future readers of the risk
information could place undue confidence in the risk if they think that the clinician has witnessed a
reaction in the patient.


Therefore, this guidance distinguishes between the risk of a future reaction and the event of past
reaction, but acknowledges that these two sets of data are intimately linked and that this should be
reflected in the user interface.

#### **1.3 Customer Need**


Avoiding known adverse reactions to drugs is a well-recognised and important goal within the NHS.
Communicating the risk of a drug to a specific patient is an important step in achieving this.


To achieve this communication, the user must be able to:


  - Check if the patient is believed to be at risk of suffering adverse reactions if they are
administered one or more drugs, or if there is a stated absence of risks for that patient.


  - Decide if one or more adverse drug reactions should influence the current clinical decision


  - Predict what additional actions should be taken in response to the risk of one or more
adverse drug reactions


In order to prevent the administration of drugs known to be dangerous to a patient, the NHS must
ensure that their clinicians are provided with sufficient information to:


  - Identify the presence or confirm the positive absence of adverse drug reactions


  - Determine the previous outcomes (including reaction) of the drug being administered


  - Form an opinion on future outcomes if the drug is again administered.

#### **1.4 Scope**

##### **1.4.1 In Scope**


Structure of list Guidance on how the list is structured and ordered.


Content of risk phrase Guidance on the information that needs to be included in the expression of an adverse drug
reaction risk.


The information is prioritised: some information must be immediately visible, whereas other
information can be available upon interrogation by the user (for example, a click away).



Content of supporting events,
including previous adverse reaction
events (high level)



Guidance on the supporting information that may be featured to justify the risk phrases,
including adverse reaction events. This guidance addresses content at a high level rather
than at a detailed level.



Format of list Guidance on how to format the words and phrases within the list, including tabular
arrangement, punctuation and text formatting.


Justification of risks Guidance on how to display justification of risks. This information may be encoded or may be
free text, and may include details of the reaction events that support the expression of a risk.
The guidance outlines the types of information that should be available, but without
specifying the precise structure or content of the information.


Displaying dates and times Guidance on which dates and times to display, where and how to display them.


Displaying source of risk Guidance on how to communicate the source of the risk, such as whether a clinician
witnessed a reaction or the patient recounted a risk or event.


Displaying authorship of risk Guidance on communicating the author of a risk, including their name, role and location


Page 3

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


Communicating absence of risks Guidance on communicating where no risks have been recorded, including:


               - Where a positive absence has been recorded (for example, ‘no known drug allergies’)


               - Where the patient has not been asked


               - Where information is simply not available


No Decision Support Guidance on communicating where a risk will not trigger Decision Support mechanisms,
including alerts, because the risk is either not encoded (that is, it is free text) or because the
causative agent in the risk is not included in the Decision Support reference list.


Displaying risks in narrative text Guidance on how to display risk phrases as part of narrative text, as opposed to in a
list/table.


Table 1: In Scope

##### **1.4.2 Out of Scope**


Content and structure of adverse drug Guidance does not cover the content or structure of the adverse drug reaction events that
reaction event details support the risk phrases. It will not specify what detailed information must be included in the
description of a reaction event.


However, the guidance will cover how to show reaction event summaries and will use
examples of detailed reaction event descriptions to show how events may be displayed as
justification for the risks that they support.


System-initiated adverse drug reaction Guidance does not cover adverse drug reaction warnings and alerts.
warning and alert messages


Dealing with long lists of adverse drug Guidance does not cover how to deal with long lists of adverse drug reaction risks.
reaction risks


Displaying an abbreviated status of a Guidance does not cover how to display an abbreviated status of a patient’s ADR risks, such
patient’s ADR risks as an entry on a patient’s identification banner.


Table 2: Out of Scope

#### **1.5 Assumptions**


**A1** The structured terminology used as exemplars for this guidance will be SNOMED CT [®] and the Dictionary of Medicines and
Devices (dm+d).


**A2** Appropriate subsets within SNOMED CT and dm+d are available.


**A3** The user interface design should follow the agreed NHS CFH position on the structure of ADR notes, unless there are
patient safety reasons not to do so.


**A4** The application will be able to recognise that the encoded terms 'allergy to penicillin' and 'intolerance to penicillin' are
subtypes of 'propensity to adverse reaction to penicillin'.


Table 3: Assumptions


Page 4

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

#### **1.6 Dependencies**


**D1** The availability of appropriate data sets, for example, SNOMED CT subsets


**D2** The following CUI guidance documents. Changes in these documents may affect the current guidance:


    - Design Guide Entry – Date Display


    - Medications Management – Medication Line – User Interface Design Guidance


    - Displaying Graphs and Tables – User Interface Design Guidance


    - Design Guide Entry – Terminology – Display Standards for Coded Information


**D3** Certain guidelines are dependent upon the fact that the medication terminology used contains the same length terms as the
current version of the dm+d


Table 4: Dependencies


Page 5

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

### 2 GUIDANCE OVERVIEW

#### **2.1 Visual Summary of the Guidance**


The following section provides a diagrammatic representation of the design guidance, emphasizing
the process flow and introducing where in the flow the various guidance areas apply.


Figure 2 provides an overview of the ADR display, in this case shown as a list (views are discussed
later in this document):


3.3.1 Structure of adverse drug reaction risk list


3.3.2 Content of adverse drug reaction risk list


3.3.4 Format of list


3.3.8 Displaying absence of risk


3.3.9 Displaying no Decision Support


3.3.1 Structure of adverse drug reaction risk list


3.3.2 Content of supporting events (high level
guidance)


3.3.5 Displaying dates/times


3.3.6 Displaying source of risk


3.3.7 Displaying authorship of risk


3.3.1 Structure of adverse drug reaction risk list


Figure 2: Diagrammatic Overview of the Structure of the Adverse Drug Reaction Risk Display


**Note**


Section 3.3.10 is not featured in this diagram. That section shows how to apply the guidelines to a
narrative text format.


Page 6

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-9-1.png)
Microsoft and NHS Connecting for Health Confidential

### 3 GUIDANCE DETAILS

#### **3.1 Introduction**


The guidance in this document covers the structure of the list used to display the adverse drug
reaction risks, the content of the risk phrases, the display of supporting event phrases and the
display of sufficient provenance information and appropriate formatting.


The guidance in this document is based upon a programme of research, including:


  - A Web-based survey of clinicians


  - One-to-one interviews with a range of health care professionals


  - An opening risk assessment with clinicians


  - A closing risk assessment with clinicians

#### **3.2 Principles**


The following key principles inform the guidance in this document:


  - Display sufficient content to allow users to act appropriately


  - Minimize content in order to reduce the risk of misleading the user:


    - Where the meaning of content is ambiguous


    - Where the content is irrelevant to the users’ decision-making needs


  - Distinguish different types of clinical phrases, where they have radically different meanings,
for example:


    - Distinguish expressions of future risk from expressions of past events


    - Distinguish different types of phrase by distinct styles of content, labelling and location


  - Distinguish individual clinical phrases from one another, for example, through visual format


  - Describe substances in a common, unambiguous terminology (where possible)


  - Describe substances at an appropriate level, in order to help the user act appropriately


  - Order lists appropriately


  - User must be able to easily access justification for expressions of future risk, where
justifying information is available


  - User must be able to easily return to high-level information after viewing detailed
information


  - Clearly communicate the provenance of clinical phrases, where appropriate


Page 7

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

#### **3.3 Guidelines**

##### **3.3.1 Structure of Adverse Drug Reaction Risk List**


This section relates to the structure of the list that communicates the risk of adverse drug reactions
if the patient is administered certain drugs, or a stated absence of known risks. The main principle
is that there are multiple levels of information which are revealed sequentially, upon request by the
clinician.


The initial view (‘Level 1’) contains the core information that is required by a clinician in order to
identify the causative agent (namely, what medication to avoid) and what reactions the patient has
had in the past.


The second view (‘Level 2’) contains information that supports the core information, primarily
providing the justification and provenance of the core information. The second level view could also
provide a repository for other links to relevant entries elsewhere in the patient's record.



![](advdrugrisks_assets/advdrugrisks.pdf-11-0.png)





Page 8

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-12-2.png)





![](advdrugrisks_assets/advdrugrisks.pdf-12-0.png)







Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-12-1.png)

Page 9


Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-13-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-13-4.png)

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-13-1.png)

![](advdrugrisks_assets/advdrugrisks.pdf-13-2.png)

![](advdrugrisks_assets/advdrugrisks.pdf-13-3.png)

Page 10


Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-14-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-14-3.png)

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-14-1.png)

Page 11



![](advdrugrisks_assets/advdrugrisks.pdf-14-2.png)
Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-15-0.png)







Page 12



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.2 Content of Adverse Drug Reaction Risk Phrases**


**Note**


It is intended that guidance on the entry of the causative agent will be addressed in future research.



![](advdrugrisks_assets/advdrugrisks.pdf-16-0.png)











Page 13

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-17-5.png)



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-17-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-17-1.png)

![](advdrugrisks_assets/advdrugrisks.pdf-17-2.png)

![](advdrugrisks_assets/advdrugrisks.pdf-17-3.png)

![](advdrugrisks_assets/advdrugrisks.pdf-17-4.png)

Page 14


Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-18-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-18-1.png)



Page 15

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


- Clinicians indicated that it was important to display the reaction. This information they felt was 'crucial' to the interpretation of the
risk. Indeed, this notion is supported by further workshops we conducted in which clinicians indicated that they would expect key
reaction words, such as 'anaphylaxis' to be immediately visible and prominent. A number of clinicians indicated that whenever they
hear or read phrases regarding allergies, they will initially enquire about the nature of the past reaction(s). Also, seeing the reaction
may be helpful in ways that the author may not have anticipated. For example, a vasovagal response to an injection may be more
likely to be attributed to needle anxiety than to an actual adverse drug reaction (see APPENDIX B).


- Given a variety of choices, including displaying the past reactions in the ’Level 2’ view, clinicians deemed it safer to display a
summary of past reactions in the immediately visible ’Level 1’ view (see APPENDIX C).


- Given a choice of a largely unstructured narrative description of past reactions or a terser 'key words' summary of past reactions,
clinicians chose the latter, for reasons of readability and lack of distracting clutter (see APPENDIX C).


It was suggested in the study that the system should indicate where reactions occurred simultaneously. The use of the word ‘AND’ in
uppercase is used by a number of concepts in SNOMED CT to denote multiple independent concepts occurring simultaneously (see
APPENDIX C).


**Hazard Risk analysis summary:**


From our Patient Safety Risk Assessment analyses we identified a number of potential hazards, including the following key risks which
are mitigated by the design:


**Potential hazards:** **Design mitigation:**




 - Given the variety of interpretations of their meaning,
categorising adverse drug reactions into types, such as
‘allergy’ and ‘intolerance’, may negatively influence the
clinicians’ interpretation of the risk


 - Severity of risk is often subjective and can be misleading as
reactions may vary, even for a single patient


 - Severity of a risk may be missing, which could lead to
incorrect assumptions about its severity


 - In the absence of indications of severity relating to the risk
phrase, there is a risk that the clinician cannot understand
the potential impact of administering a drug.


 - If only the generic drug name is displayed, the clinician may
not be able to identify that the patient is allergic to an
excipient of particular brand.




- Avoid categorising adverse drug reactions at the level of risk
expression. If known (or suspected), categorisations can be
made in the event description, such as observation or
diagnosis events.


- Avoid displaying a severity for the risk. However, severity of a
past reaction can be communicated when describing a past
reaction.


- Provide a high level summary of the patient’s past reactions to
a medication (if known)


- Allow the system to display excipients of drugs in addition to
VTM (generic) and TF (brand) names.


Page 16



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.3 Content of Supporting Data (High-Level Guidance)**



![](advdrugrisks_assets/advdrugrisks.pdf-20-2.png)









Page 17

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-20-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-20-1.png)
Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-21-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-21-1.png)

![](advdrugrisks_assets/advdrugrisks.pdf-21-2.png)







Page 18



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


- If the only the generic drug name is displayed, the clinician
may not be able to identify factors which could have
influenced the nature of the reaction, such as the dose and
other excipients of the specific drug the patient had taken.


- If information about the route of the drug is not available the
clinician may not be able to identify (i) if the severity of the
reaction has been mediated by the route; or (ii) that the
patient is in fact allergic to a constituent of a drug rather
than the active ingredient.



Microsoft and NHS Connecting for Health Confidential


- Provide access from the risk phrase to a second level of
supporting event information, which may include fuller details
about the medication which caused the reaction, including
brand name, dosage and route.


- Provide access from the risk phrase to a second level of
supporting event information, which may include fuller details
about the medication which caused the reaction, including
brand name, dosage and route.


Page 19



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.4 Format of List**



![](advdrugrisks_assets/advdrugrisks.pdf-23-2.png)









![](advdrugrisks_assets/advdrugrisks.pdf-23-0.png)

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-23-1.png)

Page 20


Microsoft and NHS Connecting for Health Confidential


Page 21

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-24-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-24-1.png)

![](advdrugrisks_assets/advdrugrisks.pdf-24-2.png)

![](advdrugrisks_assets/advdrugrisks.pdf-24-3.png)

![](advdrugrisks_assets/advdrugrisks.pdf-24-4.png)

![](advdrugrisks_assets/advdrugrisks.pdf-24-5.png)
Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-25-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-25-1.png)



Page 22

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.5 Displaying Dates and Times**



![](advdrugrisks_assets/advdrugrisks.pdf-26-2.png)









![](advdrugrisks_assets/advdrugrisks.pdf-26-0.png)

Page 23

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-26-1.png)
Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-27-0.png)







Page 24



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.6 Displaying Source of Risk**



![](advdrugrisks_assets/advdrugrisks.pdf-28-1.png)



![](advdrugrisks_assets/advdrugrisks.pdf-28-0.png)











Page 25



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.7 Displaying Authorship of Risk and Event Phrases**



![](advdrugrisks_assets/advdrugrisks.pdf-29-2.png)







![](advdrugrisks_assets/advdrugrisks.pdf-29-0.png)



![](advdrugrisks_assets/advdrugrisks.pdf-29-1.png)



Page 26

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.8 Displaying Absence of Risk**



![](advdrugrisks_assets/advdrugrisks.pdf-30-3.png)















![](advdrugrisks_assets/advdrugrisks.pdf-30-0.png)

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009



![](advdrugrisks_assets/advdrugrisks.pdf-30-1.png)

![](advdrugrisks_assets/advdrugrisks.pdf-30-2.png)

Page 27


Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-31-0.png)

![](advdrugrisks_assets/advdrugrisks.pdf-31-1.png)









Page 28



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.9 Displaying that No Decision Support is Available for A Specific** **Risk**


The list mechanism described in this document is one way of communicating adverse drug reaction
risks in a clinical software system. However, we envisage that it will be supplemented by a decision
support service, which monitors medications being entered during the process of prescription or
medications administration. If the medication matches a medication featured in the ADR list, the
decision support service will trigger an alert message, warning the clinician that they are about to
give the patient a drug to which they have a risk of ADR.


However, there may be circumstances where a medication that has been entered as a risk does
not trigger decision support alerts. It could be that the medication name does not match anything in
the structured terminology upon which the decision support is based (for example, obsolete or
foreign drug names may not trigger an alert).


Also, even when using a structured terminology such as SNOMED CT and dm+d for recording
causative agents, not all substances may be checked as part of a decision support system; any
given decision support system will typically only check against a subset of the whole list.


In these cases, it is important that:


1. The clinician habitually checks the ADR risk list prior to prescription


2. The system highlights to the clinician that the medication risk will not trigger an alert


If the clinician is expecting decision support, in the absence of an alert, they may assume that a
medication is not a risk, even if they see it in the list. Therefore it is imperative to indicate where
decision support does not apply.


Providing such a feature can also educate the clinicians more generally about the limits of decision
support and how they should only use it in conjunction with a high level of human vigilance.
Currently the use and role of decision support is an unfamiliar concept to many working with the
NHS, and especially in secondary care, primarily because it is not widely implemented at the
moment.



![](advdrugrisks_assets/advdrugrisks.pdf-32-0.png)











Page 29



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential



![](advdrugrisks_assets/advdrugrisks.pdf-33-2.png)



![](advdrugrisks_assets/advdrugrisks.pdf-33-0.png)



![](advdrugrisks_assets/advdrugrisks.pdf-33-1.png)







Page 30



Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **3.3.10 Displaying Risks in Narrative Text**


This section addresses the display of adverse drug reaction risk information outside of a highly
structured format. There may be a number of situations where a full table is not appropriate, for
example, because there is not sufficient room or because a table would break the flow of the text.
Examples of such situations include where the risks are expressed in a referral letter or as part of a
clinical summary.


Although ‘narrative text’ describes text which is not arranged in a table, this type of text does share
a number of common guidelines with the tabular text.



![](advdrugrisks_assets/advdrugrisks.pdf-34-0.png)







Page 31

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

#### **3.4 Rationale Summary**


CUI user research provided most of the rationale for the guidance. Importantly, it revealed that:


  - Display risk categorisations are misleading and confusing


  - Past reactions must be displayed with the risk phrases


NHS CFH work done prior to this guidance also provided rationale for the guidance, including the
specification of the causative agent and the split between risk and event.


Page 32

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

### 4 DOCUMENT INFORMATION

#### **4.1 Terms and Abbreviations**


ADR Adverse Drug Reaction


CUI Common User Interface


dm+d dictionary of medicines + devices (NHS)


DSS Decision Support Systems


NPSA National Patient Safety Agency


NHS National Health Service


NHS CFH NHS Connecting for Health


SNOMED CT Systematized Nomenclature of Medicine – Clinical Terms


TF Trade Family


VTM Virtual Therapeutic Moiety


Table 5: Terms and Abbreviations

#### **4.2 Definitions**


NHS Entity Within this document, defined as a single NHS organisation or group that is operated within a single
technical infrastructure environment by a defined group of IT administrators.


The Authority The organisation implementing the NHS National Programme for IT (currently NHS Connecting for
Health).


Current best practice Current best practice is used rather than best practice, as over time best practice guidance may
change or be revised due to changes to products, changes in technology, or simply the additional field
deployment experience that comes over time.


Table 6: Definitions

#### **4.3 Nomenclature**


This section shows how to interpret the different styles used in this document to denote various
types of information.

##### **4.3.1 Body Text**


Code Monospace


Script


Other markup languages


Interface dialog names **Bold**


Field names


Controls


Page 33

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


Folder names Title Case


File names


Table 7: Body Text Styles

##### **4.3.2 Cross References**


Current document – sections Section number only


Current document – figures/tables Caption number only


Other project documents _Italics_ and possibly a footnote


Publicly available documents _Italics_ with a footnote


External Web-based content _Italics_ and a hyperlinked footnote


Table 8: Cross Reference Styles

#### **4.4 References**


**R1.** Safety in doses: medication safety incidents in the NHS, NHS National Patient Safety
Agency, 2007


**R2.** World Health Organization. Requirements for adverse reaction reporting. Geneva: Author,
1975.


**R3.** Representation in Electronic Patient Records of Allergic Reactions, Adverse Reactions, and 1.6
Intolerance of Pharmaceutical Products, Peter Horsfield, NHS, 2008


**R4.** SCG Guidance on the Reference of Allergies and Adverse Reaction Information Using NHS 1.0
Message Templates, Steve Bentley, NHS, 2008


**R5.** Thien, F. Practice Essentials: Drug Hypersensitivity. Medical Journal of Australia 2006


**R6.** NHS CUI Programme – Design Guide Entry – Date Display 3.0.0.0


**R7.** NHS CUI Programme – Medications Management – Medication Line – User Interface Design 2.0.0.0
Guidance


**R8.** NHS CUI Programme – Displaying Graphs and Tables – User Interface Design Guidance 2.0.0.0


**R9.** NHS CUI Programme – Design Guide Entry – Terminology – Display Standards for Coded 2.0.0.0
Information


**R10.** A clinician’s guide to drug hypersensitivity, Kemp et al. (eds), eMJA The Medical Journal of
Australia, MJA 2006; 185 (6): 333-338


**R11.** Anaphylaxis: diagnosis and management, Kemp et al. (eds). eMJA The Medical Journal of Australia,
MJA 2006; 185 (5): 283-289


**R12.** Audit of Drug Allergy Documentation, Bedford General Hospital
[http://www.londonpharmacy.nhs.uk/educationandtraining/prereg/pfizerProjectAwards2008/Rupam%](http://www.londonpharmacy.nhs.uk/educationandtraining/prereg/pfizerProjectAwards2008/Rupam%20Purohit%20Bedford%20general%20Hospital.doc)
[20Purohit%20Bedford%20general%20Hospital.doc](http://www.londonpharmacy.nhs.uk/educationandtraining/prereg/pfizerProjectAwards2008/Rupam%20Purohit%20Bedford%20general%20Hospital.doc)


**R13.** Adverse Drug Reactions: Types and Treatment Options, Riedl, M. and Casillas, A. American Family
Physician, November 1, 2003


**R14.** Policy for the Documentation of Allergy Status, Department of Health, Social Services and Public
Safety (Northern Ireland), http://www.dhsspsni.gov.uk/policy_allergy.pdf


Page 34

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


**R15.** Accuracy of drug allergy document: have we improved our practice? Nzuma, F.S., Royal Brompton
& Harefield NHS Trust, March 2007


**R16.** Audit of Drug Allergy Documentation, Carrie Fung, West Middlesex University Hospital, 2006


**R17.** Effective drug-allergy checking: methodological and operational issues, Kuperman, G.J. et al,
Journal of Biomedical Informatics, Vol 36, Issue 1/2, Pages 70-79, February 2003


**R18.** Strategies to Improve medical Record Documentation of Allergies and Adverse Reactions, Harvard
Pilgram Health Care
https://www.harvardpilgrim.org/pls/portal/docs/PAGE/PROVIDERS/MEDMGMT/MEDICALRECORD
S/IMPROVEMENT_STRATEGIES.PDF


**R19.** Recording of drug allergies: are we doing enough? Radford, A. et al, Journal of Evaluation in Clinical
Practice, Vol 13 Issue 1, Pages 130-137, Feb 2007


**R20.** Reporting adverse drug reactions: A guide for healthcare professionals, BMA Board of Science, May
2006


Table 9: References


Page 35

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

### APPENDIX A REFERENCE SUMMARY OF GUIDANCE


ADR-0001 3.3.1 Feature multiple levels of display: an immediate view (‘Level 1’) containing the risk phrase (comprising
the causative agent and any past reactions) and a set of other views (‘Level 2’) that are not
immediately visible and contain supporting events data, if such event data and linkages exist


ADR-0002 3.3.1 Feature a mechanism that allows the user to access relevant items within the ‘Level 2’ view from
individual risks in the ‘Level 1’ view, if such event data and linkages exist


ADR-0003 3.3.1 Feature a mechanism that allows the user to return to the ‘Level 1’ list


ADR-0004 3.3.1 Link each risk phrase in the ‘Level 1’ view to one or more related event phrases in the ‘Level 2’ view, if
such event data and linkages exist.


ADR-0005 3.3.1 In the ‘Level 1’ view, the causative agent column should be displayed at the far left-hand side of the
table


ADR-0006 3.3.1 In the ‘Level 1’ view, the past reactions column should be displayed to the right of the causative agent
column


ADR-0007 3.3.1 Feature a mechanism that allows the user to access further details from the ‘Level 2’ line items, if such
event data and linkages exist


ADR-0008 3.3.1 Arrange the list according to a consistent (default) order


ADR-0009 3.3.1 Order the list alphabetically on the generic medication name (causative agent)


ADR-0010 3.3.2 Display the causative agent, which comprises a single medication, excipient or drug class


ADR-0011 3.3.2 Display the causative agent in the immediate view (‘Level 1’).


ADR-0012 3.3.2 The causative agent should be displayed in the same text in which it was recorded.


This may be typically the Virtual Therapeutic Moiety (VTM) or drug class name, or, less commonly, the
Trade Family (TF) name or the name of a medication excipient.


ADR-0013 3.3.2 Do not feature two or more risk phrases that contain the same causative agent


ADR-0014 3.3.2 The display must be able to handle both encoded and unencoded data relating to the causative agent


ADR-0015 3.3.2 Where possible, the causative agent should be displayed as encoded data


ADR-0016 3.3.2 Do not display information about the form, route or dosage of the medication in the Level 1 view


ADR-0017 3.3.2 In Level 1 view, display a description of any linked past reactions, if available


ADR-0018 3.3.2 Communicate descriptions of past reactions as key words, ideally only one or two per reaction,
although this will depend upon the available data


ADR-0019 3.3.2 Where information about the past reactions for a given ADR risk is not known, communicate that this
information is not known


ADR-0020 3.3.2 The display must be able to handle multiple past reactions for a single causative agent


ADR-0021 3.3.2 For a given risk, the display should be able to distinguish between those reactions which occurred
simultaneously and those which occurred on different occasions, that is, in separate clinical episodes.


ADR-0022 3.3.2 Where multiple reactions occurred for the same reaction event (that is, simultaneously), display the
character ‘+’ in between them or the word ‘AND’ in capital letters.


For example, if the patient experienced a rash and nausea at the same time, the words ‘rash +
nausea’ would be displayed, or ‘rash AND nausea’


ADR-0023 3.3.2 Where multiple reactions occurred for different reaction events (that is, separated in time), punctuate
them with a comma


ADR-0024 3.3.2 Clearly label the causative agents


Page 36

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


ADR-0025 3.3.2 Label the causative agents ‘Drug / substance’ for example, as a column header.


ADR-0026 3.3.2 Clearly label the past reactions


ADR-0027 3.3.2 Label the past reactions ‘Past reactions’.


ADR-0028 3.3.2 Clearly label the whole list


ADR-0029 3.3.2 Label the list ‘Adverse drug reaction risks’.


ADR-0030 3.3.3 In Level 2, feature at least one event phrase, preferably an encoded expression, if such event data is
available and has been linked to the risk data.


ADR-0031 3.3.3 In those instances where information about a reaction event is not known, feature an entry comprising
other justification, such as reference to a patient’s assertion of their ADR condition. This may comprise
free text.


ADR-0032 3.3.3 Supporting data may comprise information which is not directly associated with a recorded reaction
event, such as a patient’s account of their allergy history.


ADR-0033 3.3.4 In the ‘Level 1’ view the medication column must be able to expand to a default width of at least 44
characters, allowing for a maximum two-line wrap.


**Note**


Where a medication wraps onto a second row, it should not split any words. The new row
should occur at a space in the phrase.


ADR-0034 3.3.4 In the ‘Level 1’ view, the data should be displayed in a tabular format.


ADR-0035 3.3.4 Feature the ‘Level 2’ supporting events data in a tabular format.


ADR-0036 3.3.4 Follow the guidance featured in the CUI Medication Line guidance which addresses how to format
medication names.


ADR-0037 3.3.4 In the ‘Level 1’ view, feature all encoded medication names (causative agent) in bold and in lower
case.


ADR-0038 3.3.4 Feature all unencoded (that is, written in free text) medication names in normal weight and in lower
case.


ADR-0039 3.3.4 Feature light shading on alternate rows in the tables.


ADR-0040 3.3.4 Feature a highlight colour for hover-over of lines.


ADR-0041 3.3.4 Do not feature black triangles as navigation controls


ADR-0042 3.3.5 Feature a date for each discrete event item in the ‘Level 2’ view. This includes record-entry events,
such as ‘risk identified’ or ‘risk confirmed’.


ADR-0043 3.3.5 Do not feature dates in the ‘Level 1’ view


ADR-0044 3.3.5 For each event item listed in Level 2, display, as a default, the date of entry, unless, at the point of
entry, a different date has been specified (such the actual date on an event).


ADR-0045 3.3.5 Allow for the display of partial dates, where appropriate (in Level 2).


ADR-0046 3.3.6 For each ‘source’ description, feature the ‘source' who first articulated the information (for example,
‘Patient’, ‘Doctor’, ‘Carer’)


ADR-0047 3.3.6 For each ‘source’ description, feature the encounter or situation in which the event took place (for
example, ‘Past Medical History’, ‘Admissions Triage’)


ADR-0048 3.3.7 For each event phrase, feature the name of the clinician who recorded the event


ADR-0049 3.3.7 For each event phrase, feature the role of the clinician who recorded the event (for example _,_ ‘Nurse’,
‘F2’, ‘Registrar’)


Page 37

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


ADR-0050 3.3.7 For each event phrase, feature the location in which the event was recorded (for example,
‘Hammersmith Hospital’). This may be included in the 'further details' sections


ADR-0051 3.3.8 Where the clinician has checked if the patient has any adverse drug reaction risks and has concluded
that there are none, the system should display ‘No known adverse drug reaction risks’


ADR-0052 3.3.8 Where the system displays ‘No known adverse drug reaction risks’, it should also display the date and
time when this phrase was recorded


ADR-0053 3.3.8 Where the system displays ‘No known adverse drug reaction risks’, it should also display provenance
information relating to the author of the phrase, such as the name, role and, possibly, location of the
author.


ADR-0054 3.3.8 Where no clinician has checked if the patient has any adverse drug risks, the system should display
‘Risk status unknown’


ADR-0055 3.3.9 If, upon displaying the risks, the term describing the medication will not trigger decision support the
system should communicate this (for example, if the term is not expressed in structured terminology or
if the term is not in the decision support system subset)


ADR-0056 3.3.9 Communicate the fact that a medication will not trigger decision support next to the medication label


ADR-0057 3.3.9 Communicate the potential lack of a decision support service by displaying either an icon with a hoverover message and/or appropriate text (depending upon space constraints)


ADR-0058 3.3.10 Maintain a structured format to the display of risk phrases in narrative text, as opposed to in a list


ADR-0059 3.3.10 Display risk phrases on successive lines rather than displaying them in a continuous line


ADR-0060 3.3.10 Provide information about the causative agent (medication) in a narrative text expression of an
adverse drug reaction risk


ADR-0061 3.3.10 Provide information about the past reactions in the narrative text


ADR-0062 3.3.10 Ensure that the text indicates that the medication relates a risk of adverse drug reaction.


Table 10: Reference Summary of Guidance


Page 38

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

### APPENDIX B STUDY ID 42: EXECUTIVE SUMMARY

#### **B.1 Abstract**


The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
between Microsoft® and NHS Connecting for Health (NHS CFH), which is part the NHS National
Programme for Information Technology (NPfIT).


As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
that software applications used by the NHS enhance patient safety. To achieve this, CAPS
provides software developers with user interface design guidelines derived through a user-centric
development process that includes explicit patient-safety evaluations.


This summary describes key findings from initial qualitative research carried out in August 2008 by
the CUI CAPS team on Adverse Drug Reaction Risks (ADR Risks). These findings are a subset
from a larger internal report prepared for the CUI CAPS ADR Risks team.


**Purpose:**


To understand current practice and hazards for ADR Risk display, to understand the purpose
behind ADR Risk display in clinical contexts, and to gain clinical feedback on early design
concepts. With the overall aim of providing design requirements for ADR Risk display.


**Method:**


Interviews: semi-structured telephone interviews with 12 Healthcare Professionals (HCPs),
incorporating wireframe illustrations of early design concepts. Literature search: analysis of existing
NHS CFH documentation on Allergies / ADR Risks and external references on Allergy / ADR Risk
documentation.

#### **B.2 Research Objectives**


To gain an understanding of:


1. Current paper and electronic practices for documenting ADR Risks (such as allergies) in a
variety of clinical contexts


2. Current advantages and disadvantages with these practices, in particular known and
potential patient safety hazards with electronic display of ADR Risks


3. What purpose the documentation of ADR Risks has in clinical contexts


4. The potential impact of, and hazards associated with, implementing the existing NHS CFH
recommendations on ADR Risk data structure for electronic records, such as by the
categorisation of ADR Risks


5. Clinical feedback on specific design areas of ADR Risk display, such as the display of the
nature of reaction and stating positive absence

#### **B.3 Research Design**


Interviews were semi-structured and incorporated early design concepts for ADR Risk display.
These concepts were wireframe designs based on existing NHS CFH and CUI work, and were
used as a means to stimulate discussion around key areas. Interviews were carried out by
telephone and lasted one hour. Detailed notes from the interviews were qualitatively analysed
using thematic coding.


Page 39

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


The literature analysis was based on:


  - NHS CFH documentation on Allergy / ADR data structures provided by the CUI NHS CFH
Specific Audience


  - Previous ADR Risks groundwork done by the CUI project and NHS CFH


  - Material collected during previous CUI research – not specific to ADR Risks


  - External literature found through the internet


External literature was found using Google, PubMed and find-health-articles.com, using search
criteria such as ‘drug hypersensitivity’, ‘drug allergy documentation’ and ‘strategies allergy
documentation’. Analysis focused on published material from healthcare journals or health
organisations such as the World Health Organisation (WHO) and UK National Patient Safety
Agency (NPSA).

#### **B.4 Results**

##### **B.4.1 Participant Description**


12 participants were interviewed separately. Each had either volunteered through the NHS CFH
Event Management System signup (EMS) or had been contacted by the CUI having taken part in
previous CUI work. Five out of 12 respondents had previously taken part in CUI clinical
engagement for other work areas. Table 12: Interview Participants shows a summary of the
participants’ profiles:


303 Nurse Renal (outpatients) Consultant Teaching Hospital  - Med


304 Pharmacist Management Assc Director Teaching Hospital Cerner R.0, (iSoft), Med / High
electronic discharge


305 Pharmacist Research Junior Teaching Hospital ServeRx Med


306 Doctor On rotation F2 DGH  - Med / High


307 GP GP Senior GP Meditel, Micro-Doc, High
EMIS LV / GV / PCS


308 Doctor Paediatrics Assc Specialist DGH (Foundation)  - Med


309 Pharmacist EPR Senior Teaching Hospital iSoft CM Med


310 Doctor Care of the Elderly ST3 DGH (Foundation) Electronic discharge Med



311 Nurse / Change Critical Care /
facilitator change
management



Sister Teaching Hospital Cerner Low / Med



312 Pharmacist Research Senior (Prof) Teaching Hospital ServeRx High


313 Doctor A&E / on rotation F2 Teaching Hospital EMIS LV, Vision, Med
Symphony


314 Doctor A&E / on rotation F1 Teaching Hospital EMIS, Vision High


Table 11: Interview Participants


All participants were clinical staff who had experience of viewing and recording ADR Risks as part
of their work (usually as ‘drug allergies’). The majority of participants were from acute secondary
care, with one participant from general practice and none from community care. The 11 secondary
care participants were from eight different trusts, with diverse geographical locations.


Page 40

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


Most participants had used some kind of electronic patient record, which meant they had
experience of electronic display of some kind of ADR Risk list. The majority also had
medium-to-high computer experience, where high experience included items such as being familiar
with spreadsheet calculation functions and having an understanding of databases.

##### **B.4.2 Example Current Practice**


  - Many kinds of clinical staff will be viewing and recording patient’s ADR Risk status and
details


  - ADR Risks currently may be recorded on a large range of documents: drug charts, the body
of the medical notes, warning sticker on front of medical notes, wristbands, bed notices,
handover sheets, discharge forms, and so on


  - The proximal reasons for a clinician viewing / recording ADR Risks are that they are trying
to understand now OR document so that someone else (or themselves) can understand
later:


    - What caused the reaction?


    - Exactly what reaction did it cause?


    - What was the mechanism that linked the agent to the reaction?


  - The ultimate reasons a clinician may be viewing or recording ADR Risks are to:


    - Know what you or someone else should not be prescribing / dispensing / administering
now or in the future


    - Know what you CAN prescribe / dispense / administer now or in the future


    - Know whether the potential risk of giving the agent again is outweighed by the benefit


    - Know what other treatment might be required if the supposed causative agent were to
be given again (for example, increased monitoring)

##### **B.4.3 Example Known and Potential Hazards**


  - Currently, finding the detail about a patient’s allergies (ADR Risks) involves hunting in the
notes, which is time consuming and error-prone, meaning information that would support,
refute or add detail to a risk is missed


  - Over cautious marking of a patient as allergic to an agent limits future therapeutic choice,
which can have negative consequences for the patient and the healthcare organisation


  - Excessive false positive ADR Risk documenting can lead clinicians to ignore allergy
documentation


  - Summaries of the nature of reaction may hide important detail and lead staff to make
incorrect assumptions. ‘Rash’ in particular is problematic


  - The nature of reaction is often not documented for a risk


  - The nature of past reactions may not be a good predicator of the nature of future reactions,
especially when surrounding contextual information is not available


  - Staff may incorrectly assume that a previous administration of an agent without an adverse
reaction means that the agent could not be the cause of a subsequent reaction. Whereas
the initial administration could have been when sensitization to the agent occurred


Page 41

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **B.4.4 Key Findings per Design Area** **Categorisation of Risk**


Participants did not have a shared understanding of the terms: ADR, intolerance, allergy.


Participants were not familiar with having to categorise a reaction into allergy / intolerance / ADR.
10 out of 12 participants had concerns about the validity and safety of being forced to categorise
when documenting ADR Risks or about seeing these categories when subsequently viewing the
risks.

##### **Causative Agent**


The most useful piece of information in an ADR Risk is the causative agent.


When trying to determine the causative agent for a reaction, clinicians would usually require access
to a large range of information, much of which is not often available to them.

##### **Nature of Reaction**


Currently it is good practice to document the nature of reaction with the ADR Risk.


Participants differed over whether it was possible to summarise the nature of reaction safely in a
word or short phrase. They also differed over whether in an electronic display it was necessary to
always display the nature of reaction when viewing the ADR Risk.


The nature of reaction was generally used to interpret the ‘severity’ of the reaction. However some
participants pointed out problems with assuming a ‘severity’ of future risk based on short
descriptions and past reactions.

##### **Threshold of Documentation**


Though the majority of participants would document all reactions possibly caused by drugs, some
felt that what you documented would vary due to factors such as: ‘significance’ of reaction, seniority
of staff and where you were documenting the risk.

##### **Generalising Risks**


The generalising of risks is seen as currently problematic as staff may not know what class a drug
belongs to, or how the reaction may generalise. Therefore there is the danger of mistakenly
generalising, or mistakenly not generalising, a reaction.

##### **Positive Absence**


Though a variety of terms were currently used (NKDA, NKA, nil known), all secondary care
participants were familiar with the concept of documenting positive absence.

##### **Modification**


All participants felt it should be possible to ‘remove’ or deprecate a risk from the active ADR Risk
List in certain situations. However all felt that subsequent readers of the ADR Risk List should be
aware of these ‘removed’ items.

##### **Event / Risk Propensity Distinction**


Participants who had used GP systems were familiar with the distinction between events and risk
propensity, and felt it was useful. Other participants were less clear about the distinction, but felt it
was similar to structures sometimes used in paper notes.


Page 42

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **Dates**


Many participants were confused by the dates presented in the design concepts, which could be
interpreted as the date of: first reaction, diagnosis, documentation or review / confirmation.

##### **Certainty that Agent Caused Reaction**


All participants understood the concept ‘probably caused by’, most found it familiar, but only some
felt it was useful, as only in a minority of cases would the causative agent be certain.


Page 43

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

### APPENDIX C STUDY ID 45: EXECUTIVE SUMMARY

#### **C.1 Abstract**


The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
between Microsoft® and NHS Connecting for Health (NHS CFH), which is part the NHS National
Programme for Information Technology (NPfIT).


As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
that software applications used by the NHS enhance patient safety. To achieve this, CAPS
provides software developers with user interface design guidelines derived through a user-centric
development process that includes explicit patient-safety evaluations.


This summary describes key findings from user research carried out in September 2008 by the CUI
CAPS team on the display of Adverse Drug Reaction Risks (ADR Risks). These findings are a
subset from a larger internal report prepared for the CUI CAPS ADR Risks team.


**Purpose:**


To gain clinical feedback on design concepts for displaying ADR Risks in electronic systems.


**Method:**


Interviews: structured interviews with 13 Healthcare Professionals (HCPs) eliciting HCP
preferences and qualitative feedback on design alternatives. Online survey: survey with 56 HCPs
eliciting HCP preferences and qualitative feedback on a subset of the design alternatives used in
interview.


**Key Results:**


Based on clinician preference and rationale:


  - Do not categorise risks into allergy / ADR / intolerance


  - Display a succinct summary of past reactions in the risk statement, clarifying that they are
past reactions


  - Position the causative agent first in the risk statement


  - Do not display dates at the top level, as long as they are easily accessible


  - Allow immediate access to the information on supporting events

#### **C.2 Research Objectives**


To gather HCP design preferences, qualitative feedback and possible patient safety hazards of CUI
ADR Risk display designs.


Focusing on the areas of:


  - Risk categorisation


  - Displaying the nature of reaction


  - Inclusion criteria of an ADR Risk List


  - Sort orders


  - Headings


  - Dates


  - Layout


  - Positive absence and null states


Page 44

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


  - Levels below the risk statement


  - Drug class


  - Representing an ADR Risk as narrative


  - Decision Support absence

#### **C.3 Research Design**


Interviews were structured, lasted one hour and carried out in person or by telephone. Participants
were taken through wireframe design alternatives for each area of investigation and asked for
preference based on patient safety criteria. Other qualitative feedback was elicited covering
rationale for preference, design fit with current and best practice, design understandability and any
potential hazards resulting from the designs. Detailed notes from the interviews were qualitatively
analysed using thematic coding.


Online surveys covered a subset of the interview’s design areas and similarly elicited HCP
preferences for design alternatives, with the option to record rationale for preference and other
qualitative feedback. The survey was distributed by NHS CFH to NHS employees who had signedup to participate through the NHS CFH Events Management System (NHS CFH EMS) or who had
provided their contact details as part of previous CUI work. Recipients were able to forward the
survey to colleagues. No remuneration was supplied for completing the survey. The survey took
20-40 minutes to complete.

#### **C.4 Results**

##### **C.4.1 Participant Description** **Interviews**


13 participants were interviewed separately. Each had either volunteered through the NHS CFH
EMS signup or had been recruited by an HCP who had volunteered. Three out of 13 respondents
had previously taken part in CUI clinical engagement for other work areas.


Table 12: Interview Participants shows a summary of the participants’ profiles:





329 Nurse Practitioner Emergency Senior Walk-in centre Walk-in Centre’s Low / Med
(basic CIS)


330 Nurse Practitioner Emergency Senior Walk-in centre Walk-in Centre’s Med / High
(basic CIS)


331 Nurse Practitioner Emergency Senior Walk-in centre Walk-in Centre’s Low / Med
(basic CIS)


332 Nurse Practitioner Emergency Senior Walk-in centre Walk-in Centre’s Low / Med
(basic CIS)


333 Nurse Practitioner Emergency Senior Walk-in centre Various Med / High


334 Nurse Practitioner / Emergency Senior Teaching Hospital A&E System, High
IT Lead various local


335 Nurse Practitioner Emergency Senior Teaching Hospital A&E System, Med
various local


341 Doctor Emergency SpR Teaching Hospital A&E System, Med / High
various local


Page 45

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential





336 Doctor GP 7 years GP GP EMIS Med / High


337 Doctor GP trainee SpR GP / Hospital EMIS, various Med / High


338 Research Nurse Renal Senior Teaching Hospital Proton, various Med


339 Doctor Palliative care SpR DGH / Hospice Various local Med
/ GP trainee


340 Doctor GP 17 years GP GP Vision Med / High


Table 12: Interview Participants


All participants were clinical staff who had experience of viewing and recording ADR Risks as part
of their work (usually as ‘drug allergies’). The majority of participants were from acute secondary
care, with three participants from general practice and none from community care. The 10
secondary care participants were from four different trusts, with diverse geographical locations.


All participants had used some kind of electronic patient record, which meant they had experience
of electronic display of some kind of ADR Risk List. The majority had medium computer
experience, where high experience includes items such as being familiar with spreadsheet
calculation functions and having an understanding of databases.

##### **Online Survey**


56 respondents completed the survey during the seven days that it was live. Table 13: Survey
Respondents shows a summary of the respondents’ profiles:


Ward Manager 2%


Midwife 2%


Other Nurse 7%


Junior Doctor 19%


General practitioner 12%


Medical Consultant 9%


Other doctor 2%


Anaesthetist 2%


Physiotherapist 2%


Allied health professional 2%


Pharmacist 25%


Healthcare informatician 2%


Healthcare manager 5%


Software - manager 1%


Other 9%


Table 13: Survey Respondents


Roles that were not represented by survey respondents have been removed from the table.


Page 46

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential


Other respondent descriptions:


  - 40% had not taken part in CUI clinical engagement before


  - 76% had worked in NHS for more than five years


  - 71% worked in secondary care, 16% worked in general practice


  - 75% had created or modified a spreadsheet calculation function, implying a high familiarity
with computer use


  - Respondents were from diverse geographical locations

##### **C.4.2 Design Areas** **Categorising Risks**


  - Survey respondents were not able to consistently categorise a reaction into: ADR / allergy /
intolerance based on short reaction statements, many also described problems in
performing the task


  - Many interviewees struggled to describe the difference between ADR and intolerance


  - Though some interviewees felt risk categorisation might be useful, they felt it was likely to
be unreliable


  - The majority of survey respondents and interviewees preferred a design that did not display
risk categories. Rationale for preference was that the categorisation was not useful or at
least less useful (and familiar) than the nature of reaction

##### **Displaying the Nature of Reaction**


  - The majority of survey respondents and interviewees preferred a design with a reaction
shown at the ‘top level’. The presence of reaction information was given as the key reason
for preference


  - A succinct summary of the reaction was preferred to longer free-text. However, some
concerns were raised about summarising reactions in several words – however this is
already widespread current practice and no participants felt it was impossible


  - Showing ‘severe’ reactions only was seen to be problematic. But if a universal distinction
can be found, it might be useful to indicate it in some way

##### **Inclusion Criteria of ADR Risk List**


  - There are likely to be differences of opinion about whether an item should be included on a
risk list. Issues that therefore need to be addressed are:


    - Dealing with long ADR Risk Lists


    - Dealing with list management where HCPs using the list have diverse perspectives


    - Clear indication about what kinds of item the list does and should contain


  - Some clinical applications are likely to use risk lists that are not limited to ADR Risks

##### **Sort Order of ADR Risk List**


  - Though sorting risk statements by ‘most potential for harm’ might be desirable, objectively
determining this for all items would be difficult and possibly misleading


Page 47

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **Causative Agent Headings**


 - All of the design alternatives for a causative agent column heading were seen as
problematic. Alternative suggestions included those often seen on drug charts, for example,
‘Medication / Substance’

##### **Dates**


 - Date labels ‘Last Confirmed’ and ‘Risk Identified’ were seen as confusing. Clarification of
the risk propensity / event distinction may be necessary with whatever labels are used for
dates


 - The majority of survey respondents and interviewees preferred dates to be on-demand
rather than continuously displayed at the top level of the risk display, though this was not a
strong preference

##### **List Layout**


 - Preference and rationale showed that the causative agent should be positioned first in a
row, so that it is read first and stands out


 - Preference and rationale showed that the risks should be displayed in columns rather than
‘sentences’

##### **Positive Absence and Null States**


 - At least in acute secondary care, stating positive absence was expected, and could include
these elements:


   - ‘no known’ (rather than ‘no’)


   - An indication of what is not known


   - Date of risk status last checked


   - Clear access to details of how this was checked


 - Six of 12 interviewees misinterpreted ‘no recorded adverse drug reactions’ as a label for a
null state – instead believing it to indicate a positive absence

##### **Levels**


 - All interviewees felt that information about supporting events should be immediately
accessible from the risk statement. For example, not hidden behind a tab

##### **The Term ‘Risk’**


 - Several interviewees misunderstood the term ‘Risk’ believing it to be generic knowledge
support information. In addition, reactions based on past events should be clarified as past,
rather than statements of the nature of future risk

##### **Drug Class**


 - Automatic display of drug class with the risk statement was felt to be unnecessary and
potentially misleading as risks with specific medications may not necessarily generalise to
the familiar drug categories such as ‘NSAID’


 - Most interviewees did not understand a description of the chemical classification ‘Heteroaryl
acid’


Page 48

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


Microsoft and NHS Connecting for Health Confidential

##### **Displaying Risks as Narrative Text**


 - Interviewees preferred risks expressed in narrative as structured text (such as bullet points)
rather than as prose in a paragraph


Page 49

Display of Adverse Drug Reaction Risks User Interface Design Guidance
Prepared by NHS CUI Programme Team, Version 1.0.0.0 Baseline
Last modified on 13 January 2009


