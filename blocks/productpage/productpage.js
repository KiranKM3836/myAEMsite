export default async function decorate(block) {
    const sku = new URLSearchParams(window.location.search).get('sku');
    console.log(sku,"sku")
    if (!sku) return block.innerHTML = 'Product not found';
    
    const res = await fetch(`https://mesh.rdklizer.com/rest/V1/products/${sku}`, {
      headers: {
        'Authorization': 'Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjEsInV0eXBpZCI6MiwiaWF0IjoxNzQ5MDIzMDQwLCJleHAiOjE3NDkwMjY2NDB9.tc_-5j7DARoscIhu506j-ejmqyRVzGgeddzTCctIy4A',
      }
    });
    const product = await res.json();
  
    block.innerHTML = `
     <div class="pdp">
      <div class="pdp-container">
        <div class="pdp-image">
          <img src="https://mesh.rdklizer.com/media/catalog/product${product.media_gallery_entries[0]?.file}" alt="Product Name" />
        </div>
        <div class="pdp-details">
          <h1 class="pdp-title">${product.name}</h1>
          <p class="pdp-description">${product.description && product.description}</p>
          <p class="pdp-price">$${product.price}</p>
        </div>
        </div>
       <div>

    `;
  }
  