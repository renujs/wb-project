document.addEventListener('DOMContentLoaded', () => {
    const productListDiv = document.getElementById('productList');
    const productDetailsDiv = document.getElementById('productDetails');

    // Fetch product data (simulated from a JSON file)
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            displayProductList(products);
        });

    function displayProductList(products) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
            productDiv.addEventListener('click', () => showProductDetails(product));
            productListDiv.appendChild(productDiv);
        });
    }

    function showProductDetails(product) {
        productDetailsDiv.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p><p>${product.price}</p>`;
    }
});

