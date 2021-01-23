import Nav from "./Nav";
import SiteTools from "./SiteTools";

const imgPath = require.context('../../../assets/images/logos');

const Header = `
  <div class='header'>
    <div class='header__top'>
      ${Nav}
      <img src="${imgPath('./dermatologyLogo.png')}">
      ${SiteTools}
    </div>
    <div class='header__msg'>
      <h5>Lorem ipsum dolor sit amet consectetur</h5>        
    </div>
  </div>
`

export default Header;
