// script.js
let users = [];

// SHOW registration page
function showRegister(){
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registerPage").style.display = "flex";
}

// SHOW login page
function showLogin(){
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
}

// REGISTER function
function register(){
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPassword").value;
  let confirm = document.getElementById("regConfirm").value;

  if(name==="" || email==="" || pass==="" || confirm===""){
    alert("Fill all fields");
    return;
  }

  if(pass !== confirm){
    alert("Passwords do not match");
    return;
  }

  users.push({name,email,pass});
  alert("Registration successful! Please login.");
  showLogin();
}

// LOGIN function
function login(){
  let email=document.getElementById("email").value;
  let pass=document.getElementById("password").value;

  if(email===""||pass===""){
    alert("Fill all fields");
    return;
  }

  let userExists = users.find(u => u.email === email && u.pass === pass);
  if(!userExists){
    alert("Invalid credentials. Please register first.");
    return;
  }

  document.getElementById("loginPage").style.display="none";
  document.getElementById("homePage").style.display="block";
  displayProducts(products);
}

// LOGOUT
function logout(){
  document.getElementById("homePage").style.display="none";
  document.getElementById("loginPage").style.display="flex";
}

// PRODUCTS (20 items)
let products=[
{name:"Phone",price:15000,img:"https://samsungmagazine.eu/wp-content/uploads/2024/09/S25-Ultra-koncept-1.jpeg"},
{name:"Laptop",price:65000,img:"https://m.media-amazon.com/images/I/71wKJVtV-+L._AC_.jpg"},
{name:"Headphones",price:2500,img:"https://cdn.pixabay.com/photo/2020/04/19/16/33/headphones-5064411_1280.jpg"},
{name:"Watch",price:5000,img:"https://tse1.mm.bing.net/th/id/OIP.S9eMyQXTqVTUENN_Dikz1QHaHa?pid=Api&P=0&h=180"},
{name:"Shoes",price:3500,img:"http://media.gq.com/photos/6581f2a22feb50f5002fa196/master/pass/athletic-shoes-art.jpg"},
{name:"Camera",price:45000,img:"https://www.bhphotovideo.com/images/images1500x1500/canon_eos_r50_with_rf_s_1748812.jpg"},
{name:"TV",price:40000,img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323722ld.jpg"},
{name:"Keyboard",price:1200,img:"https://dockuniverse.com/wp-content/uploads/2025/02/asus_rog_gaming_keyboard-2.jpg"},
{name:"Mouse",price:800,img:"https://tse2.mm.bing.net/th/id/OIP.0-KIptBohQtxzXbKAKqUFAHaFM?pid=Api&P=0&h=180"},
{name:"Speaker",price:3000,img:"https://tse1.mm.bing.net/th/id/OIP.FRM3dQtuJQkykmuYaPVOrAHaHa?pid=Api&P=0&h=180"},
{name:"Bag",price:1800,img:"https://images-na.ssl-images-amazon.com/images/I/91kh7Y9VYNL._AC_SL1500_.jpg"},
{name:"Bottle",price:500,img:"https://m.media-amazon.com/images/I/71AHYqOXBCL._AC_SL1500_.jpg"},
{name:"Chair",price:7000,img:"https://i5.walmartimages.com/asr/675f8aef-2017-4d55-9d60-f2e7ffa230a0_1.ce7712c3396d100417257f33b953c1d6.jpeg"},
{name:"Table",price:12000,img:"https://www.propertygeek.in/wp-content/uploads/2024/08/Saraswati-Wooden-Dining-Table.webp"},
{name:"Projector",price:30000,img:"https://m.media-amazon.com/images/I/81ApqbrT5XL._AC_.jpg"},
{name:"Fan",price:2500,img:"https://pngimg.com/uploads/fan/fan_PNG14471.png"},
{name:"AC",price:42000,img:"https://img.staticmb.com/mbcontent/images/uploads/2023/3/Split-air-conditioner.jpg"},
{name:"Iron",price:1500,img:"https://images-na.ssl-images-amazon.com/images/G/02/aplusautomation/vendorimages/015501d3-f5b4-4bad-8394-d25290380b0b.png._CB314561615_.png"},
{name:"Printer",price:9000,img:"https://m.media-amazon.com/images/I/71y84TN3gkL._AC_.jpg"},
{name:"Router",price:2200,img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6377/6377908ld.jpg"}
];

let productsDiv=document.getElementById("products");
let cart=[];

// DISPLAY PRODUCTS
function displayProducts(list){
  productsDiv.innerHTML="";
  list.forEach((p,i)=>{
    productsDiv.innerHTML+=`
    <div class="product">
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${i})">Add to Cart</button>
    </div>`;
  });
}

// ADD TO CART
function addToCart(i){
  cart.push(products[i]);
  document.getElementById("cartCount").innerText=cart.length;
}

// SHOW CART
function showCart(){
  hideAll();
  document.getElementById("cartPage").style.display="block";

  let cartItems=document.getElementById("cartItems");
  cartItems.innerHTML="";
  let total=0;

  cart.forEach((item,index)=>{
    total+=item.price;
    cartItems.innerHTML+=`
    <div class="cart-item">
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})">X</button>
    </div>`;
  });

  document.getElementById("totalPrice").innerText=total;
}

// REMOVE FROM CART
function removeFromCart(i){
  cart.splice(i,1);
  document.getElementById("cartCount").innerText=cart.length;
  showCart();
}

// NAVIGATION
function hideAll(){
  productsDiv.style.display="none";
  document.getElementById("aboutPage").style.display="none";
  document.getElementById("contactPage").style.display="none";
  document.getElementById("cartPage").style.display="none";
}

function showHome(){
  hideAll();
  productsDiv.style.display="grid";
  displayProducts(products);
}

function showAbout(){
  hideAll();
  document.getElementById("aboutPage").style.display="block";
}

function showContact(){
  hideAll();
  document.getElementById("contactPage").style.display="block";
}

// SEARCH PRODUCTS
function searchProducts(){
  let v=document.getElementById("searchInput").value.toLowerCase();
  let f=products.filter(p=>p.name.toLowerCase().includes(v));
  displayProducts(f);
}

