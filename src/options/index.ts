import { mount } from "svelte";
import Options from "../components/Options.svelte";
import { count } from "../utils/storage";

// Options
// https://developer.chrome.com/docs/extensions/mv3/options/

const render = () => {
  const target = document.getElementById("app");

  if (target) {
    mount(Options, { target, props: { count } });
  }
}

document.addEventListener("DOMContentLoaded", render);
