import BaladaMix from "../../assets/lugares/baladas/baladaMix.jpg";
import RioMusic from "../../assets/lugares/baladas/rioMusic.png";
import Royalt from "../../assets/lugares/baladas/royalt.jpg";

import baladaMixHtml from '../../pages/places/baladas/baladaMix.html';
import rioMusicHtml from '../../pages/places/baladas/rioMusic.html';
import royaltPayHtml from '../../pages/places/baladas/royaltPay.html';

console.log(baladaMixHtml)

const baladas = [
  {
    title: "Balada mix 21",
    date: "Sexta-feira, Ago 24, 7PM",
    adress: "dolor sit amet, 137, consectetur elit",
    price: "R$20 - R$100",
    category: "Baladas",
    capa: BaladaMix,
    link: baladaMixHtml
  },
  {
    title: "Rio Music",
    date: "Sábado, Ago 25, 8PM",
    adress: "dolor sit amet, 280, consectetur elit",
    price: "R$20 - R$70",
    category: "Baladas",
    capa: RioMusic,
    link: rioMusicHtml
  },
  {
    title: "Royalt Pay",
    date: "Sexta-feira, Ago 25, 10PM",
    adress: "dolor sit amet, 350, consectetur elit",
    price: "R$20 - R$120",
    category: "Baladas",
    capa: Royalt,
    link: royaltPayHtml
  }
];

export default baladas;
