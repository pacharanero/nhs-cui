# Preservation and terms

## Provenance

The collection was recovered from the [National Archives snapshot of the CUI user-interface guidance page](https://webarchive.nationalarchives.gov.uk/ukgwa/20160921150545/http://systems.digital.nhs.uk/data/cui/uig). [The original link manifest](pdfs/_link-manifest.json) records the archive URLs, section names and link text.

There are 50 PDF downloads, 50 transcriptions and 2,420 extracted PNG files. Some images are repeated logos or fragments rather than complete figures. Two patient-banner downloads have identical contents. A preserved download count is not a count of distinct guidelines.

The Zensical migration moves the corpus without changing PDF or PNG bytes or transcribed clinical text outside generated navigation and frontmatter titles. Source-relative image and PDF links remain valid. Thirteen broken generated contents links were corrected or removed where no corresponding heading existed; this does not remove the underlying source content. Page titles were corrected from filename abbreviations or extraction artefacts. Navigation, introductory pages and the publishing toolchain are maintained separately from the historical guidance.

## Rights are document-specific

The migration branch also incorporates the table-reconstruction work subsequently merged on the archive's `main` branch. Those table repairs are preserved, not regenerated here. Nineteen contents-list entries referring to headings no longer present after that reconstruction were removed; the actual document content remains intact. The separately authored `50-key-cui-rules.md` is retained at the repository root as interpretation, not substituted for the archived source documents.

Original documents, logos and extracted illustrations retain their owners' rights. Their presence in a public archive is not, by itself, permission to redistribute everything. Do not apply a blanket code or documentation licence to the historical corpus.

Many documents state the Open Government Licence. Where those terms apply: contains public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). Logo and third-party exclusions still apply.

Gabe's [document manifest](https://github.com/giussepe198/common-user-interface/blob/main/nhs-cui-documents/manifest.json) and [NOTICE](https://github.com/giussepe198/common-user-interface/blob/main/NOTICE.md) provide a useful per-document rights inventory. They distinguish explicit OGL statements, publisher copyright without an explicit licence statement, and four Microsoft-co-owned documents.

## Upstream contribution boundary

This existing archive retains its full recovered corpus. A contribution to Gabe's repository must respect his narrower redistribution policy. Do not import the following PDFs, their transcriptions or their extracted assets without resolving permission:

- `advdrugrisks`: display of adverse drug reactions.
- `disambig`: terminology disambiguation and error correction.
- `carepathways`: care pathways conceptual modelling.
- `cuidesignguide`: handover requirements.

The proposed upstream site omits those materials, links to the archive instead and does not import the duplicate `patben-2` download. Gabe's existing `nhs-cui-documents/` remains the canonical upstream PDF collection; a generated site copy is a build artefact, not a second tracked archive.

## Clinical interpretation

Original document wording, including obsolete language and historical clinical-safety statements, is preserved as source material. Transcription, a passing site build and publication do not prove fidelity, current applicability, accessibility or implementation compliance. Review substantive changes against the PDF and current authoritative guidance.
