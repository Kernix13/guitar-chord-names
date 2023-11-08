import { chordInfo } from '../data/chord-intervals.js'

/**
 * @description - Get objects from chord-intervals.js
 * 
 * @module chordsFound
 * @type {array} 
 */
export const chordsFound = [];

/**
 * @description - Return array of objects if matching chord(s) found
 * 
 * @module checkIndices
 * @param {string[]} intervals 
 * @returns {array} The object(s) of matching chords from chord-intervals.js
 */
export function checkIndices(intervals) {

  chordInfo.map(chord => {

    /** @type {boolean} */
    const equalChordsArray = intervals.every(item => chord.steps.includes(item));

    if (intervals.length === chord.steps.length && equalChordsArray) {
      chordsFound.push(chord);
    }
  });
  return chordsFound;
}