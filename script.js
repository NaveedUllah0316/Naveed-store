let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart(productName, productPrice) {

    let existingProduct = cart.find(
        product => product.name === productName
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart! 🛒");
}

function shopNow() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}