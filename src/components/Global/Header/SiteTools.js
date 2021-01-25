const imgPath = require.context("../../../assets/icons");

const SiteTools = `
  <div class="site_tools">
    <div id="search_label" class="site_tools__search">
      <img src="${imgPath("./search.svg")}" />
      <label for="search">
        <h4>Search</h4>
      </label>
      <input type="text" id="search" name="search" />
    </div>
    <a href="#">
      <h4>Account</h4>
    </a>
    <a class="site_tools__bag" href="#">
      <h4>Bag</h4>
      <div>
        <h5>3</h5>
      </div>
    </a>
  </div>
`;

export default SiteTools;
