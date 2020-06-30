class PreGame {
  constructor() {
    
  }
  
  setup() {
    soundTrack.stop()
    this.variationX = 8
    this.reduce = false;
    this.caveX = 0;
    character = character = new Character(charSheet, 270, 220, 4, 4, 16, 0, 0, 135, 110, FLOOR_LEVEL, charPoly);
    scenario = new Scenario(bg1, [3, 6, 9, 12, 15], bg2, bg3, bg4);
    enemyWall = new EnemyWall(100)
    musicGame.loop()
  }
  
  draw() {
    frameRate(40)
    scenario.show();
    image(cave2, this.caveX,0, 500, height);
    character.show()
    enemyWall.show();
    if (this.reduce) {
      scenario.loopScenario();
      this.caveX -= 15;
      enemyWall.setPosX(enemyWall.posX - 12)
      this.variationX -= 12
      if (this.variationX <= 250) {
        gameScenes['game'].setup();
        enemyWall.setEnemiesSpeeds()
        enemyWall.setWidth(150)
        enemyWall.setPosX(-50)
        scenario.setBgSpeed(1,2,3,4,5)
        GAME_STATUS = PLAYING;
      }
    } else {
      this.variationX += 14
      enemyWall.setPosX(enemyWall.posX + 14)
      if (this.variationX > width + 200) {
        enemyWall.setEnemiesSpeeds(-12)
        this.variationX = width + 200;
        this.reduce = true;
      }
    }
    character.initialAnimation(this.variationX)
    image(cave1, this.caveX, 0, 500, height);
    image(bg1[4], this.caveX, 0, width, height);
    
  }


}