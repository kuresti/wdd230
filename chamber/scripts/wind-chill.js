function updateWindChill() {
const temp1 = document.querySelector(".temp");
const speed1 = document.querySelector(".wind");
const chill = document.querySelector(".wind-chill");

let temp2 = parseInt(temp1.textContent);
let speed2 = parseInt(speed1.textContent);

let factor = 0;

if (temp2 <= 50 && speed2 > 3) {
  let factor =
    35.74 +
    0.6215 * temp2 -
    35.75 * speed2 ** 0.16 +
    0.4275 * temp2 * speed2 ** 0.16;

  factor = Math.round(factor).toString();
  chill.innerText = factor;
} else {
  chill.innerText = "NA";
}
}
