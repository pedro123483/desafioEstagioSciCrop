// Criando o mapa
var map = L.map('map').setView([-7.34414953057916, -61.60043843795552], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Acessando os dados da API e percorrendo cada um deles e adicionando eles no mapa
fetch('/locations')
.then(res => res.json())
.then(data => {
    for (var i = 0; i < data.length; i++){
        marker = new L.marker([data[i].latitude, data[i].longitude])
            .bindPopup(data[i].nome)
            .addTo(map);
    }
});
