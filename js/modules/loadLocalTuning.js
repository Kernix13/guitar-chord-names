const notesFormElement = document.getElementById("notes-form");
const numberInputElements = notesFormElement.querySelectorAll('.note');

// Get the elements that show the notes for each tuning
const sixth = document.getElementById("sixth");
const fifth = document.getElementById("fifth");
const fourth = document.getElementById("fourth");
const third = document.getElementById("third");
const second = document.getElementById("second");
const first = document.getElementById("first");

// Check local storage and load tuning values
export default function loadLocalTuning() {
  // use innerText to initially load the tuning
  if (localStorage.getItem('userStrings') === null) {
    const selectedTuningInLocalStorage = [sixth.innerText, fifth.innerText, fourth.innerText, third.innerText, second.innerText, first.innerText];
    localStorage.setItem("userStrings", selectedTuningInLocalStorage);

    numberInputElements[0].focus();
  } else {
    // but in tuning exists in localStorage, then set the innerText
    const selectUserStrings = localStorage.getItem("userStrings");

    sixth.innerText = selectUserStrings.split(",")[0];
    fifth.innerText = selectUserStrings.split(",")[1];
    fourth.innerText = selectUserStrings.split(",")[2];
    third.innerText = selectUserStrings.split(",")[3];
    second.innerText = selectUserStrings.split(",")[4];
    first.innerText = selectUserStrings.split(",")[5];

    numberInputElements[0].focus();
  }
};