const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


const url = "https://kea-alt-del.dk/t7/api/products/" + id;


//fetch the data
fetch(url)
.then((res)=>res.json())
.then((data)=>showProduct(data));

//populate the page 
function showProduct(product) {
    console.log(product);
    document.querySelector(".breadcrumbs .season").textContent = product.season;
    document.querySelector(".breadcrumbs .productname").textContent = product.productdisplayname;
    document.querySelector("img.productimage").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector("img.productimage").alt=product.productdisplayname;
    document.querySelector("h3").textcontent = product.productdisplayname;
}



