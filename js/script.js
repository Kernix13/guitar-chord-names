"use strict";
// User entered fret numbers by string
const firstNote = document.getElementById('note1');
const secondNote = document.getElementById('note2');
const thirdNote = document.getElementById('note3');
const fourthNote = document.getElementById('note4');
const fifthNote = document.getElementById('note5');
const sixthNote = document.getElementById('note6');

// All number input fields
const fretInputs = document.querySelectorAll('.note');
// Submit and Clear buttons
const userChord = document.getElementById('user-chord'); // not being used
const userClear = document.getElementById('user-clear');
userClear.addEventListener("click", function (e) {
  // location.reload();
  // window.location.reload();
  // window.location.reload(true);
  window.location.replace('http://127.0.0.1:5500/guitar-chord-name.html');
  // location.assign('http://127.0.0.1:5500/guitar-chord-name.html');

  e.preventDefault();
})
// THE FORM
const notesForm = document.getElementById('notes-form');

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

// The chromatic scale using sharps then flats (just using sharps right now)
const chromaticSharps = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];
const chromaticFlats = ["A", "B♭", "B", "C", "D♭", "D", "D♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G"];
const chromaticMixed = ["A", ["A♯", "B♭"], "B", "C", ["C♯", "D♭"], "D", ["D♯", "E♭"], "E", "F", ["F♯", "G♭"], "G", ["G♯", "A♭"], "A", ["A♯", "B♭"], "B", "C", ["C♯", "D♭"], "D", ["D♯", "E♭"], "E", "F", ["F♯", "G♭"], "G"];

let userFrets = [];
let chordTones = [];

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
6. Find JSON 'steps' array(s) that match #5 (need JSON files here)
7. Output Chord name for matching data.steps
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

  // 4. Create a 12-note array for each chord tone
  let noteSteps = [];
  let result;
  let matches = []
  for (let i = 0; i < uniqueNotes.length; i++) {
    matches = []
    let position = chromaticSharps.indexOf(uniqueNotes[i]);
    let noteAsRoot = chromaticSharps.slice(position, position + 12);

    // 5. Determine intervals for each note compared to the other notes (DONE)
    noteSteps = [];
    uniqueNotes.forEach(note => noteSteps.push(noteAsRoot.indexOf(note)));

    let noteStepsSort = [...noteSteps].sort();
    let obj = {}
    noteSteps.forEach((key, i) => {
      obj[key] = uniqueNotes[i];
    })
    console.log(obj)
    // console.log(obj[result[0]["Equal Chords"][0]["key"]])
    // console.log(uniqueNotes[i]);
    // // console.log(noteSteps, noteStepsSort);
    // console.log(noteSteps);
    // console.log(noteAsRoot);    

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
    console.log(matches)

    if (result.length > 0) {
      let chord_name, chord_name2, chord_notes, intervals, tendency, equalChords, scaleDegrees = "";

      // console.log(
      //   uniqueNotes[i] + result[0].Chord + " | " +
      //   result[0].Intervals + " | " +
      //   result[0].Tendency + " | " +
      //   obj[result[0]["Equal Chords"][0]["key"]] + result[0]["Equal Chords"][0].name + ", " +
      //   obj[result[0]["Equal Chords"][1]["key"]] + result[0]["Equal Chords"][1].name + ", " +
      //   obj[result[0]["Equal Chords"][2]["key"]] + result[0]["Equal Chords"][2].name + " | Scale degrees: " +
      //   Object.keys(result[0].scales[0]) + ": " + Object.values(result[0].scales[0]) + ", " +
      //   Object.keys(result[0].scales[1]) + ": " + Object.values(result[0].scales[1]) + ", " +
      //   Object.keys(result[0].scales[2]) + ": " + Object.values(result[0].scales[2]) + ", " +
      //   Object.keys(result[0].scales[3]) + ": " + Object.values(result[0].scales[3]) + ", " +
      //   Object.keys(result[0].scales[4]) + ": " + Object.values(result[0].scales[4]) + ", " +
      //   Object.keys(result[0].scales[5]) + ": " + Object.values(result[0].scales[5]))

      // gets the key of the equal chord to get the note value in obj 
      // obj[result[0]["Equal Chords"][0]["key"]]

      console.log(Object.values(result[0].scales))
      let test = Object.values(result[0].scales);
      // Uncaught TypeError: Cannot read properties of undefined (reading '#<Object>')

      // 9. Output name(s) of "equal" chords
      let eqCh = []
      if (result[0].hasOwnProperty("Equal Chords")) {
        for (let i = 0; i < result[0]["Equal Chords"].length; i++) {
          eqCh.push(obj[result[0]["Equal Chords"][i]["key"]] + result[0]["Equal Chords"][i].name)
        }
      } else {
        eqCh.push(["Unique", " no matching chord."])
      }

      // SOMETHING IS WRONG, TRY FMAJ7#11: 1-3-3-2-0-0
      let scaleDeg = []
      console.log("length: " + result[0].scales.length)
      let degrees = Object.values(result[0].scales[i])
      for (let i = 0; i < result[0].scales.length; i++) {
        scaleDeg.push(`<li>` + Object.keys(result[0].scales[i]) + ": " + degrees + `</li>`)
      }
      console.log("scaleDeg: " + scaleDeg)
      // 7. Output Chord name for matching noteSteps array
      chord_name = uniqueNotes[i] + result[0].Chord
      chord_name2 = uniqueNotes[i] + result[0].Chord

      // 8. Output the chord notes (WRONG), tendency, and chord intervals in "proper" order
      chord_notes = uniqueNotes.join(", ")
      // chord_notes = obj[result[0].steps]
      intervals = result[0].Intervals.join("-")
      tendency = result[0].Tendency.join(", ").split(" ").join(" ")
      equalChords = eqCh.join(", ")

      // 10. Output scale(s) & scale degrees that build the chord
      scaleDegrees = scaleDeg

      document.getElementById('chord-name').textContent = chord_name;
      document.getElementById('chord-name2').textContent = chord_name2;
      document.getElementById('chord-notes').textContent = chord_notes;
      document.getElementById('intervals').textContent = intervals;
      document.getElementById('tendency').textContent = tendency;
      document.getElementById('equal-chords').textContent = equalChords;
      document.getElementById('scale-degrees').innerHTML = scaleDegrees;

      console.log(Object.values(result[0].scales[0]))
      // console.log(result)

      break;
    }


    // 11. Clear the page on next Submit

  }
  // console.log(uniqueNotes);
}