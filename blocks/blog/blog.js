export default async function decorate(block) {
    const spaceId = '8yuzd5ubii7m';
    const accessToken = 'CO08hqe5VsEY82WxP1SRno-zAtq_4VtAlYAuv6p9ZoQ';
    const contentType = 'blogPost';
  
    const resp = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${contentType}&include=1`
    );
  
    const json = await resp.json();
    const assets = new Map();

  
    // Extract asset URLs
    json.includes?.Asset?.forEach((asset) => {
      assets.set(asset.sys.id, asset.fields.file.url);
    });
    const html = json.items.map((item) => {
      const { title, summary, slug, image } = item.fields;
      const imageUrl = image ? `https:${assets.get(image.sys.id)}` : '';
      return `
        <div class="blog-card">
          ${imageUrl ? `<img src="${imageUrl}" alt="${title}" />` : ''}
          <h2>${title}</h2>
          <p>${summary}</p>
          <a href="/blog/${slug}">Read more</a>
        </div>
      `;
    }).join('');
  
    block.innerHTML = `<div class="blog-list">${html}</div>`;
  }
  