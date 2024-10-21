// Inicializar el mapa
var map = L.map('map').setView([20, 0], 2); // Coordenadas del mapa centrado

// Cargar y configurar la capa del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Agregar marcadores de los inicios del cine
var locations = [
    {"name": "Lyon, Francia", "coords": [45.764043, 4.835659], "description": "Lugar de los Hermanos Lumière"},
    {"name": "Thomas Edison Black Maria Studio, EE. UU.", "coords": [40.735657, -74.172367], "description": "Primer estudio de cine de Thomas Edison"},
    {"name": "Cinema Omnia Pathé, Francia", "coords": [48.856613, 2.352222], "description": "Primer cine de los Hermanos Pathé"},
    {"name": "Blackpool, Reino Unido", "coords": [53.814041, -3.050356], "description": "Primera proyección pública en el Reino Unido"},
    // Añade más ubicaciones aquí
];

locations.forEach(function(location) {
    L.marker(location.coords).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}`);
});
