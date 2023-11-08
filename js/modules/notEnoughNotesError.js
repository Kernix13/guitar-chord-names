/**
 * @description - Error message if the user entered only 1 or 2 unique notes
 * 
 * @module notEnoughNotesError
 * @param {string} notes
 */
export default function notEnoughNotesError(notes) {
    /** @type {HTMLElement} */
    const errorOutput = document.getElementById("error-output");

    /** @type {string} */
    const errorMsg = "That is not a chord. Enter at least 3 unique chord tones or check your sharp/flat selection.";
    
    errorOutput.innerHTML = `<p>${errorMsg}</p>`;
    document.getElementById("user-notes").innerHTML = notes;
}