// CONSTANTS
const TUNINGS = ["E-A-D-G-B-E", "D-A-D-G-B-E", "D-A-D-G-B-D", "C-G-D-F-A-D", "E-A-C♯-E-A-E", "C-G-C-G-C-E", "D-A-D-F♯-A-D", "D-A-D-G-A-D", "D-A-D-F-A-D", "E-B-E-G♯-B-E", "F-A-C-F-C-F", "D-G-D-G-B-D", "D-G-D-G-B♭-D"];
const SHARPS = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];
const FLATS = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];

// Tunings form & altered tunings select list (Why do I have 2 forms?)
const tuningsForm = document.getElementById("tunings-form");
const altTunings = tuningsForm.querySelector("#alt-tunings");

// The Notes form, strings, Submit & Reset button and Radio buttons
const notesForm = document.getElementById("notes-form");
const allSstrings = notesForm.querySelectorAll(".string");
const userNums = notesForm.querySelectorAll('.note');
const userSubmit = notesForm.querySelector("#user-chord");
const userReset = notesForm.querySelector("#user-reset");
const sharpKey = notesForm.querySelector("#sharp-key");
const flatKey = notesForm.querySelector("#flat-key");

// Get the elements that show the notes for each tuning
// Would using querySelectorAll be better? Can use allStrings above
const sixth = document.getElementById("sixth");
const fifth = document.getElementById("fifth");
const fourth = document.getElementById("fourth");
const third = document.getElementById("third");
const second = document.getElementById("second");
const first = document.getElementById("first");

// Main variables
const newStrArr = [];
const userFrets = [];
const chordTones = [];
const newStrings = [];

// Tunings form event listener to store selected tuning in local storage
function setTuning(e) {
  e.preventDefault();

  const value = altTunings.options[altTunings.selectedIndex].value;
  const openStrings = TUNINGS[value].split("-");

  // Is innerText here AND in localStrings repetitive?
  sixth.innerText = openStrings[0];
  fifth.innerText = openStrings[1];
  fourth.innerText = openStrings[2];
  third.innerText = openStrings[3];
  second.innerText = openStrings[4];
  first.innerText = openStrings[5];

  const localStrings = [sixth.innerText, fifth.innerText, fourth.innerText, third.innerText, second.innerText, first.innerText];

  localStorage.setItem("userStrings", localStrings);

  userNums[0].focus();
  resetPage();

}
tuningsForm.addEventListener("submit", setTuning);

// Notes form event listener
notesForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getNotes();

  // Once I figure out the CORS problem, I need to create getJson() which uses chord-intervals.json rather than chord-intervals.js
});

// Submit button event listener to scroll to rresults
userSubmit.addEventListener('click', function() {
  userReset.scrollIntoView({ 
  behavior: 'smooth' 
});
})

// Reset button event listener
userReset.addEventListener("click", resetPage);

