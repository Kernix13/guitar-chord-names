/** @type {string[]} */
const elementNames = ['slashChordName', 'userNotes', 'chordNotes', 'chordName', 'chordIntervals', 'chordTendency', 'equalChords'];
/** @type {string[]} */
const elementIds = ['slash-chord-name', 'user-notes', 'chord-notes', 'chord-name', 'chord-intervals', 'chord-tendency', 'equal-chords'];

/**
 * @description - A more compact way other than using getElementById,
 * createTextNode, and append individually in script.js
 * 
 * @module outputToDom
 * @param {array} vars
 */
export default function outputToDom(vars) {
  elementNames.forEach((name, i) => {
    name = document.getElementById(elementIds[i]);
    /** @type {HTMLElement} */
    const text = document.createTextNode(vars[i]);
    name.append(text);
  });
}