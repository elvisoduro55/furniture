// Create an empty cart array
let cart = [];

// Function to add items to the cart
function addToCart(item) {
  cart.push(item);
  displayCart();
}

// Function to display the cart content
function displayCart() {
  const cartItems = document.getElementById("cart-items");
  
  // Clear previous cart items
  cartItems.innerHTML = "";
  
  // Display each item in the cart
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });
}