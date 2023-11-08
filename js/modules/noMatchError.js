/**
 * @description - Output an error if 3 or more unique notes do not 
 * match a chord in chord-intervals.js
 * 
 * @module noMatchError
 * @param {array} notes The unique user notes
 */
export default function noMatchError(notes) {
    /** @type {HTMLElement} */
    const errorOutput = document.getElementById("error-output");

    /** @type {string} */
    const errorMsg = "That is not a valid chord or it is not in our database. Check the tuning or sharp/flat key buttons.";

    errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
    document.getElementById("user-notes").innerHTML = notes.join("-");
}