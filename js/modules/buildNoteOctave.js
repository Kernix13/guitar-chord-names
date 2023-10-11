// uniqueUserNotesAsRoot is a 12-note array for each note
import { SHARPS, FLATS } from "../data/constants.js";

const sharpRadioBtn = document.querySelector("#sharp-key");
const flatRadioBtn = document.querySelector("#flat-key");

let uniqueUserNotesAsRoot = [];

export default function buildNoteOctave(note) {
  if (sharpRadioBtn.checked) {
    const position = SHARPS.indexOf(note);
    uniqueUserNotesAsRoot = SHARPS.slice(position, position + 12);
    console.log(uniqueUserNotesAsRoot)
  } else if (flatRadioBtn.checked) {
    const position = FLATS.indexOf(note);
    uniqueUserNotesAsRoot = FLATS.slice(position, position + 12);
  }
}