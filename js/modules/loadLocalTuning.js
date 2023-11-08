/** @type {HTMLElement} */
const numberInputElements = document.querySelectorAll('.note');
/** @type {HTMLElement} */
const selectOptions = document.querySelectorAll('option');

// Get the elements that show the notes for each tuning
/** @type {HTMLElement} */
const sixth = document.getElementById("sixth");
/** @type {HTMLElement} */
const fifth = document.getElementById("fifth");
/** @type {HTMLElement} */
const fourth = document.getElementById("fourth");
/** @type {HTMLElement} */
const third = document.getElementById("third");
/** @type {HTMLElement} */
const second = document.getElementById("second");
/** @type {HTMLElement} */
const first = document.getElementById("first");

/** @type {HTMLElement} */
const sharpRadioBtn = document.querySelector("#sharp-key");
/** @type {HTMLElement} */
const flatRadioBtn = document.querySelector("#flat-key");

/**
 * @description - Check local storage and load tuning values and key.
 * Use innerText to initially load the tuning if not in localStorage,
 * else use the value in localStorage to set the innerText.
 * Set the key to sharp if not in localStorage, else load the user's key.
 * 
 * @module loadLocalTuning
 */
export default function loadLocalTuning() {
  if (localStorage.getItem('userStrings') === null) {

    // Set the text above the number inputs
    /** @type {string[]} */
    const savedUserTuning = [sixth.innerText, fifth.innerText, fourth.innerText, third.innerText, second.innerText, first.innerText];

    localStorage.setItem("userStrings", savedUserTuning);

    // Set the default of Standard Tuning
    /** @type {number} */
    const selectedOption = 0;

    localStorage.setItem("optionVal", selectedOption);
    selectOptions[0].selected = true;

    // Set the default of sharp key
    /** @type {string} */
    const savedUserKey = sharpRadioBtn.value;

    localStorage.setItem("userKey", savedUserKey);
    sharpRadioBtn.checked = true;

    numberInputElements[0].focus();
  } else {
    // Set the user's Tuning
    /** @type {string} */
    const selectedOption = localStorage.getItem("optionVal");

    selectOptions[selectedOption].selected = true;
    
    // Set the user's key
    /** @type {string} */
    const savedUserKey = localStorage.getItem("userKey");

    if (savedUserKey === 'sharp') {
      sharpRadioBtn.checked = true;
    } else if (savedUserKey === 'flat') {
      flatRadioBtn.checked = true;
    }

    /** @type {string} */
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