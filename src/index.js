import Header from "./components/Global/Header/HeaderContainer";
import Footer from "./components/Global/Footer/FooterContainer";
import Main from "./components/Main";
import "./styles/global.scss";

const pageRender = () => {
  const header = null || document.getElementById("header-wrapper");
  const content = null || document.getElementById("content-wrapper");
  const footer = null || document.getElementById("footer-wrapper");

  header.innerHTML = Header;
  content.innerHTML = Main;
  footer.innerHTML = Footer;
};

window.addEventListener("load", pageRender);
