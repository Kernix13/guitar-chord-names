import { TUNINGS } from "../data/constants.js";
import pageReset from "./pageReset.js";

/**
 * @description - Set innerText above number inputs for selected tuning.
 * Using pageReset to reload the page which triggers the animation.
 * 
 * @module setTuning
 * @param {Event} e To prevent the default action of the form submit.
 */
export default function setTuning(e) {
  e.preventDefault();

  /** @type {HTMLElement} */
  const altTuningsElement = document.querySelector("#alt-tunings");
  /** @type {string} */
  const selectedOption = altTuningsElement.options[altTuningsElement.selectedIndex].value;
  /** @type {string[]} */
  const notesOfOpenStrings = TUNINGS[selectedOption].split("-");
  /** @type {HTMLElement} */
  const sharpRadioBtn = document.querySelector("#sharp-key");
  /** @type {HTMLElement} */
  const flatRadioBtn = document.querySelector("#flat-key");

  // Set the innerText above inputs
  sixth.innerText = notesOfOpenStrings[0];
  fifth.innerText = notesOfOpenStrings[1];
  fourth.innerText = notesOfOpenStrings[2];
  third.innerText = notesOfOpenStrings[3];
  second.innerText = notesOfOpenStrings[4];
  first.innerText = notesOfOpenStrings[5];

  /** @type {string[]} */
  const savedUserTuning = [
    sixth.innerText, 
    fifth.innerText, 
    fourth.innerText, 
    third.innerText, 
    second.innerText, 
    first.innerText
  ];

  localStorage.setItem("userStrings", savedUserTuning);
  localStorage.setItem("optionVal", selectedOption);

  if (sharpRadioBtn.checked) {
    /** @type {string} */
    const savedUserKey = sharpRadioBtn.value;
    localStorage.setItem("userKey", savedUserKey);
  } else if (flatRadioBtn.checked) {
    /** @type {string} */
    const savedUserKey = flatRadioBtn.value;
    localStorage.setItem("userKey", savedUserKey);
  }

  // pageReset();
}