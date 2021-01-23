import Feature from "./Feature";
import features from "../../content/features";

const FeaturesContainer = `
  <div class="features_container">
    ${features
      .map((feature) => {
        const { title, desc } = feature;
        return `${Feature.render(title, desc)}`;
      })
      .join("")}
  </div>
`

export default FeaturesContainer;