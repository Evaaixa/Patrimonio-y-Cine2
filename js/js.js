
        // Objeto con información de las películas
        const peliculas = {
          'A_Is_for_Atom.webm': {
              titulo: 'A es de Atomo',
              descripcion: 'Descripción de la película 1...',
              duracion: '14:42',
              fecha: '1953',
              genero: '..'
          },
          'pelicula2.webm': {
              titulo: 'Película 2',
              descripcion: 'Descripción de la película 2...',
              duracion: '1h 55min',
              genero: 'Comedia'
          },
          'pelicula3.webm': {
              titulo: 'Película 3',
              descripcion: 'Descripción de la película 3...',
              duracion: '2h 30min',
              genero: 'Drama'
          }
      };

      function cargarPelicula() {
          const select = document.getElementById('movieSelect');
          const video = document.getElementById('videoPlayer');
          const titulo = document.getElementById('movieTitle');
          const descripcion = document.getElementById('movieDescription');
          
          if (select.value) {
              // Actualiza la fuente del video
              video.querySelector('source').src = 'ruta/a/tus/videos/' + select.value;
              video.load(); // Recarga el video con la nueva fuente
              
              // Actualiza la información de la película
              const pelicula = peliculas[select.value];
              titulo.textContent = pelicula.titulo;
              descripcion.textContent = `${pelicula.descripcion}\nDuración: ${pelicula.duracion} | Género: ${pelicula.genero}`;
          } else {
              // Resetea el reproductor si no hay selección
              video.querySelector('source').src = '';
              video.load();
              titulo.textContent = 'Selecciona una película';
              descripcion.textContent = 'La descripción de la película aparecerá aquí cuando selecciones una película.';
          }
      }

      // Función para cargar películas desde una API o base de datos
      async function cargarCatalogo() {
          try {
              // Aquí podrías hacer una llamada a tu API
              // const response = await fetch('tu-api/peliculas');
              // const data = await response.json();
              // Actualizar el select con los datos recibidos
          } catch (error) {
              console.error('Error al cargar el catálogo:', error);
          }
      }

      // Cargar el catálogo al iniciar la página
      // cargarCatalogo();





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