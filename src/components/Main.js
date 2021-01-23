import RecommendationsContainer from "./Recommendations/RecommendationsContainer";
import Newsletter from "./Newsletter/Newsletter";
import FeaturesContainer from './Features/FeaturesContainer';

const Main = `
  <section>
    ${RecommendationsContainer}
  </section>
  <section>
    ${Newsletter}
  </section>
  <section>
    ${FeaturesContainer}
  </section>
`

export default Main;
