const elementNames = ['slashChordName', 'userNotes', 'chordNotes', 'chordName', 'chordIntervals', 'chordTendency', 'equalChords'];
const elementIds = ['slash-chord-name', 'user-notes', 'chord-notes', 'chord-name', 'chord-intervals', 'chord-tendency', 'equal-chords'];

/**
 * This is a more compact way other than using getElementById, 
 * createTextNode, and append individually in script.js
 * 
 * @param {array} vars The variables for 7 of the vars ouput to the DOM
 */
export default function outputToDom(vars) {
  elementNames.forEach((name, i) => {
    name = document.getElementById(elementIds[i]);
    const text = document.createTextNode(vars[i]);
    name.append(text);
  });
}