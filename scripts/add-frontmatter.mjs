import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

// Regular expression to match frontmatter
const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;

// Regular expression to match first heading
const headingRegex = /^#\s+(.+)$/m;

// Regular expression to match title in frontmatter
const titleRegex = /^title:\s*(.+)$/m;

async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    const headingMatch = content.match(headingRegex);

    if (!headingMatch) {
      console.log(`Warning: ${filePath} has no heading to use as title`);
      return;
    }

    const headingTitle = headingMatch[1].trim();
    let hasFrontmatter = false;
    let existingTitle = null;
    let contentWithoutFrontmatter = content;
    let existingFrontmatter = '';

    // Check for existing frontmatter
    const frontmatterMatch = content.match(frontmatterRegex);
    if (frontmatterMatch) {
      hasFrontmatter = true;
      existingFrontmatter = frontmatterMatch[1];
      contentWithoutFrontmatter = content.slice(frontmatterMatch[0].length);

      // Check if title already exists
      const titleMatch = existingFrontmatter.match(titleRegex);
      if (titleMatch) {
        existingTitle = titleMatch[1].trim();
      }
    }

    // Only update if:
    // 1. No frontmatter exists, or
    // 2. Frontmatter exists but has no title, or
    // 3. Frontmatter title doesn't match the heading
    const needsUpdate = !hasFrontmatter || !existingTitle;
    // || existingTitle !== headingTitle
    if (needsUpdate) {
      let newFrontmatter;
      const formattedTitle = headingTitle.includes(':')
        ? `'${headingTitle}'`
        : headingTitle;
      if (hasFrontmatter) {
        // Remove existing title if it exists
        const frontmatterWithoutTitle = existingFrontmatter
          .replace(titleRegex, '')
          .trim();
        newFrontmatter = `title: ${formattedTitle}${frontmatterWithoutTitle ? '\n' + frontmatterWithoutTitle : ''}`;
      } else {
        newFrontmatter = `title: ${formattedTitle}`;
      }

      const newContent = `---
${newFrontmatter}
---\n
${contentWithoutFrontmatter}`;

      await writeFile(filePath, newContent);
      console.log(
        `${hasFrontmatter ? 'Updated' : 'Added'} frontmatter to ${filePath}`,
      );
    } else {
      console.log(`Skipping ${filePath} - frontmatter title matches heading`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function main() {
  try {
    // Find all markdown files in docs directory
    const files = await glob('{analyses,docs}/**/*.md');
    console.log(`Found ${files.length} markdown files`);

    // Process each file
    for (const file of files) {
      await processFile(file);
    }

    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
