export default async function decorate(block) {
  const accessKey = "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjEsInV0eXBpZCI6MiwiaWF0IjoxNzQ5MDIzMDQwLCJleHAiOjE3NDkwMjY2NDB9.tc_-5j7DARoscIhu506j-ejmqyRVzGgeddzTCctIy4A"
    const res = await fetch('https://mesh.rdklizer.com/rest/V1/products/?searchCriteria[pageSize]=12', {
      headers: {
       'Authorization': `Bearer ${accessKey}`,
      }
    });
  
    const { items } = await res.json();

  
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
  