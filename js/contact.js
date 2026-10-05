const formulier = document.querySelector("#contactformulier");

const naam = document.querySelector("#naam");
const naamFout = document.querySelector("#naam-fout");

const email = document.querySelector("#email");
const emailFout = document.querySelector("#email-fout");

const bericht = document.querySelector("#bericht");
const berichtFout = document.querySelector("#bericht-fout");

const status = document.querySelector("#formulier-status");

function controleerFormulier(event) {
  event.preventDefault();

  if (naam.value.trim() === "") {
    naamFout.textContent = "Vul je naam in.";
    naam.setAttribute("aria-invalid", "true");
  } else {
    naamFout.textContent = "";
    naam.removeAttribute("aria-invalid");
  }
  if (email.value.trim() === "") {
  emailFout.textContent = "Vul je e-mailadres in.";
  email.setAttribute("aria-invalid", "true");
} else if (!email.checkValidity()) {
  emailFout.textContent = "Vul een geldig e-mailadres in.";
  email.setAttribute("aria-invalid", "true");
} else {
  emailFout.textContent = "";
  email.removeAttribute("aria-invalid");
}

if (bericht.value.trim().length < 10) {
  berichtFout.textContent = "Schrijf een bericht van minimaal 10 tekens.";
  bericht.setAttribute("aria-invalid", "true");
} else {
  berichtFout.textContent = "";
  bericht.removeAttribute("aria-invalid");
}
if (
  naam.value.trim() !== "" &&
  email.value.trim() !== "" &&
  email.checkValidity() &&
  bericht.value.trim().length >= 10
) {
  status.textContent = "Je bericht is verstuurd.";
} else {
  status.textContent = "";
}
}
formulier.addEventListener("submit", controleerFormulier);