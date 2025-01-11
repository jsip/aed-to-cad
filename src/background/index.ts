// Background service workers
// https://developer.chrome.com/docs/extensions/mv3/service_workers/

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));