import Logo from "../assets/header/logosextou.png";
import ProfileImg from "../assets/header/profile.png";

const headerMenu = document.getElementById("header-menu");

const createMenu = () => {
  return `
    <div class="container menu-box flex">
      <img
        class="logo"
        src=${Logo}
        alt="logo sextou"
      />
      <img
        class="profile"
        src=${ProfileImg}
        alt="profile"
      />
    </div>
  `;
};

headerMenu.innerHTML = createMenu();
