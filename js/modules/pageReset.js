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