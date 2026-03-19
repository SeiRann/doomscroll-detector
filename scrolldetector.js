document.body.style.border = "5px solid red";

let windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  let scrollHeight = window.scrollY;

  console.log(scrollHeight);
  console.log(window.innerHeight);
});

window.addEventListener("resize", () => {
  windowHeight = window.innerHeight;
  console.log("The window height is ", windowHeight);
});
