// Premium Placeholder Clothes Images from Unsplash
const catalog = [
    {
        id: 1,
        title: "Serene Flora Embroidered",
        category: "Pret / Luxury Luxury",
        price: "Rs. 6,490",
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Midnight Onyx Co-Ord",
        category: "Western / Statement",
        price: "Rs. 4,990",
        img: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Crimson Rust Unstitched",
        category: "Festive Unstitched",
        price: "Rs. 8,990",
        img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=500&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Ivory Breeze Kurta",
        category: "Daily Casuals",
        price: "Rs. 3,290",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
    }
];

const productGrid = document.getElementById("products");
const cartCountEl = document.getElementById("cart-count");
let currentCartItems = 0;

// Generate products inside grid dynamically
catalog.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    
    card.innerHTML = `
        <div class="img-placeholder" style="background-image: url('${product.img}')"></div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-title">${product.title}</div>
            <div class="product-price">${product.price}</div>
            <button class="add-to-cart" onclick="updateCart()">Add to Bag</button>
        </div>
    `;
    productGrid.appendChild(card);
});

// Shopping Cart Increment Logic
function updateCart() {
    currentCartItems++;
    cartCountEl.innerText = currentCartItems;
    
    // Quick interactive bounce animation on cart symbol
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.style.transform = "scale(1.2)";
    setTimeout(() => cartIcon.style.transform = "scale(1)", 150);
}