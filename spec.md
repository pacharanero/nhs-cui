# CUI PDF Download and Transcription Specification

## 1. PDF Download Pipeline

### Objective
Download every PDF linked from the archived CUI UIG page and store files under `pdfs/`, grouped by the nearest preceding `h2` section heading.

### Source Page
- `https://webarchive.nationalarchives.gov.uk/ukgwa/20160921150545/http://systems.digital.nhs.uk/data/cui/uig`

### Script
- [s/download-cui](/home/marcus/code/cui/s/download-cui)

### Process Applied
1. Fetch the archive page using browser-like request headers.
2. Detect and follow the `replay_iframe` source URL (`...mp_/http://...`) because the outer page is a wrapper.
3. Parse HTML content and track the active `h2` value while scanning links.
4. Select links where `href` contains `.pdf`.
5. Create output directory names from section headings using slugified folder names.
6. Download each PDF and save into `pdfs/<section-slug>/`.
7. Avoid file collisions with numeric suffixes (e.g. `patben-2.pdf`).

### Python Libraries Used
- Standard library only:
  - `urllib.request` (HTTP requests)
  - `html.parser` (HTML parsing)
  - `urllib.parse` (URL joining/normalization)
  - `argparse` (CLI options)
  - `pathlib` / `os` (filesystem)
  - `re` (slugify + iframe detection)
  - `dataclasses` (link record structure)

---

## 2. PDF to Markdown Transcription Pipeline

### Objective
Transcribe PDF text into Markdown while extracting and embedding original PDF images. Maintain directory parity with `pdfs/`.

### Script
- [s/pdfs-to-markdown](/home/marcus/code/cui/s/pdfs-to-markdown)

### Process Applied
1. Recursively scan `pdfs/**/*.pdf`.
2. For each PDF, generate:
   - Markdown file: `markdown/<same-path>/<name>.md`
   - Asset folder: `markdown/<same-path>/<name>_assets/`
3. Use `pymupdf4llm.to_markdown(...)` to:
   - Extract text content into Markdown
   - Export encountered images as PNGs
   - Insert relative Markdown image links to extracted assets
4. Preserve mirrored folder structure from source PDF tree.

### Libraries Used
- `pymupdf4llm` (high-level PDF-to-Markdown conversion)
- `pymupdf` (MuPDF engine backend used by `pymupdf4llm`)
- Python standard library:
  - `argparse`, `pathlib`, `os`

---

## 3. Markdown Linting and Normalization

### Objective
Run linter checks over all generated Markdown and auto-fix mechanical issues.

### Tooling Used
- `markdownlint-cli2` via `npx`

### Config
- [.markdownlint-cli2.jsonc](/home/marcus/code/cui/.markdownlint-cli2.jsonc)
- Enabled rules are mechanical-only for generated conversion output:
  - `MD009` (no trailing spaces)
  - `MD010` (no hard tabs)
  - `MD047` (single trailing newline)

### Process Applied
1. Run `markdownlint-cli2 --fix` over `markdown/**/*.md`.
2. Re-run lint in check mode to confirm zero remaining errors.

---

## 4. Current Output Summary

- Downloaded PDFs: `50`
- Transcribed Markdown files: `50`
- Image asset folders: `50`
- Extracted/embedded PNG images: `2420`
