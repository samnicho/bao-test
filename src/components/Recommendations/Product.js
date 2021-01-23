const imgPath = require.context('../../assets/images/products');

const Product = {
  render: (title, category, price, tag, newProduct) => `
    <div class="product">
      <div>
        <div class="product__img">
          <img src="${imgPath(`./${tag}.png`)}" />
        </div>
        <div class="product__details ${newProduct ? `product__details--new` : ``}">
          ${newProduct ? `<h6 class="new_product">brand new</h6>` : ``}
          <p>${title}</p>
          <h5>${category}</h5>
          <h5 class="product__price">£${price}</h5>
        </div>
      </div>
      <div class="product__add">
        <h5>add to bag</h5>
      </div>
    </div>
  `
};

export default Product;