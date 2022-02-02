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

// The chromatic scale using sharps then flats (just using sharps right now)
const chromaticSharps = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];
const chromaticFlats = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G"];

let userFrets = [];
let chordTones = [];

notesForm.addEventListener("submit", function(e) {
  getNotes();
  getJson();
  e.preventDefault();
  // Repeated clicks of the Submit button duplicates the page output. How do I clear the previous chord notes for successive clicks?
});

// +++++ NEED TO PULL IN JSON HERE, I THINK USING FETCH +++++
// Need the JSON starting on step #4

/* 
1. Get the fret #'s entered by the user (DONE)
2. Convert the fret #'s into chromatic notes (DONE)
3. Add chord tones onto the page, (DONE)
4. Create a 12-note array for each chord tone (DONE)
5. Determine intervals for each note compared to the other notes, 
  - I think this can only be done with a forEach loop, because for all array items after the 1st one I need to look at the previous notes to get that as an interval for the current item, e.g.: note 1 has to be converted into an interval in relation to note 2, notes 1 & 2 need to be converted into intervals in relation to note 3, repeat up to note 6
  - I may need the JSON files starting here or for the last 3 steps
6. Calculate chord name and add to page (Dependent on #5)
7. Output names of other chord names with the same notes, and (Dependent on #6)
8. Output scale()s & scale degrees that build that chord (Dependent on #6)
*/

function getNotes() {
  // 1. Get the fret #'s...
  let userFrets = [firstNote.value, secondNote.value, thirdNote.value, fourthNote.value, fifthNote.value, sixthNote.value];

  // Is the conditional here correct?
  if ([...userFrets]) {
    
    // 2. ...convert fret #'s into chromatic notes. This will have to move down the list because I need to get the chord name 1st in the event there are #'s or b's
    chordTones.push(stringLoE[userFrets[0]], stringA[userFrets[1]], stringD[userFrets[2]], stringG[userFrets[3]], stringB[userFrets[4]], stringHiE[userFrets[5]]);

    let uniqueNotes = [];

    for (let i = 0; i < chordTones.length; i++) {

      if (!uniqueNotes.includes(chordTones[i]) && chordTones[i] !== undefined) {
      uniqueNotes.push(chordTones[i]);
      
      // console.log("Unique Notes: " + uniqueNotes);

      // 3. Add chord tones onto the page
      let noteOutput = `<span class="notes">${uniqueNotes[i]}</span>`;
      const chordOutput = document.getElementById('chord-output').innerHTML += noteOutput;
        
      // 4. Create a 12-note array for each chord tone
      let justNotes = uniqueNotes[i];

      let position = chromaticSharps.indexOf(uniqueNotes[i]);
      let noteAsRoot = chromaticSharps.slice(position, position + 12)
      // console.log(noteAsRoot);
      // console.log(`Notes starting at ${justNotes}: ` + noteAsRoot.indexOf(justNotes));
      
      // 5. For each note, find the interval for the other notes using noteAsRoot
      // This only returns 1 interval for the first iteration, 2 for the 2nd, etc. Let me try a nested for loop.
      uniqueNotes.forEach(note => console.log(`Notes starting at ${justNotes}: ` + noteAsRoot.indexOf(note)));

      // 6. Calculate chord name

      // 7. Output name(s) of "equal" chords

      // 8. Output scale(s) that build the chord

      }
    }

    // return uniqueNotes;
  }
}

// get local json file
function getJson() {
  fetch('./js/interval-distance.json')
    .then(res => res.json())
    .then(data =>  {
      let output = '';
      data.forEach(function(interval) {
        output += `<li>${interval.distance}</li>`;
        // output += `<li>${interval.symbol[0]}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

/* NOT USING THE NEXT 3 VARIABLES AT THIS TIME */
// Only Standard tuning open string note values for now
const standardTuning = ["E", "A", "D", "G", "B", "E"];

// Triads and 7ths: triads to check for chord quality, then if it is a 7th chord
const triads = {"maj": ["1", "3", "5"], "min": ["1", "♭3", "5"], "aug": ["1", "3", "♯5"], "dim": ["1", "♭3", "♭5"], "sus2": ["1", "2", "♭5"], "sus": ["1", "4", "♭5"], "maj♭5": ["1", "3", "♭5"]};

const sevenths = {diminished7: "♭♭7", minor7: "♭7", major7: "7"};

// If I want to use the notes to build an SVG chord shape, then I will need to return chordTones
