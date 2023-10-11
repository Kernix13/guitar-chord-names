import { TUNINGS } from "../data/constants.js";

export default function setTuning(e) {
  e.preventDefault();

  // HTML Elements
  const altTuningsSelectElement = document.querySelector("#alt-tunings");

  // Values
  const selectOptionValue = altTuningsSelectElement.options[altTuningsSelectElement.selectedIndex].value;
  const notesOfOpenStrings = TUNINGS[selectOptionValue].split("-");

  // set the innerText given the selected select option
  sixth.innerText = notesOfOpenStrings[0];
  fifth.innerText = notesOfOpenStrings[1];
  fourth.innerText = notesOfOpenStrings[2];
  third.innerText = notesOfOpenStrings[3];
  second.innerText = notesOfOpenStrings[4];
  first.innerText = notesOfOpenStrings[5];

  // Is selectedTuningInLocalStorage also redundant?
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
}