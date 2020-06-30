//todo
// sfx --TODO
//tutorial -- TELA DE CONROLES
// creditos --TODO
// velocidade de background / geral --TODO


function setup() {
  createCanvas(windowWidth, windowHeight);
  preGame = new PreGame();
  game = new Game();
  scoreboard = new Scoreboard();
  menu = new InitScene()
  gameOver = new GameOver();
  credits = new Credits();
  controls = new Controls();
  menu.setup()
  
  gameScenes = {
    menu,
    scoreboard,
    preGame,
    game,
    gameOver,
    controls,
    credits
  }
}

function draw() {
  gameScenes[GAME_STATUS].draw()
}

function keyPressed() {
  gameScenes[GAME_STATUS].keyPressed(key)
}

function keyReleased() {
  game.keyReleased(key)
}
