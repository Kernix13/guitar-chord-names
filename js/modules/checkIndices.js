import { chordInfo } from '../data/chord-intervals.js'

// 7. Get objects from chord-intervals.js
export const chordsFound = [];

/**
 * 
 * @param {array} intervals 
 * @returns {array} The object(s) of matching chords from chord-intervals.js
 */
export function checkIndices(intervals) {

  chordInfo.map(chord => {
    const equalChordsArray = intervals.every(item => chord.steps.includes(item));

    if (intervals.length === chord.steps.length && equalChordsArray) {
      chordsFound.push(chord);
    }
  });
  return chordsFound;
}