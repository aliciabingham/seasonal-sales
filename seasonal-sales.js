function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeWhenChunksArrive () {
}

function executeThisCodeAfterFileLoaded () {

var categories = {};
var products = {};

  var contentEl = document.getElementById("output")

   var prodData = "";
   var currentProd;

products = JSON.parse(this.responseText);

console.log(categories)
console.log(products)

for (j=0; j < products.length; j++){
  currentProd = products.products[j];

  prodData += "div class='current-product'>" + "Product:";
    prodData += `<h1>${currentProd.name}</h1>`;
  prodData += "</div>"

  console.log(prodData);
  contentEl.innerHTML = prodData;
}
   var catData = "";
   var currentCat;
categories = JSON.parse(this.responseText);

  for (var i = 0; i < categories.length; i++) {
    currentCat = categories.categories[i];

    catData += "<div class='current-category'>" + "<h1>" + "Department: " + "</h1>";
      catData += `<h1>${currentCat.name}</h1>`;
      catData += "<div class='department'>";
      catData += "</div>";
    catData += "</div>";


  };

  console.log(catData);
  contentEl.innerHTML += catData;
}


var myRequest = new XMLHttpRequest();
// console.log("myRequest", myRequest);

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
myRequest.addEventListener("error", executeThisCodeIfXHRFails)
myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
myRequest.open("GET", "categories.json")
myRequest.send();

var myNewRequest = new XMLHttpRequest();

myNewRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myNewRequest.addEventListener("error", executeThisCodeIfXHRFails);
myNewRequest.addEventListener("progress", executeThisCodeWhenChunksArrive);
myNewRequest.open("GET", "products.json")
myNewRequest.send();


    // var domains = [
    // 'host1',
    // 'host2'
    // ];

    // var requests = new Array();

    // for ( i in domains )
    // {
    //     requests[i]=new request(domains[i]);
    // }

    // function request(site)
    // {
    //     var url = 'get_remote_status.php?host='+site;
    //     var queues = {};
    //     http_request = new XMLHttpRequest();
    //     http_request.open("GET", url, true, 'username', 'password');
    //     http_request.onreadystatechange = function () {
    //         var done = 4, ok = 200;
    //         if (http_request.readyState == done && http_request.status == ok) {
    //             queues = JSON.parse(http_request.responseText);
    //             var queuesDiv = document.getElementById('queues');
    //             print_queues(queues, queuesDiv, site);
    //         }
    //     };
    //     http_request.send(null);
    // }





















