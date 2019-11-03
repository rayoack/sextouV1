const headerMenu = document.getElementById("header-menu");

const createMenu = () => {
  return `
    <div class="container menu-box flex">
      <img
        class="logo"
        src="src/assets/header/logosextou.png"
        alt="logo sextou"
      />
      <img
        class="profile"
        src="src/assets/header/profile.svg"
        alt="profile"
      />
    </div>
  `;
};

headerMenu.innerHTML = createMenu();
