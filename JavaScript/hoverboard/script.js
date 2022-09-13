const constainer = document.getElementById("container");
const colors = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "orange",
  "purple",
  "red",
  "silver",
  "teal",
  "white",
  "yellow",
];

const SQUARES_NUM = 500;

for (let i = 0; i < SQUARES_NUM; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  constainer.appendChild(square);
}

const setColor = (element) => {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px black";
};

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
