const knop = document.querySelector("#eerste-blog-knop");
const tekst = document.querySelector("#eerste-blog-tekst");

function wisselBlogbericht() {
  tekst.hidden = !tekst.hidden;
  knop.textContent = tekst.hidden ? "Toon bericht" : "Verberg bericht";
  knop.setAttribute("aria-expanded", String(!tekst.hidden));
}

knop.addEventListener("click", wisselBlogbericht);