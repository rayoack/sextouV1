import categories from "../database/categories";

const footerMenu = document.getElementById("footer-menu");

const footerCategory = categories
  .map(category => {
    return `
    <a class="fotter-menu-link" href="${category.link}">${category.title}</a>
  `;
  })
  .join("");

footerMenu.innerHTML = footerCategory;
