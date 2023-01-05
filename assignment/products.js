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

// ///////////////////////////////////////////

function show(data) {
    const carddiv = document.getElementById("cardsdiv");
    console.log(carddiv)
    carddiv.innerHTML = "";
    var div = "";
    var details = data.map((products) => {
        div += '<li class="card" id="cards">';
        div += ' <div class="imgdiv">'
        div += ' <img class="cardimg" src='+products.image+' alt="">';
        div += ' </div>';
        div += ' <div class="data"><div class="datatable">';
        div += ' <table>';
        div += ' <tr>';
        div += ' <th class="productcatagory"> '+products.category+'</th>';
        div += ' </tr>';
        div += ' <tr>';
        div += ' <td class="producttitle">'+products.title+'</td>';
        div += ' </tr>';
        div += ' </table>';
        div += ' </div>';
        div += ' <div class="price"> $'+products.price+'</div></div>';
        div += '</li>';
    });
    carddiv.innerHTML += div;
   
    searchList();
}
function searchList() {

    var input = document.getElementById("input");
    var filter = input.value.toUpperCase();
    var cards = document.getElementById("cardsdiv");
    const carddata = cards.getElementsByClassName('card');
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