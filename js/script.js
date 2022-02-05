// User entered fret numbers by string
const firstNote = document.getElementById('note1');
const secondNote = document.getElementById('note2') ;
const thirdNote = document.getElementById('note3');
const fourthNote = document.getElementById('note4');
const fifthNote = document.getElementById('note5');
const sixthNote = document.getElementById('note6');

const userChord = document.getElementById('user-chord');
// THE FORM
const notesForm = document.getElementById('notes-form');

// The chromatic scale by string, 15 frets (Sharps only)
const stringLoE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯","E", "F", "F♯", "G"];
const stringA = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];
const stringD = ["D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F"];
const stringG = ["G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯"];
const stringB = ["B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D"];
const stringHiE = ["E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];

// The chromatic scale using sharps then flats (just using sharps right now)
const chromaticSharps = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G"];
const chromaticFlats = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G"];

let userFrets = [];
let chordTones = [];

notesForm.addEventListener("submit", function(e) {
  getNotes();
  // clearNotes();
  getJson();

  e.preventDefault();
});

// +++++ NEED TO FETCH THE JSON HERE (see below getNotes) +++++
// Need the JSON starting on step #6

/* 
1. Get the fret #'s entered by the user (DONE)
2. Convert the fret #'s into chromatic notes (DONE)
3. Create a 12-note array for each chord tone (DONE)
4. Determine intervals for each note compared to the other notes (DONE)
5. Add chord tones onto the page, (DONE but with issues)
6. Calculate chord name and add to page
7. Add the chord notes to the page in "proper" order
8. Add the chord intervals to the page in "proper" order (undo #3)
9. Output name(s) of "equal" chords
10. Output scale(s) & scale degrees that build the chord
11. HOW DO I CLEAR THE OUTPUT 
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
      
      // 3. Create a 12-note array for each chord tone
      // let justNotes = uniqueNotes[i];

      // let position = chromaticSharps.indexOf(uniqueNotes[i]);
      // let noteAsRoot = chromaticSharps.slice(position, position + 12);
      }

      // 4. Add chord tones onto the page. Something is wrong with the Output. Moved it to the next for loop because of undefined when a string did not have a fret entered

      /*
      let noteOutput = `<span class="notes">${uniqueNotes[i]}</span>`;
      if (noteOutput !== '' && chordTones[i] !== undefined) {
        let chordOutput = document.getElementById('chord-output').innerHTML += noteOutput;
      } else {
        let chordOutput = document.getElementById('chord-output').innerHTML = '';
      }
      */
  
    }
    console.log(uniqueNotes);

    // 3. Create a 12-note array for each chord tone
    // 4. Determine intervals for each note compared to the other notes
    for (let i = 0; i < uniqueNotes.length; i++) {

      let position = chromaticSharps.indexOf(uniqueNotes[i]);
      let noteAsRoot = chromaticSharps.slice(position, position + 12);
      let noteIndices = [];
      
      // console.log(noteAsRoot);
      uniqueNotes.forEach(note => noteIndices.push(noteAsRoot.indexOf(note)));
      console.log(noteIndices);

      // 5. Add chord tones onto the page
      let noteOutput = `<span class="notes">${uniqueNotes[i]}</span>`;
      let chordOutput = document.getElementById('chord-output').innerHTML += noteOutput;

      // 6. Calculate chord name and add to page

      // 7. Add the chord notes to the page in "proper" order

      // 8. Add the chord intervals to the page in "proper" order

      // 9. Output name(s) of "equal" chords

      // 10. Output scale(s) & scale degrees that build the chord

    }
  }

  notesForm.addEventListener('click', function() {
    chordOutput = document.getElementById('chord-output').innerHTML = '';
  })
}

// function clearNotes() {
//   notesForm.addEventListener('click', function() {
//     let noteOutput = '';
//     let chordOutput = document.getElementById('chord-output').innerHTML = '';
//   })
// }


// get local json file
function getJson() {
  fetch('./js/chord-intervals.json')
    .then(res => res.json())
    .then(data =>  {
      let output = '';
      data.forEach(function(chord) {
        output += `<li>Chord name: ${chord.chord}, Chord intervals: ${chord.steps}</li>`;
        // output += `<li>${interval.distance}</li>`;
        // output += `<li>${interval.symbol[0]}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}
/*
// get local json file
function getJson() {
  fetch('./js/interval-distance.json')
    .then(res => res.json())
    .then(data =>  {
      let output = '';
      data.forEach(function(interval) {
        output += `<li>${interval.distance}</li>`;
        // output += `<li>${interval.distance}</li>`;
        // output += `<li>${interval.symbol[0]}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}
*/

/* NOT USING THE NEXT 3 VARIABLES AT THIS TIME */
// Only Standard tuning open string note values for now
const standardTuning = ["E", "A", "D", "G", "B", "E"];

// Triads and 7ths: triads to check for chord quality, then if it is a 7th chord
const triads = {"maj": ["1", "3", "5"], "min": ["1", "♭3", "5"], "aug": ["1", "3", "♯5"], "dim": ["1", "♭3", "♭5"], "sus2": ["1", "2", "♭5"], "sus": ["1", "4", "♭5"], "maj♭5": ["1", "3", "♭5"]};

const sevenths = {diminished7: "♭♭7", minor7: "♭7", major7: "7"};

// If I want to use the notes to build an SVG chord shape, then I will need to return chordTones
