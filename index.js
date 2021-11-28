//navar button
const btn = document.querySelector(".container header .hamburgerBtn img");
const navbar = document.querySelector(".container .navbar ul");

btn.addEventListener("click", function () {
  if (navbar.style.right == "-300px") {
    navbar.style.right = "0";
    btn.src = "gambar/Barber_Shop_img/close.png";
  } else {
    navbar.style.right = "-300px";
    btn.src = "gambar/Barber_Shop_img/menu.png";
  }
});

//auto slide
let i = 0;
let images = [];
let time = 3000;

//image list
images[0] = "gambar/landingpage/1.jpg";
images[1] = "gambar/landingpage/2.jpg";
images[2] = "gambar/landingpage/3.jpg";
images[3] = "gambar/landingpage/4.jpg";
images[4] = "gambar/landingpage/5.jpg";

//change image
function changeImage() {
  document.press.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", time);
}
window.onload = changeImage;
