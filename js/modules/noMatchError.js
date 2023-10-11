export default function noMatchError(arr1, arr2, arr3) {
  if (arr1.length >= 3 && arr2.length === 0) {
    const errorOutput = document.getElementById("error-output");
    const errorMsg = "That is not a valid chord or it is not in our database. Check the tuning or sharp/flat key buttons.";
    errorOutput.innerHTML = `<p>` + errorMsg + `</p>`;
    document.getElementById("user-notes").innerHTML = arr3.join("-");
  }
}