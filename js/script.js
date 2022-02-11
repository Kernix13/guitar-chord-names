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

    noteStepsSort = noteSteps.sort();
    console.log(uniqueNotes[i]);
    console.log(noteStepsSort);
 
    // 6. Find JSON steps array(s) that matches #5

    let noteIntervals = {};
    // let noteIntervals = [];
    
    // How do I turn noteInterval into an array - this sets each unique note as a key and the step as its value. I don't think I need this
    uniqueNotes.forEach((n, s) => {noteIntervals[n] = noteSteps[s]})
    console.log(noteIntervals);

    function getJson() {
    fetch('./js/chord-intervals.json')
      .then(res => res.json())
      .then(data =>  {
        let output = '';

        function compareArrays(arr1, arr2) {
          if (arr1.length !== arr2.length) return false

          for (let index in arr1) {
            if (arr1[index] !== arr2[index]) return false
          }
          return true
        }

        // const arrOfObjects = data (I don't need this variable since I have data)
        const arrWeLookFor = noteStepsSort;

        const result = data.find(({steps})=>{
          // return compareArrays(arr, arrWeLookFor) (arr should be data, right?)
          return compareArrays(data, noteStepsSort)
        })
        console.log(result) 

        // May not need this now
        data.forEach(function(chord) {

          output += `<li>${Object.keys(chord)[0]}: ${chord.Chord} | Chord steps: ${chord.steps} | ${chord["Equal Chords"][0].name} | ${chord.scales["Major Scale"]}</li>`;

          // console.log(chord);
          return chord;
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(err => console.log(err));
    }
    getJson();

    // 6b. 

    // 7. Output Chord name for matching data.steps
    let noteOutput = document.getElementById('note-output').innerHTML += `<span class="notes">${uniqueNotes[i]}</span>`;

    // 8. Output the chord notes and chord intervals in "proper" order
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