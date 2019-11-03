import categories from "../../database/categories";

const containerCategory = document.getElementById("categories-container");

const boxCategory = categories
  .map(category => {
    return `
    <a href="${category.link}" class="box-category flex">
      <img class="category-imagem" src="${category.img}" />
      <p class="category-title">${category.title}</p>
    </a>
  `;
  })
  .join("");

containerCategory.innerHTML = boxCategory;
