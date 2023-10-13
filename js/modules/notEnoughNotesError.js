/**
 * Error message if the user entered only 1 or 2 unique notes
 * 
 * @param {string} notes The 1 or 2 unique notes from the user
 */
export default function notEnoughNotesError(notes) {
    const errorOutput = document.getElementById("error-output");
    const errorMsg = "That is not a chord. Enter at least 3 unique chord tones or check your sharp/flat selection.";
    errorOutput.innerHTML = `<p>${errorMsg}</p>`;
    document.getElementById("user-notes").innerHTML = notes;
}