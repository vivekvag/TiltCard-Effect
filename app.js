//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

  // Calculate gradient angle based on axis values
  let gradientAngle = Math.atan2(yAxis, xAxis) * (180 / Math.PI);
  card.style.setProperty("--gradient-angle", `${gradientAngle}deg`);

  // Calculate normalized position for the gradient colors
  let cornerX = (xAxis + 25) / 50; // Normalize xAxis to [0, 1]
  let cornerY = (yAxis + 25) / 50; // Normalize yAxis to [0, 1]

  // Calculate color stops for gradient
  let blueStop = cornerX * 100; // Blue goes from 0% to 100%
  let redStop = 100 - blueStop; // Red goes from 100% to 0%

  // Update gradient color with dynamic color stops
  let gradientColor = `linear-gradient(${gradientAngle}deg, var(--blue-color) ${blueStop}%, var(--red-color) ${redStop}%)`;

  card.style.setProperty("--gradient-color", gradientColor);
});


//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
