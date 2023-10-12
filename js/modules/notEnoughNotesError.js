/**
 * Error message if the user entered only 1 or 2 unique notes
 * 
 * @param {array} notes 
 */
export default function notEnoughNotesError(notes) {
  if (notes.length < 3) {
    const userNotes = notes.join("-");
    const errorOutput = document.getElementById("error-output");
    const errorMsg = "That is not a chord. Enter at least 3 unique chord tones.";
    errorOutput.innerHTML = `<p>${errorMsg}</p>`;
    document.getElementById("user-notes").innerHTML = userNotes;
  }
}