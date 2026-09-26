const projecten = [
  {
    titel: "Project 1: Persoonlijke portfolio website",
    beschrijving: "Een responsieve portfolio-site met meerdere pagina's, duidelijke navigatie en een stijlvolle, toegankelijke opzet",
     categorie: "portfolio",
 labels: ["HTML5", "CSS3", "Git"]
  },
  {
    titel: "Project 2: HTML & CSS basis",
    beschrijving: "Eerste opdracht voor het vak WPFW. Gericht op taken binnen HTML en CSS.",
    categorie: "basis",
    labels: ["HTML5", "CSS3", "Git"]
  }
];

const lijst = document.querySelector("#projecten-lijst");
const filter = document.querySelector("#project-filter");

function toonProjecten(categorie) {
  lijst.replaceChildren();

  projecten.forEach((project) => {
    if (categorie !== "alle" && project.categorie !== categorie) {
      return;
    }

    const artikel = document.createElement("article");

    const titel = document.createElement("h3");
    titel.textContent = project.titel;
    artikel.appendChild(titel);

    const beschrijving = document.createElement("p");
    beschrijving.textContent = project.beschrijving;
    artikel.appendChild(beschrijving);

    const labels = document.createElement("p");
    labels.className = "tags";

    project.labels.forEach((label) => {
      const span = document.createElement("span");
      span.textContent = `#${label}`;
      labels.appendChild(span);
    });

    artikel.appendChild(labels);
    lijst.appendChild(artikel);
  });
}

toonProjecten(filter.value);

filter.addEventListener("change", () => {
  toonProjecten(filter.value);
});