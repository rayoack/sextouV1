import baladasDB from "../../../database/places/baladasDB";

const baladaContainer = document.getElementById("baladas-container");

const boxBaladas = baladasDB.map(balada => {
  return `
    <a class="box-balada grid" href=${balada.link}>
      <div class="balada-capa" style="background-image: url(${balada.capa})"></div>
      <div class="balada-description flex">
        <h4 class="balada-title">${balada.title}</h4>
        <p class="balada-date">${balada.date}</p>
        <p class="balada-adress">${balada.adress}</p>
        <div class="balada-min-box">
          <p class="balada-category">${balada.category}</p>
          <p class="balada-price">${balada.price}</p>
        </div>
      </div>
    </a>
  `;
});

baladaContainer.innerHTML = boxBaladas;
