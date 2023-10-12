/**
 * Return an error if the 3 or more unique notes does not match
 * a chord in chord-intervals.js
 * 
 * @param {array} intervals The intervals for the unique notes
 * @param {array} matches Chords found in chord-intervals.js
 * @param {array} notes The unique notes
 */
export default function noMatchError(intervals, matches, notes) {
  if (intervals.length >= 3 && matches.length === 0) {
    const errorOutput = document.getElementById("error-output");
    const errorMsg = "That is not a valid chord or it is not in our database. Check the tuning or sharp/flat key buttons.";
    errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
    document.getElementById("user-notes").innerHTML = notes.join("-");
  }
}