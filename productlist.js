const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

const url = "https://kea-alt-del.dk/t7/api/products?season=" + season;
console.log(url);

fetch(url)
.then(function(res) {
    return res.json();
})
.then(function(data){
    handleProductList(data);
})

function handleProductList(data){
    console.log(data);
    data.forEach(showProduct);

}
/* <article class="smallProduct">
        <a href="product.html">
        <img src="1165.webp" alt="Mean Team India Cricket Jersey"></a>
        <h3>Mean Team India Cricket Jersey</h3>
        <p class="subtitle"> Summer Jersey</p>
        <p class="price"><span>Before-</span>DKK 2495,-</p>
        <div class="discounted">
            <p>Now DKK 1372,-</p>
            <p>-45%</p>
        </div>
        <a href="product.html">Read More</a>
  </article>*/

function showProduct(product) {
    console.log(product);
    //soldOut onSale

    //grab the template
    
    const template = document.querySelector("#smallProductTemplate").content;
   //clone it
   const copy =template.cloneNode(true);

   //change the content
   copy.querySelector("a").setAttribute("href","product.html?id=" + product.id);
    copy.querySelector(".subtitle").textContent = `${product.articletype} | ${product.brandname}`; 
    copy.querySelector("h3").textContent = product.productdisplayname;

if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
}
if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    /*<div class="discounted">
            <p>Now DKK 1372,-</p>
            <p>-45%</p>
        </div>*/

    copy.querySelector(".discounted p").textContent = product.price / product.discount;

}
// price products 

/*const discountamount = product.discounted / 100 * product.price;
const newpriceamount = product.price - discountamount;
const newprice = Math.round(newpriceamount);*/




copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
copy.querySelector("img").alt=product.productdisplayname;

// debugger;
   //grab parent
    const parent = document.querySelector("main");
    //append 
    parent.appendChild(copy);

    
}