var output = document.getElementById("output");


var request = new XMLHttpRequest();
request.open('GET', 'json/categories.json');
request.send();
request.addEventListener("load", readyLoad);

var newRequest = new XMLHttpRequest();
newRequest.open('GET', 'json/products.json');
newRequest.send();
newRequest.addEventListener("load", readyLoad);

function readyLoad() {

var categories = JSON.parse(this.responseText);
var catData = "";

var products = JSON.parse(this.responseText);
var prodData = "";

console.log(products)

var currentCat;
var currentProd;

for (i = 0; i < categories.categories.length; i++) {
  currentCat = categories.categories[i];
  console.log(currentCat);
  catData += "<div class='crap'>";
    catData +=`<h1>${currentCat.name}</h1>`;
    catData += `${products.name}`
  catData += "</div>"
}


  output.innerHTML = catData;

}
















