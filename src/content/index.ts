// Content scripts
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/

import { initMutationObserver, walkTreeAndReplace } from "../utils/parser";

const initialize = () => {
  walkTreeAndReplace(document.body);
  initMutationObserver();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}