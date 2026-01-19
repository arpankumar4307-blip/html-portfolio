/* Smooth Scrolling for Navbar Links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* Back to Top Button Functionality */
let mybutton = document.getElementById("topBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* Recommendation Dialog Functions */
function openDialog() {
  document.getElementById("dialog").style.display = "block";
}

function closeDialog() {
  document.getElementById("dialog").style.display = "none";
}


/* Add New Recommendation Function */
function addRec() {

  var text = document.getElementById("newRec").value;

  if (text.trim() == "") {
    alert("Please write something before submitting");
    return;
  }

  var div = document.getElementById("rec-list");

  var p = document.createElement("p");

  p.innerHTML = text;

  div.appendChild(p);

  document.getElementById("newRec").value = "";

  document.getElementById("dialog").style.display = "none";

  /* Show Popup Message */
  var popup = document.getElementById("popup");

  popup.style.display = "block";

  setTimeout(function() {
    popup.style.display = "none";
  }, 2000);

}
