/* ================ LOgin Tab ================ */
function openForm(evt, formName) {
  var i, formTabcontent, formTabLinks;
  formTabcontent = document.getElementsByClassName("form-tabcontent");
  for (i = 0; i < formTabcontent.length; i++) {
    formTabcontent[i].style.display = "none";
  }
  formTabLinks = document.getElementsByClassName("form-tablinks");
  for (i = 0; i < formTabLinks.length; i++) {
    formTabLinks[i].className = formTabLinks[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultFormOpen").click();

/* =========== Register Password Show/Hide JS =========== */
function hidePassIcon() {
  var x = document.getElementById("re-ppassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

/* =========== Login Password Show/Hide JS =========== */
function hidePassIcon2() {
  var x = document.getElementById("lo-ppassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
