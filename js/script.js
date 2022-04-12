"use strict";
// User entered fret numbers by string
const firstNote = document.getElementById('note1');
const secondNote = document.getElementById('note2');
const thirdNote = document.getElementById('note3');
const fourthNote = document.getElementById('note4');
const fifthNote = document.getElementById('note5');
const sixthNote = document.getElementById('note6');

// THE FORM
const notesForm = document.getElementById('notes-form');

// All number input fields
const fretInputs = document.querySelectorAll('.note');

// Submit button
const userChord = document.getElementById('user-chord'); // not being used

// Reset button & event listener
const userReset = document.getElementById('user-reset');


// The chromatic scale by string, 15 frets (Sharps only)
const sharpLoE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];
const sharpA = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];
const sharpD = ["D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F"];
const sharpG = ["G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯"];
const sharpB = ["B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D"];
const sharpHiE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];

// The chromatic scale by string, 15 frets (Flats only)
const flatLoE = ["E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G"];
const flatA = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "G♯", "A", "B♭", "B", "C"];
const flatD = ["D", "E♭", "E", "F", "G♭", "G", "G♯", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F"];
const flatG = ["G", "G♯", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "G♯", "A", "B♭"];
const flatB = ["B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "G♯", "A", "B♭", "B", "C", "D♭", "D"];
const flatHiE = ["E", "F", "G♭", "G", "G♯", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G"];

// The chromatic scale using sharps, flats, and mixed
const chromaticSharps = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];
const chromaticFlats = ["A", "B♭", "B", "C", "D♭", "D", "D♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G"];
const chromaticMixed = ["A", ["A♯", "B♭"], "B", "C", ["C♯", "D♭"], "D", ["D♯", "E♭"], "E", "F", ["F♯", "G♭"], "G", ["G♯", "A♭"], "A", ["A♯", "B♭"], "B", "C", ["C♯", "D♭"], "D", ["D♯", "E♭"], "E", "F", ["F♯", "G♭"], "G"];

// Enharmonic equivalents
// const enharmonics = { 3: ["♯", "♭"], 6: ["♯", "♭"], 8: ["♯", "♭"]}
// const enharmonics = ["♯", "♭"]
const enharmonics = [["A♯", "B♭"], ["C♯", "D♭"], ["D♯", "E♭"], ["F♯", "G♭"], ["G♯", "A♭"]]

const flat9 = ["A", "D", "G", "C", "F"]
const flat3 = ["G", "C", "F"]
const flat5 = ["E", "A", "D", "G", "C"]
const flat13 = ["D", "G", "C", "F", "B♭"]

let userFrets = [];
let chordTones = [];

// Reset button event listener
userReset.addEventListener("click", function (e) {
  // location.reload();
  // window.location.reload();
  // window.location.reload(true);
  window.location.replace('http://127.0.0.1:5500/guitar-chord-name.html');
  // location.assign('http://127.0.0.1:5500/guitar-chord-name.html');

  e.preventDefault();
})

// Form event listener
notesForm.addEventListener("submit", function (e) {
  getNotes();
  // getJson();
  // clearNotes();

  e.preventDefault();
});

/* 
getNotes: 
1. Get the fret #'s entered by the user (DONE)
2. Convert the fret #'s into chromatic notes (DONE)
3. In case of duplicate notes, get only unique notes (DONE)
4. Create a 12-note array for each chord tone (DONE)
5. Determine intervals/steps for each note compared to the other notes (DONE)

chordCalcs (doing all this in getNotes):
6. Find 'steps' array(s) that match #5 (DONE)
7. Output Chord name for matching chordIntervals.steps 
8. Output the chord notes and chord intervals in "proper" order
9. Output name(s) of "equal" chords, & Chord Substitutes (later) 
10. Output scale(s) & scale degrees that build the chord
11. Clear everything on next Submit (keyddown?) 
*/

function getNotes() {

  // 1. Get the fret #'s...
  let userFrets = [firstNote.value, secondNote.value, thirdNote.value, fourthNote.value, fifthNote.value, sixthNote.value];

  // 2. ...convert fret #'s into chromatic notes.
  chordTones.push(sharpLoE[userFrets[0]], sharpA[userFrets[1]], sharpD[userFrets[2]], sharpG[userFrets[3]], sharpB[userFrets[4]], sharpHiE[userFrets[5]]);

  // 3. In case of duplicate notes, get only unique notes
  let uniqueNotes = [];
  uniqueNotes = chordTones.filter(tone => !uniqueNotes.includes(tone) && tone !== undefined ? uniqueNotes.push(tone) : null);
  console.log("Unique Notes: " + uniqueNotes)

  // 4. Create a 12-note array for each chord tone
  const flatKeys = ["C", "F", "B♭", "E♭", "A♭", "D♭", "G♭"]
  let noteSteps = [];
  let result;
  let matches = []
  for (let i = 0; i < uniqueNotes.length; i++) {
    // matches = []

    let position = chromaticSharps.indexOf(uniqueNotes[i]);
    let noteAsRoot = chromaticSharps.slice(position, position + 12);

    // 5. Determine intervals for each note compared to the other notes (DONE)
    noteSteps = [];
    uniqueNotes.forEach(note => noteSteps.push(noteAsRoot.indexOf(note)));

    // Create an object using the intervals in noteSteps and the notes in uniqueNotes - used to attach the key to the chord name and equal chords
    let obj = {}
    noteSteps.forEach((key, i) => {
      obj[key] = uniqueNotes[i];
    })

    // 6. Get data from chord-intervals.js that matches #5
    function checkIndices() {
      for (let i = 0; i < chordIntervals.length; i++) {

        let equalArray = noteSteps.every(item => chordIntervals[i].steps.includes(item))

        if (noteSteps.length === chordIntervals[i].steps.length && equalArray) {
          matches.push(chordIntervals[i])
        }
      }
      return matches
    }
    result = checkIndices()

    if (result.length > 0) {
      let output, chord_name, chord_name2, chord_notes, intervals, tendency, equalChords, scaleDegrees = "";

      // gets the key of the equal chord to get the note value in obj
      // obj[result[0]["Equal Chords"][0]["key"]]

      let flat = "♭"
      let sharp = "♯"
      console.log(noteAsRoot)

      // Fix flat 9's
      if (obj.hasOwnProperty(1) && obj[1].length === 2) {
        noteAsRoot.splice(1, 1, noteAsRoot[2] + flat)
        obj[1] = noteAsRoot[1]
      }

      // Fix sharp 9's / flat 3's
      if (obj.hasOwnProperty(3) && !obj.hasOwnProperty(4) && obj[3].length === 2) {
        noteAsRoot.splice(3, 1, noteAsRoot[4] + flat)
        obj[3] = noteAsRoot[3]
      }

      // Fix sharp 11's / flat 5's
      if (obj.hasOwnProperty(6) && !obj.hasOwnProperty(7) && obj[6].length === 2) {
        noteAsRoot.splice(6, 1, noteAsRoot[7] + flat)
        obj[6] = noteAsRoot[6]
      }

      // Fix sharp 5's / flat 13's
      if (obj.hasOwnProperty(7) && obj.hasOwnProperty(8) && obj[8].length === 2) {
        noteAsRoot.splice(8, 1, noteAsRoot[9] + flat)
        obj[8] = noteAsRoot[8]
      }

      // Fix flat 7's

      console.log(obj)
      console.log(noteAsRoot)
      console.log(uniqueNotes[i])

      // Change chord notes
      // the chord notes
      let note_chords = []

      for (let i = 0; i < result[0].steps.length; i++) {
        note_chords.push(obj[result[0].steps[i]])
      }
      console.log(note_chords)

      // Fix b9, #9, #11/b5, and #5/b13
      let r = note_chords[0]


      if (flat9.includes(r) && noteSteps.includes("1")) {
        obj[noteSteps[1]] = noteAsRoot[2] + flat;
      }
      chord_notes = note_chords.join("-")

      // User notes 
      output = uniqueNotes.join("-")

      // 7. Output Chord name for matching noteSteps array
      if (noteSteps[0] !== 0) {
        chord_name = uniqueNotes[i] + result[0].Chord + "/" + obj[noteSteps[0]]
      } else {
        chord_name = uniqueNotes[i] + result[0].Chord
      }
      chord_name2 = uniqueNotes[i] + result[0].Chord





      // 9. Output name(s) of "equal" chords
      let eqCh = []
      if (result[0].hasOwnProperty("Equal Chords")) {
        for (let i = 0; i < result[0]["Equal Chords"].length; i++) {
          eqCh.push(obj[result[0]["Equal Chords"][i]["key"]] + result[0]["Equal Chords"][i].name)
        }
      } else {
        eqCh.push(["Unique", " no matching chord."])
      }

      // Get scale degrees for the chord
      let scaleDeg = []
      for (let i = 0; i < result[0]["scales"].length; i++) {
        scaleDeg.push(`<li>` + Object.keys(result[0].scales[i]) + ": " + Object.values(result[0].scales[i]) + `</li>`)
      }

      // 8. Output tendency and chord intervals in "proper" order
      intervals = result[0].Intervals.join("-")
      tendency = result[0].Tendency.join(", ").split(" ").join(" ")
      equalChords = eqCh.join(", ")



      // 10. Output scale(s) & scale degrees that build the chord
      scaleDegrees = scaleDeg.join("")

      // Write ALL of that to the DOM
      document.getElementById('output').innerHTML = output;
      document.getElementById('chord-name').textContent = chord_name;
      document.getElementById('chord-name2').textContent = chord_name2;
      document.getElementById('chord-notes').textContent = chord_notes;
      document.getElementById('intervals').textContent = intervals;
      document.getElementById('tendency').textContent = tendency;
      document.getElementById('equal-chords').textContent = equalChords;
      document.getElementById('scale-degrees').innerHTML = scaleDegrees;

      break;

      // Error messages for less than 3 notes
    } else if (noteSteps.length < 3) {
      let output = "";
      output = uniqueNotes.join("-")
      const errorOutput = document.getElementById('error-output')
      let errorMsg = "That is not a chord. Enter at least 3 unique chord tones."
      errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
      document.getElementById('output').innerHTML = output;
    }
  }
  // Output msg if 3 or more unique notes do not equal one of my chords
  if (noteSteps.length >= 3 && matches.length === 0) {
    const errorOutput = document.getElementById('error-output')
    let errorMsg = "That is not a valid chord or that chord is not in our database."
    errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
    document.getElementById('output').innerHTML = uniqueNotes.join("-");
  }
  console.log(result)
}