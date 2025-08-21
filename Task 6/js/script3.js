const container = document.getElementById("productsContainer");

// Fetch API data
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(products => {
    products.forEach(product => {
      // Create card
        const card = document.createElement("div");
        card.className = "card";

      // Product image
const img = document.createElement("img");
img.src = product.image;

      // Title
const title = document.createElement("h3");
title.textContent = product.title;

      // Category
const category = document.createElement("p");
category.textContent = product.category;

      // Price + Rating
const priceRating = document.createElement("div");
priceRating.className = "price-rating";
priceRating.innerHTML = `<span>${product.price} $</span> <span>Rating : ${product.rating.rate}</span>`;

      // Button
const btn = document.createElement("button");
btn.textContent = "Show Details";
btn.addEventListener("click", () => {
        alert(product.description);
});

      // Append to card
card.appendChild(img);
card.appendChild(title);
card.appendChild(category);
card.appendChild(priceRating);
card.appendChild(btn);

      // Append to container
container.appendChild(card);
});
})
.catch(err => console.error("Error fetching products:", err));
