import baladasDB from "../../../database/places/baladasDB";

const baladaContainer = document.getElementById("baladas-container");

const boxBaladas = baladasDB
  .map(balada => {
    return `
    <a class="box-balada grid" href="../../places/baladas/${balada.link}">
      <div class="balada-capa" style="background-image: url(${
        balada.capa
      })"></div>
      <div class="balada-description flex">
        <h4 class="balada-title">${balada.title}</h4>
        <p class="balada-date">Data: ${balada.date}</p>
        <p class="balada-adress">Endereço: ${balada.adress}</p>
        <div class="balada-min-box flex">
          <p class="balada-category">${balada.category}</p>
          <p>|<p>
          <p class="balada-price">${balada.price}</p>
        </div>
      </div>
    </a>
  `;
  })
  .join("");

baladaContainer.innerHTML = boxBaladas;
