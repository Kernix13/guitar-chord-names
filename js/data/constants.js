/**
 * @description - The symbol used to denote a flat note
 * 
 * @module constants
 * @type {string}
 */
export const flat = "♭";

/**
 * @description - The symbol used to denote a sharp note
 * 
 * @type {string}
 */
export const sharp = "♯";

/**
 * @description - Array of notes with the enharmonic notes as flats
 * 
 * @type {string[]}
 */
export const SHARPS = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B", "C"];

/**
 * @description - Array of notes with the enharmonic notes as sharps
 * 
 * @type {string[]}
 */
export const FLATS = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];

/**
 * @description - Array of the open strings for 13 different guitar tunings 
 * 
 * @type {string[]}
 */
export const TUNINGS = ["E-A-D-G-B-E", "D-A-D-G-B-E", "D-A-D-G-B-D", "C-G-D-F-A-D", "E-A-C♯-E-A-E", "C-G-C-G-C-E", "D-A-D-F♯-A-D", "D-A-D-G-A-D", "D-A-D-F-A-D", "E-B-E-G♯-B-E", "F-A-C-F-C-F", "D-G-D-G-B-D", "D-G-D-G-B♭-D"];