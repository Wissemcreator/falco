
document.addEventListener("DOMContentLoaded", function () {
  const globalEl = document.getElementById("global-value");
  const countryInfoEl = document.getElementById("country-info");
  const commentBox = document.getElementById("comment-box");

  function updateGlobalValue() {
    const { gold, btc, countries } = globalData;
    const localAvg =
      Object.values(countries).reduce((sum, c) => sum + c.local, 0) /
      Object.values(countries).length;
    const globalFalco = ((gold + btc + localAvg) / 3).toFixed(2);
    globalEl.textContent = `Falco Globale: ${globalFalco}`;
  }

  updateGlobalValue();

  const map = L.map("map").setView([20, 0], 2);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 5,
    minZoom: 2,
    noWrap: true
  }).addTo(map);

  for (let code in globalData.countries) {
    const c = globalData.countries[code];
    const color = c.local > 23 ? "green" : c.local > 21 ? "orange" : "red";
    const marker = L.circleMarker([c.lat, c.lon], {
      radius: 6,
      fillColor: color,
      color: "#000",
      weight: 1,
      fillOpacity: 0.7
    }).addTo(map);
    marker.on("click", () => {
      const total = ((globalData.gold + globalData.btc + c.local) / 3).toFixed(2);
      globalEl.textContent = `Falco per ${c.name}: ${total}`;
      countryInfoEl.innerHTML = `
        <strong>Terza Gamba Locale:</strong> ${c.local}<br>
        <strong>Commento:</strong> ${c.comment}<br>
        <a href="${c.source}" target="_blank">Fonte</a>
      `;
      commentBox.innerHTML = `<p>Approfondisci su <strong>${c.name}</strong> cliccando la fonte.</p>`;
    });
  }
});
