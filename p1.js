//bootstrap importing
import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))

// Get the navbar and the sections
const navbar = document.querySelector("nav");
const sections = document.querySelectorAll("section");

// Create an array of section IDs
const sectionIds = [
  "home",
  "about",
  "contact",
  "portfolio",
  "blog",
];

// Add an event listener to the navbar
navbar.addEventListener("click", function(event) {

  // Get the clicked element
  const clickedElement = event.target;

  // If the clicked element is a link
  if (clickedElement.tagName === "A") {

    // Get the id of the section that the link is linked to
    const sectionId = clickedElement.getAttribute("href").split("#")[1];

    // Scroll down to the section
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }
});