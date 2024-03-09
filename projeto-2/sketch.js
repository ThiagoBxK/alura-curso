let word;

// Setup
function setup() {
  createCanvas(400, 400); // Cria o canvas
  word = randomWord(); // Obtem uma palavra aleatoria
}

// Gera a palavra aleatoria
function randomWord() {
  const words = ["TESTE 1", "TESTE 2", "TESTE 3", "TESTE 4"];

  return random(words);
}

// Renderiza o canvas com background e configurações para o texto
function textRender() {
  background("#000"); // Cor de fundo do canvas
  fill("#FFFFFF"); // Cor do texto
  textSize(64); // Tamanho do texto
  textFont("Honk"); // Fonte personalizada importada no CSS
  textAlign(CENTER, CENTER); // Alinhar texto no centro do canvas
}

// Exibir o caracterer na tela
function displayCharacters() {
  const min = 0; // Tamanho minimo
  const max = width; // Tamanho maximo conforme o tamanho do canvas

  const quantity = map(mouseX, min, max, 0, word.length); // Mapeia a posição do mouse
  const partial = word.substring(0, quantity); // Obtem uma parte da string ex: "A" quando mover o mouse em uma determinada posição "Al"...

  return partial;
}

function draw() {
  const centerX = width / 2; // Centro do canvas X
  const centerY = width / 2; // Centro do canvas Y

  textRender();
  text(displayCharacters(), centerX, centerY);
}
