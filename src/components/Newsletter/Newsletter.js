import EmailInput from '../Reusable/EmailInput';
const imgPath = require.context('../../assets');

const Newsletter = `
  <div class="newsletter_signup">
    <img class="newsletter_signup__bgImg" src="${imgPath(`./images/bkgrnd.png`)}">
    <div class="newsletter_signup__signUp">
      <h1>Sign up to our Newsletter</h1>
      <h5>For the latest news, events and product launches.</h5>
      ${EmailInput}
    </div>
  </div>
`;

export default Newsletter;