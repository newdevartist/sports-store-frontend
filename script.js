const products = [
  { name: "Nike Παπούτσια Running", brand: "Nike", price: 89 },
  { name: "Nike Παπούτσια Air", brand: "Nike", price: 110 },
  { name: "Adidas Παπούτσια Boost", brand: "Adidas", price: 95 },
  { name: "Puma Παπούτσια Sport", brand: "Puma", price: 75 },
  { name: "Nike Μπλούζα Dry-Fit", brand: "Nike", price: 30 },
  { name: "Adidas Μπλούζα Training", brand: "Adidas", price: 28 },
  { name: "Nike Σορτς", brand: "Nike", price: 25 },
  { name: "Puma Σορτς", brand: "Puma", price: 22 },
  { name: "Adidas Φόρμα", brand: "Adidas", price: 55 },
  { name: "Nike Φόρμα", brand: "Nike", price: 60 },
  { name: "Μπάλα Ποδοσφαίρου Adidas", brand: "Adidas", price: 25 },
  { name: "Μπάλα Ποδοσφαίρου Nike", brand: "Nike", price: 27 },
  { name: "Nike Παπούτσια Street", brand: "Nike", price: 85 },
  { name: "Adidas Παπούτσια Classic", brand: "Adidas", price: 90 }
];

const productsPerPage = 12;
let currentPage = 1;
let filteredProducts = [...products];

const productList = document.getElementById("product-list");
const pageInfo = document.getElementById("page-info");

function displayProducts() {
  productList.innerHTML = "";

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = filteredProducts.slice(start, end);

  pageProducts.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="https://via.placeholder.com/300x180" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>Brand: ${product.brand}</p>
          <p>Τιμή: ${product.price}€</p>
        </div>
      </div>
    `;
  });

  pageInfo.textContent = `Σελίδα ${currentPage} από ${Math.ceil(filteredProducts.length / productsPerPage)}`;

  document.getElementById("prev").disabled = currentPage === 1;
  document.getElementById("next").disabled = end >= filteredProducts.length;
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();

  filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search) ||
    product.brand.toLowerCase().includes(search)
  );

  currentPage = 1;
  displayProducts();
});

document.getElementById("prev").onclick = () => {
  currentPage--;
  displayProducts();
};

document.getElementById("next").onclick = () => {
  currentPage++;
  displayProducts();
};

displayProducts();
