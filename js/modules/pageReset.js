/**
 * @description - location.reload() to clear the DOM which
 * This is not the correct approach. This is a priority refactor.
 * 
 * @module pageReset
 */
export default function pageReset() {
  
  /** @type {HTMLElement} */
  const numberInputElements = document.querySelectorAll('.note');
  
  // Firefox not clearing input fields
  numberInputElements.forEach(item => {
    item.value = '';
  })

  location.reload();

  document.querySelector('h1').scrollIntoView({
    behavior: 'smooth'
  });
}