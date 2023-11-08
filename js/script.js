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

/** @type {HTMLElement} */
const notesFormElement = document.getElementById("notes-form");
/** @type {HTMLElement} */
const notesFormSubmitBtn = notesFormElement.querySelector("#form-submit");
/** @type {HTMLElement} */
const pageResetBtn = notesFormElement.querySelector("#page-reset");
/** @type {HTMLElement} */
const sharpRadioBtn = document.querySelector("#sharp-key");
/** @type {HTMLElement} */
const flatRadioBtn = document.querySelector("#flat-key");
/** @type {HTMLElement} */
const altTuningsFormElement = document.getElementById("tunings-form");

/** @type {string[]} */
const userChordNotes = [];

// MAIN FUNCTION - Get objects from chord-intervals.js, output results
function getChordName() {

  // 1. Build six 17-note strings based on the users' tuning
  buildUserStrings();

  // 2. Get user fret #'s and convert fret #'s into note values
  getUserNotes(userChordNotes);
  
  // 3. Remove duplicate user note
  /** @type {string[]} */
  let uniqueUserNotes = [];
  uniqueUserNotes = userChordNotes.filter(tone => (!uniqueUserNotes.includes(tone) && tone !== undefined ? uniqueUserNotes.push(tone) : null));

  let uniqueUserNotesAsRoot = [];
  let uniqueNoteIntervals = [];

  for (let i = 0; i < uniqueUserNotes.length; i++) {

    /**
     * Push onto uniqueUserNotesAsRoot[] a 12-note string  
     * array for each unique user note. 
     * 
     * The arrays with each chord note as the root are used 
     * to determine the intervals.
     */
    if (sharpRadioBtn.checked) {
      /** @type {number} */
      const position = SHARPS.indexOf(uniqueUserNotes[i]);

      uniqueUserNotesAsRoot = SHARPS.slice(position, position + 12);
    } else if (flatRadioBtn.checked) {
      /** @type {number} */
      const position = FLATS.indexOf(uniqueUserNotes[i]);

      uniqueUserNotesAsRoot = FLATS.slice(position, position + 12);
    }

    /**
     * Convert unique user notes to intervals.
     * 
     * Using uniqueUserNotesAsRoot, push the intervals for each 
     * unique note onto uniqueNoteIntervals[].
     */
    uniqueNoteIntervals = []; 
    uniqueUserNotes.forEach(note => uniqueNoteIntervals.push(uniqueUserNotesAsRoot.indexOf(note)));
    
    /**
     * @description - Create an object: key = note interval, value = note
     * The object 'obj' is in the proper format to find a matching chord
     * in chord-intervals.js based on the intervals.
     * 
     * @type {object}
     */
    let obj = {};
    uniqueNoteIntervals.forEach((key, i) => {
      obj[key] = uniqueUserNotes[i];
    });
    // console.log(obj);

    // 7. Join user notes as entered:
    /** @type {string[]} */
    const userNotes = uniqueUserNotes.join("-");

    // 8. Handle edge cases/exceptions: enharmonic equivalents
    enharmonics(obj, uniqueUserNotesAsRoot, uniqueNoteIntervals);

    /**
     * Check for a matching chord in chord-intervals.js using
     * chordsFound from checkIndices.js then perform all other checks
     * and setup before outputting results to the DOM
     */
    if (chordsFound.length > 0) {

      // Put the chord notes in "proper" order
      /** @type {string[]} */
      const chordNotesArray = [];
      /** @type {string} */
      let chordNotes = "";
      
      chordsFound[0].steps.map(note => {
        chordNotesArray.push(obj[note]);
      });
      chordNotes = chordNotesArray.join("-");

      // Create slash chords for "short" names if applicable
      /** @type {string} */
      let slashChordName = '';

      if (uniqueNoteIntervals[0] !== 0 && chordsFound[0].Chord.length < 7) {
        slashChordName = uniqueUserNotes[i] + chordsFound[0].Chord + "/" + obj[uniqueNoteIntervals[0]];
      } else {
        slashChordName = uniqueUserNotes[i] + chordsFound[0].Chord;
      }

      // 12. Basic chord name if a slash chord for the scale degrees card
      /** @type {string} */
      const chordName = uniqueUserNotes[i] + chordsFound[0].Chord;

      // 13. Get "equal" chords if chord(s) found have that property
      /** @type {string[]} */
      let equalChordName = [];
      if (chordsFound[0].hasOwnProperty("Equal Chords")) {
        chordsFound[0]["Equal Chords"].map(equal => {
          equalChordName.push(uniqueUserNotesAsRoot[equal["key"]] + equal.name);
        });
      } else {
        equalChordName.push(["Unique"]);
      }
      /** @type {string} */
      const equalChords = equalChordName.join(", ");

      // Get scale degrees for the chord
      /** @type {string[]} */
      let chordScaleDegrees = [];
      chordsFound[0]["scales"].map(degree => {
        chordScaleDegrees.push(`<li>${Object.keys(degree)}: ${Object.values(degree)}</li>`);
      });

      // Get chord tendency and chord intervals
      /** @type {string} */
      const chordIntervals = chordsFound[0].Intervals.join("-");
      /** @type {string} */
      const chordTendency = chordsFound[0].Tendency.join(", ").split(" ").join(" ");
      
      // Write ALL of the above to the DOM
      /** @type {string[]} */
      const elementValues = [slashChordName, userNotes, chordNotes, chordName, chordIntervals, chordTendency, equalChords]
      outputToDom(elementValues);

      // 17. Scale degrees card.
      document.getElementById("scale-degrees").innerHTML = chordScaleDegrees.join("");
      
      break;

    } else {
      // Error msg for less than 3 unique notes
      if (uniqueUserNotes.length < 3) {
        /** @type {string} */
        const userNotes = uniqueUserNotes.join("-");
        notEnoughNotesError(userNotes);
      }
    }
  }

  // Error msg if no matching chord in chord-intervals.js
  if (uniqueNoteIntervals.length >= 3 && chordsFound.length === 0) {
    noMatchError(uniqueUserNotes);
  }
}

