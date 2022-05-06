const simple = document.getElementById('simple');
const hex = document.getElementById('hex');
const wrapper = document.querySelector("main");
const colorName = document.querySelector("span");
const btn = document.querySelector("button");
let isHexActive = false;
let isSimpleActive = true;


const simpleColor = ['pink', 'red', 'lightblue', 'black', 'salmon', 'green', 'yellow'];
const colors = ['#8d0303', '#cf3d3d', '#f06d09', '#f0cd09', '#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

simple.addEventListener('click', function simpleClick() {
  simple.classList.add('active');
  hex.classList.remove('active');
  isHexActive = false;
  isSimpleActive = true;
});
hex.addEventListener('click', function hexClick() {
  hex.classList.add('active');
  simple.classList.remove('active');
  isHexActive = true;
  isSimpleActive = false;
});

function changeColor() {
  if (isSimpleActive == true) {
    const i = Math.floor(Math.random() * simpleColor.length)
    const color = simpleColor[i];
    wrapper.style.backgroundColor = color;
    colorName.innerText = color;
  } else if (isHexActive == true) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    wrapper.style.backgroundColor = randomColor;
    colorName.innerText = randomColor;
  }
}

btn.addEventListener('click', changeColor)