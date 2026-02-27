#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Creates a root docs index page if one does not already exist.
 * @param {string} docsDirectory Docs root directory.
 */
async function ensureDocsIndex(docsDirectory) {
  const indexPath = path.join(docsDirectory, 'index.md');
  try {
    await fs.access(indexPath);
  } catch {
    await fs.writeFile(
      indexPath,
      [
        '---',
        'title: CUI UIG Documentation',
        'description: Browse restored NHS CUI UIG markdown content.',
        '---',
        '',
        '# CUI UIG Documentation',
        '',
        'Use the left sidebar to browse all sections and documents.',
        ''
      ].join('\n'),
      'utf-8'
    );
  }
}

/**
 * Converts a slug-like string to a simple title.
 * @param {string} value File stem or path segment.
 * @returns {string} Human-readable title.
 */
function humanize(value) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

/**
 * Extracts a title from markdown content.
 * @param {string} markdownText Markdown source.
 * @param {string} fallbackFilePath Relative markdown file path.
 * @returns {string} Best-effort title.
 */
function extractTitle(markdownText, fallbackFilePath) {
  const frontmatterTitleMatch = markdownText.match(/^---\s*[\s\S]*?^\s*title:\s*["']?(.+?)["']?\s*$[\s\S]*?^---\s*$/m);
  if (frontmatterTitleMatch) {
    return frontmatterTitleMatch[1].trim();
  }

  const headingMatch = markdownText.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].replace(/[*_`]/g, '').trim();
  }

  const guidanceTitleMatch = markdownText.match(/([A-Z][A-Za-z0-9(),/&\-\s]+?)\s+User Interface Design Guidance/i);
  if (guidanceTitleMatch) {
    return guidanceTitleMatch[1].replace(/\s+/g, ' ').trim();
  }

  return humanize(path.basename(fallbackFilePath, '.md'));
}

/**
 * Escapes text for YAML scalar usage.
 * @param {string} value Input text.
 * @returns {string} Escaped text.
 */
function escapeYaml(value) {
  return value.replace(/"/g, '\\"');
}

/**
 * Recursively adds frontmatter titles to docs files missing frontmatter.
 * @param {string} docsDirectory Root docs directory.
 */
async function ensureFrontmatterTitles(docsDirectory) {
  const queue = [docsDirectory];

  while (queue.length > 0) {
    const currentDirectory = queue.pop();
    const entries = await fs.readdir(currentDirectory, { withFileTypes: true });

    for (const entry of entries) {
      const absolutePath = path.join(currentDirectory, entry.name);
      if (entry.isDirectory()) {
        queue.push(absolutePath);
        continue;
      }
      if (!entry.isFile() || !entry.name.endsWith('.md')) {
        continue;
      }

      const markdownText = await fs.readFile(absolutePath, 'utf-8');
      if (markdownText.startsWith('---\n')) {
        continue;
      }

      const relativePath = path.relative(docsDirectory, absolutePath).replace(/\\/g, '/');
      const title = extractTitle(markdownText, relativePath);
      const frontmatter = `---\ntitle: "${escapeYaml(title)}"\n---\n\n`;
      await fs.writeFile(absolutePath, frontmatter + markdownText, 'utf-8');
    }
  }
}

/**
 * Prepares markdown content for Starlight direct loading.
 */
async function main() {
  await ensureDocsIndex('markdown');
  await ensureFrontmatterTitles('markdown');
  console.log('Prepared markdown/ for direct Starlight loading.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
