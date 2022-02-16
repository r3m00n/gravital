const img = document.getElementById("headerpic");
const firstPic = document.getElementById("firstPic");
const secondPic = document.getElementById("secondPic");

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // console.log(scrollPos);
  if (scrollPos > 299 && scrollPos < 1000) {
    img.style.transform = "scale(" + 700 / (scrollPos + 400) + " )";
  }

  if (window.innerWidth > 800) {
    if (scrollPos > 800) firstPic.classList.add("slideinleft");
    if (scrollPos > 1400) secondPic.classList.add("slideinright");
  }
}

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
