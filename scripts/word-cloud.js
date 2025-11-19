const wordcloud = document.getElementById("wordcloud");
const canvas = document.createElement("canvas");

const words = [
  ["infraestrutura", 7],
  ["projeto", 6],
  ["comunidade", 6],
  ["dados", 4],
  ["bairro", 4],
  ["seguranca", 4],
  ["problemas", 3],
  ["objetivo", 3],
  ["escola", 3],
  ["ambiente", 3],
  ["lixo", 3],
  ["reciclagem", 3],
];

const options = {
  list: words,
  gridSize: 20,
  weightFactor: (w) => w * (options.gridSize / 1.5),
  fontFamily: "Navigator Extended, sans-serif",
  rotateRatio: 0.25,
  rotationSteps: 2,
  backgroundColor: "rgba(0,0,0,0)",
  color: function (word, weight) {
    if (weight >= 7) return "#d1008d";
    if (weight >= 6) return "#fff";
    if (weight >= 4) return "#f4c803";
    return "#000e88";
  },
  drawOutOfBound: false,
  click: function (item) {
    if (!item) return;
    alert(item[0] + " — peso: " + item[1]);
  },
};

canvas.width = wordcloud.clientWidth;
canvas.height = wordcloud.clientHeight;
wordcloud.appendChild(canvas);

document.fonts.ready.then(() => {
  WordCloud(canvas, options);
});
