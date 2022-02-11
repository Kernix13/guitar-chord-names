// User entered fret numbers by string
const firstNote = document.getElementById('note1');
const secondNote = document.getElementById('note2') ;
const thirdNote = document.getElementById('note3');
const fourthNote = document.getElementById('note4');
const fifthNote = document.getElementById('note5');
const sixthNote = document.getElementById('note6');

// All number input fields
const fretInputs = document.querySelectorAll('.note');
// Submit button
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
  // chordCalcs();
  // clearNotes();
  // getJson();

  e.preventDefault();
});

// +++++ NEED TO FETCH THE JSON HERE (see below getNotes) +++++
// Need the JSON starting on step #6

/* 
getNotes: 
1. Get the fret #'s entered by the user (DONE)
2. Convert the fret #'s into chromatic notes (DONE)
3. In case of duplicate notes, get only unique notes (DONE)
4. Create a 12-note array for each chord tone (DONE)
5. Determine intervals for each note compared to the other notes (DONE)

chordCalcs:
6. Calculate chord name and add to page (need JSON files here)
7. Output the chord notes in "proper" order
8. Output the chord intervals in "proper" order
9. Output name(s) of "equal" chords, & Chord Substitutes (later)
10. Output scale(s) & scale degrees that build the chord
11. Clear everything on next Submit (keyddown?) 
*/

function getNotes() {
  // 1. Get the fret #'s...
  let userFrets = [firstNote.value, secondNote.value, thirdNote.value, fourthNote.value, fifthNote.value, sixthNote.value];

  // Is the conditional here correct?
  if ([...userFrets]) {
    
    // 2. ...convert fret #'s into chromatic notes. This will have to move down the list because I need to get the chord name 1st in the event there are #'s or b's
    chordTones.push(stringLoE[userFrets[0]], stringA[userFrets[1]], stringD[userFrets[2]], stringG[userFrets[3]], stringB[userFrets[4]], stringHiE[userFrets[5]]);
  }
  
  // 3. In case of duplicate notes, get only unique notes
  let uniqueNotes = [];
  for (let i = 0; i < chordTones.length; i++) {

    if (!uniqueNotes.includes(chordTones[i]) && chordTones[i] !== undefined) {
      uniqueNotes.push(chordTones[i]);
    }
  }
    
  let noteSteps = [];
  for (let i = 0; i < uniqueNotes.length; i++) {

    // 4. Create a 12-note array for each chord tone
    let position = chromaticSharps.indexOf(uniqueNotes[i]);
    let noteAsRoot = chromaticSharps.slice(position, position + 12);

    // 5. Determine intervals for each note compared to the other notes
    noteSteps = [];
    uniqueNotes.forEach(note => noteSteps.push(noteAsRoot.indexOf(note)));

    // let noteStepsSort = noteSteps.sort();
    console.log(uniqueNotes[i]);
    console.log(noteSteps);
 
    // 6. Calculate chord name and add to page
    // 6a. create object with uniqueNotes as keys and noteIntervals as values - better to have each note = to an array of noteIntervals (maybe)

    // Why did I put this here? Of course they are equal AND not empty!
    // if(uniqueNotes.length != noteSteps.length || uniqueNotes.length == 0 || noteSteps.length == 0){
    //   return null;
    // };

    let noteIntervals = {};
    // let noteIntervals = [];
    
    // How do I turn noteInterval into an array - this sets each unique note as a key and the step as its value. I don't think I need this
    uniqueNotes.forEach((n, s) => {noteIntervals[n] = noteSteps[s]})
    console.log(noteIntervals);

    // Check all JSON chord steps that equal user chord steps/intervals from chord-intervals.json
    // This gets the json, only gets equal length steps and arrys and sorts those array. 
    // Getting remote JSON data with the fetch API: https://codepen.io/tule/pen/awQgmY
    function getJson() {
    fetch('./js/chord-intervals.json')
      .then(res => res.json())
      .then(data =>  {
        let output = '';

        let allArr = [];
        let keyArray = {"arrOfSteps": noteSteps};
        allArr.push(keyArray);
        
        console.log(keyArray);
        // console.log(data[5].Chord);

        data.forEach(function(chord) {

          output += `<li>${Object.keys(chord)[0]}: ${chord.Chord} | Chord steps: ${chord.steps} | ${chord["Equal Chords"][0].name} | ${chord.scales["Major Scale"]}</li>`;

          // if (chord.steps.length == noteSteps.length) {
          //   // returning 275 = 5 * 55
          //   console.log(chord.steps);
          // }

          // console.log(chord);
          return chord;
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => console.log(err));
    }
    getJson();

    // 6b. 

    // 7. Add the chord notes to the page
    let noteOutput = document.getElementById('note-output').innerHTML += `<span class="notes">${uniqueNotes[i]}</span>`;

    // 8. Add the chord steps to the page
    let intervalOutput = document.getElementById('interval-output').innerHTML += `<span class="intervals">${uniqueNotes[i]}: ${noteSteps} | </span>`;

    // 9. Output name(s) of "equal" chords

    // 10. Output scale(s) & scale degrees that build the chord

    // 11. Clear the page on next Submit

  }
  // console.log(uniqueNotes);
}


// function clearNotes() {
//   notesForm.addEventListener('click', function() {
//     let noteOutput = document.getElementById('note-output').innerHTML = '';
//   })
// }