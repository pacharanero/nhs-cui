# Repository scripts

Run scripts from the checkout. Site tools prefer `.venv/bin/zensical`, then `zensical` on PATH. Python 3.11 or later is required.

| Script | Purpose |
| --- | --- |
| `s/docs` | Preview the site on the first free port in 8000-8030 and open the browser. Use `DOCS_OPEN=0 s/docs` on a headless host. |
| `s/build` | Clean, strict Zensical build into `site/`; forwards build flags. |
| `s/test` | Shell syntax, checker regression tests, navigation coverage and local file links. |
| `s/check-docs` | Dependency-free navigation and local-target check; anchors are validated by the strict build. |
| `s/download-cui` | Original recovery tool, now defaulting to `docs/pdfs/`. Downloads require rights review; avoid rerunning into the preserved corpus unintentionally. |
| `s/pdfs-to-markdown` | Original extraction tool, now defaulting to `docs/pdfs/` and `docs/guidance/`. Requires separately installed PyMuPDF and PyMuPDF4LLM. |
| `s/fix-markdown-transcripts` | Original mechanical cleanup tool, now defaulting to `docs/guidance/`. Review its diff; it is not a clinical review. |

Only the publishing dependency belongs in `requirements.txt`. Recovery dependencies are not needed to preview, build or test the preserved site. Use a separate environment and review/pin their versions before regenerating the corpus.

The existing generated contents anchors were corrected for Zensical where needed. Do not regenerate navigation blindly with an older slugging algorithm; run `s/test` and `s/build` after any recovery-tool run.
