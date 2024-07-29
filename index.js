const containerElement = document.querySelector(".container");

const careers = [
  "Student",
  "Frontend Developer",
  "Canva Designer",
  "Figma Designer",
  "Passionate Leader",
];

let careerIndex = 0;

let characterIndex = 0;
updateText();

function updateText() {
  characterIndex++;
  containerElement.innerHTML = `
     <h1> I am ${
       careers[careerIndex].slice(0, 1) === "P" ? "a\t" : "a\t"
     }${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
