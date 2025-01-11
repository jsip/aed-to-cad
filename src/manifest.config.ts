import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

const { version } = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/);

export default defineManifest(async () => ({
  manifest_version: 3,
  name: "AED to CAD conversion extension",
  description: "Converts AED to CAD on webpages",
  version: `${major}.${minor}.${patch}`,
  version_name: version,
  icons: {
    "16": "src/assets/icons/icon-16.png",
    "32": "src/assets/icons/icon-32.png",
    "48": "src/assets/icons/icon-48.png",
    "128": "src/assets/icons/icon-128.png",
  },
  content_scripts: [
    {
      matches: ["https://*/*"],
      js: ["src/content/index.ts"],
    },
  ],
  background: {
    service_worker: "src/background/index.ts",
  },
  side_panel: {
    default_path: "src/sidepanel/sidepanel.html",
  },
  action: {
    default_icon: {
      "16": "src/assets/icons/icon-16.png",
      "32": "src/assets/icons/icon-32.png",
      "48": "src/assets/icons/icon-48.png",
      "128": "src/assets/icons/icon-128.png",
    },
  },
  permissions: ["sidePanel"] as chrome.runtime.ManifestPermissions[],
}));
