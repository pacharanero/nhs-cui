# NHS Common User Interface (CUI) source guidance

An independent, illustrated restoration of the NHS CUI design guidance, published with Zensical.

## Ongoing development

**The main focus of ongoing work is [Gabe Rijpma's Common User Interface repository](https://github.com/giussepe198/common-user-interface).** It now includes the contributed Zensical-rendered source guidance alongside its React and TypeScript component library. Please direct new implementation work and improvements to the shared guidance there.

This repository remains available with its restored documents, original PDFs, recovery tools and history. Everything here, including the published website, is being retained for now; this is not a competing component-library project.

## Quick start

Requires Python 3.11 or later. No Node.js or Docker is needed to build or preview the site.

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
s/docs
```

`s/docs` opens the first free port in 8000-8030. Override it with `s/docs --dev-addr localhost:8100`. Build with `s/build`; run navigation, local-file-link and script tests with `s/test`. Generated output is in `site/`.

The header appearance control cycles between automatic (system preference), light and dark modes. The CUI wordmark and favicon are independent archive branding, not an NHS logo. Historical illustrations retain their original colours on a white backing in either theme.

## What is preserved

- `docs/guidance/`: 50 Markdown transcriptions and 2,420 extracted PNG assets, plus a collection introduction.
- `docs/pdfs/`: 50 original PDF downloads and their archive link manifest.
- `docs/preservation.md`: provenance, duplicate downloads, historical limitations and document-specific rights.
- `s/`: local preview/build/check scripts and the original recovery tools.
- `spec/`: migration and upstream-integration notes; the old Astro experiment is retained as historical context, not active instructions.

The transcriptions are not a clinical-policy update or a certification. Consult the original PDF and current authoritative guidance when interpreting a rule. Original wording and illustrations retain their owners' rights; see [preservation and terms](docs/preservation.md).

## Relationship to Clinical CUI

[Gabe Rijpma's Common User Interface](https://github.com/giussepe198/common-user-interface) provides React and TypeScript controls implementing and extending the guidance. The illustrated source-guidance contribution was merged in [PR #3](https://github.com/giussepe198/common-user-interface/pull/3), making that repository the shared home for ongoing work.

The contributed Zensical site lives in its root-level `docs/`, separate from the existing `nhs-cui-react/docs/` library documentation. The [integration proposal](spec/upstream-integration.md) records the original plan; document-specific rights exclusions and PDF duplication still need to be respected in future consolidation.

## Publishing

GitHub Actions builds and tests pull requests and deploys `site/` on pushes to `main`. Repository Settings > Pages > Source must be **GitHub Actions**. The configured URL is <https://pacharanero.github.io/nhs-cui/>; publishing settings are not changed by a local build.

For recovery-tool usage see [s/README.md](s/README.md). Historical source: [National Archives CUI UIG snapshot](https://webarchive.nationalarchives.gov.uk/ukgwa/20160921150545/http://systems.digital.nhs.uk/data/cui/uig).
