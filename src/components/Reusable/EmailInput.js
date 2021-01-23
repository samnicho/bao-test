const imgPath = require.context('../../assets');

const EmailInput = `
  <div class="emailInput">
    <input type="text" placeholder="Enter your email address" />
    <div>
      <img src="${imgPath(`./icons/arrowRight.svg`)}" />
    </div>
  </div>
`;

export default EmailInput;