var iife = (function () {
var output = document.getElementById('output');

var categoryRequest = new XMLHttpRequest();
categoryRequest.open('GET', 'json/categories.json');
categoryRequest.send();
categoryRequest.addEventListener('load', categoryLoad)

var productRequest = new XMLHttpRequest();
productRequest.open('GET', 'json/products.json');
productRequest.addEventListener('load', productLoad)

var catData;
var prodData;

function categoryLoad() {
  catData = JSON.parse(this.responseText).categories;
  productRequest.send();
}

function productLoad() {
  prodData = JSON.parse(this.responseText).products;
  parseToDom();
}

function parseToDom(discountedSeason) {
  output.innerHTML = "";

  for (i = 0; i < catData.length; i++) {
    currentCat = catData[i];
    var catDataHtml = '<h3>' + 'Department:' + '</h3>'
    catDataHtml += `<div id='currentCat${currentCat.id}'><h1>${currentCat.name}</h1>`;

    var productsMatchingCurrentCategory = prodData.filter(function(el) {
      return currentCat.id === el.category_id;
    })

    for (j = 0; j < productsMatchingCurrentCategory.length; j++) {
      currentProd = productsMatchingCurrentCategory[j];
      catDataHtml += `<div>${currentProd.name}`;
      if (currentCat.season_discount === discountedSeason) {
      catDataHtml += `<div>${(currentProd.price - (currentProd.price*currentCat.discount)).toFixed(2)}`;
      } else {
      catDataHtml += `<div>${currentProd.price}`;
      }
      catDataHtml += `</div>`
      catDataHtml += `</div>`
    }
    catDataHtml += `</div>`

    output.innerHTML += catDataHtml;
  }
}

document.getElementById('winter').addEventListener('change', winterFunction)
document.getElementById('spring').addEventListener('change', springFunction)
document.getElementById('autumn').addEventListener('change', autumnFunction)

function autumnFunction() {
  parseToDom('Autumn');
}

function winterFunction() {
  parseToDom('Winter');
}

function springFunction() {
  parseToDom('Spring');
}
}
)();