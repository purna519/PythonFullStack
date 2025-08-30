import products from '../JS/product.js';
let juiceMenuItems = document.getElementById('juiceMenu');
let MilkshakeMenuItems = document.getElementById('MilkshakeMenu');
let smoothieMenuItems = document.getElementById('SmoothieMenu');
let DetoxMenuItems = document.getElementById('DetoxMenu');


juiceMenuItems.innerHTML = products.juiceProduct.map(item => {
    return `
    <div class="menu-item">
        <img src = "${item.Image}" alt="Orange Juice"/>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">₹${item.price}</div>
        <button class="addToCart" data-id="${item.id}">Juice Me Up!</button>
    </div>
    `;
}).join('');

MilkshakeMenuItems.innerHTML = products.milkshakeProduct.map(item => {
    return `
    <div class="menu-item">
        <img src = "${item.Image}" alt="Orange Juice"/>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">₹${item.price}</div>
        <button class="addToCart" data-id="${item.id}">Juice Me Up!</button>
    </div>
    `;
}).join('');

smoothieMenuItems.innerHTML = products.smoothieProduct.map(item => {
    return `
    <div class="menu-item">
        <img src = "${item.Image}" alt="Orange Juice"/>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">₹${item.price}</div>
        <button class="addToCart" data-id="${item.id}">Juice Me Up!</button>
    </div>
    `;
}).join('');

DetoxMenuItems.innerHTML = products.detoxProduct.map(item => {
    return `
    <div class="menu-item">
        <img src = "${item.Image}" alt="Orange Juice"/>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">₹${item.price}</div>
        <button class="addToCart" data-id="${item.id}'>Juice Me Up!</button>
    </div>
    `;
}).join('');

let addToCart = document.querySelectorAll('.addToCart');
let count = 0;
let cart = [];
let cartid = [];

addToCart.forEach(button => {
    button.addEventListener('click', () => {

        let productid = button.dataset.id;
        cartid.push(productid);
        console.log(cartid);

        const item = {
            name: button.parentElement.querySelector('h3').innerText,
            price: button.parentElement.querySelector('.price').innerText,
            Image: button.parentElement.querySelector('img').src
        }

        cart.push(item);
        console.log(cart);
        localStorage.setItem('cart',JSON.stringify(cart));
        
        count++;
        document.getElementById('basket').innerHTML = `Basket [<span>${count}</span>]`;
        button.innerHTML = 'Added to Cart';
        button.disabled = true;
    });
});
