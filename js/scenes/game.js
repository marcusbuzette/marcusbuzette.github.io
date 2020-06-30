class Game {
  constructor() {}

  setup() {
    enemies = []
    platforms = [];
    points = new Pontuation();
  }

  keyReleased(key) {
    if (key === 'ArrowRight' || key === 'ArrowLeft') {
      character.stopMoving();
    }
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      character.jump(jumpSound);
    }

    if (key === 'ArrowDown') {
      character.land();
    }

    if (key === 'ArrowRight') {
      character.foward();
    }

    if (key === 'ArrowLeft') {
      character.backward();
    }

    if (key === 'd') {
      debugMode = !debugMode;
    }

    if (key === 'r') {
      game.setup();
      preGame.setup();
      GAME_STATUS = PRE_GAME

    }
  }

  draw() {
    if (GAME_STATUS === PLAYING) {
      frameRate(40)
      scenario.show();
      points.show();
      points.addPoints();
      scenario.loopScenario();
      
      if (points.points > 5 && enemyWall.enemiesNumber > 15) {
        enemyWall.setEnemiesNumber(enemyWall.enemiesNumber - 1)
      }
      
    

      createEnemy();
      createPlatform();
      
      platforms.forEach((platform, index) => {
        platform.show();
        platform.move();
        character.collisionPlat(platform)
        
        if (!platform.showScreen) {
          platforms.splice(index, 1)
        }
      })

      enemies.forEach((enemy, enemyIndex) => {
        enemy.show();
        enemy.walk();
        enemy.gravity();
        
        platforms.forEach(platform => {
          enemy.collisionPlat(platform)
        })
        
        
        
        
        const enemyCollision = character.collision(enemy)
        if (enemyCollision === 'dead') {
          gameOver.setup();
          GAME_STATUS = GAMEOVER
        } else if (enemyCollision === 'kill') {
          enemy.killEnemy();
          points.points += enemy.pointsVal
          character.jumpKill(jumpSound);
        }
        if (!enemy.onScreen) {
          enemies.splice(enemyIndex, 1)
        }
      })
      
      enemyWall.show();



      character.show();
      character.gravity();
      character.move();

      if (debugMode) {
        character.debugar()
        platforms.forEach(platform => {
          platform.debug();
        })
        enemies.forEach(enemy => {
          enemy.debugar()
        })
      }
    }
  }
}

function createEnemy() {
  delayEn++
  if (delayEn > DELAY_ENEMY_MIN) {
    if ((Math.floor(Math.random() * 100)) === 8 || delayEn > DELAY_ENEMY_MAX) {
      let enemy;
      const enemyType = parseInt(random(0, 3))
      if (enemyType === 0) {
        enemy = new Enemy(dropSheet, 104, 104, 7, 4, 28, width + 100, 0, 52, 52, FLOOR_LEVEL, dropPoly,10, matrizGota)
      }
      if (enemyType === 1) {
        enemy = new Enemy(trollSheet, 400, 400, 6, 5, 28, width + 100, 0, 200, 200, FLOOR_LEVEL, trollPoly,20)
      }

      if (enemyType === 2) {
        enemy = new Enemy(birdSheet, 150, 200, 6, 3, 16, width + 100, random(120,350), 75, 100, FLOOR_LEVEL, birdPoly,15)
      }
      
      if (enemyType === 3) {
        // enemy = new Enemy(birdSheet, 104, 104, 6, 3, 16, character.posX, 0, 75, 100, FLOOR_LEVEL, matrizGota)
      }
      
      if (enemy) {
        enemies.push(enemy)
        delayEn = 0;
      }

    }
  }
}


function createPlatform() {
  delayPlat++;
  if (delayPlat > DELAY_PLAT_MIN) { 
    if ((Math.floor(Math.random() * 100)) === 40 || delayPlat > DELAY_PLAT_MAX) {
      let platform = new Platform(width + 5, 0, random(100,300), 200, scenario.speedL5 + scenario.speedL5 * scenario.speedMultiply )
      platforms.push(platform)
      delayPlat = 0;
    }
  }

}