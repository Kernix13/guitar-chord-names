export default function notEnoughNotesError(arr1, arr2) {
  if (arr1.length < 3) {
    const userNotes = arr2.join("-");
    const errorOutput = document.getElementById("error-output");
    const errorMsg = "That is not a chord. Enter at least 3 unique chord tones.";
    errorOutput.innerHTML = `<p>${errorMsg}</p>`;
    document.getElementById("user-notes").innerHTML = userNotes;
  }
}