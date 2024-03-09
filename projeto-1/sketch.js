const config = {
  circleSize: 50, // Tamanho do círculo
  posX: null, // Posição X do círculo
  posY: null, // Posição Y do círculo
  size: {
    x: 400, // Tamanho X canvas
    y: 400, // Tamanho Y do canvas
  },
  speed: 4, // Velocidade do círculo
};

function setup() {
  const { size, circleColor } = config; //desestruturação

  createCanvas(size.x, size.y); // Cria o canvas tamanho definido no config.size X e Y
  background(color(0, 0, 0)); // Cria um background com a cor rgb(0, 0, 0)

  color = color(random(0, 255), random(0, 255), random(0, 255)); // Seta uma cor a círculo rgb() aleatoria

  config.posX = size.x / 2; // Define a posição da círculo padrao X no centro do canvas
  config.posY = size.y / 2; // Define a posição da círculo padrao Y no centro do canvas
}

function draw() {
  const { circleSize, speed } = config; // Desestruturação

  circle(config.posX, config.posY, circleSize); // Cria um círculo na posição inicial X e Y conforme a configuração
  fill(color); // Define a cor do círculo

  // Caso a posição atual X do mouse for menor que a posição X do círculo
  if (mouseX < config.posX) config.posX -= speed; // posX círculo - o speed

  // Caso a posição atual X do mouse for maior que a posição X do círculo
  if (mouseX > config.posX) config.posX += speed; //posX círculo + o speed

  // Caso a posição atual Y do mouse for menor que a posição Y do círculo
  if (mouseY < config.posY) config.posY -= speed; //posY círculo - o speed

  // Caso a posição atual Y do mouse for maior que a posição Y do círculo
  if (mouseY > config.posY) config.posY += speed; //posY círculo + o speed
}

// Máximo de comentarios possiveis para iniciantes poderem entender exatamente o que esta ocorrendo no codigo acima
// Código escrito por: @thiago_05k
// Projeto Github: https://github.com/ThiagoBxK/alura-curso
// @thiago_05k
