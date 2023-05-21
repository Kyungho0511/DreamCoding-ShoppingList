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

  const h2 = document.createElement('h2');
  h2.textContent = `${form.shopping.value}`; 

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'section__trash');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    list.remove();
  });

  list.appendChild(h2);
  list.appendChild(deleteBtn);
  section.appendChild(list);

  list.scrollIntoView();
  form.shopping.value = null;
  form.shopping.focus();
  event.preventDefault();
});