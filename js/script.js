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
// Reset button
const userReset = document.getElementById('user-reset');
// Sharp radio button
const rad1 = document.getElementById('sharps');
// Flat radio button
const rad2 = document.getElementById('flats');

// The chromatic scale by string, 16 frets (Sharps only)
const sharpLoE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯"];
const sharpA = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯"];
const sharpD = ["D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯"];
const sharpG = ["G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
const sharpB = ["B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯"];
const sharpHiE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯"];

// The chromatic scale by string, 16 frets (Flats only)
const flatLoE = ["E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭"];
const flatA = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭"];
const flatD = ["D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭"];
const flatG = ["G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];
const flatB = ["B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭"];
const flatHiE = ["E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭"];

// The chromatic scale using sharps, flats, and mixed
const chromaticSharps = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];
const chromaticFlats = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G"];
const chromaticMixed = ["A", ["A♯", "B♭"], "B", "C", ["C♯", "D♭"], "D", ["D♯", "E♭"], "E", "F", ["F♯", "G♭"], "G", ["G♯", "A♭"], "A", ["A♯", "B♭"], "B", "C", ["C♯", "D♭"], "D", ["D♯", "E♭"], "E", "F", ["F♯", "G♭"], "G"];

let userFrets = [];
let chordTones = [];

// Reset button event listener
userReset.addEventListener("click", function (e) {
  location.reload();
  // window.location.reload();
  // window.location.reload(true);
  // window.location.replace('http://127.0.0.1:5500/guitar-chord-name.html');
  // location.assign('http://127.0.0.1:5500/guitar-chord-name.html');

  e.preventDefault();
})

// Form event listener
notesForm.addEventListener("submit", function (e) {
  getNotes();
  // getJson()

  e.preventDefault();
});


function getNotes() {

  // See if user switched to Flat keys
  let rad1Val = "";
  let rad2Val = "";

  if (rad1.checked) {
    rad1Val = rad1.value;
  } else {
    rad2Val = rad2.value;
  }

  // Get the fret #'s entered by the user
  let userFrets = [firstNote.value, secondNote.value, thirdNote.value, fourthNote.value, fifthNote.value, sixthNote.value];

  // Convert fret #'s into shap or flat chromatic notes
  if (rad1Val === "sharp") {
    chordTones.push(sharpLoE[userFrets[0]], sharpA[userFrets[1]], sharpD[userFrets[2]], sharpG[userFrets[3]], sharpB[userFrets[4]], sharpHiE[userFrets[5]]);
    console.log("chordTones: " + chordTones)
  } else if (rad2Val === "flat") {
    chordTones.push(flatLoE[userFrets[0]], flatA[userFrets[1]], flatD[userFrets[2]], flatG[userFrets[3]], flatB[userFrets[4]], flatHiE[userFrets[5]]);
    console.log("chordTones: " + chordTones)
  }

  // In case of duplicate notes, get only unique notes
  let uniqueNotes = [];
  uniqueNotes = chordTones.filter(tone => !uniqueNotes.includes(tone) && tone !== undefined ? uniqueNotes.push(tone) : null);
  console.log("Unique Notes: " + uniqueNotes)

  let noteSteps = [];
  let noteAsRoot = [];
  let result;
  let matches = []

  // Create a 12-note array for each chord tone, convert to half-steps, find matching records in chord-intervals.js, then output everything to the DOM
  for (let i = 0; i < uniqueNotes.length; i++) {

    // Sharp vs flat 12-note array
    if (rad1Val === "sharp") {
      let position = chromaticSharps.indexOf(uniqueNotes[i]);
      noteAsRoot = chromaticSharps.slice(position, position + 12);
    } else if (rad2Val === "flat") {
      let position = chromaticFlats.indexOf(uniqueNotes[i]);
      noteAsRoot = chromaticFlats.slice(position, position + 12);
    }

    // Determine intervals for each note compared to the other notes
    noteSteps = [];
    uniqueNotes.forEach(note => noteSteps.push(noteAsRoot.indexOf(note)));

    // Create an object using the intervals in noteSteps and the notes in uniqueNotes: used to attach the key to the chord name and equal chords
    let obj = {}
    noteSteps.forEach((key, i) => {
      obj[key] = uniqueNotes[i];
    })

    // Get objects from chord-intervals.js that matches noteSteps
    function checkIndices() {

      // CONSIDER ADDING getJson() HERE

      for (let i = 0; i < chordIntervals.length; i++) {

        let equalArray = noteSteps.every(item => chordIntervals[i].steps.includes(item))

        if (noteSteps.length === chordIntervals[i].steps.length && equalArray) {
          matches.push(chordIntervals[i])
        }
      }
      return matches
    }
    result = checkIndices()


    // STOPPED HERE
    if (result.length > 0) {
      let output, chord_name, chord_name2, chord_notes, intervals, tendency, equalChords, scaleDegrees = "";

      console.log(noteAsRoot)

      // "FIX" enharmonic equivalents
      let flat = "♭"
      let sharp = "♯"

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
      if (obj.hasOwnProperty(3) && obj.hasOwnProperty(4) && obj[3].length === 2 && rad2Val === "flat") {
        noteAsRoot.splice(3, 1, noteAsRoot[2] + sharp)
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
      if (!obj.hasOwnProperty(7) && obj.hasOwnProperty(8) && obj[8].length === 2 && rad2Val === "flat") {
        noteAsRoot.splice(8, 1, noteAsRoot[7] + sharp)
        obj[8] = noteAsRoot[8]
      }

      // Fix flat 7's for F & C
      if (obj.hasOwnProperty(10) && obj[10].length === 2 && noteAsRoot[0].length === 1) {
        noteAsRoot.splice(10, 1, noteAsRoot[11] + flat)
        obj[10] = noteAsRoot[10]
      }

      console.log(obj)
      console.log(noteAsRoot)

      // The chord notes in proper order
      let note_chords = []

      for (let i = 0; i < result[0].steps.length; i++) {
        note_chords.push(obj[result[0].steps[i]])
      }
      chord_notes = note_chords.join("-")

      console.log(note_chords)

      // User notes - need to "fix" the notes
      output = uniqueNotes.join("-")

      // Output Chord name for matching noteSteps array
      // First check to see if we need to make it a 'slash' chord, skip slash for long chord names
      if (noteSteps[0] !== 0 && result[0].Chord.length < 7) {
        chord_name = uniqueNotes[i] + result[0].Chord + "/" + obj[noteSteps[0]]
      } else {
        chord_name = uniqueNotes[i] + result[0].Chord
      }
      // Chord name for scale degrees card
      chord_name2 = uniqueNotes[i] + result[0].Chord

      // Output name(s) of "equal" chords
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

      // Get chord tendency and chord intervals
      intervals = result[0].Intervals.join("-")
      tendency = result[0].Tendency.join(", ").split(" ").join(" ")
      equalChords = eqCh.join(", ")

      // Write ALL of the above to the DOM
      document.getElementById('chord-name').textContent = chord_name;
      document.getElementById('chord-name2').textContent = chord_name2;
      document.getElementById('chord-notes').textContent = chord_notes;
      document.getElementById('intervals').textContent = intervals;
      document.getElementById('tendency').textContent = tendency;
      document.getElementById('equal-chords').textContent = equalChords;
      document.getElementById('scale-degrees').innerHTML = scaleDeg.join("");
      document.getElementById('output').innerHTML = output;

      break;

      // Error msg for less than 3 notes
    } else if (noteSteps.length < 3) {
      let output = "";
      output = uniqueNotes.join("-")
      const errorOutput = document.getElementById('error-output')
      let errorMsg = "That is not a chord. Enter at least 3 unique chord tones."
      errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
      document.getElementById('output').innerHTML = output;
    }
  }
  // Error msg if 3 or more unique notes do not equal one of my chords
  if (noteSteps.length >= 3 && matches.length === 0) {
    const errorOutput = document.getElementById('error-output')
    let errorMsg = "That is not a valid chord or that chord is not in our database."
    errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
    document.getElementById('output').innerHTML = uniqueNotes.join("-");
  }
  // Log the final matching object
  console.log(result)
}