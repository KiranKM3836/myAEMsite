// blocks/product/product.js
export default async function decorate(block) {
    console.log(block,"hdckdkc")
    const api = block.dataset.api || 'https://fakestoreapi.com/products';
    const res = await fetch(api);
    const products = await res.json();
  
    block.innerHTML = `
  <div class="plp-wrapper">
    <div class="plp-grid">
      ${products.map(p => `
        <div class="product-card">
          <div class="product-image">
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
          </div>
          <div class="product-details">
            <h3 class="product-title">${p.title}</h3>
            <p class="product-price">$${p.price}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

  }
  