
// Caricamento mappa con Leaflet + GeoJSON
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

fetch('world.geojson')
  .then(res => res.json())
  .then(geoData => {
    L.geoJSON(geoData, {
      style: f => ({
        fillColor: '#66c2a5',
        weight: 1,
        color: '#444',
        fillOpacity: 0.7
      }),
      onEachFeature: (feature, layer) => {
        const iso = feature.properties.ISO_A2;
        const d = globalData.countries[iso];
        if (d) {
          layer.on('click', () => {
            document.getElementById('countryData').innerHTML = `<div><canvas id='historyChart' width='400' height='200'></canvas></div>`;
updateChart(d.history);

              <h2>${d.name}</h2>
              <p><strong>G_Local:</strong> ${d.local}</p>
              <p>${d.comment}</p>
              <a href="${d.source}" target="_blank">Fonte</a>
            `;
          });
        }
      }
    }).addTo(map);
  });
