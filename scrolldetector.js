document.body.style.border = "5px solid red";

let windowHeight = window.innerHeight;
let PHUlimit = 10;
let scrolledPHU = 0;

// The detector is using page height units (PHU) its the amount that was scrolled from Y 0 to the visible height of the page
// So say your window is 500 px in height and you scrolled from 0 to 500 that means you scrolled one PHU
// The users sets a PHU limit, as to what amount of PHUs he can scroll until having a pop up showing he has been scrolling more than the limit
// This is meant to stop you from scrolling too much
// I can introduce a storage for the extension as to be able to either restrict to only one website for a certain amount of time or to restrict all sites(with exception) for a certain amount of PHUs

window.addEventListener("scroll", () => {
  let scrollHeight = window.scrollY;

  // console.log(scrollHeight);
  // console.log(window.innerHeight);

  if (scrollHeight > windowHeight) {
    scrolledPHU = Math.floor(scrollHeight / windowHeight);
    console.log(scrolledPHU);
  }
  if (scrolledPHU >= PHUlimit) {
    window.location.href = "https://www.google.com";
  }
});

window.addEventListener("resize", () => {
  windowHeight = window.innerHeight;
  console.log("The window height is ", windowHeight);
});
