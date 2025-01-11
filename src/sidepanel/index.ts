import { mount } from "svelte";
import Calculator from "../components/Calculator.svelte";

// Side panel
// https://developer.chrome.com/docs/extensions/reference/sidePanel/

const render = () => {
  const target = document.getElementById("app");

  if (target) {
    mount(Calculator, { target });
  }
}

document.addEventListener("DOMContentLoaded", render);
