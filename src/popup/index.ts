import { mount } from "svelte";
import Options from "../components/Options.svelte";
import { count } from "../utils/storage";

// Action popup
// https://developer.chrome.com/docs/extensions/reference/action/

const render = () => {
  const target = document.getElementById("app");

  if (target) {
    mount(Options, { target, props: { count } });
  }
};

document.addEventListener("DOMContentLoaded", render);
