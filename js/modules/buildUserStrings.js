import { SHARPS, FLATS } from "../data/constants.js";

/**
 * @description - An array of the users' selected tuning
 * 
 * @global
 * @type {string[]}
 */
const uniqueUserStrings = [];

/**
 * @description - 17-note array for ech string
 * 
 * @module allUserStrings
 * @type {string[]}
 */
export const allUserStrings = [];

/**
 * @description - Create uniqueUserStrings and push onto allUserStrings
 * 
 * @module buildUserStrings
 * @function buildUserStrings
 */
export function buildUserStrings() {

  /** @type {HTMLElement} */
  const sharpRadioBtn = document.querySelector("#sharp-key");
  /** @type {HTMLElement} */
  const flatRadioBtn = document.querySelector("#flat-key");
  
  /** @type {string} */
  const userTuning = localStorage.getItem("userStrings");
  /** @type {string[]} */
  const userTuningNotes = userTuning.split(',');
  
  userTuningNotes.forEach(string => {
    if (sharpRadioBtn.checked) {

      /** @type {number} */
      const position = SHARPS.indexOf(string);

      uniqueUserStrings[string] = SHARPS.slice(position, position + 17);
      allUserStrings.push(uniqueUserStrings[string]);
    } else if (flatRadioBtn.checked) {
      
      /** @type {number} */
      const position = FLATS.indexOf(string);
      uniqueUserStrings[string] = FLATS.slice(position, position + 17);
      allUserStrings.push(uniqueUserStrings[string]);
    }
  });
}