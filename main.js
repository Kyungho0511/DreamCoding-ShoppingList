const form = document.querySelector('form');
const section = document.querySelector('section');

form.addEventListener('submit', (event) => {
  if (form.shopping.value === '') {
    form.shopping.focus();
    event.preventDefault();
    return;
  }

  const list = document.createElement('div');
  list.setAttribute('class', 'section__list');
  list.innerHTML = `
    <h2>${form.shopping.value}</h2>
    <button class="section__trash">
      <i class="fa-solid fa-trash"></i>
    </button>`;
  section.appendChild(list);
  list.scrollIntoView();
  form.shopping.value = null;
  form.shopping.focus();
  event.preventDefault();
});

//use bubbling technique instead of adding event listener for every deleteBtn
section.addEventListener('click', event => {
  if(event.target.tagName == 'I') {
    event.target.parentElement.parentElement.remove();
  }
});