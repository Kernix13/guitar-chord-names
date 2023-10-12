/**
 * location.reload() is being used to clear the DOM which is not the 
 * correct approach. This is a priority refactor.
 */
export default function pageReset() {

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