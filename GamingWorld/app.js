const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const movieList = [
  "videos/hero-1.mp4",
  "videos/hero-2.mp4",
  "videos/hero-3.mp4",
  "videos/hero-4.mp4",
];

let index = 0;
nextButton.addEventListener("click", function () {
  index++;
  video.src = movieList[index];
  if (index === 3) {
    index = -1;
  }
});


// Custom Cursor -----------------
const cursor = document.querySelector(".cursor");
var timeout;
//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
cursor.style.left = `${e.clientX}px`;
cursor.style.top = `${e.clientY}px`;
  cursor.style.display = "block";

  //   cursor effect on mousestop
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearInterval(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
