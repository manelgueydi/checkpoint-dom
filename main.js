var total = document.getElementById("total");
console.log(total);

var plsbtns = document.getElementsByClassName("btnplus");
for (let btn of plsbtns) {
  btn.addEventListener("click", function () {
    let itemName = btn.getAttribute("name");
    let price = document.getElementById(itemName + "_price").innerHTML;
    let qty = document.getElementById(itemName + "_qte");

    qty.innerHTML++;
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
  });
}
var minusbtn = document.getElementsByClassName("btn1minus");
console.log(minusbtn);

for (let btn of minusbtn) {
  btn.addEventListener("click", function () {
    let itemName = btn.getAttribute("name");

    let price = document.getElementById(itemName + "_price").innerHTML;

    let qty = document.getElementById(itemName + "_qte");
    console.log(qty);
    if (qty.innerHTML > 0) {
      qty.innerHTML--;

      total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
    } else {
      alert("Quantity cannot be negative");
    }
  });
}
let hearts = document.querySelectorAll(".heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.getAttribute("fill") === "currentColor") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "currentColor");
    }
  });
}
let delbtn = document.getElementsByClassName("btndelete");

for (let btn of delbtn) {
  btn.addEventListener("click", function () {
    console.log(btn);
    let product = btn.parentElement;
    product.parentElement.removeChild(product);
  });
}
