import { SHARPS, FLATS } from "../data/constants.js";

const uniqueUserStrings = [];
export const allUserStrings = [];

export function buildUserStrings() {

  const sharpRadioBtn = document.querySelector("#sharp-key");
  const flatRadioBtn = document.querySelector("#flat-key");

  const userTuning = localStorage.getItem("userStrings");
  const userTuningNotes = userTuning.split(',');
  
  userTuningNotes.forEach(string => {
    if (sharpRadioBtn.checked) {
      const position = SHARPS.indexOf(string);

      uniqueUserStrings[string] = SHARPS.slice(position, position + 17);
      allUserStrings.push(uniqueUserStrings[string]);
    } else if (flatRadioBtn.checked) {
      
      const position = FLATS.indexOf(string);
      uniqueUserStrings[string] = FLATS.slice(position, position + 17);
      allUserStrings.push(uniqueUserStrings[string]);
    }
  });

}