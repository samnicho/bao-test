import EmailInput from '../Reusable/EmailInput';

const EmailResults = `
  <div class="email_results">
    <div class="email_results__email">
      <p>Email yourself the results</p>
      ${EmailInput}
    </div>
    <div class="email_results__newsletter">
      <label for="newsletter_toggle">
        <input type="checkbox" id="newsletter_toggle" name="newsletter_toggle" value="false">
        <span class="checkbox"></span>
        <h5>Sign up for our newsletter. We won’t pass your details on to any other third parties.</h5>
      </label>
    </div>
  </div>
`;

export default EmailResults;