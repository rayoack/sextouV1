import baresDB from "../../../database/places/baresDB";

const baresContainer = document.getElementById("bares-container");

const boxBares = baresDB
  .map(bar => {
    return `
    <a class="box-bar grid" href="../../places/bares/${bar.link}">
      <div class="bar-capa" style="background-image: url(${bar.capa})"></div>
      <div class="bar-description flex">
        <h4 class="bar-title">${bar.title}</h4>
        <p class="bar-date">Data: ${bar.date}</p>
        <p class="bar-adress">Endereço: ${bar.adress}</p>
        <div class="bar-min-box flex">
          <p class="bar-category">${bar.category}</p>
          <p>|<p>
          <p class="bar-price">${bar.price}</p>
        </div>
      </div>
    </a>
  `;
  })
  .join("");

baresContainer.innerHTML = boxBares;
