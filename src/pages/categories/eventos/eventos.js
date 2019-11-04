import eventosDB from "../../../database/places/eventosDB";

const eventosContainer = document.getElementById("eventos-container");

const boxEventos = eventosDB
  .map(evento => {
    return `
    <a class="box-evento grid" href="../../places/eventos/${evento.link}">
      <div class="evento-capa" style="background-image: url(${
        evento.capa
      })"></div>
      <div class="evento-description flex">
        <h4 class="evento-title">${evento.title}</h4>
        <p class="evento-date">Data: ${evento.date}</p>
        <p class="evento-adress">Endereço: ${evento.adress}</p>
        <div class="evento-min-box flex">
          <p class="evento-category">${evento.category}</p>
          <p>|<p>
          <p class="evento-price">${evento.price}</p>
        </div>
      </div>
    </a>
  `;
  })
  .join("");

eventosContainer.innerHTML = boxEventos;
