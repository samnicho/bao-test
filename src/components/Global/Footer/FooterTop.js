const imgPath = require.context("../../../assets");

const FooterTop = `
  <section class="footer_top">
    <div class="footer_top__col">
      <img src="${imgPath('./images/logos/footerLogo.png')}" />
      <h5>Follow us on social media</h5>
      <div class="social_icons">
        <div>
          <img src="${imgPath('./icons/fb.svg')}" />
        </div>
        <div>
          <img src="${imgPath('./icons/instagram.svg')}" />
        </div>
      </div>
    </div>
    <div class="footer_top__col">
      <p>About</p>
      <a href="#"><h5>Consultation Tool</h5></a>
      <a href="#"><h5>Practitioner</h5></a>
      <a href="#"><h5>Shop</h5></a>
      <a href="#"><h5>Log-in</h5></a>
      <a href="#"><h5>Our Formulas</h5></a>
      <a href="#"><h5>Sustainability</h5></a>
      <a href="#"><h5>Ingredients A-Z</h5></a>
      <a href="#"><h5>Awards</h5></a>
    </div>
    <div class="footer_top__col">
      <p>Customer Service</p>
      <a href="#"><h5>Refund Policy</h5></a>
      <a href="#"><h5>FAQs</h5></a>
      <a href="#"><h5>Delivery Information</h5></a>
      <a href="#"><h5>Contact Us</h5></a>
    </div>
    <div class="footer_top__col">
      <p>Legal</p>
      <a href="#"><h5>Terms &amp; Conditions</h5></a>
      <a href="#"><h5>Privacy Policy</h5></a>
      <div class="practitioner_login">
        <p>Become a Practitioner</p>
        <a href="#">
          <h5>
            Practitioner Login
          </h5>
        </a>
      <div>
    </div>
  </section>
`;

export default FooterTop;