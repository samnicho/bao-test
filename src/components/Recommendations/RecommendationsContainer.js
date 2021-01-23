import Message from "./Message";
import EmailResults from "./EmailResults";
import Product from "./Product";
import products from "../../content/products";

const RecommendationsContainer = `
  <div class="recommendations">
    <div class="recommendations__message">
      <div>
        ${Message}
        ${EmailResults}
      </div>
    </div>
    <div class="recommendations__products">
      ${products
        .map((product) => {
          const { title, category, price, tag, newProduct } = product;
          return `${Product.render(title, category, price, tag, newProduct)}`;
        })
        .join("")}
    </div>
  </div>
`;

export default RecommendationsContainer;
