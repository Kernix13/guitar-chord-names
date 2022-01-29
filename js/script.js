const firstNote = document.getElementById('note1');
const secondNote = document.getElementById('note2') ;
const thirdNote = document.getElementById('note3');
const fourthNote = document.getElementById('note4');
const fifthNote = document.getElementById('note5');
const sixthNote = document.getElementById('note6');

const notesForm = document.getElementById('notes-form');

let userNotes = [0,0,0,0,0,0];
let chordNotes = [];

notesForm.addEventListener("submit", function(e) {
  getNotes();
  e.preventDefault(); 
});

// Get the fret #'s entered by the user and convert into chromatic notes
function getNotes() {
  let userNotes = [firstNote.value, secondNote.value, thirdNote.value, fourthNote.value, fifthNote.value, sixthNote.value];

  if ([...userNotes]) {
    // search: javascript how to empty an array before pushing to it
    userNotes = [];

    chordNotes.push(stringLoE[userNotes[0]], stringA[userNotes[1]], stringD[userNotes[2]], stringG[userNotes[3]], stringB[userNotes[4]], stringHiE[userNotes[5]]);

    let uniqueNotes = [];

    for (let i = 0; i < chordNotes.length; i++) {
      if (!uniqueNotes.includes(chordNotes[i]) && chordNotes[i] !== undefined) {
      uniqueNotes.push(chordNotes[i]);
      }
    }

    console.log(userNotes);
    console.log(uniqueNotes);
    // Console log for the one input field with no value entered
    console.log("Empty input box (typeof): " + typeof userNotes[4])

    return uniqueNotes;
  }
}

// Why can't I get the return values from getNotes()?
function testingReturn() {
  console.log(getNotes());
}

testingReturn()

// If I want to use the notes to build a chord shape, then I will need to return chordNotes but I can't do that here - another function inside the event listener?

// Standard tuning open string note values
const standardTuning = ["E", "A", "D", "G", "B", "E"];

// The chromatic scale using sharps
const chromaticSharps = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯"];

// The chromatic scale using flats
const chromaticFlats = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭"];

// The chromatic scale by string
const stringLoE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯","E", "F", "F♯", "G"];
const stringA = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];
const stringD = ["D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F"];
const stringG = ["G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯"];
const stringB = ["B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D"];
const stringHiE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];

const triads = {
  "maj": ["1", "3", "5"],
  "min": ["1", "♭3", "5"],
  "aug": ["1", "3", "♯5"],
  "dim": ["1", "♭3", "♭5"],
  "sus2": ["1", "2", "♭5"],
  "sus": ["1", "4", "♭5"],
  "maj♭5": ["1", "3", "♭5"]
};

const sevenths = {
  diminished7: "♭♭7",
  minor7: "♭7",
  major7: "7",
};
