document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
})
})
})


let mybutton = document.getElementById("topBtn")

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
mybutton.style.display = "block"
} else {
mybutton.style.display = "none"
}
}

function topFunction() {
window.scrollTo({top: 0, behavior: 'smooth'})
}
function openDialog() {
  document.getElementById("dialog").style.display = "block";
}

function closeDialog() {
  document.getElementById("dialog").style.display = "none";
}

function addRec() {

  var text = document.getElementById("newRec").value;

  if(text.trim() == "") {
    alert("Please write something");
    return;
  }

  var div = document.getElementById("rec-list");

  var p = document.createElement("p");

  p.innerHTML = text;

  div.appendChild(p);

  document.getElementById("newRec").value = "";

  document.getElementById("dialog").style.display = "none";

  document.getElementById("popup").style.display = "block";

  setTimeout(function() {
    document.getElementById("popup").style.display = "none";
  }, 2000);

}
