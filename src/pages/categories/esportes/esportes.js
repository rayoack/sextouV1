import esportesDB from "../../../database/places/esportesDB";

const esportesContainer = document.getElementById("esportes-container");

const boxEsportes = esportesDB
  .map(esporte => {
    return `
    <a class="box-esporte grid" href="../../places/bares/${esporte.link}">
      <div class="esporte-capa" style="background-image: url(${
        esporte.capa
      })"></div>
      <div class="esporte-description flex">
        <h4 class="esporte-title">${esporte.title}</h4>
        <p class="esporte-date">Data: ${esporte.date}</p>
        <p class="esporte-adress">Endereço: ${esporte.adress}</p>
        <div class="esporte-min-box flex">
          <p class="esporte-category">${esporte.category}</p>
          <p>|<p>
          <p class="esporte-price">${esporte.price}</p>
        </div>
      </div>
    </a>
  `;
  })
  .join("");

esportesContainer.innerHTML = boxEsportes;
