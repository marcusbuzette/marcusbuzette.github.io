class EnemyWall {
  constructor(enemiesNumber) {
    this.posX = -width
    this.width = width - 100;
    this.enemiesNumber = enemiesNumber;
    this.enemies = [];
    this._createEnemies()
  }
  
  _createEnemies() {
    for (let i = 0; i<this.enemiesNumber; i++) {
      this.enemies.push(new Enemy(dropInvSheet, 104, 104, 7, 4, 28, random(this.posX, this.posX + this.width), i*2, 52, 52, FLOOR_LEVEL, dropPoly,0, matrizGota, 14))
    }
  }
  
  show() {
    this.enemies.forEach((enemy,index) => {
      enemy.gravity();
      enemy.show();
      this.wallMove(enemy);
  
      if (enemy.posY >= height - enemy.floorLevel - enemy.bodyH) {
        enemy.jump(random(5,40));
      }
    })
  }
  
  setEnemiesSpeeds(speed) {
    
    if (speed) {
      this.enemies.forEach(enemy => {
        enemy.setSpeed(speed)
      })
    } else {
      this.enemies.forEach(enemy => {
        enemy.setSpeed(3 * random(-1,1))
      })
    }
  }
  
  setWidth(width) {
    this.width = width
  }
  
  setPosX(posX) {
    this.posX = posX
  }
  
  setEnemiesNumber(number) {
    this.enemiesNumber = number;
    
    for(let i = this.enemies.length; i >  number; i--) {
      this.enemies.pop();
    }
  }
  
  wallMove(enemy) {
    enemy.posX += enemy.speed;
    if (enemy.posX + enemy.bodyW >= this.posX + this.width && enemy.speed > 0) {
      enemy.speed = enemy.speed * -1
    }
    
    if (enemy.posX <= this.posX && enemy.speed < 0) {
      enemy.speed = enemy.speed * -1
    }
  }
}