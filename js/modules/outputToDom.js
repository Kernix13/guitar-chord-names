const elementNames = ['slashChordName', 'userNotes', 'chordNotes', 'chordName', 'chordIntervals', 'chordTendency', 'equalChords'];
const elementIds = ['slash-chord-name', 'user-notes', 'chord-notes', 'chord-name', 'chord-intervals', 'chord-tendency', 'equal-chords'];

export default function outputToDom(arr) {
  elementNames.forEach((name, i) => {
    name = document.getElementById(elementIds[i]);
    const text = document.createTextNode(arr[i]);
    name.append(text);
  });
}