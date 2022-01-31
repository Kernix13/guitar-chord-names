// User entered fret numbers by string
const firstNote = document.getElementById('note1');
const secondNote = document.getElementById('note2') ;
const thirdNote = document.getElementById('note3');
const fourthNote = document.getElementById('note4');
const fifthNote = document.getElementById('note5');
const sixthNote = document.getElementById('note6');

// The chromatic scale by string, 15 frets (Sharps only)
const stringLoE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯","E", "F", "F♯", "G"];
const stringA = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];
const stringD = ["D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F"];
const stringG = ["G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯"];
const stringB = ["B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D"];
const stringHiE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];

// THE FORM
const notesForm = document.getElementById('notes-form');

/* NOT USING THE NEXT 5 VARIABLES AT THIS TIME */
// Standard tuning open string note values (need to incorporate alternate tunings later)
const standardTuning = ["E", "A", "D", "G", "B", "E"];

// The chromatic scale using sharps then flats (just using sharps right now)
const chromaticSharps = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯"];
const chromaticFlats = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭"];

// Triads and 7ths - use the trias to check for chord quality, then if it is a 7th chord
const triads = {"maj": ["1", "3", "5"], "min": ["1", "♭3", "5"], "aug": ["1", "3", "♯5"], "dim": ["1", "♭3", "♭5"], "sus2": ["1", "2", "♭5"], "sus": ["1", "4", "♭5"], "maj♭5": ["1", "3", "♭5"]};
const sevenths = {diminished7: "♭♭7", minor7: "♭7", major7: "7"};

let userFrets = [];
let chordTones = [];

notesForm.addEventListener("submit", function(e) {
  chordTones = [];
  getNotes();
  e.preventDefault(); 
});

// Get the fret #'s entered by the user and convert into chromatic notes
function getNotes() {
  let userFrets = [firstNote.value, secondNote.value, thirdNote.value, fourthNote.value, fifthNote.value, sixthNote.value];

  // Is the conditional here correct?
  if ([...userFrets]) {
    
    chordTones.push(stringLoE[userFrets[0]], stringA[userFrets[1]], stringD[userFrets[2]], stringG[userFrets[3]], stringB[userFrets[4]], stringHiE[userFrets[5]]);

    let uniqueNotes = [];

    for (let i = 0; i < chordTones.length; i++) {
      if (!uniqueNotes.includes(chordTones[i]) && chordTones[i] !== undefined) {
      uniqueNotes.push(chordTones[i]);
      }
    }

    console.log(userFrets);
    console.log(uniqueNotes);

    // Console log for an empty input field for the B string
    // console.log("Empty input box (typeof): " + typeof userFrets[4])

    firstNote.focus();
    return uniqueNotes;
  }
}

// Why can't I get the return values from getNotes()?
function testingReturn() {

  console.log(getNotes());

  // The log below gives me an error:
  // console.log(uniqueNotes[0]);

  let someNote = getNotes();
  // Only getting the note values for the values in the HTML
  console.log(someNote[1]);
}
testingReturn();

// If I want to use the notes to build a chord shape, then I will need to return chordTones but I can't do that here - another function inside the event listener?
