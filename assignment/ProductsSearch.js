const api_url =
        "https://fakestoreapi.com/products";

    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        show(data);
    }
    // Calling that async function
    getapi(api_url);
    function show(data){
        const carddiv = document.getElementById("productspage");
        carddiv.innerHTML = "";
        var div = "";
        var details = data.map((products) => {
            div += '<div class="productscard" >';
            div += '<div class="cardimgdiv"><img class= "cardimg" src="'+products.image+'"></div>';
            div += '<span  class="productname">'+products.title+'</span>';
            div += '<span class ="price">'+products.price+'<span>';
            div += '</div>'
        });
        carddiv.innerHTML += div;
        searchList();
    }
    function searchList() {

var input = document.getElementById("input");
var filter = input.value.toUpperCase();
var cards = document.getElementById("productspage");
const carddata = cards.getElementsByClassName('productscard');
// Array.from(tableItems).filter((row)=>{ if (row)});
console.log(carddata);
    var Output = Array.from(carddata).filter((data) => {
    // let i = data.className;
    // console.log(i);
    if (data) {
        txtValue = data.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // document.getElementsByTagName("td")[data.rowIndex].style.display = "";
            console.log(data);
            data.style.display="";
        } else {
            data.style.display = "none";
        }
    }
    
})

}