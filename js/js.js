



document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var role = document.getElementById('role').value;

    if (name === '' || email === '' || role === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Formulario enviado correctamente.');
    }
});

function mostrarDescripcion(id) {
    document.getElementById(id) . textContent = document.querySelector(`img[data-descripcion='${id}']`) .dataset.descrpcion;
    document.getElementById(id).style.display = 'block';
}

function ocultarDescripcion(id) {
    document.getElementById(id).style.display = 'none';
}

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.searchable-item');
    
    items.forEach(item => {
      if (item.textContent.toLowerCase().includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });