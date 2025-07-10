
// script.js aggiornato per mostrare Falco al click su paesi con codice ISO reale
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

  // Mappa interattiva
  const svg = document.querySelector("svg");
  if (!svg) return;

  svg.addEventListener("click", function (e) {
    const countryCode = e.target.id;
    if (!globalData.countries[countryCode]) {
      countryInfoEl.innerHTML = "";
      commentBox.innerHTML = "";
      return;
    }

    const data = globalData.countries[countryCode];
    const total = ((globalData.gold + globalData.btc + data.local) / 3).toFixed(2);

    globalEl.textContent = `Falco per ${data.name}: ${total}`;

    countryInfoEl.innerHTML = `
      <strong>Terza Gamba Locale:</strong> ${data.local} <br>
      <strong>Commento:</strong> ${data.comment}<br>
      <a href="${data.source}" target="_blank">Fonte</a>
    `;

    commentBox.innerHTML = `<p>Clicca sulla fonte per vedere i dettagli completi su <strong>${data.name}</strong>.</p>`;
  });
});
