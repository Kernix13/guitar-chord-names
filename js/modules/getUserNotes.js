import { allUserStrings } from "./buildUserStrings.js";

const numberInputElements = document.querySelectorAll('.note');
const sharpRadioBtn = document.querySelector("#sharp-key");
const flatRadioBtn = document.querySelector("#flat-key");
const userFretNumbers = [];

/**
 * Pushes onto userChordNotes[] the chromatic note name that corresponds
 * to the fret numbers entered by the user, or pushes undefined for any
 * string where the user did not add a fret number.
 * 
 * @param {array} notes 
 */
export default function getUserNotes(notes) {

  numberInputElements.forEach(item => {
    userFretNumbers.push(parseInt(item.value));
  })
  
  if (sharpRadioBtn.checked) {
    
    // Using standard tuning to name these variables
    const [sharpLoE, sharpA, sharpD, sharpG, sharpB, sharpHiE] = [...allUserStrings];
    
    notes.push(
      sharpLoE[userFretNumbers[0]], 
      sharpA[userFretNumbers[1]], 
      sharpD[userFretNumbers[2]], 
      sharpG[userFretNumbers[3]], 
      sharpB[userFretNumbers[4]], 
      sharpHiE[userFretNumbers[5]]
    );
  } else if (flatRadioBtn.checked) {
    const [flatLoE, flatA, flatD, flatG, flatB, flatHiE] = [...allUserStrings];

    notes.push(
      flatLoE[userFretNumbers[0]], 
      flatA[userFretNumbers[1]], 
      flatD[userFretNumbers[2]], 
      flatG[userFretNumbers[3]], 
      flatB[userFretNumbers[4]], 
      flatHiE[userFretNumbers[5]]
    );
  }
}