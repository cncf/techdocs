import { visit } from 'unist-util-visit';

/**
 * A remark plugin that rewrites markdown links from GitHub-style `.md`
 * references to relative paths without the `.md` extension, handling index
 * files appropriately.
 */
export function rewriteMdLinks() {
  return (tree, file) => {
    // console.log('rewriteMdLinks: Processing file:', file.path);

    // Check if this is an index.md file
    const isIndexFile =
      file.basename === 'index.md' || file.basename === 'README.md';

    // Helper function to process .md links
    const processMdLink = (node) => {
      if (typeof node.url === 'string' && /\.md($|[\/#])/.test(node.url)) {
        // if (node.url.startsWith('docs/assistance')) {
        //   console.log('rewriteMdLinks: Found .md link:', node.url, 'in file:', file.path);
        // }

        if (node.url.startsWith('http')) return;

        // Remove .md extension
        let url = node.url.replace(/(?:index)?\.md($|[\/#])/, '/$1');

        // If it's a sibling file (no / or starts with ./), handle based on file type
        if (true || /^([^\/]|\.\/)/.test(node.url)) {
          if (url.startsWith('./')) url = url.slice(2);
          if (!isIndexFile) {
            url = '../' + url;
          }
        }
        node.url = url;
        //console.log('rewriteMdLinks: Rewrote link to:', node.url);
      }
    };

    // Handle inline markdown links
    visit(tree, 'link', processMdLink);

    // Handle link definitions (reference-style links)
    visit(tree, 'definition', processMdLink);
  };
}
