const numberInputElements = document.querySelectorAll('.note');
const selectOptions = document.querySelectorAll('option');

// Get the elements that show the notes for each tuning
const sixth = document.getElementById("sixth");
const fifth = document.getElementById("fifth");
const fourth = document.getElementById("fourth");
const third = document.getElementById("third");
const second = document.getElementById("second");
const first = document.getElementById("first");

const sharpRadioBtn = document.querySelector("#sharp-key");
const flatRadioBtn = document.querySelector("#flat-key");

/**
 * Check local storage and load tuning values and key. Use innerText to 
 * initially load the tuning if not in localStorage, else use
 * the value in localStorage to set the innerText. Set the key to sharp
 * if not in localStorage, otherwise load the user's key.
 */
export default function loadLocalTuning() {
  if (localStorage.getItem('userStrings') === null) {

    // Set the text above the number inputs
    const savedUserTuning = [sixth.innerText, fifth.innerText, fourth.innerText, third.innerText, second.innerText, first.innerText];
    localStorage.setItem("userStrings", savedUserTuning);

    // Set the default of Standard Tuning
    const selectedOption = 0;
    localStorage.setItem("optionVal", selectedOption);
    selectOptions[0].selected = true;
    console.log(selectedOption)

    // Set the default of sharp key
    const savedUserKey = sharpRadioBtn.value;
    localStorage.setItem("userKey", savedUserKey);
    sharpRadioBtn.checked = true;

    numberInputElements[0].focus();
  } else {
    // Set the user's Tuning
    const selectedOption = localStorage.getItem("optionVal");
    selectOptions[selectedOption].selected = true;
    console.log(selectedOption)
    
    // Set the user's key
    const savedUserKey = localStorage.getItem("userKey");
    if (savedUserKey === 'sharp') {
      sharpRadioBtn.checked = true;
      console.log("sharp = " + sharpRadioBtn.checked)
    } else if (savedUserKey === 'flat') {
      flatRadioBtn.checked = true;
      console.log("flat = " + flatRadioBtn.checked)
    }

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