/* EVENT LISTENERS */
/**
 * @description - TUNING: Check local storage and load tuning values
 * 
 * @param {EventType}
 * @param {Function}
 * @type {AddEventListener}
 */
document.addEventListener('DOMContentLoaded', loadLocalTuning);

/**
 * @description - TUNING: Set innerText above number inputs for users' tuning
 * 
 * @param {EventType}
 * @param {Function}
 * @type {AddEventListener}
 */
altTuningsFormElement.addEventListener("submit", setTuning);

/**
 * @description - MAIN FORM: Notes form
 * 
 * @param {EventType}
 * @param {Function}
 * @type {AddEventListener}
 */
notesFormElement.addEventListener("submit", function (e) {
  e.preventDefault();
  getChordName();

  document.querySelector('#notes-heading').scrollIntoView({
    behavior: 'smooth'
  });
});

/**
 * @description - SUBMIT BUTTON: Submit button to scroll to results
 * 
 * @param {EventType}
 * @param {Function}
 * @type {AddEventListener}
 */
notesFormSubmitBtn.addEventListener('click', function () {
  pageResetBtn.scrollIntoView({
    behavior: 'smooth'
  });
})

// 5. 
/**
 * @description - RESET BUTTON
 * 
 * @param {EventType}
 * @param {Function}
 * @type {AddEventListener}
 */
pageResetBtn.addEventListener("click", pageReset);

/*
 *    DONE:
 * ✅ Add tuning to localStorage
 * ✅ Add sharp/flat key to localStorage
 * ✅ Set tuning and sharp/flat key from localStorage
 * 
 *    TO-DO:
 * 📌 1. chordsFound (either 0 or 1) should be singular: chordFound
 * 📌 2. Finish updating chord-intervals.json
 * 📌 3. pageReset.js -> .reload() is wrong - REDO 
 *       (having a major problem with this)
 */