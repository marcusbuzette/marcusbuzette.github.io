let imgCenario;
let imgMenu;
let fontMenu;
let charSheet;
let enemySheet;
let enemyInverted;
let gameOverImg;
let points;
let enemyWall;
let cave;
let mountain;

let debugMode = false;
let btn

let input;
let submit;

let game;
let preGame;
let scoreboard;
let menu;
let gameOver;
let controls;
let credits;

let soundTrack;
let musicGame;
let gameOverMusic;
let soundJump;
let scenario;
let character;
let enemies = [];
let platforms = [];
let buttons = [];
let delayEn = 0;
let delayPlat = 0;
// let platform;

const FLOOR_LEVEL = 30
const DELAY_ENEMY_MIN = 10;
const DELAY_ENEMY_MAX = 200;
const DELAY_PLAT_MIN = 200;
const DELAY_PLAT_MAX = 400;

const PLAYING = 'game'
const MENU = 'menu'
const PRE_GAME = 'preGame'
const GAMEOVER = 'gameOver'
const SCOREBOARD = 'scoreboard'


let GAME_STATUS = 'menu'
let gameScenes;

let dbRefObject;
let ranking;

const matrizGota = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

const charPoly = [
    [30, 5],
    [80, 5],
    [110, 60],
    [50, 130],
    [10, 70]
]


const dropPoly = [
    [5, 25],
    [15, 10],
    [52, 10],
    [52, 47],
    [15, 47]
]

const trollPoly = [
    [20, 80],
    [80, 105],
    [120, 20],
    [195, 130],
    [150, 170],
    [20, 140]
]

const birdPoly = [
    [15, 20],
    [90, 15],
    [90, 70],
    [15, 60]
]

function preload () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA_N_5xA_XMr1kLIqewKqSrFFmtB3LMKQs",
    authDomain: "into-the-woods-6990a.firebaseapp.com",
    databaseURL: "https://into-the-woods-6990a.firebaseio.com",
    projectId: "into-the-woods-6990a",
    storageBucket: "into-the-woods-6990a.appspot.com",
    messagingSenderId: "1061275502769",
    appId: "1:1061275502769:web:37514f431c261a030cba90",
    measurementId: "G-PMG7G7KYQ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   dbRefObject = firebase.database().ref().child('ranking');
   dbRefObject.on('value', (snap) => {
    ranking = snap.val();
   })
  // firebase.analytics();

  bg1 = [loadImage('imagens/cenario/bg1/Sky.png'),loadImage('imagens/cenario/bg1/BG_Decor.png'),loadImage('imagens/cenario/bg1/Middle_Decor.png'),loadImage('imagens/cenario/bg1/Foreground.png'),loadImage('imagens/cenario/bg1/Ground.png')]
  
  bg3 = [loadImage('imagens/cenario/bg2/Sky.png'),loadImage('imagens/cenario/bg2/BG_Decor.png'),loadImage('imagens/cenario/bg2/Middle_Decor.png'),loadImage('imagens/cenario/bg2/Foreground.png'),loadImage('imagens/cenario/bg2/Ground.png')]

bg2 = [loadImage('imagens/cenario/bg3/Sky.png'),loadImage('imagens/cenario/bg3/BG_Decor.png'),loadImage('imagens/cenario/bg3/Middle_Decor.png'),loadImage('imagens/cenario/bg3/Foreground.png'),loadImage('imagens/cenario/bg3/Ground.png')]

bg4 = [loadImage('imagens/cenario/bg4/Sky.png'),loadImage('imagens/cenario/bg4/BG_Decor.png'),loadImage('imagens/cenario/bg4/Middle_Decor.png'),loadImage('imagens/cenario/bg4/Foreground.png'),loadImage('imagens/cenario/bg4/Ground.png')]
  
  
  charSheet = loadImage('imagens/personagem/correndo.png');
  dropSheet = loadImage('imagens/inimigos/gotinha.png');
  dropInvSheet = loadImage('imagens/inimigos/gotinha-invertida.png');
  birdSheet = loadImage('imagens/inimigos/gotinha-voadora.png');
  trollSheet = loadImage('imagens/inimigos/troll.png');
  soundTrack = loadSound('sons/trilha_jogo.mp3')
  musicGame = loadSound('sons/gameMusic.wav')
  gameOverMusic = loadSound('sons/gameOverMusic.wav')
  jumpSound = loadSound('sons/somPulo.mp3')
  gameOverImg = loadImage('imagens/assets/game-over.png');
  cave1 = loadImage('imagens/assets/cave1.png');
  cave2 = loadImage('imagens/assets/cave2.png');
  tronco = loadImage('imagens/assets/tronco.png');
  imgMenu = loadImage('imagens/cenario/telaInicial.png');
  fontMenu = loadFont('imagens/assets/fonteTelaInicial.otf');
}
