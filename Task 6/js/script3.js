const container = document.getElementById("productsContainer");

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(products => {
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = product.image;

        const title = document.createElement("h3");
        title.textContent = product.title;

        const category = document.createElement("p");
        category.textContent = product.category;

        const priceRating = document.createElement("div");
        priceRating.className = "price-rating";
        priceRating.innerHTML = `<span>${product.price} $</span> <span>Rating : ${product.rating.rate}</span>`;

        const btn = document.createElement("button");
        btn.textContent = "Show Details";
        btn.addEventListener("click", () => {
            alert(product.description);
        });

card.appendChild(img);
card.appendChild(title);
card.appendChild(category);
card.appendChild(priceRating);
card.appendChild(btn);

container.appendChild(card);
    });
})
    .catch(err => console.error("Error fetching products:", err));
