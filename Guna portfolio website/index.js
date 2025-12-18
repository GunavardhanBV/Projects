
  document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");

  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
  document.body.style.overflow = "auto"; // enable scroll
}
window.addEventListener("pageshow", function () {
  document.getElementById("mobileMenu").classList.remove("active");
  document.body.style.overflow = "auto";
});
document.querySelectorAll(".menu a").forEach(link => {
  link.classList.remove("active");
});







/*certificate*/

function openCert(btn){
    const imgSrc = btn.parentElement.querySelector(".img2").src;
    document.getElementById("certImg").src = imgSrc;
    document.getElementById("certModal").style.display = "flex";
}

function closeCert(){
    document.getElementById("certModal").style.display = "none";
}

function filterCert(type){

    const cards = document.querySelectorAll(".img1");
    const buttons = document.querySelectorAll(".filter-btn");

    /* Button active state */
    buttons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="filterCert('${type}')"]`)
        .classList.add("active");

    /* Filter cards */
    cards.forEach(card => {
        if(card.classList.contains(type)){
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
}

/* Default: show Tech certificates */
document.addEventListener("DOMContentLoaded", () => {
    filterCert("tech");
});



function openMail() {
  window.location.href =
    "mailto:boddulaguna@gmail.com?subject=Contact from portfolio Website&body=Hello, I want to contact you";
}





function openMap() {
  window.open(
    "https://maps.app.goo.gl/XmPm6nJof1HM9Eyw9",
    "_blank"
  );
}




