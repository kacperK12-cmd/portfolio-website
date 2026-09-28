const weerResultaat = document.querySelector("#weer-resultaat");

async function laadWeer() {
  weerResultaat.textContent = "Gegevens laden...";

  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.08&longitude=4.31&current=temperature_2m";
    const antwoord = await fetch(url);

    if (!antwoord.ok) {
      throw new Error("API-verzoek mislukt");
    }

    const gegevens = await antwoord.json();
    const temperatuur = gegevens.current.temperature_2m;

    weerResultaat.replaceChildren();

    const tekst = document.createElement("p");
    tekst.textContent = `Het is nu ongeveer ${temperatuur} °C in Den Haag.`;
    weerResultaat.appendChild(tekst);
  } catch (fout) {
    weerResultaat.textContent = "Het weer kan nu niet worden geladen.";
    console.error(fout);
  }
}

laadWeer();