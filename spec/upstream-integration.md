# Illustrated source guidance in Common User Interface

## Decision

Contribute a root-level Zensical source-reference site to `giussepe198/common-user-interface`. Keep `nhs-cui-react/docs/` (guidance notes, decisions, components and worked examples) unchanged. This is a documentation contribution, not a new library or a replacement for Gabe's existing demo site.

```text
common-user-interface/
  docs/
    index.md
    preservation.md
    guidance/<subject>/<document>.md
    guidance/<subject>/<document>_assets/*.png
    stylesheets/extra.css
  mkdocs.yml
  requirements.txt
  s/docs
  s/build-docs
  s/prepare-docs.py
  nhs-cui-documents/       existing canonical PDFs and rights manifest
  nhs-cui-react/docs/     existing library notes and demos, unchanged
```

## Corpus boundary

The standalone archive preserves all 50 recovered downloads. The upstream contribution imports 45 distinct transcriptions and their retained image assets: exclude the four Microsoft-co-owned documents and their derived assets, plus the byte-identical `patben-2` duplicate.

No PDFs need to be added to Gabe's Git history. Match each imported source PDF to an existing upstream file by SHA-256, including files inside `patident.zip`. Preserve source links by staging the matched originals into ignored `docs/pdfs/` during build. Record the canonical archive URL, upstream file/member, digest and original transcription location in a checked-in manifest. Verify the bytes at every preparation, not just once during import.

`advdrugrisks`, `disambig`, `carepathways` and `cuidesignguide` stay excluded; link to their National Archives URLs through Gabe's manifest. The missing actual Patient Banner QIG and additional documents already held by Gabe can be transcribed in later contributions, not fabricated from the duplicate download.

## Publishing

The first upstream PR should build and check the site on pull requests, but should not take over a Pages deployment or modify repository settings. Gabe can select the eventual publishing URL and enable artifact-based Pages deployment after reviewing the new source-reference site. The standalone archive keeps its own existing artifact-based Pages workflow, migrated from Astro to Zensical.

## Acceptance checks

- Preserve PDF and PNG bytes, and clinical text outside generated navigation/frontmatter.
- Render original illustrations and make source PDFs available locally and in the built site.
- Check explicit navigation, local links, anchors, checksums and source-member mappings.
- Verify representative phone, tablet and desktop pages, keyboard navigation and image loading.
- State document-specific rights, transcription limitations and historical/consultation status.
- Do not include private review notes, generated sites, unrelated library fixes or excluded source assets.
