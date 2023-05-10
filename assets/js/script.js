/*==================== Loader ====================*/
var loader = document.querySelector(".section-loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/* ============= Scroll Back To Top Button ============= */
var mybutton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ======== Open Header Search Box ======== */
function openSearch() {
  document.getElementById("headerSearchOverlay").style.top = "0%";
}

function closeSearch() {
  document.getElementById("headerSearchOverlay").style.top = "-100%";
}

/* ================ Pricing Modal ================ */
var PricingModal = document.querySelector(".pricing-modal");
var trigger = document.querySelector(".current-plan-trigger");
var pricingCloseButton = document.querySelector(".pricing-modal-close");

function toggleModal() {
  PricingModal.classList.toggle("active");
}

function windowOnClick(event) {
  if (event.target === PricingModal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
pricingCloseButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/* ================ Pricing Tab ================ */
function openTab(evt, contentName) {
  var i, pricingTabcontent, pricingTabLinks;
  pricingTabcontent = document.getElementsByClassName("pricing-tabcontent");
  for (i = 0; i < pricingTabcontent.length; i++) {
    pricingTabcontent[i].style.display = "none";
  }
  pricingTabLinks = document.getElementsByClassName("pricing-tablinks");
  for (i = 0; i < pricingTabLinks.length; i++) {
    pricingTabLinks[i].className = pricingTabLinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

