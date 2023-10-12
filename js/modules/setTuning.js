import { TUNINGS } from "../data/constants.js";
import pageReset from "./pageReset.js";

/**
 * Set innerText above number inputs for the tuning the user selected.
 * Using pageReset to reload the page which triggers the animation.
 * 
 * @param {Event} e To prevent the default action of the form submit.
 */
export default function setTuning(e) {
  e.preventDefault();

  // HTML Elements
  const altTuningsSelectElement = document.querySelector("#alt-tunings");

  // Values
  const selectOptionValue = altTuningsSelectElement.options[altTuningsSelectElement.selectedIndex].value;
  const notesOfOpenStrings = TUNINGS[selectOptionValue].split("-");

  // set the innerText
  sixth.innerText = notesOfOpenStrings[0];
  fifth.innerText = notesOfOpenStrings[1];
  fourth.innerText = notesOfOpenStrings[2];
  third.innerText = notesOfOpenStrings[3];
  second.innerText = notesOfOpenStrings[4];
  first.innerText = notesOfOpenStrings[5];

  const selectedTuningInLocalStorage = [
    sixth.innerText, 
    fifth.innerText, 
    fourth.innerText, 
    third.innerText, 
    second.innerText, 
    first.innerText
  ];
  localStorage.setItem("userStrings", selectedTuningInLocalStorage);
  localStorage.setItem("optionVal", selectOptionValue);

  pageReset();
}