// 7. Get objects from chord-intervals.js
export const chordsFound = [];
export function checkIndices(arr) {

  chordIntervals.map(chord => {
    const equalChordsArray = arr.every(item => chord.steps.includes(item));

    if (arr.length === chord.steps.length && equalChordsArray) {
      chordsFound.push(chord);
    }
  });
  return chordsFound;
}