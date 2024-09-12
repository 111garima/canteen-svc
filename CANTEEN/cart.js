// Function to add items to cart
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        // If item is already in the cart, increase the quantity
        cart[itemIndex].quantity += 1;
    } else {
        // Add new item to the cart
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(itemName + ' has been added to your cart.');
}

// Function to display items in the cart on the cart page
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsTable = document.querySelector('#cart-items tbody');
    let totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear existing cart items in the table
    cartItemsTable.innerHTML = '';

    cart.forEach(item => {
        let row = cartItemsTable.insertRow();
        row.innerHTML = `<td>${item.name}</td>
                         <td>${item.quantity}</td>
                         <td>₹${item.price * item.quantity}</td>`;
        totalPrice += item.price * item.quantity;
    });

    // Update total price
    totalPriceElement.textContent = totalPrice;
}

// Function to clear the cart
function clearCart() {
    // Clear the local storage cart
    localStorage.removeItem('cart');

    // Reset the cart object in JavaScript
    cart = {};

    // Refresh the cart UI
    displayCartItems();
}

// Add an event listener for the Clear Cart button
document.querySelector('.clear-cart').addEventListener('click', function() {
    // Confirm before clearing the cart
    if (confirm('Are you sure you want to clear the cart?')) {
        clearCart();
    }
});


// // Call displayCartItems on the cart page to show the items
// if (window.location.pathname.includes('cart.html')) {
//     displayCartItems();
// }


// Function to display items in the cart on the cart page
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsTable = document.querySelector('#cart-items tbody');
    let totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear existing cart items in the table
    cartItemsTable.innerHTML = '';

    if (cart.length === 0) {
        // If the cart is empty, show a message
        cartItemsTable.innerHTML = '<tr><td colspan="3">Your cart is empty.</td></tr>';
        totalPriceElement.textContent = '0';
    } else {
        cart.forEach(item => {
            let row = cartItemsTable.insertRow();
            row.innerHTML = `<td>${item.name}</td>
                             <td>${item.quantity}</td>
                             <td>₹${item.price * item.quantity}</td>`;
            totalPrice += item.price * item.quantity;
        });

        // Update total price
        totalPriceElement.textContent = totalPrice;
    }
}




// // Define an object to hold cart data
// let cart = JSON.parse(localStorage.getItem('cart')) || {};

// // Function to add item to cart
// function addToCart(item, price) {
//     // If the item is not in the cart, initialize it with count 0
//     if (!cart[item]) {
//         cart[item] = { count: 0, price: price };
//     }

//     // Increase the count of the item
//     cart[item].count++;

//     // Save the updated cart to local storage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Update the UI
//     updateCartUI(item);
// }

// // Function to remove item from cart
// function removeFromCart(item) {
//     if (cart[item] && cart[item].count > 0) {
//         // Decrease the count of the item
//         cart[item].count--;

//         // If the count reaches 0, remove the item from the cart
//         if (cart[item].count === 0) {
//             delete cart[item];
//         }

//         // Save the updated cart to local storage
//         localStorage.setItem('cart', JSON.stringify(cart));

//         // Update the UI
//         updateCartUI(item);
//     }
// }

// // Function to update the UI
// function updateCartUI(item) {
//     const itemCountElem = document.getElementById(`count-${item}`);
//     const minusBtn = itemCountElem.previousElementSibling;
//     const plusBtn = itemCountElem.nextElementSibling;

//     if (cart[item] && cart[item].count > 0) {
//         // Show the count and buttons if the item is added to cart
//         itemCountElem.textContent = cart[item].count;
//         minusBtn.classList.add('visible');
//         plusBtn.classList.add('visible');
//     } else {
//         // Show "Add" and hide the buttons if the item is not in the cart
//         itemCountElem.textContent = 'Add';
//         minusBtn.classList.remove('visible');
//         plusBtn.classList.remove('visible');
//     }
// }

// // Initialize the cart UI on page load
// window.onload = function() {
//     for (const item in cart) {
//         if (cart.hasOwnProperty(item)) {
//             updateCartUI(item);
//         }
//     }
// }


