window.onload = function () {
  const bird = document.getElementById("bird");
  const logo = document.getElementById("logo");
  const swoosh = document.getElementById("swoosh");

  // Play sound
  swoosh.play();

  // Bird Flight Spiral
  let x = -100;
  let y = window.innerHeight / 2;
  let angle = 0;

  function animateBird() {
    if (x < window.innerWidth + 100) {
      x += 10;                   // Speed
      angle += 0.3;              // Spiral curve
      y += Math.sin(angle) * 5;

      bird.style.left = x + "px";
      bird.style.top = y + "px";
      bird.style.transform = `rotate(${Math.sin(angle) * 15}deg)`; // Flap effect

      requestAnimationFrame(animateBird);
    } else {
      bird.style.opacity = "0";
      logo.style.opacity = 1;
    }
  }

  animateBird();
};
const tagline = "Campus Meets Comfort";
let i = 0;

function typeWriter() {
  if (i < tagline.length) {
    document.getElementById("tagline-text").innerHTML += tagline.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// After logo shows:
logo.style.opacity = 1;
typeWriter();
