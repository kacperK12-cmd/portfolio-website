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
  },
    {
    titel: "Project 3: Project & PD",
    beschrijving: "Ik heb vandaag geleerd hoe ik mij kan voorbereiden en een planning kan maken waarin ik rekening houd met werk en andere behoeften.",
    categorie: "pd",
    labels: ["Plannen", "Voorbereiden"]
  },
    {
    titel: "Project 4: Portfolio uitbreiden",
    beschrijving: "Een uitbreiding van mijn portfolio met nieuwe projecten en blogberichten om mijn ontwikkeling tijdens de opleiding te laten zien.",
    categorie: "portfolio",
    labels: ["HTML5", "CSS3", "Content"]
  },
  {
    titel: "Project 5: Portfolio verbeteren",
    beschrijving: "Een verbetering van mijn portfolio op basis van feedback, met duidelijkere foutmeldingen, meer ruimte rondom het projectenfilter en een duidelijkere blogknop.",
    categorie: "portfolio",
    labels: ["CSS3", "Toegankelijkheid", "Feedback"]
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