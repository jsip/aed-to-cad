import { convertAEDtoCAD } from "./conversion";
import { thousandsDelimiter } from "./rate";

// Placeholder for now
const AED_PRICE_REGEX = /AED\s?(\d+(?:,\d{3})*(?:\.\d+)?)/g;

/**
 * Walks the tree and replaces AED pricing with CAD pricing
 * @param {Node} root The root node to start walking from
 * @returns {void}
 */
export const walkTreeAndReplace = (root: Node): void => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node: Text | null;

  while ((node = walker.nextNode() as Text | null)) {
    const textContent = node.nodeValue;

    if (!textContent) continue;

    const newText = textContent.replace(AED_PRICE_REGEX, (match, p1) => {
      const aedAmount = parseFloat(p1.toString().replace(/,/g, ""));
      
      if (isNaN(aedAmount)) return match;
      
      return `${thousandsDelimiter(convertAEDtoCAD(aedAmount))} CAD`;
    });

    if (newText !== textContent) {
      node.nodeValue = newText;
    }
  }
}

/**
 * Initializes the MutationObserver to watch for new nodes being added to the DOM
 * @returns {void}
 */
export const initMutationObserver = () => {
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          walkTreeAndReplace(node);
        }
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}