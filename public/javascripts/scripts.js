document.addEventListener('DOMContentLoaded', () => {
  const addForm = document.querySelector('.add-form');
  const updateForms = document.querySelectorAll('.update-form');
  const deleteForms = document.querySelectorAll('.delete-form');
  const toggleButtons = document.querySelectorAll('.toggle-update-form');

  // Validación y confirmación para agregar un nuevo curso
  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      const title = addForm.querySelector('input[name="title"]').value;
      const description = addForm.querySelector('input[name="description"]').value;
      const price = addForm.querySelector('input[name="price"]').value;

      if (!title || !description || !price) {
        e.preventDefault();
        alert('Todos los campos son obligatorios.');
      } else {
        const confirmAdd = confirm('¿Está seguro de que desea agregar este curso?');
        if (!confirmAdd) {
          e.preventDefault();
        }
      }
    });
  }

  // Confirmación para actualizar un curso
  updateForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const confirmUpdate = confirm('¿Está seguro de que desea actualizar este curso?');
      if (!confirmUpdate) {
        e.preventDefault();
      }
    });
  });

  // Confirmación para eliminar un curso
  deleteForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const confirmDelete = confirm('¿Está seguro de que desea eliminar este curso?');
      if (!confirmDelete) {
        e.preventDefault();
      }
    });
  });

  // Mostrar/ocultar formulario de actualización
  toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const form = e.target.nextElementSibling.nextElementSibling; // Selecciona el formulario de actualización correspondiente
      if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        button.textContent = 'Cancelar';
      } else {
        form.style.display = 'none';
        button.textContent = 'Actualizar';
      }
    });
  });
});
