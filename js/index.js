/* Parts of this code, specifically the circular balls, were adapted from
a tutorial I followed by "Chris Courses," url = https://www.youtube.com/watch?v=789weryntzM&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=7,
i followed the tutorial, and made some modifications. */

'use strict';



let catOne = document.querySelector('.cat_image');
catOne .addEventListener('click', function (e) {
  responsiveVoice.speak("meooooooooow");
});

let catTwo = document.querySelector('.cat_image2');
catTwo.addEventListener('click', function (e) {
  responsiveVoice.speak("meooooooooow", "Norwegian Female");
});

let catThree = document.querySelector('.cat_image3');
catThree.addEventListener('click', function (e) {
  responsiveVoice.speak("meooooooooow", "Italian Female");
});

let catFour = document.querySelector('.cat_image4');
catFour.addEventListener('click', function (e) {
  responsiveVoice.speak("meooooooooow", "US English Male");
});

let catFive = document.querySelector('.cat_image5');
catFive.addEventListener('click', function (e) {
  responsiveVoice.speak("meooooooooow", "Japanese Female");
});

let catSix = document.querySelector('.cat_image6');
catSix.addEventListener('click', function (e) {
  responsiveVoice.speak("meooooooooow", "French Female");
});


let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
let mouse = { x: undefined, y: undefined }
let colorArray = [
  "#C6D8AF", "#DBD8B3", '#FCC8B2', '#EFA48B', '#FFFFFF', "#6A7F6D", "#685369", "#6A7F6D", "#577F5E", "#A9CCAF"];


window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

})

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.radians = Math.random() * Math.PI * 2;
  this.color = colorArray[Math.ceil(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();

  }

  // create update function for each individual circle
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let circleArray = [];
for (let i = 0; i < 4000; i++) {
  let radius = Math.random() + 1.5;
  let diameter = radius * 2;
  let x = Math.random() * (innerWidth - diameter) + radius;
  let y = Math.random() * (innerHeight - diameter) + radius;
  let dx = (Math.random() - 0.5) * 10;
  let dy = (Math.random() - 0.5) * 10;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
