import footer from "../../../content/footer";
const imgPath = require.context("../../../assets/icons");

const FooterBottom = `
  <div class="footer_bottom">
    <h6>&copy; 2020 Dermatology M  |  Site by <a target="_blank" href="#">BAO</a></h6>
    <div class="footer_bottom__payment">
      ${footer.paymentMethods
        .map((pm) => `<div><img src="${imgPath(`./${pm}.svg`)}"></div>`)
        .join("")}
    </div>
  </div>
`;

export default FooterBottom;
