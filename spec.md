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

---

## 5. Markdown Fixes

### Objective
Apply an LLM-guided cleanup pass to reduce PDF extraction artefacts while preserving original wording and meaning.

### Script
- [s/fix-markdown-transcripts](/home/marcus/code/cui/s/fix-markdown-transcripts)

### Fix Categories Applied
1. Wrapped sentence reflow:
   - Joined soft-wrapped lines inside plain paragraph blocks.
   - Did not merge structural Markdown lines (headings, lists, images, blockquotes, code fences, tables, comments).
2. Punctuation spacing normalization:
   - Removed stray spaces before punctuation (`.,;:!?`) in prose where extraction inserted them.
3. Garbled glyph normalization:
   - Replaced common ligatures (`ﬁ`, `ﬂ`, `ﬀ`, `ﬃ`, `ﬄ`) with ASCII equivalents.
4. Invalid bullet normalization:
   - Converts non-standard bullet characters at list starts (`•`, `·`, `●`, `○`, `▪`, `■`, `◦`, ``) to `- `.
5. Table of contents insertion (Markdown All in One style):
   - Inserts `<!-- TOC --> ... <!-- /TOC -->` blocks.
   - TOCs are generated from document headings.
   - Duplicate heading anchors are deduplicated to avoid repeated entries from running headers/footers in PDFs.
   - Existing TOC blocks are replaced on subsequent passes.
6. Whitespace normalization:
   - Collapses repeated blank lines in body text blocks.
   - Ensures a trailing newline at EOF.
7. Source PDF traceability link insertion:
   - Adds a `Source PDF:` line in each Markdown file with a relative link to the original PDF.
   - Link text is the source PDF filename.
   - Existing `Source PDF:` lines are replaced on reruns to keep links current.
8. Legacy contents section removal:
   - Removes in-body legacy `Contents` / `Table of Contents` sections from PDF transcription output.
   - Keeps the generated Markdown TOC as the single navigational table of contents.
   - Also prunes TOC-like residue in preamble areas (for example, dotted TOC entry lines and page-listing artefacts) when they are part of legacy TOC noise.

### Pass Metrics (Observed)
- Initial cleanup run:
  - `punctuation_spacing_fixed`: `1475`
  - `wrapped_lines_joined`: `12884`
  - `toc_inserted`: `50`
- Follow-up TOC dedupe run:
  - `toc_replaced`: `50`
  - `toc_inserted`: `50`
- Source-link insertion run:
  - `source_link_inserted`: `50`
- Legacy contents removal run:
  - `legacy_contents_sections_removed`: `50`
  - `legacy_contents_lines_removed`: `2076`
- Legacy preamble TOC-fragment cleanup:
  - `preamble_toc_fragments_removed`: `2895`

### Operational Notes For Future LLM Passes
- Preserve wording strictly: do not paraphrase, rewrite, or modernize source language.
- Prioritize structural and typographic cleanup only.
- Keep image links and asset paths intact.
- If an ambiguous transformation is encountered, append it to [queries.md](/home/marcus/code/cui/queries.md) and continue processing remaining files.

---

## 6. Docs Framework Options Appraisal (Feb 2026)

### Current Decision
- Proceed with **Astro + Starlight** for the docs website implementation.

### Context
- Goal: make the generated Markdown corpus browseable as a polished website.
- Future requirement: likely adoption of NHS UI conventions and potentially Nunjucks-based NHS frontend patterns.

### Options Considered
1. Astro (including Starlight)
   - Pros:
     - Strong modern docs experience.
     - Flexible theming and component overrides.
     - Good fit for iterative enhancement from existing Markdown.
   - Cons:
     - Nunjucks is not a first-class/native templating path; integration is possible but custom.
2. Docusaurus
   - Pros:
     - Mature docs platform with strong ecosystem.
   - Cons:
     - React/MDX-first architecture makes later Nunjucks integration relatively awkward.
3. Eleventy
   - Pros:
     - Excellent native fit for Nunjucks workflows.
     - Very flexible static site generation.
   - Cons:
     - Fewer docs-specific batteries included out of the box; requires more bespoke docs UX assembly.

### Decision Rationale
- Astro + Starlight selected as best near-term balance between:
  - rapid delivery for current Markdown corpus,
  - built-in docs UX (left sidebar navigation, search, content collections),
  - strong theming capability,
  - manageable future path if NHS-specific visual conventions are introduced.

### Deferred Architecture Note
- If NHS.UK Nunjucks macros become a strict requirement, re-evaluate migration path:
  - either add a custom Nunjucks rendering layer in Astro, or
  - move rendering concerns to Eleventy while preserving Markdown content structure.

---

## 7. Recent Implementation Updates (Post-Appraisal)

### 7.1 Starlight Site Setup

#### Objective
Replace custom Markdown browsing pages with a first-class docs framework that provides sidebar navigation and better default documentation UX.

#### Applied Changes
1. Introduced Starlight integration in `astro.config.mjs`.
2. Configured docs content collection in `src/content.config.ts` using Starlight docs schema.
3. Added sync pipeline script [s/sync-starlight-content.mjs](/home/marcus/code/cui/s/sync-starlight-content.mjs) to:
   - copy `markdown/` into `src/content/docs/`
   - copy `pdfs/` into `public/pdfs/`
   - ensure docs index file exists
   - inject frontmatter title when missing
4. Added sidebar builder script [s/starlight-sidebar.mjs](/home/marcus/code/cui/s/starlight-sidebar.mjs) and wired it into Starlight config.
5. Removed legacy custom Astro route/layout files previously used for ad-hoc Markdown rendering.

#### Result
- Starlight now generates site routes for all documentation pages with working left-sidebar navigation.

### 7.2 Dockerized Development Flow

#### Objective
Ensure the site runs in a consistent containerized environment via existing project scripts.

#### Applied Changes
1. Added Docker-based local development setup (`Dockerfile`, `docker-compose.yml`).
2. Updated [s/up](/home/marcus/code/cui/s/up) to start the dockerized dev environment.
3. Added companion teardown script [s/down](/home/marcus/code/cui/s/down).

#### Operational Note
- Some generated files may be created as `root` when produced inside containers; this can block host-side sync scripts from deleting/replacing generated trees unless ownership is corrected.

### 7.3 Full-English Navigation Labels

#### Objective
Replace abbreviated sidebar labels (for example `advdrugrisks`) with full human-readable document titles while keeping existing abbreviated filenames unchanged.

#### Applied Changes
1. Extended [s/download-cui](/home/marcus/code/cui/s/download-cui) to emit a JSON link-title manifest:
   - default path: [pdfs/_link-manifest.json](/home/marcus/code/cui/pdfs/_link-manifest.json)
   - fields include section slug, canonical filename, resolved filename, source URL, and original link text
2. Generated the manifest from the archive source using `--dry-run`, so no PDFs are overwritten while link metadata is captured.
3. Updated [s/starlight-sidebar.mjs](/home/marcus/code/cui/s/starlight-sidebar.mjs) to prefer manifest titles for labels.
4. Added cleanup to strip file-size suffixes from link labels (for example `(PDF, 1.3MB)`).
5. Kept heuristic title extraction as fallback when manifest data is unavailable.

#### Result
- Sidebar item labels now display full English document names sourced from the archived UIG page link text.
- Underlying markdown and PDF filenames remain unchanged.
