const defaultPadding = 2;
const morePadding = 3;

const escolas = [
  {
    nome: "E.E. Jairo da Silva Rocha",
    coords: [-3.0667915997627517, -59.93612093328385],
    descricao:
      "As estudantes da E.E. Jairo da Silva Rocha pesquisam a possibilidade de uso de materiais recicláveis para a confecção de roupas e o impacto das lixeiras viciadas nas ruas do bairro.",
    offset: [10, -80],
    padding: [morePadding, defaultPadding],
    icon: "/assets/imgs/olho-vermelho.png",
    color: "#fe5757",
  },
  {
    nome: "E.E. Manuel Rodrigues de Souza",
    coords: [-3.094631896873701, -59.936824803525866],
    descricao:
      "Na E.E. Manuel Rodrigues de Souza, os grupos investigam meio ambiente e arborização, o resgate e abandono de animais domésticos e a infraestrutura do bairro, marcada por buracos nas vias e paradas de ônibus sem cobertura.",
    offset: [10, 0],
    padding: [morePadding, defaultPadding],
    icon: "/assets/imgs/olho-verde.png",
    color: "#62dc76",
  },
  {
    nome: "E.E. Nathália Uchôa",
    coords: [-3.112475096855778, -59.97525333236144],
    descricao:
      "Na E.E. Nathália Uchôa, o olhar se volta para a poluição da Lagoa do Japiim, a segurança pública e o assédio no entorno escolar, além de ações de reciclagem e melhorias estruturais dentro da escola.",
    offset: [-340, -90],
    padding: [defaultPadding, morePadding],
    icon: "/assets/imgs/olho-roxo.png",
    color: "#dc69ff",
  },
  {
    nome: "E.E. Prof. Roberto dos Santos Vieira",
    coords: [-3.0052121688011866, -59.97933566119819],
    descricao:
      "Na E.E. Roberto dos Santos Vieira, os temas escolhidos incluem o asfalto precário do bairro, o atendimento da SPA do Monte das Oliveiras e a invisibilidade do bairro Colônia Terra Nova nas políticas públicas.",
    offset: [-340, -50],
    padding: [defaultPadding, morePadding],
    icon: "/assets/imgs/olho-rosa.png",
    color: "#ff69b4",
  },
  {
    nome: "E.E. Prof. Ruy Alencar",
    coords: [-3.0070672969616066, -59.974200245855265],
    descricao:
      "Já na E.E. Ruy Alencar, os grupos analisam a infraestrutura da escola e a segurança nas paradas de ônibus, com foco no deslocamento cotidiano das estudantes.",
    offset: [10, -75],
    padding: [morePadding, defaultPadding],
    icon: "/assets/imgs/olho-azul.png",
    color: "#69c8ff",
  },
];

const map = L.map("map", {
  zoomControl: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  touchZoom: true,
  dragging: true,
  zoomSnap: 0,
  zoomDelta: 0.25,
}).setView([-3.066791524317386, -59.97], 12.5);

const makeIcon = (url) =>
  L.icon({
    iconUrl: url,
    iconSize: [40, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

const label = (e) =>
  L.divIcon({
    className: "school__label",
    html: `
      <div class="school__box"
        style="
          transform: translate(${e.offset[0]}px, ${e.offset[1]}px);
          padding-left: ${e.padding[0]}rem;
          padding-right: ${e.padding[1]}rem;
          background: ${e.color};   
          color: #000;   
        "
      >
        <span class="school__name">${e.nome}</span><br>
        ${e.descricao}
      </div>
    `,
  });

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution: "&copy; CartoDB & OpenStreetMap",
  maxZoom: 20,
}).addTo(map);

escolas.forEach((e) => {
  L.marker(e.coords, {
    icon: label(e),
    interactive: false,
  }).addTo(map);

  L.marker(e.coords, {
    icon: makeIcon(e.icon),
    interactive: false,
  }).addTo(map);
});
