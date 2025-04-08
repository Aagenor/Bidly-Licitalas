fetch('/api/top-products')
      .then(response => response.json())
      .then(products => {
        const container = document.getElementById('product-cards-container');

        products.forEach(product => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
          <img class="card-image"src="${product.imageUrl}">
          <h2 class="product-name">${product.productName}</h2>
          <p class="product-brand-model">${product.productBrand}</p>
          <p class="product-model">${product.productModel}</p>
          <a class="view-details-btn" href="/products/details/${product._id}">Tovább a részletekhez..</a>
        `;
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
