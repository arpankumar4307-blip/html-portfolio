function addRec() {

var text = document.getElementById("newRec").value

var div = document.getElementById("rec-list")

var p = document.createElement("p")

p.innerHTML = text

div.appendChild(p)

document.getElementById("popup").style.display = "block"

setTimeout(function() {
document.getElementById("popup").style.display = "none"
}, 2000)

}
