let data = JSON.parse(localStorage.getItem('cart'));
console.log(data);

let cartItems = document.getElementById('cartItem');
let basket = document.getElementById('basket');

if (basket) {
    basket.innerHTML = `Basket [<span>${data.length}</span>]`;
}


cartItems.innerHTML = data.map(item => {
    return `
        <div class="cart-item">
            <img src="${item.Image}" alt="Orange Juice">
            <div class="item-details">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <div class="quantity">
                <button>-</button>
                <input type="number" value="1" min="1">
                <button>+</button>
            </div>
            </div>
            <p class="item-total">${item.price}</p>
      </div>
`;
}).join('');


let cartPrice = 0;
data.map(item => {
    cartPrice = parseFloat(cartPrice) + parseFloat(item.price.split('₹'));
});

document.getElementById('cartPrice').innerHTML = `
        <h2>Cart Total</h2>
        <p>Subtotal: ${data.price}</p>
        <p>Tax (5%): ₹0.73</p>
        <hr>
        <p><strong>Total: ${cartPrice}</strong></p>
        <button class="checkout-button">Proceed to Checkout</button>
`;