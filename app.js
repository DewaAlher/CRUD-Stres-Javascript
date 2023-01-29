window.addEventListener ('load', () => {
  const form = document.querySelector ('#new-strest-form');
  const input = document.querySelector ('#new-strest-input');
  const list_el = document.querySelector ('#strests');

  form.addEventListener ('submit', e => {
    e.preventDefault ();

    const strest = input.value;

    const strest_el = document.createElement ('div');
    strest_el.classList.add ('strest');

    const strest_content_el = document.createElement ('div');
    strest_content_el.classList.add ('content');

    strest_el.appendChild (strest_content_el);

    const strest_input_el = document.createElement ('input');
    strest_input_el.classList.add ('text');
    strest_input_el.type = 'text';
    strest_input_el.value = strest;
    strest_input_el.setAttribute ('readonly', 'readonly');

    strest_content_el.appendChild (strest_input_el);

    const strest_actions_el = document.createElement ('div');
    strest_actions_el.classList.add ('actions');

    const strest_edit_el = document.createElement ('button');
    strest_edit_el.classList.add ('edit');
    strest_edit_el.innerText = 'Edit';

    const strest_delete_el = document.createElement ('button');
    strest_delete_el.classList.add ('delete');
    strest_delete_el.innerText = 'Hapus';

    strest_actions_el.appendChild (strest_edit_el);
    strest_actions_el.appendChild (strest_delete_el);

    strest_el.appendChild (strest_actions_el);

    list_el.appendChild (strest_el);

    input.value = '';

    strest_edit_el.addEventListener ('click', e => {
      if (strest_edit_el.innerText.toLowerCase () == 'edit') {
        strest_edit_el.innerText = 'Save';
        strest_input_el.removeAttribute ('readonly');
        strest_input_el.focus ();
      } else {
        strest_edit_el.innerText = 'Edit';
        strest_input_el.setAttribute ('readonly', 'readonly');
      }
    });

    strest_delete_el.addEventListener ('click', e => {
      list_el.removeChild (strest_el);
    });
  });
});
