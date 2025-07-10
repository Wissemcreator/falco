
function toggleInfo() {
  document.getElementById("infoPanel").classList.toggle("hidden");
}
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 5, minZoom: 2
}).addTo(map);
for (let code in globalData.countries) {
  fetch(`https://nominatim.openstreetmap.org/search?country=${code}&format=json`)
    .then(res => res.json()).then(data => {
      if (data[0]) {
        const lat = data[0].lat, lon = data[0].lon;
        const val = globalData.countries[code].local;
        const color = val > 23 ? "green" : val > 22 ? "orange" : "red";
        const marker = L.circleMarker([lat, lon], {
          radius: 8, fillColor: color, fillOpacity: 0.7, color: "#000", weight: 1
        }).addTo(map);
        marker.on('click', () => showCountry(code));
      }
    });
}
function showCountry(code) {
  const c = globalData.countries[code];
  const g = globalData;
  const falco = ((g.gold + g.btc + c.local) / 3).toFixed(2);
  document.getElementById("countryData").classList.remove("hidden");
  document.getElementById("countryName").innerText = c.name;
  document.getElementById("goldVal").innerText = g.gold;
  document.getElementById("btcVal").innerText = g.btc;
  document.getElementById("localVal").innerText = c.local;
  document.getElementById("falcoVal").innerText = falco;
  document.getElementById("comment").innerText = c.comment;
  document.getElementById("sourceLink").href = c.source;
}
(function setGlobal() {
  const g = globalData;
  const avg = Object.values(g.countries).map(c => (g.gold + g.btc + c.local)/3)
    .reduce((a,b)=>a+b,0) / Object.keys(g.countries).length;
  document.getElementById("globalValue").innerText = avg.toFixed(2);
})();
