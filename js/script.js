import setTuning from "./modules/setTuning.js";
import pageReset from "./modules/pageReset.js";
import { buildUserStrings } from "./modules/buildUserStrings.js";
import { chordsFound } from "./modules/checkIndices.js";
import enharmonics from "./modules/enharmonics.js";
import loadLocalTuning from "./modules/loadLocalTuning.js";
import { SHARPS, FLATS } from "./data/constants.js";
import getUserNotes from "./modules/getUserNotes.js";
import noMatchError from "./modules/noMatchError.js";
import notEnoughNotesError from "./modules/notEnoughNotesError.js";
import outputToDom from "./modules/outputToDom.js";

const notesFormElement = document.getElementById("notes-form");
const notesFormSubmitBtn = notesFormElement.querySelector("#form-submit");
const pageResetBtn = notesFormElement.querySelector("#page-reset");
const sharpRadioBtn = notesFormElement.querySelector("#sharp-key");
const flatRadioBtn = notesFormElement.querySelector("#flat-key");
const altTuningsFormElement = document.getElementById("tunings-form");

const userChordNotes = [];

// MAIN FUNCTION - Get objects from chord-intervals.js, output results
function getChordName() {

  // 1. Build six 17-note strings based on the users' tuning
  buildUserStrings();

  // 2. Get user fret #'s and convert fret #'s into note values
  getUserNotes(userChordNotes);

  // 3. Remove duplicate user note
  let uniqueUserNotes = [];
  uniqueUserNotes = userChordNotes.filter(tone => (!uniqueUserNotes.includes(tone) && tone !== undefined ? uniqueUserNotes.push(tone) : null));

  let uniqueUserNotesAsRoot = [];
  let uniqueNoteIntervals = [];

  for (let i = 0; i < uniqueUserNotes.length; i++) {

    // 4. Build 12-note string arrays for each unique note
    if (sharpRadioBtn.checked) {
      const position = SHARPS.indexOf(uniqueUserNotes[i]);
      uniqueUserNotesAsRoot = SHARPS.slice(position, position + 12);
      console.log(uniqueUserNotesAsRoot)
    } else if (flatRadioBtn.checked) {
      const position = FLATS.indexOf(uniqueUserNotes[i]);
      uniqueUserNotesAsRoot = FLATS.slice(position, position + 12);
    }

    // 5. Convert unique user notes to intervals
    uniqueNoteIntervals = []; 
    uniqueUserNotes.forEach(note => uniqueNoteIntervals.push(uniqueUserNotesAsRoot.indexOf(note)));
    
    // 6. Create an object: key = note interval, value = note
    let obj = {};
    uniqueNoteIntervals.forEach((key, i) => {
      obj[key] = uniqueUserNotes[i];
    });
    // console.log(obj);

    // 7. Join user notes as entered:
    const userNotes = uniqueUserNotes.join("-");

    // 8. Handle edge cases/exceptions: enharmonic equivalents
    enharmonics(obj, uniqueUserNotesAsRoot, uniqueNoteIntervals);

    // 9. Check for a matching chord and then perform all other steps 
    if (chordsFound.length > 0) {

      // 10. Put the chord notes in "proper" order
      const chordNotesArray = [];
      let chordNotes = "";
      
      chordsFound[0].steps.map(note => {
        chordNotesArray.push(obj[note]);
      });
      chordNotes = chordNotesArray.join("-");

      // 11. Create slash chords for "short" names if applicable
      let slashChordName = '';

      if (uniqueNoteIntervals[0] !== 0 && chordsFound[0].Chord.length < 7) {
        slashChordName = uniqueUserNotes[i] + chordsFound[0].Chord + "/" + obj[uniqueNoteIntervals[0]];
      } else {
        slashChordName = uniqueUserNotes[i] + chordsFound[0].Chord;
      }

      // Basic chord name if a slash chord for the scale degrees card
      const chordName = uniqueUserNotes[i] + chordsFound[0].Chord;

      // 12. Get "equal" chords if chord(s) found have that property
      let equalChordName = [];
      if (chordsFound[0].hasOwnProperty("Equal Chords")) {
        chordsFound[0]["Equal Chords"].map(equal => {
          equalChordName.push(uniqueUserNotesAsRoot[equal["key"]] + equal.name);
        });
      } else {
        equalChordName.push(["Unique"]);
      }
      const equalChords = equalChordName.join(", ");

      // 13. Get scale degrees for the chord
      let chordScaleDegrees = [];
      chordsFound[0]["scales"].map(degree => {
        chordScaleDegrees.push(`<li>${Object.keys(degree)}: ${Object.values(degree)}</li>`);
      });

      // 14. Get chord tendency and chord intervals
      const chordIntervals = chordsFound[0].Intervals.join("-");
      const chordTendency = chordsFound[0].Tendency.join(", ").split(" ").join(" ");
      
      /* 15. Write ALL of the above to the DOM */
      const elementValues = [slashChordName, userNotes, chordNotes, chordName, chordIntervals, chordTendency, equalChords]
      outputToDom(elementValues);

      // Scale degrees card.
      document.getElementById("scale-degrees").innerHTML = chordScaleDegrees.join("");
      
      break;

    } else {
      // Error msg for less than 3 unique notes
      notEnoughNotesError(uniqueNoteIntervals, uniqueUserNotes);
    }
  }

  // Error msg if no matching chord in chord-intervals.js
  noMatchError(uniqueNoteIntervals, chordsFound, uniqueUserNotes);
}

/* EVENT LISTENERS */
// 1. TUNING: Check local storage and load tuning values
document.addEventListener('DOMContentLoaded', loadLocalTuning);

// 2. TUNING: Set innerText above number inputs for users' tuning
altTuningsFormElement.addEventListener("submit", setTuning);

// 3. MAIN FORM: Notes form
notesFormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  getChordName();
});

// 4. SUBMIT BUTTON: Submit button to scroll to results
notesFormSubmitBtn.addEventListener('click', function () {
  pageResetBtn.scrollIntoView({
    behavior: 'smooth'
  });
})

// 5. RESET BUTTON
pageResetBtn.addEventListener("click", pageReset);

/**
 *    DONE:
 * ✅ setTuning.js
 * ✅ buildUserStrings.js
 * ✅ enharmonics.js
 * ✅ getUserNotes.js
 * ✅ loadLocalTuning.js
 * ✅ noMatchError.js
 * ✅ notEnoughNotesError.js
 * ✅ outputToDom.js
 * ✅ checkIndices.js
 * 
 *    TO-DO:
 * 📌 1. pageReset.js DONE but .reload() is wrong - REDO
 * 📌 2. Need to add radio buttons into localStorage
 * 📌 3. Need to have radio button & tuning selected after page reset
 * 📌 4. Why do I have setTuning & loadLocalTuning?
 * 
 */