# CNHS Common User Interface (CUI) User Interface Guidelines (UIG) Resuscitation Project

## Aims

This project intends to resuscitate the lost content of the NHS Common User Interface (CUI) User Interface Guidelines (UIG) which have been archived on the National Archives web archive. The original content was in PDF format, and the goal is to download these PDFs, transcribe their content into Markdown format, and apply cleanup passes to produce a more readable and structured output.

This is an essential first stage, that enables these guidelines to be more easily accessed, searched, and repurposed for modern use. The original PDFs are often difficult to read and navigate, and converting them to Markdown allows for better formatting, linking, and integration with other tools.

Much of the content in these PDFs is still relevant and valuable for current NHS digital projects, and this project aims to preserve and make it more accessible for future use. There is also content which is outdated and needs to be reviewed and updated. The Markdown format will allow for easier editing and updating of the content as needed.

### National Archives Web Archive

The original CUI content is available on the National Archives web archive at the following URL:
https://webarchive.nationalarchives.gov.uk/ukgwa/20160921140920/http://systems.digital.nhs.uk/data/cui

### Roadmap

* [ ] **Phase 1** -  Recreate the CUI content in a more modern and easily browsable format - markdown files with embedded images, and a clear directory structure. It will be published as a static, browsable website using a documentation-friendly SSG.

* [ ] **Phase 2** - Review and update the content to ensure it is still relevant and accurate for current NHS digital projects. Remove outdated information and add new content as needed, while maintaining the original structure and intent of the guidelines.

* [ ] **Phase 3** - Use patterns from popular user interface frameworks (e.g. Bootstrap, Material Design) and the knowledge in the CUI to create a reusable, open source UI framework based on the CUI guidelines

## Astro Site Preview

This repository now includes an Astro-based static documentation site that renders all files in `markdown/` and exposes linked source PDFs from `pdfs/`.

### Run locally (Dockerized)

```bash
s/up
```

The site is then available at `http://localhost:4321`.

If port `4321` is already in use, set an alternative host port:

```bash
HOST_PORT=44321 s/up
```

Then open `http://localhost:44321`.

### Stop local environment

```bash
s/down
```

### Build static output (host)

```bash
npm run build
```

`predev` and `prebuild` automatically run `s/sync-site-assets.mjs` to mirror `markdown/` and `pdfs/` into `public/` before Astro starts/builds.