// Do I need to change to window.location.replace('https://everyguitarchord.com/what-chord-is-this.html');
function resetPage() {

  // Firefox not clearing input fields
  userNums.forEach(item => {
    item.value = '';
  })
  location.reload();
  
  document.querySelector('h1').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// 1. sharp and flat string versions
function openStr(arr) {
  // This is grabbing the current tuning values. I need to just grab the values in loacalStorage and then I can get rid of strContent and arr.forEach
  let strContent = [];

  arr.forEach(string => {
    strContent.push(string.innerText);
  });

  strContent.map(string => {
    if (sharpKey.checked) {
      const position = SHARPS.indexOf(string);
      newStrArr[string] = SHARPS.slice(position, position + 17);
      newStrings.push(newStrArr[string]);
    } else if (flatKey.checked) {
      const position = FLATS.indexOf(string);
      newStrArr[string] = FLATS.slice(position, position + 17);
      newStrings.push(newStrArr[string]);
    }
  });

}

// 7. Get objects from chord-intervals.js
const matches = [];
function checkIndices(arr) {
  // Add getJson() as first code block in here when CORS issue solved?
  chordIntervals.map(chord => {
    const equalArray = arr.every(item => chord.steps.includes(item));

    if (arr.length === chord.steps.length && equalArray) {
      matches.push(chord);
    }
  });
  return matches;
}

function getNotes() {

  openStr(allSstrings);

  // 2. Get user fret #'s
  userNums.forEach(item => {
    userFrets.push(item.value);
  })

  // 3. Create 16 fret sharp & flat chromatic scales using userFrets
  if (sharpKey.checked) {
    const [sharpLoE, sharpA, sharpD, sharpG, sharpB, sharpHiE] = [...newStrings];

    chordTones.push(sharpLoE[userFrets[0]], sharpA[userFrets[1]], sharpD[userFrets[2]], sharpG[userFrets[3]], sharpB[userFrets[4]], sharpHiE[userFrets[5]]);
  } else if (flatKey.checked) {
    const [flatLoE, flatA, flatD, flatG, flatB, flatHiE] = [...newStrings];

    chordTones.push(flatLoE[userFrets[0]], flatA[userFrets[1]], flatD[userFrets[2]], flatG[userFrets[3]], flatB[userFrets[4]], flatHiE[userFrets[5]]);
  }

  // 4. Remove duplicate note names
  let uniqueNotes = [];
  uniqueNotes = chordTones.filter(tone => (!uniqueNotes.includes(tone) && tone !== undefined ? uniqueNotes.push(tone) : null)); 

  let noteAsRoot = [];
  let noteSteps = [];

  /* The rest of the logic is in this for loop */
  for (let i = 0; i < uniqueNotes.length; i++) {
    // 5. Sharp and flat 12-note arrays
    if (sharpKey.checked) {
      const position = SHARPS.indexOf(uniqueNotes[i]);
      noteAsRoot = SHARPS.slice(position, position + 12);
    } else if (flatKey.checked) {
      const position = FLATS.indexOf(uniqueNotes[i]);
      noteAsRoot = FLATS.slice(position, position + 12);
    }

    // 6a. Convert notes to intervals
    noteSteps = []; // without this 2-note chords print out???
    uniqueNotes.forEach(note => noteSteps.push(noteAsRoot.indexOf(note)));

    // 6b. Create an object using the indices in noteSteps and the notes in uniqueNotes (used to attach the key to the chord name and equal chords)
    let obj = {};
    noteSteps.forEach((key, i) => {
      obj[key] = uniqueNotes[i];
    });
    console.log(obj);

    // 6c. Join user notes as entered:
    const user_notes = uniqueNotes.join("-");

    // 7. Get chord objects that matche noteSteps
    checkIndices(noteSteps);

    // 8. If block to check for a result and then perform all other steps 
    if (matches.length > 0) {
      const flat = "♭";
      const sharp = "♯";

      // 9. if blocks to handle special cases such as enharmonic equivalents
      // Fix flat 9's if the ♭9 is a sharp
      if (obj.hasOwnProperty(1) && obj[1].length === 2) {
        noteAsRoot.splice(1, 1, noteAsRoot[2] + flat);
        obj[1] = noteAsRoot[1];
      }

      // Fix sharp 9's / flat 3's
      if (obj.hasOwnProperty(3) && !obj.hasOwnProperty(4) && obj[3].length === 2) {
        noteAsRoot.splice(3, 1, noteAsRoot[4] + flat);
        obj[3] = noteAsRoot[3];
      }
      if (obj.hasOwnProperty(3) && obj.hasOwnProperty(4) && obj[3].length === 2 && flatKey.checked) {
        noteAsRoot.splice(3, 1, noteAsRoot[2] + sharp);
        obj[3] = noteAsRoot[3];
      }

      // Fix sharp 11's / flat 5's
      if (obj.hasOwnProperty(6) && !obj.hasOwnProperty(7) && obj[6].length === 2) {
        noteAsRoot.splice(6, 1, noteAsRoot[7] + flat);
        obj[6] = noteAsRoot[6];
      }

      // Fix sharp 5's / flat 13's
      if (obj.hasOwnProperty(7) && obj.hasOwnProperty(8) && obj[8].length === 2) {
        noteAsRoot.splice(8, 1, noteAsRoot[9] + flat);
        obj[8] = noteAsRoot[8];

      }
      if (!obj.hasOwnProperty(7) && obj.hasOwnProperty(8) && obj[8].length === 2 && flatKey.checked) {
        noteAsRoot.splice(8, 1, noteAsRoot[7] + sharp);
        obj[8] = noteAsRoot[8];
      }
      
      // Fix flat 7's for the keys F & C if sharpKey.checked
      if (obj.hasOwnProperty(10) && obj[10].length === 2 && noteAsRoot[0].length === 1) {
        noteAsRoot.splice(10, 1, noteAsRoot[11] + flat);
        obj[10] = noteAsRoot[10];
      }      

      // 10. Put the chord notes in "proper" order
      const note_chords = [];
      let chord_notes = "";

      matches[0].steps.map(note => {
        note_chords.push(obj[note]);
      });
      
      chord_notes = note_chords.join("-");

      // 11. Slash chords for "short" names
      let chord_name = '';

      if (noteSteps[0] !== 0 && matches[0].Chord.length < 7) {
        chord_name = uniqueNotes[i] + matches[0].Chord + "/" + obj[noteSteps[0]];
      } else {
        chord_name = uniqueNotes[i] + matches[0].Chord;
      }

      // Basic chord name if a slash chord for the scale degrees card
      const chord_name2 = uniqueNotes[i] + matches[0].Chord;

      // 12. "equal" chords
      let eqCh = [];
      if (matches[0].hasOwnProperty("Equal Chords")) {
        matches[0]["Equal Chords"].map(equal => {
          eqCh.push(noteAsRoot[equal["key"]] + equal.name);
        });
      } else {
        eqCh.push(["Unique"]);
      }

      // 13. Get scale degrees for the chord
      let scaleDeg = [];
      matches[0]["scales"].map(degree => {
        scaleDeg.push(`<li>${Object.keys(degree)}: ${Object.values(degree)}</li>`);
      });

      // 14. Get chord tendency and chord intervals
      const intervals = matches[0].Intervals.join("-");
      const tendency = matches[0].Tendency.join(", ").split(" ").join(" ");
      const equalChords = eqCh.join(", ");

      /* 15. Write ALL of the above to the DOM */
      // Arrays for variable names, the HTML Ids, and the values
      const varNames = ['chordName', 'userNotes', 'chordNotes', 'chordName2', 'chordIntervals', 'chordTendency', 'altNames'];
      const varIds = ['chord-name', 'user-notes', 'chord-notes', 'chord-name2', 'intervals', 'tendency', 'equal-chords'];
      const varValues = [chord_name, user_notes, chord_notes, chord_name2, intervals, tendency, equalChords]

      // Add all but scale degrees to the DOM. Does this make sense?
      function outputToDom() {
        varNames.forEach((name, i) => {
          name = document.getElementById(varIds[i]);
          const text = document.createTextNode(varValues[i]);
          name.append(text);
        });
      }
      outputToDom()

      // Scale degrees card. Can I do this differently? See step 13.
      document.getElementById("scale-degrees").innerHTML = scaleDeg.join("");

      break;

      // Error msg for less than 3 unique notes
    } else if (noteSteps.length < 3) {
      const user_notes = uniqueNotes.join("-");
      const errorOutput = document.getElementById("error-output");
      const errorMsg = "That is not a chord. Enter at least 3 unique chord tones.";
      errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
      document.getElementById("user-notes").innerHTML = user_notes;
    }
  }

  // Error msg if 3 or more unique notes do not equal one of the chords in chord-intervals.js
  if (noteSteps.length >= 3 && matches.length === 0) {
    const errorOutput = document.getElementById("error-output");
    const errorMsg = "That is not a valid chord or it is not in our database. Check the tuning or sharp/flat key buttons.";
    errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
    document.getElementById("user-notes").innerHTML = uniqueNotes.join("-");
  }
}

// Check local storage and load tuning values
function loadLocalTuning() {
  if (localStorage.getItem('userStrings') === null) {
    const localStrings = [sixth.innerText, fifth.innerText, fourth.innerText, third.innerText, second.innerText, first.innerText];
    localStorage.setItem("userStrings", localStrings);
    
    userNums[0].focus();
  } else {
    const selectUserStrings = localStorage.getItem("userStrings");

    sixth.innerText = selectUserStrings.split(",")[0];
    fifth.innerText = selectUserStrings.split(",")[1];
    fourth.innerText = selectUserStrings.split(",")[2];
    third.innerText = selectUserStrings.split(",")[3];
    second.innerText = selectUserStrings.split(",")[4];
    first.innerText = selectUserStrings.split(",")[5];

    userNums[0].focus();
  }
};
document.addEventListener('DOMContentLoaded', loadLocalTuning);

/* 
  notes & code for setting and keeping the sharp/flat radio btns selection here
*/