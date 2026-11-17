# NHS Common User Interface source guidance

An independent, illustrated restoration of the NHS CUI design guidance, published with Zensical.

## Quick start

Requires Python 3.11 or later. No Node.js or Docker is needed to build or preview the site.

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
s/docs
```

`s/docs` opens the first free port in 8000-8030. Override it with `s/docs --dev-addr localhost:8100`. Build with `s/build`; run navigation, local-file-link and script tests with `s/test`. Generated output is in `site/`.

## What is preserved

- `docs/guidance/`: 50 Markdown transcriptions and 2,420 extracted PNG assets, plus a collection introduction.
- `docs/pdfs/`: 50 original PDF downloads and their archive link manifest.
- `docs/preservation.md`: provenance, duplicate downloads, historical limitations and document-specific rights.
- `s/`: local preview/build/check scripts and the original recovery tools.
- `spec/`: migration and upstream-integration notes; the old Astro experiment is retained as historical context, not active instructions.

The transcriptions are not a clinical-policy update or a certification. Consult the original PDF and current authoritative guidance when interpreting a rule. Original wording and illustrations retain their owners' rights; see [preservation and terms](docs/preservation.md).

## Relationship to Clinical CUI

[Gabe Rijpma's Common User Interface](https://github.com/giussepe198/common-user-interface) provides React and TypeScript controls implementing and extending the guidance. This project preserves readable, illustrated source material; it will not develop a competing library. Contributions should improve source accessibility, implementation traceability and the existing library.

The proposed upstream home is a root-level Zensical `docs/` site, separate from Gabe's existing `nhs-cui-react/docs/` library documentation. See [the integration proposal](spec/upstream-integration.md).

## Publishing

GitHub Actions builds and tests pull requests and deploys `site/` on pushes to `main`. Repository Settings > Pages > Source must be **GitHub Actions**. The configured URL is <https://pacharanero.github.io/nhs-cui/>; publishing settings are not changed by a local build.

For recovery-tool usage see [s/README.md](s/README.md). Historical source: [National Archives CUI UIG snapshot](https://webarchive.nationalarchives.gov.uk/ukgwa/20160921150545/http://systems.digital.nhs.uk/data/cui/uig).
