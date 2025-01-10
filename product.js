
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
 
const product = [
{
  name: "Drink Limited",
  price: 10,
},
{
  name: "Matcha Mint",
  price: 10,
},
{
  name: "Energizer Limited",
  price: 15,
},
{
  name: "Canrich Force",
  price: 15,
},
{
  name: "Matcha Mint",
  price: 10,
},
];




function addToCart() {
  const cartList = document.getElementById("cart-list");
  const listItem = document.createElement("li");
  listItem.textContent = `${product.name} - $${product.price}`;
  cartList.appendChild(listItem);

  
}
