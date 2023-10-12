import { checkIndices, chordsFound } from "./checkIndices.js";
import { sharp, flat } from "../data/constants.js";

/**
 * 8. Handle edge cases/exceptions: enharmonic equivalents
 * 
 * 
 * @param {object} noteTones 
 * @param {array} octave 
 * @param {array} intervals 
 */
export default function enharmonics(noteTones, octave, intervals) {
  checkIndices(intervals)
  if (chordsFound.length > 0) {
      // Fix flat 9's if the ♭9 is a sharp
      if (noteTones.hasOwnProperty(1) && noteTones[1].length === 2) {
        octave.splice(1, 1, octave[2] + flat);
        noteTones[1] = octave[1];
      }

      // Fix sharp 9's / flat 3's
      if (noteTones.hasOwnProperty(3) && !noteTones.hasOwnProperty(4) && noteTones[3].length === 2) {
        octave.splice(3, 1, octave[4] + flat);
        noteTones[3] = octave[3];
      }
      if (noteTones.hasOwnProperty(3) && noteTones.hasOwnProperty(4) && noteTones[3].length === 2 && flatRadioBtn.checked) {
        octave.splice(3, 1, octave[2] + sharp);
        noteTones[3] = octave[3];
      }

      // Fix sharp 11's / flat 5's
      if (noteTones.hasOwnProperty(6) && !noteTones.hasOwnProperty(7) && noteTones[6].length === 2) {
        octave.splice(6, 1, octave[7] + flat);
        noteTones[6] = octave[6];
      }

      // Fix sharp 5's / flat 13's
      if (noteTones.hasOwnProperty(7) && noteTones.hasOwnProperty(8) && noteTones[8].length === 2) {
        octave.splice(8, 1, octave[9] + flat);
        noteTones[8] = octave[8];

      }
      if (!noteTones.hasOwnProperty(7) && noteTones.hasOwnProperty(8) && noteTones[8].length === 2 && flatRadioBtn.checked) {
        octave.splice(8, 1, octave[7] + sharp);
        noteTones[8] = octave[8];
      }

      // Fix flat 7's for the keys F & C if sharpRadioBtn.checked
      if (noteTones.hasOwnProperty(10) && noteTones[10].length === 2 && arr[0].length === 1) {
        octave.splice(10, 1, octave[11] + flat);
        noteTones[10] = octave[10];
      }
  }
}