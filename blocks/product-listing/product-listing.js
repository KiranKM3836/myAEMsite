export default async function decorate(block) {
    const res = await fetch('https://mesh.rdklizer.com/rest/V1/products/?searchCriteria[pageSize]=12', {
      headers: {
        'Authorization': 'Bearer '
      }
    });
  
    const { items } = await res.json();

    console.log(items,"items")
  
    block.innerHTML = `
      <div class="plp-grid">
        ${items.map(p => `
          <a class="product-card" href="/product/?sku=${p.sku}">
            <img src="https://mesh.rdklizer.com/media/catalog/product${p.media_gallery_entries[0]?.file}" alt="${p.name}" />
            <h3>${p.name}</h3>
            <p>$${p.price}</p>
          </a>
        `).join('')}
      </div>
    `;
  }
  