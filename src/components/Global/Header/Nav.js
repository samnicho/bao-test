import header from "../../../content/header";

const Nav = `
  <nav>
    ${header.nav
      .map(
        (item) =>
          `<a href='/${item}'>
            <h4>${item}</h4>
          </a>`
      )
      .join('')}
  </nav>
`;

export default Nav;
